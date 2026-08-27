/* =========================================================
   Contenu éditorial du site, dans les trois langues.
   Sert à générer les pages statiques. Les textes des projets
   eux-mêmes viennent de js/data.js, data.en.js et data.de.js.
   ========================================================= */

const HIGHLIGHTS = ["tpms", "levitation-magnetique", "robot-hepia"];

/* Ordre d'affichage : les trois projets phares, puis le reste. */
const ORDER = [
  "tpms", "levitation-magnetique", "robot-hepia",
  "lanceur-balles-golf", "bella-lui-vrt", "alpinea-vrt", "cfd-naca0015",
  "reverse-engineering-mixeur", "decoupe-connecteurs", "potence-mdf",
  "design-eversys", "recyclage-pet-filament",
];

/* Fiches techniques : [clé de libellé, valeur, accentué?] */
const SPECS = {
  "tpms": [
    ["material", "Ti6Al4V"], ["process", "LPBF — fusion laser sur lit de poudre | LPBF — laser powder bed fusion | LPBF — Laser-Pulverbettschmelzen"],
    ["application", "Prothèse totale de hanche | Total hip replacement | Hüfttotalprothese"],
    ["targetModulus", "3 GPa"], ["architectures", "Gyroid · Split-P · Diamond"],
    ["tools", "ANSYS · Python"], ["supervisor", "Prof. Haifa Sallem"],
  ],
  "levitation-magnetique": [
    ["principle", "Meissner · vortex supraconducteur | Meissner · superconducting vortices | Meissner · supraleitende Vortices", true], ["coolant", "N₂ liquide | liquid | flüssig"],
    ["team", "3"], ["year", "2025"],
  ],
  "robot-hepia": [
    ["collaboration", "item"], ["team", "5"], ["year", "2023"],
    ["mechanisms", "Cames · courroies · engrenages | Cams · belts · gears | Nocken · Riemen · Zahnräder", true],
  ],
  "lanceur-balles-golf": [
    ["muzzleVelocity", "25,7 m/s"], ["angle", "45°"], ["range", "50 m"],
    ["pressure", "0,8 bar"], ["concepts", "15"], ["team", "2"],
    ["collaboration", "SMC"],
    ["ranking", "1ʳᵉ place | 1st place | 1. Platz", true],
  ],
  "bella-lui-vrt": [
    ["power", "80 kW"], ["topSpeed", "120 km/h"], ["mass", "280 kg"],
    ["certification", "HV2 / HV3"], ["scope", "TSAC · firewall · ailerons | TSAC · firewall · wing mounts | TSAC · Brandwand · Flügelhalter"], ["season", "2023-2024"],
  ],
  "alpinea-vrt": [
    ["power", "80 kW"], ["topSpeed", "120 km/h"], ["mass", "263,5 kg"],
    ["tools", "ANSYS · Inventor"],
    ["scope", "Châssis · appui-tête · moyeu | Chassis · headrest · hub | Chassis · Kopfstütze · Radnabe", true], ["season", "2024-2025"],
  ],
  "cfd-naca0015": [
    ["profile", "NACA 0015"], ["software", "ANSYS · JavaFoil"],
    ["fluid", "H₂O"], ["year", "2025"],
  ],
  "reverse-engineering-mixeur": [
    ["product", "Tristar BL-4431"], ["motor", "180 W"], ["material2", "Zamak ZA-8"],
    ["hardness", "Shore A 60"], ["unitCost", "1,90 CHF"], ["methods", "DSC · MEB"], ["software", "Granta", true], ["team", "2"],
  ],
  "decoupe-connecteurs": [
    ["client", "DSMI electronics SA"], ["cadence", "1,5 /s"],
    ["hours", "197 h", true], ["year", "2022"],
  ],
  "potence-mdf": [
    ["material", "MDF"], ["stock", "1 plaque | 1 sheet | 1 Platte"],
    ["ranking", "1ʳᵉ place | 1st place | 1. Platz", true], ["team", "3"],
  ],
  "design-eversys": [
    ["partner", "Eversys"], ["model", "Cameo Classic"],
    ["process", "Impression 3D | 3D printing | 3D-Druck"], ["team", "2"],
  ],
  "recyclage-pet-filament": [
    ["material", "PET"], ["process", "Chauffe + laminage | Heating + rolling | Erwärmen + Walzen"],
    ["output", "Filament creux | Hollow filament | Hohlfilament"], ["partner", "RPM"],
  ],
};

const SPEC_LABELS = {
  fr: {
    material: "Matériau", material2: "Alliage", process: "Procédé", specimens: "Éprouvettes",
    targetModulus: "Module cible", architectures: "Architectures", tools: "Outils",
    supervisor: "Direction", domain: "Domaine", application: "Application", selected: "Retenues", principle: "Principe", coolant: "Refroidissement",
    team: "Équipe", year: "Année", ranking: "Classement", season: "Saison", collaboration: "Collaboration", mechanisms: "Mécanismes",
    muzzleVelocity: "Vitesse de sortie", angle: "Angle de tir", range: "Portée", pressure: "Pression",
    concepts: "Concepts évalués", power: "Puissance", topSpeed: "Vitesse de pointe", mass: "Masse",
    certification: "Certification", scope: "Périmètre", profile: "Profil", software: "Logiciels",
    fluid: "Fluide", product: "Produit", motor: "Moteur", hardness: "Dureté", unitCost: "Coût pièce",
    methods: "Méthodes", client: "Mandant", cadence: "Cadence", hours: "Heures allouées",
    stock: "Matière première", assembly: "Assemblage", partner: "Partenaire", model: "Modèle", goal: "But",
    materials: "Matériaux", output: "Sortie",
  },
  en: {
    material: "Material", material2: "Alloy", process: "Process", specimens: "Specimens",
    targetModulus: "Target modulus", architectures: "Architectures", tools: "Tools",
    supervisor: "Supervisor", domain: "Field", application: "Application", selected: "Selected", principle: "Principle", coolant: "Cooling",
    team: "Team", year: "Year", ranking: "Ranking", season: "Season", collaboration: "Collaboration", mechanisms: "Mechanisms",
    muzzleVelocity: "Muzzle velocity", angle: "Launch angle", range: "Range", pressure: "Pressure",
    concepts: "Concepts assessed", power: "Power", topSpeed: "Top speed", mass: "Mass",
    certification: "Certification", scope: "Scope", profile: "Airfoil", software: "Software",
    fluid: "Fluid", product: "Product", motor: "Motor", hardness: "Hardness", unitCost: "Unit cost",
    methods: "Methods", client: "Client", cadence: "Throughput", hours: "Hours allotted",
    stock: "Raw stock", assembly: "Assembly", partner: "Partner", model: "Model", goal: "Goal",
    materials: "Materials", output: "Output",
  },
  de: {
    material: "Werkstoff", material2: "Legierung", process: "Verfahren", specimens: "Probekörper",
    targetModulus: "Ziel-Modul", architectures: "Architekturen", tools: "Werkzeuge",
    supervisor: "Betreuung", domain: "Fachgebiet", application: "Anwendung", selected: "Ausgewählt", principle: "Prinzip", coolant: "Kühlung",
    team: "Team", year: "Jahr", ranking: "Platzierung", season: "Saison", collaboration: "Zusammenarbeit", mechanisms: "Mechanismen",
    muzzleVelocity: "Austrittsgeschwindigkeit", angle: "Abschusswinkel", range: "Reichweite",
    pressure: "Druck", concepts: "Geprüfte Konzepte", power: "Leistung", topSpeed: "Höchstgeschwindigkeit",
    mass: "Masse", certification: "Zertifizierung", scope: "Umfang", profile: "Profil",
    software: "Software", fluid: "Fluid", product: "Produkt", motor: "Motor", hardness: "Härte",
    unitCost: "Stückkosten", methods: "Methoden", client: "Auftraggeber", cadence: "Taktrate",
    hours: "Zugeteilte Stunden", stock: "Rohmaterial", assembly: "Verbindung", partner: "Partner",
    model: "Modell", goal: "Ziel", materials: "Werkstoffe", output: "Ergebnis",
  },
};

/* Valeurs qui contiennent les trois langues, séparées par " | ".
   Ne jamais utiliser " / " : il apparaît dans de vraies valeurs
   techniques (« HV2 / HV3 »). */
function pickMulti(value, langIndex) {
  if (value.indexOf(" | ") === -1) return value;
  const parts = value.split(" | ");
  return parts[langIndex] || parts[0];
}

/* Blocs « Résultat » des projets phares, et légendes de figure. */
const RESULTS = {
  fr: {
    "tpms": {
      val: "2 architectures retenues",
      txt: "cinq architectures TPMS générées, quatre caractérisées expérimentalement en Ti6Al4V — Spherene écartée en cours d'étude — et deux retenues pour la conception : Gyroid et Split-P. Protocole d'essai dérivé faute de norme existante ; rigidité mesurée 16 à 18 × supérieure aux prédictions numériques.",
    },
    "levitation-magnetique": {
      val: "Dispositif fonctionnel",
      txt: "construit de bout en bout, en combinant physique appliquée, électronique et contrôle. Travail relayé par la HES-SO Valais-Wallis.",
    },
    "robot-hepia": {
      val: "Prix de la performance",
      txt: "performance temporelle remportée, tout en étant bien placé en conception technique et en esthétique. Relayé par 20 minutes, diffusé en direct par HEPIA.",
    },
  },
  en: {
    "tpms": {
      val: "2 architectures selected",
      txt: "five TPMS architectures generated, four characterised experimentally in Ti6Al4V — Spherene dropped along the way — and two retained for the design: Gyroid and Split-P. Test protocol derived from scratch, no standard existing; measured stiffness 16 to 18 × above the numerical predictions.",
    },
    "levitation-magnetique": {
      val: "Working device",
      txt: "built end to end, combining applied physics, electronics and control. The work was covered by HES-SO Valais-Wallis.",
    },
    "robot-hepia": {
      val: "Time-performance award",
      txt: "won on time performance, while also placing well in technical design and aesthetics. Covered by 20 minutes and streamed live by HEPIA.",
    },
  },
  de: {
    "tpms": {
      val: "2 Architekturen ausgewählt",
      txt: "fünf TPMS-Architekturen generiert, vier experimentell in Ti6Al4V charakterisiert — Spherene im Verlauf verworfen — und zwei für die Konstruktion ausgewählt: Gyroid und Split-P. Prüfprotokoll selbst abgeleitet, da keine Norm existiert; gemessene Steifigkeit 16 bis 18 × über den numerischen Vorhersagen.",
    },
    "levitation-magnetique": {
      val: "Funktionsfähiger Aufbau",
      txt: "von Anfang bis Ende gebaut, mit angewandter Physik, Elektronik und Regelungstechnik. Die Arbeit wurde von der HES-SO Valais-Wallis aufgegriffen.",
    },
    "robot-hepia": {
      val: "Preis für Zeitleistung",
      txt: "Zeitleistung gewonnen und zugleich gut platziert in technischer Konstruktion und Ästhetik. Aufgegriffen von 20 minutes, live übertragen von HEPIA.",
    },
  },
};

const FIGCAPS = {
  fr: {
    "tpms": ["Fig. — Éprouvettes Ø8 × 14 mm", "Ti6Al4V / LPBF"],
    "levitation-magnetique": ["Fig. — Rails du circuit magnétique", "Azote liquide"],
    "robot-hepia": ["Fig. — Sugarland", "Équipe de 5"],
  },
  en: {
    "tpms": ["Fig. — Specimens Ø8 × 14 mm", "Ti6Al4V / LPBF"],
    "levitation-magnetique": ["Fig. — Magnetic circuit rails", "Liquid nitrogen"],
    "robot-hepia": ["Fig. — Sugarland", "Team of 5"],
  },
  de: {
    "tpms": ["Abb. — Probekörper Ø8 × 14 mm", "Ti6Al4V / LPBF"],
    "levitation-magnetique": ["Abb. — Schienen des Magnetkreises", "Flüssiger Stickstoff"],
    "robot-hepia": ["Abb. — Sugarland", "Team von 5"],
  },
};

/* Emplacements d'images encore à fournir, par projet. */
/* Emplacements d'images encore à fournir, par projet.
   (Vide : la figure des éprouvettes TPMS a été livrée.) */
const SLOTS = { fr: {}, en: {}, de: {} };

const CONTENT = {
  fr: {
    code: "fr", dir: "", base: "", langIndex: 0,
    htmlLang: "fr",
    nav: { travaux: "Travaux", autres: "Autres projets", parcours: "Parcours", contact: "Contact", cv: "CV" },
    switchLight: "Clair", switchDark: "Sombre",
    meta: {
      homeTitle: "Gilles Mariethoz · Ingénieur en systèmes industriels",
      homeDesc: "Portfolio de Gilles Mariethoz, ingénieur en systèmes industriels : conception mécanique, simulation par éléments finis et fabrication additive métallique.",
      homeOg: "De la simulation à la pièce imprimée. Douze projets d'ingénierie mécanique documentés.",
      cvTitle: "Curriculum vitae · Gilles Mariethoz",
      cvDesc: "Parcours, formation et compétences techniques de Gilles Mariethoz, ingénieur en systèmes industriels.",
    },
    hero: {
      eyebrow: ["Portfolio", "Édition 2026", "Sion, CH"],
      statement: "De la simulation à la pièce imprimée.",
      lede: "Ingénieur en systèmes industriels, spécialisé en conception mécanique, simulation par éléments finis et fabrication additive métallique. Je mène un projet de l'analyse du besoin jusqu'aux essais physiques — et je vais chercher le résultat mesuré, pas seulement le modèle.",
      cta1: "Voir les travaux", cta2: "Curriculum vitae",
      figcap: ["Fig. 01 — Portrait", "Éch. 1:1"],
      alt: "Portrait de Gilles Mariethoz",
    },
    stats: [
      ["12", "projets d'ingénierie documentés, de l'atelier au laboratoire"],
      ["3", "concours d'ingénierie remportés face aux autres équipes"],
      ["2", "monoplaces Formula Student — certifié HV2 / HV3, habilité à intervenir sur les systèmes haute tension"],
      ["5", "ans d'atelier en apprentissage polymécanicien avant l'école"],
    ],
    secFeatured: {
      title: "Travaux en vedette", count: "3 / 12",
      intro: "Les trois projets qui décrivent le mieux ma manière de travailler : un travail de recherche, un dispositif construit de bout en bout, et un projet d'équipe sous contrainte de temps.",
    },
    secOthers: {
      title: "Les autres projets", range: "04 — 12",
      intro: "Le reste du travail. Chaque entrée ouvre sa propre fiche : contexte, démarche, résultats et documents.",
    },
    resultLabel: "Résultat",
    seeSheet: "Voir la fiche complète",
    parcours: {
      title: "Parcours",
      p1: "Un parcours qui commence à l'atelier et remonte vers la recherche : cinq ans d'apprentissage polymécanicien chez Muller-Production SA, un diplôme de technicien ES sorti major de promotion en matières techniques, puis le Bachelor et le Master en génie mécanique.",
      p2: "Cet ordre compte : je sais ce qu'une pièce coûte à fabriquer avant de la dessiner.",
      cta: "Curriculum vitae complet",
      toolsLabel: "Outils",
      rows: [
        ["2026 →", "Master en génie mécanique", "HES-SO — dans la continuité du Bachelor Systèmes industriels"],
        ["2023 — 2026", "Bachelor Systèmes industriels", "HES-SO Valais — orientation Design & Materials · conception, simulation, matériaux avancés"],
        ["2022 — 2023", "Bachelor Génie mécanique", "HEPIA, Genève — première année, concours Robots"],
        ["2020 — 2022", "Technicien ES en génie mécanique", "ETML-ES, Lausanne — major de promotion en matières techniques"],
        ["2015 — 2020", "CFC Polymécanicien", "EPTMS, en apprentissage chez Muller-Production SA — collaboration poursuivie après le diplôme"],
      ],
    },
    contact: {
      title: "Une question, un mandat, un projet de Master ?",
      p: "Écrivez-moi directement — je réponds à tout le monde.",
      email: "E-mail", tel: "Téléphone", linkedin: "LinkedIn",
      titleblock: ["Doc. Portfolio", "Éd. 2026 · FR", "12 planches", "© 2026 G. Mariethoz"],
    },
    proj: {
      crumb: "← Travaux", plate: "Planche", spec: "Fiche technique", toc: "Sommaire",
      docs: "Documents", back: "← Retour", allWorks: "Tous les travaux",
      next: "Planche suivante →", prev: "← Planche précédente",
      linksLabel: "Liens & documents", tagsLabel: "Compétences",
      of: "/",
    },
    cv: {
      title: "Curriculum vitae",
      lede: "Ingénieur en systèmes industriels / Mechanical Engineer. Parcours atelier → école → recherche.",
      download: "Télécharger le CV (PDF)",
      profilTitle: "Profil",
      profil: "Passionné par l'innovation, mon objectif est de concevoir une machine révolutionnaire au service du bien commun. Doté d'un esprit analytique et d'une solide base en mathématiques, compétences développées depuis l'enfance, je suis déterminé à concrétiser cette vision.",
      formationTitle: "Formation",
      expTitle: "Expériences & engagements",
      exp: [
        ["2015 — 2020", "Apprentissage polymécanicien", "Muller-Production SA — expérience d'atelier dans une industrie en forte croissance ; collaboration poursuivie après le diplôme de technicien."],
        ["Bachelor HEPIA", "Participation active, JEHEPIA", "Genève — gestion d'équipe et apprentissage des responsabilités."],
        ["Bachelor HES-SO", "Intégration, VRT", "Sion — gestion du temps et respect rigoureux des procédures."],
        ["Bachelor HES-SO", "Création d'une filiale d'ingénierie, JEVS", "Sion — gestion d'équipe et élargissement du réseau professionnel."],
      ],
      skillsTitle: "Compétences techniques",
      skills: ["Conception mécanique CAO", "Simulation / ANSYS", "Fabrication", "Fabrication additive", "Gestion d'équipe", "Gestion du temps"],
      softwareTitle: "Logiciels",
      software: ["Inventor", "ANSYS", "Granta", "JavaFoil", "Python", "VBA", "Excel", "Word"],
      langTitle: "Langues",
      langs: [["Français", "langue maternelle"], ["Anglais", "intermédiaire (B1)"]],
      projectsTitle: "Projets",
      projectsText: "Douze projets documentés, du travail de diplôme ES à la recherche en fabrication additive.",
      projectsCta: "Voir les travaux",
    },
    notFound: { title: "Page introuvable", p: "Cette planche n'existe pas — ou plus.", cta: "Retour à l'accueil" },
  },

  en: {
    code: "en", dir: "en/", base: "../", langIndex: 1,
    htmlLang: "en",
    nav: { travaux: "Selected work", autres: "Other projects", parcours: "Background", contact: "Contact", cv: "CV" },
    switchLight: "Light", switchDark: "Dark",
    meta: {
      homeTitle: "Gilles Mariethoz · Industrial Systems Engineer",
      homeDesc: "Portfolio of Gilles Mariethoz, industrial systems engineer: mechanical design, finite element simulation and metal additive manufacturing.",
      homeOg: "From simulation to the printed part. Twelve documented mechanical engineering projects.",
      cvTitle: "Curriculum vitae · Gilles Mariethoz",
      cvDesc: "Background, education and technical skills of Gilles Mariethoz, industrial systems engineer.",
    },
    hero: {
      eyebrow: ["Portfolio", "2026 edition", "Sion, CH"],
      statement: "From simulation to the printed part.",
      lede: "Industrial systems engineer, specialised in mechanical design, finite element simulation and metal additive manufacturing. I take a project from the analysis of the need through to physical testing — and I go after the measured result, not just the model.",
      cta1: "See the work", cta2: "Curriculum vitae",
      figcap: ["Fig. 01 — Portrait", "Scale 1:1"],
      alt: "Portrait of Gilles Mariethoz",
    },
    stats: [
      ["12", "documented engineering projects, from the workshop to the lab"],
      ["3", "engineering contests won against the other teams"],
      ["2", "Formula Student cars — HV2 / HV3 certified, cleared to work on high-voltage systems"],
      ["5", "years on the shop floor as a polymechanic apprentice before university"],
    ],
    secFeatured: {
      title: "Selected work", count: "3 / 12",
      intro: "The three projects that best describe how I work: a research thesis, a device built end to end, and a team project under time pressure.",
    },
    secOthers: {
      title: "The other projects", range: "04 — 12",
      intro: "The rest of the work. Each entry opens its own sheet: context, approach, results and documents.",
    },
    resultLabel: "Result",
    seeSheet: "See the full sheet",
    parcours: {
      title: "Background",
      p1: "A path that starts on the shop floor and works its way up to research: five years as a polymechanic apprentice at Muller-Production SA, a technician diploma finished top of the class in technical subjects, then the Bachelor and the Master in mechanical engineering.",
      p2: "That order matters: I know what a part costs to make before I draw it.",
      cta: "Full curriculum vitae",
      toolsLabel: "Tools",
      rows: [
        ["2026 →", "Master in Mechanical Engineering", "HES-SO — continuing from the Bachelor in Industrial Systems"],
        ["2023 — 2026", "Bachelor in Industrial Systems", "HES-SO Valais — Design & Materials · design, simulation, advanced materials"],
        ["2022 — 2023", "Bachelor in Mechanical Engineering", "HEPIA, Geneva — first year, Robot Contest"],
        ["2020 — 2022", "Technician ES in Mechanical Engineering", "ETML-ES, Lausanne — top of the class in technical subjects"],
        ["2015 — 2020", "Polymechanic apprenticeship (CFC)", "EPTMS, apprenticed at Muller-Production SA — collaboration continued after graduating"],
      ],
    },
    contact: {
      title: "A question, a commission, a Master's project?",
      p: "Write to me directly — I answer everyone.",
      email: "E-mail", tel: "Phone", linkedin: "LinkedIn",
      titleblock: ["Doc. Portfolio", "2026 ed. · EN", "12 sheets", "© 2026 G. Mariethoz"],
    },
    proj: {
      crumb: "← Selected work", plate: "Sheet", spec: "Specifications", toc: "Contents",
      docs: "Documents", back: "← Back", allWorks: "All the work",
      next: "Next sheet →", prev: "← Previous sheet",
      linksLabel: "Links & documents", tagsLabel: "Skills",
      of: "/",
    },
    cv: {
      title: "Curriculum vitae",
      lede: "Industrial Systems Engineer / Mechanical Engineer. Workshop → school → research.",
      download: "Download the CV (PDF)",
      profilTitle: "Profile",
      profil: "Driven by innovation, my goal is to design a groundbreaking machine that serves the common good. With an analytical mind and a solid foundation in mathematics, built up since childhood, I am determined to make that vision real.",
      formationTitle: "Education",
      expTitle: "Experience & involvement",
      exp: [
        ["2015 — 2020", "Polymechanic apprenticeship", "Muller-Production SA — shop-floor experience in a fast-growing industry; collaboration continued after the technician diploma."],
        ["Bachelor HEPIA", "Active member, JEHEPIA", "Geneva — team management and taking on responsibility."],
        ["Bachelor HES-SO", "Integration, VRT", "Sion — time management and strict adherence to procedure."],
        ["Bachelor HES-SO", "Founded an engineering subsidiary, JEVS", "Sion — team management and building a professional network."],
      ],
      skillsTitle: "Technical skills",
      skills: ["Mechanical CAD design", "Simulation / ANSYS", "Manufacturing", "Additive manufacturing", "Team management", "Time management"],
      softwareTitle: "Software",
      software: ["Inventor", "ANSYS", "Granta", "JavaFoil", "Python", "VBA", "Excel", "Word"],
      langTitle: "Languages",
      langs: [["French", "native"], ["English", "intermediate (B1)"]],
      projectsTitle: "Projects",
      projectsText: "Twelve documented projects, from the technician diploma thesis to research in additive manufacturing.",
      projectsCta: "See the work",
    },
    notFound: { title: "Page not found", p: "This sheet does not exist — or no longer does.", cta: "Back to the home page" },
  },

  de: {
    code: "de", dir: "de/", base: "../", langIndex: 2,
    htmlLang: "de",
    nav: { travaux: "Ausgewählte Arbeiten", autres: "Weitere Projekte", parcours: "Werdegang", contact: "Kontakt", cv: "CV" },
    switchLight: "Hell", switchDark: "Dunkel",
    meta: {
      homeTitle: "Gilles Mariethoz · Ingenieur für industrielle Systeme",
      homeDesc: "Portfolio von Gilles Mariethoz, Ingenieur für industrielle Systeme: Maschinenbau, Finite-Elemente-Simulation und additive Metallfertigung.",
      homeOg: "Von der Simulation zum gedruckten Bauteil. Zwölf dokumentierte Maschinenbauprojekte.",
      cvTitle: "Curriculum vitae · Gilles Mariethoz",
      cvDesc: "Werdegang, Ausbildung und technische Kompetenzen von Gilles Mariethoz, Ingenieur für industrielle Systeme.",
    },
    hero: {
      eyebrow: ["Portfolio", "Ausgabe 2026", "Sion, CH"],
      statement: "Von der Simulation zum gedruckten Bauteil.",
      lede: "Ingenieur für industrielle Systeme, mit Schwerpunkt Maschinenbau, Finite-Elemente-Simulation und additive Metallfertigung. Ich führe ein Projekt von der Bedarfsanalyse bis zu den physischen Versuchen — und ich hole das gemessene Ergebnis, nicht nur das Modell.",
      cta1: "Arbeiten ansehen", cta2: "Curriculum vitae",
      figcap: ["Abb. 01 — Porträt", "Maßstab 1:1"],
      alt: "Porträt von Gilles Mariethoz",
    },
    stats: [
      ["12", "dokumentierte Ingenieurprojekte, von der Werkstatt bis ins Labor"],
      ["3", "gewonnene Ingenieurwettbewerbe gegen die anderen Teams"],
      ["2", "Formula-Student-Fahrzeuge — HV2 / HV3 zertifiziert, befugt für Arbeiten an Hochspannungssystemen"],
      ["5", "Jahre Werkstatt als Polymechaniker-Lernender vor dem Studium"],
    ],
    secFeatured: {
      title: "Ausgewählte Arbeiten", count: "3 / 12",
      intro: "Die drei Projekte, die meine Arbeitsweise am besten beschreiben: eine Forschungsarbeit, ein von Anfang bis Ende gebauter Aufbau und ein Teamprojekt unter Zeitdruck.",
    },
    secOthers: {
      title: "Die weiteren Projekte", range: "04 — 12",
      intro: "Die übrigen Arbeiten. Jeder Eintrag öffnet sein eigenes Blatt: Kontext, Vorgehen, Ergebnisse und Dokumente.",
    },
    resultLabel: "Ergebnis",
    seeSheet: "Vollständiges Blatt ansehen",
    parcours: {
      title: "Werdegang",
      p1: "Ein Weg, der in der Werkstatt beginnt und zur Forschung führt: fünf Jahre Polymechaniker-Lehre bei Muller-Production SA, ein Technikerdiplom als Jahrgangsbester in den technischen Fächern, dann Bachelor und Master im Maschinenbau.",
      p2: "Diese Reihenfolge zählt: Ich weiß, was ein Bauteil in der Herstellung kostet, bevor ich es zeichne.",
      cta: "Vollständiger Lebenslauf",
      toolsLabel: "Werkzeuge",
      rows: [
        ["2026 →", "Master Maschinenbau", "HES-SO — in Fortsetzung des Bachelors Industrielle Systeme"],
        ["2023 — 2026", "Bachelor Industrielle Systeme", "HES-SO Valais — Design & Materials · Konstruktion, Simulation, moderne Werkstoffe"],
        ["2022 — 2023", "Bachelor Maschinenbau", "HEPIA, Genf — erstes Jahr, Roboterwettbewerb"],
        ["2020 — 2022", "Techniker HF Maschinenbau", "ETML-ES, Lausanne — Jahrgangsbester in den technischen Fächern"],
        ["2015 — 2020", "Polymechaniker-Lehre (EFZ)", "EPTMS, Lehre bei Muller-Production SA — Zusammenarbeit nach dem Abschluss fortgesetzt"],
      ],
    },
    contact: {
      title: "Eine Frage, ein Auftrag, ein Masterprojekt?",
      p: "Schreiben Sie mir direkt — ich antworte allen.",
      email: "E-Mail", tel: "Telefon", linkedin: "LinkedIn",
      titleblock: ["Dok. Portfolio", "Ausg. 2026 · DE", "12 Blätter", "© 2026 G. Mariethoz"],
    },
    proj: {
      crumb: "← Arbeiten", plate: "Blatt", spec: "Technische Daten", toc: "Inhalt",
      docs: "Dokumente", back: "← Zurück", allWorks: "Alle Arbeiten",
      next: "Nächstes Blatt →", prev: "← Vorheriges Blatt",
      linksLabel: "Links & Dokumente", tagsLabel: "Kompetenzen",
      of: "/",
    },
    cv: {
      title: "Curriculum vitae",
      lede: "Ingenieur für industrielle Systeme / Maschinenbauingenieur. Werkstatt → Schule → Forschung.",
      download: "CV herunterladen (PDF)",
      profilTitle: "Profil",
      profil: "Angetrieben von Innovation ist es mein Ziel, eine wegweisende Maschine zum Nutzen der Allgemeinheit zu entwickeln. Mit analytischem Denken und einer solide gewachsenen mathematischen Grundlage bin ich entschlossen, diese Vision umzusetzen.",
      formationTitle: "Ausbildung",
      expTitle: "Erfahrung & Engagement",
      exp: [
        ["2015 — 2020", "Polymechaniker-Lehre", "Muller-Production SA — Werkstatterfahrung in einer stark wachsenden Industrie; Zusammenarbeit nach dem Technikerdiplom fortgesetzt."],
        ["Bachelor HEPIA", "Aktive Mitarbeit, JEHEPIA", "Genf — Teamführung und Übernahme von Verantwortung."],
        ["Bachelor HES-SO", "Integration, VRT", "Sion — Zeitmanagement und strikte Einhaltung von Abläufen."],
        ["Bachelor HES-SO", "Gründung einer Ingenieur-Tochtergesellschaft, JEVS", "Sion — Teamführung und Aufbau eines beruflichen Netzwerks."],
      ],
      skillsTitle: "Technische Kompetenzen",
      skills: ["Maschinenbau-CAD", "Simulation / ANSYS", "Fertigung", "Additive Fertigung", "Teamführung", "Zeitmanagement"],
      softwareTitle: "Software",
      software: ["Inventor", "ANSYS", "Granta", "JavaFoil", "Python", "VBA", "Excel", "Word"],
      langTitle: "Sprachen",
      langs: [["Französisch", "Muttersprache"], ["Englisch", "mittelstufe (B1)"]],
      projectsTitle: "Projekte",
      projectsText: "Zwölf dokumentierte Projekte, von der Technikerdiplomarbeit bis zur Forschung in der additiven Fertigung.",
      projectsCta: "Arbeiten ansehen",
    },
    notFound: { title: "Seite nicht gefunden", p: "Dieses Blatt existiert nicht — oder nicht mehr.", cta: "Zurück zur Startseite" },
  },
};
