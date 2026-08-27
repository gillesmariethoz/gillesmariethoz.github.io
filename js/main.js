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
  const fadeLeft = document.getElementById("carousel-fade-left");
  const fadeRight = document.getElementById("carousel-fade-right");
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
    if (fadeLeft) fadeLeft.classList.toggle("is-visible", index > 0);
    if (fadeRight) fadeRight.classList.toggle("is-visible", index < maxIndex());
  }

  function goPrev() {
    index = Math.max(0, index - 1);
    update();
  }

  function goNext() {
    index = Math.min(maxIndex(), index + 1);
    update();
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  /* Glissement tactile : on peut aussi passer au projet suivant/précédent
     en glissant le doigt à gauche ou à droite sur le carrousel. */
  const viewport = document.querySelector(".carousel-viewport");
  if (viewport) {
    let touchStartX = 0;
    let touchStartY = 0;

    viewport.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;
        const SWIPE_THRESHOLD = 40;
        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) goNext();
          else goPrev();
        }
      },
      { passive: true }
    );
  }

  window.addEventListener("resize", update);
  update();
}

/* Certains navigateurs n'amènent pas toujours correctement la page
   jusqu'à la bonne section quand on arrive avec une adresse du type
   index.html#projets (lien "Gilles Mariethoz" ou "Projets" dans le
   menu). On force ce défilement nous-mêmes, en tenant compte de la
   hauteur du menu fixe en haut de page. */
function scrollToHashTarget() {
  if (!location.hash) return;
  let target;
  try {
    target = document.querySelector(location.hash);
  } catch (e) {
    return;
  }
  if (!target) return;
  const header = document.querySelector(".site-header");
  const offset = (header ? header.offsetHeight : 0) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

window.addEventListener("load", scrollToHashTarget);
window.addEventListener("hashchange", scrollToHashTarget);

document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  setupNavToggle();
  setupCarousel();
});
