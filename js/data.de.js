/* =========================================================
   PROJEKTINHALTE — DEUTSCHE VERSION
   =========================================================
   Deutsche Übersetzung von js/data.js. Behalte dieselben "id"-Werte
   und dieselbe Reihenfolge wie in der französischen Datei bei. Die
   Bild-/PDF-Pfade beginnen mit "../", weil diese Datei von Seiten im
   Ordner de/ verwendet wird.
   ========================================================= */

const PROJECTS = [
  {
    id: "decoupe-connecteurs",
    title: "Schneidemaschine für Steckverbinderleisten",
    subtitle: "Diplomarbeit HF, ETML-ES",
    shortDescription:
      "Automatisierte Maschine zum Schneiden von Steckverbinderleisten, entwickelt im Rahmen der Diplomarbeit und später weiterentwickelt.",
    tags: ["Maschinenbau", "Automatisierung", "Pneumatik", "CAD"],
    image: "../assets/projects/decoupe-connecteurs/cover.jpg",
    links: [
      { label: "Offizielle Zusammenfassung der Diplomarbeit (PDF)", url: "../assets/projects/decoupe-connecteurs/resume-diplome.pdf" },
    ],
    sections: [
      {
        title: "Das Projekt",
        text: "Ziel war es, eine Maschine zu entwickeln, die Steckverbinderleisten schneiden kann, für den Auftraggeber DSMI electronics SA.",
      },
      {
        title: "Funktionsweise",
        text: "Die Maschine besteht aus einem Zylinder, der eine Hin- und Herbewegung ausführt: Bei jedem Zyklus nimmt er ein Teil auf, schneidet es und wirft es aus, bei einer angestrebten Taktzeit von etwa 1,5 Teilen pro Sekunde.",
      },
      {
        title: "Die Fortsetzung des Projekts",
        text: "Die Diplomarbeit wurde in 197 Stunden fristgerecht abgeschlossen, die Maschine konnte damals jedoch aufgrund zu langer Lieferfristen für bestimmte Teile nicht gebaut werden. Ich hatte später die Gelegenheit, weiter daran zu arbeiten, um das Projekt zu Ende zu bringen.",
      },
      {
        title: "Was ich gelernt habe",
        text: "Dieses Projekt hat mir viel beigebracht, insbesondere dass es nicht immer nötig ist, so weit wie möglich auf das geringstmögliche Gewicht zu optimieren, wenn dies auf Kosten der Steifigkeit der Baugruppe geht.",
      },
    ],
    gallery: [],
  },
  {
    id: "robot-hepia",
    title: "Sugarland · Roboterwettbewerb HEPIA",
    subtitle: "HEPIA · 2023 · Projekt im 1. Studienjahr",
    shortDescription:
      "Vollständig autonomer Roboter, Gewinner des Preises für die beste Zeitleistung am Roboterwettbewerb HEPIA 2023, mit der Aufgabe, einen Tisch nach einem Essen bei Kerzenlicht abzuräumen.",
    tags: ["Robotik", "Maschinenbau", "Autonomie", "HEPIA"],
    image: "../assets/projects/robot-hepia/cover.jpg",
    links: [
      { label: "HEPIA-Artikel (Ergebnisse)", url: "https://www.hesge.ch/hepia/actualites/2023/concours-robots-2023-les-resultats" },
      { label: "Bericht von 20 minutes", url: "https://www.20min.ch/fr/video/des-robots-debarrassent-les-tables-de-lhepia-617765467307" },
      { label: "Wettbewerb live (YouTube)", url: "https://www.youtube.com/watch?v=0bvMtc37eQ0" },
    ],
    sections: [
      {
        title: "Die Herausforderung",
        text: "16. Ausgabe des von HEPIA (Genf) organisierten Roboterwettbewerbs, die Abschlussaufgabe des ersten Studienjahres für die Studiengänge Maschinenbau und Mikrotechnik. Die Herausforderung: einen Roboter zu entwickeln, der zwei Teller von einem Essen bei Kerzenlicht abräumen und zu ihrem Ausgangspunkt zurückbringen kann, vollständig autonom, ohne Fernbedienung. Jeder menschliche Eingriff nach dem Start führte zu einer Zeitstrafe.",
      },
      {
        title: "Das Team und der Roboter",
        text: "Der Roboter wurde im Team unter dem Namen « Les Présidents » entwickelt und gebaut, zusammen mit Julian Bjørgo, Cécilia Descamps, Albert Guedj und Léa Lornetti. Der Roboter, Sugarland genannt, wurde über mehrere Monate vor dem Wettbewerb entwickelt, mit einer Verkleidung ganz im Süssigkeiten-Thema.",
      },
      {
        title: "Meine Rolle: Konstruktion",
        text: "Als Verantwortlicher für die Mechanik im Team habe ich den Grossteil der mechanischen Baugruppen des Roboters konstruiert: die Nocken zum Anheben der Teller, die Riemen für deren Antrieb sowie die Zahnräder für den Antrieb der Räder. Ausserdem habe ich den Encoder entwickelt, der zur Messung der Roboterbewegung und Positionsbestimmung dient, sowie das Chassis. Gerade dank dieses Chassis, gebaut mit item-Profilen, konnte ich mit item in Kontakt treten und deren Sponsoring für das Team gewinnen.",
      },
      {
        title: "Ergebnis",
        text: "Der Wettbewerb vergab drei Preise (Zeitleistung, technische/mechanische Konstruktion und Ästhetik), die ein Roboter nicht alle gleichzeitig gewinnen konnte. Sugarland gewann den Preis für die beste Zeitleistung und platzierte sich zugleich gut in den beiden anderen Kategorien. Die Veranstaltung wurde von 20 minutes begleitet und von HEPIA live auf YouTube übertragen.",
      },
      {
        title: "Was ich gelernt habe",
        text: "Dieses Projekt war meine erste richtige Erfahrung mit Teamarbeit und Projektmanagement unter engen Zeitvorgaben. Auf technischer Seite konnte ich mich praktisch in der Konstruktion von Nocken- und Riemenmechanismen sowie in der Integration von 3D-gedruckten Teilen in eine funktionsfähige mechanische Baugruppe weiterbilden.",
      },
    ],
    gallery: [],
  },
  {
    id: "bella-lui-vrt",
    title: "Bella Lui · Formula Student VRT",
    subtitle: "VRT (Valais Racing Team) · 2023-2024",
    shortDescription:
      "Elektrofahrzeug der VRT für die Formula Student: Konstruktion des TSAC (Akku-Behälter) im Mechanik-Team.",
    tags: ["Formula Student", "TSAC", "Elektrofahrzeug", "VRT"],
    image: "../assets/projects/bella-lui-vrt/cover.jpg",
    links: [
      { label: "VRT-Seite: Bella Lui", url: "https://www.vrt-fs.ch/nos-creations/bella-lui" },
    ],
    sections: [
      {
        title: "Das Projekt",
        text: "Bella Lui ist der zweite Einsitzer der VRT (Valais Racing Team), dem Formula-Student-Team der HES-SO Valais. Das Fahrzeug leistet 80 kW bei einer Höchstgeschwindigkeit von 120 km/h und einer Masse von 280 kg. Das Team ist in drei Bereiche gegliedert: Mechanik-Team, Elektrik-Team und Business-Team.",
      },
      {
        title: "Meine Rolle: TSAC",
        text: "Im Mechanik-Team habe ich vor allem am mechanischen Teil des TSAC (Tractive System Accumulator Container) gearbeitet, dem Behälter, der die Hochvolt-Batterie des Fahrzeugs aufnimmt und schützt, gemeinsam mit Nicolas Landry. Diese Arbeit erfolgte im Rahmen strenger Normen und Vorschriften und hat mir geholfen, meine Teamfähigkeit weiterzuentwickeln.",
      },
      {
        title: "Weitere Beiträge",
        text: "Neben dem TSAC habe ich auch die Befestigungen der Flügel sowie die Firewall (die feuerfeste Trennwand zwischen Akku und Cockpit) konstruiert, ebenso wie einige weitere kleine Teile am Fahrzeug.",
      },
      {
        title: "Hochvolt-Zertifizierung",
        text: "Um am TSAC arbeiten zu können, habe ich die VRT-Zertifizierungen HV2 und HV3 erworben, die für Arbeiten an den Hochvoltsystemen des Fahrzeugs erforderlich sind.",
      },
    ],
    gallery: [],
  },
  {
    id: "potence-mdf",
    title: "Kragarm aus MDF",
    subtitle: "HES-SO Valais, 2. Studienjahr, 1. Semester",
    shortDescription:
      "Tragstruktur, gebaut aus einer einzigen MDF-Platte, bis zum Bruch belastet im Wettbewerb gegen die anderen Teams.",
    tags: ["Maschinenbau", "Werkstofffestigkeit", "Teamarbeit"],
    image: "../assets/projects/potence-mdf/cover.jpg",
    links: [],
    sections: [
      {
        title: "Die Herausforderung",
        text: "Einen Kragarm entwerfen und bauen, der möglichst viel Last tragen kann, unter Verwendung einer einzigen MDF-Platte als Rohmaterial. Die Beschränkung auf ein einziges Material erforderte, die Geometrie und den Zuschnitt vor der Fertigung gründlich zu durchdenken: Der kleinste Schnittfehler liess keinen Spielraum für einen Neuversuch.",
      },
      {
        title: "Konstruktion",
        text: "Projekt im Team mit Aurore Mauris und Sven Voltolini realisiert, von der Konstruktion der Geometrie bis zum Zuschnitt und der Montage des Kragarms. Die Verbindung wurde mit Dübelverbindungen wie im Schreinerhandwerk konzipiert, statt mit Schrauben oder Klebstoff, unter Einhaltung der begrenzten Fläche der verfügbaren MDF-Platte.",
      },
      {
        title: "Ergebnis",
        text: "Alle Kragarme der Klasse wurden bis zum Bruch belastet, um zu bestimmen, welcher am meisten Gewicht trug, bevor er nachgab. Unser Kragarm gewann den Test mit der besten Festigkeit aller Teams.",
      },
      {
        title: "Was ich gelernt habe",
        text: "Dieses Projekt war eine gute praktische Einführung in die Werkstofffestigkeit und in Dübelverbindungstechniken aus dem Schreinerhandwerk. Die Arbeit mit nur einer einzigen Materialplatte, ohne Recht auf Fehler, hat uns zudem gelehrt, unsere Konstruktion zu validieren, bevor überhaupt geschnitten wird, und die Arbeit im Team unter Zeitdruck gut aufzuteilen.",
      },
    ],
    gallery: [],
  },
  {
    id: "design-eversys",
    title: "Neugestaltung einer Eversys-Kaffeemaschine",
    subtitle: "Industriedesign, HES-SO Valais-Wallis, in Zusammenarbeit mit Eversys",
    shortDescription:
      "Ästhetisches Konzept für eine professionelle Kaffeemaschine, in Zusammenarbeit mit Eversys und Industriedesignern.",
    tags: ["Industriedesign", "Ästhetik", "CAD", "Eversys"],
    image: "../assets/projects/design-eversys/detail-selecteur.jpg",
    links: [
      { label: "Projekt-Portfolio (PDF)", url: "../assets/projects/design-eversys/portfolio.pdf" },
    ],
    sections: [
      {
        title: "Das Projekt",
        text: "Im Rahmen des Kurses Industriedesign an der HES-SO Valais-Wallis wurde dieses Projekt in Zusammenarbeit mit Eversys realisiert, einem Schweizer Hersteller professioneller Kaffeemaschinen, was uns die Gelegenheit gab, Fachleute aus dem Industriedesign kennenzulernen. Ziel war es, im Zweierteam mit Tristan Coppey, die Ästhetik einer professionellen Kaffeemaschine (Eversys Cameo Classic) neu zu denken, ausgerichtet auf drei Prioritäten: eine intuitive Kaffeeauswahl, eine einfache Montage und Bedienung sowie einen freien Blick auf den Kaffee während der Zubereitung.",
      },
      {
        title: "Vorgehen",
        text: "Drei sehr unterschiedliche Konzeptrichtungen wurden untersucht und skizziert, bevor die gewählte Richtung weiterentwickelt wurde: ein Arm in Form eines Rohrbogens mit einem drehbaren Zylinder zur Kaffeeauswahl.",
      },
      {
        title: "Das finale Konzept",
        text: "Das Endergebnis übernimmt eine vom Steampunk inspirierte Ästhetik: Ein Kupferbogen trägt einen Auswahlzylinder mit Messingringen, mit einem Holzgriff zur Bestätigung der Wahl, Haken zum Abstellen der Tassen und einer integrierten Abtropfmatte.",
      },
      {
        title: "Ein anderer Ansatz",
        text: "Dieses Projekt war für mich besonders: Es war das erste Mal, dass ich ausschliesslich mit Blick auf die Ästhetik konstruierte, ohne zuerst eine technische Einschränkung lösen zu müssen.",
      },
    ],
    gallery: [],
  },
  {
    id: "alpinea-vrt",
    title: "Alpinea · Formula Student VRT",
    subtitle: "VRT (Valais Racing Team) · 2. Studienjahr, 2024-2025",
    shortDescription:
      "Dritter Elektro-Einsitzer der VRT: Sicherheitssimulationen, CAD-Schulung und Unterstützung des Mechanik-Teams.",
    tags: ["Formula Student", "Simulation", "CAD", "VRT"],
    image: "../assets/projects/alpinea-vrt/cover.jpg",
    links: [
      { label: "VRT-Seite: Alpinea", url: "https://www.vrt-fs.ch/nos-creations/alpinea" },
    ],
    sections: [
      {
        title: "Das Projekt",
        text: "Alpinea ist der dritte Elektro-Einsitzer der VRT (Valais Racing Team). Er leistet 80 kW bei einer Höchstgeschwindigkeit von 120 km/h und einer Masse von 263,5 kg. Das Team wurde im Vergleich zu den Vorsaisons erweitert, diesmal mit fünf Bereichen: Mechanik-Team, Elektrik-Team, IT-Team, Business-Team und Driverless-Team.",
      },
      {
        title: "Meine Rolle",
        text: "Während meines 2. Studienjahres habe ich vor allem meinen Freund Nicolas Landry in seiner Rolle als Leiter des Mechanik-Teams unterstützt. Ausserdem habe ich mehrere Teammitglieder in CAD mit Inventor geschult.",
      },
      {
        title: "Sicherheitssimulationen",
        text: "Ich habe die Simulationen für das Chassis, die Kopfstütze und die Radnabe durchgeführt. Diese Simulationen zeigten, dass diese Teile unterhalb der angestrebten Sicherheitsfaktoren lagen. Trotz dieser Feststellung entschied sich das Team, die gleiche Grösse und das gleiche Material beizubehalten.",
      },
    ],
    gallery: [],
  },
  {
    id: "lanceur-balles-golf",
    title: "Golfball-Abschussgerät",
    subtitle: "Mechanik-Projekt, HES-SO Valais-Wallis, September 2024 bis Mai 2025",
    shortDescription:
      "Pneumatisch angetriebenes Golfball-Abschussgerät, im Zweierteam entwickelt und Gewinner des Wettbewerbs gegen die anderen Teams.",
    tags: ["Maschinenbau", "CAD", "Pneumatik", "Ballistik"],
    image: "../assets/projects/lanceur-balles-golf/cover.jpg",
    links: [
      { label: "Vollständiger Projektbericht (PDF)", url: "../assets/projects/lanceur-balles-golf/rapport.pdf" },
    ],
    sections: [
      {
        title: "Die Herausforderung",
        text: "Im Rahmen des Kurses Mechanik-Projekt an der HES-SO Valais-Wallis ein Golfball-Abschussgerät entwerfen und bauen, im Zweierteam mit Laura Weber.",
      },
      {
        title: "1. Semester: Konstruktion",
        text: "Vollständige Bedarfsanalyse, Bewertung von 15 verschiedenen Konzepten, anschliessend Auswahl des Druckluftantriebs als effizienteste Lösung. Ballistische und thermodynamische Berechnungen zur Festlegung der Abschussparameter (25,7 m/s, 45° Winkel, 50 m Reichweite), gefolgt von einem vollständigen CAD-Modell mit integrierten Pneumatik- und Sicherheitssystemen.",
      },
      {
        title: "2. Semester: Fertigung",
        text: "Fertigung und Montage des Abschussgeräts, mit einer Kombination aus gefrästen Teilen, 3D-gedruckten Teilen und elektropneumatischen Steuerungen. Zusammenarbeit mit SMC, die die pneumatischen Komponenten lieferten.",
      },
      {
        title: "Funktionsweise",
        text: "Der Tank wird mit Druckluft gefüllt; ein mechanisches Sicherheitsventil stellt sicher, dass kein Druck mehr vorhanden ist, wenn es geöffnet wird. Ein Druck von 0,8 bar schaltet die mechanische und elektrische Kontrollleuchte ein. Beim Drücken der Fernbedienung wird ein elektrisches Signal gesendet, das das elektropneumatische Ventil auslöst, welches wiederum das Impulsventil betätigt: Dieses gibt die Luft aus dem Tank schlagartig in den Lauf frei, wodurch der Ball ausgeworfen wird. Die mit Sand beschwerten 3D-gedruckten Teile sowie die MDF-Platten sorgen für die Stabilität des Abschussgeräts im Moment des Abschusses.",
      },
      {
        title: "Tests und Validierung",
        text: "Der Tank wurde vor dem physischen Drucktest Berechnungen zur Druckfestigkeit unterzogen (Wandspannungen, Schweissnahtfestigkeit). Anschliessend wurde das Abschussgerät leer getestet und Punkt für Punkt mit dem Pflichtenheft abgeglichen.",
      },
      {
        title: "Ergebnis",
        text: "Das Projekt endete mit einem Wettbewerb zwischen allen Studierendenteams. Unser Abschussgerät belegte den ersten Platz, da es das Ziel häufiger traf als alle anderen Systeme.",
      },
    ],
    gallery: [],
  },
  {
    id: "cfd-naca0015",
    title: "Strömungsstudie um ein NACA-0015-Profil",
    subtitle: "CFD-Kurs, HES-SO Valais-Wallis, 3. Studienjahr, Semester 4",
    shortDescription:
      "Numerische Simulation der Strömung um ein NACA-0015-Profil, mit Analyse des Strömungsabrisses bei verschiedenen Anstellwinkeln.",
    tags: ["CFD", "ANSYS", "JavaFoil", "Simulation"],
    image: "../assets/projects/cfd-naca0015/cover.jpg",
    links: [],
    sections: [
      {
        title: "Das Projekt",
        text: "Projekt in zwei Teilen. Der erste Teil bestand darin, die Wasserströmung um ein NACA-0015-Profil bei 0° Anstellwinkel zu simulieren, um das numerische Modell, den Auftrieb, den Widerstand und das Strömungsverhalten zu validieren. Der zweite Teil erweiterte die Studie auf verschiedene Anstellwinkel und untersuchte, wie sich Auftrieb, Widerstand und Strömungseigenschaften bis zum Strömungsabriss und zur Strömungsablösung bei hohen Winkeln entwickeln.",
      },
      {
        title: "Ergebnisse",
        text: "Die Konvergenz der Simulationen und die Netzqualität wurden überprüft. Die ermittelten Auftriebs- und Widerstandsbeiwerte entsprachen den Erwartungen und den Referenzsimulationen. Die Druck-, Reibungs- und Geschwindigkeitsfelder stimmten mit dem erwarteten theoretischen Verhalten überein, und sowohl Strömungsabriss als auch Strömungsablösung wurden bei hohen Anstellwinkeln tatsächlich beobachtet.",
      },
      {
        title: "Fazit",
        text: "Dieses Projekt zeigte die Zuverlässigkeit des numerischen Modells für eine stationäre Strömung um ein symmetrisches Profil und ermöglichte ein besseres Verständnis der Auswirkung des Anstellwinkels. Identifizierte Verbesserungsansätze: das Netz in der Nähe des Profils verfeinern und ein Modell für den laminar-turbulenten Übergang verwenden, um genauere Reibungsvorhersagen zu erhalten. Verwendete Werkzeuge: ANSYS, JavaFoil.",
      },
      {
        title: "Was ich gelernt habe",
        text: "Dieses Projekt hat mir beigebracht, eine Strömung zu simulieren, und mir allgemein eine solide Grundlage in numerischer Strömungsmechanik (CFD) vermittelt.",
      },
    ],
    gallery: [],
  },
  {
    id: "reverse-engineering-mixeur",
    title: "Reverse Engineering eines Stabmixers",
    subtitle: "Reverse-Engineering-Kurs, HES-SO Valais-Wallis, 3. Studienjahr, Semester 4",
    shortDescription:
      "Reverse-Engineering-Analyse eines Stabmixers Tristar BL-4431: Werkstoffe, Kräfte, Kosten und Sicherheit.",
    tags: ["Reverse Engineering", "Werkstoffanalyse", "Sicherheitsanalyse", "Granta"],
    image: "../assets/projects/reverse-engineering-mixeur/cover.jpg",
    links: [],
    sections: [
      {
        title: "Das Produkt",
        text: "Untersuchung eines Stabmixers Tristar BL-4431, kompakt, für 1 bis 2 Personen ausgelegt, mit abnehmbarem 450-ml-Behälter und 180-W-Motor mit 2 Geschwindigkeiten. Projekt mit Kevin Pernet realisiert. Nach Erstellung des Funktionsschemas wurden drei besonders interessante Teile für die Analyse ausgewählt: die Klinge, das Lager auf der Klingenseite und ein um ein Metallteil gespritztes Elastomer.",
      },
      {
        title: "Werkstoffanalyse",
        text: "Das Elastomer wurde mit einer gemessenen Shore-A-Härte von etwa 60 charakterisiert (erwarteter Bereich 53-66), einer Dichte von 1100 bis 1300 kg/m³ und einer Glasübergangstemperatur von etwa -120 bis -125 °C (mittels DSC gemessen). Das Metallteil, zunächst als Aluminium vermutet, erwies sich als spritzgegossenes Zamak (Zink-Aluminium-Legierung ZA-8), bestätigt durch Elektronenmikroskopie.",
      },
      {
        title: "Kräfte und Kosten",
        text: "Die Analyse des Kraftflusses zeigte Spannungen in der Grössenordnung von 2 MPa. Die mit der Software Granta durchgeführte Kostenanalyse schätzte das spritzgegossene Zamak-Teil auf etwa 1,90 CHF, das Gewinde auf 0,01 CHF und das um das Zamak-Teil gespritzte Elastomer auf etwa 0,66 CHF.",
      },
      {
        title: "Sicherheitsanalyse",
        text: "Es wurde eine Risikoanalyse (nach Art eines Fehlerbaums) durchgeführt: Das Stromschlagrisiko wurde auf etwa 1 zu 72'000 geschätzt (defekte Innenisolierung oder beschädigtes Kabel, kombiniert mit der Nutzung in feuchter Umgebung), das Verletzungsrisiko durch die Klingen auf etwa 1 zu 125'000 (defekte Klingenbefestigung kombiniert mit Fehlbedienung) und das Brandrisiko auf etwa 1 zu 48'000 (interner Kurzschluss durch Motorüberhitzung, kombiniert mit mechanischer Blockade bei längerer Nutzung).",
      },
      {
        title: "Diagnose und Verbesserungen",
        text: "Das dämpfende Elastomer bietet mehrere Vorteile: geringere Vibrationen, Stossschutz, Geräuschreduzierung und Sicherheit im Überlastfall. Im Gegenzug erhöht es die Kosten und die Produktionszeit, nutzt sich mit der Zeit ab, setzt das Zink einem Korrosionsrisiko aus und bleibt bei missbräuchlicher Nutzung schwächer. Vorgeschlagene Verbesserungen: Umstellung auf ein Einteile-Fertigungsverfahren, Verbesserung der Klinge, Überarbeitung der Verkabelung, Reduzierung des Achsgeräuschs und Verbesserung der Belüftung gegen Überhitzung.",
      },
    ],
    gallery: [],
  },
  {
    id: "levitation-magnetique",
    title: "Magnetschwebetechnik durch Supraleitung",
    subtitle: "PI-Projekt, 3. Studienjahr, Bachelor Industrielle Systeme",
    shortDescription:
      "Magnetschwebevorrichtung mittels Supraleitung, vollständig eigenständig während des Bachelorstudiums entworfen und gebaut.",
    tags: ["Angewandte Physik", "Elektronik", "Regelungstechnik", "Supraleitung"],
    image: "../assets/projects/levitation-magnetique/cover.jpg",
    links: [
      { label: "Artikel der HES-SO Valais-Wallis", url: "https://www.hevs.ch/fr/actualites/quand-la-physique-fait-leviter-la-technologie-un-projet-etudiant-en-ingenierie-des-systemes-industriels-211842" },
    ],
    sections: [
      {
        title: "Das Prinzip",
        text: "Die magnetische Schwebung durch Supraleitung ist ein spektakuläres Phänomen: Auf sehr tiefe Temperatur abgekühlt (typischerweise mit flüssigem Stickstoff), wird ein supraleitendes Material fähig, ein Magnetfeld abzustossen und zu schweben. Dieses Prinzip eröffnet Perspektiven im Hochgeschwindigkeitsverkehr (Magnetschwebebahnen), in der Präzisionstechnik oder auch in der Energiespeicherung.",
      },
      {
        title: "Das Projekt",
        text: "Im Rahmen des Bachelorstudiums Ingenieurwesen Industrielle Systeme bestand dieses interdisziplinäre Projekt des 3. Studienjahres darin, eine Magnetschwebevorrichtung vollständig eigenständig zu entwerfen und zu bauen, unter Kombination von angewandter Physik, Elektronik und Regelungstechnik. Projekt mit Quentin Morel und Vivian Pittet realisiert.",
      },
      {
        title: "Meine Rolle",
        text: "Ich habe vor allem die Schienen der Vorrichtung gefertigt (die Magnetbahn, auf der der Supraleiter schwebt), und habe meinen Kollegen bei allen mechanischen Fragen des Projekts geholfen.",
      },
      {
        title: "Was ich gelernt habe",
        text: "Dieses Projekt hat mich gelehrt, mit innovativen Werkstoffen unter anspruchsvollen Bedingungen zu arbeiten: bei sehr tiefen Temperaturen und unter starken Magnetfeldern.",
      },
    ],
    gallery: [],
  },
  {
    id: "recyclage-pet-filament",
    title: "Recycling von PET-Flaschen zu 3D-Druckfilament",
    subtitle: "Persönliches Projekt",
    shortDescription:
      "Handgefertigte Herstellung von 3D-Druckfilament aus recycelten PET-Flaschen, ein System, das später für RPM nachgebaut wurde.",
    tags: ["Recycling", "3D-Druck", "Selbstgebaut", "PET"],
    image: "../assets/projects/recyclage-pet-filament/cover.jpg",
    links: [],
    sections: [
      {
        title: "Das Projekt",
        text: "Selbstgebautes System, um PET-Flaschen zu recyceln und in für den 3D-Druck verwendbares Filament umzuwandeln.",
      },
      {
        title: "Verfahren",
        text: "Die Flasche wird zunächst in ein langes, durchgehendes Band geschnitten, das anschliessend erhitzt und gewalzt wird, um ein hohles Filament zu formen. Die Feinabstimmung erforderte sehr viele Versuche: Die Heiztemperatur beeinflusst direkt die Gleichmässigkeit und Festigkeit des Filaments, und es mussten zahlreiche Kombinationen getestet werden, bevor eine zuverlässige, reproduzierbare Einstellung gefunden wurde.",
      },
      {
        title: "Ergebnis",
        text: "Nach dieser Testphase ermöglicht das System Drucke mit sehr wenigen Fehlern, mit recyceltem Filament von ausreichender Qualität für saubere Drucke.",
      },
      {
        title: "Anerkennung",
        text: "Dieses Projekt weckte das Interesse von RPM (Recyclage Plastique Maison, Kunststoffrecycling zu Hause), für die ich das System nachbauen konnte.",
      },
    ],
    gallery: [],
  },
  {
    id: "tpms",
    title: "Generatives Design und Fertigung einer bioinspirierten Prothese mit Knochenstruktur",
    subtitle: "Bachelorarbeit, HES-SO Valais-Wallis, Studiengang Industrielle Systeme, Ausgabe 2026",
    shortDescription:
      "Bioinspirierte Oberschenkelprothese mit TPMS-Strukturen, die generatives Design und additive LPBF-Fertigung in Ti6Al4V kombiniert.",
    tags: ["LPBF", "Ti6Al4V", "TPMS", "ANSYS", "Python"],
    image: "../assets/projects/tpms/cover.jpg",
    links: [
      { label: "Zusammenfassung der Bachelorarbeit (PDF)", url: "../assets/projects/tpms/resume.pdf" },
      { label: "Vollständiger Schlussbericht (PDF)", url: "../assets/projects/tpms/rapport-final.pdf" },
    ],
    sections: [
      {
        title: "Ziel",
        text: "Entwicklung einer bioinspirierten Oberschenkelprothese mit TPMS-Strukturen (Triply Periodic Minimal Surfaces), die generatives Design und additive LPBF-Fertigung kombiniert, um ihr mechanisches Verhalten an jenes des natürlichen Knochens anzunähern. Arbeit unter der Leitung von Prof. Haifa Sallem, im Bereich Design & Materials.",
      },
      {
        title: "Experimentelle Charakterisierung",
        text: "Die Charakterisierung zylindrischer Proben (Ø8 × 14 mm) aus Ti6Al4V ermöglichte den Aufbau einer Datenbank zum mechanischen Verhalten für mehrere TPMS-Architekturen (Gyroid, Split-P, Diamond) sowie die Festlegung der mittels LPBF druckbaren Grenzparameter, insbesondere der minimalen Wandstärke und der zulässigen Zellgrösse.",
      },
      {
        title: "Konstruktion durch Simulation",
        text: "Eine Untersuchung des Elastizitätsmoduls der Prothese mittels Finite-Elemente-Simulation zeigt, dass sich die Durchbiegung des implantierten Femurs bei 3 GPa mit jener des gesunden Femurs kreuzt, ein Wert, der als Konstruktionsziel festgelegt wurde. Dieses Ziel wurde mit der experimentellen Datenbank abgeglichen, um die Zellparameter anzupassen.",
      },
      {
        title: "Testprotokoll und Ergebnisse",
        text: "Da keine Norm die Validierung dieser Art von Prothese abdeckt, wurde ein Testprotokoll aus bestehenden Normen abgeleitet, mit Einbettung in Zement und quasi-statischer zyklischer Belastung. Die Tests zeigen eine tatsächliche Steifigkeit, die 16- bis 18-mal höher ist als die numerischen Vorhersagen, eine Abweichung, die der Nachgiebigkeit des Aufbaus, den idealisierten Randbedingungen und Druckfehlern zugeschrieben wird.",
      },
      {
        title: "Entwickeltes Werkzeug",
        text: "Eine Software zur Automatisierung des gesamten Arbeitsablaufs (Generierung, Simulation, Ergebnisverarbeitung) wurde entwickelt, um die Studie reproduzierbar zu machen.",
      },
    ],
    gallery: [],
  },
];
