// ---- 3-position THEME switch: Light | Auto (default) | Dark ----
(function () {
  const KEY = "theme-preference";   // "auto" | "light" | "dark"
  const html = document.documentElement;
  const seg  = document.getElementById("theme-rail");
  const rLight = document.getElementById("th-light");
  const rAuto  = document.getElementById("th-auto");
  const rDark  = document.getElementById("th-dark");
  const sysPref = window.matchMedia("(prefers-color-scheme: dark)");

  function getPref(){ return localStorage.getItem(KEY) || "auto"; }
  function setPref(v){ localStorage.setItem(KEY, v); apply(v); }

  function apply(mode){
    // Apply theme
    if (mode === "dark") html.setAttribute("data-theme","dark");
    else if (mode === "light") html.setAttribute("data-theme","light");
    else html.removeAttribute("data-theme"); // Auto → follow system

    // Reflect UI position
    if (rLight && rAuto && rDark) {
      rLight.checked = (mode === "light");
      rAuto.checked  = (mode === "auto");
      rDark.checked  = (mode === "dark");
    }
  }

  // Initialize (default Auto in the middle)
  apply(getPref());

  // Live update when OS theme changes (only in Auto)
  sysPref.addEventListener?.("change", () => { if (getPref()==="auto") apply("auto"); });

  // Clicks on labels (native) update radios; hook 'change'
  [rLight, rAuto, rDark].forEach(r => r?.addEventListener("change", () => {
    if (r.checked) setPref(r.value);
  }));

  // Arrow-left / Arrow-right on the whole control
  seg?.addEventListener("keydown", (e) => {
    const order = ["light","auto","dark"];
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    let i = order.indexOf(getPref());
    i += (e.key === "ArrowRight" ? +1 : -1);
    i = Math.max(0, Math.min(2, i));
    setPref(order[i]);
  });
})();
