/* Page projet : lit l'id dans l'adresse (?id=...) et affiche
   automatiquement le bon contenu depuis data.js. Un seul modèle
   de page sert pour tous les projets. */

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProject() {
  const id = getProjectIdFromUrl();
  const project = PROJECTS.find((p) => p.id === id);
  const root = document.getElementById("project-root");

  if (!project) {
    root.innerHTML = `
      <div class="container" style="padding: 60px 24px;">
        <p>Projet introuvable.</p>
        <a class="back-link" href="index.html">&larr; Retour aux projets</a>
      </div>
    `;
    document.title = "Projet introuvable · Gilles Mariethoz";
    return;
  }

  document.title = `${project.title} · Gilles Mariethoz`;

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <a class="back-link" href="index.html#projets">&larr; Retour aux projets</a>
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
      <a class="back-link" href="index.html#projets">&larr; Retour aux projets</a>
    </div>
  `;
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
        <span>Galerie</span>
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

document.addEventListener("DOMContentLoaded", () => {
  renderProject();
  setupNavToggle();
});
