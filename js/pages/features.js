/* Features page: auto-advancing tab showcase (deep-linkable via #id) and extras grid. */
(function () {
  "use strict";
  const M = window.Malaika, { $, $$, esc, reduceMotion } = M;
  const AUTOPLAY_MS = 6000;

  let idx = 0, timer, hovering = false;
  // A deep link (features.html#journal) or a click stops autoplay.
  let userPicked = false;

  function visual(id, v) {
    switch (id) {
      case "quests":
        return `<div class="mock">
          ${[["💧", v.q1, 75], ["💊", v.q2, 100], ["😴", v.q3, 45]].map(([i, l, w], k) =>
            `<div class="mock-row">${i} <span class="mock-label">${esc(l)}</span><span class="bar"><i style="width:${w}%;animation-delay:${k * 0.15}s"></i></span></div>`).join("")}
          <div class="mock-row center">🔥 12 · ⭐ 340 XP · 🏅 ×5</div></div>`;
      case "journal": {
        const vals = Array.from({ length: 7 }, () => 20 + Math.round(Math.random() * 80));
        return `<div class="mock"><div class="mock-chart">${vals.map((h, k) => `<i style="height:${h}%;animation-delay:${k * 0.06}s"></i>`).join("")}</div>
          <div class="mock-chart-labels">${v.days.map((d) => `<span>${esc(d)}</span>`).join("")}</div></div>`;
      }
      case "crisis":
        return `<div class="mock"><div class="sos">${esc(v.sos)}</div>
          <div class="mock-row">📲 ${esc(v.alerting)} <b>${esc(v.mom)}</b></div>
          <div class="mock-row">🩺 ${esc(v.alerting)} <b>${esc(v.doc)}</b></div>
          <div class="mock-row">📍 ${esc(v.clinic)}</div></div>`;
      case "circle":
        return `<div class="mock"><div class="avatars">
          <span style="background:#FFC233">👩🏾</span><span style="background:#1CB0A8">👨🏿</span><span style="background:#7C5CFF">🩺</span><span style="background:#E8364F">🧒🏾</span></div>
          <div class="mock-row">👩🏾 <span><b>${esc(v.mom)}</b> ${esc(v.cheer)}</span></div>
          <div class="mock-row">🩺 <span><b>${esc(v.doc)}</b> ${esc(v.cheer)}</span></div></div>`;
      case "learn":
        return `<div class="mock"><p class="quiz-q">${esc(v.quizQ)}</p>
          ${v.quiz.map((o, k) => `<button class="quiz-opt" data-right="${k === 0}">${esc(o)}</button>`).join("")}</div>`;
      default: return "";
    }
  }

  function renderTabs(t) {
    $("#featureTabs").style.setProperty("--tab-ms", AUTOPLAY_MS + "ms");
    $("#featureTabs").innerHTML = t.features.items.map((f, i) =>
      `<button class="tab" role="tab" id="ftab-${f.id}" aria-controls="featurePanel" data-i="${i}">
        ${f.icon} ${esc(f.tab)}<span class="tab-bar"><i></i></span></button>`).join("");
    renderPanel();
  }

  function renderPanel() {
    const t = M.t(), f = t.features.items[idx];
    $$(".tab").forEach((b, i) => {
      b.setAttribute("aria-selected", String(i === idx));
      b.tabIndex = i === idx ? 0 : -1;
    });
    const panel = $("#featurePanel");
    panel.setAttribute("aria-labelledby", "ftab-" + f.id);
    panel.innerHTML = `
      <div class="fp-copy"><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p>
      <ul>${f.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>
      <div class="fp-visual">${visual(f.id, t.features.vis)}</div>`;
    schedule();
  }

  function schedule() {
    clearTimeout(timer);
    const stopped = userPicked || reduceMotion;
    $("#featureTabs").classList.toggle("paused", stopped || hovering);
    if (stopped || hovering) return;
    timer = setTimeout(() => { idx = (idx + 1) % M.t().features.items.length; renderPanel(); }, AUTOPLAY_MS);
  }

  function select(i, focus) {
    userPicked = true;
    idx = i;
    renderPanel();
    history.replaceState(null, "", location.pathname + location.search + "#" + M.t().features.items[idx].id);
    if (focus) $$(".tab")[idx].focus();
  }

  function idxFromHash(t) {
    const i = t.features.items.findIndex((f) => "#" + f.id === location.hash);
    if (i >= 0) { idx = i; userPicked = true; }
  }

  M.onRender((t) => {
    idxFromHash(t);
    renderTabs(t);
    $("#extras").innerHTML = t.features.extras.items.map((x, i) =>
      `<div class="card reveal" style="transition-delay:${(i % 3) * 0.1}s"><span class="card-icon">${x.icon}</span><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p></div>`).join("");
  });

  /* ---------- Events ---------- */
  const tabs = $("#featureTabs");
  tabs.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) select(+b.dataset.i); });
  tabs.addEventListener("keydown", (e) => {
    const n = M.t().features.items.length;
    const moves = { ArrowRight: 1, ArrowLeft: -1 };
    if (e.key in moves) { e.preventDefault(); select((idx + moves[e.key] + n) % n, true); }
    if (e.key === "Home") { e.preventDefault(); select(0, true); }
    if (e.key === "End") { e.preventDefault(); select(n - 1, true); }
  });
  const showcase = $("#showcase");
  showcase.addEventListener("mouseenter", () => { hovering = true; schedule(); });
  showcase.addEventListener("mouseleave", () => { hovering = false; if (!userPicked) renderPanel(); });

  $("#featurePanel").addEventListener("click", (e) => {
    const o = e.target.closest(".quiz-opt"); if (!o) return;
    const right = o.dataset.right === "true";
    o.classList.remove("wrong"); void o.offsetWidth;
    o.classList.add(right ? "right" : "wrong");
    if (right) M.burstFrom(o, 40);
  });

  addEventListener("hashchange", () => {
    const i = M.t().features.items.findIndex((f) => "#" + f.id === location.hash);
    if (i >= 0) { select(i); $("#showcase").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); }
  });
})();
