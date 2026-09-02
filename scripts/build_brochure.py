"""
Builds public/downloads/coseke-company-overview.pdf — the brochure linked
from the homepage and contact page "Download brochure" CTAs.

Run with: python3 scripts/build_brochure.py
Regenerate whenever content/solutions.ts, content/offices.ts, or
content/site.ts changes materially, since the copy here mirrors it.
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

FONT_DIR = "/home/claude/brochure/fonts"
OUT_PATH = "/home/claude/coseke-website/public/downloads/coseke-company-overview.pdf"

# Brand tokens — kept in sync with src/app/globals.css
INK = HexColor("#10181f")
INK_SOFT = HexColor("#3c4650")
INDIGO = HexColor("#1b3a5c")
INDIGO_DEEP = HexColor("#0f2439")
CLAY = HexColor("#a6491f")
BRASS_LIGHT = HexColor("#d1ab5a")
PAPER = HexColor("#f2f3ee")
LINE = HexColor("#d3d5cc")
LINE_DARK = HexColor("#2c3a4a")
PAPER_ON_DARK = HexColor("#f2f3ee")

pdfmetrics.registerFont(TTFont("ZillaSlab", f"{FONT_DIR}/ZillaSlab-Regular.ttf"))
pdfmetrics.registerFont(TTFont("ZillaSlab-Bold", f"{FONT_DIR}/ZillaSlab-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Plex", f"{FONT_DIR}/PlexSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Plex-SemiBold", f"{FONT_DIR}/PlexSans-SemiBold.ttf"))
pdfmetrics.registerFont(TTFont("Plex-Bold", f"{FONT_DIR}/PlexSans-Bold.ttf"))

PAGE_W, PAGE_H = A4
MARGIN = 20 * mm


def wrap_text(c, text, font, size, max_width):
    """Greedy word-wrap for plain paragraphs drawn with drawString."""
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if pdfmetrics.stringWidth(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_paragraph(c, text, x, y, font, size, leading, max_width, color=INK_SOFT):
    c.setFont(font, size)
    c.setFillColor(color)
    lines = wrap_text(c, text, font, size, max_width)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def page_footer(c, page_label):
    c.setFillColor(LINE)
    c.setLineWidth(0.6)
    c.line(MARGIN, 16 * mm, PAGE_W - MARGIN, 16 * mm)
    c.setFont("Plex", 8)
    c.setFillColor(INK_SOFT)
    c.drawString(MARGIN, 11 * mm, "Coseke Limited  \u2022  www.coseke.com  \u2022  sales.ke@coseke.com")
    c.drawRightString(PAGE_W - MARGIN, 11 * mm, page_label)


def cover_mark(c, x, y, size, color):
    """The index-tab brand mark used across the site (favicon, header logo)."""
    c.setStrokeColor(color)
    c.setLineWidth(1.4)
    c.rect(x, y, size, size, stroke=1, fill=0)
    c.setFillColor(color)
    c.setFillAlpha(0.25)
    c.rect(x, y + size * 0.55, size, size * 0.45, stroke=0, fill=1)
    c.setFillAlpha(1)


def build():
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    c = canvas.Canvas(OUT_PATH, pagesize=A4)
    c.setTitle("Coseke — Company Overview")
    c.setAuthor("Coseke Limited")
    c.setSubject("Information and content management solutions across East Africa")

    # ---------- Page 1: cover + who we are + stats ----------
    c.setFillColor(INDIGO_DEEP)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    cover_mark(c, MARGIN, PAGE_H - 34 * mm, 9 * mm, BRASS_LIGHT)
    c.setFont("Plex-SemiBold", 11)
    c.setFillColor(PAPER_ON_DARK)
    c.drawString(MARGIN + 14 * mm, PAGE_H - 30 * mm, "COSEKE")

    c.setFont("Plex", 10)
    c.setFillColor(BRASS_LIGHT)
    c.drawString(MARGIN, PAGE_H - 55 * mm,
                 "Enterprise document and records management for East Africa's")
    c.drawString(MARGIN, PAGE_H - 61 * mm, "public and private sector, since 1990")

    c.setFont("ZillaSlab-Bold", 30)
    c.setFillColor(PAPER_ON_DARK)
    title_lines = [
        "Turn paper backlogs into",
        "systems your team can",
        "search in seconds.",
    ]
    ty = PAGE_H - 78 * mm
    for line in title_lines:
        c.drawString(MARGIN, ty, line)
        ty -= 11 * mm

    # Motto + capability line to fill the middle of the cover with real content
    mid_y = ty - 14 * mm
    c.setStrokeColor(LINE_DARK)
    c.setLineWidth(0.6)
    c.line(MARGIN, mid_y, PAGE_W - MARGIN, mid_y)
    mid_y -= 8 * mm
    c.setFont("ZillaSlab", 13)
    c.setFillColor(HexColor("#c9cdc3"))
    c.drawString(MARGIN, mid_y, "\u201cQuality means no compromise.\u201d")
    mid_y -= 10 * mm
    c.setFont("Plex", 10)
    c.setFillColor(HexColor("#c9cdc3"))
    mid_y = draw_paragraph(
        c,
        "We help organizations capture, manage, share, and preserve their "
        "information assets, reducing overhead and improving operational efficiency.",
        MARGIN, mid_y, "Plex", 10, 5 * mm, PAGE_W - 2 * MARGIN - 40 * mm,
        color=HexColor("#c9cdc3"),
    )

    # Stats row
    stats = [
        ("1990", "In operation since"),
        ("400+", "Clients across the region"),
        ("6", "Countries served"),
        ("250M+", "Documents digitized"),
    ]
    stat_y = 62 * mm
    col_w = (PAGE_W - 2 * MARGIN) / 4
    c.setStrokeColor(LINE_DARK)
    c.setLineWidth(0.6)
    c.line(MARGIN, stat_y + 14 * mm, PAGE_W - MARGIN, stat_y + 14 * mm)
    for i, (value, label) in enumerate(stats):
        x = MARGIN + i * col_w
        c.setFont("ZillaSlab-Bold", 20)
        c.setFillColor(PAPER_ON_DARK)
        c.drawString(x, stat_y, value)
        c.setFont("Plex", 8)
        c.setFillColor(HexColor("#c9cdc3"))
        for j, l in enumerate(wrap_text(c, label, "Plex", 8, col_w - 6 * mm)):
            c.drawString(x, stat_y - 6 * mm - j * 4 * mm, l)

    c.setFont("Plex", 8)
    c.setFillColor(HexColor("#8b9aa8"))
    c.drawString(MARGIN, 22 * mm, "Company overview \u2014 prepared for prospective clients and partners")
    c.drawRightString(PAGE_W - MARGIN, 22 * mm, "www.coseke.com")

    c.showPage()

    # ---------- Page 2: who we are + solutions grid ----------
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    y = PAGE_H - MARGIN
    c.setFont("ZillaSlab-Bold", 18)
    c.setFillColor(INDIGO)
    c.drawString(MARGIN, y, "Who we are")
    y -= 9 * mm

    about_text = (
        "Coseke is a Pan-African information and content management specialist. "
        "Since 1990 we've helped government and private-sector organizations "
        "capture, manage, share, and preserve their records, replacing paper "
        "backlogs with searchable, governed systems. We deliver on established "
        "platforms including Hyland OnBase, Kodak Alaris, and OnBoard by "
        "Passageways, backed by infrastructure partners Dell EMC, HPE, Huawei, "
        "NetApp, Veeam, and Cisco."
    )
    y = draw_paragraph(c, about_text, MARGIN, y, "Plex", 9.5, 5.2 * mm, PAGE_W - 2 * MARGIN)
    y -= 8 * mm

    # Solutions grid, grouped by category
    categories = [
        ("Document & Records Management", [
            "Electronic Document & Records Management (EDRMS)",
            "Document Imaging & Digitization",
            "Physical Records Storage",
            "Intelligent Capture & Process Automation",
        ]),
        ("Governance & Meetings", [
            "Board & Meeting Management",
            "Virtual & Hybrid AGMs",
        ]),
        ("Business Systems", [
            "Enterprise Resource Planning (ERP)",
            "Business Intelligence & Reporting",
        ]),
        ("Infrastructure & Support", [
            "ICT Infrastructure & Hardware Supply",
            "Training & Consultancy",
        ]),
    ]

    c.setFont("ZillaSlab-Bold", 14)
    c.setFillColor(INDIGO)
    c.drawString(MARGIN, y, "Solutions")
    y -= 8 * mm

    col_gap = 10 * mm
    col_w = (PAGE_W - 2 * MARGIN - col_gap) / 2
    col_x = [MARGIN, MARGIN + col_w + col_gap]
    col_y = [y, y]

    for idx, (cat_name, items) in enumerate(categories):
        col = idx % 2
        cx, cy = col_x[col], col_y[col]
        c.setStrokeColor(LINE)
        c.setLineWidth(0.6)
        c.line(cx, cy, cx + col_w, cy)
        cy -= 6 * mm
        c.setFont("Plex-SemiBold", 9.5)
        c.setFillColor(CLAY)
        cy = draw_paragraph(c, cat_name, cx, cy, "Plex-SemiBold", 9.5, 4.6 * mm, col_w, color=CLAY)
        cy -= 1 * mm
        c.setFont("Plex", 9)
        for item in items:
            c.setFillColor(INK_SOFT)
            c.circle(cx + 1.2 * mm, cy + 1.6 * mm, 0.6 * mm, stroke=0, fill=1)
            item_lines = wrap_text(c, item, "Plex", 9, col_w - 5 * mm)
            for j, l in enumerate(item_lines):
                c.drawString(cx + 4 * mm, cy - j * 4.4 * mm, l)
            cy -= 4.4 * mm * len(item_lines) + 2 * mm
        col_y[col] = cy - 4 * mm

    page_footer(c, "1 / 2")
    c.showPage()

    # ---------- Page 3: case studies + offices + CTA ----------
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    y = PAGE_H - MARGIN
    c.setFont("ZillaSlab-Bold", 18)
    c.setFillColor(INDIGO)
    c.drawString(MARGIN, y, "Proof, not just promises")
    y -= 10 * mm

    case_studies = [
        ("Kenya Airports Authority",
         "Bulk digitization and indexing so records can be searched and retrieved on demand."),
        ("Kenya Ports Authority Pension Scheme",
         "An ongoing support relationship that member-facing scheme administration can depend on."),
        ("Sheria Sacco",
         "An Electronic Document Management System that took workflow off paper entirely."),
        ("Minet Group (Insurance)",
         "Document scanning and indexing for compliance and litigation readiness."),
    ]
    for name, desc in case_studies:
        c.setFont("Plex-SemiBold", 10.5)
        c.setFillColor(INDIGO)
        c.drawString(MARGIN, y, name)
        y -= 5 * mm
        y = draw_paragraph(c, desc, MARGIN, y, "Plex", 9, 4.4 * mm, PAGE_W - 2 * MARGIN)
        y -= 5 * mm

    y -= 4 * mm
    c.setFont("ZillaSlab-Bold", 18)
    c.setFillColor(INDIGO)
    c.drawString(MARGIN, y, "Regional offices")
    y -= 9 * mm

    offices = [
        ("Nairobi, Kenya (HQ)", "+254 746 437 978", "sales.ke@coseke.com"),
        ("Kampala, Uganda", "+256 41 434 0282", "sales.ug@coseke.com"),
        ("Dar es Salaam, Tanzania", "+255 22 220 0048", "sales.tz@coseke.com"),
        ("Kigali, Rwanda", "+250 252 571 690", "sales.rw@coseke.com"),
    ]
    office_col_w = (PAGE_W - 2 * MARGIN) / 2
    for i, (city, phone, email) in enumerate(offices):
        col = i % 2
        row = i // 2
        ox = MARGIN + col * office_col_w
        oy = y - row * 20 * mm
        c.setFont("Plex-SemiBold", 10)
        c.setFillColor(INDIGO)
        c.drawString(ox, oy, city)
        c.setFont("Plex", 9)
        c.setFillColor(INK_SOFT)
        c.drawString(ox, oy - 5 * mm, phone)
        c.drawString(ox, oy - 9.5 * mm, email)

    y -= 46 * mm
    c.setStrokeColor(LINE)
    c.line(MARGIN, y, PAGE_W - MARGIN, y)
    y -= 10 * mm

    c.setFillColor(INDIGO_DEEP)
    c.rect(MARGIN, y - 28 * mm, PAGE_W - 2 * MARGIN, 28 * mm, stroke=0, fill=1)
    c.setFont("ZillaSlab-Bold", 14)
    c.setFillColor(PAPER_ON_DARK)
    c.drawString(MARGIN + 8 * mm, y - 11 * mm, "Tell us what's still on paper.")
    c.setFont("Plex", 9.5)
    c.setFillColor(HexColor("#c9cdc3"))
    c.drawString(MARGIN + 8 * mm, y - 18 * mm, "www.coseke.com/contact")
    c.drawString(MARGIN + 8 * mm, y - 23 * mm, "sales.ke@coseke.com")

    page_footer(c, "2 / 2")
    c.showPage()

    c.save()
    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    build()
