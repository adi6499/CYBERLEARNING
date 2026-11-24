/* Byte by Byte — activities for Parts 3 to 6.
   Adds to BBB.toys (made in toys.js). Each toy builds itself inside the element it is given,
   and the app wraps every call in try/catch so a broken toy never stops a chapter. */
window.BBB = window.BBB || {};
BBB.toys = BBB.toys || {};

(function (T) {
  'use strict';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  var ICON_RESET = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';
  function pad(s, n) { s = String(s); while (s.length < n) s = '0' + s; return s; }

  /* ---------- Logic gates ---------- */
  T.gates = function (el) {
    var GATES = {
      AND:  { f: function (a, b) { return a & b; }, rule: 'Output is 1 only when A <b>and</b> B are both 1.' },
      OR:   { f: function (a, b) { return a | b; }, rule: 'Output is 1 when A <b>or</b> B (or both) is 1.' },
      NOT:  { f: function (a) { return a ? 0 : 1; }, rule: 'Only one input. The output is the <b>opposite</b> of A.', one: true },
      NAND: { f: function (a, b) { return (a & b) ? 0 : 1; }, rule: '"Not AND": the opposite of AND. Output is 0 only when both are 1.' },
      NOR:  { f: function (a, b) { return (a | b) ? 0 : 1; }, rule: '"Not OR": the opposite of OR. Output is 1 only when both are 0.' },
      XOR:  { f: function (a, b) { return a ^ b; }, rule: '"Exclusive OR": output is 1 when the inputs are <b>different</b>.' },
      XNOR: { f: function (a, b) { return (a ^ b) ? 0 : 1; }, rule: 'The opposite of XOR: output is 1 when the inputs are the <b>same</b>.' }
    };
    var gate = 'AND', A = 0, B = 0;

    el.innerHTML =
      '<p class="toy-intro">Pick a gate, then tap the inputs A and B to switch them between 0 and 1. The lamp shows the output, and the matching row of the truth table lights up.</p>' +
      '<div class="seg seg-wrap" role="tablist" aria-label="Choose a gate">' + Object.keys(GATES).map(function (g) {
        return '<button type="button" role="tab" class="seg-btn" data-g="' + g + '">' + g + '</button>';
      }).join('') + '</div>' +
      '<div class="gate-row">' +
        '<div class="gate-ins">' +
          '<button type="button" class="gate-in" data-in="A" aria-pressed="false"><span class="k">Input A</span><strong>0</strong></button>' +
          '<button type="button" class="gate-in" data-in="B" aria-pressed="false"><span class="k">Input B</span><strong>0</strong></button>' +
        '</div>' +
        '<div class="gate-box"><strong class="gate-name">AND</strong><span class="muted small">gate</span></div>' +
        '<div class="gate-out"><span class="lamp" aria-hidden="true"></span><span class="k">Output</span><strong class="gate-val">0</strong></div>' +
      '</div>' +
      '<p class="gate-rule"></p>' +
      '<div class="table-wrap truth"><table><thead><tr></tr></thead><tbody></tbody></table></div>';

    function paint() {
      var g = GATES[gate];
      var out = g.one ? g.f(A) : g.f(A, B);
      el.querySelectorAll('.seg-btn').forEach(function (b) {
        var on = b.dataset.g === gate;
        b.classList.toggle('active', on); b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      var bBtn = el.querySelector('[data-in="B"]');
      bBtn.hidden = !!g.one;
      el.querySelectorAll('.gate-in').forEach(function (b) {
        var v = b.dataset.in === 'A' ? A : B;
        b.classList.toggle('on', !!v);
        b.setAttribute('aria-pressed', v ? 'true' : 'false');
        b.querySelector('strong').textContent = v;
      });
      el.querySelector('.gate-name').textContent = gate;
      el.querySelector('.gate-val').textContent = out;
      el.querySelector('.gate-out').classList.toggle('on', !!out);
      el.querySelector('.gate-rule').innerHTML = g.rule;
      var rows = g.one ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
      el.querySelector('.truth thead tr').innerHTML = (g.one ? '<th>A</th>' : '<th>A</th><th>B</th>') + '<th>Output</th>';
      el.querySelector('.truth tbody').innerHTML = rows.map(function (r) {
        var o = g.one ? g.f(r[0]) : g.f(r[0], r[1]);
        var now = r[0] === A && (g.one || r[1] === B);
        return '<tr class="' + (now ? 'now' : '') + '">' + r.map(function (x) { return '<td>' + x + '</td>'; }).join('') + '<td><b>' + o + '</b></td></tr>';
      }).join('');
    }

    el.querySelector('.seg').addEventListener('click', function (e) {
      var b = e.target.closest('[data-g]'); if (!b) return;
      gate = b.dataset.g; paint();
    });
    el.querySelector('.gate-ins').addEventListener('click', function (e) {
      var b = e.target.closest('[data-in]'); if (!b) return;
      if (b.dataset.in === 'A') A = A ? 0 : 1; else B = B ? 0 : 1;
      paint();
    });
    paint();
  };

  /* ---------- Hexadecimal + colour mixer ---------- */
  T.hex = function (el) {
    var HEX = '0123456789ABCDEF';
    el.innerHTML =
      '<p class="toy-intro">Move the slider (or type a number from 0 to 255). Every byte can be written three ways. Notice how each hex digit stands for exactly four bits.</p>' +
      '<label class="field"><span class="k">Number (0 to 255)</span><input type="number" class="hx-num" min="0" max="255" value="175" inputmode="numeric"></label>' +
      '<input type="range" class="hx-range" min="0" max="255" value="175" aria-label="Number from 0 to 255">' +
      '<div class="readout">' +
        '<div><span class="k">Decimal</span><strong class="hx-dec"></strong></div>' +
        '<div><span class="k">Binary</span><code class="hx-bin"></code></div>' +
        '<div><span class="k">Hex</span><strong class="hx-hex"></strong></div>' +
      '</div>' +
      '<p class="hx-explain muted"></p>' +
      '<h4 class="mt">Mix a colour</h4>' +
      '<p class="toy-intro">Screens make every colour from red, green and blue light, each a number from 0 to 255. Web colour codes are just those three numbers in hex.</p>' +
      '<div class="mixer">' +
        '<div class="swatch" aria-hidden="true"></div>' +
        '<div class="sliders">' + ['Red', 'Green', 'Blue'].map(function (c, i) {
          return '<label class="mix-row"><span>' + c + '</span><input type="range" min="0" max="255" value="' + [255, 136, 0][i] + '" data-c="' + i + '" aria-label="' + c + '"><code class="mix-v"></code></label>';
        }).join('') + '</div>' +
      '</div>' +
      '<p class="mix-code">Colour code: <code class="mix-out"></code></p>';

    function hex2(n) { return HEX[n >> 4] + HEX[n & 15]; }
    function setNum(n) {
      n = Math.max(0, Math.min(255, Math.round(+n || 0)));
      var bin = pad(n.toString(2), 8);
      el.querySelector('.hx-dec').textContent = n;
      el.querySelector('.hx-bin').textContent = bin.slice(0, 4) + ' ' + bin.slice(4);
      el.querySelector('.hx-hex').textContent = '0x' + hex2(n);
      el.querySelector('.hx-explain').innerHTML = '<code>' + bin.slice(0, 4) + '</code> = ' + (n >> 4) + ' = <b>' + HEX[n >> 4] + '</b>, and <code>' + bin.slice(4) + '</code> = ' + (n & 15) + ' = <b>' + HEX[n & 15] + '</b>. So ' + n + ' is <b>' + hex2(n) + '</b> in hex.';
      return n;
    }
    var num = el.querySelector('.hx-num'), range = el.querySelector('.hx-range');
    num.addEventListener('input', function () { if (num.value === '') return; range.value = setNum(num.value); });
    num.addEventListener('change', function () { var n = setNum(num.value); num.value = n; range.value = n; });
    range.addEventListener('input', function () { num.value = setNum(range.value); });
    setNum(175);

    function mix() {
      var v = Array.prototype.map.call(el.querySelectorAll('.mix-row input'), function (i) { return +i.value; });
      el.querySelectorAll('.mix-v').forEach(function (c, i) { c.textContent = v[i] + ' = ' + hex2(v[i]); });
      var code = '#' + v.map(hex2).join('');
      el.querySelector('.swatch').style.background = code;
      el.querySelector('.mix-out').textContent = code;
    }
    el.querySelector('.sliders').addEventListener('input', mix);
    mix();
  };

  /* ---------- RAID ---------- */
  T.raid = function (el) {
    var LEVELS = {
      0:  { name: 'RAID 0', disks: [['A1', 'B1', 'C1'], ['A2', 'B2', 'C2']], usable: '2 of 2 disks (100%)', speed: 'Fastest: two disks work at once.',
            ok: function (f) { return f.length === 0; }, why: 'RAID 0 splits every file across both disks. Lose one disk and every file is missing half its pieces.' },
      1:  { name: 'RAID 1', disks: [['A', 'B', 'C'], ['A', 'B', 'C']], usable: '1 of 2 disks (50%)', speed: 'Normal writing speed, reads can be a little faster.',
            ok: function (f) { return f.length < 2; }, why: 'RAID 1 keeps an exact copy on each disk. Data is lost only if both disks die.' },
      5:  { name: 'RAID 5', disks: [['A1', 'B1', 'Cp'], ['A2', 'Bp', 'C1'], ['Ap', 'B2', 'C2']], usable: '2 of 3 disks (67%)', speed: 'Fast reads; writes are slower because parity must be worked out.',
            ok: function (f) { return f.length < 2; }, why: 'RAID 5 spreads "parity" (p) across the disks: extra maths that can rebuild any one missing disk. Two failures are too many.' },
      10: { name: 'RAID 10', disks: [['A1', 'B1'], ['A1', 'B1'], ['A2', 'B2'], ['A2', 'B2']], pairs: [[0, 1], [2, 3]], usable: '2 of 4 disks (50%)', speed: 'Fast, and safe: mirrors that are then striped.',
            ok: function (f, lv) { return !lv.pairs.some(function (p) { return f.indexOf(p[0]) !== -1 && f.indexOf(p[1]) !== -1; }); },
            why: 'RAID 10 is pairs of mirrored disks. It survives one failure in each pair, but not both disks of the same pair.' }
    };
    var level = 1, failed = [];

    el.innerHTML =
      '<p class="toy-intro">Pick a RAID level. Then tap a disk to make it fail (tap again to replace it). Does the data survive?</p>' +
      '<div class="seg" role="tablist" aria-label="RAID level">' + [0, 1, 5, 10].map(function (l) {
        return '<button type="button" role="tab" class="seg-btn" data-l="' + l + '">RAID ' + l + '</button>';
      }).join('') + '</div>' +
      '<div class="disks"></div>' +
      '<div class="toy-panel raid-out" aria-live="polite"></div>' +
      '<p class="muted small">A, B, C are pieces of your files. "p" is parity. Remember: RAID keeps working when a disk dies, but it is <b>not a backup</b>. Deleting a file or ransomware hits every disk at once.</p>';

    function paint() {
      var lv = LEVELS[level];
      el.querySelectorAll('[data-l]').forEach(function (b) {
        var on = +b.dataset.l === level; b.classList.toggle('active', on); b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      el.querySelector('.disks').innerHTML = lv.disks.map(function (blocks, i) {
        var dead = failed.indexOf(i) !== -1;
        return '<button type="button" class="disk ' + (dead ? 'dead' : '') + '" data-d="' + i + '" aria-label="Disk ' + (i + 1) + (dead ? ', failed' : ', working') + '">' +
          '<span class="disk-h">Disk ' + (i + 1) + '</span>' +
          blocks.map(function (b) { return '<span class="blk ' + (/p$/.test(b) ? 'par' : '') + '">' + b + '</span>'; }).join('') +
          '<span class="disk-s">' + (dead ? 'Failed' : 'Working') + '</span></button>';
      }).join('');
      var safe = lv.ok(failed, lv);
      el.querySelector('.raid-out').innerHTML =
        '<p class="' + (safe ? 'ok-text' : 'bad-text') + '"><b>' + (safe ? (failed.length ? 'Data survived!' : 'All disks working. Data is safe.') : 'Data lost!') + '</b></p>' +
        '<p>' + lv.why + '</p>' +
        '<p class="muted small">Usable space: ' + lv.usable + '. ' + lv.speed + '</p>';
    }
    el.querySelector('.seg').addEventListener('click', function (e) {
      var b = e.target.closest('[data-l]'); if (!b) return;
      level = +b.dataset.l; failed = []; paint();
    });
    el.querySelector('.disks').addEventListener('click', function (e) {
      var b = e.target.closest('[data-d]'); if (!b) return;
      var i = +b.dataset.d, k = failed.indexOf(i);
      if (k === -1) failed.push(i); else failed.splice(k, 1);
      paint();
    });
    paint();
  };

  /* ---------- Pretend Linux terminal ---------- */
  T.shell = function (el) {
    var HOME = '/home/student';
    var fs, cwd, done;
    var TASKS = [
      { id: 'pwd', t: 'Find out where you are: <code>pwd</code>' },
      { id: 'ls', t: 'List what is here: <code>ls</code>' },
      { id: 'cd', t: 'Go into Documents: <code>cd Documents</code>' },
      { id: 'cat', t: 'Read a file: <code>cat notes.txt</code>' },
      { id: 'up', t: 'Go back up one level: <code>cd ..</code>' },
      { id: 'mkdir', t: 'Make a folder: <code>mkdir exams</code>' },
      { id: 'touch', t: 'Make a file inside it: <code>touch exams/maths.txt</code>' },
      { id: 'rm', t: 'Delete that file: <code>rm exams/maths.txt</code>' }
    ];

    function fresh() {
      return { type: 'dir', kids: {
        home: { type: 'dir', kids: {
          student: { type: 'dir', kids: {
            'readme.txt': { type: 'file', text: 'Welcome to the lab PC! This is a practice terminal. Type help for commands.' },
            Documents: { type: 'dir', kids: {
              'notes.txt': { type: 'file', text: 'Lab to-do: clean dust, update Windows, check backups, label every cable.' },
              'timetable.txt': { type: 'file', text: 'Mon: Maths  Tue: Science  Wed: Computers  Thu: English  Fri: Lab day' }
            } },
            Pictures: { type: 'dir', kids: { 'robot.jpg': { type: 'file', text: '(this is a picture, it can\'t be shown as text)' } } },
            projects: { type: 'dir', kids: { 'plant-water.ino': { type: 'file', text: 'if (soil < 300) { pumpOn(); } else { pumpOff(); }' } } }
          } }
        } },
        etc: { type: 'dir', kids: { hostname: { type: 'file', text: 'lab-pc-07' } } },
        tmp: { type: 'dir', kids: {} }
      } };
    }

    el.innerHTML =
      '<p class="toy-intro">A pretend Linux terminal with pretend files. Nothing on your computer is touched. Try the tasks below, or type <code>help</code>.</p>' +
      '<div class="term" role="region" aria-label="Practice Linux terminal">' +
        '<div class="term-bar"><span></span><span></span><span></span><em>student@lab-pc-07 (practice)</em></div>' +
        '<pre class="term-out" aria-live="polite"></pre>' +
        '<form class="term-line" autocomplete="off"><label class="term-prompt sh-prompt" for="shIn"></label>' +
          '<input id="shIn" class="term-in" type="text" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Type a command"></form>' +
      '</div>' +
      '<ol class="tasks"></ol>' +
      '<button type="button" class="btn btn-secondary btn-sm sh-reset">' + ICON_RESET + ' Start again</button>';

    var out = el.querySelector('.term-out'), input = el.querySelector('.term-in');
    var history = [], hi = 0;

    function print(t, cls) {
      var s = document.createElement('span'); if (cls) s.className = cls; s.textContent = t + '\n';
      out.appendChild(s); out.scrollTop = out.scrollHeight;
    }
    function short(p) { return p === HOME ? '~' : (p.indexOf(HOME + '/') === 0 ? '~' + p.slice(HOME.length) : p); }
    function prompt() { return 'student@lab:' + short(cwd) + '$'; }
    function paintPrompt() { el.querySelector('.sh-prompt').textContent = prompt(); }
    function resolve(p) {
      if (!p || p === '~') return HOME;
      var parts = (p[0] === '/' ? p : (p.indexOf('~/') === 0 ? HOME + p.slice(1) : cwd + '/' + p)).split('/');
      var stack = [];
      parts.forEach(function (x) { if (!x || x === '.') return; if (x === '..') stack.pop(); else stack.push(x); });
      return '/' + stack.join('/');
    }
    function node(path) {
      var n = fs;
      var parts = path.split('/').filter(Boolean);
      for (var i = 0; i < parts.length; i++) { if (!n || n.type !== 'dir') return null; n = n.kids[parts[i]]; }
      return n || null;
    }
    function parentOf(path) { var i = path.lastIndexOf('/'); return { dir: path.slice(0, i) || '/', name: path.slice(i + 1) }; }
    function tick(id) {
      if (done[id]) return;
      done[id] = true; paintTasks();
      if (TASKS.every(function (t) { return done[t.id]; })) print('All tasks done! You can move around Linux like a technician.', 'ok');
    }
    function paintTasks() {
      el.querySelector('.tasks').innerHTML = TASKS.map(function (t) { return '<li class="' + (done[t.id] ? 'done' : '') + '">' + t.t + '</li>'; }).join('');
    }

    var CMDS = {
      help: function () {
        ['Commands you can try:',
         '  pwd              show where you are',
         '  ls [folder]      list files and folders',
         '  cd <folder>      move into a folder (cd .. goes up, cd ~ goes home)',
         '  cat <file>       show what is inside a file',
         '  mkdir <name>     make a new folder',
         '  touch <name>     make a new empty file',
         '  rm <file>        delete a file (rm -r <folder> deletes a folder)',
         '  echo <text>      print some text',
         '  whoami           show your user name',
         '  clear            clear the screen'].forEach(function (l) { print(l); });
      },
      pwd: function () { print(cwd); tick('pwd'); },
      whoami: function () { print('student'); },
      echo: function (a) { print(a.join(' ')); },
      clear: function () { out.textContent = ''; },
      ls: function (a) {
        var target = resolve(a.filter(function (x) { return x[0] !== '-'; })[0] || '.');
        var n = node(target);
        if (!n) { print('ls: cannot access \'' + (a[0] || '.') + '\': No such file or directory'); return; }
        if (n.type === 'file') { print(parentOf(target).name); return; }
        var names = Object.keys(n.kids).sort();
        if (!names.length) { print('(empty folder)', 'dim'); }
        else print(names.map(function (k) { return n.kids[k].type === 'dir' ? k + '/' : k; }).join('   '));
        if (target === HOME || target === cwd) tick('ls');
      },
      cd: function (a) {
        var target = resolve(a[0] || '~');
        var n = node(target);
        if (!n) { print('cd: ' + a[0] + ': No such file or directory'); return; }
        if (n.type !== 'dir') { print('cd: ' + a[0] + ': Not a directory'); return; }
        var wasDocs = cwd === HOME + '/Documents';
        cwd = target; paintPrompt();
        if (cwd === HOME + '/Documents') tick('cd');
        if (wasDocs && a[0] === '..') tick('up');
      },
      cat: function (a) {
        if (!a[0]) { print('cat: missing file name'); return; }
        var n = node(resolve(a[0]));
        if (!n) { print('cat: ' + a[0] + ': No such file or directory'); return; }
        if (n.type === 'dir') { print('cat: ' + a[0] + ': Is a directory'); return; }
        print(n.text || '');
        if (/notes\.txt$/.test(a[0])) tick('cat');
      },
      mkdir: function (a) {
        if (!a[0]) { print('mkdir: missing folder name'); return; }
        var p = parentOf(resolve(a[0])), dir = node(p.dir);
        if (!dir || dir.type !== 'dir') { print('mkdir: cannot create directory \'' + a[0] + '\': No such file or directory'); return; }
        if (dir.kids[p.name]) { print('mkdir: cannot create directory \'' + a[0] + '\': File exists'); return; }
        dir.kids[p.name] = { type: 'dir', kids: {} };
        if (p.name === 'exams') tick('mkdir');
      },
      touch: function (a) {
        if (!a[0]) { print('touch: missing file name'); return; }
        var p = parentOf(resolve(a[0])), dir = node(p.dir);
        if (!dir || dir.type !== 'dir') { print('touch: cannot touch \'' + a[0] + '\': No such file or directory'); return; }
        if (!dir.kids[p.name]) dir.kids[p.name] = { type: 'file', text: '' };
        if (/exams\/maths\.txt$/.test(resolve(a[0]))) tick('touch');
      },
      rm: function (a) {
        var rec = a.indexOf('-r') !== -1 || a.indexOf('-rf') !== -1;
        var name = a.filter(function (x) { return x[0] !== '-'; })[0];
        if (!name) { print('rm: missing operand'); return; }
        var full = resolve(name), p = parentOf(full), dir = node(p.dir), n = node(full);
        if (!n) { print('rm: cannot remove \'' + name + '\': No such file or directory'); return; }
        if (full === '/' || full === HOME || cwd.indexOf(full) === 0) { print('rm: refusing to remove \'' + name + '\' in this practice terminal'); return; }
        if (n.type === 'dir' && !rec) { print('rm: cannot remove \'' + name + '\': Is a directory  (use rm -r for folders)'); return; }
        delete dir.kids[p.name];
        print('Deleted. There is no Recycle Bin here: it is gone for good.', 'dim');
        if (/exams\/maths\.txt$/.test(full)) tick('rm');
      },
      sudo: function () { print('In this practice terminal you are already allowed to do everything in your home folder.', 'dim'); }
    };

    function run(line) {
      line = line.trim();
      print(prompt() + ' ' + line, 'cmd');
      if (!line) return;
      history.push(line); hi = history.length;
      var parts = line.split(/\s+/), cmd = parts[0];
      if (CMDS[cmd]) CMDS[cmd](parts.slice(1));
      else if (CMDS[cmd.toLowerCase()]) print(cmd + ': command not found. Linux cares about capital letters: try ' + cmd.toLowerCase());
      else if (/^(dir|cls|copy|del|type)$/i.test(cmd)) print(cmd + ': command not found. That is a Windows command. Type help for the Linux ones.');
      else print(cmd + ': command not found. Type help to see the commands.');
    }
    function reset() {
      fs = fresh(); cwd = HOME; done = {}; out.textContent = '';
      print('Practice Linux terminal. Type help, or follow the tasks below.', 'dim');
      paintPrompt(); paintTasks();
    }

    el.querySelector('.term-line').addEventListener('submit', function (e) { e.preventDefault(); run(input.value); input.value = ''; });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp' && history.length) { hi = Math.max(0, hi - 1); input.value = history[hi]; e.preventDefault(); }
      if (e.key === 'ArrowDown' && history.length) { hi = Math.min(history.length, hi + 1); input.value = history[hi] || ''; e.preventDefault(); }
      if (e.key === 'Tab') {
        var words = input.value.split(' '), last = words[words.length - 1];
        var base = last.lastIndexOf('/') !== -1 ? last.slice(0, last.lastIndexOf('/') + 1) : '';
        var dir = node(resolve(base || '.'));
        if (dir && dir.type === 'dir') {
          var start = last.slice(base.length);
          var hits = Object.keys(dir.kids).filter(function (k) { return k.indexOf(start) === 0; });
          if (hits.length === 1) { words[words.length - 1] = base + hits[0] + (dir.kids[hits[0]].type === 'dir' ? '/' : ''); input.value = words.join(' '); }
        }
        e.preventDefault();
      }
    });
    el.querySelector('.term').addEventListener('click', function (e) {
      if (!e.target.closest('input') && !window.getSelection().toString()) input.focus({ preventScroll: true });
    });
    el.querySelector('.sh-reset').addEventListener('click', reset);
    reset();
  };

  /* ---------- Wire an Ethernet cable ---------- */
  T.cable = function (el) {
    var COLORS = {
      'white-orange': ['#ffffff', '#f08a24'], 'orange': ['#f08a24'],
      'white-green': ['#ffffff', '#2e9e4f'], 'green': ['#2e9e4f'],
      'white-blue': ['#ffffff', '#2f6fd6'], 'blue': ['#2f6fd6'],
      'white-brown': ['#ffffff', '#8a5a3c'], 'brown': ['#8a5a3c']
    };
    var ORDER = {
      T568B: ['white-orange', 'orange', 'white-green', 'blue', 'white-blue', 'green', 'white-brown', 'brown'],
      T568A: ['white-green', 'green', 'white-orange', 'blue', 'white-blue', 'orange', 'white-brown', 'brown']
    };
    var std = 'T568B', placed, pool;

    el.innerHTML =
      '<p class="toy-intro">Hold the RJ45 plug with the gold pins facing you and the cable hanging down (the clip is at the back). Pin 1 is on the left. Tap the wires in order, pin 1 to pin 8.</p>' +
      '<div class="seg" role="tablist" aria-label="Wiring standard">' +
        '<button type="button" role="tab" class="seg-btn" data-s="T568B">T568B (most common)</button>' +
        '<button type="button" role="tab" class="seg-btn" data-s="T568A">T568A</button>' +
      '</div>' +
      '<div class="plug" aria-label="The plug, pins 1 to 8"></div>' +
      '<h4>Wires</h4><div class="wires"></div>' +
      '<p class="toy-msg cable-msg" aria-live="polite"></p>' +
      '<button type="button" class="btn btn-secondary btn-sm cable-reset">' + ICON_RESET + ' Start again</button>';

    function swatch(name) {
      var c = COLORS[name];
      var bg = c.length === 1 ? c[0] : 'repeating-linear-gradient(135deg, ' + c[0] + ' 0 5px, ' + c[1] + ' 5px 10px)';
      return '<span class="wire-sw" style="background:' + bg + '"></span>';
    }
    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    function reset() {
      placed = []; pool = shuffle(ORDER[std].slice());
      paint(); msg('', '');
    }
    function msg(t, k) { var m = el.querySelector('.cable-msg'); m.textContent = t; m.className = 'toy-msg cable-msg' + (k ? ' ' + k : ''); }
    function paint() {
      el.querySelectorAll('[data-s]').forEach(function (b) { var on = b.dataset.s === std; b.classList.toggle('active', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
      var pins = '';
      for (var i = 0; i < 8; i++) {
        var w = placed[i];
        pins += '<div class="pin ' + (w ? 'filled' : '') + '"><span class="pin-n">' + (i + 1) + '</span>' + (w ? swatch(w) : '<span class="wire-sw empty"></span>') + '</div>';
      }
      el.querySelector('.plug').innerHTML = pins;
      el.querySelector('.wires').innerHTML = pool.map(function (w) {
        return '<button type="button" class="chip-btn wire" data-w="' + w + '">' + swatch(w) + '<span>' + w.replace('-', ' ') + '</span></button>';
      }).join('') || '<p class="muted">All eight wires are in.</p>';
    }
    el.querySelector('.seg').addEventListener('click', function (e) {
      var b = e.target.closest('[data-s]'); if (!b) return; std = b.dataset.s; reset();
    });
    el.querySelector('.wires').addEventListener('click', function (e) {
      var b = e.target.closest('[data-w]'); if (!b) return;
      var want = ORDER[std][placed.length];
      if (b.dataset.w === want) {
        placed.push(want); pool.splice(pool.indexOf(want), 1); paint();
        if (placed.length === 8) msg('Perfect ' + std + ' cable! Crimp it, then check it with a cable tester.', 'ok');
        else msg('Pin ' + placed.length + ' done. Which wire goes on pin ' + (placed.length + 1) + '?', '');
      } else {
        var pin = placed.length + 1;
        var HINTS = {
          1: std === 'T568B' ? 'T568B starts with the orange pair, striped wire first.' : 'T568A starts with the green pair, striped wire first.',
          2: 'Pin 2 is the solid partner of the striped wire on pin 1.',
          3: 'Pin 3 is striped: the pair that is not on pins 1 and 2, and is not blue or brown.',
          4: 'The blue pair sits in the middle, on pins 4 and 5, and solid blue comes first.',
          5: 'Pin 5 is the striped partner of the blue wire on pin 4.',
          6: 'Pin 6 is the solid partner of the striped wire on pin 3.',
          7: 'The brown pair always goes last, striped first.',
          8: 'Only one wire is left!'
        };
        msg('Not that one. Odd pins take striped wires, even pins take solid ones. ' + HINTS[pin], 'bad');
        b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake');
      }
    });
    el.querySelector('.cable-reset').addEventListener('click', reset);
    reset();
  };

  /* ---------- Subnet calculator ---------- */
  T.subnet = function (el) {
    el.innerHTML =
      '<p class="toy-intro">Type an IP address and pick a prefix (the number after the slash). The calculator splits the address into the network part and the host part.</p>' +
      '<div class="send-row">' +
        '<label class="field grow"><span class="k">IP address</span><input type="text" class="sn-ip" value="192.168.10.77" inputmode="decimal" spellcheck="false" aria-label="IP address"></label>' +
        '<label class="field"><span class="k">Prefix</span><select class="sn-pre" aria-label="Prefix length"></select></label>' +
      '</div>' +
      '<div class="chips">' + ['192.168.1.20/24', '192.168.10.77/26', '10.0.5.9/8', '172.16.40.3/20', '10.1.1.1/30'].map(function (x) {
        return '<button type="button" class="chip-btn small" data-x="' + x + '">' + x + '</button>';
      }).join('') + '</div>' +
      '<div class="bits-line" aria-hidden="true"></div>' +
      '<div class="toy-panel sn-out" aria-live="polite"></div>';

    var sel = el.querySelector('.sn-pre');
    for (var p = 8; p <= 32; p++) sel.insertAdjacentHTML('beforeend', '<option value="' + p + '"' + (p === 26 ? ' selected' : '') + '>/' + p + '</option>');

    function toInt(parts) { return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3]; }
    function toIp(n) { return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.'); }

    function calc() {
      var raw = el.querySelector('.sn-ip').value.trim(), pre = +sel.value;
      var out = el.querySelector('.sn-out'), line = el.querySelector('.bits-line');
      var parts = raw.split('.');
      var ok = parts.length === 4 && parts.every(function (x) { return /^\d{1,3}$/.test(x) && +x <= 255; });
      if (!ok) { out.innerHTML = '<p class="bad-text"><b>That isn\'t a valid IPv4 address.</b> Use four numbers from 0 to 255 with dots between them.</p>'; line.innerHTML = ''; return; }
      var ip = toInt(parts.map(Number));
      var mask = pre === 0 ? 0 : (0xFFFFFFFF << (32 - pre)) >>> 0;
      var net = (ip & mask) >>> 0;
      var bc = (net | (~mask >>> 0)) >>> 0;
      var total = Math.pow(2, 32 - pre);
      var usable, first, last;
      if (pre === 32) { usable = 1; first = last = net; }
      else if (pre === 31) { usable = 2; first = net; last = bc; }
      else { usable = total - 2; first = net + 1; last = bc - 1; }

      var bin = pad((ip >>> 0).toString(2), 32), html = '';
      for (var i = 0; i < 32; i++) {
        html += '<span class="' + (i < pre ? 'nb' : 'hb') + '">' + bin[i] + '</span>';
        if (i % 8 === 7 && i < 31) html += '<span class="dot">.</span>';
      }
      line.innerHTML = html + '<span class="legend"><span class="nb">network: ' + pre + ' bits</span> <span class="hb">host: ' + (32 - pre) + ' bits</span></span>';

      var rows = [
        ['Subnet mask', toIp(mask)],
        ['Network address', toIp(net) + '/' + pre],
        ['Broadcast address', pre >= 31 ? '(none at /' + pre + ')' : toIp(bc)],
        ['First usable host', toIp(first)],
        ['Last usable host', toIp(last)],
        ['Usable hosts', usable.toLocaleString('en-IN')]
      ];
      out.innerHTML = '<dl class="kv">' + rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd><code>' + r[1] + '</code></dd></div>'; }).join('') + '</dl>' +
        '<p class="muted small">' + (pre <= 30
          ? 'Total addresses: 2<sup>' + (32 - pre) + '</sup> = ' + total.toLocaleString('en-IN') + '. Two are taken by the network address and the broadcast address, so ' + usable.toLocaleString('en-IN') + ' are left for devices.'
          : pre === 31 ? 'A /31 is a special case used for links between two routers: both addresses can be used.' : 'A /32 means exactly one address: a single device.') + '</p>';
    }
    el.querySelector('.sn-ip').addEventListener('input', calc);
    sel.addEventListener('change', calc);
    el.querySelector('.chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      var x = b.dataset.x.split('/'); el.querySelector('.sn-ip').value = x[0]; sel.value = x[1]; calc();
    });
    calc();
  };

  /* ---------- Caesar cipher ---------- */
  T.cipher = function (el) {
    var SECRETS = ['MEET AT THE LAB AFTER LUNCH', 'THE WIFI PASSWORD IS ON THE BOARD', 'NEVER SHARE YOUR OTP', 'ARJUN WINS THE FINAL MATCH'];
    var secret, secretShift;

    function shiftText(t, k) {
      return t.replace(/[a-z]/gi, function (ch) {
        var base = ch <= 'Z' ? 65 : 97;
        return String.fromCharCode((ch.charCodeAt(0) - base + k + 26) % 26 + base);
      });
    }

    el.innerHTML =
      '<p class="toy-intro">The Caesar cipher moves every letter a few places along the alphabet. The number of places is the <b>key</b>.</p>' +
      '<label class="field"><span class="k">Your message</span><input type="text" class="cz-in" value="Hello Arjun" maxlength="80" aria-label="Message to encrypt"></label>' +
      '<label class="mix-row cz-row"><span>Key: <b class="cz-k">3</b></span><input type="range" class="cz-key" min="0" max="25" value="3" aria-label="Key, from 0 to 25"></label>' +
      '<div class="alpha" aria-hidden="true"></div>' +
      '<div class="readout one"><div><span class="k">Encrypted (ciphertext)</span><code class="cz-out"></code></div></div>' +
      '<h4 class="mt">Crack the code</h4>' +
      '<p class="toy-intro">Someone at the fest left this scrambled note. Move the slider to try every key until it makes sense. That\'s called a <b>brute-force attack</b>, and it\'s why the Caesar cipher is far too weak for real secrets.</p>' +
      '<div class="readout one"><div><span class="k">Scrambled note</span><code class="cz-secret"></code></div></div>' +
      '<label class="mix-row cz-row"><span>Try key: <b class="cz-tk">0</b></span><input type="range" class="cz-try" min="0" max="25" value="0" aria-label="Key to try"></label>' +
      '<div class="readout one"><div><span class="k">Decrypted with that key</span><code class="cz-guess"></code></div></div>' +
      '<p class="toy-msg cz-msg" aria-live="polite"></p>' +
      '<button type="button" class="btn btn-secondary btn-sm cz-new">' + ICON_RESET + ' New secret note</button>';

    function enc() {
      var k = +el.querySelector('.cz-key').value;
      el.querySelector('.cz-k').textContent = k;
      el.querySelector('.cz-out').textContent = shiftText(el.querySelector('.cz-in').value, k) || ' ';
      var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      el.querySelector('.alpha').innerHTML = A.split('').map(function (c) {
        return '<span><b>' + c + '</b>' + shiftText(c, k) + '</span>';
      }).join('');
    }
    function tryKey() {
      var k = +el.querySelector('.cz-try').value;
      el.querySelector('.cz-tk').textContent = k;
      var guess = shiftText(secret, -k);
      el.querySelector('.cz-guess').textContent = guess;
      var m = el.querySelector('.cz-msg');
      if (k === secretShift) { m.className = 'toy-msg cz-msg ok'; m.textContent = 'Cracked! The key was ' + k + '. You only had 25 keys to try.'; }
      else { m.className = 'toy-msg cz-msg'; m.textContent = ''; }
    }
    var lastPick = null;
    function newSecret() {
      var pick;
      do { pick = SECRETS[Math.floor(Math.random() * SECRETS.length)]; } while (pick === lastPick && SECRETS.length > 1);
      lastPick = pick;
      secretShift = 1 + Math.floor(Math.random() * 25);
      secret = shiftText(pick, secretShift);
      el.querySelector('.cz-secret').textContent = secret;
      el.querySelector('.cz-try').value = 0;
      tryKey();
    }
    el.querySelector('.cz-in').addEventListener('input', enc);
    el.querySelector('.cz-key').addEventListener('input', enc);
    el.querySelector('.cz-try').addEventListener('input', tryKey);
    el.querySelector('.cz-new').addEventListener('click', newSecret);
    enc(); newSecret();
  };

  /* ---------- SHA-256 fingerprint ---------- */
  // Small, self-contained SHA-256 so this works everywhere, even when the page is opened as a file.
  var sha256 = (function () {
    var K = [], H0 = [];
    (function () {
      var primes = [], n = 2;
      while (primes.length < 64) { var p = true; for (var i = 0; i < primes.length && primes[i] * primes[i] <= n; i++) if (n % primes[i] === 0) { p = false; break; } if (p) primes.push(n); n++; }
      function frac(x) { return ((x - Math.floor(x)) * 4294967296) >>> 0; }
      for (var j = 0; j < 64; j++) { K[j] = frac(Math.cbrt(primes[j])); if (j < 8) H0[j] = frac(Math.sqrt(primes[j])); }
    })();
    function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }
    return function (str) {
      var bytes = Array.from(new TextEncoder().encode(str));
      var bitLen = bytes.length * 8;
      bytes.push(0x80);
      while (bytes.length % 64 !== 56) bytes.push(0);
      var hi = Math.floor(bitLen / 4294967296), lo = bitLen >>> 0;
      bytes.push((hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255, (lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255);
      var H = H0.slice(), W = new Array(64);
      for (var off = 0; off < bytes.length; off += 64) {
        for (var t = 0; t < 16; t++) W[t] = ((bytes[off + 4 * t] << 24) | (bytes[off + 4 * t + 1] << 16) | (bytes[off + 4 * t + 2] << 8) | bytes[off + 4 * t + 3]) >>> 0;
        for (t = 16; t < 64; t++) {
          var s0 = rotr(W[t - 15], 7) ^ rotr(W[t - 15], 18) ^ (W[t - 15] >>> 3);
          var s1 = rotr(W[t - 2], 17) ^ rotr(W[t - 2], 19) ^ (W[t - 2] >>> 10);
          W[t] = (W[t - 16] + s0 + W[t - 7] + s1) >>> 0;
        }
        var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
        for (t = 0; t < 64; t++) {
          var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
          var ch = (e & f) ^ (~e & g);
          var t1 = (h + S1 + ch + K[t] + W[t]) >>> 0;
          var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
          var mj = (a & b) ^ (a & c) ^ (b & c);
          var t2 = (S0 + mj) >>> 0;
          h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
        }
        H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
        H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
      }
      return H.map(function (x) { return pad(x.toString(16), 8); }).join('');
    };
  })();
  BBB.sha256 = sha256;

  T.hash = function (el) {
    var prev = null;
    el.innerHTML =
      '<p class="toy-intro">Type anything. Its SHA-256 fingerprint is always 64 hex characters, however long the text. Now change just one letter and compare.</p>' +
      '<label class="field"><span class="k">Text</span><input type="text" class="hs-in" value="Hello" aria-label="Text to fingerprint"></label>' +
      '<div class="chips">' + ['Hello', 'hello', 'Hello.', 'password123', 'Password123'].map(function (x) {
        return '<button type="button" class="chip-btn small" data-x="' + esc(x) + '">' + esc(x) + '</button>';
      }).join('') + '</div>' +
      '<div class="readout one"><div><span class="k">SHA-256 fingerprint</span><code class="hs-out"></code></div></div>' +
      '<div class="readout one hs-prev-wrap" hidden><div><span class="k">Fingerprint before your last change</span><code class="hs-prev"></code></div></div>' +
      '<p class="toy-msg hs-msg" aria-live="polite"></p>' +
      '<p class="muted small">Everything is worked out right here in your browser. Nothing is sent anywhere.</p>';

    function show(h) {
      var groups = h.match(/.{1,8}/g).join(' ');
      return groups;
    }
    function run(fromChip) {
      var text = el.querySelector('.hs-in').value;
      var h = sha256(text);
      var outEl = el.querySelector('.hs-out');
      var msg = el.querySelector('.hs-msg');
      if (prev !== null && prev.h !== h) {
        var changed = 0, html = '';
        for (var i = 0; i < 64; i++) {
          if (h[i] !== prev.h[i]) changed++;
          html += '<span class="' + (h[i] !== prev.h[i] ? 'diff' : '') + '">' + h[i] + '</span>' + (i % 8 === 7 ? ' ' : '');
        }
        outEl.innerHTML = html;
        el.querySelector('.hs-prev-wrap').hidden = false;
        el.querySelector('.hs-prev').textContent = show(prev.h);
        msg.className = 'toy-msg hs-msg';
        msg.innerHTML = '<b>' + changed + ' of 64</b> characters changed (highlighted), from a tiny change in the text. That\'s why a hash is such a good fingerprint.';
      } else {
        outEl.textContent = show(h);
        if (prev === null) msg.textContent = '';
      }
      prev = { t: text, h: h };
    }
    el.querySelector('.hs-in').addEventListener('input', function () { run(false); });
    el.querySelector('.chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      el.querySelector('.hs-in').value = b.getAttribute('data-x'); run(true);
    });
    run(false);
  };

  /* ---------- Password strength ---------- */
  T.password = function (el) {
    var COMMON = ['password', 'password1', 'password123', '123456', '12345678', '123456789', '1234567890', 'qwerty', 'qwerty123', 'abc123', '111111', '000000', 'iloveyou', 'admin', 'welcome', 'letmein', 'monkey', 'dragon', 'football', 'cricket', 'india123', 'india@123', 'sunshine', 'princess', 'login', 'pass@123', 'admin@123', 'test123', 'qwertyuiop', 'asdfgh', 'zxcvbnm'];
    var RATE = 1e10; // guesses per second for a strong offline attack

    el.innerHTML =
      '<p class="toy-intro">Type a <b>made-up practice password</b> (never a real one, here or on any site you don\'t trust). It\'s checked only inside your browser: nothing is saved or sent.</p>' +
      '<label class="field"><span class="k">Practice password</span><input type="text" class="pw-in" autocomplete="off" spellcheck="false" autocapitalize="off" value="cricket2012" aria-label="Practice password"></label>' +
      '<div class="chips">' + ['cricket2012', 'P@ssw0rd', 'Tr0ub4dor&3', 'mango river cloud tiger', 'Purple-Kettle-Rain-42'].map(function (x) {
        return '<button type="button" class="chip-btn small" data-x="' + esc(x) + '">' + esc(x) + '</button>';
      }).join('') + '</div>' +
      '<div class="meter" aria-hidden="true"><i></i></div>' +
      '<div class="toy-panel pw-out" aria-live="polite"></div>' +
      '<p class="muted small">A rough estimate for a powerful offline guessing attack (about 10 billion guesses a second). Real attackers also try leaked passwords first, which is why a password must never be reused.</p>';

    function human(sec) {
      if (sec < 1) return 'instantly';
      var units = [['century', 3153600000], ['year', 31536000], ['month', 2592000], ['day', 86400], ['hour', 3600], ['minute', 60], ['second', 1]];
      if (sec > 3153600000 * 1e6) return 'longer than anyone could ever wait';
      for (var i = 0; i < units.length; i++) {
        if (sec >= units[i][1]) {
          var n = Math.floor(sec / units[i][1]);
          var name = units[i][0] === 'century' ? (n === 1 ? 'century' : 'centuries') : units[i][0] + (n === 1 ? '' : 's');
          return 'about ' + n.toLocaleString('en-IN') + ' ' + name;
        }
      }
      return 'instantly';
    }

    function check() {
      var pw = el.querySelector('.pw-in').value;
      var out = el.querySelector('.pw-out'), bar = el.querySelector('.meter i');
      if (!pw) { out.innerHTML = '<p class="muted">Type a practice password above.</p>'; bar.style.width = '0'; bar.className = ''; return; }
      var lower = /[a-z]/.test(pw), upper = /[A-Z]/.test(pw), digit = /\d/.test(pw), symbol = /[^a-zA-Z0-9]/.test(pw);
      var pool = (lower ? 26 : 0) + (upper ? 26 : 0) + (digit ? 10 : 0) + (symbol ? 33 : 0);
      var bits = pw.length * Math.log2(Math.max(pool, 2));
      var notes = [];
      var simple = pw.toLowerCase().replace(/[@]/g, 'a').replace(/0/g, 'o').replace(/[1!]/g, 'i').replace(/3/g, 'e').replace(/\$/g, 's');
      var isCommon = COMMON.indexOf(pw.toLowerCase()) !== -1 || COMMON.indexOf(simple) !== -1 || /^p[a@]ss?w[o0]rd/i.test(pw);
      if (isCommon) { bits = Math.min(bits, 10); notes.push('This is one of the most common passwords. Attackers try these first.'); }
      if (/^(.)\1+$/.test(pw)) { bits = Math.min(bits, 8); notes.push('It\'s one character repeated.'); }
      if (/(0123|1234|2345|3456|4567|5678|6789|abcd|bcde|qwer|wert|asdf|zxcv)/i.test(pw)) { bits -= 12; notes.push('It contains an easy sequence like 1234, abcd or qwer.'); }
      if (/(19|20)\d\d$/.test(pw)) { bits -= 8; notes.push('It ends in a year. Birth years are among the first things attackers try.'); }
      if (/^[A-Z][a-z]+[\d!@#$%]{1,4}$/.test(pw)) { bits -= 10; notes.push('"Word + a few numbers or a symbol" is a pattern attackers know very well.'); }
      var words = pw.split(/[\s\-_.]+/).filter(function (w) { return w.length >= 3; });
      if (words.length >= 4) notes.push('Four or more words: a passphrase. Long and easy to remember. Good choice.');
      if (pw.length < 12) notes.push('Make it longer. Length matters most: aim for at least 12 characters, or 4 random words.');
      bits = Math.max(bits, 0);
      var seconds = Math.pow(2, bits) / 2 / RATE;
      // Label follows the guessing time: under an hour, a month, 100 years, a million years, or more.
      var level = seconds < 3600 ? 0 : seconds < 2592000 ? 1 : seconds < 3.15e9 ? 2 : seconds < 3.15e13 ? 3 : 4;
      var LABEL = ['Very weak', 'Weak', 'Okay', 'Strong', 'Very strong'];
      bar.style.width = (20 + level * 20) + '%';
      bar.className = 'l' + level;
      var types = [lower && 'lowercase', upper && 'capitals', digit && 'numbers', symbol && 'symbols'].filter(Boolean);
      out.innerHTML =
        '<p><b class="pw-l l' + level + '">' + LABEL[level] + '</b> · Time to guess: <b>' + human(seconds) + '</b></p>' +
        '<p class="muted small">' + pw.length + ' characters, using ' + (types.join(', ') || 'nothing') + '.</p>' +
        (notes.length ? '<ul>' + notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul>' : '');
    }
    el.querySelector('.pw-in').addEventListener('input', check);
    el.querySelector('.chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      el.querySelector('.pw-in').value = b.getAttribute('data-x'); check();
    });
    check();
  };

  /* ---------- Firewall rules game ---------- */
  T.firewall = function (el) {
    var RULES = [
      { id: 1, t: 'Allow <b>Players</b> → <b>Game server</b>, port 7777', m: function (p) { return p.from === 'player' && p.to === 'game' && p.port === 7777; } },
      { id: 2, t: 'Allow <b>anyone inside</b> → <b>Internet</b>, ports 80 and 443 (web)', m: function (p) { return p.from !== 'internet' && p.to === 'internet' && (p.port === 80 || p.port === 443); } },
      { id: 3, t: 'Allow <b>Staff</b> → <b>Score server</b>, port 443', m: function (p) { return p.from === 'staff' && p.to === 'score' && p.port === 443; } },
      { id: 4, t: 'Allow <b>anyone</b> → <b>Score server</b>, any port', m: function (p) { return p.to === 'score'; }, risky: true },
      { id: 5, t: 'Allow <b>Internet</b> → <b>Lab PCs</b>, port 3389 (Remote Desktop)', m: function (p) { return p.from === 'internet' && p.to === 'lab' && p.port === 3389; }, risky: true },
      { id: 6, t: 'Allow <b>anyone inside</b> → <b>DNS server</b>, port 53', m: function (p) { return p.from !== 'internet' && p.to === 'dns' && p.port === 53; } }
    ];
    var TESTS = [
      { t: 'Player PC → Game server :7777', from: 'player', to: 'game', port: 7777, want: true, why: 'Players must reach the game.' },
      { t: 'Visitor phone → Internet :443', from: 'visitor', to: 'internet', port: 443, want: true, why: 'Visitors should be able to browse.' },
      { t: 'Player PC → DNS server :53', from: 'player', to: 'dns', port: 53, want: true, why: 'Without DNS, no names work at all.' },
      { t: 'Staff laptop → Score server :443', from: 'staff', to: 'score', port: 443, want: true, why: 'Staff update the scores.' },
      { t: 'Visitor phone → Score server :443', from: 'visitor', to: 'score', port: 443, want: false, why: 'Visitors must never change the scores.' },
      { t: 'Visitor phone → Admin panel :8080', from: 'visitor', to: 'admin', port: 8080, want: false, why: 'The admin panel is for staff only.' },
      { t: 'Internet → Lab PC :3389', from: 'internet', to: 'lab', port: 3389, want: false, why: 'Remote Desktop open to the internet is a classic way in for attackers.' }
    ];
    var on = {}, defaultAllow = true;

    el.innerHTML =
      '<p class="toy-intro"><b>Your job:</b> players can reach the game server, everyone inside can browse the web, staff can update the scores, and nothing else gets through. Tick the rules you want, pick the default, then run the test traffic. The firewall checks rules from top to bottom and the <b>first match wins</b>.</p>' +
      '<div class="fw-rules">' + RULES.map(function (r) {
        return '<label class="fw-rule"><input type="checkbox" data-r="' + r.id + '"><span class="fw-n">' + r.id + '</span><span>' + r.t + '</span></label>';
      }).join('') +
      '<div class="fw-default"><span>If no rule matches:</span>' +
        '<div class="seg" role="tablist" aria-label="Default action"><button type="button" role="tab" class="seg-btn" data-def="allow">Allow</button><button type="button" role="tab" class="seg-btn" data-def="deny">Deny</button></div>' +
      '</div></div>' +
      '<button type="button" class="btn btn-primary fw-run">Run test traffic</button>' +
      '<div class="fw-results" aria-live="polite"></div>';

    function paintDefault() {
      el.querySelectorAll('[data-def]').forEach(function (b) {
        var act = (b.dataset.def === 'allow') === defaultAllow;
        b.classList.toggle('active', act); b.setAttribute('aria-selected', act ? 'true' : 'false');
      });
    }
    function run() {
      var score = 0;
      var rows = TESTS.map(function (p) {
        var hit = null;
        for (var i = 0; i < RULES.length; i++) if (on[RULES[i].id] && RULES[i].m(p)) { hit = RULES[i]; break; }
        var allowed = hit ? true : defaultAllow;
        var good = allowed === p.want;
        if (good) score++;
        return '<li class="fw-res ' + (good ? 'good' : 'bad') + '">' +
          '<span class="fw-pk">' + p.t + '</span>' +
          '<span class="fw-v"><b>' + (allowed ? 'Allowed' : 'Blocked') + '</b> ' + (hit ? 'by rule ' + hit.id : 'by the default') + '</span>' +
          '<span class="fw-why">' + (good ? '✓ ' : '✗ Should be ' + (p.want ? 'allowed' : 'blocked') + '. ') + p.why + '</span></li>';
      });
      var risky = RULES.filter(function (r) { return r.risky && on[r.id]; });
      var msg = score === TESTS.length
        ? '<p class="ok-text"><b>Perfect firewall: 7 of 7.</b> You needed the four safe rules, you left out the two risky ones, and you set the default to Deny. That idea is called <b>default deny</b>: block everything, then allow only what is needed.</p>'
        : '<p><b>' + score + ' of ' + TESTS.length + ' correct.</b> ' + (defaultAllow ? 'Hint: with the default set to Allow, anything you forgot about gets in. ' : '') + (risky.length ? 'Hint: rule ' + risky.map(function (r) { return r.id; }).join(' and ') + (risky.length > 1 ? ' are' : ' is') + ' too open. ' : '') + 'Change the rules and run it again.</p>';
      el.querySelector('.fw-results').innerHTML = msg + '<ul class="fw-list">' + rows.join('') + '</ul>';
    }
    el.querySelector('.fw-rules').addEventListener('change', function (e) {
      var c = e.target.closest('[data-r]'); if (!c) return; on[c.dataset.r] = c.checked;
    });
    el.querySelector('.fw-default').addEventListener('click', function (e) {
      var b = e.target.closest('[data-def]'); if (!b) return; defaultAllow = b.dataset.def === 'allow'; paintDefault();
    });
    el.querySelector('.fw-run').addEventListener('click', run);
    paintDefault();
  };
})(BBB.toys);
