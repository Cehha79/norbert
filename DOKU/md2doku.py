#!/usr/bin/env python3
"""md2doku.py — wandelt DOKU/md/*.md in DOKU/*.html um (Format wie KI-AI-Netz/netz-atlas).
Aufruf: python3 md2doku.py <DOKU-Ordner>"""
import html
import re
import sys
from datetime import date
from pathlib import Path

VORLAGE = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titel}</title>
<style>
:root{{
  --bg:#eef4f0;
  --paper:#fbfdfc;
  --text:#1c2620;
  --muted:#5b6862;
  --line:#cfdcd4;
  --soft:#e6efe9;
  --accent:#2e5f4e;
  --code:#dde9e2;
}}
*{{box-sizing:border-box}}
body{{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;margin:0;background:var(--bg);color:var(--text);line-height:1.6}}
main{{max-width:980px;margin:32px auto;padding:34px 30px;background:var(--paper);border:1px solid var(--line);border-radius:14px;box-shadow:0 18px 45px rgba(28,38,32,.08)}}
h1{{font-size:36px;margin:0 0 10px;letter-spacing:0}} h2{{margin-top:34px;border-top:1px solid var(--line);padding-top:22px}} h3{{margin-top:24px}}
.stamp{{color:var(--muted);margin:0 0 28px;font-size:14px}}
p,li{{font-size:17px}} blockquote{{background:var(--soft);border-left:5px solid var(--accent);margin:16px 0;padding:14px 18px;border-radius:8px}}
table{{width:100%;border-collapse:separate;border-spacing:0;background:#f7fbf8;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin:14px 0}}
th,td{{border-bottom:1px solid var(--line);padding:10px 12px;text-align:left;vertical-align:top}} th{{background:var(--soft)}} tr:last-child td{{border-bottom:0}}
code{{background:var(--code);padding:2px 5px;border-radius:5px}} pre{{background:#edf4ef;color:#1c2620;border:1px solid #cfdcd4;padding:16px;border-radius:10px;overflow:auto}}
pre code{{background:transparent;color:inherit;padding:0;border-radius:0}}
@media (max-width:720px){{main{{margin:0;min-height:100vh;border-radius:0;border-left:0;border-right:0;padding:24px 18px}}h1{{font-size:30px}}}}
</style>
</head>
<body><main>
<div class="stamp">aus {quelle} aktualisiert am {datum}</div>
{inhalt}
</main></body>
</html>
"""


def zeile_inline(t: str) -> str:
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    return t


def wandle(md: str) -> str:
    zeilen = md.splitlines()
    out, i = [], 0
    liste_offen = False
    while i < len(zeilen):
        z = zeilen[i]
        s = z.strip()
        # Stand-Zeile überspringen (steht schon im Stempel)
        if re.fullmatch(r"\*Stand:.*\*", s):
            i += 1
            continue
        if not s:
            if liste_offen:
                out.append("</ul>")
                liste_offen = False
            i += 1
            continue
        # Tabelle
        if s.startswith("|"):
            if liste_offen:
                out.append("</ul>")
                liste_offen = False
            tab = []
            while i < len(zeilen) and zeilen[i].strip().startswith("|"):
                tab.append(zeilen[i].strip())
                i += 1
            out.append("<table>")
            for nr, tz in enumerate(tab):
                if re.fullmatch(r"\|[\s:|-]+\|", tz):
                    continue
                zellen = [c.strip() for c in tz.strip("|").split("|")]
                tag = "th" if nr == 0 else "td"
                out.append("<tr>" + "".join(f"<{tag}>{zeile_inline(c)}</{tag}>" for c in zellen) + "</tr>")
            out.append("</table>")
            continue
        # Überschriften
        m = re.match(r"^(#{1,3})\s+(.*)$", s)
        if m:
            if liste_offen:
                out.append("</ul>")
                liste_offen = False
            stufe = len(m.group(1))
            out.append(f"<h{stufe}>{zeile_inline(m.group(2))}</h{stufe}>")
            i += 1
            continue
        # Liste (Folgezeilen mit Einrückung gehören zum Punkt)
        if s.startswith("- "):
            if not liste_offen:
                out.append("<ul>")
                liste_offen = True
            punkt = s[2:]
            while i + 1 < len(zeilen) and zeilen[i + 1].startswith("  ") and zeilen[i + 1].strip() \
                    and not zeilen[i + 1].strip().startswith(("- ", "|", "#")):
                i += 1
                punkt += " " + zeilen[i].strip()
            out.append(f"<li>{zeile_inline(punkt)}</li>")
            i += 1
            continue
        # Zitat
        if s.startswith("> "):
            out.append(f"<blockquote>{zeile_inline(s[2:])}</blockquote>")
            i += 1
            continue
        # Absatz (Folgezeilen zusammenziehen)
        absatz = s
        while i + 1 < len(zeilen) and zeilen[i + 1].strip() \
                and not zeilen[i + 1].strip().startswith(("- ", "|", "#", "> ")) \
                and not re.match(r"^#{1,3}\s", zeilen[i + 1].strip()):
            i += 1
            absatz += " " + zeilen[i].strip()
        if liste_offen:
            out.append("</ul>")
            liste_offen = False
        out.append(f"<p>{zeile_inline(absatz)}</p>")
        i += 1
    if liste_offen:
        out.append("</ul>")
    return "\n".join(out)


def main() -> None:
    doku = Path(sys.argv[1] if len(sys.argv) > 1 else "DOKU")
    md_ordner = doku / "md"
    heute = date.today().isoformat()
    for md_datei in sorted(md_ordner.glob("*.md")):
        inhalt = wandle(md_datei.read_text(encoding="utf-8"))
        titel = md_datei.stem
        ziel = doku / f"{titel}.html"
        ziel.write_text(
            VORLAGE.format(titel=titel, quelle=md_datei.name, datum=heute, inhalt=inhalt),
            encoding="utf-8",
        )
        print(f"OK  {ziel}")


if __name__ == "__main__":
    main()
