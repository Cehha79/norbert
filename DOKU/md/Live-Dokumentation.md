# Live-Dokumentation

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Chronik der Arbeit am Projekt — neueste Einträge oben.

## 2026-07-07 (vormittags) — Leistungs-Tafeln farbig + Detail-Masken mit Fotos

- **Leistungs-Tafeln** (leistungen.html) überarbeitet: jede Tafel hat eine
  Kennfarbe (`--lk`: Blau/Grün/Gold, dunkle Varianten wie die
  Vertrauens-Kreise) — farbige Linie oben, getönter Rand (color-mix mit
  Fallback), Symbol-Kachel und Überschrift in der Kennfarbe. Preiszeile
  in allen Tafeln **unten bündig** (Flex + `margin-block-start: auto`)
  mit Trennlinie und „Details ansehen ›".
- **Detail-Masken:** Klick/Enter/Leertaste auf eine Tafel öffnet ein
  natives `<dialog>` (`.maske`) mit Foto (16:9), Eckdaten-Chips
  (Dauer/Preis/Anfahrt), ausführlicher Beschreibung, Ablauf-Liste,
  „Gut zu wissen"-Hinweis (rechtssicher: kosmetisch, keine Heilkunde)
  und Termin-Knopf. Schließen: X, ESC, Klick auf den Rand. JS in
  main.js (`?v=3`), Fallback: ohne `showModal` bleibt alles wie bisher.
- **Fotos:** Agent-Recherche auf Pexels (Lizenz: kommerziell frei, keine
  Namensnennung nötig, https://www.pexels.com/license/). Eingebaut in
  `bilder/`: `leistung-fusspflege.jpg` (Foto 5619459, Nico Becker),
  `leistung-massage.jpg` (5793925, Yan Krukau),
  `leistung-reflexzonen.jpg` (5793976, Yan Krukau) — je 1600 px, lokal,
  keine Fremdabrufe. Können später gegen echte Norbert-Fotos getauscht
  werden.
- Fehler behoben: `width/height`-Attribute des Masken-Bilds hebelten das
  16:9-Verhältnis aus (Präsentations-Höhe) → `height: auto` im CSS.
- `server.py`: Standard-Port jetzt **8081** (+ Port-Argument, chdir zum
  Skript-Ordner) — unter 8080 läuft auf diesem Mac der MikaTec-Server,
  der sich Port 8080 automatisch zurückholt. Cache `?v=30` (style) /
  `?v=3` (main.js) jetzt wieder auf **allen** 7 Seiten einheitlich
  (waren auseinandergelaufen: nur index auf v=29, Rest v=7).
- Nachbesserung auf Hasans Rückmeldung („zu schmal und zu lang"): Maske
  auf **880 px** verbreitert, Foto als flaches Banner (5:2 statt 16:9),
  Inhalt mittig auf max. 760 px. Cache `?v=31`. (Hasan hatte zudem kurz
  eine Zwischenfassung erwischt: der 16:9-Fix kam nach dem v=30-Bump —
  Merker: nach JEDER CSS-Änderung Version hochzählen, auch bei Nachfixen.)
- Seitenkopf aller Unterseiten kompakter (Hasan: „zu breit und zu viel"):
  H1 kleiner (clamp 27–40 px statt bis 52), Untertext max. 560 px breit,
  Abstände gestrafft (`padding-block` 24–40/14–22 px), Inline-Abstand zum
  ersten Abschnitt einheitlich 16 px auf allen 6 Unterseiten. Cache `?v=32`.
- Preistabelle aufgewertet (Hasan: „Spalten-Linien rein, bessere Tabelle"):
  Spalten-Linien, goldene Linie unter der Kopfzeile, Zebra-Streifen
  (helle + dunkle Variante), Dauer-Spalte mittig mit fester Breite,
  Preis-Spalte rechts, Anfahrt-Zeile als hervorgehobene Schluss-Zeile
  (`--marke-hell`, fett); `border-collapse: separate`, damit die runden
  Ecken wirklich greifen. Abschnitts-Abstand global gestrafft:
  `--abstand` von 52–104 px auf 40–68 px. Cache `?v=33`.
- Abgrenzungs-Bereich professionell umgebaut (Hasans Auftrag „medizinische
  Sache gut erklären"): zwei symmetrische Vergleichs-Tafeln
  (`.vergleich`, ab 840 px nebeneinander) — grün „Das übernehme ich"
  (kosmetische Pflege gesunder Füße) vs. rot „Das gehört in die Podologie"
  (eingewachsene/verdickte Nägel, Pilz-Verdacht, Warzen, offene Stellen,
  diabetisches Fußsyndrom); darunter Erklär-Absatz „Warum diese klare
  Trennung?" (PodG: geschützte Bezeichnungen, staatliche Ausbildung,
  ärztliche Verordnung) + Hygiene-Satz. Rechtlich weiterhin sauber: der
  Pflicht-Hinweis bleibt auf der Leistungs-Seite, nur besser sichtbar.
- Aufruf-Block „Fragen zu einer Leistung?" auf Hasans Wunsch von der
  Leistungs-Seite entfernt. Cache `?v=34`.
- „Warum diese klare Trennung?" als dritte Vergleichs-Tafel: Kennfarbe
  **Orange** (`.vt-warum`, hell #c26a35 / dunkel #cd8352), Glühbirnen-
  Symbol (Hasans Wunsch), volle Breite unter den zwei Tafeln
  (`grid-column: 1 / -1`), Text im **Blocksatz** mit Silbentrennung,
  ab 840 px **zweispaltig** (halb so hoch).
- **Fußleiste fixiert** (ab 1000 px): bleibt beim Scrollen immer sichtbar
  (`position: fixed` + 62 px Body-Puffer). Mobil bewusst NICHT fixiert —
  dort sitzt unten bereits die fixe Aktionsleiste. Cache `?v=35`.
- Weiter verdichtet: „Anfahrt inklusive"-Hinweiskasten unter der Tabelle
  entfernt (Inhalt steht in der Anfahrt-Zeile der Tabelle; Details siehe
  Kontakt-Seite), Abschnitts-Abstand `--abstand` nochmals halbiert auf
  26–40 px. Cache `?v=36`.
- Feinschliff Warum-Tafel: Ergänzungssatz „– beide Bereiche ergänzen
  sich, ersetzen einander aber nicht." gleicht die zwei Textspalten aus
  (vorher links eine Zeile weniger); letzter Abschnitt jeder Seite endet
  jetzt 14 px über der Fußleiste (`main > section:last-child`).
  Cache `?v=37`.
- **Kundenstimmen-Seite neu** (Hasans Auftrag): Stimmen als rollbares
  Band `.stimmen-rolle` — 2 Reihen, auf Desktop 3 Spalten sichtbar
  (`grid-auto-flow: column` + `grid-auto-columns`), seitlich per
  Scroll-Snap und runden Pfeil-Knöpfen zu weiteren Stimmen (12
  Platzhalter), Karten mit Avatar-Kreis und Trennlinie. **Bewertung
  abgeben** direkt auf der Seite: Gold-Tafel im Vergleichs-Stil mit
  Sterne-Auswahl (Radio-Gruppe, row-reverse-Technik, ohne JS gefärbt),
  Name/Ort/Text; Absenden öffnet WhatsApp bzw. E-Mail-Programm mit
  fertigem Text (statisch, kein Backend, DSGVO-schonend — gesendet wird
  erst dort). FAQ „Gut zu wissen" an den Tafel-Stil angepasst: 2 Spalten
  ab 840 px, Marke-Kante, Schatten, `align-items: start`. Aufruf-Block
  „Noch Fragen offen?" entfernt. main.js `?v=4` (Band-Pfeile +
  Bewertungs-Versand), Cache `?v=39`.
- 18 **Muster-Bewertungen** eingesetzt (Hasans Wunsch, nur zum
  Wirkungstest — werden vor Livegang gelöscht/ersetzt, siehe WICHTIG +
  TODO): verschiedene Textlängen, Namen/Orte aus dem Einzugsgebiet,
  farbige Initialen-Avatare (6 Palettenfarben), auch 4-Sterne-Karten;
  jede Karte trägt ein „Beispiel"-Etikett (rechtliche Absicherung, UWG).
  Bewertungs-Tafel kompakter: Sterne + Name + Ort in einer Zeile
  (ab 640 px), Sterne 30 px, Textfeld flacher, Hinweis kleiner.
  Cache `?v=40`.
- **FAQ als Masken** (Hasans Wunsch statt Aufklappen): jede der 8 Fragen
  ist jetzt eine klickbare Tafel (`.faq-frage`, ›-Pfeil, Hover-Anheben)
  und öffnet eine ausführliche Maske — mit Eckdaten-Chips, Ablauf-Listen,
  „Gut zu wissen"-Hinweisen, internen Verweisen (Preisliste, Abgrenzung,
  Kontakt) und wo passend Fotos (Hausbesuch = Norberts echtes
  Arbeitsfoto, Dauer, Hygiene). Gesetzes-Bezug bei „Unterschied" und
  „Diabetiker": PodG erklärt + Link auf gesetze-im-internet.de/podg
  (extern, target=_blank) + Hinweis ärztliche Verordnung/Krankenkasse.
  main.js `?v=5`: Doppel-Öffnen-Schutz (`if (!maske.open)`).
  Cache `?v=41`.
- Feinschliff auf Hasans Rückmeldung: neues Token `--stern`
  (typisches Bewertungs-Gelb, hell #e9a800 / dunkel #f2c14e) für alle
  Sterne (Stimmen-Karten, Auswahl-Sterne) und als Kennfarbe der
  Bewertungs-Tafel (vorher Gold/Orange); Bewertungs-Tafel kompakter
  (kleinere Kachel/Überschrift, Felder 46 px, Textfeld 70 px — die
  globale 140-px-Textarea-Regel hatte die kompakte überschrieben,
  jetzt per Spezifität gelöst); Abstand des letzten Abschnitts zur
  Fußleiste wieder größer (44 px). Cache `?v=42`.
- Bewertungs-Zeile nachgebessert: die drei Labels (Sterne/Name/Ort)
  beginnen jetzt oben auf einer Linie (Feld als Flex-Spalte mit
  `space-between`), Labels in der Zeile 16 px + nowrap. Sterne-Auswahl
  von der CSS-row-reverse-Technik auf **JS-Färbung** umgestellt
  (Hasans Meldung „man kann nur einen Stern auswählen"): Radios in
  normaler Reihenfolge 1→5, Klick auf Stern n füllt 1…n
  (`label.gewaehlt`), Hover vergrößert den Stern leicht. main.js `?v=6`,
  Cache `?v=44`.
- Nachbesserung 2: Sterne direkt unter dem Label (kein Versatz mehr,
  `line-height: 46px` = Feldhöhe), größer (34 px); Name/Ort-Felder auf
  feste 320 px gekürzt (Hasans Vorgabe). Einzelauswahl getestet:
  2 Sterne klicken → genau 2 gelb. Cache `?v=45`.
- Sichtprüfung headless (hell/dunkel/520 px + offene Maske): sauber.
  Merker bestätigt: unter ~500 px Fensterbreite klemmt headless Chrome
  (Testartefakt, kein Seitenfehler).

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
