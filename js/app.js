/* Byte by Byte — the app: pages, progress, quiz, read-aloud, theme and text size.
   No libraries, no build step. Works from a web server or by double-clicking index.html. */
(function () {
  'use strict';

  var KEY = 'bbb:v1';
  var C = BBB.chapters, T = BBB.tracks, CH = BBB.characters;
  var TRACK_IDS = ['hardware', 'networking'];
  var main = document.getElementById('main');
  var byId = {};
  C.forEach(function (c) { byId[c.id] = c; });

  function inTrack(t) { return C.filter(function (c) { return c.track === t; }); }

  /* ---------- Saved progress (this browser only) ---------- */
  function load() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { s = {}; }
    s.done = s.done || {}; s.seen = s.seen || {}; s.scores = s.scores || {};
    return s;
  }
  var state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode: progress just isn't kept */ } }

  /* ---------- Small helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function strip(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent || ''; }

  var ICONS = {
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    story: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    pointer: '<path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>',
    quiz: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    picture: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };
  function ic(name) {
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
  }

  function bar(pct, label) {
    return '<div class="bar" role="progressbar" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div>';
  }
  function countDone(list) { return list.filter(function (c) { return state.done[c.id]; }).length; }

  function continueTarget() {
    if (state.last && byId[state.last] && !state.done[state.last]) return byId[state.last];
    for (var i = 0; i < C.length; i++) if (!state.done[C[i].id]) return C[i];
    return C[0];
  }

  /* ---------- Home ---------- */
  function viewHome() {
    var doneN = countDone(C), total = C.length;
    var started = doneN > 0 || Object.keys(state.seen).length > 0;
    var allDone = doneN === total;
    var next = continueTarget();
    var cta = allDone ? 'Read the story again' : (started ? 'Continue: ' + esc(next.title) : 'Start the story');

    var how = [
      ['story', 'Read the story', 'A short scene with Riya and Uncle Dev.'],
      ['bulb', 'See what\'s really happening', 'The same idea, explained simply.'],
      ['pointer', 'Try it yourself', 'Flip switches, send packets, fix a network.'],
      ['quiz', 'Check yourself', 'Three quick questions. No pressure.']
    ];

    return '' +
      '<section class="wrap hero">' +
        '<p class="eyebrow">A story-based course for complete beginners</p>' +
        '<h1>Learn how computers and networks really work.</h1>' +
        '<p class="lead">Follow Riya as she brings her grandfather\'s old computer back to life, builds her own, and sends a message all the way across the country. ' + total + ' short chapters. No experience needed.</p>' +
        '<div class="actions">' +
          '<a class="btn btn-primary" href="#/chapter/' + next.id + '">' + cta + ' ' + ic('arrowRight') + '</a>' +
          '<a class="btn btn-secondary" href="#/part/hardware">See all chapters</a>' +
        '</div>' +
        (started ? '<div class="overall">' + bar(Math.round(doneN / total * 100), 'Your progress') + '<span>' + doneN + ' of ' + total + ' chapters done</span></div>' : '') +
      '</section>' +

      '<section class="wrap block">' +
        '<h2 class="section-title">Two parts, one story</h2>' +
        '<div class="parts">' + TRACK_IDS.map(partCard).join('') + '</div>' +
      '</section>' +

      '<section class="wrap block">' +
        '<h2 class="section-title">Meet the people</h2>' +
        '<div class="people">' + Object.keys(CH).map(function (k) {
          return '<div class="person card"><span class="avatar ' + k + '" aria-hidden="true">' + CH[k].initial + '</span>' +
            '<div><strong>' + CH[k].name + '</strong><p>' + CH[k].role + '</p></div></div>';
        }).join('') + '</div>' +
      '</section>' +

      '<section class="wrap block">' +
        '<h2 class="section-title">How every chapter works</h2>' +
        '<ol class="how">' + how.map(function (h, i) {
          return '<li class="card"><span class="how-ic">' + ic(h[0]) + '</span><span class="how-n">Step ' + (i + 1) + '</span><strong>' + h[1] + '</strong><p>' + h[2] + '</p></li>';
        }).join('') + '</ol>' +
      '</section>' +

      '<section class="wrap block">' +
        '<a class="card row-link" href="#/next"><span class="row-ic">' + ic('flag') + '</span><span><strong>Finished the story?</strong><span>Where to go next: free courses, certificates and jobs.</span></span>' + ic('chevronRight') + '</a>' +
      '</section>';
  }

  function partCard(t) {
    var list = inTrack(t), d = countDone(list);
    var mins = list.reduce(function (a, c) { return a + c.minutes; }, 0);
    return '<a class="part card ' + t + '" href="#/part/' + t + '">' +
      '<span class="part-ic">' + ic(t === 'hardware' ? 'cpu' : 'network') + '</span>' +
      '<span class="kicker">' + T[t].part + ' · ' + T[t].label + '</span>' +
      '<h3>' + T[t].title + '</h3>' +
      '<p>' + T[t].blurb + '</p>' +
      '<span class="meta">' + list.length + ' chapters · about ' + mins + ' minutes</span>' +
      bar(Math.round(d / list.length * 100), T[t].label + ' progress') +
      '<span class="meta">' + (d ? d + ' of ' + list.length + ' done' : 'Not started yet') + '</span>' +
    '</a>';
  }

  /* ---------- A part (list of chapters) ---------- */
  function viewPart(t) {
    if (!T[t]) return null;
    var list = inTrack(t), d = countDone(list);
    var other = t === 'hardware' ? 'networking' : 'hardware';
    return '' +
      '<section class="read page-head ' + t + '">' +
        '<p class="eyebrow">' + T[t].part + ' · ' + T[t].label + '</p>' +
        '<h1>' + T[t].title + '</h1>' +
        '<p class="lead">' + T[t].blurb + '</p>' +
        '<div class="overall">' + bar(Math.round(d / list.length * 100), T[t].label + ' progress') + '<span>' + d + ' of ' + list.length + ' chapters done</span></div>' +
      '</section>' +
      '<section class="read">' +
        '<ol class="chapter-list">' + list.map(function (c, i) {
          var done = state.done[c.id];
          return '<li><a class="ch-row card ' + (done ? 'is-done' : '') + '" href="#/chapter/' + c.id + '">' +
            '<span class="ch-num" aria-hidden="true">' + (done ? ic('check') : (i + 1)) + '</span>' +
            '<span class="ch-text"><strong>' + c.title + '</strong><span>' + c.topic + ' · ' + c.minutes + ' min' + (done ? ' · <em>Done</em>' : '') + '</span></span>' +
            ic('chevronRight') + '</a></li>';
        }).join('') + '</ol>' +
        '<a class="card row-link other-part" href="#/part/' + other + '"><span class="row-ic">' + ic(other === 'hardware' ? 'cpu' : 'network') + '</span>' +
          '<span><strong>' + T[other].part + ': ' + T[other].title + '</strong><span>' + T[other].label + '</span></span>' + ic('chevronRight') + '</a>' +
      '</section>';
  }

  /* ---------- A chapter ---------- */
  function lineHTML(l, i) {
    var who = l[0], text = l[1];
    if (who === 'n') return '<p class="line narr" style="--i:' + i + '">' + text + '</p>';
    var p = CH[who];
    return '<div class="line say ' + who + '" style="--i:' + i + '">' +
      '<span class="avatar ' + who + '" aria-hidden="true">' + p.initial + '</span>' +
      '<div class="bubble"><span class="who">' + p.name + '</span><p>' + text + '</p></div></div>';
  }

  function blockHTML(b) {
    if (b.h) return '<h3>' + b.h + '</h3>';
    if (b.p) return '<p>' + b.p + '</p>';
    if (b.ul) return '<ul>' + b.ul.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    if (b.ol) return '<ol class="num">' + b.ol.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>';
    if (b.tip) return '<aside class="note tip"><strong>Good to know</strong><p>' + b.tip + '</p></aside>';
    if (b.warn) return '<aside class="note warn"><strong>Be careful</strong><p>' + b.warn + '</p></aside>';
    if (b.table) {
      var head = b.table.head;
      return '<div class="table-wrap"><table>' +
        '<thead><tr>' + head.map(function (h) { return '<th scope="col">' + h + '</th>'; }).join('') + '</tr></thead>' +
        '<tbody>' + b.table.rows.map(function (r) {
          return '<tr>' + r.map(function (cell, j) {
            var lab = strip(head[j]);
            return j === 0
              ? '<th scope="row"' + (lab ? ' data-label="' + esc(lab) + '"' : '') + '>' + cell + '</th>'
              : '<td data-label="' + esc(lab) + '">' + cell + '</td>';
          }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    return '';
  }

  function diagramHTML(d) {
    var arrow = '<span class="arrow" aria-hidden="true">' + ic('arrowRight') + '</span>';
    var html = '';
    if (d.flow) {
      html = '<div class="flow">' + d.flow.map(function (s, i) {
        return (i ? arrow : '') + '<div class="node"><span class="node-n">' + (i + 1) + '</span><strong>' + s.t + '</strong><span>' + s.s + '</span></div>';
      }).join('') +
      (d.loop ? arrow + '<div class="node again">' + ic('repeat') + '<strong>Repeat</strong></div>' : '') + '</div>';
    }
    if (d.stack) {
      html = '<div class="stack">' + d.stack.map(function (s, i) {
        return '<div class="layer" style="--i:' + i + '"><span class="layer-n">' + (d.stack.length - i) + '</span><div><strong>' + s.t + '</strong><span>' + s.s + '</span></div></div>';
      }).join('') + '</div>';
    }
    return html + (d.note ? '<p class="diagram-note">' + d.note + '</p>' : '');
  }

  function quizHTML(c) {
    var best = state.scores[c.id];
    return '<section class="read sec" id="quiz">' +
      '<h2 class="sec-title">' + ic('quiz') + 'Quick check</h2>' +
      '<p class="sec-sub">' + c.quiz.length + ' questions. Pick an answer to see if you\'re right.' + (best != null ? ' Your best so far: ' + best + ' of ' + c.quiz.length + '.' : '') + '</p>' +
      '<div class="qs">' + c.quiz.map(function (q, qi) {
        return '<fieldset class="q card" data-q="' + qi + '"><legend><span class="q-num">' + (qi + 1) + '</span><span>' + q.q + '</span></legend>' +
          '<div class="opts">' + q.a.map(function (o, oi) {
            return '<button type="button" class="opt" data-o="' + oi + '"><span class="opt-mark" aria-hidden="true"></span><span>' + o + '</span></button>';
          }).join('') + '</div><p class="why" hidden></p></fieldset>';
      }).join('') + '</div>' +
      '<div class="quiz-result card" hidden aria-live="polite"></div>' +
    '</section>';
  }

  function viewChapter(id) {
    var c = byId[id];
    if (!c) return null;
    var list = inTrack(c.track), n = list.indexOf(c);
    var prev = list[n - 1], next = list[n + 1];
    var isNet = c.track === 'networking';
    var canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

    var dots = '<div class="dots" aria-label="Chapters in this part">' + list.map(function (x, i) {
      var cls = (x === c ? 'current ' : '') + (state.done[x.id] ? 'done' : '');
      return '<a href="#/chapter/' + x.id + '" class="' + cls + '" aria-label="Chapter ' + (i + 1) + ': ' + esc(x.title) + (state.done[x.id] ? ' (done)' : '') + '"' + (x === c ? ' aria-current="page"' : '') + '></a>';
    }).join('') + '</div>';

    var a = c.analogy;
    var html = '' +
      '<article class="chapter ' + c.track + '">' +
      '<header class="read ch-head">' +
        '<a class="crumb" href="#/part/' + c.track + '">' + ic('arrowLeft') + T[c.track].part + ' · ' + T[c.track].label + '</a>' +
        dots +
        '<p class="eyebrow">Chapter ' + (n + 1) + ' of ' + list.length + '</p>' +
        '<h1>' + c.title + '</h1>' +
        '<p class="lead">' + c.topic + '</p>' +
        '<div class="ch-meta"><span class="pill">' + ic('clock') + c.minutes + ' min</span>' +
          (canSpeak ? '<button type="button" class="btn btn-quiet btn-sm" id="listenBtn" aria-pressed="false">' + ic('volume') + '<span>Listen</span></button>' : '') +
        '</div>' +
      '</header>' +

      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('story') + 'The story</h2>' +
        '<div class="story">' + c.story.map(lineHTML).join('') + '</div>' +
      '</section>' +

      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('bulb') + 'What\'s really happening</h2>' +
        '<div class="prose learn">' + c.learn.map(blockHTML).join('') + '</div>' +
      '</section>' +

      (c.diagram ? '<section class="read sec"><h2 class="sec-title">' + ic('picture') + 'The picture</h2>' + diagramHTML(c.diagram) + '</section>' : '') +

      (a ? '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('link') + a.title + '</h2>' +
        '<p class="sec-sub">' + a.text + '</p>' +
        '<div class="map card"><div class="map-row map-head"><span>In everyday life</span><span></span><span>' + (isNet ? 'In a network' : 'In a computer') + '</span></div>' +
          a.map.map(function (r) {
            return '<div class="map-row"><span>' + r[0] + '</span><span class="map-arrow" aria-hidden="true">' + ic('arrowRight') + '</span><span><strong>' + r[1] + '</strong></span></div>';
          }).join('') +
        '</div></section>' : '') +

      (c.toy ? '<section class="read sec"><h2 class="sec-title">' + ic('pointer') + 'Try it yourself</h2><div class="toy card" data-toy="' + c.toy + '"></div></section>' : '') +

      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('book') + 'Words to remember</h2>' +
        '<dl class="words">' + c.words.map(function (w) { return '<div><dt>' + w[0] + '</dt><dd>' + w[1] + '</dd></div>'; }).join('') + '</dl>' +
      '</section>' +

      quizHTML(c) +

      (next ? '' : finishHTML(c.track)) +

      '<nav class="read ch-nav" aria-label="Chapter navigation">' +
        (prev
          ? '<a class="nav-card" href="#/chapter/' + prev.id + '"><span>' + ic('arrowLeft') + 'Previous</span><strong>' + prev.title + '</strong></a>'
          : '<a class="nav-card" href="#/part/' + c.track + '"><span>' + ic('arrowLeft') + 'Back</span><strong>All chapters in ' + T[c.track].part + '</strong></a>') +
        (next
          ? '<a class="nav-card next" href="#/chapter/' + next.id + '"><span>Next chapter' + ic('arrowRight') + '</span><strong>' + next.title + '</strong></a>'
          : '') +
      '</nav>' +
      '</article>';
    return html;
  }

  function finishHTML(t) {
    var isLast = t === 'networking';
    return '<section class="read sec"><div class="finish card">' +
      '<span class="finish-ic">' + ic('flag') + '</span>' +
      '<h2>End of ' + T[t].part + '</h2>' +
      '<p>' + T[t].finish + '</p>' +
      (isLast
        ? '<a class="btn btn-primary" href="#/next">What to learn next ' + ic('arrowRight') + '</a>'
        : '<a class="btn btn-primary" href="#/part/networking">Start Part 2: Out into the world ' + ic('arrowRight') + '</a>') +
      '</div></section>';
  }

  /* ---------- Word list ---------- */
  function allWords() {
    var seen = {}, out = [];
    C.forEach(function (c) {
      c.words.forEach(function (w) {
        var k = w[0].toLowerCase();
        if (seen[k]) return;
        seen[k] = true;
        out.push({ term: w[0], mean: w[1], ch: c });
      });
    });
    return out.sort(function (a, b) { return a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }); });
  }

  function viewWords() {
    var words = allWords();
    return '' +
      '<section class="read page-head">' +
        '<p class="eyebrow">Word list</p>' +
        '<h1>Every word, explained simply</h1>' +
        '<p class="lead">' + words.length + ' words from the story. Type to search, or tap a chapter to read where the word comes from.</p>' +
        '<label class="search">' + ic('search') + '<input type="search" id="wordSearch" placeholder="Search, e.g. RAM or router" autocomplete="off" aria-label="Search the word list"></label>' +
      '</section>' +
      '<section class="read">' +
        '<dl class="words glossary" id="wordList">' + words.map(function (w) {
          return '<div data-k="' + esc((w.term + ' ' + w.mean).toLowerCase()) + '"><dt>' + w.term + '</dt><dd>' + w.mean +
            ' <a href="#/chapter/' + w.ch.id + '">' + T[w.ch.track].label + ': ' + w.ch.title + '</a></dd></div>';
        }).join('') + '</dl>' +
        '<p class="empty" id="noWords" hidden></p>' +
      '</section>';
  }

  /* ---------- What next ---------- */
  function viewNext() {
    var w = BBB.whatNext;
    return '' +
      '<section class="read page-head">' +
        '<p class="eyebrow">After the story</p>' +
        '<h1>Where to go next</h1>' +
        '<p class="lead">You know the whole map now. Here is how to keep going, mostly for free.</p>' +
      '</section>' +
      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('pointer') + 'Practise at home</h2>' +
        '<ul class="ticks">' + w.practice.map(function (x) { return '<li>' + ic('check') + '<span>' + x + '</span></li>'; }).join('') + '</ul>' +
      '</section>' +
      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('book') + 'Free places to keep learning</h2>' +
        '<div class="list-cards">' + w.learn.map(function (x) {
          return '<div class="card"><strong>' + x[0] + '</strong><p>' + x[1] + '</p>' +
            (x[2] ? '<a href="' + x[2] + '" target="_blank" rel="noopener noreferrer">' + x[2].replace(/^https:\/\/(www\.)?/, '') + ' ' + ic('external') + '</a>' : '') + '</div>';
        }).join('') + '</div>' +
      '</section>' +
      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('flag') + 'Certificates people start with</h2>' +
        '<div class="list-cards">' + w.certificates.map(function (x) { return '<div class="card"><strong>' + x[0] + '</strong><p>' + x[1] + '</p></div>'; }).join('') + '</div>' +
      '</section>' +
      '<section class="read sec">' +
        '<h2 class="sec-title">' + ic('cpu') + 'Jobs this can lead to</h2>' +
        '<div class="tags">' + w.jobs.map(function (j) { return '<span class="tag">' + j + '</span>'; }).join('') + '</div>' +
      '</section>' +
      '<section class="read sec"><div class="actions">' +
        '<a class="btn btn-secondary" href="#/">' + ic('arrowLeft') + ' Back to the start</a>' +
        '<a class="btn btn-secondary" href="#/words">Review the word list</a>' +
      '</div></section>';
  }

  /* ---------- Wiring up a chapter after it is on the page ---------- */
  function wireChapter(c) {
    state.seen[c.id] = true;
    state.last = c.id;
    save();

    // Toys
    main.querySelectorAll('[data-toy]').forEach(function (el) {
      var name = el.getAttribute('data-toy');
      try {
        if (!BBB.toys || typeof BBB.toys[name] !== 'function') throw new Error('Missing toy: ' + name);
        BBB.toys[name](el);
      } catch (err) {
        el.innerHTML = '<p class="muted">This activity couldn\'t load, but the rest of the chapter works as normal.</p>';
        if (window.console) console.error(err);
      }
    });

    // Quiz
    var quiz = main.querySelector('#quiz');
    if (quiz) wireQuiz(c, quiz);

    // Read aloud
    var lb = main.querySelector('#listenBtn');
    if (lb) lb.addEventListener('click', function () { toggleSpeech(c, lb); });
  }

  function wireQuiz(c, quiz) {
    var answers = {};
    quiz.addEventListener('click', function (e) {
      var btn = e.target.closest('.opt');
      if (btn) return choose(btn);
      if (e.target.closest('[data-retry]')) return retry();
    });

    function choose(btn) {
      var fs = btn.closest('.q');
      var qi = +fs.dataset.q;
      if (answers[qi] != null) return;
      var q = c.quiz[qi], oi = +btn.dataset.o;
      answers[qi] = oi;
      fs.classList.add('answered');
      fs.querySelectorAll('.opt').forEach(function (b) {
        var i = +b.dataset.o;
        b.disabled = true;
        if (i === q.c) b.classList.add('right');
        if (i === oi && oi !== q.c) b.classList.add('wrong');
        if (i === oi) b.setAttribute('aria-label', strip(q.a[i]) + (i === q.c ? ', your answer, correct' : ', your answer, not correct'));
      });
      var why = fs.querySelector('.why');
      why.innerHTML = (oi === q.c ? '<b>Correct.</b> ' : '<b>Not quite.</b> ') + q.why;
      why.className = 'why ' + (oi === q.c ? 'ok' : 'bad');
      why.hidden = false;
      if (Object.keys(answers).length === c.quiz.length) finish();
    }

    function finish() {
      var score = 0;
      c.quiz.forEach(function (q, i) { if (answers[i] === q.c) score++; });
      state.done[c.id] = true;
      state.scores[c.id] = Math.max(score, state.scores[c.id] || 0);
      save();
      var list = inTrack(c.track), n = list.indexOf(c), next = list[n + 1];
      var msg = score === c.quiz.length ? 'Perfect! You really understood this chapter.'
        : score >= c.quiz.length - 1 ? 'Nicely done. Read the explanation for the one you missed.'
        : 'Good try. Read the story once more, then try again. Everyone learns by repeating.';
      var res = quiz.querySelector('.quiz-result');
      res.innerHTML = '<p class="score"><strong>' + score + ' of ' + c.quiz.length + '</strong> ' + msg + '</p>' +
        '<p class="muted small">This chapter is now marked as done.</p>' +
        '<div class="actions">' +
          (next ? '<a class="btn btn-primary" href="#/chapter/' + next.id + '">Next chapter ' + ic('arrowRight') + '</a>' : '') +
          '<button type="button" class="btn btn-secondary" data-retry>' + ic('reset') + ' Try again</button>' +
        '</div>';
      res.hidden = false;
      var dot = main.querySelector('.dots a.current');
      if (dot) dot.classList.add('done');
    }

    function retry() {
      answers = {};
      quiz.querySelectorAll('.q').forEach(function (fs) {
        fs.classList.remove('answered');
        fs.querySelectorAll('.opt').forEach(function (b) { b.disabled = false; b.classList.remove('right', 'wrong'); b.removeAttribute('aria-label'); });
        var why = fs.querySelector('.why'); why.hidden = true; why.innerHTML = '';
      });
      quiz.querySelector('.quiz-result').hidden = true;
      var first = quiz.querySelector('.opt');
      quiz.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      if (first) first.focus({ preventScroll: true });
    }
  }

  function reduceMotion() {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }

  /* ---------- Read aloud (built into the browser, free, works offline on most devices) ---------- */
  var speaking = false;
  function pickVoice() {
    try {
      var voices = window.speechSynthesis.getVoices() || [];
      var prefs = ['en-IN', 'en-GB', 'en-US'];
      for (var i = 0; i < prefs.length; i++) {
        var v = voices.filter(function (x) { return x.lang && x.lang.replace('_', '-').indexOf(prefs[i]) === 0; })[0];
        if (v) return v;
      }
      return voices.filter(function (x) { return /^en/i.test(x.lang || ''); })[0] || null;
    } catch (e) { return null; }
  }
  function textOfBlock(el) {
    if (el.classList.contains('table-wrap')) {
      return Array.prototype.map.call(el.querySelectorAll('tbody tr'), function (tr) {
        return Array.prototype.map.call(tr.children, function (td) { return td.textContent.trim(); }).join(', ');
      }).join('. ');
    }
    return el.textContent.trim();
  }
  function clearSpeaking() { main.querySelectorAll('.speaking').forEach(function (x) { x.classList.remove('speaking'); }); }
  function setListenBtn(on) {
    var b = document.getElementById('listenBtn');
    if (!b) return;
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.innerHTML = ic(on ? 'stop' : 'volume') + '<span>' + (on ? 'Stop' : 'Listen') + '</span>';
  }
  function stopSpeech() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
    speaking = false;
    clearSpeaking();
    setListenBtn(false);
  }
  function toggleSpeech(c) {
    if (speaking) { stopSpeech(); return; }
    var synth = window.speechSynthesis;
    if (!synth) return;
    var items = [{ text: c.title + '. ' + c.topic + '.' }];
    main.querySelectorAll('.story .line').forEach(function (el) {
      var who = el.classList.contains('narr') ? '' : el.querySelector('.who').textContent + ': ';
      var p = el.classList.contains('narr') ? el : el.querySelector('.bubble p');
      items.push({ text: who + p.textContent.trim(), el: el });
    });
    items.push({ text: 'What\'s really happening.' });
    main.querySelectorAll('.learn > *').forEach(function (el) { items.push({ text: textOfBlock(el), el: el }); });

    var voice = pickVoice();
    speaking = true;
    setListenBtn(true);
    try {
      synth.cancel();
      items.forEach(function (it, i) {
        var u = new SpeechSynthesisUtterance(it.text);
        if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-IN'; }
        u.rate = 0.95;
        u.onstart = function () {
          clearSpeaking();
          if (it.el && it.el.isConnected) {
            it.el.classList.add('speaking');
            var r = it.el.getBoundingClientRect();
            if (r.top < 80 || r.bottom > window.innerHeight) it.el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
          }
        };
        if (i === items.length - 1) { u.onend = stopSpeech; }
        u.onerror = function (ev) { if (ev && ev.error !== 'interrupted' && ev.error !== 'canceled') stopSpeech(); };
        synth.speak(u);
      });
    } catch (e) { stopSpeech(); }
  }

  /* ---------- Router ---------- */
  function setNav(key) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === key) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function render() {
    var hash = location.hash || '#/';
    if (hash.indexOf('#/') !== 0) return; // e.g. the "skip to content" link: not a page change
    stopSpeech();
    var parts = hash.slice(2).split('/').filter(Boolean);
    var html = null, title = 'Byte by Byte', nav = 'home', after = null;

    if (!parts.length) { html = viewHome(); }
    else if (parts[0] === 'part') { html = viewPart(parts[1]); nav = parts[1]; if (T[parts[1]]) title = T[parts[1]].title + ' · Byte by Byte'; }
    else if (parts[0] === 'chapter' && byId[parts[1]]) {
      var c = byId[parts[1]];
      html = viewChapter(c.id); nav = c.track; title = c.title + ' · Byte by Byte';
      after = function () { wireChapter(c); };
    }
    else if (parts[0] === 'words') { html = viewWords(); nav = 'words'; title = 'Word list · Byte by Byte'; after = wireWords; }
    else if (parts[0] === 'next') { html = viewNext(); nav = ''; title = 'Where to go next · Byte by Byte'; }

    if (html == null) { location.replace('#/'); return; }

    main.innerHTML = '<div class="page">' + html + '</div>';
    document.title = title;
    setNav(nav);
    if (after) after();
    window.scrollTo(0, 0);
    try { main.focus({ preventScroll: true }); } catch (e) {}
  }

  function wireWords() {
    var input = document.getElementById('wordSearch');
    var rows = main.querySelectorAll('#wordList > div');
    var empty = document.getElementById('noWords');
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase(), shown = 0;
      rows.forEach(function (r) {
        var hit = !q || r.getAttribute('data-k').indexOf(q) !== -1;
        r.hidden = !hit;
        if (hit) shown++;
      });
      empty.hidden = shown > 0;
      if (!shown) empty.textContent = 'No words match “' + input.value.trim() + '”. Try a shorter word.';
    });
  }

  /* ---------- Theme and text size ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var sizeBtn = document.getElementById('sizeBtn');
  var SIZES = ['', 'l', 'xl'], SIZE_NAMES = { '': 'normal', l: 'large', xl: 'extra large' };

  function systemDark() { try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { return false; } }
  function isDark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : systemDark(); }
  function paintThemeBtn() {
    var dark = isDark();
    themeBtn.innerHTML = ic(dark ? 'sun' : 'moon');
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeBtn.title = dark ? 'Light mode' : 'Dark mode';
  }
  function paintSizeBtn() {
    var s = root.getAttribute('data-size') || '';
    sizeBtn.setAttribute('aria-label', 'Text size: ' + SIZE_NAMES[s] + '. Tap to change.');
    sizeBtn.title = 'Text size: ' + SIZE_NAMES[s];
  }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    state.theme = next; save();
    paintThemeBtn();
  });
  sizeBtn.addEventListener('click', function () {
    var cur = root.getAttribute('data-size') || '';
    var next = SIZES[(SIZES.indexOf(cur) + 1) % SIZES.length];
    if (next) root.setAttribute('data-size', next); else root.removeAttribute('data-size');
    state.size = next || null; save();
    paintSizeBtn();
  });
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (!state.theme) paintThemeBtn(); });
  } catch (e) {}

  document.querySelector('.skip').addEventListener('click', function (e) {
    e.preventDefault();
    main.focus();
  });

  // Some browsers load their voices late; asking once early makes "Listen" start faster.
  try { if (window.speechSynthesis) window.speechSynthesis.getVoices(); } catch (e) {}

  paintThemeBtn();
  paintSizeBtn();
  window.addEventListener('hashchange', render);
  render();
})();
