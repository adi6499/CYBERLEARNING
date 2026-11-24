/* Byte by Byte — the "Try it yourself" activities.
   Each toy is a function that builds itself inside the element it is given.
   The app wraps every call in try/catch, so a broken toy can never stop a chapter from showing. */
window.BBB = window.BBB || {};

BBB.toys = (function () {
  'use strict';

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  // Timers tied to a toy: they quietly do nothing once the toy has left the page.
  function later(el, fn, ms) {
    var id = setTimeout(function () { if (el.isConnected) fn(); }, reduceMotion ? Math.min(ms, 40) : ms);
    (el._timers || (el._timers = [])).push(id);
    return id;
  }
  function clearTimers(el) {
    (el._timers || []).forEach(clearTimeout);
    el._timers = [];
  }

  var ICON_RESET = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';

  /* ---------- 1. Binary switches ---------- */
  function binary(el) {
    var vals = [128, 64, 32, 16, 8, 4, 2, 1];
    var bits = [0, 0, 0, 0, 0, 0, 0, 0];
    var goals = [
      { n: 5, label: 'Make 5' },
      { n: 10, label: 'Make 10' },
      { n: 65, label: 'Make 65 (the letter A)' },
      { n: 255, label: 'Make 255 (everything on)' }
    ];
    var met = {};

    el.innerHTML =
      '<p class="toy-intro">Each switch is one bit. Tap a switch to turn it on or off and watch the number change. The number above each switch is what it is worth when it is on.</p>' +
      '<div class="bits" role="group" aria-label="Eight bit switches">' +
      vals.map(function (v, i) {
        return '<button type="button" class="bit" data-i="' + i + '" aria-pressed="false" aria-label="Switch worth ' + v + '">' +
          '<span class="bit-val">' + v + '</span><span class="bit-state">0</span></button>';
      }).join('') +
      '</div>' +
      '<div class="readout" aria-live="polite">' +
      '<div><span class="k">Binary</span><code class="bin-code"></code></div>' +
      '<div><span class="k">Number</span><strong class="bin-num"></strong></div>' +
      '<div><span class="k">As a letter</span><strong class="bin-chr"></strong></div>' +
      '</div>' +
      '<p class="bin-sum"></p>' +
      '<div class="goals"><span class="k">Challenges</span>' +
      goals.map(function (g, i) { return '<span class="goal" data-g="' + i + '">' + g.label + '</span>'; }).join('') +
      '</div>' +
      '<button type="button" class="btn btn-secondary btn-sm bin-reset">' + ICON_RESET + ' All off</button>';

    function update() {
      var n = 0, on = [];
      bits.forEach(function (b, i) { if (b) { n += vals[i]; on.push(vals[i]); } });
      el.querySelectorAll('.bit').forEach(function (btn, i) {
        btn.classList.toggle('on', !!bits[i]);
        btn.setAttribute('aria-pressed', bits[i] ? 'true' : 'false');
        btn.querySelector('.bit-state').textContent = bits[i];
      });
      el.querySelector('.bin-code').textContent = bits.join('');
      el.querySelector('.bin-num').textContent = n;
      var chr;
      if (n === 32) chr = '(a space)';
      else if (n > 32 && n < 127) chr = '\u201C' + String.fromCharCode(n) + '\u201D';
      else chr = '(no letter for this number)';
      el.querySelector('.bin-chr').textContent = chr;
      el.querySelector('.bin-sum').textContent = on.length ? on.join(' + ') + ' = ' + n : 'All switches are off, so the number is 0.';
      goals.forEach(function (g, i) {
        if (g.n === n) met[i] = true;
        var chip = el.querySelector('[data-g="' + i + '"]');
        chip.classList.toggle('met', !!met[i]);
        chip.classList.toggle('now', g.n === n);
      });
    }

    el.querySelector('.bits').addEventListener('click', function (e) {
      var btn = e.target.closest('.bit');
      if (!btn) return;
      var i = +btn.dataset.i;
      bits[i] = bits[i] ? 0 : 1;
      update();
    });
    el.querySelector('.bin-reset').addEventListener('click', function () {
      bits = [0, 0, 0, 0, 0, 0, 0, 0];
      update();
    });
    update();
  }

  /* ---------- 2. Find the parts inside a PC ---------- */
  function pcparts(el) {
    var PARTS = {
      board: { short: 'Motherboard', name: 'Motherboard', job: 'The main circuit board. Every other part plugs into it, and its thin copper lines carry data between them.', city: 'the city and its roads' },
      cpu:   { short: 'CPU', name: 'CPU and its cooler', job: 'The processor carries out every instruction. The heatsink and fan on top stop it from overheating.', city: 'the town hall' },
      ram:   { short: 'RAM', name: 'RAM sticks', job: 'Fast, temporary memory for whatever is open right now. It forgets everything when the power goes off.', city: 'the workshop desks' },
      ssd:   { short: 'SSD', name: 'M.2 SSD', job: 'A fast storage drive about the size of a stick of gum. Holds the operating system and your files.', city: 'the warehouse' },
      gpu:   { short: 'GPU', name: 'Graphics card (GPU)', job: 'Draws everything you see on the screen. It has its own fans and its own memory, called VRAM.', city: 'the art studio' },
      ports: { short: 'Ports', name: 'Ports on the back panel', job: 'USB, HDMI, Ethernet and audio sockets, where cables from the outside world plug in.', city: 'the city gates' },
      fans:  { short: 'Fans', name: 'Case fans', job: 'Pull cool air in at the front and push hot air out at the back, so heat doesn\'t build up.', city: 'the breeze through the streets' },
      psu:   { short: 'Power supply', name: 'Power supply (PSU)', job: 'Turns 230 V from the wall socket into the low, steady voltages every part needs.', city: 'the power station' },
      hdd:   { short: 'Hard disk', name: 'Hard disk (HDD)', job: 'Big, cheaper storage on spinning disks. Slower than an SSD, but good for keeping lots of photos and videos.', city: 'the old library' }
    };
    var total = Object.keys(PARTS).length;
    var found = {};

    function part(key, cls) {
      return '<button type="button" class="pc-part ' + cls + '" data-p="' + key + '" aria-label="Unknown part. Tap to find out."><span class="pc-label">?</span></button>';
    }

    el.innerHTML =
      '<p class="toy-intro">This is the inside of a desktop PC, seen from the side. Every <b>?</b> is a part. Tap each one to find out what it is. Can you find all ' + total + '?</p>' +
      '<div class="pc" role="group" aria-label="Inside of a PC">' +
        '<div class="pc-board">' +
          part('board', 'p-boardbg') +
          part('ports', 'p-ports') +
          part('cpu', 'p-cpu') +
          part('ram', 'p-ram') +
          part('ssd', 'p-ssd') +
          part('gpu', 'p-gpu') +
        '</div>' +
        part('fans', 'p-fans') +
        part('psu', 'p-psu') +
        part('hdd', 'p-hdd') +
      '</div>' +
      '<div class="toy-panel pc-info" aria-live="polite"><p class="muted">Tap a part to see what it does.</p></div>' +
      '<p class="pc-count"><strong>0</strong> of ' + total + ' found</p>';

    el.querySelector('.pc').addEventListener('click', function (e) {
      var btn = e.target.closest('.pc-part');
      if (!btn) return;
      var key = btn.dataset.p, p = PARTS[key];
      found[key] = true;
      btn.classList.add('found');
      btn.querySelector('.pc-label').textContent = p.short;
      btn.setAttribute('aria-label', p.name);
      el.querySelectorAll('.pc-part.active').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var n = Object.keys(found).length;
      el.querySelector('.pc-info').innerHTML =
        '<h4>' + p.name + '</h4><p>' + p.job + '</p><p class="muted">In our city, this is ' + p.city + '.</p>' +
        (n === total ? '<p class="ok-text"><b>You found every part.</b> You can now name everything inside a PC.</p>' : '');
      el.querySelector('.pc-count strong').textContent = n;
    });
  }

  /* ---------- 3. Put the build steps in order ---------- */
  function buildorder(el) {
    var STEPS = [
      { id: 'cpu',    t: 'Put the CPU in its socket', r: 1, hint: 'The CPU goes onto the bare motherboard first, while nothing is in the way.' },
      { id: 'ram',    t: 'Click the RAM sticks into their slots', r: 2, hint: 'The RAM goes onto the motherboard, but the CPU comes first.' },
      { id: 'ssd',    t: 'Fit the M.2 SSD onto the board', r: 2, hint: 'The SSD goes onto the motherboard, but the CPU comes first.' },
      { id: 'cooler', t: 'Thermal paste, then the CPU cooler', r: 3, hint: 'The cooler sits on top of the CPU and can cover the RAM slots. Fit the small parts first.' },
      { id: 'board',  t: 'Screw the motherboard into the case', r: 4, hint: 'Finish everything that goes onto the bare board first. It\'s much easier outside the case.' },
      { id: 'psu',    t: 'Mount the power supply in the case', r: 4, hint: 'Get the motherboard parts done first, then start filling the case.' },
      { id: 'gpu',    t: 'Push the graphics card into its slot', r: 5, hint: 'The graphics card plugs into the motherboard, so the board must already be in the case.' },
      { id: 'cables', t: 'Connect all the power cables', r: 6, hint: 'Cables join the parts together, so every part needs to be in place first.' },
      { id: 'os',     t: 'Switch on and install the OS', r: 7, hint: 'Never switch on before everything is connected!' }
    ];
    var left, done;

    el.innerHTML =
      '<p class="toy-intro">All the parts are on the table. Tap the steps in the order you would do them. Where two steps could go either way, both are accepted.</p>' +
      '<div class="build">' +
        '<div class="build-col"><h4>On the table</h4><div class="build-pool"></div></div>' +
        '<div class="build-col"><h4>Your build</h4><ol class="build-done"></ol></div>' +
      '</div>' +
      '<p class="toy-msg build-msg" aria-live="polite"></p>' +
      '<button type="button" class="btn btn-secondary btn-sm build-reset">' + ICON_RESET + ' Start again</button>';

    function shuffle(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }

    function reset() {
      left = shuffle(STEPS.slice());
      if (left[0].r === 1) left.push(left.shift()); // don't start with the answer on top
      done = [];
      render();
      setMsg('', '');
    }

    function setMsg(text, kind) {
      var m = el.querySelector('.build-msg');
      m.textContent = text;
      m.className = 'toy-msg build-msg' + (kind ? ' ' + kind : '');
    }

    function render() {
      el.querySelector('.build-pool').innerHTML = left.map(function (s) {
        return '<button type="button" class="chip-btn" data-s="' + s.id + '">' + s.t + '</button>';
      }).join('') || '<p class="muted">The table is empty.</p>';
      el.querySelector('.build-done').innerHTML = done.map(function (s) { return '<li>' + s.t + '</li>'; }).join('') ||
        '<li class="placeholder">Your first step goes here</li>';
    }

    el.querySelector('.build-pool').addEventListener('click', function (e) {
      var btn = e.target.closest('.chip-btn');
      if (!btn) return;
      var step = STEPS.filter(function (s) { return s.id === btn.dataset.s; })[0];
      var lowest = Math.min.apply(null, left.map(function (s) { return s.r; }));
      if (step.r === lowest) {
        left = left.filter(function (s) { return s !== step; });
        done.push(step);
        render();
        if (!left.length) setMsg('Build complete! The fans spin, the screen lights up, and it boots first time.', 'ok');
        else setMsg('Good. What comes next?', '');
      } else {
        setMsg('Not yet. ' + step.hint, 'bad');
        btn.classList.remove('shake');
        void btn.offsetWidth; // restart the animation
        btn.classList.add('shake');
      }
    });
    el.querySelector('.build-reset').addEventListener('click', reset);
    reset();
  }

  /* ---------- 4. IP address checker ---------- */
  function ipcheck(el) {
    var tries = ['192.168.1.7', '8.8.8.8', '256.1.1.1', '127.0.0.1', '169.254.10.5', '10.0.0.1', '192.168.1'];

    el.innerHTML =
      '<p class="toy-intro">Type any IPv4 address, or tap one of the examples. The checker tells you if it\'s valid and what kind of address it is.</p>' +
      '<label class="field"><span class="k">IP address</span><input type="text" class="ip-in" inputmode="decimal" autocomplete="off" spellcheck="false" value="192.168.1.7" aria-label="IP address to check"></label>' +
      '<div class="chips">' + tries.map(function (t) { return '<button type="button" class="chip-btn small" data-ip="' + t + '">' + t + '</button>'; }).join('') + '</div>' +
      '<div class="toy-panel ip-out" aria-live="polite"></div>';

    function classify(p) {
      var a = p[0], b = p[1];
      if (a === 127) return ['Loopback', 'This always means "this computer itself". Its nickname is localhost.'];
      if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return ['Private', 'Used inside a home, school or office network. It never appears directly on the internet.'];
      if (a === 169 && b === 254) return ['Self-assigned', 'The device gave itself this address because it couldn\'t get one from the router. Usually a sign of trouble.'];
      if (a === 100 && b >= 64 && b <= 127) return ['Shared (CGNAT)', 'Some internet providers use these to share one public address between many customers.'];
      if (p.join('.') === '0.0.0.0') return ['Special', 'Means "no address yet" or "any address". Not given to a normal device.'];
      if (p.join('.') === '255.255.255.255') return ['Broadcast', 'A message sent to this address goes to every device on the local network.'];
      if (a >= 224 && a <= 239) return ['Multicast', 'Used to send one stream to many chosen listeners at once.'];
      if (a >= 240) return ['Reserved', 'Set aside and not used for normal devices.'];
      if (a === 0) return ['Special', 'Addresses starting with 0 are not used for normal devices.'];
      return ['Public', 'A real address out on the internet, like the one your router gets from your ISP.'];
    }

    function check() {
      var raw = el.querySelector('.ip-in').value.trim();
      var out = el.querySelector('.ip-out');
      if (!raw) { out.innerHTML = '<p class="muted">Type an address above.</p>'; return; }
      if (raw.indexOf(':') !== -1) {
        out.innerHTML = '<p><b>That looks like an IPv6 address.</b> This checker only checks IPv4 (the four-number kind).</p>';
        return;
      }
      var parts = raw.split('.');
      var problem = '';
      if (parts.length !== 4) problem = 'An IPv4 address needs exactly <b>four</b> numbers separated by dots. This one has ' + parts.length + '.';
      else {
        for (var i = 0; i < 4; i++) {
          if (!/^\d{1,3}$/.test(parts[i])) { problem = '"' + esc(parts[i] || '(empty)') + '" isn\'t allowed. Each part must be a number from 0 to 255.'; break; }
          if (+parts[i] > 255) { problem = '<b>' + esc(parts[i]) + '</b> is too big. Each number must be between 0 and 255.'; break; }
        }
      }
      if (problem) {
        out.innerHTML = '<p class="bad-text"><b>Not valid.</b></p><p>' + problem + '</p>';
        return;
      }
      var nums = parts.map(Number);
      var kind = classify(nums);
      out.innerHTML = '<p class="ok-text"><b>Valid IPv4 address</b></p><p><span class="tag">' + kind[0] + '</span> ' + kind[1] + '</p>';
    }

    el.querySelector('.ip-in').addEventListener('input', check);
    el.querySelector('.chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-ip]');
      if (!b) return;
      el.querySelector('.ip-in').value = b.dataset.ip;
      check();
    });
    check();
  }

  /* ---------- 5. Send a message as packets ---------- */
  function packet(el) {
    var CITIES = ['Mumbai', 'Hyderabad', 'Chennai', 'Nagpur'];
    var SIZE = 6;

    el.innerHTML =
      '<p class="toy-intro">Type a message for Arjun and press <b>Send</b>. Watch it get cut into packets, travel by different routes, arrive mixed up, and get put back together.</p>' +
      '<div class="send-row">' +
        '<label class="field grow"><span class="k">Message</span><input type="text" class="pk-in" maxlength="60" value="Hi Arjun! Ready at 6?" aria-label="Message to send"></label>' +
        '<button type="button" class="btn btn-primary pk-send">Send</button>' +
      '</div>' +
      '<label class="check"><input type="checkbox" class="pk-lose"> Lose one packet on the way</label>' +
      '<div class="pk-stage" aria-live="polite"></div>';

    function card(p, extra) {
      return '<div class="pkt ' + (extra || '') + '"><span class="pkt-h">#' + p.n + ' of ' + p.of + (p.via ? ' · via ' + p.via : '') + '</span>' +
        '<span class="pkt-b">' + esc(p.text) + '</span></div>';
    }

    function send() {
      clearTimers(el);
      var msg = el.querySelector('.pk-in').value || 'Hello!';
      var chars = Array.from(msg);
      var packets = [];
      for (var i = 0; i < chars.length; i += SIZE) packets.push({ text: chars.slice(i, i + SIZE).join('') });
      packets.forEach(function (p, i) {
        p.n = i + 1; p.of = packets.length;
        p.via = CITIES[Math.floor(Math.random() * CITIES.length)];
      });
      var lose = el.querySelector('.pk-lose').checked && packets.length > 1;
      var lostIndex = lose ? 1 + Math.floor(Math.random() * (packets.length - 1)) : -1;

      // Arrival order: shuffled, but never exactly in order when there are 3 or more.
      var order = packets.slice();
      for (var k = order.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1)), t = order[k]; order[k] = order[j]; order[j] = t;
      }
      if (order.length > 2 && order.every(function (p, i) { return p.n === i + 1; })) order.push(order.shift());

      var stage = el.querySelector('.pk-stage');
      stage.innerHTML =
        '<div class="pk-step"><h4>1. Cut into packets</h4><div class="pkts">' +
          packets.map(function (p) { return card({ n: p.n, of: p.of, text: p.text }); }).join('') + '</div>' +
          '<p class="muted small">Each packet gets a header: from Riya (192.168.1.7) to Arjun, plus its number.</p></div>' +
        '<div class="pk-step"><h4>2. Arriving at Arjun\'s laptop</h4><div class="pkts pk-arrive"></div><p class="toy-msg pk-note"></p></div>' +
        '<div class="pk-step pk-final" hidden><h4>3. Put back in order</h4><div class="pkts pk-sorted"></div>' +
          '<div class="pk-bubble"><span class="avatar arjun" aria-hidden="true">A</span><p class="pk-msg"></p></div></div>';

      var arrive = stage.querySelector('.pk-arrive');
      var note = stage.querySelector('.pk-note');
      var t = 300;
      order.forEach(function (p) {
        later(el, function () {
          if (p.n === lostIndex + 1) arrive.insertAdjacentHTML('beforeend', '<div class="pkt lost"><span class="pkt-h">#' + p.n + ' of ' + p.of + '</span><span class="pkt-b">lost on the way</span></div>');
          else arrive.insertAdjacentHTML('beforeend', card(p, 'pop'));
        }, t);
        t += 450;
      });

      function finish() {
        later(el, function () {
          note.className = 'toy-msg pk-note ok';
          note.textContent = 'Every packet has arrived, but in the wrong order. The numbers in the headers fix that.';
        }, t);
        t += 900;
        later(el, function () {
          var fin = stage.querySelector('.pk-final');
          fin.hidden = false;
          fin.querySelector('.pk-sorted').innerHTML = packets.map(function (p) { return card({ n: p.n, of: p.of, text: p.text }, 'pop'); }).join('');
          fin.querySelector('.pk-msg').textContent = msg;
        }, t);
      }

      if (lostIndex >= 0) {
        later(el, function () {
          note.className = 'toy-msg pk-note bad';
          note.textContent = 'Packet ' + (lostIndex + 1) + ' is missing! Arjun\'s laptop asks Riya\'s PC to send it again...';
        }, t);
        t += 1200;
        later(el, function () {
          var lostEl = arrive.querySelector('.pkt.lost');
          if (lostEl) lostEl.outerHTML = card(packets[lostIndex], 'pop resent');
        }, t);
        t += 600;
      }
      finish();
    }

    el.querySelector('.pk-send').addEventListener('click', send);
    el.querySelector('.pk-in').addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });
  }

  /* ---------- 6. Watch a DNS lookup ---------- */
  function dns(el) {
    var cache = {};
    var examples = ['wikipedia.org', 'youtube.com', 'example.com', 'myschool.edu.in'];
    var SECOND = ['co', 'com', 'edu', 'gov', 'ac', 'org', 'net', 'res', 'nic'];

    el.innerHTML =
      '<p class="toy-intro">Type a website name and press <b>Look it up</b> to watch DNS find its address, step by step. Then look up the same name again.</p>' +
      '<div class="send-row">' +
        '<label class="field grow"><span class="k">Website name</span><input type="text" class="dns-in" value="wikipedia.org" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="Website name"></label>' +
        '<button type="button" class="btn btn-primary dns-go">Look it up</button>' +
      '</div>' +
      '<div class="chips">' + examples.map(function (x) { return '<button type="button" class="chip-btn small" data-d="' + x + '">' + x + '</button>'; }).join('') + '</div>' +
      '<ol class="dns-steps" aria-live="polite"></ol>' +
      '<p class="muted small">These are practice addresses (203.0.113.x), set aside for examples. A real lookup returns the real address.</p>' +
      '<button type="button" class="btn btn-secondary btn-sm dns-clear">' + ICON_RESET + ' Empty the cache</button>';

    function clean(v) {
      return v.trim().toLowerCase().replace(/^[a-z]+:\/\//, '').replace(/\/.*$/, '').replace(/\.$/, '');
    }
    function fakeIp(name) {
      var h = 0;
      for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
      return '203.0.113.' + (10 + (h % 240));
    }
    function zoneOf(name) {
      var parts = name.split('.');
      var tld = parts[parts.length - 1];
      var take = (tld.length === 2 && parts.length > 2 && SECOND.indexOf(parts[parts.length - 2]) !== -1) ? 3 : 2;
      return parts.slice(-take).join('.');
    }

    function row(who, said, cls) {
      return '<li class="dns-step pop ' + (cls || '') + '"><span class="dns-who">' + who + '</span><span class="dns-said">' + said + '</span></li>';
    }

    function go() {
      clearTimers(el);
      var name = clean(el.querySelector('.dns-in').value);
      var list = el.querySelector('.dns-steps');
      list.innerHTML = '';
      if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(name)) {
        list.innerHTML = row('Checker', 'A website name needs at least one dot, like <b>name.com</b>, and only letters, numbers and hyphens.', 'bad');
        return;
      }
      var ip = fakeIp(name);
      if (cache[name]) {
        list.innerHTML = row('Your PC', 'I looked up <b>' + esc(name) + '</b> a moment ago. It\'s in my cache: <b>' + ip + '</b>. Instant!', 'ok');
        return;
      }
      var tld = name.split('.').pop();
      var zone = zoneOf(name);
      var steps = [
        ['Your PC', 'Do I already know <b>' + esc(name) + '</b>? Not in my cache. I\'ll ask the resolver.'],
        ['DNS resolver (your ISP)', 'I don\'t know it either. Let me find out for you.'],
        ['Root server', 'I don\'t know that name, but the <b>.' + esc(tld) + '</b> servers know who to ask.'],
        ['.' + esc(tld) + ' server', 'Ask the name server that looks after <b>' + esc(zone) + '</b>.'],
        [esc(zone) + ' name server', '<b>' + esc(name) + '</b> is at <b>' + ip + '</b>.'],
        ['DNS resolver (your ISP)', 'Here you go: <b>' + ip + '</b>. I\'ll remember it for a while too.'],
        ['Your PC', 'Got it. Connecting to <b>' + ip + '</b>... and saving it in my cache.']
      ];
      steps.forEach(function (s, i) {
        later(el, function () {
          list.insertAdjacentHTML('beforeend', row(s[0], s[1], i === steps.length - 1 ? 'ok' : ''));
          if (i === steps.length - 1) cache[name] = true;
        }, 250 + i * 650);
      });
    }

    el.querySelector('.dns-go').addEventListener('click', go);
    el.querySelector('.dns-in').addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    el.querySelector('.chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-d]');
      if (!b) return;
      el.querySelector('.dns-in').value = b.dataset.d;
      go();
    });
    el.querySelector('.dns-clear').addEventListener('click', function () {
      cache = {};
      clearTimers(el);
      el.querySelector('.dns-steps').innerHTML = '<li class="dns-step pop"><span class="dns-who">Your PC</span><span class="dns-said">Cache emptied. I\'ve forgotten every address.</span></li>';
    });
  }

  /* ---------- 7. Practice terminal + mystery mode ---------- */
  function terminal(el) {
    var ME = '192.168.1.7', GW = '192.168.1.1';
    var MYSTERIES = [
      { id: 'unplugged', label: 'The cable is unplugged', why: 'ipconfig says "Media disconnected": the PC isn\'t connected to anything at all. Plug the cable back in.' },
      { id: 'nodhcp', label: 'No address from the router', why: 'ipconfig shows a 169.254 address and no default gateway. The PC is connected, but the router never gave it an address. Restart the router, or check its DHCP setting.' },
      { id: 'dns', label: 'DNS isn\'t working', why: 'Pinging 8.8.8.8 works, so the internet is fine. But names like google.com can\'t be found. That\'s a DNS problem: try a different DNS server.' }
    ];
    var mode = 'practice', scenario = 'ok', solved = false;
    var history = [], hIndex = -1;

    el.innerHTML =
      '<div class="seg" role="tablist" aria-label="Terminal mode">' +
        '<button type="button" role="tab" class="seg-btn active" data-mode="practice" aria-selected="true">Practice</button>' +
        '<button type="button" role="tab" class="seg-btn" data-mode="mystery" aria-selected="false">Solve a mystery</button>' +
      '</div>' +
      '<p class="toy-intro term-intro"></p>' +
      '<div class="term" role="region" aria-label="Practice command prompt">' +
        '<div class="term-bar"><span></span><span></span><span></span><em>Command Prompt (practice)</em></div>' +
        '<pre class="term-out" aria-live="polite"></pre>' +
        '<form class="term-line" autocomplete="off"><label class="term-prompt" for="termIn">C:\\Users\\Riya&gt;</label>' +
          '<input id="termIn" class="term-in" type="text" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Type a command"></form>' +
      '</div>' +
      '<div class="chips term-chips"></div>' +
      '<div class="mystery" hidden>' +
        '<h4>What\'s wrong?</h4>' +
        '<div class="chips mystery-answers">' + MYSTERIES.map(function (m) { return '<button type="button" class="chip-btn" data-a="' + m.id + '">' + m.label + '</button>'; }).join('') + '</div>' +
        '<p class="toy-msg mystery-msg" aria-live="polite"></p>' +
        '<button type="button" class="btn btn-secondary btn-sm mystery-new">' + ICON_RESET + ' New mystery</button>' +
      '</div>';

    var out = el.querySelector('.term-out');
    var input = el.querySelector('.term-in');
    var CHIPS = ['ipconfig', 'ping ' + GW, 'ping 8.8.8.8', 'ping google.com', 'nslookup google.com', 'tracert google.com', 'help', 'cls'];
    el.querySelector('.term-chips').innerHTML = CHIPS.map(function (c) { return '<button type="button" class="chip-btn small mono" data-c="' + c + '">' + c + '</button>'; }).join('');

    function print(text, cls) {
      var span = document.createElement('span');
      if (cls) span.className = cls;
      span.textContent = text + '\n';
      out.appendChild(span);
      out.scrollTop = out.scrollHeight;
    }

    function isIp(s) { return /^\d{1,3}(\.\d{1,3}){3}$/.test(s); }
    function nameIp(name) {
      var h = 0;
      for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
      return '203.0.113.' + (10 + (h % 240));
    }
    function canResolve() { return scenario === 'ok'; }
    function online() { return scenario === 'ok' || scenario === 'dns'; }

    var CMDS = {
      help: function () {
        print('Commands you can try:');
        print('  ipconfig            show this PC\'s address and router');
        print('  ping <address>      check if something answers, e.g. ping 8.8.8.8');
        print('  tracert <address>   list every hop on the way there');
        print('  nslookup <name>     ask DNS for a name\'s address');
        print('  cls                 clear the screen');
      },
      ipconfig: function () {
        print('Windows IP Configuration');
        print('');
        print('Ethernet adapter Ethernet:');
        print('');
        if (scenario === 'unplugged') {
          print('   Media State . . . . . . . . . . . : Media disconnected');
          return;
        }
        if (scenario === 'nodhcp') {
          print('   Autoconfiguration IPv4 Address. . : 169.254.37.112');
          print('   Subnet Mask . . . . . . . . . . . : 255.255.0.0');
          print('   Default Gateway . . . . . . . . . :');
          return;
        }
        print('   IPv4 Address. . . . . . . . . . . : ' + ME);
        print('   Subnet Mask . . . . . . . . . . . : 255.255.255.0');
        print('   Default Gateway . . . . . . . . . : ' + GW);
      },
      ping: function (arg) {
        if (!arg) { print('Usage: ping <name or address>    e.g.  ping 8.8.8.8'); return; }
        var target = arg, ip = arg;
        if (!isIp(arg)) {
          if (!canResolve()) {
            print('Ping request could not find host ' + arg + '. Please check the name and try again.');
            return;
          }
          ip = nameIp(arg.toLowerCase());
          target = arg + ' [' + ip + ']';
        }
        print('');
        print('Pinging ' + target + ' with 32 bytes of data:');
        var local = ip === GW || ip === ME || ip === '127.0.0.1';
        for (var i = 0; i < 4; i++) {
          if (ip === '127.0.0.1') print('Reply from 127.0.0.1: bytes=32 time<1ms TTL=128');
          else if (scenario === 'unplugged') print('PING: transmit failed. General failure.');
          else if (scenario === 'nodhcp') print('Reply from 169.254.37.112: Destination host unreachable.');
          else if (local) print('Reply from ' + ip + ': bytes=32 time<1ms TTL=' + (ip === GW ? 64 : 128));
          else print('Reply from ' + ip + ': bytes=32 time=' + (11 + ((i * 7) % 6)) + 'ms TTL=117');
        }
        print('');
        var ok = (online() && scenario !== 'nodhcp') || ip === '127.0.0.1';
        print('Ping statistics for ' + ip + ':');
        print('    Packets: Sent = 4, Received = ' + (ok ? 4 : (scenario === 'nodhcp' ? 4 : 0)) + ', Lost = ' + (ok || scenario === 'nodhcp' ? '0 (0%' : '4 (100%') + ' loss),');
        if (ok) print('    Every reply came back. This address is reachable.', 'dim');
        else print('    No real answer came back. This address is NOT reachable.', 'dim');
      },
      tracert: function (arg) {
        if (!arg) { print('Usage: tracert <name or address>    e.g.  tracert google.com'); return; }
        var ip = arg, label = arg;
        if (!isIp(arg)) {
          if (!canResolve()) { print('Unable to resolve target system name ' + arg + '.'); return; }
          ip = nameIp(arg.toLowerCase());
          label = arg + ' [' + ip + ']';
        }
        print('');
        print('Tracing route to ' + label);
        print('over a maximum of 30 hops:');
        print('');
        if (scenario === 'unplugged') { print('  1     General failure.'); print(''); print('Trace complete.'); return; }
        if (scenario === 'nodhcp') { print('  1  169.254.37.112  reports: Destination host unreachable.'); print(''); print('Trace complete.'); return; }
        if (ip === GW) { print('  1    <1 ms    <1 ms    <1 ms  ' + GW); print(''); print('Trace complete.'); return; }
        print('  1    <1 ms    <1 ms    <1 ms  ' + GW);
        print('  2     4 ms     3 ms     4 ms  10.120.0.1');
        print('  3     9 ms     8 ms     9 ms  198.51.100.17');
        print('  4    13 ms    14 ms    13 ms  ' + ip);
        print('');
        print('Trace complete.');
        print('  Hop 1 is your router. Hop 2 is your ISP. The last hop is where you were going.', 'dim');
      },
      nslookup: function (arg) {
        if (!arg) { print('Usage: nslookup <name>    e.g.  nslookup google.com'); return; }
        if (scenario === 'unplugged' || scenario === 'nodhcp') {
          print('*** Default servers are not available');
          print('Server:  UnKnown');
          print('Address:  127.0.0.1');
          print('');
          print('*** UnKnown can\'t find ' + arg + ': No response from server');
          return;
        }
        if (scenario === 'dns') {
          print('DNS request timed out.');
          print('    timeout was 2 seconds.');
          print('Server:  UnKnown');
          print('Address:  ' + GW);
          print('');
          print('*** Request to UnKnown timed-out');
          return;
        }
        if (isIp(arg)) { print('Server:  router.home'); print('Address:  ' + GW); print(''); print('*** router.home can\'t find ' + arg + ': Non-existent domain'); return; }
        print('Server:  router.home');
        print('Address:  ' + GW);
        print('');
        print('Non-authoritative answer:');
        print('Name:    ' + arg.toLowerCase());
        print('Address:  ' + nameIp(arg.toLowerCase()));
      },
      cls: function () { out.textContent = ''; },
      clear: function () { out.textContent = ''; }
    };

    function run(line) {
      line = line.trim();
      print('C:\\Users\\Riya>' + line, 'cmd');
      if (!line) return;
      history.push(line); hIndex = history.length;
      var parts = line.split(/\s+/);
      var cmd = parts[0].toLowerCase();
      var arg = parts.slice(1).join(' ');
      if (CMDS[cmd]) CMDS[cmd](arg);
      else {
        print('\'' + parts[0] + '\' is not recognized as an internal or external command,');
        print('operable program or batch file.');
        print('  Type help to see the commands you can practise.', 'dim');
      }
      print('');
    }

    function welcome() {
      out.textContent = '';
      if (mode === 'practice') {
        print('Practice Command Prompt. Everything on this network is working.', 'dim');
        print('Type a command and press Enter, or tap one of the buttons below.', 'dim');
      } else {
        print('MYSTERY: Riya says "the internet is broken". Something IS wrong.', 'dim');
        print('Run commands to collect clues, then choose your answer below.', 'dim');
      }
      print('');
    }

    function setMode(m) {
      mode = m;
      el.querySelectorAll('.seg-btn').forEach(function (b) {
        var on = b.dataset.mode === m;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      el.querySelector('.term-intro').innerHTML = m === 'practice'
        ? 'This is a pretend Command Prompt where nothing can break. Try the commands from this chapter and read what they say.'
        : 'A mystery problem has been hidden in this network. Work outward like a detective: <b>ipconfig</b> first, then <b>ping</b> the router, then <b>ping 8.8.8.8</b>, then a name.';
      el.querySelector('.mystery').hidden = m !== 'mystery';
      if (m === 'mystery') newMystery(); else { scenario = 'ok'; welcome(); }
    }

    function newMystery() {
      var prev = scenario;
      var pick;
      do { pick = MYSTERIES[Math.floor(Math.random() * MYSTERIES.length)].id; } while (pick === prev && MYSTERIES.length > 1);
      scenario = pick;
      solved = false;
      var msg = el.querySelector('.mystery-msg');
      msg.textContent = ''; msg.className = 'toy-msg mystery-msg';
      el.querySelectorAll('.mystery-answers .chip-btn').forEach(function (b) { b.classList.remove('right', 'wrong'); b.disabled = false; });
      welcome();
    }

    el.querySelector('.term-line').addEventListener('submit', function (e) {
      e.preventDefault();
      run(input.value);
      input.value = '';
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp' && history.length) { hIndex = Math.max(0, hIndex - 1); input.value = history[hIndex]; e.preventDefault(); }
      if (e.key === 'ArrowDown' && history.length) { hIndex = Math.min(history.length, hIndex + 1); input.value = history[hIndex] || ''; e.preventDefault(); }
    });
    el.querySelector('.term-chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-c]');
      if (b) run(b.dataset.c);
    });
    el.querySelector('.term').addEventListener('click', function (e) {
      if (!e.target.closest('input') && !window.getSelection().toString()) input.focus({ preventScroll: true });
    });
    el.querySelector('.seg').addEventListener('click', function (e) {
      var b = e.target.closest('[data-mode]');
      if (b && b.dataset.mode !== mode) setMode(b.dataset.mode);
    });
    el.querySelector('.mystery-answers').addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]');
      if (!b || solved) return;
      var msg = el.querySelector('.mystery-msg');
      if (b.dataset.a === scenario) {
        solved = true;
        b.classList.add('right');
        var m = MYSTERIES.filter(function (x) { return x.id === scenario; })[0];
        msg.className = 'toy-msg mystery-msg ok';
        msg.innerHTML = '<b>Case solved!</b> ' + m.why;
      } else {
        b.classList.add('wrong');
        b.disabled = true;
        msg.className = 'toy-msg mystery-msg bad';
        msg.textContent = 'Not quite. Run another command and look for a different clue.';
      }
    });
    el.querySelector('.mystery-new').addEventListener('click', newMystery);

    setMode('practice');
  }

  return { binary: binary, pcparts: pcparts, buildorder: buildorder, ipcheck: ipcheck, packet: packet, dns: dns, terminal: terminal };
})();
