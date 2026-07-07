# Live-Dokumentation

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Chronik der Arbeit am Projekt — neueste Einträge oben.

## 2026-07-07 (nachts) — Phase 4 (Teil 2): Kundendaten komplett + Palette B

- Hasans Antworten eingepflegt: Preise bestätigt; **Anfahrt im Preis
  enthalten**; Einzugsgebiet **Weilimdorf + Umkreis bis 50 km** (Hasan
  korrigierte 100 → 50 km); Dauer ca. 30 Min. (Fachfußpflege + FAQ);
  Zahlung bar/Rechnung/PayPal; WhatsApp = gleiche Nummer.
- **Design-Entscheidung B:** Palette von Grün auf **Petrol-Blau + Gold**
  umgestellt (hell + dunkel), passend zu Kunden-Logo/Flyer/Arbeitskleidung.
  Tokens umbenannt `--gruen`→`--marke` (+ `-hover`, `-hell`).
- **Logo eingebaut** (Kundenwunsch): Kopfleiste (weißer Kreis, 44 px) und
  Fußleiste (108 px) auf allen Seiten; Datei `bilder/logo-alt.png`.
- Cache-Version `?v=5`; Sichtprüfung hell/dunkel nach Palettenwechsel.

## 2026-07-07 (abends) — Strato-Sicherung + Phase 4 (Teil 1)

- Öffentliche alte Website vollständig gesichert nach
  `~/Desktop/Strato-Sicherung Norbert/` (203 Dateien; Strato-Baukasten hat
  keinen Export — Sicherung über die veröffentlichte Seite; Session-Link-
  Warnung an Hasan, Strato-Kündigung erst nach Domain-Umzug!).
- Funde: Flyer-PDF mit Preisen (48/30/57 €), Impressum (Mittenfeldstraße 39,
  70499 Stuttgart), E-Mail norbertsmobilefusspflege@gmx.de, Berufshaftpflicht
  Allianz, 4 Arbeitsfotos + Porträt + Logo (blau/gold).
- Eingepflegt: echte Leistungen/Preise (3 Angebote statt 6 Vermutungs-Karten),
  Fotos (Held, Porträt, Galerie), E-Mail überall, Impressum + Datenschutz-
  Verantwortlicher, Vertrauenspunkt „Berufshaftpflichtversichert (Allianz)",
  Stuttgart in Titel/Texten/Einzugsgebiet, Flyer als
  `DOKU/Preisliste-Flyer-alt.pdf` gesichert.
- Offen (siehe TODO): USt-Status, Anfahrtsregelung, Stadtteile, Dauer je
  Leistung, Zeiten, Zahlungsarten, Kundenstimmen, WhatsApp-Bestätigung,
  Marken-Frage Blau/Grün.

## 2026-07-07 (später) — Mobile-First-Umbau + Sprachen entschieden

- Kundenklärung durch Hasan: Seite wird hauptsächlich im **Handy-Browser**
  genutzt; Sprachen **DE, EN, PL, AR, ZH** als echte Versionen (kein Widget).
- `style.css` komplett auf **Mobile-First** umgebaut: Basis-Styles = Handy
  (eine Spalte, Menü-Knopf, Aktionsleiste unten, kompaktere Abstände),
  Erweiterungen ab 640 px (2 Spalten), 840 px (Desktop-Navigation, Held
  zweispaltig, Aktionsleiste weg), 1000 px (volle Raster).
- Richtungs-Eigenschaften auf **logische CSS-Eigenschaften** umgestellt
  (`inline-start/-end`, `block-start/-end`) — Vorbereitung für Arabisch (RTL).
- Preistabelle in Wisch-Hülle `.tabelle-rolle` (auf dem Handy horizontal
  wischbar statt gequetscht). Cache-Version aller Seiten auf `?v=2`.
- Fahrplan/TODO/REGELN entsprechend aktualisiert (Sprachversionen nach
  Phase 4; Muttersprachler-Gegenlesen als Prüfpunkt).
- Sichtprüfung per headless Chrome (hell + dunkel, 500/1000/1024/1280 px):
  Kopfzeile war zwischen 1000 und 1100 px zu eng → Desktop-Navigation
  erst ab 1000 px (darunter Menü-Knopf + Aktionsleiste), Nav-Punkt heißt
  jetzt „Leistungen", Kopfzeile verdichtet. Cache-Version `?v=3`.

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
