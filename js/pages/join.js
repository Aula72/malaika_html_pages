/* Join page: waitlist (with role, preselectable via ?role=) and partner contact form. */
(function () {
  "use strict";
  const M = window.Malaika, { $, $$, esc, store, CONFIG } = M;
  const ROLES = ["patient", "caregiver", "clinician"];
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const param = new URLSearchParams(location.search).get("role");
  let role = ROLES.includes(param) ? param : "patient";

  function renderRoles(w) {
    $("#roleChips").innerHTML = ROLES.map((r) =>
      `<label class="chip radio"><input type="radio" name="role" value="${r}"${r === role ? " checked" : ""} /><span>${esc(w.roles[r])}</span></label>`).join("");
  }

  function updateCount() {
    const n = CONFIG.waitlistBase + (store.get("joined", false) ? 1 : 0);
    $("#waitCountWrap").hidden = n <= 0;
    $("#waitCount").textContent = n.toLocaleString(M.lang);
  }

  function setMsg(el, kind, text) { el.className = "form-msg " + kind; el.textContent = text; }
  function shake(el) { el.classList.remove("invalid"); void el.offsetWidth; el.classList.add("invalid"); }

  async function post(url, body) {
    if (!url) return; // no backend configured: keep it local
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (!res.ok) throw new Error("HTTP " + res.status);
  }

  M.onRender((t) => { renderRoles(t.join.waitlist); updateCount(); });

  $("#roleChips").addEventListener("change", (e) => { role = e.target.value; });

  $("#waitForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const w = M.t().join.waitlist, input = $("#waitEmail"), msg = $("#waitMsg"), btn = $("button[type=submit]", e.target);
    input.classList.remove("invalid");
    const email = input.value.trim();
    if (!EMAIL_RE.test(email)) { shake(input); input.focus(); return setMsg(msg, "err", w.invalid); }
    btn.disabled = true;
    try {
      await post(CONFIG.waitlistEndpoint, { email, role, lang: M.lang });
      store.set("joined", true);
      input.value = "";
      setMsg(msg, "ok", w.success);
      updateCount();
      const m = $("#mascotJoin"); if (m) m.dataset.mood = "done";
      M.burstFrom(btn, 120);
    } catch (err) {
      setMsg(msg, "err", w.error);
    } finally { btn.disabled = false; }
  });

  $("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const c = M.t().join.contact, f = e.target, msg = $("#contactMsg"), btn = $("button[type=submit]", f);
    const data = Object.fromEntries(new FormData(f));
    const field = (n) => f.elements.namedItem(n), bad = [];
    if (!data.name.trim()) bad.push(field("name"));
    if (!EMAIL_RE.test(data.email.trim())) bad.push(field("email"));
    if (!data.message.trim()) bad.push(field("message"));
    $$(".invalid", f).forEach((el) => el.classList.remove("invalid"));
    if (bad.length) { bad.forEach(shake); bad[0].focus(); return setMsg(msg, "err", c.invalid); }
    btn.disabled = true;
    try {
      await post(CONFIG.contactEndpoint, { ...data, lang: M.lang });
      f.reset();
      setMsg(msg, "ok", c.success);
      M.burstFrom(btn, 60);
    } catch (err) {
      setMsg(msg, "err", M.t().join.waitlist.error);
    } finally { btn.disabled = false; }
  });
})();
