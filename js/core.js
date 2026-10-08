/*
 * Malaika — shared site core.
 * Renders the header and footer, applies translations, and provides helpers
 * (storage, mascot, confetti, scroll reveal) to the page scripts in js/pages/.
 *
 * A page script registers itself with   Malaika.onRender(fn)
 * and fn runs on load and again whenever the language changes.
 */
(function () {
  "use strict";

  const CONFIG = {
    // Set to your backend URLs to collect real submissions (POST, JSON body).
    // Left empty, submissions are only remembered in this browser.
    waitlistEndpoint: "",
    contactEndpoint: "",
    // Real waitlist size from your backend; the counter is hidden while 0.
    waitlistBase: 0,
    defaultLang: "en"
  };

  const LANGS = { en: "English", es: "Español", de: "Deutsch" };
  const NAV = [
    { id: "home", href: "index.html" },
    { id: "features", href: "features.html" },
    { id: "solutions", href: "solutions.html" },
    { id: "about", href: "about.html" },
    { id: "faq", href: "faq.html" }
  ];

  const I18N = window.MALAIKA_I18N;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Storage (never required for the page to work) ---------- */
  const store = {
    get(k, fallback) {
      try { const v = localStorage.getItem("malaika:" + k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(k, v) { try { localStorage.setItem("malaika:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  /* ---------- Language: ?lang= > saved > browser > default ---------- */
  function resolveLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param && LANGS[param]) { store.set("lang", param); return param; }
    const saved = store.get("lang", null);
    if (saved && LANGS[saved]) return saved;
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    return LANGS[nav] ? nav : CONFIG.defaultLang;
  }

  const M = {
    CONFIG, LANGS, $, $$, esc, store, reduceMotion,
    page: document.body.dataset.page,
    lang: resolveLang(),
    renderers: [],
    t() { return I18N[M.lang]; },
    get(path) { return path.split(".").reduce((o, k) => (o == null ? "" : o[k]), M.t()); },
    onRender(fn) { M.renderers.push(fn); },
    setLang(lang) {
      if (!LANGS[lang] || lang === M.lang) return;
      M.lang = lang; store.set("lang", lang);
      // Keep the URL shareable in the chosen language
      const url = new URL(location.href);
      if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }
      M.render();
    }
  };
  window.Malaika = M;

  /* ---------- Mascot ---------- */
  M.mascotSVG = function (id) {
    return `
<svg class="mascot" id="${id}" data-mood="idle" viewBox="0 0 200 200" role="img" aria-label="Malaika">
  <ellipse class="halo" cx="100" cy="30" rx="38" ry="11" fill="none" stroke="#FFC233" stroke-width="8"/>
  <g class="wing-l"><ellipse cx="38" cy="112" rx="26" ry="38" fill="#fff" stroke="#F1D9DD" stroke-width="4" transform="rotate(-24 38 112)"/></g>
  <g class="wing-r"><ellipse cx="162" cy="112" rx="26" ry="38" fill="#fff" stroke="#F1D9DD" stroke-width="4" transform="rotate(24 162 112)"/></g>
  <circle cx="100" cy="118" r="64" fill="#E8364F"/>
  <ellipse cx="100" cy="152" rx="34" ry="14" fill="#C42740" opacity=".35"/>
  <ellipse cx="78" cy="78" rx="14" ry="8" fill="#fff" opacity=".35" transform="rotate(-30 78 78)"/>
  <g class="eye"><ellipse cx="78" cy="108" rx="11" ry="13" fill="#fff"/><circle cx="80" cy="110" r="6.5" fill="#1B1B2F"/><circle cx="82" cy="107" r="2.2" fill="#fff"/></g>
  <g class="eye"><ellipse cx="122" cy="108" rx="11" ry="13" fill="#fff"/><circle cx="124" cy="110" r="6.5" fill="#1B1B2F"/><circle cx="126" cy="107" r="2.2" fill="#fff"/></g>
  <ellipse cx="62" cy="130" rx="9" ry="5" fill="#FF8FA0" opacity=".8"/>
  <ellipse cx="138" cy="130" rx="9" ry="5" fill="#FF8FA0" opacity=".8"/>
  <path class="mouth-idle" d="M88 134 Q100 144 112 134" stroke="#1B1B2F" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path class="mouth-happy" d="M84 132 Q100 152 116 132 Z" fill="#1B1B2F"/>
  <g class="mouth-wow"><path d="M82 130 Q100 160 118 130 Z" fill="#1B1B2F"/><path d="M90 143 Q100 150 110 143" fill="#FF8FA0"/></g>
</svg>`;
  };
  // Any element with data-mascot="id" gets a mascot
  function mountMascots() {
    $$("[data-mascot]").forEach((el) => { if (!el.firstElementChild) el.innerHTML = M.mascotSVG(el.dataset.mascot); });
  }

  /* ---------- Header & footer ---------- */
  const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="7" rx="9" ry="3" fill="none" stroke="#FFC233" stroke-width="2.6"/><circle cx="20" cy="24" r="14" fill="#E8364F"/><circle cx="15" cy="22" r="1.8" fill="#fff"/><circle cx="25" cy="22" r="1.8" fill="#fff"/><path d="M16 28 Q20 31 24 28" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;
  const GLOBE = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`;

  function renderHeader() {
    const t = M.t();
    $("#siteHeader").innerHTML = `
    <div class="container nav-inner">
      <a href="index.html" class="logo" aria-label="Malaika"><span class="logo-mark">${LOGO}</span><span>malaika</span></a>
      <nav class="nav-links" id="navLinks" aria-label="Primary">
        ${NAV.map((n) => `<a href="${n.href}"${n.id === M.page ? ' class="active" aria-current="page"' : ""}>${esc(t.nav[n.id])}</a>`).join("")}
        <a href="join.html" class="btn btn-primary show-sm">${esc(t.nav.cta)}</a>
      </nav>
      <div class="nav-actions">
        <div class="lang-menu" id="langMenu">
          <button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false" aria-label="${esc(t.meta.language)}">
            ${GLOBE}<span>${M.lang.toUpperCase()}</span><svg class="chev" viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none"/></svg>
          </button>
          <ul class="lang-list" role="menu">
            ${Object.entries(LANGS).map(([code, name]) =>
              `<li><button role="menuitemradio" aria-checked="${code === M.lang}" data-lang="${code}" lang="${code}"><b>${code.toUpperCase()}</b> ${name}</button></li>`).join("")}
          </ul>
        </div>
        <button class="icon-btn" id="themeToggle" aria-label="${esc(t.nav.theme)}"><span class="sun">☀️</span><span class="moon">🌙</span></button>
        <a href="join.html" class="btn btn-primary btn-sm hide-sm${M.page === "join" ? " is-current" : ""}">${esc(t.nav.cta)}</a>
        <button class="icon-btn menu-btn" id="menuBtn" aria-label="${esc(t.nav.menu)}" aria-expanded="false" aria-controls="navLinks"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  }

  function renderFooter() {
    const f = M.t().footer, L = f.links;
    const col = (title, links) => `<div><h4>${esc(title)}</h4><ul>${links.map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("")}</ul></div>`;
    $("#siteFooter").innerHTML = `
    <div class="container footer-grid">
      <div><a href="index.html" class="logo light"><span class="logo-mark">${LOGO}</span><span>malaika</span></a><p>${esc(f.tagline)}</p></div>
      <div class="footer-cols">
        ${col(f.product, [["features.html", L.features], ["index.html#demo", L.demo], ["solutions.html#clinics", L.clinics], ["faq.html", L.faq]])}
        ${col(f.company, [["about.html", L.about], ["join.html", L.join], ["join.html#contact", L.contact]])}
        ${col(f.legal, [["#", L.privacy], ["#", L.terms], ["#", L.disclaimer]])}
      </div>
    </div>
    <div class="container footer-bottom">
      <small>© ${new Date().getFullYear()} Malaika. ${esc(f.rights)}</small>
      <small class="muted">${esc(f.disclaimer)}</small>
    </div>`;
  }

  /* ---------- Static translations in page HTML ---------- */
  function applyStatic() {
    document.documentElement.lang = M.lang;
    const title = M.t().meta.titles[M.page];
    if (title) document.title = title;
    $$("[data-i18n]").forEach((el) => (el.textContent = M.get(el.dataset.i18n)));
    $$("[data-i18n-placeholder]").forEach((el) => (el.placeholder = M.get(el.dataset.i18nPlaceholder)));
  }

  /* ---------- Theme ---------- */
  let theme = store.get("theme", null);
  function applyTheme() {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }
  const currentTheme = () => theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  /* ---------- Global (delegated) events — survive header re-renders ---------- */
  function closeMenus(except) {
    const lm = $("#langMenu");
    if (lm && except !== "lang") { lm.classList.remove("open"); $("#langBtn").setAttribute("aria-expanded", "false"); }
    const nl = $("#navLinks");
    if (nl && except !== "nav") { nl.classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); }
  }
  function bindGlobal() {
    document.addEventListener("click", (e) => {
      const langOpt = e.target.closest("[data-lang]");
      if (langOpt) { closeMenus(); M.setLang(langOpt.dataset.lang); return; }
      if (e.target.closest("#langBtn")) {
        const open = $("#langMenu").classList.toggle("open");
        $("#langBtn").setAttribute("aria-expanded", String(open));
        closeMenus("lang");
        if (open) $("#langMenu [aria-checked='true']").focus();
        return;
      }
      if (e.target.closest("#menuBtn")) {
        const open = $("#navLinks").classList.toggle("open");
        $("#menuBtn").setAttribute("aria-expanded", String(open));
        closeMenus("nav");
        return;
      }
      if (e.target.closest("#themeToggle")) {
        theme = currentTheme() === "dark" ? "light" : "dark";
        store.set("theme", theme); applyTheme();
        return;
      }
      if (!e.target.closest("#langMenu, #navLinks")) closeMenus();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenus();
      // Arrow keys move through the language list
      if ((e.key === "ArrowDown" || e.key === "ArrowUp") && e.target.closest(".lang-list")) {
        e.preventDefault();
        const items = $$(".lang-list button"), i = items.indexOf(e.target);
        items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length].focus();
      }
    });
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", sizeCanvas);
  }

  /* ---------- Scroll: progress bar, nav shadow, reveal ---------- */
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    $("#scrollProgress").style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    $("#siteHeader").classList.toggle("scrolled", h.scrollTop > 10);
  }

  let revealObs, countObs;
  M.observe = function () {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      $$("[data-count]").forEach((el) => (el.textContent = el.dataset.count + el.dataset.suffix));
      return;
    }
    revealObs = revealObs || new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal:not(.in)").forEach((el) => revealObs.observe(el));

    countObs = countObs || new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); countObs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    $$("[data-count]:not(.counted)").forEach((el) => countObs.observe(el));
  };
  function countUp(el) {
    el.classList.add("counted");
    const target = +el.dataset.count, suffix = el.dataset.suffix;
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1200;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Confetti ---------- */
  const canvas = document.createElement("canvas");
  canvas.id = "confetti"; canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const COLORS = ["#E8364F", "#FFC233", "#1CB0A8", "#7C5CFF", "#FF8FA0"];
  let parts = [], raf = null;
  function sizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  M.burst = function (x, y, n) {
    if (reduceMotion) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * (n > 50 ? 9 : 5);
      parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, r: 3 + Math.random() * 4,
        c: COLORS[i % COLORS.length], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, life: 90 + Math.random() * 40 });
    }
    if (!raf) raf = requestAnimationFrame(animate);
  };
  M.burstFrom = function (el, n) {
    const r = el.getBoundingClientRect();
    M.burst(r.left + r.width / 2, r.top + r.height / 2, n);
  };
  function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0);
    parts.forEach((p) => {
      p.vy += 0.22; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
      ctx.save(); ctx.globalAlpha = Math.min(1, p.life / 30);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
      ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore();
    });
    raf = parts.length ? requestAnimationFrame(animate) : null;
  }

  /* ---------- Render cycle ---------- */
  M.render = function () {
    renderHeader();
    renderFooter();
    applyStatic();
    mountMascots();
    M.renderers.forEach((fn) => fn(M.t()));
    M.observe();
    // On a language switch, content the visitor already scrolled past stays visible.
    if (M.ready) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      $$("[data-count]").forEach((el) => { el.classList.add("counted"); el.textContent = el.dataset.count + el.dataset.suffix; });
    }
  };

  // Page scripts load after core.js; boot once they have all registered.
  document.addEventListener("DOMContentLoaded", () => M.boot());
  M.boot = function () {
    applyTheme();
    sizeCanvas();
    bindGlobal();
    M.render();
    onScroll();
    M.ready = true;
    // Honour #anchors after content is rendered
    if (location.hash) { const target = document.getElementById(location.hash.slice(1)); if (target) target.scrollIntoView(); }
  };
})();
