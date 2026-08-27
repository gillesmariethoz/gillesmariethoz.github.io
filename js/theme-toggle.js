/* Bouton soleil/lune : bascule manuellement entre mode clair et sombre,
   et retient le choix du visiteur (localStorage) pour ses prochaines
   visites. Sans clic, le site suit simplement les préférences de son
   navigateur/système. */

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getEffectiveTheme() {
  const saved = document.documentElement.getAttribute("data-theme");
  if (saved === "light" || saved === "dark") return saved;
  return systemPrefersDark() ? "dark" : "light";
}

function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = getEffectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

document.addEventListener("DOMContentLoaded", setupThemeToggle);
