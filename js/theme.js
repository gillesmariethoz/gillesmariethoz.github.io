/* Bascule clair / sombre. La préférence est retenue dans le navigateur,
   et le premier chargement suit le réglage du système d'exploitation. */
(function () {
  var KEY = "gm-theme";

  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
  }

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function initial() {
    var s = saved();
    if (s === "dark" || s === "light") return s;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  apply(initial());

  function set(t) {
    apply(t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var light = document.getElementById("to-light");
    var dark = document.getElementById("to-dark");
    if (light) light.addEventListener("click", function () { set("light"); });
    if (dark) dark.addEventListener("click", function () { set("dark"); });

    /* Menu de navigation sur petit écran. */
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    function close() {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 880) close();
    });
  });
})();
