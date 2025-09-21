// mobile menu
const btn = document.querySelector('.menu-btn');
const ul = document.getElementById('menu');
if (btn) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    ul.classList.toggle('show');
  });
}

// smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      ul?.classList.remove('show');
      btn?.setAttribute('aria-expanded', 'false');
    }
  });
});

// current year
document.getElementById('year').textContent = new Date().getFullYear();
// ---- Theme toggle: cycles Auto → Dark → Light ----
(function() {
  const key = "theme-preference";  // "auto" | "dark" | "light"
  const btn = document.getElementById("theme-toggle");

  function apply(mode) {
    const html = document.documentElement;
    if (mode === "dark") {
      html.setAttribute("data-theme", "dark");
      btn.textContent = "Dark";
    } else if (mode === "light") {
      html.setAttribute("data-theme", "light");
      btn.textContent = "Light";
    } else {
      html.removeAttribute("data-theme"); // fall back to prefers-color-scheme
      btn.textContent = "Auto";
    }
  }

  function getPref() {
    return localStorage.getItem(key) || "auto";
  }
  function setPref(mode) {
    localStorage.setItem(key, mode);
    apply(mode);
  }

  // init
  apply(getPref());

  // click handler cycles modes
  btn?.addEventListener("click", () => {
    const next = { "auto": "dark", "dark": "light", "light": "auto" }[getPref()];
    setPref(next);
  });
})();
