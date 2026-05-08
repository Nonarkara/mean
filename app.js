/* =============================================================
   WHAT I MEAN WHEN I SAY — interaction layer
   ============================================================ */
(function() {
  'use strict';
  const LX = window.LEXICON || [];
  if (!LX.length) { console.error('No LEXICON'); return; }

  // ----- UTILITIES ---------------------------------------------
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));
  const slugify = (s) => s.toLowerCase()
    .replace(/[àáâã]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
  const escapeHtml = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  // Add an `id` to each entry (slug of word)
  LX.forEach(e => { e.id = slugify(e.word); });

  // Group by first letter
  const BY_LETTER = {};
  for (const e of LX) {
    const letter = e.word.charAt(0).toUpperCase();
    (BY_LETTER[letter] = BY_LETTER[letter] || []).push(e);
  }
  // Sort each letter alphabetically by word
  for (const k of Object.keys(BY_LETTER)) {
    BY_LETTER[k].sort((a, b) => a.word.localeCompare(b.word, 'en'));
  }

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // ----- RENDER ALPHABET BAR -----------------------------------
  function renderAlphabet() {
    const container = $('#letters');
    container.innerHTML = ALPHABET.map(L => {
      const has = !!BY_LETTER[L];
      const cls = ['ab-letter'];
      if (has) cls.push('has-entries');
      else cls.push('empty');
      return `<button class="${cls.join(' ')}" data-letter="${L}">${L}</button>`;
    }).join('');

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.ab-letter');
      if (!btn || btn.classList.contains('empty')) return;
      const L = btn.dataset.letter;
      const target = $(`#letter-${L}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ----- RENDER ENTRIES ----------------------------------------
  function entryHTML(e) {
    const examples = (e.examples || []).map(x => `<p>${escapeHtml(x)}</p>`).join('');
    const defs = (e.defs || []).map(d => `<li>${escapeHtml(d)}</li>`).join('');
    const see = (e.see || []).filter(s => LX.find(x => x.id === s)).map(s => {
      const target = LX.find(x => x.id === s);
      return `<a href="#${s}" data-jump="${s}">${escapeHtml(target.word)}</a>`;
    }).join('');
    return `
      <article class="entry" data-id="${e.id}" id="${e.id}">
        <header class="entry-head">
          <h3 class="entry-word">${escapeHtml(e.word)}</h3>
          ${e.ipa ? `<span class="entry-ipa">${escapeHtml(e.ipa)}</span>` : ''}
          ${e.pos ? `<span class="entry-pos">${escapeHtml(e.pos)}</span>` : ''}
        </header>
        ${e.origin ? `<span class="entry-origin">${escapeHtml(e.origin)}</span>` : ''}
        ${defs ? `<ol class="entry-defs">${defs}</ol>` : ''}
        ${examples ? `<div class="entry-examples">${examples}</div>` : ''}
        ${see ? `<p class="entry-see">${see}</p>` : ''}
      </article>
    `;
  }

  function renderDictionary() {
    const container = $('#dictionary');
    const sections = [];
    for (const L of ALPHABET) {
      if (!BY_LETTER[L]) continue;
      const entriesHTML = BY_LETTER[L].map(entryHTML).join('');
      sections.push(`
        <section class="letter-section" id="letter-${L}">
          <header class="letter-mark">
            <span class="lm-letter">${L}</span>
            <span class="lm-meta">${BY_LETTER[L].length} ${BY_LETTER[L].length === 1 ? 'entry' : 'entries'}</span>
          </header>
          <div class="letter-entries">${entriesHTML}</div>
        </section>
      `);
    }
    container.innerHTML = sections.join('');

    // cross-reference clicks: smooth-scroll AND flash the destination
    container.addEventListener('click', (e) => {
      const a = e.target.closest('.entry-see a[data-jump]');
      if (!a) return;
      e.preventDefault();
      const id = a.dataset.jump;
      jumpToEntry(id);
    });
  }

  function jumpToEntry(id) {
    const el = $(`#${CSS.escape(id)}`);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Flash highlight
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
    // Update bookmark
    saveBookmark(id);
  }

  // ----- WORD OF THE DAY ---------------------------------------
  // Deterministic: same word for everyone on the same UTC day
  function dayHash() {
    const d = new Date();
    const utcDay = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    let h = utcDay % 10000007;
    return h;
  }

  function renderWotd() {
    const idx = dayHash() % LX.length;
    const wotd = LX[idx];
    const card = $('#wotdCard');
    card.innerHTML = `
      <div class="entry-head" style="justify-content: center;">
        <h3 class="entry-word" style="font-size: clamp(36px, 6vw, 64px); margin: 0 4px;">${escapeHtml(wotd.word)}</h3>
        ${wotd.ipa ? `<span class="entry-ipa" style="font-size:18px;">${escapeHtml(wotd.ipa)}</span>` : ''}
        ${wotd.pos ? `<span class="entry-pos" style="font-size:16px;">${escapeHtml(wotd.pos)}</span>` : ''}
      </div>
      ${wotd.origin ? `<span class="entry-origin" style="display:block; text-align:center;">${escapeHtml(wotd.origin)}</span>` : ''}
      <div style="text-align:left; max-width:560px; margin: 16px auto 0;">
        <ol class="entry-defs">
          ${(wotd.defs||[]).map(d => `<li>${escapeHtml(d)}</li>`).join('')}
        </ol>
        ${(wotd.examples||[]).length ? `<div class="entry-examples">${wotd.examples.map(x => `<p>${escapeHtml(x)}</p>`).join('')}</div>` : ''}
      </div>
      <p style="margin-top:18px;"><a href="#${wotd.id}" data-jump="${wotd.id}" style="font-family: var(--mono); font-size: 11px; letter-spacing: .15em; text-transform: uppercase; color: var(--forest);">Read in context →</a></p>
    `;
    card.querySelector('a[data-jump]')?.addEventListener('click', (e) => {
      e.preventDefault();
      jumpToEntry(wotd.id);
    });
  }

  // ----- SEARCH ------------------------------------------------
  const searchOverlay = $('#searchOverlay');
  const searchInput   = $('#searchInput');
  const searchResults = $('#searchResults');
  const searchClose   = $('#searchClose');
  const scrim         = $('#scrim');

  function openSearch() {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput.focus(), 50);
    runSearch();
  }
  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
  }
  $('#searchBtn').addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  function runSearch() {
    const q = (searchInput.value || '').trim().toLowerCase();
    let results = LX;
    if (q) {
      results = LX.map(e => {
        const word = e.word.toLowerCase();
        const allText = (word + ' ' + (e.defs||[]).join(' ') + ' ' + (e.origin||'') + ' ' + (e.examples||[]).join(' ')).toLowerCase();
        let score = 0;
        if (word === q) score = 1000;
        else if (word.startsWith(q)) score = 500;
        else if (word.includes(q)) score = 200;
        else if (allText.includes(q)) score = 50;
        return { e, score };
      }).filter(x => x.score > 0).sort((a,b) => b.score - a.score).slice(0, 30).map(x => x.e);
    } else {
      results = LX.slice(0, 12);
    }
    searchResults.innerHTML = results.map((e, i) => `
      <li data-jump="${e.id}" data-i="${i}">
        <span class="sr-word">${escapeHtml(e.word)}</span>
        <span class="sr-pos">${escapeHtml(e.pos || '')}</span>
        <span class="sr-snip">${escapeHtml((e.defs||[''])[0]||'')}</span>
      </li>
    `).join('');
    focusedIdx = 0;
    updateFocused();
  }
  let focusedIdx = 0;
  function updateFocused() {
    $$('#searchResults li').forEach((li, i) => li.classList.toggle('focused', i === focusedIdx));
    const cur = searchResults.querySelector('.focused');
    if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  searchInput.addEventListener('input', runSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); focusedIdx = Math.min(focusedIdx + 1, $$('#searchResults li').length - 1); updateFocused(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focusedIdx = Math.max(focusedIdx - 1, 0); updateFocused(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const cur = searchResults.querySelector('.focused');
      if (cur) {
        closeSearch();
        jumpToEntry(cur.dataset.jump);
      }
    }
    else if (e.key === 'Escape') closeSearch();
  });
  searchResults.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-jump]');
    if (li) {
      closeSearch();
      jumpToEntry(li.dataset.jump);
    }
  });

  // ----- RANDOM ENTRY ------------------------------------------
  function randomEntry() {
    const e = LX[Math.floor(Math.random() * LX.length)];
    jumpToEntry(e.id);
  }
  $('#randomBtn').addEventListener('click', randomEntry);

  // ----- MENU OVERLAY ------------------------------------------
  const menuOverlay = $('#menuOverlay');
  $('#menuBtn').addEventListener('click', () => {
    menuOverlay.classList.add('open');
    scrim.classList.add('show');
    updateMenuStats();
  });
  $('#menuClose').addEventListener('click', () => {
    menuOverlay.classList.remove('open');
    scrim.classList.remove('show');
  });
  scrim.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
    scrim.classList.remove('show');
  });

  // ----- KEYBOARD ----------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === '/') { e.preventDefault(); openSearch(); }
    else if (e.key === 'r' || e.key === 'R') { e.preventDefault(); randomEntry(); }
    else if (e.key === 'Escape') {
      closeSearch();
      menuOverlay.classList.remove('open');
      scrim.classList.remove('show');
    }
  });

  // ----- BOOKMARK + VISITED + STREAK ---------------------------
  const KEY_BOOK = 'mean:bookmark';
  const KEY_TS   = 'mean:bookmark-ts';
  const KEY_VIS  = 'mean:visited';
  const KEY_DAYS = 'mean:days';

  function getVisited() {
    try { return JSON.parse(localStorage.getItem(KEY_VIS) || '[]'); } catch(e) { return []; }
  }
  function saveVisited(arr) {
    try { localStorage.setItem(KEY_VIS, JSON.stringify(arr)); } catch(e) {}
  }
  function saveBookmark(id) {
    try {
      localStorage.setItem(KEY_BOOK, id);
      localStorage.setItem(KEY_TS, String(Date.now()));
      let v = getVisited();
      if (!v.includes(id)) {
        v.push(id);
        saveVisited(v);
        markVisited();
      }
    } catch(e) {}
  }
  function markVisited() {
    const v = getVisited();
    $$('.entry').forEach(el => el.classList.toggle('visited', v.includes(el.dataset.id)));
  }
  function recordDayVisit() {
    try {
      const today = new Date().toDateString();
      let days = JSON.parse(localStorage.getItem(KEY_DAYS) || '[]');
      if (!days.includes(today)) {
        days.push(today);
        days = days.slice(-30); // keep last 30
        localStorage.setItem(KEY_DAYS, JSON.stringify(days));
      }
    } catch(e) {}
  }
  function getStreakCount() {
    try {
      const days = JSON.parse(localStorage.getItem(KEY_DAYS) || '[]');
      // Count unique days, last 30
      return new Set(days).size;
    } catch(e) { return 0; }
  }

  // Track which entry user is reading
  let currentEntry = null;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting && en.intersectionRatio > 0.5) {
        currentEntry = en.target.dataset.id;
      }
    });
    if (currentEntry) saveBookmark(currentEntry);
  }, { threshold: [0.5], rootMargin: '-20% 0px -20% 0px' });
  $$('.entry').forEach(el => observer.observe(el));

  // Continue toast
  let savedBook = null;
  try { savedBook = localStorage.getItem(KEY_BOOK); } catch(e) {}
  if (savedBook && LX.find(e => e.id === savedBook)) {
    const ts = parseInt(localStorage.getItem(KEY_TS) || '0');
    const days = ts ? Math.floor((Date.now() - ts) / 86400000) : 0;
    const ago = days === 0 ? 'earlier today' : days === 1 ? 'yesterday' : `${days} days ago`;
    const target = LX.find(e => e.id === savedBook);
    setTimeout(() => {
      if (window.scrollY > 600) return;
      const toast = document.createElement('div');
      toast.className = 'continue-toast';
      toast.innerHTML = `
        <span class="ct-ico">↻</span>
        <div class="ct-meta">
          <small>You left off ${ago}</small>
          <strong>${escapeHtml(target.word)}</strong>
        </div>
        <button class="ct-jump">Continue</button>
        <button class="ct-x" aria-label="Dismiss">×</button>
      `;
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('show'));
      const dismiss = () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      };
      toast.querySelector('.ct-jump').addEventListener('click', () => { jumpToEntry(savedBook); dismiss(); });
      toast.querySelector('.ct-x').addEventListener('click', dismiss);
      setTimeout(dismiss, 14000);
    }, 1800);
  }

  function updateMenuStats() {
    $('#entryCount').textContent = LX.length;
    $('#visitedCount').textContent = getVisited().length;
    $('#streakCount').textContent = getStreakCount();
  }

  // ----- ALPHABET BAR ACTIVE STATE ON SCROLL -------------------
  function updateActiveLetter() {
    let active = null;
    for (const L of ALPHABET) {
      const sec = $(`#letter-${L}`);
      if (sec && sec.getBoundingClientRect().top <= 80) active = L;
    }
    $$('.ab-letter').forEach(b => b.classList.toggle('active', b.dataset.letter === active));
  }

  // ----- PROGRESS BAR ------------------------------------------
  function updateProgress() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    $('#progress').style.width = pct + '%';
  }

  let scrollTick = false;
  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      requestAnimationFrame(() => {
        updateProgress();
        updateActiveLetter();
        scrollTick = false;
      });
      scrollTick = true;
    }
  }, { passive: true });

  // ----- HASH NAVIGATION ON LOAD --------------------------------
  function handleInitialHash() {
    const id = (location.hash || '').replace('#', '');
    if (id && LX.find(e => e.id === id)) {
      setTimeout(() => jumpToEntry(id), 600);
    }
  }

  // ----- INIT --------------------------------------------------
  renderAlphabet();
  renderDictionary();
  renderWotd();
  markVisited();
  recordDayVisit();
  updateProgress();
  updateActiveLetter();
  handleInitialHash();

  console.log(`📖 What I Mean When I Say · ${LX.length} entries loaded`);
})();
