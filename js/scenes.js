/* Byte by Byte — "Watch it happen": step-by-step animated lessons.

   A scene is a list of short captions plus a frame(stage, i) function that sets how the picture
   looks at step i. CSS transitions make the changes move smoothly, and "flights" carry things
   from one place to another when the learner moves forward. Going back simply redraws an earlier step.

   Every chapter that has a diagram gets an animated version automatically (flowScene / stackScene).
   The hardest ideas get their own hand-made scene below. */
window.BBB = window.BBB || {};

(function () {
  'use strict';

  var REDUCE = false;
  try { REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var P = {
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    prev: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
    replay: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    router: '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    pc: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    tv: '<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    unlock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    key: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    box: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 2.004 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    game: '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>'
  };
  function ic(n) {
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (P[n] || '') + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; });
  }
  function plain(html) { return String(html).replace(/<[^>]*>/g, ''); }
  function sentence(s) { s = String(s).trim(); return /[.!?)]$/.test(plain(s)) ? s : s + '.'; }

  // Tiny helpers used by every scene's frame()
  function all(st, sel) { return st.querySelectorAll(sel); }
  function one(st, sel) { return st.querySelector(sel); }
  function vis(st, sel, on) { all(st, sel).forEach(function (e) { e.classList.toggle('off', !on); }); }
  function cls(st, sel, c, on) { all(st, sel).forEach(function (e) { e.classList.toggle(c, !!on); }); }
  function put(st, sel, html) { all(st, sel).forEach(function (e) { e.innerHTML = html; }); }

  // Count a number up or down smoothly.
  function tween(el, to) {
    var from = +el.getAttribute('data-v') || 0;
    el.setAttribute('data-v', to);
    if (REDUCE || from === to || document.hidden) { el.textContent = to; return; }
    var t0 = null, ms = 500;
    setTimeout(function () { if (+el.getAttribute('data-v') === to) el.textContent = to; }, ms + 120); // always land on the right number
    function stepFn(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(from + (to - from) * e);
      if (k < 1 && el.isConnected) requestAnimationFrame(stepFn);
    }
    requestAnimationFrame(stepFn);
  }

  // Carry a copy of something from one place to another. pairs: [fromSelector, toSelector, delayMs]
  function fly(stage, pairs) {
    if (REDUCE || !pairs) return;
    var sr = stage.getBoundingClientRect();
    pairs.forEach(function (p) {
      var a = one(stage, p[0]), b = one(stage, p[1]);
      if (!a || !b) return;
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      if (!ra.width || !rb.width) return;
      var ghost = b.cloneNode(true);
      ghost.classList.remove('off');
      ghost.classList.add('ghost');
      ghost.removeAttribute('id');
      ghost.style.cssText = 'position:absolute;margin:0;z-index:5;pointer-events:none;' +
        'left:' + (rb.left - sr.left) + 'px;top:' + (rb.top - sr.top) + 'px;width:' + rb.width + 'px;height:' + rb.height + 'px;' +
        'transform:translate(' + (ra.left + ra.width / 2 - rb.left - rb.width / 2) + 'px,' + (ra.top + ra.height / 2 - rb.top - rb.height / 2) + 'px) scale(.92);' +
        'transition:none;opacity:0;';
      stage.appendChild(ghost);
      b.classList.add('landing');
      var delay = p[2] || 0, ms = 760;
      setTimeout(function () {
        if (!ghost.isConnected) return;
        ghost.style.transition = 'transform ' + ms + 'ms cubic-bezier(.3,.7,.2,1), opacity 180ms linear';
        ghost.style.opacity = '1';
        ghost.style.transform = 'translate(0,0) scale(1)';
      }, delay + 30);
      setTimeout(function () {
        if (ghost.isConnected) ghost.remove();
        b.classList.remove('landing');
      }, delay + ms + 80);
    });
  }

  /* ---------- The player ---------- */
  BBB.mountScene = function (el, scene) {
    var steps = scene.steps, n = steps.length;
    var i = 0, timer = null, playing = false, touched = false, pausedByScroll = false;

    el.classList.add('player');
    el.innerHTML =
      '<div class="stage" role="img" aria-label="' + esc(scene.label || 'Animation') + '"></div>' +
      '<p class="caption" aria-live="polite"></p>' +
      '<div class="pl-bar">' +
        '<button type="button" class="pl-btn pl-prev" aria-label="Previous step">' + ic('prev') + '</button>' +
        '<button type="button" class="pl-btn pl-play"></button>' +
        '<button type="button" class="pl-btn pl-next" aria-label="Next step">' + ic('next') + '</button>' +
        '<div class="pl-dots">' + steps.map(function (_, k) { return '<button type="button" aria-label="Go to step ' + (k + 1) + '"></button>'; }).join('') + '</div>' +
        '<span class="pl-count"></span>' +
      '</div>';

    var stage = el.querySelector('.stage');
    var cap = el.querySelector('.caption');
    var playBtn = el.querySelector('.pl-play');
    var prevBtn = el.querySelector('.pl-prev');
    var nextBtn = el.querySelector('.pl-next');
    var dots = el.querySelectorAll('.pl-dots button');
    stage.innerHTML = scene.html;
    if (scene.init) scene.init(stage);

    function paint() {
      dots.forEach(function (d, k) { d.className = k === i ? 'now' : (k < i ? 'past' : ''); });
      el.querySelector('.pl-count').textContent = (i + 1) + ' / ' + n;
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === n - 1;
      var atEnd = i === n - 1 && !playing;
      playBtn.innerHTML = playing ? ic('pause') + '<span>Pause</span>' : (atEnd ? ic('replay') + '<span>Watch again</span>' : ic('play') + '<span>' + (i === 0 ? 'Play' : 'Play') + '</span>');
      playBtn.setAttribute('aria-label', playing ? 'Pause' : (atEnd ? 'Watch again from the start' : 'Play'));
    }
    function dur() {
      var len = cap.textContent.length;
      return Math.max(3600, 1400 + len * 52);
    }
    function go(k, quiet) {
      var prev = i;
      i = Math.max(0, Math.min(n - 1, k));
      all(stage, '.ghost').forEach(function (g) { g.remove(); });
      all(stage, '.landing').forEach(function (g) { g.classList.remove('landing'); });
      try { scene.frame(stage, i, quiet); } catch (e) { if (window.console) console.error(e); }
      if (!quiet && i === prev + 1 && scene.fly && scene.fly[i]) fly(stage, scene.fly[i]);
      cap.innerHTML = steps[i];
      if (!quiet) { cap.classList.remove('swap'); void cap.offsetWidth; cap.classList.add('swap'); }
      paint();
      if (playing) schedule();
    }
    function schedule() {
      clearTimeout(timer);
      if (i >= n - 1) { playing = false; paint(); return; }
      timer = setTimeout(function () { if (el.isConnected && playing) go(i + 1); }, dur());
    }
    function play() { if (i >= n - 1) go(0); playing = true; paint(); schedule(); }
    function pause() { playing = false; clearTimeout(timer); paint(); }

    playBtn.addEventListener('click', function () { touched = true; pausedByScroll = false; if (playing) pause(); else play(); });
    prevBtn.addEventListener('click', function () { touched = true; pause(); go(i - 1); });
    nextBtn.addEventListener('click', function () { touched = true; pause(); go(i + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { touched = true; pause(); go(k, k !== i + 1); }); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { touched = true; pause(); go(i + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { touched = true; pause(); go(i - 1); e.preventDefault(); }
    });

    // Start by itself the first time it is properly on screen, pause when scrolled away.
    if ('IntersectionObserver' in window && !REDUCE) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!el.isConnected) { io.disconnect(); return; }
          if (e.isIntersecting && e.intersectionRatio >= 0.55) {
            if ((!touched && i === 0 && !playing) || pausedByScroll) { pausedByScroll = false; play(); }
          } else if (!e.isIntersecting && playing) { pausedByScroll = true; pause(); }
        });
      }, { threshold: [0, 0.55] });
      io.observe(el);
    }
    // Keep positions right if the size changes (phone turned, window resized).
    if ('ResizeObserver' in window) {
      var lastW = 0;
      new ResizeObserver(function (en) {
        var w = en[0].contentRect.width;
        if (Math.abs(w - lastW) > 2) { lastW = w; try { scene.frame(stage, i, true); } catch (e) {} }
      }).observe(stage);
    }
    go(0, true);
  };

  /* ---------- Automatic animation for any flow diagram ---------- */
  BBB.flowScene = function (d) {
    var items = d.flow;
    var steps = items.map(function (s, k) { return '<b>Step ' + (k + 1) + ': ' + s.t + '.</b> ' + sentence(cap1(s.s)); });
    if (d.loop) steps.push('<b>And again.</b> Then it goes back to step 1 and repeats, over and over.');
    if (d.note) steps.push(d.note);
    var arrow = '<span class="arrow" aria-hidden="true">' + ic('arrow') + '</span>';
    return {
      label: 'Animated diagram: ' + items.map(function (s) { return plain(s.t); }).join(', then '),
      steps: steps,
      html: '<div class="sf"><div class="flow">' + items.map(function (s, k) {
          return (k ? arrow : '') + '<div class="node"><span class="node-n">' + (k + 1) + '</span><strong>' + s.t + '</strong><span>' + s.s + '</span></div>';
        }).join('') + (d.loop ? arrow + '<div class="node again">' + ic('repeat') + '<strong>Repeat</strong></div>' : '') +
        '</div><span class="sf-token" aria-hidden="true"></span></div>',
      frame: function (st, i, quiet) {
        var nodes = all(st, '.node:not(.again)'), arrows = all(st, '.arrow'), again = one(st, '.again');
        var cnt = items.length, onLoop = d.loop && i === cnt, done = i >= cnt;
        nodes.forEach(function (nd, k) {
          nd.classList.toggle('on', k === i);
          nd.classList.toggle('past', k < i || (done && !onLoop));
          nd.classList.toggle('dim', k > i && !done);
        });
        arrows.forEach(function (a, k) { a.classList.toggle('lit', k < i); });
        if (again) { again.classList.toggle('on', onLoop); again.classList.toggle('dim', !onLoop && !done); }
        var target = onLoop ? again : (done ? null : nodes[i]);
        var tok = one(st, '.sf-token');
        if (!target) { tok.classList.add('off'); return; }
        tok.classList.remove('off');
        if (quiet) tok.style.transition = 'none';
        tok.style.transform = 'translate(' + (target.offsetLeft + target.offsetWidth / 2 - 9) + 'px,' + (target.offsetTop - 9) + 'px)';
        if (quiet) { void tok.offsetWidth; tok.style.transition = ''; }
      }
    };
  };
  function cap1(s) { s = String(s); return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------- Automatic animation for any stack diagram ---------- */
  BBB.stackScene = function (d) {
    var items = d.stack, n = items.length;
    if (d.layers) return wrapScene(d);
    var steps = items.map(function (s, k) { return '<b>' + (k + 1) + '. ' + s.t + '.</b> ' + sentence(cap1(s.s)); });
    if (d.note) steps.push(d.note);
    return {
      label: 'Animated diagram: ' + items.map(function (s) { return plain(s.t); }).join(', '),
      steps: steps,
      html: '<div class="stack ss">' + items.map(function (s, k) {
        return '<div class="layer"><span class="layer-n">' + (k + 1) + '</span><div><strong>' + s.t + '</strong><span>' + s.s + '</span></div></div>';
      }).join('') + '</div>',
      frame: function (st, i) {
        all(st, '.layer').forEach(function (l, k) {
          l.classList.toggle('on', k === i);
          l.classList.toggle('past', k < i || i >= n);
          l.classList.toggle('dim', k > i && i < n);
        });
      }
    };
  };

  // Network layers: each layer wraps the data in its own envelope, then it is unwrapped at the other end.
  function wrapScene(d) {
    var items = d.stack, n = items.length;
    var steps = items.map(function (s, k) {
      return '<b>' + s.t + ' layer.</b> ' + sentence(cap1(s.s)) + (k === 0 ? ' This is the message itself.' : ' It wraps everything above in its own envelope, with its own label.');
    });
    steps.push('<b>Sent!</b> At the other end, each layer opens its own envelope, in reverse order, until the app gets the message.');
    if (d.note) steps.push(d.note);
    var nested = '<div class="wb w0"><span>' + items[0].t + ': your message</span></div>';
    for (var k = 1; k < n; k++) nested = '<div class="wb w' + k + '"><span>' + items[k].t + '</span>' + nested + '</div>';
    return {
      label: 'Animated diagram: data being wrapped by each network layer',
      steps: steps,
      html: '<div class="sw2"><div class="stack ss">' + items.map(function (s, k) {
          return '<div class="layer"><span class="layer-n">' + (n - k) + '</span><div><strong>' + s.t + '</strong><span>' + s.s + '</span></div></div>';
        }).join('') + '</div><div class="parcel">' + nested + '</div></div>',
      frame: function (st, i) {
        all(st, '.layer').forEach(function (l, k) {
          l.classList.toggle('on', k === i);
          l.classList.toggle('past', k < i || i >= n);
          l.classList.toggle('dim', k > i && i < n);
        });
        for (var k = 0; k < n; k++) cls(st, '.w' + k, 'shown', k <= i);
        cls(st, '.parcel', 'sent', i >= n);
      }
    };
  }

  /* ================= Hand-made scenes ================= */
  var S = BBB.scenes = {};

  /* ---------- Binary: counting with switches (Part 1, chapter 2) ---------- */
  var BITS = [128, 64, 32, 16, 8, 4, 2, 1];
  S.binary = {
    label: 'Eight switches counting in binary',
    steps: [
      'A computer is full of tiny switches. Each one is either <b>off</b> or <b>on</b>. Here are 8 of them, all switched off.',
      'We write off as <b>0</b> and on as <b>1</b>. Watch the last switch turn on: it now says 1. One switch like this is called a <b>bit</b>.',
      'One switch can only say 0 or 1. To count higher, we use a row of switches and give each one a <b>value</b>. The last one is worth <b>1</b>.',
      'Going left, each switch is worth <b>double</b> the one before it: 1, 2, 4, 8, 16, 32, 64, 128.',
      'To read the number, <b>add up the values of the switches that are on</b>. Only the 1 is on, so the number is <b>1</b>.',
      'Now only the 2 is on. The number is <b>2</b>.',
      'The 2 and the 1 are both on: 2 + 1 = <b>3</b>.',
      'The 4 and the 1 are on: 4 + 1 = <b>5</b>. See? Just add up the ones that are lit.',
      'Any number from 0 to 255 can be made like this. The 64 and the 1 are on: 64 + 1 = <b>65</b>.',
      'Computers agreed on a code where 65 means the capital letter <b>A</b>. So the pattern 01000001 can mean "A". Letters, colours and sounds are all stored as numbers like this.',
      'Switch all 8 on: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = <b>255</b>, the biggest number 8 switches can make. A group of 8 bits is called a <b>byte</b>.'
    ],
    states: [
      { on: [], vals: 0 }, { on: [7], vals: 0, focus: [7] }, { on: [], vals: 1, focus: [7] }, { on: [], vals: 8 },
      { on: [7], vals: 8, num: 1 }, { on: [6], vals: 8, num: 1 }, { on: [6, 7], vals: 8, num: 1 }, { on: [5, 7], vals: 8, num: 1 },
      { on: [1, 7], vals: 8, num: 1 }, { on: [1, 7], vals: 8, num: 1, letter: 1 }, { on: [0, 1, 2, 3, 4, 5, 6, 7], vals: 8, num: 1, byte: 1 }
    ],
    html: '<div class="sb">' +
      '<div class="sb-row">' + BITS.map(function (v, k) {
        return '<div class="sb-bit" data-k="' + k + '"><span class="sb-lamp"></span><span class="sb-sw"><i></i></span><b class="sb-d">0</b><span class="sb-v">' + v + '</span></div>';
      }).join('') + '</div>' +
      '<div class="sb-out"><code class="sb-pat">00000000</code><span class="sb-sum"></span><strong class="sb-num" data-v="0">0</strong></div>' +
      '<div class="sb-tags"><span class="sb-letter">01000001 = 65 = <b>A</b></span><span class="sb-byte">8 bits = 1 byte</span></div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.states[i], on = {};
      s.on.forEach(function (k) { on[k] = 1; });
      all(st, '.sb-bit').forEach(function (b, k) {
        b.classList.toggle('on', !!on[k]);
        b.classList.toggle('focus', !!(s.focus && s.focus.indexOf(k) !== -1));
        b.classList.toggle('val', k >= 8 - s.vals);
        b.style.setProperty('--d', ((7 - k) * 60) + 'ms');
        b.querySelector('.sb-d').textContent = on[k] ? 1 : 0;
      });
      var pat = BITS.map(function (_, k) { return on[k] ? 1 : 0; }).join('');
      var parts = BITS.filter(function (_, k) { return on[k]; });
      var total = parts.reduce(function (a, b) { return a + b; }, 0);
      one(st, '.sb-pat').textContent = pat;
      cls(st, '.sb-out', 'show', !!s.num);
      one(st, '.sb-sum').textContent = parts.length > 1 ? parts.join(' + ') + ' =' : '=';
      tween(one(st, '.sb-num'), s.num ? total : 0);
      cls(st, '.sb-letter', 'show', !!s.letter);
      cls(st, '.sb-byte', 'show', !!s.byte);
    }
  };

  /* ---------- CPU: fetch, decode, execute (Part 1, chapter 3) ---------- */
  S.cpu = {
    label: 'A CPU fetching, decoding and running three instructions',
    steps: [
      'A program is a list of tiny instructions waiting in <b>RAM</b>. This one has three. The CPU will run them in order.',
      '<b>Fetch.</b> The CPU copies the first instruction, LOAD 5, from RAM into its <b>control unit</b>.',
      '<b>Decode.</b> The control unit works out what it means: "put the number 5 into the register". A <b>register</b> is a tiny, super-fast memory box inside the CPU.',
      '<b>Execute.</b> It does it. The register now holds 5. One instruction done!',
      '<b>Fetch</b> again. Instruction 2, ADD 3, comes in from RAM.',
      '<b>Decode and execute.</b> "Add 3 to the register." The <b>ALU</b>, the CPU\'s calculator, works out 5 + 3.',
      'The answer, 8, goes back into the register.',
      'Instruction 3, SHOW, is fetched, decoded and executed: the register\'s number is sent out to the screen.',
      'Fetch, decode, execute. That is all a CPU ever does, but it repeats it <b>billions</b> of times every second.'
    ],
    st: [
      { ins: 0, used: 0, ph: '', reg: 0, alu: '', means: '', scr: '' },
      { ins: 1, used: 1, ph: 'f', reg: 0, alu: '', means: '', scr: '' },
      { ins: 1, used: 1, ph: 'd', reg: 0, alu: '', means: 'Put 5 in the register', scr: '' },
      { ins: 1, used: 1, ph: 'e', reg: 5, alu: '', means: 'Put 5 in the register', scr: '', flash: 1 },
      { ins: 2, used: 2, ph: 'f', reg: 5, alu: '', means: '', scr: '' },
      { ins: 2, used: 2, ph: 'e', reg: 5, alu: '5 + 3', means: 'Add 3 to the register', scr: '' },
      { ins: 2, used: 2, ph: 'e', reg: 8, alu: '5 + 3 = 8', means: 'Add 3 to the register', scr: '', flash: 1 },
      { ins: 3, used: 3, ph: 'e', reg: 8, alu: '', means: 'Show the register', scr: '8' },
      { ins: 0, used: 3, ph: 'all', reg: 8, alu: '', means: '', scr: '8' }
    ],
    fly: { 1: [['#ri1', '#ci1']], 4: [['#ri2', '#ci2']], 7: [['#ri3', '#ci3'], ['.sc-reg b', '.sc-scr b', 450]] },
    html: '<div class="sc">' +
      '<div class="sbox sc-ram"><span class="sbox-h">RAM · the program</span>' +
        '<div class="ins" id="ri1"><i>1</i>LOAD 5</div><div class="ins" id="ri2"><i>2</i>ADD 3</div><div class="ins" id="ri3"><i>3</i>SHOW</div>' +
      '</div>' +
      '<div class="sbox sc-cpu"><span class="sbox-h">' + ic('cpu') + ' CPU</span>' +
        '<div class="sc-ph"><span data-p="f">Fetch</span><span data-p="d">Decode</span><span data-p="e">Execute</span></div>' +
        '<div class="sc-cu"><span class="k">Control unit</span><div class="sc-slot"><div class="ins" id="ci1"><i>1</i>LOAD 5</div><div class="ins" id="ci2"><i>2</i>ADD 3</div><div class="ins" id="ci3"><i>3</i>SHOW</div></div><p class="sc-means"></p></div>' +
        '<div class="sc-two"><div class="sc-alu"><span class="k">ALU</span><b></b></div><div class="sc-reg"><span class="k">Register</span><b>0</b></div></div>' +
      '</div>' +
      '<div class="sbox sc-scr"><span class="sbox-h">' + ic('pc') + ' Screen</span><b></b></div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.st[i];
      for (var k = 1; k <= 3; k++) { cls(st, '#ri' + k, 'used', k <= s.used); vis(st, '#ci' + k, s.ins === k); }
      all(st, '.sc-ph span').forEach(function (p) { p.classList.toggle('on', s.ph === 'all' || p.dataset.p === s.ph); });
      put(st, '.sc-means', s.means);
      cls(st, '.sc-means', 'show', !!s.means);
      put(st, '.sc-alu b', s.alu || '–');
      cls(st, '.sc-alu', 'busy', !!s.alu);
      put(st, '.sc-reg b', s.reg);
      cls(st, '.sc-reg', 'flash', !!s.flash);
      put(st, '.sc-scr b', s.scr || '&nbsp;');
      cls(st, '.sc-scr', 'lit', !!s.scr);
    }
  };

  /* ---------- RAM and storage (Part 1, chapter 4) ---------- */
  function chip(id, icon, label) { return '<span class="chip" id="' + id + '">' + ic(icon) + '<span>' + label + '</span></span>'; }
  S.memory = {
    label: 'Files moving between storage, RAM and the CPU, and a power cut',
    steps: [
      'This is <b>storage</b>: the SSD or hard disk. It is the cupboard where everything you save is kept: your game, your photos, your homework.',
      'You open the game. A copy is carried from storage to <b>RAM</b>, the desk, because RAM is much faster to work from.',
      'The <b>CPU</b> works on what is on the desk, far faster than it could from the cupboard.',
      'You open your homework too. Now two things are on the desk. More RAM means more things can be open at once.',
      'You press <b>Save</b>. Your homework is copied from RAM back into storage.',
      '<b>Power cut!</b> RAM forgets everything the moment the power goes off. The desk is wiped clean.',
      'The power comes back. Storage still has everything, including the homework you saved. That is why you press Save.'
    ],
    st: [
      { ram: [], z: 'store' }, { ram: ['game'], z: 'ram' }, { ram: ['game'], z: 'cpu', busy: 1 },
      { ram: ['game', 'hw'], z: 'ram', busy: 1 }, { ram: ['game', 'hw'], z: 'store', saved: 1, busy: 1 },
      { ram: [], z: 'ram', off: 1, saved: 1 }, { ram: [], z: 'store', saved: 1 }
    ],
    fly: { 1: [['#s-game', '#r-game']], 3: [['#s-hw', '#r-hw']], 4: [['#r-hw', '#s-hw']] },
    html: '<div class="sm">' +
      '<div class="sbox sm-z" data-z="store"><span class="sbox-h">Storage</span><span class="sbox-sub">the cupboard · SSD</span>' +
        '<div class="sm-list">' + chip('s-game', 'game', 'Game') + chip('s-photo', 'image', 'Photos') + chip('s-hw', 'file', 'Homework') + '<span class="sm-saved">' + ic('check') + 'Saved</span></div></div>' +
      '<div class="sbox sm-z" data-z="ram"><span class="sbox-h">RAM</span><span class="sbox-sub">the desk · working space</span>' +
        '<div class="sm-list">' + chip('r-game', 'game', 'Game') + chip('r-hw', 'file', 'Homework') + '</div><span class="sm-empty">Empty</span></div>' +
      '<div class="sbox sm-z" data-z="cpu"><span class="sbox-h">CPU</span><span class="sbox-sub">does the work</span><span class="sm-cpu">' + ic('cpu') + '</span></div>' +
      '<div class="sm-power">' + ic('zap') + '<span></span></div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.st[i];
      vis(st, '#r-game', s.ram.indexOf('game') !== -1);
      vis(st, '#r-hw', s.ram.indexOf('hw') !== -1);
      cls(st, '.sm-empty', 'show', !s.ram.length);
      all(st, '.sm-z').forEach(function (z) { z.classList.toggle('focus', z.dataset.z === s.z); });
      cls(st, '.sm', 'busy', !!s.busy);
      cls(st, '.sm', 'pwr-off', !!s.off);
      cls(st, '.sm-saved', 'show', !!s.saved);
      put(st, '.sm-power span', s.off ? 'Power off' : 'Power on');
    }
  };

  /* ---------- IP and MAC addresses (Part 2, chapter 2) ---------- */
  function dev(id, icon, name, mac, ip, extra) {
    return '<div class="sa-dev" id="' + id + '">' + ic(icon) + '<strong>' + name + '</strong><span class="sa-mac">MAC ' + mac + '</span><span class="sa-ip">IP ' + ip + '</span>' + (extra || '') + '</div>';
  }
  S.address = {
    label: 'A router giving out IP addresses and delivering a message',
    steps: [
      'Three devices at home. Each network adapter was born with a <b>MAC address</b>, like a name. It stays the same wherever it goes.',
      'Your phone joins the Wi-Fi. It has no <b>IP address</b> yet, so it asks the router: "Can I have one?"',
      'The router hands out a free address using <b>DHCP</b>, like a hotel receptionist handing out room numbers: 192.168.1.12.',
      'The PC and the TV got their addresses the same way. Now every device has a name (MAC) and an address (IP).',
      'A message arrives from the internet for <b>192.168.1.7</b>. The router reads the address and delivers it to your PC.',
      'These are <b>private</b> addresses, used only inside the home. Out on the internet, the whole house shares one <b>public</b> address.'
    ],
    st: [
      { ips: [], }, { ips: [], ask: 1 }, { ips: ['phone'], give: 1 }, { ips: ['phone', 'pc', 'tv'] },
      { ips: ['phone', 'pc', 'tv'], letter: 1 }, { ips: ['phone', 'pc', 'tv'], pub: 1 }
    ],
    fly: { 1: [['#d-phone', '.sa-ask']], 2: [['.sa-router', '.sa-give']], 4: [['.sa-net', '.sa-in', 0], ['.sa-in', '.sa-letter', 650]] },
    html: '<div class="sa">' +
      '<div class="sa-top">' +
        '<div class="sbox sa-net">' + ic('globe') + '<span>Internet</span></div>' +
        '<div class="sbox sa-router">' + ic('router') + '<strong>Router</strong><span class="sa-pub">Public address: 203.0.113.25</span>' +
          '<span class="bub sa-ask">"Can I have an address?"</span><span class="bub sa-in">' + ic('mail') + ' For 192.168.1.7</span></div>' +
      '</div>' +
      '<div class="sa-devs">' +
        dev('d-pc', 'pc', 'Your PC', '3C:52:82:1A:9F:07', '192.168.1.7', '<span class="bub sa-letter">' + ic('mail') + ' Delivered!</span>') +
        dev('d-phone', 'phone', 'Phone', '8A:2F:41:C0:11:5D', '192.168.1.12', '<span class="bub sa-give">"Use 192.168.1.12"</span>') +
        dev('d-tv', 'tv', 'TV', '5C:A1:9E:20:7B:33', '192.168.1.15') +
      '</div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.st[i];
      ['pc', 'phone', 'tv'].forEach(function (d) { cls(st, '#d-' + d, 'has-ip', s.ips.indexOf(d) !== -1); });
      vis(st, '.sa-ask', !!s.ask);
      vis(st, '.sa-give', !!s.give);
      vis(st, '.sa-in', false);
      vis(st, '.sa-letter', !!s.letter);
      cls(st, '#d-pc', 'got', !!s.letter);
      cls(st, '#d-phone', 'focus', !!(s.ask || s.give));
      cls(st, '.sa-pub', 'show', !!s.pub);
      cls(st, '.sa-router', 'focus', !!(s.ask || s.pub || s.letter));
    }
  };

  /* ---------- Wi-Fi bands and cables (Part 2, chapter 4) ---------- */
  S.waves = {
    label: 'Wi-Fi waves at 2.4 GHz and 5 GHz meeting a wall, and a cable',
    steps: [
      'Wi-Fi is <b>radio waves</b> spreading out from the router, like ripples on a pond. Between the router and your phone there is a brick wall.',
      '<b>2.4 GHz</b> waves are longer. They travel farther and get through walls better. The phone behind the wall still gets a good signal, but the speed is lower.',
      '<b>5 GHz</b> waves are shorter. They carry more data, but fade sooner, and the wall blocks more of them. Near the router: very fast. Behind the wall: weak.',
      'A <b>cable</b> is a private road for data: no walls and no crowding, so the speed stays the same. That is why gaming PCs and TVs often use one.',
      'Internet speed is counted in <b>bits</b>, but files are counted in <b>bytes</b>. Divide by 8: a 100 Mbps plan downloads about <b>12.5 MB every second</b>.'
    ],
    st: [{ band: '', bars: 2 }, { band: 'b24', bars: 3 }, { band: 'b5', bars: 1 }, { band: 'b24', bars: 3, cable: 1 }, { band: 'b24', bars: 3, cable: 1, math: 1 }],
    html: '<div class="swv">' +
      '<div class="swv-air">' +
        '<div class="swv-router">' + ic('router') + '<span>Router</span><div class="swv-rings"><i></i><i></i><i></i></div></div>' +
        '<div class="swv-wall"><span>Wall</span></div>' +
        '<div class="swv-phone">' + ic('phone') + '<span class="swv-bars"><i></i><i></i><i></i><i></i></span><span class="swv-band"></span></div>' +
      '</div>' +
      '<div class="swv-cable"><span class="swv-end">' + ic('router') + '</span><span class="swv-line"><i></i><i></i><i></i></span><span class="swv-end">' + ic('pc') + '<em>Gaming PC</em></span></div>' +
      '<div class="swv-math">100 Mbps ÷ 8 = <b>12.5 MB per second</b></div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.st[i], root = one(st, '.swv');
      // How far the ripples spread depends on the screen width: 5 GHz fades out at the wall, 2.4 GHz reaches well past the phone.
      var r = one(st, '.swv-router'), w = one(st, '.swv-wall'), ph = one(st, '.swv-phone');
      if (r && w && ph && r.offsetWidth) {
        var cx = r.offsetLeft + r.offsetWidth / 2;
        var toWall = w.offsetLeft - cx, toPhone = ph.offsetLeft + ph.offsetWidth / 2 - cx;
        root.style.setProperty('--r5', Math.round((toWall + 14) * 2) + 'px');
        root.style.setProperty('--r0', Math.round((toWall + 40) * 2) + 'px');
        root.style.setProperty('--r24', Math.round((toPhone + 70) * 2) + 'px');
      }
      root.classList.toggle('b24', s.band === 'b24');
      root.classList.toggle('b5', s.band === 'b5');
      all(st, '.swv-bars i').forEach(function (b, k) { b.classList.toggle('lit', k < s.bars); });
      put(st, '.swv-band', s.band === 'b24' ? '2.4 GHz' : s.band === 'b5' ? '5 GHz' : '');
      cls(st, '.swv-cable', 'show', !!s.cable);
      cls(st, '.swv-math', 'show', !!s.math);
    }
  };

  /* ---------- Packets (Part 2, chapter 5) ---------- */
  var CHUNKS = ['Hi Ar', 'jun! ', 'Ready', ' at 6?'];
  var ROUTE = { 1: 'Mumbai', 2: 'Hyderabad', 3: 'Chennai', 4: 'Hyderabad' };
  var ARRIVE = [3, 1, 4, 2];
  function pk(id, n) { return '<span class="pk" id="' + id + '"><i>#' + n + '</i>' + esc(CHUNKS[n - 1]).replace(/ /g, '&nbsp;') + '</span>'; }
  S.packets = {
    label: 'A message cut into packets travelling through different routers',
    steps: [
      'You type a message for Arjun and press Enter.',
      'Your computer cuts it into small numbered pieces called <b>packets</b>. Each one gets a header: who it is from, who it is for, and its number.',
      'The packets set off separately. <b>Routers</b> pass each one along, one hop at a time. They do not all take the same road.',
      'They reach Arjun\'s laptop in a mixed-up order: 3, 1, 4, 2. Some roads were faster than others.',
      'Arjun\'s laptop uses the numbers to put them back in order. If one were missing, it would ask for just that one again.',
      'The whole message appears on Arjun\'s screen, in well under a second.'
    ],
    fly: {
      1: [1, 2, 3, 4].map(function (n) { return ['.m-from', '#a-' + n, (n - 1) * 120]; }),
      2: [1, 2, 3, 4].map(function (n) { return ['#a-' + n, '#r-' + n, (n - 1) * 160]; }),
      3: ARRIVE.map(function (n, k) { return ['#r-' + n, '#z-' + n, k * 260]; }),
      4: [1, 2, 3, 4].map(function (n) { return ['#z-' + n, '#o-' + n, (n - 1) * 120]; }),
      5: [['#o-2', '.m-to']]
    },
    html: '<div class="sp">' +
      '<div class="sbox sp-col"><span class="sbox-h">' + ic('pc') + ' You</span>' +
        '<div class="sp-cell"><span class="sp-msg m-from">Hi Arjun! Ready at 6?</span>' +
        '<div class="sp-list">' + [1, 2, 3, 4].map(function (n) { return pk('a-' + n, n); }).join('') + '</div></div></div>' +
      '<div class="sp-net">' + ['Mumbai', 'Hyderabad', 'Chennai'].map(function (city) {
          return '<div class="sbox sp-router"><span class="sbox-h">' + ic('router') + ' ' + city + '</span><div class="sp-list">' +
            [1, 2, 3, 4].filter(function (n) { return ROUTE[n] === city; }).map(function (n) { return pk('r-' + n, n); }).join('') + '</div></div>';
        }).join('') + '</div>' +
      '<div class="sbox sp-col"><span class="sbox-h">' + ic('laptop') + ' Arjun</span>' +
        '<div class="sp-cell"><div class="sp-list sp-arrive">' + ARRIVE.map(function (n) { return pk('z-' + n, n); }).join('') + '</div>' +
        '<div class="sp-list sp-sorted">' + [1, 2, 3, 4].map(function (n) { return pk('o-' + n, n); }).join('') + '</div></div>' +
        '<span class="sp-msg m-to">Hi Arjun! Ready at 6?</span></div>' +
    '</div>',
    frame: function (st, i) {
      vis(st, '.m-from', i === 0);
      vis(st, '[id^="a-"]', i === 1);
      vis(st, '[id^="r-"]', i === 2);
      vis(st, '[id^="z-"]', i === 3);
      vis(st, '[id^="o-"]', i === 4 || i === 5);
      vis(st, '.m-to', i === 5);
      all(st, '.sp-router').forEach(function (r) { r.classList.toggle('busy', i === 2); });
    }
  };

  /* ---------- Public and private keys (Part 6, chapter 2) ---------- */
  S.keys = {
    label: 'Sending a message locked with a public padlock that only a private key can open',
    steps: [
      'Arjun has a matching pair: a <b>padlock</b> he can give to anyone (the public key) and the <b>only key</b> that opens it (the private key). Someone in the middle is watching everything sent.',
      'Arjun sends you an <b>open padlock</b>. It does not matter that the watcher sees it: a padlock can lock things, but it cannot open them.',
      'You put your message in a box and snap Arjun\'s padlock shut. Now even you cannot open it.',
      'The locked box travels across the network. The watcher can copy it, but without the key it is just scrambled nonsense.',
      'The box reaches Arjun.',
      'Only Arjun\'s private key, which never left his room, can open it. This is <b>asymmetric encryption</b>: one key locks, a different key unlocks.',
      'HTTPS works like this. The two sides use a padlock-and-key pair to agree on one shared secret key, then use that faster <b>symmetric</b> key for everything else.'
    ],
    st: [
      { padA: 1, letter: 1 }, { padA: 1, padR: 1, letter: 1 }, { padA: 1, boxR: 1 }, { padA: 1, boxM: 1, fail: 1 },
      { padA: 1, boxA: 1 }, { padA: 1, open: 1, keyUse: 1 }, { padA: 1, open: 1, https: 1 }
    ],
    fly: { 1: [['#k-padA', '#k-padR']], 2: [['#k-letter', '#k-boxR'], ['#k-padR', '#k-boxR', 100]], 3: [['#k-boxR', '#k-boxM']], 4: [['#k-boxM', '#k-boxA']], 5: [['#k-key', '#k-open']] },
    html: '<div class="sk">' +
      '<div class="sbox sk-col"><span class="sbox-h">You</span>' +
        '<span class="sk-it" id="k-letter">' + ic('mail') + '<em>Message</em></span>' +
        '<span class="sk-it" id="k-padR">' + ic('unlock') + '<em>Arjun\'s padlock</em></span>' +
        '<span class="sk-it locked" id="k-boxR">' + ic('box') + ic('lock') + '<em>Locked box</em></span></div>' +
      '<div class="sbox sk-mid"><span class="sbox-h">' + ic('eye') + ' Watcher</span>' +
        '<span class="sk-it locked" id="k-boxM">' + ic('box') + ic('lock') + '<em>Locked box</em></span>' +
        '<span class="sk-fail">' + ic('x') + 'Can\'t open it</span></div>' +
      '<div class="sbox sk-col"><span class="sbox-h">Arjun</span>' +
        '<span class="sk-it" id="k-padA">' + ic('unlock') + '<em>Public padlock</em></span>' +
        '<span class="sk-it key" id="k-key">' + ic('key') + '<em>Private key</em></span>' +
        '<span class="sk-it locked" id="k-boxA">' + ic('box') + ic('lock') + '<em>Locked box</em></span>' +
        '<span class="sk-it open" id="k-open">' + ic('mail') + '<em>"Hi Arjun!"</em></span></div>' +
      '<div class="sk-https">' + ic('lock') + ' HTTPS: padlock and key to agree a shared key, then fast symmetric encryption</div>' +
    '</div>',
    frame: function (st, i) {
      var s = this.st[i];
      vis(st, '#k-letter', !!s.letter);
      vis(st, '#k-padR', !!s.padR);
      vis(st, '#k-boxR', !!s.boxR);
      vis(st, '#k-boxM', !!s.boxM);
      vis(st, '.sk-fail', !!s.fail);
      vis(st, '#k-boxA', !!s.boxA);
      vis(st, '#k-open', !!s.open);
      cls(st, '#k-key', 'use', !!s.keyUse);
      cls(st, '.sk-https', 'show', !!s.https);
    }
  };
})();
