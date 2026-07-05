// ---- 2-position THEME TOGGLE: Auto by default; click toggles Light/Dark; long-press resets Auto ----
(function () {
  const KEY = "theme-preference";         // "auto" | "light" | "dark"
  const html = document.documentElement;
  const mql  = window.matchMedia("(prefers-color-scheme: dark)");
  const el   = document.getElementById("theme-toggle2");

  if (!el) return;

  function effectiveIsDark() {
    const pref = localStorage.getItem(KEY) || "auto";
    if (pref === "dark")  return true;
    if (pref === "light") return false;
    return mql.matches; // auto => follow system
  }

  function apply(pref) {
    if (pref === "dark") {
      html.setAttribute("data-theme", "dark");
    } else if (pref === "light") {
      html.setAttribute("data-theme", "light");
    } else {
      html.removeAttribute("data-theme"); // auto
    }

    const isDark = effectiveIsDark();
    el.dataset.state = isDark ? "dark" : "light";
    el.setAttribute("aria-checked", String(isDark));
  }

  function getPref() { return localStorage.getItem(KEY) || "auto"; }
  function setPref(v) { localStorage.setItem(KEY, v); apply(v); }

  apply(getPref());

  mql.addEventListener?.("change", () => { if (getPref()==="auto") apply("auto"); });

  el.addEventListener("click", () => {
    const pref = getPref();
    if (pref === "auto") {
      setPref(effectiveIsDark() ? "light" : "dark");
    } else {
      setPref(pref === "dark" ? "light" : "dark");
    }
  });

  el.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); el.click(); }
  });

  let pressTimer = null;
  const startPress = () => { pressTimer = setTimeout(() => setPref("auto"), 600); };
  const endPress = () => { if (pressTimer) clearTimeout(pressTimer); pressTimer = null; };

  el.addEventListener("pointerdown", startPress);
  el.addEventListener("pointerup", endPress);
  el.addEventListener("pointerleave", endPress);
  el.addEventListener("pointercancel", endPress);
})();
// ---- end of 2-position THEME TOGGLE ----

// ---- Contact form (Formspree fetch submit) ----
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = "Message sent! I'll get back to you soon.";
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please email me directly.';
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send message';
    }
  });
});
// ---- end of Contact form ----

// ---- Scroll reveal (IntersectionObserver, fires once per element) ----
(function () {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
// ---- end of Scroll reveal ----
