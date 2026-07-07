# Live-Dokumentation

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Chronik der Arbeit am Projekt — neueste Einträge oben.

## 2026-07-07 (morgens) — Feinschliff-Serie + Tiefen-Hintergrund Sternen-Staub

- Feinschliff-Serie nach Hasans Screenshots: Firmenname aus der
  Kopfleiste in den Held (große Hauptüberschrift, Slogan kleiner),
  Sprachauswahl als runder Flaggen-Knopf ganz rechts (DE/EN/PL/AR/ZH,
  Verweise noch Platzhalter), Kopf- und Fußleiste schwarz-metallisch-
  glasig, Vertrauensbereich als 4 Tafeln baugleich zu den Schritt-Karten
  (farbige Symbol-Kreise außen), Sozial-Kacheln statt Kreise, eine
  einzige Hintergrund-Ebene, Fließtexte hell = richtig schwarz.
- **Tiefen-Hintergrund:** 2 Recherche-Agenten (Techniken + Beispiele),
  Vergleichsseite mit 10 Varianten in 2 Runden; Hasans Wahl: Variante H
  (Sternen-Staub), verfeinert: nur feiner Staub in zwei Ebenen, 5
  Mini-Funkeln, keine Licht-Höfe. Umgesetzt als Body-Hintergrund auf
  allen Seiten + Schatten-Tokens (getönt, Lichtkante) + Boden-Ellipsen.
  Entscheidungs-Datei danach in den Papierkorb. Cache `?v=29`.
- Merker: `server.py` (no-store) für die lokale Ansicht nutzen —
  Browser-Cache hatte mehrfach alte Stände gezeigt.

## 2026-07-07 (nachts, 5) — Held-Umbau + Sozial-Leiste, Startseite weiter gekürzt

- Überschrift fest zweizeilig: „Gepflegte Füße" / „Bequem bei Ihnen zu
  Hause" (zweite Zeile bricht nie um, fluide Schriftgröße); klarer
  Abstands-Rhythmus Überschrift → Text → Knöpfe; Held-Text im
  **Blocksatz** (Hasans Vorgabe).
- Neue **Sozial-Leiste** unter den Knöpfen: WhatsApp, YouTube, TikTok in
  Original-Plattformfarben (Original-Glyphen als Inline-SVG) + Kontakt-Knopf
  (Telefon-Symbol, Markenfarbe). YouTube/TikTok-Adressen fehlen noch (TODO).
- Auf Hasans Wunsch zusätzlich von der Startseite entfernt: der
  „Gut zu wissen"-Abgrenzungskasten (bleibt auf der Leistungs-Seite —
  rechtlich dort entscheidend) und der Aufruf „Bereit für gepflegte Füße?".
- Startseite jetzt: Held → Vertrauensleiste → Ablauf → Fußleiste.
  Cache `?v=8`.

## 2026-07-07 (nachts, 4) — Startseite entschlackt (Hasans Vorgabe)

- Auf Hasans Wunsch von der Startseite entfernt: Badge „Ausgebildeter
  Fachfußpfleger", Zeile „Oder rufen Sie direkt an …",
  Leistungs-Vorschau (3 Karten), Zahlen-Sektion (14+/100 %/1),
  Kundenstimmen-Auszug.
- Startseite jetzt: Held → Vertrauensleiste → Ablauf (4 Schritte) →
  Abgrenzungs-Hinweis → Aufruf → Fußleiste. Leistungen/Preise sind über
  den Held-Knopf und die Navigation erreichbar.
- Zwischenfall: erster Entfernungs-Versuch hatte durch einen mehrdeutigen
  Suchanker die Kopfzeile beschädigt → per `git checkout` wiederhergestellt
  und mit eindeutigen Ankern sauber neu ausgeführt (Merke: Anker immer auf
  Eindeutigkeit prüfen, Text kommt auch in Meta-Beschreibungen vor).

## 2026-07-07 (nachts, 3) — Logo: Original in hoher Auflösung statt Nachbau

- Hasan: Logo soll **original bleiben**, nur bessere Qualität. Fund: Auf dem
  Strato-Server lag die unverkleinerte Originaldatei (1595×1600 px,
  transparenter Hintergrund) — heruntergeladen und verwendet.
- Telefonnummer unten per präzisem PNG-Zuschnitt entfernt (eigenes
  Skript, da sips-Crop unzuverlässig); Versuch eines runden
  Zeichen-Ausschnitts verworfen (Schrift ist über die Fußspitze gemalt).
- Eingesetzt: `bilder/logo-klein.png` (400 px) in Kopfleiste (54 px),
  Fußleiste (170 px) und als Favicon; `bilder/logo.png` (800 px) als
  große Fassung. SVG-Nachbau, Zeichen-Ausschnitt und altes Mini-PNG
  gelöscht. Cache `?v=7`.

## 2026-07-07 (nachts, 2) — Logo als hochwertiges SVG neu gebaut

- Hasans Rückmeldung: eingebautes PNG-Logo wirkte unscharf/minderwertig →
  Bildmarke als **Vektor neu gezeichnet** (`bilder/logo.svg`): zwei
  Fußabdrücke „im Gang" mit Blau-Verlauf, Verlaufs-Ring, Gold-Funkeln;
  **ohne Telefonnummer** (Hasans Vorgabe). Drei Entwurfs-Runden mit
  Render-Sichtprüfung (hell/dunkel, 300/88/44 px).
- Eingesetzt: Kopfleiste 46 px, Fußleiste 112 px, **SVG-Favicon** auf allen
  7 Seiten; weiße Kreis-Hüllen entfernt (SVG bringt eigene Scheibe mit).
- Original-PNG bleibt als Referenz (`bilder/logo-alt.png`). Cache `?v=6`.

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
