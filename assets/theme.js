// Theme switcher: four tones × light/dark, and screenshots that follow along.
(function () {
  var root = document.documentElement;
  var paper = {
    "clay-light": "#ECEADF", "clay-dark": "#341A19",
    "moss-light": "#E5E7DA", "moss-dark": "#1A251C",
    "mist-light": "#E3E4E2", "mist-dark": "#1E2328",
    "dusk-light": "#E7E3E6", "dusk-dark": "#241E2A"
  };

  function apply() {
    var tone = root.dataset.tone, mode = root.dataset.mode, key = tone + "-" + mode;
    document.querySelectorAll("[data-set-tone]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setTone === tone));
    });
    document.querySelectorAll("[data-set-mode]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setMode === mode));
    });
    document.querySelectorAll("img[data-shot]").forEach(function (img) {
      var src = "shots/" + key + "/" + img.dataset.shot + ".jpg";
      if (img.getAttribute("src") !== src) img.setAttribute("src", src);
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", paper[key]);
    try { localStorage.setItem("sb-theme", JSON.stringify({ tone: tone, mode: mode })); } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-set-tone], [data-set-mode]");
    if (!b) return;
    if (b.dataset.setTone) root.dataset.tone = b.dataset.setTone;
    if (b.dataset.setMode) root.dataset.mode = b.dataset.setMode;
    apply();
  });

  apply();
})();
