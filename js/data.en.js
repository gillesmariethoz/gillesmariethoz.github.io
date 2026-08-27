/* =========================================================
   PROJECT CONTENT — ENGLISH VERSION
   =========================================================
   English translation of js/data.js. Keep the same "id" values
   and the same order as the French file. Image/PDF paths are
   prefixed with "../" because this file is used from pages inside
   the en/ folder.
   ========================================================= */

const PROJECTS = [
  {
    id: "decoupe-connecteurs",
    title: "Connector Strip Cutting Machine",
    subtitle: "Diploma Thesis, ETML-ES",
    shortDescription:
      "Automated machine for cutting connector strips, designed during the diploma thesis and later pushed further.",
    tags: ["Mechanical design", "Automation", "Pneumatics", "CAD"],
    image: "../assets/projects/decoupe-connecteurs/cover.jpg",
    links: [
      { label: "Official diploma thesis summary (PDF)", url: "../assets/projects/decoupe-connecteurs/resume-diplome.pdf" },
    ],
    sections: [
      {
        title: "The project",
        text: "The goal was to develop a machine capable of cutting connector strips, for the client company DSMI electronics SA.",
      },
      {
        title: "How it works",
        text: "The machine is built around a pneumatic cylinder that moves back and forth: each cycle picks up a part, cuts it, then ejects it, for a target rate of around 1.5 parts per second.",
      },
      {
        title: "Continuing the project",
        text: "The diploma thesis, completed in 197 hours, was finished on time, but the machine could not be built at the time due to overly long delivery times for certain parts. I later had the chance to keep working on it, to see the project through to the end.",
      },
      {
        title: "What I learned",
        text: "This project taught me a lot, in particular that it isn't always necessary to optimize relentlessly for the lowest possible weight if it comes at the expense of the assembly's rigidity.",
      },
    ],
    gallery: [],
  },
  {
    id: "robot-hepia",
    title: "Sugarland · HEPIA Robot Contest",
    subtitle: "HEPIA · 2023 · First-year project",
    shortDescription:
      "Fully autonomous robot, winner of the time-performance award at the 2023 HEPIA Robot Contest, tasked with clearing a candlelit dinner table.",
    tags: ["Robotics", "Mechanical design", "Autonomy", "HEPIA"],
    image: "../assets/projects/robot-hepia/cover.jpg",
    links: [
      { label: "HEPIA article (results)", url: "https://www.hesge.ch/hepia/actualites/2023/concours-robots-2023-les-resultats" },
      { label: "20 minutes report", url: "https://www.20min.ch/fr/video/des-robots-debarrassent-les-tables-de-lhepia-617765467307" },
      { label: "Live contest (YouTube)", url: "https://www.youtube.com/watch?v=0bvMtc37eQ0" },
    ],
    sections: [
      {
        title: "The challenge",
        text: "16th edition of the Robot Contest organized by HEPIA (Geneva), the end-of-first-year assignment for the Mechanical Engineering and Microengineering programs. The challenge: design a robot capable of clearing two plates from a candlelit dinner and bringing them back to the starting point, fully autonomously, with no remote control. Any human intervention after launch resulted in a time penalty.",
      },
      {
        title: "The team and the robot",
        text: "Robot designed and built as a team under the name « Les Présidents », with Julian Bjørgo, Cécilia Descamps, Albert Guedj and Léa Lornetti. The robot, named Sugarland, was developed over several months before the competition, with a design fully themed around candy.",
      },
      {
        title: "My role: mechanical design",
        text: "As the team's mechanical lead, I designed most of the robot's mechanical components: the cams that lift the plates, the belts that drive them, and the gears that drive the wheels. I also designed the encoder used to measure the robot's movement and track its position, as well as the chassis. It was thanks to this chassis, built with item aluminum profiles, that I was able to reach out to item and secure their sponsorship for the team.",
      },
      {
        title: "Result",
        text: "The contest awarded three prizes (time performance, technical/mechanical design, and aesthetics) that a single robot could not win all of. Sugarland won the time-performance award, while also placing well in the other two categories. The event was covered by 20 minutes and streamed live on YouTube by HEPIA.",
      },
      {
        title: "What I learned",
        text: "This project was my first real experience of teamwork and project management under tight deadlines. On the technical side, it gave me hands-on experience designing cam and belt mechanisms, as well as integrating 3D-printed parts into a functional mechanical assembly.",
      },
    ],
    gallery: [],
  },
  {
    id: "bella-lui-vrt",
    title: "Bella Lui · VRT Formula Student",
    subtitle: "VRT (Valais Racing Team) · 2023-2024",
    shortDescription:
      "VRT's Formula Student electric car: designed the TSAC (accumulator container) within the Mechanical Team.",
    tags: ["Formula Student", "TSAC", "Electric vehicle", "VRT"],
    image: "../assets/projects/bella-lui-vrt/cover.jpg",
    links: [
      { label: "VRT page: Bella Lui", url: "https://www.vrt-fs.ch/nos-creations/bella-lui" },
    ],
    sections: [
      {
        title: "The project",
        text: "Bella Lui is VRT's (Valais Racing Team) second single-seater, HES-SO Valais's Formula Student team. The car develops 80 kW for a top speed of 120 km/h, at a mass of 280 kg. The team is organized into three divisions: Mechanical Team, Electrical Team and Business Team.",
      },
      {
        title: "My role: TSAC",
        text: "Within the Mechanical Team, I mainly worked on the mechanical side of the TSAC (Tractive System Accumulator Container), the enclosure that houses and protects the vehicle's high-voltage battery, alongside Nicolas Landry. This work was carried out under strict standards and regulations, and helped me develop my teamwork skills.",
      },
      {
        title: "Other contributions",
        text: "Alongside the TSAC, I also designed the wing mounts and the firewall (the fire-resistant partition separating the accumulator from the cockpit), as well as a few other small parts on the car.",
      },
      {
        title: "High-voltage certification",
        text: "To be able to work on the TSAC, I obtained the VRT HV2 and HV3 certifications, required to work on the vehicle's high-voltage systems.",
      },
    ],
    gallery: [],
  },
  {
    id: "potence-mdf",
    title: "MDF Cantilever Bracket",
    subtitle: "HES-SO Valais, 2nd year, 1st semester",
    shortDescription:
      "Load-bearing structure built from a single MDF board, load-tested to failure against other teams.",
    tags: ["Mechanical design", "Materials strength", "Teamwork"],
    image: "../assets/projects/potence-mdf/cover.jpg",
    links: [],
    sections: [
      {
        title: "The challenge",
        text: "Design and build a cantilever bracket capable of carrying as much load as possible, using only a single MDF board as raw material. The single-material constraint meant the geometry and cutting layout had to be carefully thought through before manufacturing: the slightest cutting mistake left no room to start over.",
      },
      {
        title: "Design",
        text: "Project carried out as a team with Aurore Mauris and Sven Voltolini, from designing the geometry through to cutting and assembling the bracket. The assembly was designed using dowel joints, as in woodworking, rather than screws or glue, all while working within the limited surface area of the available MDF board.",
      },
      {
        title: "Result",
        text: "Every bracket in the class was load-tested to failure, to determine which one held the most weight before breaking. Our bracket won the test, with the best strength of all the teams.",
      },
      {
        title: "What I learned",
        text: "This project was a solid hands-on introduction to materials strength and to dowel-joint assembly techniques from woodworking. Working with a single sheet of material, with no room for error, also taught us to validate our design before cutting anything, and to divide the work well as a team under time pressure.",
      },
    ],
    gallery: [],
  },
  {
    id: "design-eversys",
    title: "Redesigning an Eversys Coffee Machine",
    subtitle: "Industrial Design, HES-SO Valais-Wallis, in partnership with Eversys",
    shortDescription:
      "Aesthetic concept for a professional coffee machine, in partnership with Eversys and industrial designers.",
    tags: ["Industrial design", "Aesthetics", "CAD", "Eversys"],
    image: "../assets/projects/design-eversys/detail-selecteur.jpg",
    links: [
      { label: "Project portfolio (PDF)", url: "../assets/projects/design-eversys/portfolio.pdf" },
    ],
    sections: [
      {
        title: "The project",
        text: "As part of the Industrial Design course at HES-SO Valais-Wallis, this project was carried out in partnership with Eversys, a Swiss manufacturer of professional coffee machines, which gave us the chance to meet industrial design professionals. The goal, working in a team of two with Tristan Coppey, was to rethink the aesthetics of a professional coffee machine (Eversys Cameo Classic), around three priorities: intuitive coffee selection, simplicity of assembly and use, and a clear view of the coffee during service.",
      },
      {
        title: "Approach",
        text: "Three very different concept directions were explored and sketched, before choosing to further develop the retained direction: an arm shaped like a pipe elbow, with a rotating coffee-selection cylinder.",
      },
      {
        title: "The final concept",
        text: "The final result adopts a steampunk-inspired aesthetic: a copper elbow supports a selection cylinder adorned with brass rings, with a wooden handle to confirm the choice, hooks to hold the cups, and an integrated drip tray.",
      },
      {
        title: "A different approach",
        text: "This project was special to me: it was the first time I designed with aesthetics as the sole focus, without a technical constraint to solve first.",
      },
    ],
    gallery: [],
  },
  {
    id: "alpinea-vrt",
    title: "Alpinea · VRT Formula Student",
    subtitle: "VRT (Valais Racing Team) · 2nd year, 2024-2025",
    shortDescription:
      "VRT's third electric single-seater: safety simulations, CAD training and support for the Mechanical Team.",
    tags: ["Formula Student", "Simulation", "CAD", "VRT"],
    image: "../assets/projects/alpinea-vrt/cover.jpg",
    links: [
      { label: "VRT page: Alpinea", url: "https://www.vrt-fs.ch/nos-creations/alpinea" },
    ],
    sections: [
      {
        title: "The project",
        text: "Alpinea is VRT's (Valais Racing Team) third electric single-seater. It develops 80 kW for a top speed of 120 km/h, at a mass of 263.5 kg. The team expanded compared to previous seasons, this time with five divisions: Mechanical Team, Electrical Team, IT Team, Business Team and Driverless Team.",
      },
      {
        title: "My role",
        text: "During my 2nd year, I mainly supported my friend Nicolas Landry in his role as head of the Mechanical Team. I also trained several team members on CAD in Inventor.",
      },
      {
        title: "Safety simulations",
        text: "I carried out the simulations for the chassis, the headrest support and the wheel hub. These simulations showed that these parts fell below the targeted safety factors. Despite this finding, the team decided to keep the same size and material.",
      },
    ],
    gallery: [],
  },
  {
    id: "lanceur-balles-golf",
    title: "Golf Ball Launcher",
    subtitle: "Mechanical Project, HES-SO Valais-Wallis, September 2024 to May 2025",
    shortDescription:
      "Pneumatically-powered golf ball launcher, designed in a two-person team and winner of the competition against the other teams.",
    tags: ["Mechanical design", "CAD", "Pneumatics", "Ballistics"],
    image: "../assets/projects/lanceur-balles-golf/cover.jpg",
    links: [
      { label: "Full project report (PDF)", url: "../assets/projects/lanceur-balles-golf/rapport.pdf" },
    ],
    sections: [
      {
        title: "The challenge",
        text: "As part of the Mechanical Project course at HES-SO Valais-Wallis, design and build a golf ball launcher, in a two-person team with Laura Weber.",
      },
      {
        title: "1st semester: design",
        text: "Complete needs analysis, evaluation of 15 different concepts, then selection of compressed-air propulsion as the most effective solution. Ballistic and thermodynamic calculations to define the launch parameters (25.7 m/s, 45° angle, 50 m range), followed by a complete CAD model integrating the pneumatic and safety systems.",
      },
      {
        title: "2nd semester: manufacturing",
        text: "Manufacturing and assembly of the launcher, combining machined parts, 3D-printed parts and electro-pneumatic controls. Collaboration with SMC, who supplied the pneumatic components.",
      },
      {
        title: "How it works",
        text: "The tank is filled with compressed air; a mechanical safety valve ensures no pressure remains once it is opened. A pressure of 0.8 bar lights up the mechanical and electrical indicator lights. Pressing the remote sends an electrical signal that triggers the electro-pneumatic valve, which in turn actuates the pulse valve: this instantly releases the air from the tank into the barrel, ejecting the ball. The 3D-printed parts, weighted with sand, and the MDF plates keep the launcher stable at the moment of firing.",
      },
      {
        title: "Testing and validation",
        text: "The tank underwent pressure-resistance calculations (wall stresses, weld strength) before being physically pressure-tested. The launcher was then tested empty, and checked point by point against the specifications.",
      },
      {
        title: "Result",
        text: "The project concluded with a competition among all the student teams. Our launcher took first place, having hit the target more often than any other system.",
      },
    ],
    gallery: [],
  },
  {
    id: "cfd-naca0015",
    title: "Flow Study Around a NACA 0015 Airfoil",
    subtitle: "CFD Course, HES-SO Valais-Wallis, 3rd year, semester 4",
    shortDescription:
      "Numerical simulation of flow around a NACA 0015 airfoil, with stall analysis at different angles of attack.",
    tags: ["CFD", "ANSYS", "JavaFoil", "Simulation"],
    image: "../assets/projects/cfd-naca0015/cover.jpg",
    links: [],
    sections: [
      {
        title: "The project",
        text: "Project carried out in two parts. The first part consisted of simulating water flow around a NACA 0015 airfoil at 0° angle of attack, in order to validate the numerical model, lift, drag and flow behavior. The second part extended the study to different angles of attack, analyzing how lift, drag and flow characteristics evolve, up to stall and flow separation at high angles.",
      },
      {
        title: "Results",
        text: "Simulation convergence and mesh quality were checked. The lift and drag coefficients obtained matched expectations and reference simulations. The pressure, friction and velocity fields were consistent with the expected theoretical behavior, and stall as well as flow separation were indeed observed at high angles of attack.",
      },
      {
        title: "Conclusion",
        text: "This project demonstrated the reliability of the numerical model for steady flow around a symmetric airfoil, and provided a better understanding of the effect of angle of attack. Improvements identified: refine the mesh near the airfoil and use a laminar-to-turbulent transition model for more accurate friction predictions. Tools used: ANSYS, JavaFoil.",
      },
      {
        title: "What I learned",
        text: "This project taught me how to simulate a flow and, more broadly, gave me a solid foundation in computational fluid dynamics (CFD).",
      },
    ],
    gallery: [],
  },
  {
    id: "reverse-engineering-mixeur",
    title: "Reverse Engineering a Hand Blender",
    subtitle: "Reverse Engineering Course, HES-SO Valais-Wallis, 3rd year, semester 4",
    shortDescription:
      "Reverse-engineering analysis of a Tristar BL-4431 hand blender: materials, loads, costs and safety.",
    tags: ["Reverse engineering", "Materials analysis", "Safety analysis", "Granta"],
    image: "../assets/projects/reverse-engineering-mixeur/cover.jpg",
    links: [],
    sections: [
      {
        title: "The product",
        text: "Study of a Tristar BL-4431 hand blender, compact, designed for 1 or 2 people, with a detachable 450 ml container and a 180 W 2-speed motor. Project carried out with Kevin Pernet. After establishing its functional diagram, three particularly interesting parts were selected for analysis: the blade, the bearing on the blade side, and an elastomer injection-molded around a metal part.",
      },
      {
        title: "Materials analysis",
        text: "The elastomer was characterized with a Shore A hardness measured around 60 (expected range 53-66), a density of 1100 to 1300 kg/m³ and a glass transition temperature of around -120 to -125°C (measured by DSC). The metal part, initially assumed to be aluminum, turned out to be injection-molded Zamak (ZA-8 zinc-aluminum alloy), confirmed by electron microscopy.",
      },
      {
        title: "Loads and costs",
        text: "The load-path analysis showed stresses on the order of 2 MPa. The cost analysis, carried out with Granta software, estimated the injection-molded Zamak part at around CHF 1.90, the threading at CHF 0.01, and the elastomer injection-molded around the Zamak part at around CHF 0.66.",
      },
      {
        title: "Safety analysis",
        text: "A risk analysis (fault-tree type) was carried out: electrocution risk estimated at around 1 in 72,000 (defective internal insulation or damaged cable, combined with use in a wet environment), blade injury risk at around 1 in 125,000 (defective blade fixation combined with user misuse), and fire risk at around 1 in 48,000 (internal short circuit due to motor overheating, combined with mechanical jamming during prolonged use).",
      },
      {
        title: "Diagnosis and improvements",
        text: "The damping elastomer offers several advantages: reduced vibration, shock protection, noise reduction and safety in case of overload. On the other hand, it increases cost and production time, wears over time, exposes the zinc to a corrosion risk, and remains weaker under abuse. Proposed improvements: switch to a single-part manufacturing process, improve the blade, revise the wiring, reduce pivot noise, and improve ventilation against overheating.",
      },
    ],
    gallery: [],
  },
  {
    id: "levitation-magnetique",
    title: "Magnetic Levitation via Superconductivity",
    subtitle: "PI Project, 3rd year, Bachelor in Industrial Systems",
    shortDescription:
      "Magnetic levitation device using superconductivity, designed and built end-to-end during the Bachelor's program.",
    tags: ["Applied physics", "Electronics", "Control", "Superconductivity"],
    image: "../assets/projects/levitation-magnetique/cover.jpg",
    links: [
      { label: "HES-SO Valais-Wallis article", url: "https://www.hevs.ch/fr/actualites/quand-la-physique-fait-leviter-la-technologie-un-projet-etudiant-en-ingenierie-des-systemes-industriels-211842" },
    ],
    sections: [
      {
        title: "The principle",
        text: "Magnetic levitation through superconductivity is a spectacular phenomenon: once cooled to a very low temperature (typically with liquid nitrogen), a superconducting material becomes able to repel a magnetic field and levitate. This principle opens up possibilities in high-speed transport (maglev trains), precision engineering, and energy storage.",
      },
      {
        title: "The project",
        text: "As part of the Bachelor's program in Industrial Systems Engineering, this interdisciplinary 3rd-year project consisted of designing and building a magnetic levitation device end-to-end, combining applied physics, electronics and control. Project carried out with Quentin Morel and Vivian Pittet.",
      },
      {
        title: "My role",
        text: "I mainly built the device's rails (the magnetic track on which the superconductor levitates), and helped my teammates with all the mechanical aspects of the project.",
      },
      {
        title: "What I learned",
        text: "This project taught me to work with innovative materials, under demanding conditions: at very low temperatures and under strong magnetic fields.",
      },
    ],
    gallery: [],
  },
  {
    id: "recyclage-pet-filament",
    title: "Recycling PET Bottles into 3D Printing Filament",
    subtitle: "Personal project",
    shortDescription:
      "Homemade production of 3D printing filament from recycled PET bottles, a system later reproduced for RPM.",
    tags: ["Recycling", "3D printing", "DIY", "PET"],
    image: "../assets/projects/recyclage-pet-filament/cover.jpg",
    links: [],
    sections: [
      {
        title: "The project",
        text: "Homemade system to recycle PET bottles and turn them into filament usable for 3D printing.",
      },
      {
        title: "Process",
        text: "The bottle is first cut into one long continuous strip, which is then heated and rolled to form a hollow filament. Getting it right took a very large number of trials: the heating temperature directly affects the filament's consistency and strength, and many combinations had to be tested before finding a reliable, repeatable setting.",
      },
      {
        title: "Result",
        text: "After this testing phase, the system produces prints with very few defects, with recycled filament of good enough quality for clean prints.",
      },
      {
        title: "Recognition",
        text: "This project caught the interest of RPM (Recyclage Plastique Maison, home plastic recycling), for whom I was able to reproduce the system.",
      },
    ],
    gallery: [],
  },
  {
    id: "tpms",
    title: "Generative Design and Manufacturing of a Bio-Inspired Bone-Structured Prosthesis",
    subtitle: "Bachelor Thesis, HES-SO Valais-Wallis, Industrial Systems program, 2026 edition",
    shortDescription:
      "Bio-inspired femoral prosthesis with TPMS structures, combining generative design and LPBF additive manufacturing in Ti6Al4V.",
    tags: ["LPBF", "Ti6Al4V", "TPMS", "ANSYS", "Python"],
    image: "../assets/projects/tpms/cover.jpg",
    links: [
      { label: "Bachelor thesis summary (PDF)", url: "../assets/projects/tpms/resume.pdf" },
      { label: "Full final report (PDF)", url: "../assets/projects/tpms/rapport-final.pdf" },
    ],
    sections: [
      {
        title: "Objective",
        text: "Develop a bio-inspired femoral prosthesis with TPMS (Triply Periodic Minimal Surfaces) structures, combining generative design and LPBF additive manufacturing, in order to bring its mechanical behavior closer to that of natural bone. Work carried out under the supervision of Prof. Haifa Sallem, in the Design & Materials field.",
      },
      {
        title: "Experimental characterization",
        text: "Characterizing cylindrical specimens (Ø8 × 14 mm) in Ti6Al4V made it possible to build a mechanical behavior database for several TPMS architectures (Gyroid, Split-P, Diamond), and to establish the limiting generation parameters printable by LPBF, notably the minimum wall thickness and admissible cell size.",
      },
      {
        title: "Simulation-based design",
        text: "A sweep of the prosthesis's Young's modulus in finite element simulation shows that the deflection of the implanted femur crosses that of the healthy femur at 3 GPa, a value retained as the design target. This target was cross-referenced with the experimental database to adjust the cell parameters.",
      },
      {
        title: "Test protocol and results",
        text: "As no standard covers the validation of this type of prosthesis, a test protocol was derived from existing standards, with embedding in cement and quasi-static cyclic loading. The tests show an actual stiffness 16 to 18 times higher than the numerical predictions, a gap attributed to the compliance of the setup, idealized boundary conditions, and printing defects.",
      },
      {
        title: "Tool developed",
        text: "Software automating the entire workflow (generation, simulation, results processing) was developed to make the study reproducible.",
      },
    ],
    gallery: [],
  },
];
