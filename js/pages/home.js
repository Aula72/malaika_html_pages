/* Home page: hero rotator, stats, playable quest demo, steps, highlights, testimonials. */
(function () {
  "use strict";
  const M = window.Malaika, { $, $$, esc, store, reduceMotion } = M;

  /* ---------- Hero rotator (typewriter) ---------- */
  let rotTimer;
  function startRotator(words) {
    clearTimeout(rotTimer);
    const el = $("#rotator");
    if (reduceMotion) { el.textContent = words[0]; return; }
    let w = 0, i = 0, deleting = false;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = deleting ? 45 : 90;
      if (!deleting && i === word.length) { deleting = true; delay = 1600; }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
      rotTimer = setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- Demo state (persists per day) ---------- */
  const todayKey = () => new Date().toISOString().slice(0, 10);
  function loadDemo() {
    const d = store.get("demo", null);
    if (!d) return { day: todayKey(), done: [], streak: 6, completedToday: false };
    if (d.day !== todayKey()) {
      // New day: the streak survives only if yesterday was completed.
      const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      return { day: todayKey(), done: [], streak: d.day === y && d.completedToday ? d.streak : 0, completedToday: false };
    }
    return d;
  }
  const demo = loadDemo();

  function renderDemo(t) {
    $("#quests").innerHTML = t.home.demo.quests.map((q) => {
      const done = demo.done.includes(q.id);
      return `<li><button class="quest${done ? " done" : ""}" data-id="${q.id}" aria-pressed="${done}">
        <span class="qi">${q.icon}</span><span class="qt">${esc(q.title)}</span>
        <span class="qx">+${q.xp}</span><span class="check">${done ? "✓" : ""}</span></button></li>`;
    }).join("");
    updateDemo(false);
  }

  function updateDemo(animate) {
    const d = M.t().home.demo;
    const xp = d.quests.filter((q) => demo.done.includes(q.id)).reduce((a, q) => a + q.xp, 0);
    const pct = Math.round((demo.done.length / d.quests.length) * 100);
    const allDone = demo.done.length === d.quests.length;

    $("#xpVal").textContent = xp;
    $("#lvlVal").textContent = 1 + Math.floor(xp / 50);
    $("#streakVal").textContent = demo.streak;
    $("#ringPct").textContent = pct + "%";
    $("#ringFg").style.strokeDashoffset = 2 * Math.PI * 52 * (1 - pct / 100);
    $("#ringFg").style.stroke = allDone ? "var(--gold)" : "var(--teal)";
    $("#allDone").classList.toggle("show", allDone);

    const mood = allDone ? "done" : demo.done.length ? "progress" : "idle";
    const m = $("#mascotDemo"); if (m) m.dataset.mood = mood;
    const moodEl = $("#demoMood");
    moodEl.textContent = d.moods[mood];
    if (animate) {
      [moodEl, $("#xpVal").parentElement, $("#streakVal").parentElement].forEach((el) => {
        el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
      });
    }
  }

  function toggleQuest(btn) {
    const id = btn.dataset.id, total = M.t().home.demo.quests.length;
    const wasAll = demo.done.length === total;
    demo.done = demo.done.includes(id) ? demo.done.filter((x) => x !== id) : demo.done.concat(id);
    const isAll = demo.done.length === total;
    if (isAll && !demo.completedToday) { demo.streak++; demo.completedToday = true; }
    else if (wasAll && !isAll && demo.completedToday) { demo.streak = Math.max(0, demo.streak - 1); demo.completedToday = false; }
    store.set("demo", demo);

    const done = demo.done.includes(id);
    btn.classList.toggle("done", done);
    btn.setAttribute("aria-pressed", String(done));
    $(".check", btn).textContent = done ? "✓" : "";
    updateDemo(true);
    if (done) {
      const r = btn.getBoundingClientRect();
      M.burst(r.right - 20, r.top + r.height / 2, isAll ? 160 : 18);
    }
  }

  /* ---------- Testimonials carousel ---------- */
  const AV = ["#E8364F", "#1CB0A8", "#7C5CFF", "#FFC233"];
  let slide = 0, slideTimer;
  function renderCarousel(items) {
    slide %= items.length;
    $("#carouselTrack").innerHTML = items.map((q, i) =>
      `<div class="slide"><figure class="quote-card"><blockquote>${esc(q.quote)}</blockquote>
        <figcaption class="who"><span class="av" style="background:${AV[i % AV.length]}">${esc(q.name[0])}</span>
        <span><b>${esc(q.name)}</b><small>${esc(q.role)}</small></span></figcaption></figure></div>`).join("");
    $("#carouselDots").innerHTML = items.map((_, i) => `<button aria-label="${i + 1} / ${items.length}" data-i="${i}"></button>`).join("");
    goSlide(slide);
  }
  function goSlide(i) {
    const slides = $$("#carouselTrack .slide"), n = slides.length;
    slide = (i + n) % n;
    $("#carouselTrack").style.transform = `translateX(-${slide * 100}%)`;
    slides.forEach((s, k) => s.setAttribute("aria-hidden", String(k !== slide)));
    $$("#carouselDots button").forEach((b, k) => b.setAttribute("aria-current", String(k === slide)));
    clearTimeout(slideTimer);
    if (!reduceMotion) slideTimer = setTimeout(() => goSlide(slide + 1), 5500);
  }

  /* ---------- Render ---------- */
  M.onRender((t) => {
    const h = t.home;
    startRotator(h.hero.words);

    $("#stats").innerHTML = h.stats.map((s) =>
      `<div class="stat reveal"><b data-count="${s.value}" data-suffix="${esc(s.suffix)}">0${esc(s.suffix)}</b><span>${esc(s.label)}</span></div>`).join("");

    renderDemo(t);

    $("#steps").innerHTML = h.how.steps.map((s, i) =>
      `<li class="step reveal" style="transition-delay:${i * 0.12}s"><div class="si">${s.icon}</div><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></li>`).join("");

    $("#highlights").innerHTML = h.highlights.items.map((f, i) =>
      `<a class="card link-card reveal" style="transition-delay:${i * 0.1}s" href="features.html#${f.id}">
        <span class="card-icon">${f.icon}</span><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p>
        <span class="card-more">${esc(t.common.learnMore)} →</span></a>`).join("");

    renderCarousel(h.testimonials.items);
  });

  /* ---------- Events (containers are static, so bind once) ---------- */
  $("#quests").addEventListener("click", (e) => { const b = e.target.closest(".quest"); if (b) toggleQuest(b); });
  $("#resetBtn").addEventListener("click", () => {
    if (demo.completedToday) { demo.streak = Math.max(0, demo.streak - 1); demo.completedToday = false; }
    demo.done = []; store.set("demo", demo);
    renderDemo(M.t());
  });
  $("#heroMascot").addEventListener("click", (e) => {
    const m = $("#mascotHero"); if (!m) return;
    m.dataset.mood = "done";
    M.burst(e.clientX, e.clientY, 40);
    setTimeout(() => (m.dataset.mood = "idle"), 1400);
  });

  $("#carouselDots").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) goSlide(+b.dataset.i); });
  const car = $("#carousel");
  car.addEventListener("mouseenter", () => clearTimeout(slideTimer));
  car.addEventListener("mouseleave", () => goSlide(slide));
  let x0 = null;
  car.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  car.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) goSlide(slide + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
