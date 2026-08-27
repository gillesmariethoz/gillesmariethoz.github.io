# Portfolio Gilles Mariethoz — site complet

Site statique, trois langues, 45 fichiers. Du HTML, une feuille de
style, un petit script pour la bascule clair / sombre. Aucun
framework, aucune compilation, aucun projet injecté en JavaScript :
tout le contenu est dans le HTML, donc indexable par Google et visible
dans les aperçus de liens.

## Contenu

    index.html                    accueil FR
    cv.html                       curriculum vitae FR
    projet-<id>.html              12 fiches projet FR
    en/                           les mêmes 14 pages en anglais
    de/                           les mêmes 14 pages en allemand
    404.html
    sitemap.xml, robots.txt
    css/style.css                 toute la mise en forme, les deux thèmes
    js/theme.js                   la bascule clair / sombre
    assets/                       portrait, favicon, CV et fichiers projet

Pages générées : 3 langues × (1 accueil + 1 CV + 12 fiches) = 42, plus
404, sitemap et robots.

## Mise en ligne

Copie tout le contenu de ce dossier à la racine de
`gillesmariethoz.github.io`. Ça écrase `index.html`, `cv.html`,
`css/style.css`, `sitemap.xml`, `robots.txt`, `404.html` et les
dossiers `en/` et `de/`.

Fichiers de ton ancien site devenus inutiles, à supprimer une fois que
tu as vérifié que tout tourne :

    projet.html            remplacé par les 12 pages projet-<id>.html
    js/main.js             le carrousel
    js/project.js          l'ancien rendu de fiche projet
    js/theme-toggle.js     remplacé par js/theme.js
    en/projet.html, de/projet.html

Les anciennes URL `projet.html?id=tpms` deviennent
`projet-tpms.html`. Si des liens externes pointaient vers les
anciennes, garde `projet.html` en place le temps de la transition.

## Retoucher les couleurs

Tout est en haut de `css/style.css`, dans `:root` (thème clair) et
`[data-theme="dark"]` (thème sombre). Sept variables par thème :

    --bg        le fond
    --surface   le fond des images en attente
    --ink       le texte, et par dérivation tous les gris et les traits
    --acc       le bleu acier
    --acc-d     le bleu des liens
    --accx      le bleu au survol
    --on-acc    le texte posé sur le bouton bleu plein

Les gris, les filets et les repères de centrage sont calculés depuis
`--ink` avec `color-mix()`. Change `--ink` et tout suit.

## Modifier le contenu

Deux fichiers sont la source, gardés dans le dossier mais **pas servis
par le site** :

- `js/data.js`, `js/data.en.js`, `js/data.de.js` — les textes des 12
  projets, dans les trois langues. Ce sont tes fichiers d'origine,
  inchangés.
- `_content.js` — le contenu éditorial que j'ai ajouté : accroche,
  chiffres de la plaque, blocs « Résultat », fiches techniques,
  libellés d'interface, contenu du CV, dans les trois langues.

Les pages HTML ont été générées depuis ces deux sources. Si tu changes
un texte, tu peux soit éditer directement le HTML de la page
concernée, soit me redemander une génération complète.

## État : publiable en l'état

Rien ne manque pour mettre le site en ligne. Les 42 pages sont écrites
dans les trois langues, toutes les images sont en place, les liens
internes et les documents PDF résolvent, le sitemap est à jour.

## Pistes, si tu veux aller plus loin

- **Plusieurs images par projet.** `gallery: []` est vide dans tes
  fichiers de données. Trois images par fiche — modèle CAO, carte de
  simulation, pièce réelle — est le gain le plus important qui reste.
- **Le bloc « Résultat » de la lévitation** dit « Dispositif
  fonctionnel », seul bloc sans valeur chiffrée.
- **Relecture de l'anglais** par un anglophone, si tu vises
  l'international.
