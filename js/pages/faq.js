/* FAQ page: live search with highlighting and category filters. */
(function () {
  "use strict";
  const M = window.Malaika, { $, esc } = M;
  let cat = "all", query = "";

  // Case- and accent-insensitive, so "pacientes" also finds "Pacientes" and "Medicacion" finds "Medicación".
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function highlight(text, q) {
    if (!q) return esc(text);
    const n = norm(text), nq = norm(q);
    let out = "", i = 0, at;
    // normalize("NFD") then stripping marks keeps one char per original char for Latin text
    while ((at = n.indexOf(nq, i)) !== -1) {
      out += esc(text.slice(i, at)) + "<mark>" + esc(text.slice(at, at + q.length)) + "</mark>";
      i = at + q.length;
    }
    return out + esc(text.slice(i));
  }

  function renderChips() {
    const f = M.t().faq, items = f.items;
    const chips = [["all", f.all, items.length]].concat(
      Object.entries(f.categories).map(([id, label]) => [id, label, items.filter((x) => x.cat === id).length]));
    $("#faqChips").innerHTML = chips.map(([id, label, n]) =>
      `<button class="chip" aria-pressed="${id === cat}" data-cat="${id}">${esc(label)} <span class="chip-n">${n}</span></button>`).join("");
  }

  function renderList() {
    const f = M.t().faq, q = query.trim();
    const matches = f.items.filter((x) =>
      (cat === "all" || x.cat === cat) && (!q || norm(x.q + " " + x.a).includes(norm(q))));
    $("#faqList").innerHTML = matches.map((x, i) =>
      `<details${(q && matches.length <= 3) || (!q && i === 0) ? " open" : ""}>
        <summary>${highlight(x.q, q)}</summary><p>${highlight(x.a, q)}</p></details>`).join("");
    $("#faqEmpty").hidden = matches.length > 0;
  }

  M.onRender(() => { renderChips(); renderList(); });

  $("#faqSearch").addEventListener("input", (e) => { query = e.target.value; renderList(); });
  $("#faqChips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    cat = b.dataset.cat; renderChips(); renderList();
  });
})();
