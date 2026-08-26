/* =========================================================
   FICHIER DE CONTENU DES PROJETS
   =========================================================
   C'est ICI que tu ajoutes, modifies ou supprimes un projet.
   Tu n'as JAMAIS besoin de toucher aux autres fichiers du site.

   POUR AJOUTER UN PROJET :
   1. Copie un bloc entier ci-dessous, du "{" au "}," qui le termine.
   2. Colle-le avant le "];" à la fin de la liste.
   3. Change les textes entre guillemets " ".
   4. Donne-lui un "id" unique (sans espace ni accent, ex: "mon-projet").
   5. Mets tes images dans un dossier assets/projects/<id>/ et
      indique leur chemin dans "image" et "gallery".
   6. Enregistre le fichier. Le site se met à jour automatiquement,
      sur la page d'accueil ET sur la page projet.

   POUR SUPPRIMER UN PROJET :
   Supprime son bloc entier (du "{" au "},").

   POUR CHANGER L'ORDRE :
   Change simplement l'ordre des blocs dans la liste.
   (Actuellement : ordre chronologique, du plus ancien au plus récent.)

   À PROPOS DE "sections" :
   Chaque projet a sa propre liste de sections (pas besoin d'avoir
   toujours les mêmes 5 blocs "contexte / conception / simulation...").
   Tu peux mettre autant de sections que tu veux, avec le titre que
   tu veux :
     sections: [
       { title: "Mon titre", text: "Mon texte..." },
       { title: "Un autre titre", text: "Encore du texte..." },
     ],

   À PROPOS DE "links" :
   Liste de liens externes affichés sur la page du projet (article,
   vidéo, page du concours, dépôt GitHub, etc.). Laisse [] si aucun.
     links: [
       { label: "Article", url: "https://..." },
       { label: "Vidéo", url: "https://..." },
     ],
   ========================================================= */

const PROJECTS = [
  {
    id: "decoupe-connecteurs",
    title: "Machine de découpe de barrettes de connecteur",
    subtitle: "Travail de diplôme ES, ETML-ES",
    shortDescription:
      "Machine automatisée pour découper des barrettes de connecteur, conçue durant le travail de diplôme ES puis poussée plus loin par la suite.",
    tags: ["Conception mécanique", "Automatisation", "Pneumatique", "CAO"],
    image: "assets/projects/decoupe-connecteurs/cover.png",
    links: [
      { label: "Résumé officiel du travail de diplôme (PDF)", url: "assets/projects/decoupe-connecteurs/resume-diplome.pdf" },
    ],
    sections: [
      {
        title: "Le projet",
        text: "L'objectif était de développer une machine capable de découper des barrettes de connecteur, pour l'entreprise mandante DSMI electronics SA.",
      },
      {
        title: "Fonctionnement",
        text: "La machine est composée d'un vérin qui effectue des va-et-vient : à chaque cycle, il prend une pièce, la découpe puis l'éjecte, pour une cadence visée d'environ 1,5 pièce par seconde.",
      },
      {
        title: "La suite du projet",
        text: "Le travail de diplôme, réalisé en 197 heures, a été terminé dans les temps mais la machine n'avait alors pas pu être construite, faute de délais de livraison trop longs pour certaines pièces. J'ai eu la chance de pouvoir continuer à travailler dessus par la suite, pour pousser le projet jusqu'au bout.",
      },
      {
        title: "Ce que j'ai appris",
        text: "Ce projet m'a beaucoup appris, notamment qu'il n'est pas toujours nécessaire d'optimiser à outrance pour obtenir le poids le plus léger possible, si c'est au détriment de la rigidité de l'ensemble.",
      },
    ],
    gallery: [],
  },
  {
    id: "robot-hepia",
    title: "Sugarland · Concours Robots HEPIA",
    subtitle: "HEPIA · 2023 · Projet de 1ère année",
    shortDescription:
      "Robot 100% autonome, lauréat du prix de la performance temporelle au concours Robots HEPIA 2023, chargé de débarrasser une table de dîner aux chandelles.",
    tags: ["Robotique", "Conception mécanique", "Autonomie", "HEPIA"],
    image: "assets/projects/robot-hepia/cover.png",
    links: [
      { label: "Article HEPIA (résultats)", url: "https://www.hesge.ch/hepia/actualites/2023/concours-robots-2023-les-resultats" },
      { label: "Reportage 20 minutes", url: "https://www.20min.ch/fr/video/des-robots-debarrassent-les-tables-de-lhepia-617765467307" },
      { label: "Concours en direct (YouTube)", url: "https://www.youtube.com/watch?v=0bvMtc37eQ0" },
    ],
    sections: [
      {
        title: "Le défi",
        text: "16ᵉ édition du concours Robots organisé par HEPIA (Genève), épreuve de fin de première année pour les filières Génie mécanique et Microtechniques. Le défi : concevoir un robot capable de débarrasser deux assiettes d'un dîner aux chandelles et de les ramener à leur point de départ, en totale autonomie, sans télécommande. Toute intervention humaine après le lancement entraînait une pénalité de temps.",
      },
      {
        title: "L'équipe et le robot",
        text: "Robot conçu et construit en équipe sous le nom « Les Présidents », avec Julian Bjørgo, Cécilia Descamps, Albert Guedj et Léa Lornetti. Le robot, baptisé Sugarland, a été développé sur plusieurs mois avant la compétition, avec un habillage entièrement sur le thème des sucreries.",
      },
      {
        title: "Mon rôle : conception mécanique",
        text: "En tant que chef de la mécanique de l'équipe, j'ai conçu la majorité des organes mécaniques du robot : les cames permettant de soulever les assiettes, les courroies chargées de les entraîner, ainsi que les engrenages entraînant les roues. J'ai également conçu l'encodeur utilisé pour mesurer le déplacement du robot et connaître sa position, ainsi que le châssis. C'est notamment grâce à ce châssis, réalisé avec des profilés item, que j'ai pu échanger avec item et obtenir leur sponsoring pour l'équipe.",
      },
      {
        title: "Résultat",
        text: "Le concours attribuait trois prix (performance temporelle, conception technique et esthétique) qu'un même robot ne pouvait pas cumuler. Sugarland a remporté le prix de la performance temporelle, tout en étant également bien placé dans les deux autres catégories. L'évènement a été relayé par 20 minutes et diffusé en direct sur YouTube par HEPIA.",
      },
      {
        title: "Ce que j'ai appris",
        text: "Ce projet a été ma première vraie expérience de travail d'équipe et de gestion de projet, avec des délais serrés à tenir. Sur le plan technique, il m'a permis de me former concrètement à la conception de mécanismes à cames et de courroies, ainsi qu'à l'intégration de pièces imprimées en 3D dans un ensemble mécanique fonctionnel.",
      },
    ],
    gallery: [],
  },
  {
    id: "bella-lui-vrt",
    title: "Bella Lui · Formula Student VRT",
    subtitle: "VRT (Valais Racing Team) · 2023-2024",
    shortDescription:
      "Voiture électrique de Formula Student de la VRT : conception du TSAC (conteneur d'accumulateur) au sein de la Team Mécanique.",
    tags: ["Formula Student", "TSAC", "Véhicule électrique", "VRT"],
    image: "assets/projects/bella-lui-vrt/cover.png",
    links: [
      { label: "Page VRT : Bella Lui", url: "https://www.vrt-fs.ch/nos-creations/bella-lui" },
    ],
    sections: [
      {
        title: "Le projet",
        text: "Bella Lui est la deuxième monoplace de la VRT (Valais Racing Team), l'équipe Formula Student de la HES-SO Valais. La voiture développe 80 kW pour une vitesse de pointe de 120 km/h, pour une masse de 280 kg. L'équipe est organisée en trois pôles : Team Mécanique, Team Électrique et Team Business.",
      },
      {
        title: "Mon rôle : TSAC",
        text: "Au sein de la Team Mécanique, j'ai surtout travaillé sur la partie mécanique du TSAC (Tractive System Accumulator Container), le conteneur qui accueille et protège la batterie haute tension du véhicule, en binôme avec Nicolas Landry. Ce travail s'est fait dans le cadre de normes et d'un règlement stricts, et m'a permis de développer mon travail en équipe.",
      },
      {
        title: "Autres contributions",
        text: "En parallèle du TSAC, j'ai aussi conçu les fixations des ailerons ainsi que le firewall (paroi coupe-feu séparant l'accumulateur de l'habitacle), ainsi que quelques autres petites pièces sur la voiture.",
      },
      {
        title: "Certification haute tension",
        text: "Pour pouvoir travailler sur le TSAC, j'ai obtenu les certifications VRT HV2 et HV3, nécessaires pour intervenir sur les systèmes haute tension du véhicule.",
      },
    ],
    gallery: [],
  },
  {
    id: "potence-mdf",
    title: "Potence en MDF",
    subtitle: "HES-SO Valais, 2ᵉ année, 1er semestre",
    shortDescription:
      "Structure porteuse construite à partir d'une seule plaque de MDF, testée en charge jusqu'à la rupture face aux autres équipes.",
    tags: ["Conception mécanique", "Résistance des matériaux", "Travail d'équipe"],
    image: "assets/projects/potence-mdf/cover.png",
    links: [],
    sections: [
      {
        title: "Le défi",
        text: "Concevoir et construire une potence capable de porter le plus de charge possible, en n'utilisant qu'une seule plaque de MDF comme matière première. La contrainte du matériau unique obligeait à bien réfléchir la géométrie et le découpage avant de passer à la fabrication : la moindre erreur de découpe ne laissait aucune marge pour recommencer.",
      },
      {
        title: "Conception",
        text: "Projet réalisé en équipe avec Aurore Mauris et Sven Voltolini, de la conception de la géométrie jusqu'à la découpe et l'assemblage de la potence. L'assemblage a été pensé avec des fixations par cheville, comme en menuiserie, plutôt qu'avec de la visserie ou de la colle, tout en respectant la surface limitée de la plaque de MDF disponible.",
      },
      {
        title: "Résultat",
        text: "Toutes les potences de la classe ont été testées en charge jusqu'à la rupture, afin de déterminer laquelle tenait le plus de poids avant de céder. Notre potence a remporté le test, avec la meilleure résistance de toutes les équipes.",
      },
      {
        title: "Ce que j'ai appris",
        text: "Ce projet a été une bonne introduction concrète à la résistance des matériaux et aux techniques d'assemblage par cheville issues de la menuiserie. Travailler avec une seule plaque de matière, sans droit à l'erreur, nous a aussi appris à valider notre conception avant de couper quoi que ce soit, et à bien répartir le travail en équipe sous la pression du temps.",
      },
    ],
    gallery: [],
  },
  {
    id: "design-eversys",
    title: "Redesign d'une machine à café Eversys",
    subtitle: "Design industriel, HES-SO Valais-Wallis, en partenariat avec Eversys",
    shortDescription:
      "Concept esthétique d'une machine à café professionnelle, en partenariat avec Eversys et des designers industriels.",
    tags: ["Design industriel", "Esthétique", "CAO", "Eversys"],
    image: "assets/projects/design-eversys/detail-selecteur.jpg",
    links: [
      { label: "Portfolio du projet (PDF)", url: "assets/projects/design-eversys/portfolio.pdf" },
    ],
    sections: [
      {
        title: "Le projet",
        text: "Dans le cadre du cours de Design industriel à la HES-SO Valais-Wallis, ce projet a été réalisé en partenariat avec Eversys, fabricant suisse de machines à café professionnelles, ce qui nous a permis de rencontrer des professionnels du design artistique. L'objectif, en équipe de deux avec Tristan Coppey, était de repenser l'esthétique d'une machine à café professionnelle (Eversys Cameo Classic), autour de trois priorités : une sélection du café intuitive, une simplicité de montage et d'utilisation, et une vue dégagée sur le café durant le service.",
      },
      {
        title: "Démarche",
        text: "Trois pistes de concepts très différentes ont été explorées et esquissées, avant de choisir de développer plus loin la piste retenue : un bras en forme de coude de tuyau, avec un cylindre rotatif de sélection du café.",
      },
      {
        title: "Le concept final",
        text: "Le résultat final adopte une esthétique inspirée du steampunk : un coude en cuivre soutient un cylindre de sélection orné d'anneaux en laiton, avec une poignée en bois pour valider le choix, des crochets pour poser les tasses, et un tapis d'égouttement intégré.",
      },
      {
        title: "Une approche différente",
        text: "Ce projet était spécial pour moi : c'est la première fois que je concevais en ne pensant qu'à l'esthétique, sans contrainte technique à résoudre en priorité.",
      },
    ],
    gallery: [],
  },
  {
    id: "alpinea-vrt",
    title: "Alpinea · Formula Student VRT",
    subtitle: "VRT (Valais Racing Team) · 2ᵉ année, 2024-2025",
    shortDescription:
      "Troisième monoplace électrique de la VRT : simulations de sécurité, formation CAO et soutien à la Team Mécanique.",
    tags: ["Formula Student", "Simulation", "CAO", "VRT"],
    image: "assets/projects/alpinea-vrt/cover.png",
    links: [
      { label: "Page VRT : Alpinea", url: "https://www.vrt-fs.ch/nos-creations/alpinea" },
    ],
    sections: [
      {
        title: "Le projet",
        text: "Alpinea est la troisième monoplace électrique de la VRT (Valais Racing Team). Elle développe 80 kW pour une vitesse de pointe de 120 km/h, pour une masse de 263,5 kg. L'équipe s'est élargie par rapport aux saisons précédentes, avec cette fois cinq pôles : Team Mécanique, Team Électrique, Team IT, Team Business et Team Driverless.",
      },
      {
        title: "Mon rôle",
        text: "Durant ma 2ᵉ année, j'ai surtout épaulé mon ami Nicolas Landry dans son rôle de responsable de la Team Mécanique. J'ai aussi formé plusieurs personnes de l'équipe à la CAO sur Inventor.",
      },
      {
        title: "Simulations de sécurité",
        text: "J'ai réalisé les simulations du châssis, de l'appui-tête et du moyeu. Ces simulations ont montré que ces pièces se trouvaient en dessous des facteurs de sécurité visés. Malgré ce constat, l'équipe a décidé de conserver la même taille et le même matériau.",
      },
    ],
    gallery: [],
  },
  {
    id: "lanceur-balles-golf",
    title: "Lanceur de balles de golf",
    subtitle: "Projet mécanique, HES-SO Valais-Wallis, septembre 2024 à mai 2025",
    shortDescription:
      "Lanceur de balles de golf à propulsion pneumatique, conçu en binôme et vainqueur du concours face aux autres équipes.",
    tags: ["Conception mécanique", "CAO", "Pneumatique", "Balistique"],
    image: "assets/projects/lanceur-balles-golf/cover.png",
    links: [
      { label: "Rapport complet du projet (PDF)", url: "assets/projects/lanceur-balles-golf/rapport.pdf" },
    ],
    sections: [
      {
        title: "Le défi",
        text: "Dans le cadre du cours de Projet mécanique à la HES-SO Valais-Wallis, concevoir et construire un lanceur de balles de golf, en équipe de deux avec Laura Weber.",
      },
      {
        title: "1er semestre : conception",
        text: "Analyse complète du besoin, évaluation de 15 concepts différents, puis sélection de la propulsion par air comprimé comme solution la plus efficace. Calculs balistiques et thermodynamiques pour définir les paramètres de tir (25,7 m/s, angle de 45°, portée de 50 m), suivis d'un modèle CAO complet intégrant les systèmes pneumatiques et de sécurité.",
      },
      {
        title: "2ᵉ semestre : fabrication",
        text: "Fabrication et assemblage du lanceur, combinant pièces usinées, pièces imprimées en 3D et commandes électro-pneumatiques. Collaboration avec SMC, qui a fourni les composants pneumatiques.",
      },
      {
        title: "Fonctionnement",
        text: "Le réservoir est rempli d'air comprimé ; une vanne mécanique de sécurité garantit qu'il ne reste pas de pression lorsqu'elle est ouverte. Une pression de 0,8 bar allume les voyants mécanique et électrique. Sur pression de la télécommande, un signal électrique déclenche la vanne électropneumatique, qui elle-même actionne la vanne à impulsion : celle-ci libère d'un coup l'air du réservoir vers le canon, ce qui éjecte la balle. Les pièces imprimées en 3D, lestées de sable, et les plaques en MDF assurent la stabilité du lanceur au moment du tir.",
      },
      {
        title: "Tests et validation",
        text: "Le réservoir a fait l'objet de calculs de résistance sous pression (contraintes dans les parois, tenue des soudures) avant d'être testé physiquement sous pression. Le lanceur a ensuite été testé à vide, puis vérifié point par point par rapport au cahier des charges.",
      },
      {
        title: "Résultat",
        text: "Le projet s'est conclu par un concours entre toutes les équipes d'étudiants. Notre lanceur a remporté la première place, ayant touché la cible plus souvent que tous les autres systèmes.",
      },
    ],
    gallery: [],
  },
  {
    id: "cfd-naca0015",
    title: "Étude de l'écoulement autour d'un profil NACA 0015",
    subtitle: "Cours CFD, HES-SO Valais-Wallis, 3ᵉ année, semestre 4",
    shortDescription:
      "Simulation numérique de l'écoulement autour d'un profil NACA 0015, avec analyse du décrochage à différents angles d'attaque.",
    tags: ["CFD", "ANSYS", "JavaFoil", "Simulation"],
    image: "assets/projects/cfd-naca0015/cover.png",
    links: [],
    sections: [
      {
        title: "Le projet",
        text: "Projet mené en deux parties. La première partie a consisté à simuler l'écoulement d'eau autour d'un profil NACA 0015 à 0° d'angle d'attaque, afin de valider le modèle numérique, la portance, la traînée et le comportement de l'écoulement. La seconde partie a étendu l'étude à différents angles d'attaque, en analysant l'évolution de la portance, de la traînée et des caractéristiques de l'écoulement, jusqu'au décrochage et à la séparation de l'écoulement aux angles élevés.",
      },
      {
        title: "Résultats",
        text: "La convergence des simulations et la qualité du maillage ont été vérifiées. Les coefficients de portance et de traînée obtenus correspondaient aux attentes et aux simulations de référence. Les champs de pression, de frottement et de vitesse étaient cohérents avec le comportement théorique attendu, et le décrochage ainsi que la séparation de l'écoulement ont bien été observés aux angles d'attaque élevés.",
      },
      {
        title: "Conclusion",
        text: "Ce projet a démontré la fiabilité du modèle numérique pour un écoulement stationnaire autour d'un profil symétrique, et a permis de mieux comprendre l'effet de l'angle d'attaque. Pistes d'amélioration identifiées : affiner le maillage près du profil et utiliser un modèle de transition laminaire-turbulent pour des prédictions de frottement plus précises. Outils utilisés : ANSYS, JavaFoil.",
      },
      {
        title: "Ce que j'ai appris",
        text: "Ce projet m'a permis d'apprendre à simuler un écoulement et, plus largement, de me construire une bonne base en mécanique des fluides numérique (CFD).",
      },
    ],
    gallery: [],
  },
  {
    id: "reverse-engineering-mixeur",
    title: "Reverse engineering d'un mixeur plongeant",
    subtitle: "Cours Reverse Engineering, HES-SO Valais-Wallis, 3ᵉ année, semestre 4",
    shortDescription:
      "Analyse par rétro-ingénierie d'un mixeur plongeant Tristar BL-4431 : matériaux, efforts, coûts et sécurité.",
    tags: ["Reverse engineering", "Analyse matériaux", "Analyse de sécurité", "Granta"],
    image: "assets/projects/reverse-engineering-mixeur/cover.png",
    links: [],
    sections: [
      {
        title: "Le produit",
        text: "Étude d'un mixeur plongeant Tristar BL-4431, compact, pensé pour 1 ou 2 personnes, avec bol détachable de 450 ml et moteur 180 W à 2 vitesses. Projet réalisé avec Kevin Pernet. Après avoir établi son schéma fonctionnel, trois pièces particulièrement intéressantes ont été sélectionnées pour l'analyse : la lame, le palier côté lame et un élastomère injecté autour d'une pièce métallique.",
      },
      {
        title: "Analyse des matériaux",
        text: "L'élastomère a été caractérisé avec une dureté Shore A mesurée autour de 60 (plage attendue 53-66), une densité de 1100 à 1300 kg/m³ et une température de transition vitreuse d'environ -120 à -125°C (mesurée par DSC). La pièce métallique, d'abord supposée en aluminium, s'est révélée être en Zamak (alliage zinc-aluminium ZA-8) injecté, confirmé par microscopie électronique.",
      },
      {
        title: "Efforts et coûts",
        text: "L'analyse de la boucle des efforts a montré des contraintes de l'ordre de 2 MPa. L'analyse de coût, réalisée avec le logiciel Granta, a estimé la pièce en Zamak injecté à environ 1,90 CHF, le taraudage à 0,01 CHF, et l'élastomère injecté autour de la pièce en Zamak à environ 0,66 CHF.",
      },
      {
        title: "Analyse de sécurité",
        text: "Une analyse des risques (type arbre de défaillance) a été menée : risque d'électrocution estimé à environ 1 sur 72 000 (isolation interne défectueuse ou câble endommagé, combiné à une utilisation en milieu humide), risque de blessure par les lames à environ 1 sur 125 000 (fixation de lame défectueuse combinée à une mauvaise utilisation), et risque d'incendie à environ 1 sur 48 000 (court-circuit interne dû à une surchauffe du moteur, combiné à un blocage mécanique lors d'une utilisation prolongée).",
      },
      {
        title: "Diagnostic et améliorations",
        text: "L'élastomère amortisseur présente plusieurs avantages : réduction des vibrations, protection contre les à-coups, réduction du bruit et sécurité en cas de surcharge. En contrepartie, il augmente le coût et le temps de production, s'use avec le temps, expose le zinc à un risque de corrosion et reste plus faible en cas d'abus. Pistes d'amélioration proposées : passer à un procédé de fabrication en une seule pièce, améliorer la lame, revoir le câblage, réduire le bruit du pivot et améliorer la ventilation contre la surchauffe.",
      },
    ],
    gallery: [],
  },
  {
    id: "levitation-magnetique",
    title: "Lévitation magnétique par supraconductivité",
    subtitle: "Projet PI, 3ᵉ année, Bachelor Systèmes industriels",
    shortDescription:
      "Dispositif de lévitation magnétique par supraconductivité, imaginé et construit de bout en bout durant le Bachelor.",
    tags: ["Physique appliquée", "Électronique", "Contrôle", "Supraconductivité"],
    image: "assets/projects/levitation-magnetique/cover.jpg",
    links: [
      { label: "Article HES-SO Valais-Wallis", url: "https://www.hevs.ch/fr/actualites/quand-la-physique-fait-leviter-la-technologie-un-projet-etudiant-en-ingenierie-des-systemes-industriels-211842" },
    ],
    sections: [
      {
        title: "Le principe",
        text: "La sustentation magnétique par supraconductivité est un phénomène spectaculaire : refroidi à très basse température (typiquement à l'azote liquide), un matériau supraconducteur devient capable de repousser un champ magnétique et de léviter. Ce principe ouvre des perspectives dans les transports à grande vitesse (trains à lévitation), l'ingénierie de précision ou encore le stockage d'énergie.",
      },
      {
        title: "Le projet",
        text: "Dans le cadre du Bachelor en Ingénierie des Systèmes industriels, ce projet interdisciplinaire de 3ᵉ année a consisté à imaginer et construire un dispositif de lévitation magnétique de bout en bout, en combinant physique appliquée, électronique et contrôle. Projet réalisé avec Quentin Morel et Vivian Pittet.",
      },
      {
        title: "Mon rôle",
        text: "J'ai surtout fabriqué les rails du dispositif (le circuit magnétique sur lequel le supraconducteur lévite), et j'ai aidé mes collègues sur toutes les questions mécaniques du projet.",
      },
      {
        title: "Ce que j'ai appris",
        text: "Ce projet m'a appris à travailler avec des matériaux innovants, dans des conditions exigeantes : à très basse température et sous des champs magnétiques importants.",
      },
    ],
    gallery: [],
  },
  {
    id: "recyclage-pet-filament",
    title: "Recyclage de bouteilles PET en filament d'impression 3D",
    subtitle: "Projet personnel",
    shortDescription:
      "Fabrication artisanale de filament d'impression 3D à partir de bouteilles PET recyclées, un système ensuite repris par RPM.",
    tags: ["Recyclage", "Impression 3D", "Fait maison", "PET"],
    image: "assets/projects/recyclage-pet-filament/cover.png",
    links: [],
    sections: [
      {
        title: "Le projet",
        text: "Système fait maison pour recycler des bouteilles en PET et les transformer en filament utilisable pour l'impression 3D.",
      },
      {
        title: "Procédé",
        text: "La bouteille est d'abord découpée en une longue bande continue, qui est ensuite chauffée et laminée pour former un filament creux. La mise au point a demandé un très grand nombre d'essais : la température de chauffe influence directement la régularité et la solidité du filament, et il a fallu tester de nombreuses combinaisons avant de trouver un réglage fiable et reproductible.",
      },
      {
        title: "Résultat",
        text: "Après cette phase d'essais, le système permet d'imprimer avec très peu de défauts, avec un filament recyclé de qualité suffisante pour des impressions propres.",
      },
      {
        title: "Reconnaissance",
        text: "Ce projet a attisé l'intérêt de RPM (Recyclage Plastique Maison), pour qui j'ai pu reproduire le système.",
      },
    ],
    gallery: [],
  },
  {
    id: "tpms",
    title: "Conception générative et fabrication d'une prothèse à structure osseuse bio-inspirée",
    subtitle: "Travail de Bachelor, HES-SO Valais-Wallis, filière Systèmes industriels, édition 2026",
    shortDescription:
      "Prothèse fémorale bio-inspirée à structures TPMS, combinant conception générative et fabrication additive LPBF en Ti6Al4V.",
    tags: ["LPBF", "Ti6Al4V", "TPMS", "ANSYS", "Python"],
    image: "assets/projects/tpms/cover.png",
    links: [
      { label: "Résumé du travail de Bachelor (PDF)", url: "assets/projects/tpms/resume.pdf" },
      { label: "Rapport final complet (PDF)", url: "assets/projects/tpms/rapport-final.pdf" },
    ],
    sections: [
      {
        title: "Objectif",
        text: "Développer une prothèse fémorale bio-inspirée à structures TPMS (Triply Periodic Minimal Surfaces), combinant conception générative et fabrication additive LPBF, afin de rapprocher son comportement mécanique de celui de l'os naturel. Travail réalisé sous la direction de la Prof. Haifa Sallem, dans le domaine Design & Materials.",
      },
      {
        title: "Caractérisation expérimentale",
        text: "La caractérisation d'éprouvettes cylindriques (Ø8 × 14 mm) en Ti6Al4V a permis de constituer une base de données de comportement mécanique pour plusieurs architectures TPMS (Gyroid, Split-P, Diamond), et d'établir les paramètres limites de génération imprimables par LPBF, notamment l'épaisseur de paroi minimale et la taille de cellule admissible.",
      },
      {
        title: "Conception par simulation",
        text: "Un balayage du module de Young de la prothèse en simulation par éléments finis montre que la flèche du fémur implanté croise celle du fémur sain à 3 GPa, valeur retenue comme cible de conception. Cette cible a été croisée avec la base de données expérimentale pour ajuster les paramètres de cellules.",
      },
      {
        title: "Protocole d'essai et résultats",
        text: "Aucune norme ne couvrant la validation de ce type de prothèse, un protocole d'essai a été dérivé des normes existantes, avec enrobage dans un ciment et chargement quasi-statique cyclique. Les essais montrent une rigidité réelle 16 à 18 fois supérieure aux prédictions numériques, écart attribué à la compliance du montage, aux conditions limites idéalisées et aux défauts d'impression.",
      },
      {
        title: "Outil développé",
        text: "Un logiciel automatisant l'ensemble du workflow (génération, simulation, traitement des résultats) a été développé afin de rendre l'étude reproductible.",
      },
    ],
    gallery: [],
  },
];
