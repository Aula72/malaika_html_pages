/* About page: story paragraphs and values grid. */
(function () {
  "use strict";
  const M = window.Malaika, { $, esc } = M;

  M.onRender((t) => {
    const a = t.about;
    $("#story").innerHTML = a.story.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#values").innerHTML = a.values.items.map((v, i) =>
      `<div class="card value reveal" style="transition-delay:${i * 0.1}s"><span class="card-icon">${v.icon}</span><h3>${esc(v.title)}</h3><p>${esc(v.body)}</p></div>`).join("");
  });

  $("#aboutMascot").addEventListener("click", (e) => {
    const m = $("#mascotAbout"); if (!m) return;
    m.dataset.mood = "done";
    M.burst(e.clientX, e.clientY, 40);
    setTimeout(() => (m.dataset.mood = "idle"), 1400);
  });
})();
