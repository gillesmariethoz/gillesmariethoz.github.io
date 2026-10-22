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
    /* Mouvement éditorial : progression, révélations et léger parallaxe.
       Tout reste sobre et se coupe automatiquement avec reduced-motion. */
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    function updateProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = "scaleX(" + ratio + ")";
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    if (!reduceMotion && "IntersectionObserver" in window) {
      var revealTargets = document.querySelectorAll(".sec-head, .feature, .list-row, .plate-cell, .tl-row, .cartouche, .spec, .sec, .award-card, .technical-gallery figure");
      revealTargets.forEach(function (el, i) {
        el.classList.add("reveal");
        el.style.setProperty("--reveal-delay", Math.min(i % 4, 3) * 55 + "ms");
      });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -48px" });
      revealTargets.forEach(function (el) { observer.observe(el); });

      var hero = document.querySelector(".hero");
      if (hero) {
        hero.addEventListener("pointermove", function (e) {
          var rect = hero.getBoundingClientRect();
          hero.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3));
          hero.style.setProperty("--my", ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3));
        });
      }
    }

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
