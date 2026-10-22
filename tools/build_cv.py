from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.platypus import Frame, Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "cv.pdf"

font_regular = Path("C:/Windows/Fonts/arial.ttf")
font_bold = Path("C:/Windows/Fonts/arialbd.ttf")
pdfmetrics.registerFont(TTFont("Arial", str(font_regular)))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(font_bold)))

NAVY = colors.HexColor("#0B1F33")
CYAN = colors.HexColor("#00A6D6")
ORANGE = colors.HexColor("#F26A21")
MUTED = colors.HexColor("#5D6A76")
LIGHT = colors.HexColor("#E7EDF2")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Arial-Bold", fontSize=24, leading=26, textColor=NAVY, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", fontName="Arial", fontSize=10.5, leading=14, textColor=CYAN, spaceAfter=8))
styles.add(ParagraphStyle(name="Contact", fontName="Arial", fontSize=8.2, leading=11, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=9.2, leading=12, textColor=NAVY, spaceBefore=8, spaceAfter=5, uppercase=True))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=8.5, leading=12, textColor=NAVY, spaceAfter=4))
styles.add(ParagraphStyle(name="Item", fontName="Arial", fontSize=8.1, leading=11, textColor=NAVY, leftIndent=8, firstLineIndent=-6, bulletIndent=0, spaceAfter=2))
styles.add(ParagraphStyle(name="Date", fontName="Arial-Bold", fontSize=7.5, leading=10, textColor=CYAN))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=7.3, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="Award", fontName="Arial-Bold", fontSize=8.4, leading=11, textColor=NAVY, leftIndent=7, borderColor=ORANGE, borderWidth=1, borderPadding=(2, 4, 2, 7), spaceAfter=4))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def timeline(items):
    rows = []
    for date, title, detail in items:
        rows.append([p(date, "Date"), p(f"<b>{title}</b><br/><font color='#5D6A76'>{detail}</font>", "Body")])
    table = Table(rows, colWidths=[27 * mm, 80 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -2), 0.25, LIGHT),
    ]))
    return table


def page_content(lang="fr"):
    if lang == "fr":
        profile = "Ingénieur en systèmes industriels, issu de cinq années d'atelier en polymécanique. Je relie conception, simulation, fabrication et validation expérimentale pour transformer un besoin technique en solution testée."
        education = [
            ("2026 →", "Master en génie mécanique", "HES-SO"),
            ("2023–2026", "Bachelor Systèmes industriels", "HES-SO Valais · Design & Materials · travail de Bachelor: note maximale"),
            ("2020–2022", "Technicien ES en génie mécanique", "ETML-ES, Lausanne · major en matières techniques"),
            ("2015–2020", "CFC Polymécanicien", "EPTMS / Muller-Production SA"),
        ]
        awards = [
            "Prix du public — Pitch Challenge, HEI Monthey",
            "Prix SCINTILLA AG — qualité du travail de Bachelor",
            "Note maximale — travail de Bachelor",
        ]
        projects = [
            "<b>Prothèse de hanche à structures TPMS</b> — architecture Gyroid, Split-P et Diamond; LPBF Ti6Al4V; ANSYS, nTop et Python; protocole expérimental et scan 3D.",
            "<b>Formula Student</b> — conception et intégration de systèmes mécaniques; habilitation HV2/HV3 sur deux monoplaces.",
            "<b>12 projets documentés</b> — CAO, calcul par éléments finis, aérodynamique, automatisation et fabrication.",
        ]
        exp = [
            ("2015–2020", "Apprentissage polymécanicien", "Muller-Production SA · fabrication et pratique d'atelier"),
            ("Bachelor", "Valais Racing Team", "procédures, intégration technique et gestion du temps"),
            ("Bachelor", "JEVS / JEHEPIA", "création d'une filiale d'ingénierie, gestion d'équipe et responsabilités"),
        ]
        labels = dict(profile="PROFIL", edu="FORMATION", awards="DISTINCTIONS", projects="PROJETS SÉLECTIONNÉS", exp="EXPÉRIENCE & ENGAGEMENTS", skills="COMPÉTENCES", tools="OUTILS", languages="LANGUES")
        langs = "Français — langue maternelle<br/>Anglais — intermédiaire (B1)"
    else:
        profile = "Industrial systems engineer with five years of hands-on polymechanics experience. I connect design, simulation, manufacturing and experimental validation to turn technical needs into tested solutions."
        education = [
            ("2026 →", "MSc in Mechanical Engineering", "HES-SO"),
            ("2023–2026", "BSc in Industrial Systems", "HES-SO Valais · Design & Materials · Bachelor thesis: highest grade"),
            ("2020–2022", "Advanced Diploma in Mechanical Engineering", "ETML-ES, Lausanne · top technical-subject graduate"),
            ("2015–2020", "Federal VET Diploma in Polymechanics", "EPTMS / Muller-Production SA"),
        ]
        awards = [
            "Audience Award — Pitch Challenge, HEI Monthey",
            "SCINTILLA AG Award — quality of the Bachelor thesis",
            "Highest grade — Bachelor thesis",
        ]
        projects = [
            "<b>TPMS hip implant</b> — Gyroid, Split-P and Diamond architectures; Ti6Al4V LPBF; ANSYS, nTop and Python; experimental protocol and 3D scanning.",
            "<b>Formula Student</b> — mechanical system design and integration; HV2/HV3 qualified on two race cars.",
            "<b>12 documented projects</b> — CAD, finite-element analysis, aerodynamics, automation and manufacturing.",
        ]
        exp = [
            ("2015–2020", "Polymechanics apprenticeship", "Muller-Production SA · manufacturing and workshop practice"),
            ("BSc", "Valais Racing Team", "technical integration, procedures and time management"),
            ("BSc", "JEVS / JEHEPIA", "engineering branch creation, team management and responsibility"),
        ]
        labels = dict(profile="PROFILE", edu="EDUCATION", awards="AWARDS", projects="SELECTED PROJECTS", exp="EXPERIENCE & ACTIVITIES", skills="SKILLS", tools="TOOLS", languages="LANGUAGES")
        langs = "French — native<br/>English — intermediate (B1)"

    left = [p(labels["profile"], "Section"), p(profile)]
    left += [p(labels["edu"], "Section"), timeline(education)]
    left += [p(labels["awards"], "Section")] + [p(a, "Award") for a in awards]
    right = [p(labels["projects"], "Section")] + [p("• " + x, "Item") for x in projects]
    right += [p(labels["exp"], "Section"), timeline(exp)]
    right += [p(labels["skills"], "Section"), p("Mechanical design · CAD · FEA · additive manufacturing · experimental validation · technical project management")]
    right += [p(labels["tools"], "Section"), p("Inventor · ANSYS · nTop · Python · VBA · Excel · Granta · JavaFoil")]
    right += [p(labels["languages"], "Section"), p(langs)]
    return left, right


def header(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 34 * mm, w, 34 * mm, fill=1, stroke=0)
    canvas.setFillColor(CYAN)
    canvas.rect(0, h - 34 * mm, 5 * mm, 34 * mm, fill=1, stroke=0)
    canvas.setFont("Arial-Bold", 23)
    canvas.setFillColor(colors.white)
    canvas.drawString(14 * mm, h - 16 * mm, "GILLES MARIETHOZ")
    canvas.setFont("Arial", 9.5)
    canvas.setFillColor(colors.HexColor("#62D3F0"))
    canvas.drawString(14 * mm, h - 23 * mm, "INGÉNIEUR SYSTÈMES INDUSTRIELS  ·  MECHANICAL ENGINEER")
    canvas.setFont("Arial", 7.7)
    canvas.setFillColor(colors.white)
    canvas.drawString(14 * mm, h - 29 * mm, "gilles.mariethoz@gmail.com   ·   +41 79 906 36 54   ·   gillesmariethoz.github.io   ·   linkedin.com/in/gilles-mariethoz-a6a2a6200")
    canvas.setStrokeColor(LIGHT)
    canvas.line(14 * mm, 13 * mm, w - 14 * mm, 13 * mm)
    canvas.setFont("Arial", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(14 * mm, 9 * mm, "Portfolio technique · 2026")
    canvas.drawRightString(w - 14 * mm, 9 * mm, f"{doc.page}")
    canvas.restoreState()


page_w, page_h = A4
gap = 8 * mm
col_w = (page_w - 28 * mm - gap) / 2
c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("CV — Gilles Mariethoz")
c.setAuthor("Gilles Mariethoz")
for page_number, lang in enumerate(("fr", "en"), start=1):
    class PageInfo:
        page = page_number
    header(c, PageInfo())
    left, right = page_content(lang)
    Frame(14 * mm, 17 * mm, col_w, page_h - 57 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0).addFromList(left, c)
    Frame(14 * mm + col_w + gap, 17 * mm, col_w, page_h - 57 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0).addFromList(right, c)
    c.showPage()
c.save()
print(OUT)
