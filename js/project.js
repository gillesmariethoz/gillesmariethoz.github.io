/* Page projet : lit l'id dans l'adresse (?id=...) et affiche
   automatiquement le bon contenu depuis data.js (ou data.en.js /
   data.de.js selon la langue). Un seul modèle de page sert pour
   tous les projets, dans les 3 langues. */

const UI_STRINGS = {
  fr: { notFound: "Projet introuvable.", notFoundTitle: "Projet introuvable", back: "Retour aux projets", gallery: "Galerie" },
  en: { notFound: "Project not found.", notFoundTitle: "Project not found", back: "Back to projects", gallery: "Gallery" },
  de: { notFound: "Projekt nicht gefunden.", notFoundTitle: "Projekt nicht gefunden", back: "Zurück zu den Projekten", gallery: "Galerie" },
};

function t() {
  const lang = document.documentElement.lang || "fr";
  return UI_STRINGS[lang] || UI_STRINGS.fr;
}

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProject() {
  const id = getProjectIdFromUrl();
  const project = PROJECTS.find((p) => p.id === id);
  const root = document.getElementById("project-root");
  const strings = t();

  if (!project) {
    root.innerHTML = `
      <div class="container" style="padding: 60px 24px;">
        <p>${strings.notFound}</p>
        <a class="back-link" href="index.html">&larr; ${strings.back}</a>
      </div>
    `;
    document.title = `${strings.notFoundTitle} · Gilles Mariethoz`;
    return;
  }

  document.title = `${project.title} · Gilles Mariethoz`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", project.shortDescription);

  setupHreflangLinks(id);

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <a class="back-link" href="index.html#projets">&larr; ${strings.back}</a>
        <h1>${project.title}</h1>
        <p class="project-subtitle">${project.subtitle}</p>
        ${renderLinks(project)}
        <div class="project-main-image">
          <img src="${project.image}" alt="${project.title}" />
        </div>
      </div>
    </section>

    <section class="project-body">
      <div class="container project-body">
        ${project.sections
          .map((section, i) => renderBlock(String(i + 1).padStart(2, "0"), section.title, section.text))
          .join("")}
        ${renderGallery(project)}
      </div>
    </section>

    <div class="container project-footer-nav">
      <a class="back-link" href="index.html#projets">&larr; ${strings.back}</a>
    </div>
  `;
}

/* Indique aux moteurs de recherche les 3 versions linguistiques de
   cette même page projet (utile pour le référencement, invisible
   pour les visiteurs). */
function setupHreflangLinks(id) {
  if (!id) return;
  const base = "https://gillesmariethoz.github.io";
  const hrefs = {
    fr: `${base}/project.html?id=${id}`,
    en: `${base}/en/project.html?id=${id}`,
    de: `${base}/de/project.html?id=${id}`,
  };
  Object.entries(hrefs).forEach(([lang, href]) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.setAttribute("hreflang", lang);
    link.href = href;
    document.head.appendChild(link);
  });
  const defaultLink = document.createElement("link");
  defaultLink.rel = "alternate";
  defaultLink.setAttribute("hreflang", "x-default");
  defaultLink.href = hrefs.fr;
  document.head.appendChild(defaultLink);
}

function renderBlock(num, label, text) {
  return `
    <div class="project-block">
      <div class="project-block-label">
        <span class="num">${num}</span>
        <span>${label}</span>
      </div>
      <div class="project-block-content">
        <p>${text}</p>
      </div>
    </div>
  `;
}

function renderLinks(project) {
  if (!project.links || project.links.length === 0) return "";
  return `
    <div class="project-links">
      ${project.links
        .map(
          (link) =>
            `<a href="${link.url}" target="_blank" rel="noopener">${link.label} &#8599;</a>`
        )
        .join("")}
    </div>
  `;
}

function renderGallery(project) {
  if (!project.gallery || project.gallery.length === 0) return "";
  return `
    <div class="project-block">
      <div class="project-block-label">
        <span class="num">+</span>
        <span>${t().gallery}</span>
      </div>
      <div class="project-block-content">
        <div class="project-gallery">
          ${project.gallery
            .map((src) => `<img src="${src}" alt="${project.title}" loading="lazy" />`)
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  if (!toggle || !header) return;
  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

function setupLangLinks() {
  const id = getProjectIdFromUrl();
  if (!id) return;
  document.querySelectorAll(".lang-link").forEach((link) => {
    link.href = `${link.getAttribute("href")}?id=${id}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProject();
  setupNavToggle();
  setupLangLinks();
});
