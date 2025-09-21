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
    // Apply data-theme on <html>
    if (pref === "dark") {
      html.setAttribute("data-theme", "dark");
    } else if (pref === "light") {
      html.setAttribute("data-theme", "light");
    } else {
      html.removeAttribute("data-theme"); // auto
    }

    // Reflect visual state (thumb left for light, right for dark) based on *effective* theme
    const isDark = effectiveIsDark();
    el.dataset.state = isDark ? "dark" : "light";
    el.setAttribute("aria-checked", String(isDark)); // true when dark
  }

  function getPref() { return localStorage.getItem(KEY) || "auto"; }
  function setPref(v) { localStorage.setItem(KEY, v); apply(v); }

  // Init: start in Auto (no saved pref), so follow system
  apply(getPref());

  // Live reaction when OS theme changes (only matters when in Auto)
  mql.addEventListener?.("change", () => { if (getPref()==="auto") apply("auto"); });

  // Click: toggle Light <-> Dark
  el.addEventListener("click", () => {
    const pref = getPref();
    if (pref === "auto") {
      // From auto, choose the opposite of current effective theme to make the change obvious
      setPref(effectiveIsDark() ? "light" : "dark");
    } else {
      // Toggle explicit modes
      setPref(pref === "dark" ? "light" : "dark");
    }
  });

  // Keyboard: Space/Enter toggles
  el.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); el.click(); }
  });

  // Long-press (600ms) anywhere on the toggle resets to Auto (no separate "A" button)
  let pressTimer = null;
  const startPress = () => { pressTimer = setTimeout(() => setPref("auto"), 600); };
  const endPress = () => { if (pressTimer) clearTimeout(pressTimer); pressTimer = null; };

  el.addEventListener("pointerdown", startPress);
  el.addEventListener("pointerup", endPress);
  el.addEventListener("pointerleave", endPress);
  el.addEventListener("pointercancel", endPress);
})();
// ---- end of 2-position THEME TOGGLE ----