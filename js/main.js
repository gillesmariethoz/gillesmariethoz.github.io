/* Page d'accueil : affiche automatiquement une carte par projet
   défini dans data.js. Rien à modifier ici pour ajouter un projet. */

function renderProjectCards() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (project) => `
    <a class="project-card" href="project.html?id=${project.id}">
      <div class="project-card-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <span class="card-link">Voir le projet &rarr;</span>
      </div>
    </a>
  `
  ).join("");
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  if (!toggle || !header) return;
  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

/* Carrousel : affiche 3 projets à la fois (2 sur tablette, 1 sur mobile)
   et avance/recule d'un projet à chaque clic sur les flèches. */
function setupCarousel() {
  const track = document.getElementById("projects-grid");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  if (!track || !prevBtn || !nextBtn) return;

  let index = 0;

  function visibleCount() {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    if (width <= 860) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, track.children.length - visibleCount());
  }

  function update() {
    index = Math.min(index, maxIndex());
    const card = track.children[0];
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    track.style.transform = `translateX(-${index * step}px)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= maxIndex();
  }

  prevBtn.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    update();
  });

  nextBtn.addEventListener("click", () => {
    index = Math.min(maxIndex(), index + 1);
    update();
  });

  window.addEventListener("resize", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  setupNavToggle();
  setupCarousel();
});
