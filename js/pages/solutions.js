/* Solutions page: role switcher (deep-linkable via #patients / #caregivers / #clinics) and comparison table. */
(function () {
  "use strict";
  const M = window.Malaika, { $, $$, esc } = M;
  let idx = 0;

  function idxFromHash(groups) {
    const i = groups.findIndex((g) => "#" + g.id === location.hash);
    if (i >= 0) idx = i;
  }

  // Patients and caregivers go to the waitlist with their role preselected;
  // clinicians go to the partner form.
  const ctaHref = (g) => (g.id === "clinics" ? "join.html#contact" : `join.html?role=${g.id === "patients" ? "patient" : "caregiver"}#waitlist`);

  function renderRole() {
    const groups = M.t().solutions.groups, g = groups[idx];
    $$("#roleTabs button").forEach((b, i) => {
      b.setAttribute("aria-selected", String(i === idx));
      b.tabIndex = i === idx ? 0 : -1;
    });
    $("#roleCard").innerHTML = `
      <div class="emoji">${g.emoji}</div>
      <div class="wc-body">
        <h3>${esc(g.title)}</h3><p class="muted">${esc(g.intro)}</p>
        <ul>${g.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <a class="btn btn-primary" href="${ctaHref(g)}">${esc(g.cta)}</a>
      </div>`;
    // Highlight the matching column in the comparison table
    $$("#compare [data-col]").forEach((c) => c.classList.toggle("hl", +c.dataset.col === idx));
  }

  function select(i, focus) {
    idx = i;
    renderRole();
    history.replaceState(null, "", location.pathname + location.search + "#" + M.t().solutions.groups[idx].id);
    if (focus) $$("#roleTabs button")[idx].focus();
  }

  M.onRender((t) => {
    const s = t.solutions;
    idxFromHash(s.groups);
    $("#roleTabs").innerHTML = s.groups.map((g, i) =>
      `<button role="tab" aria-controls="roleCard" data-i="${i}">${g.emoji} ${esc(g.label)}</button>`).join("");

    const yes = '<span class="yes" aria-label="✓">✓</span>', no = '<span class="no" aria-label="—">—</span>';
    $("#compare").innerHTML = `
      <caption>${esc(s.compare.title)}</caption>
      <thead><tr><th></th>${s.compare.cols.map((c, i) => `<th scope="col" data-col="${i}">${esc(c)}</th>`).join("")}</tr></thead>
      <tbody>${s.compare.rows.map((r) =>
        `<tr><th scope="row">${esc(r.label)}</th>${r.v.map((v, i) => `<td data-col="${i}">${v ? yes : no}</td>`).join("")}</tr>`).join("")}</tbody>`;
    renderRole();
  });

  const tabs = $("#roleTabs");
  tabs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) select(+b.dataset.i); });
  tabs.addEventListener("keydown", (e) => {
    const n = M.t().solutions.groups.length, d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (d) { e.preventDefault(); select((idx + d + n) % n, true); }
  });
  addEventListener("hashchange", () => {
    const i = M.t().solutions.groups.findIndex((g) => "#" + g.id === location.hash);
    if (i >= 0) { idx = i; renderRole(); }
  });
})();
