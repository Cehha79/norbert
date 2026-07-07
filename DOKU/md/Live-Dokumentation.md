# Live-Dokumentation

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Chronik der Arbeit am Projekt — neueste Einträge oben.

## 2026-07-07 — Projektstart: Recherche + Phasen 1–3

**Recherche** (zwei Agenten, Ergebnisse mit Quellen auf dem Desktop:
`~/Desktop/Claude Ausgabe/Fusspflege-Website-Recherche.html`):

- Ist-Zustand der alten Strato-Seite erfasst (Norbert Szczepanik,
  Fachfußpfleger 2024, FAY-Kooperation, Telefon, Seitenaufbau).
- Beispiel-Seiten, übliche Preise (mobil 35–55 €), Rechtslage (PodG,
  DDG-Impressum, Google-Fonts-Urteil, BFSG greift nicht).
- Design-Leitlinien Zielgruppe 45+: hoher Kontrast, 18 px, dezente
  Animationen, kein Parallax.

**Gebaut:**

- Projektordner `~/Desktop/Projekte/WEB/Norbert` nach dem Muster der
  Nachbar-Projekte (MikaTec-Seitenstruktur, netz-atlas-DOKU).
- Schriften Lora + Source Sans 3 lokal (WOFF2, via google-webfonts-helper).
- `style.css`: Design-System mit Themen-Tokens — hell (Standard, gedämpftes
  warmes Papierweiß) und dunkel (Grün-Anthrazit); Komponenten: Kopfleiste,
  Held, Vertrauensleiste, Karten, Schritte, Preistabelle, Zahlen,
  Kundenstimmen, FAQ, Formular, Kontakt-Kacheln, Ortsliste, Aufruf,
  Fußleiste, mobile Aktionsleiste.
- `js/thema.js` (Thema ohne Flackern, Standard hell, folgt sonst dem System)
  und `js/main.js` (Umschalter, mobiles Menü, Scroll-Einblenden,
  Zahlen-Zähler, Jahr) — alles hinter `prefers-reduced-motion`.
- Alle 7 Seiten gebaut: `index`, `leistungen`, `ueber-mich`,
  `kundenstimmen`, `kontakt`, `impressum`, `datenschutz` — echte Fakten von
  der alten Seite übernommen, fehlende Kundendaten als sichtbare
  Platzhalter (`.platzhalter`).
- Rechtliche Leitplanken direkt eingebaut: Abgrenzung kosmetisch/podologisch,
  keine geschützten Begriffe, Rechtsseiten als gekennzeichneter Entwurf.
- DOKU angelegt (md-Quellen + erzeugte HTML-Ansichten), git initialisiert.

**Zwischenruf von Hasan während des Baus:** Dunkelmodus + gedämpfter
Hellmodus (umgesetzt), Mehrsprachigkeit wie auf der alten Seite
(Entscheidung offen — siehe Fahrplan).
