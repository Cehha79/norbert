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
- **Über-mich-Seite** überarbeitet: Vorstellungs-Text im Blocksatz
  (`.vorstellung`), die drei Stationen-Tafeln mit Kennfarben-Linie
  oben (blau/grün/gold, `.schritt.farbig` + lk-Klassen, Überschrift in
  Kennfarbe), Aufruf „Lernen Sie mich kennen" entfernt. **Galerie
  „Bilder aus meiner Arbeit" auf die Startseite umgezogen** (Hasans
  Anweisung): sitzt jetzt zwischen Vertrauens-Tafeln und „Ihr
  Hausbesuch in vier Schritten". Cache `?v=47`.
- „Mein Weg zur Fußpflege" neu geschrieben (Hasans Auftrag:
  professioneller, ausführlicher, passende Fachbegriffe): drei volle
  Absätze — Wurzeln in der Pflege seit 2012 („Wer gut zu Fuß ist,
  bleibt selbstständig"), Ausbildung 2024/FAY mit Fachvokabular
  (Nagel- und Nagelhautpflege, Hornhautabtragung, Desinfektion,
  Instrumenten-Aufbereitung), Hausbesuch-Nutzen (Senioren,
  eingeschränkte Mobilität); Anspruch-Kasten geschärft. Kein
  Heilkunde-Vokabular, keine erfundenen Fakten. Dabei Layout-Fehler
  behoben: das Porträt (starres `aspect-ratio` inline) lief beim
  längeren Text unter die Text-Spalte → Klasse `.portraet`
  (mobil 4:5, ab 840 px `aspect-ratio: auto` + stretch = volle
  Zeilenhöhe, object-fit cover). Cache `?v=48`.
- **NEU: Produkte-Seite (Shop)** — Hasans Auftrag: Reiter „Produkte"
  zwischen Leistungen und Über mich (alle 8 Seiten), Warenkorb-Knopf
  in der Kopfleiste rechts neben Hell/Dunkel (44-px-Kreis, gelbes
  Zähler-Badge, auf allen Seiten; führt zu produkte.html, dort öffnet
  er die Warenkorb-Maske). produkte.html: Vorteils-Zeile (Übergabe,
  Zahlung Bar/Rechnung/PayPal, Beratung), **9 Bereichs-Tafeln**
  (Werkzeuge, Cremes, Elektrische Geräte, Fußbäder, Nagelpflege,
  Hornhaut & Peeling, Komfort, Hygiene, Geschenke/Gutscheine — je
  Kennfarbe + Icon + Artikelzahl, aktive Tafel markiert),
  **90 Muster-Produkte** (je 10) mit Foto, Sterne-Bewertung,
  Beschreibung, Inhalt/Grundpreis, Lager-Status, Badge (Bestseller/
  Neu), Preis, Mengen-Stepper, „In den Warenkorb"; Sortierung
  (Beliebt/Preis/Name). **Warenkorb**: localStorage `nf-warenkorb`,
  Maske mit Positionen (Menge ±, Entfernen, Zeilensummen), Gesamt,
  Zahlarten-Chips, Leeren, Bestellung als unverbindliche **Anfrage per
  WhatsApp/E-Mail** (kein Bezahlsystem). Technik: js/produkte.js (v1,
  Daten + Logik), main.js v8 (globales Badge), 9 Pexels-Kategorie-
  Fotos lokal (bilder/shop-*.jpg, Lizenz frei), Muster-Hinweis auf der
  Seite als Platzhalter-Text. Funktionstest bestanden: 1×49,90 +
  2×24,90 = 99,70 € korrekt, Badge zeigt 3. Cache `?v=50`.
- **Shop-Ausbau 2** (Hasans Feinheiten): (a) Sprung-Fix beim
  Bereichswechsel (Listen-Höhe wird beim Neuaufbau festgehalten,
  Scrollen erst nach dem Rendern); (b) **Warenkorb ist jetzt eine
  eigene Seite** warenkorb.html (Maske entfernt, Korb-Knopf führt von
  überall dorthin) mit strukturiertem Summenblock: Zwischensumme,
  Lieferung/Übergabe, Gesamt, **ausgewiesene 19 % MwSt.** („darin
  enthalten: …"); (c) je Produkt zusätzlich **„Jetzt kaufen"** (legt in
  den Korb und springt zur Kasse); (d) **kasse.html**: Checkout mit
  Name/Telefon/E-Mail/Adresse, Lieferart (Übergabe beim Termin /
  Lieferung / Abholung), Wunschtermin (Datum), Zahlart (Bar/Rechnung/
  PayPal), Bemerkung, Pflicht-Checkbox Widerruf/AGB (Platzhalter-Links,
  folgt vor Livegang), Bestell-Übersicht (sticky) und Knöpfen
  **„Zahlungspflichtig bestellen"** (§ 312j BGB-Beschriftung) per
  WhatsApp/E-Mail; danach Bestätigungs-Ansicht + Korb wird geleert.
  Global gefixt: `[hidden]` gewinnt jetzt immer (display:none
  !important) — vorher hebelte display:flex das Attribut aus.
  produkte.js v2, Cache `?v=52`. Getestet: Summen korrekt
  (118,60 € · MwSt. 18,94 €), Badge 4.
- Sichtprüfung headless (hell/dunkel/520 px + offene Maske): sauber.
  Merker bestätigt: unter ~500 px Fensterbreite klemmt headless Chrome
  (Testartefakt, kein Seitenfehler).
- **Warenkorb + Kasse als stabile Tafeln** (Hasans Rückmeldung: Inhalte
  schwebten frei auf dem Hintergrund, „soll stabil, robust,
  professionell wirken"): `#korb-tabelle` und `.kasse-formular` sitzen
  jetzt in derselben Tafel-Optik wie der Rest der Seite — Fläche,
  Rand, 4-px-Marken-Linie oben, runde Ecken, Schatten, Innenabstand
  20/22 px. Die Formular-Abschnitte der Kasse (Ihre Angaben, Lieferung/
  Übergabe, Zahlart) haben Unterlinien-Überschriften (19 px,
  `border-block-end`), die Einwilligungs-Zeile bricht sauber um
  (`label { flex: 1 }` — vorher stand der Pflicht-Stern allein in der
  nächsten Zeile). Sichtprüfung mit vorbefülltem Korb (2×49,90 +
  3×24,90 = 174,50 €, MwSt. 27,86 €): beide Seiten sauber, hell wie
  dunkel unverändert über Tokens. Cache `?v=53`.
- **Bestell-Tafel der Kasse auf volle Höhe** (Hasans Auftrag: rechte
  Tafel so lang wie das Formular, auch bei wenig Inhalt): Raster von
  `align-items: start` auf `stretch`, Sticky entfernt, Übersicht als
  Flex-Spalte — Positionen oben, Summenblock/Knöpfe per
  `margin-block-start: auto` unten bündig. Neuer Füll-Inhalt
  **„So geht es weiter"** (`.kasse-weiter`): drei nummerierte Schritte
  (Absenden → Bestätigung → Übergabe & Zahlung) mit Nummern-Kacheln in
  `--marke-hell`. Getestet mit 1 und mit 4 Artikeln: Tafel behält in
  beiden Fällen die volle Länge. Cache `?v=54`.
- **Zahlarten mit Original-Symbolen** (Hasans Auftrag: Knöpfe gleich
  groß, Farbe mit Original-Symbolen): Warenkorb-Zeile „Zahlung" jetzt
  drei **gleich breite Kacheln** (`.zahlarten`, Raster
  `auto + repeat(3, 1fr)`, 44 px hoch; unter 560 px Titel eigene
  Zeile) mit Inline-SVGs in Originalfarben — Geldschein grün
  (#2e7d4f), Rechnungs-Dokument petrol (#2f6f92), PayPal-Doppel-P in
  den Original-Blautönen (#003087/#009cde); keine Fremdabrufe, keine
  Bilddateien. Dieselben Symbole zusätzlich in der Zahlart-Auswahl
  der Kasse (Radio-Liste). Erklär-Satz zur Übergabe steht jetzt als
  eigene Zeile darunter. Cache `?v=55`.
- **Kasse: Felder bündig, DHL-Versand, PayPal-Weiche** (Hasans Auftrag,
  Verständnis-Rückfrage bestätigt): (a) Formular-Doppelzeilen
  (Name/Telefon, PLZ/Ort) liefen nur bis 2/3 — Ursache: die spätere
  `.bewertung-zeile`-Regel (3 Spalten) schlug `.kasse-zeile` (gleiche
  Spezifität); Fix `.kasse-zeile.bewertung-zeile` mit
  `repeat(2, 1fr)` — alle Zeilen jetzt volle Tafelbreite, gleiche
  Feldhöhen. (b) Lieferung um **Versand per DHL (5,49 €)** und
  **DHL Express (12,99 €)** ergänzt (Muster-Preise), jede Lieferart
  zeigt ihren Preis rechtsbündig (`.wahl-preis`); die Bestell-Übersicht
  rechnet live: Zeile „Lieferung / Versand", Gesamt inkl. Versand,
  MwSt. neu (Test: 128,10 + 12,99 = 141,09 €, MwSt. 22,53 € ✓).
  (c) Zahlart heißt jetzt **„Rechnung / Überweisung (per E-Mail)"**.
  (d) **PayPal-Weiche**: bei Zahlart PayPal verschwinden die
  WhatsApp-/E-Mail-Knöpfe, stattdessen blauer Knopf „Zahlungspflichtig
  bestellen – mit PayPal" (#003087) — kopiert die Bestell-Daten in die
  Zwischenablage und öffnet PayPal.Me mit dem Gesamtbetrag
  (Platzhalter-Konto, siehe TODO). Bestelltext enthält jetzt auch
  Versandzeile und Gesamt inkl. Versand. Später laut Hasan:
  E-Mail-API mit PDF-Auftrag + Kalender-Terminbuchung (TODO,
  Abschnitt „Shop-Ausbaustufe"); Weg: erst GitHub Pages, dann Domain.
  produkte.js `?v=3`, Cache `?v=56`.
- **Produkte-Bereich umgebaut: Bild-Kacheln + eigene Bereichs-Seite**
  (Hasans Auftrag, Verständnis bestätigt): (a) Aus 9 Bereichen wurden
  **8** — „Hygiene & Desinfektion" in „Werkzeuge, Instrumente &
  Hygiene" zusammengelegt (Hasans Wahl; alle 10 d-Artikel tragen jetzt
  kat 'w' → 20 Artikel). (b) produkte.html zeigt statt der schmalen
  Balken-Tafeln ein **Kachel-Raster**: 2 Spalten × 4 Reihen
  (`.kachel-raster`, mobil 1 Spalte), jede Kachel gleich groß (16:9),
  **Name + Artikel-Zahl außen über der Kachel** (`.kachel-name`,
  Zahl füllt JS über `data-kat`), Bild als Foto-Kachel mit sanftem
  Zoom beim Zeigen (hinter prefers-reduced-motion). (c) **Neue Seite
  produkt-bereich.html**: Klick auf eine Kachel öffnet den Bereich als
  eigene Seite (`?bereich=<kat>`, ungültige Werte fallen auf 'w'
  zurück) — Zurück-Knopf oben (`.zurueck-knopf`) und unten,
  linksbündiger Seitenkopf (`.seitenkopf-bereich`, Regel bewusst NACH
  `.seitenkopf`), Sortierung + Produktkarten + Warenkorb wie gehabt;
  Seitentitel wird je Bereich gesetzt. Altes `.kategorie*`-CSS und der
  Inline-Listen-Block entfernt. (d) **Agent 1 (Bilder):** 8 verifizierte
  Pexels-Gruppenbilder (Sortimente, keine Einzelprodukte, keine
  lesbaren Marken) als `bilder/kachel-*.jpg` — IDs 9706941 (Werkzeuge,
  Justyna Grochowska), 8101520 (Cremes, Polina Kovaleva), 14018564
  (Geräte, Mehmet Turgut Kirkgoz), 19695948 (Fußbad, Jonathan Borba),
  34930142 (Nagelpflege, J. A. Otegui Auzmendi), 10574838 (Hornhaut,
  Ron Lach), 7796990 (Komfort, Alesia Kozik), 7356379 (Geschenke,
  Alina Vilchenko); die alten `bilder/shop-*.jpg` (9 Stück) sind damit
  unbenutzt. (e) **Agent 2 (Videos):** 9 Kandidaten für einen echten
  Video-Hintergrund (Schaum/Bläschen, Fenster mit Regentropfen, Wasser
  mit Blumen — reale Aufnahmen, Pexels, ≤ 15 MB, lokal) in
  `DOKU/Claude Ausgabe/Hintergrund-Kandidaten/`; Auswahl-Seite
  `DOKU/Claude Ausgabe/Hintergrund-Auswahl.html` — **Hasans Wahl
  (Nr. 1–9) steht noch aus**, Einbau folgt danach. produkte.js `?v=4`,
  Cache `?v=57`.
- **Video-Hintergrund eingebaut** (Hasans Wahl: hell = Nr. 2 feiner
  Schaum / Kelly 4139990, dunkel = Nr. 3 langsame Bläschen /
  Engin Akyurt 10420537): auf produkte.html und produkt-bereich.html
  liegt ein fixes `<video>` hinter dem Inhalt (`.hintergrund-video`,
  z-index −1, object-fit cover) mit Schleier in Seitengrund-Farbe
  (color-mix 74 %/70 % + rgba-Fallback) für die Lesbarkeit. Dateien
  lokal: `bilder/hintergrund-schaum-hell/-dunkel.mp4` (11/12 MB) +
  Standbilder (.jpg, per ffmpeg, 1. Frame). main.js v9 wählt die
  Quelle je Thema (MutationObserver auf `data-theme`, Wechsel sofort);
  bei `prefers-reduced-motion` lädt KEIN Video — nur das Standbild als
  Poster. Sichtprüfung hell/dunkel bestanden. Cache `?v=58`.
- **Video-Qualität nachgebessert** (Hasan: unscharf, wackelt, stoppt,
  springt): Ursachen — die Erst-Fassungen hatten nur 1366×720 bzw.
  960×506 (auf Fensterbreite hochgezogen = unscharf), ein hartes
  Schleifen-Ende (Sprung) und keine Streaming-Optimierung (Stocken).
  Fix: UHD-Originale (2732×1440) beider Pexels-Videos geholt, mit
  ffmpeg neu aufbereitet — **Full HD 1920×1012**, ruhiger
  13-s-Ausschnitt, **nahtlose Schleife** als Palindrom (vorwärts +
  rückwärts verkettet → 26 s ohne Sprungstelle), H.264 crf 23 preset
  slow, `+faststart` (Streaming ohne Aussetzer), je 12–13 MB; Poster
  neu erzeugt. Video-URL trägt jetzt `?v=2` (Browser-Cache!),
  `preload="auto"` am Video-Element. main.js `?v=10`.
- **Hell-Video getauscht** (Hasan: dunkel passt, hell nicht → Nr. 5
  Regentropfen am Fenster, Pexels 13292544, Gültekin Kaya): Full-HD-
  Original (1920×1080) geholt, gleiche Aufbereitung (13-s-Ausschnitt,
  Palindrom-Schleife, crf 23, faststart, 8,7 MB). Dateien dabei
  neutral umbenannt (hell ist kein Schaum mehr):
  `bilder/hintergrund-hell/-dunkel.mp4/.jpg`; alte
  `hintergrund-schaum-*`-Dateien entfernt (in git-Historie
  erhalten). Video-/Poster-URLs `?v=3`, main.js `?v=11`.
  Stand: hell = Regen-Fenster (Nr. 5), dunkel = Bläschen (Nr. 3).
- **Finale Video-Wahl aus Hasans eigener Kandidaten-Seite**
  (~/Desktop/Hin.html, 10 höher aufgelöste Kandidaten): **hell =
  „Tropfen im Abendlicht"** (Pexels 2960875, Tarin Golden, Full HD
  30 fps), **dunkel = „Ablaufendes Regenwasser"** (Pexels 5197762,
  Aleks BM, UHD 2560×1440 → auf 1920 skaliert). Gleiche Aufbereitung
  (13-s-Ausschnitt ab Sek. 5, Palindrom-Schleife, crf 23, faststart);
  hell 12 MB, dunkel 5,9 MB. Video-/Poster-URLs `?v=4`,
  main.js `?v=12`. Beide Themen sichtgeprüft.
- **Bereichs-Seiten: 4 Spalten + 16 Artikel je Bereich** (Hasans
  Auftrag): Produkt-Raster ab 1100 px auf `repeat(4, 1fr)` (vorher 3),
  Karten kompakter (Innenabstand 12/14, h3 17 px, Preis 19 px,
  Knöpfe 40 px). Sortiment auf **8 × 16 = 128 Muster-Artikel**
  gebracht: 4 Doppelungen aus Werkzeuge/Hygiene entfernt (w3
  Eckenfeile, w8 Pinzette, d8 Schuh-Spray, d10 Tücher → 20 − 4 = 16),
  je **6 neue Muster-Artikel** in den 7 anderen Bereichen (c11–c16,
  e11–e16, b11–b16, n11–n16, h11–h16, k11–k16, g11–g16 — u. a. Urea
  25 %, UV-Desinfektionsbox, Fußwanne mit Noppen, Nagelhärter,
  Kaffee-Peeling, Akupressur-Matte, Wert-Gutscheine 50/100 €).
  Weiterhin ALLES Muster-Daten (WICHTIG-Merker gilt).
  produkte.js `?v=5`, Cache `?v=59`.
- **Eigenes Foto je Artikel** (Hasans Auftrag): 8 Agenten parallel
  (einer je Bereich, gleiche Regeln: nur Pexels, URLs vor Download
  verifiziert, markenfrei, Sichtprüfung, md5-Duplikatcheck) →
  **116 von 128 Artikeln mit eigenem Foto** in `bilder/produkte/<id>.jpg`
  (800 px). Rendering: `produktBild()` in produkte.js — Produktkarten,
  Warenkorb- und Kassen-Zeilen laden das Artikel-Foto, bei fehlender
  Datei springt per `onerror` das Bereichs-Bild ein. **Ehrlich ohne
  Foto (12):** e4/e8/e12/e13/e16 (keine markenfreien Motive für
  Schleifrollen/Fräser-Bits/UV-Box/Kompressions-Gerät auf Pexels),
  k9/k15 (Einlegesohlen/Wärmflasche), n6 (Buffer-Block) — dazu 4
  bereichsübergreifende Duplikate entfernt (e3=b4, w10=n9, n13=w6,
  n4=w7; Doppelgänger in ~/.Trash, das jeweils passendere Produkt
  behielt das Foto). Die Agenten haben unterwegs über 15 Kandidaten
  wegen lesbarer Markennamen verworfen (u. a. STALEKS, beurer, OPI,
  doTERRA). Alle Quellen mit Pexels-ID und Fotograf in der neuen
  **DOKU/md/Bildquellen.md**. Sichtprüfung Bereiche w + e bestanden.
  produkte.js `?v=6`.
- **Kontakt-Bereich groß ausgebaut** (Hasans Auftrag): (a) Kontaktwege
  als **Kennfarben-Tafeln** (`.kontakt-kachel` mit `--lk`-Oberlinie +
  Symbol-Kachel): Anrufen grün, WhatsApp im Original-Grün
  (`.lk-wa` #25d366, Hörer im Sprechblasen-Symbol), E-Mail blau,
  Erreichbarkeit gold (Zeilen Mo–Fr/Samstag, Zeiten weiter
  Platzhalter), NEU fünfte Tafel „Hausbesuche" petrol; Spalte als
  Flex — alle Tafeln gleich hoch, bündig mit der Formular-Höhe.
  (b) **Formular auf Kassen-Niveau und endlich funktionsfähig**:
  Tafel-Optik (`.kasse-formular`), Doppel-Zeilen Name/Telefon +
  Wohnort/Wunschtermin (date), NEU Abschnitt „Ihr Anliegen"
  (Radio-Liste mit Preisen 48/30/57 € + Allgemeine Frage), Nachricht
  optional, Absenden **per WhatsApp oder E-Mail** (main.js v13,
  gleiche Technik wie Kasse/Bewertung — vorher toter
  `action="#"`-Knopf). (c) **Echtes Kartenbild**
  `bilder/einzugsgebiet.jpg`: aus 15 OSM-Kacheln (z9) lokal gestitcht
  (curl + Pillow; Framework-Python-SSL-Problem umgangen), Marker
  Weilimdorf + 50-km-Kreis in Markenfarbe, 1280×768, Attribution
  bleibt; Platzhalter-Kasten raus. (d) Orte-Zeile neu (Hasans
  Vorgabe): Stuttgart · Ludwigsburg · Gerlingen · Weilimdorf ·
  Umkreis 50 km · … fragen Sie einfach nach. Cache `?v=60`.
- **Kontakt-Hintergrund eingebaut** (Hasans Bild Nr. 10
  „Milchglas-Tropfen" aus seinem eigenen Ordner
  ~/Downloads/4k/ — 20 vorbereitete 4k-Hintergründe, KI-generiert,
  für später merken): auf 1920 px als
  `bilder/hintergrund-kontakt.jpg` (617 KB), festes Bild hinter dem
  Inhalt (`.hintergrund-bild`, gleiche Technik wie das Produkte-Video)
  mit Schleier 60 % hell / 82 % dunkel. Dabei Kennfarben-Fehler
  behoben: `--lk`-Standard lag auf `.kontakt-kachel` und überstimmte
  die früher notierten lk-Klassen (gleiche Spezifität, spätere Regel
  gewinnt) → Standard jetzt auf `.kontakt-spalte`, lk-Klassen an der
  Kachel greifen wieder. Beide Themen sichtgeprüft. Cache `?v=62`.
- **Kontakt-Feinschliff nach Hasans Rückmeldung** (3 Punkte):
  (a) Hintergrund neu in 2560 px exportiert (war auf Bildschirmbreite
  hochgezogen = zu grob) und per `background-position: right bottom`
  so gelegt, dass die grüne Pflanze rechts unten sitzt.
  (b) **Karte jetzt interaktiv**: Leaflet 1.9.4 LOKAL
  (js/extern/leaflet.js/.css, kein CDN) + eigene Kachel-Pyramide in
  `bilder/karte/` — OSM (Straßen) und **Satellit** (Sentinel-2
  cloudless © EOX, CC BY 4.0, 2016er-Ebene = kommerziell frei) für
  Zoom 10–11, je 97 Kacheln einmalig per curl gespeichert (5,4 MB)
  → zoombar + Karte/Satellit-Umschalter, aber weiterhin NULL
  Fremdabrufe zur Laufzeit (DSGVO-Vorteil bleibt, kein Cookie-Banner
  nötig). 50-km-Kreis + Standort-Marker als Leaflet-Overlays,
  Mausrad-Zoom aus (Seiten-Scrollen), maxBounds aufs Kachel-Gebiet,
  Startzoom 10 (bei 9 wäre das Gebiet schmaler als der Kasten —
  Grauränder); statisches einzugsgebiet.jpg bleibt als
  noscript-Rückfall. Quellen-Zeile unter der Karte erweitert.
  (c) Orte-Chips per `justify-content: space-between` über die volle
  Breite verteilt. main.js `?v=15`, Cache `?v=63`.
- **Karte als richtige Karten-Tafel + Zwei-Klick** (Hasans Rückmeldung:
  zu groß, zu wenig Zoom, „richtige Karte", Tafel mit Adresse links):
  Die lokale Kachel-Pyramide (nur z10–11) war als „richtige" Karte zu
  eng → umgestellt auf **Zwei-Klick-Lösung**: vor dem Klick nur das
  lokale Vorschaubild (einzugsgebiet.jpg) mit Kasten „Karte
  aktivieren"; erst der Klick lädt Live-Kacheln von OSM (Zoom bis 19)
  bzw. EOX-Satellit (nativ bis 14, hochskaliert 18) — Einwilligung
  merkt sich localStorage `nf-karte`. **Datenschutz erweitert**
  (neuer Abschnitt 5 „Interaktive Karte", Grundsätze-Absatz
  angepasst, Nummerierung 6/7). Neue **`.karten-tafel`**: Tafel-Optik,
  links `.karten-info` (Firmenname, Norbert Szczepanik,
  Mittenfeldstraße 39, 70499 Stuttgart-Weilimdorf, Telefon/E-Mail/
  Einzugsgebiet/Anfahrt-Zeilen, Knopf „Route planen" → Google-Maps-
  Routenlink), rechts die Karte (ab 1000 px 34/66, Höhe 440 px);
  Marker-Popup mit voller Adresse. Lokale Kachel-Pyramide entfernt
  (~/.Trash/karte-lokal-kacheln), Leaflet bleibt lokal. WICHTIG-
  Merker zum Cookie-Banner um die Zwei-Klick-Ausnahme ergänzt.
  main.js `?v=16`, Cache `?v=64`. Beide Zustände sichtgeprüft.
- **Online-Terminbuchung entschieden + vorbereitet** (Hasans Wahl nach
  Beratung: **Google + Cal.com**; Microsoft verworfen, weil Bookings
  nur im M365-Abo steckt; Norbert hat bereits ein Google-Konto):
  Tafeln „Erreichbarkeit" und „Hausbesuche" entfernt (Hasans Auftrag),
  stattdessen **„Termin online buchen"** als erste Kontakt-Tafel
  (gold, Kalender-Symbol) — Link noch `#` mit Platzhalter-Etikett,
  bis Cal.com eingerichtet ist. Ablauf: Norbert pflegt Verfügbarkeit
  im Google Kalender/Cal.com, Kunden buchen direkt, Bestätigung
  automatisch. **Datenschutz**: neuer Absatz „Online-Terminbuchung
  (Cal.com)" unter Kontaktaufnahme (reiner Link — Daten fließen erst
  beim Klick). **Anleitung** für die Einrichtung (5 Schritte, inkl.
  Puffer-Zeiten für Anfahrt) in
  `DOKU/Claude Ausgabe/Anleitung-Terminbuchung.html`. TODO-Abschnitt
  „Terminbuchung" angelegt.
- **Buchungs-Link live** (Hasans Test-Konto, „nutze erst das"):
  Tafel „Termin online buchen" verweist jetzt auf
  cal.com/hasan-tepegoz-dzm3vx (neuer Tab, Link verifiziert HTTP 200);
  Platzhalter-Etikett raus, Untertitel „Bestätigung sofort per
  E-Mail". VOR LIVEGANG auf Norberts eigenes Konto tauschen
  (TODO-Kommentar im HTML + TODO.md).
- **Kontakt-Layout entzerrt** (Hasan: gestreckte, leere Tafeln „das
  muss besser werden"): Die Kontaktwege sind keine Seiten-Spalte mehr
  (flex:1 hatte sie auf Formular-Höhe aufgeblasen), sondern eine
  **Reihe gleich großer Kacheln ÜBER dem Formular** (`.kontakt-wege`:
  1 Spalte mobil, 2×2 ab 640 px, 4 nebeneinander ab 1000 px mit
  Symbol-oben-Layout); das Formular sitzt darunter mittig
  (`.formular-mitte`, max. 920 px). Alte `.kontakt-raster`/
  `.kontakt-spalte`-Regeln entfernt. Cache `?v=65`.
- Nachschliff (Hasan): Kontaktwege-Reihe auf **920 px = Formular-Breite**
  begrenzt (bündig) und die Kacheln zu **Knöpfen** reduziert — nur
  Symbol (38 px) + Überschrift, mittig, einzeilig (nowrap); Untertexte
  raus, alte Unterzeilen-/Spalten-Regeln bereinigt. Cache `?v=66`.
- Orte-Chips im gleichen Knopf-Stil (Hasans Wunsch „wie die oben"):
  sechs gleich breite Kennfarben-Knöpfe (`.orte-liste` als Raster,
  2 Spalten mobil / 6 ab 1000 px; lk-blau/gruen/gold/petrol/rot/
  orange, Tafel-Optik mit 4-px-Oberlinie), bündig über der
  Karten-Tafel. Cache `?v=67`.
- **Sozial-Leiste im Held verkleinert** (Hasan: kleiner in Höhe und
  Breite, aber schön unter den Haupt-Knöpfen; „die unteren sollten
  ja kleiner sein als die oberen"): von voller Spaltenbreite/48–52 px
  auf **38–40 px Höhe und max. 140 px Breite** je Knopf, als
  Flex-Zeile mit `space-between` — außen bündig mit „Termin
  anfragen"/„Leistungen & Preise", Symbole 20–22 px.
  Größen-Hierarchie oben→unten stimmt wieder. Cache `?v=68`.
- Nachschliff: Sozial-Knöpfe nochmals schmaler (max. 96 px). Und
  **Bild-Maske für alle Inhaltsbilder** (Hasans Auftrag „alle Bilder
  müssen beim Anklicken aufgehen zu einer großen Maske"): main.js v17
  erzeugt EIN gemeinsames `<dialog class="bild-maske">` je Seite;
  Klick-Delegation auf `main img` (funktioniert dadurch auch für die
  nachgeladenen Produkt-Karten), ausgenommen verlinkte Bilder
  (Bereichs-Kacheln), Leaflet-Karte und die Maske selbst. Bild bis
  1100 px/84 vh, `cursor: zoom-in` als Hinweis, Schließen per X/ESC/
  Rand-Klick. Getestet: Startseiten-Foto + Produktbild öffnen groß.
  Cache `?v=69`.
- **Sozial-Leiste als 2er-Paare** (Hasan: „zwischen abstände kürzer je
  2 knöpfe", dann „die beiden paare mischen noch nach innen"): vier
  Knöpfe zu zwei mittigen Paaren (WhatsApp/YouTube | TikTok/Anrufen)
  gruppiert — `.sozial-leiste` als 2-Spalten-Raster, je Paar ein
  Flex-Container mit 14 px Innenabstand, zentriert. Cache `?v=70/71`.
- Haupt-Knöpfe im Held schmaler (Hasan: „einmischen kleine in der
  breite"): max. 280 px, mittig über den Sozial-Paaren
  (`justify-self: center`). Cache `?v=72`.
- **Vertrauens-Tafeln im Schritte-Format** (Hasan: „sollen gleich groß
  sein wie die" + „der obere zu groß"): gleiche Tafel-Größe wie die
  Schritte-Tafeln (h3 19 px, Text 16,5 px, kompaktes Padding); die zwei
  Werdegangs-Tafeln (Ausbildung, Pflegekraft) in die Stationen auf
  ueber-mich.html integriert, dafür zwei neue Themen: „Diskretion &
  Vertraulichkeit" (Schloss, Gold) und „Pünktlich & zuverlässig"
  (Uhr, Rot). Bewusst NICHT „Schweigepflicht" — das ist ein gesetzlicher
  Begriff für Ärzte/Podologen; formuliert als Verschwiegenheit aus der
  Pflege. Cache `?v=73/74`.
- **Fakten-Korrektur** (Hasan): nicht „Pflegeerfahrung", sondern
  **Pflegekraft im Pflegeheim seit 2012** — korrigiert in Start-Tafel,
  meta-description (index + ueber-mich), Über-mich-Untertitel,
  Vorstellungs-Text und Station 1.
- **WhatsApp-Nummer eingepflegt:** alle wa.me-Verweise auf
  **0173 5904496** (11 Dateien: Kontakt-Kacheln, Formular, Bestellung,
  Bewertung, Aktionsleisten); die Anruf-Nummer 0176 8696 1032 bleibt.
- Karten-Info-Zeilen (Hasan: „die unterstriche weg und die linksbündig
  mit doppelpunkt"): Labels mit Doppelpunkt (Telefon:/E-Mail:/
  Einzugsgebiet:/Anfahrt:), Werte linksbündig direkt dahinter
  (`justify-content: flex-start`, 8 px Lücke), Links ohne Unterstrich
  (`.karten-zeilen a { text-decoration: none }`). Beide Themen
  geprüft. Cache `?v=75`.
- **Muster-Hinweis + Vorteile-Zeile entfernt** (Hasans Auftrag „weg
  machen"): der gelbe Platzhalter-Hinweis „Alle Artikel … sind
  Muster-Beispiele" auf produkte.html und produkt-bereich.html sowie
  die Häkchen-Zeile „✓ Persönliche Übergabe / ✓ Zahlung / ✓ Beratung"
  auf produkte.html gelöscht; verwaiste CSS-Regeln (`.shop-vorteile`,
  `.shop-hinweis`) bereinigt. WICHTIG.md trägt jetzt den Merker, dass
  der Muster-Erinnerungshinweis nur noch in der Doku existiert.
  Cache `?v=76`.
- **Fakten-Korrektur FAY** (Hasan: „die kooperation gibt es nicht
  mehr, aber dort die ausbildung gemacht"): alle drei Stellen auf
  ueber-mich.html (meta-description, Vorstellungs-Text, Station 2)
  von „in Kooperation mit der Fußpflegeschule FAY" auf **„an der
  Fußpflegeschule FAY"** umformuliert — die Ausbildung dort bleibt
  als Fakt, die Kooperation wird nicht mehr behauptet. Nur
  Text-Änderung, kein Cache-Bump nötig.
- **Impressum + Datenschutz ausgebaut** (Hasans Auftrag „besser machen,
  meine Daten als Firma und auch der Support der Seite"; Vorlage =
  MikaTec-Impressum von mika-tec.com):
  - Impressum in **MikaTec-Struktur**: „Angaben gemäß § 5 DDG (ehem.
    TMG) / § 18 MStV" mit „Norbert Szczepanik — Einzelunternehmen",
    Kontakt mit Web/Telefon/E-Mail, **Umsatzsteuer: Kleinunternehmer
    § 19 UStG** (Hasans Ansage „ich bin auch Kleingewerbe … passe
    seines dementsprechend an"), „Verantwortlich i.S.d. § 18 Abs. 2
    MStV", Berufshaftpflicht.
  - Neu: Block **„Website-Erstellung & technischer Support"** mit
    MikaTec – Hasan Tepegöz (Einzelunternehmen), Pontoiser Straße 54,
    71034 Böblingen, www.mika-tec.com, info@mika-tec.com,
    0173 5904496 + Zuständigkeits-Satz (Technik → MikaTec, Fußpflege →
    Norbert).
  - Neu: Haftung für Inhalte, Haftung für Links, Urheberrecht,
    **Bildnachweise** (eigene Fotos, Pexels-Lizenz, OSM-Attribution
    fürs Karten-Vorschaubild). **EU-Streitschlichtung entfernt** — die
    OS-Plattform der EU-Kommission wurde im Juli 2025 eingestellt;
    Verbraucherstreitbeilegungs-Absatz bleibt.
  - Datenschutz: Abschnitt 3 heißt jetzt „Hosting und technische
    Betreuung" (+ MikaTec als technischer Betreuer, ausdrücklich ohne
    Zugriff auf Besucherdaten); Formular-Platzhalter ersetzt durch die
    echte Beschreibung (Formular sendet nichts an einen Server,
    öffnet nur WhatsApp/E-Mail-Programm; gilt auch für
    Warenkorb-Anfragen); Entwurfs-Kasten entschärft (nur noch
    Schluss-Prüfung + Stand-Datum offen).
  - Folge aus § 19: **Warenkorb- und Kassen-Summen weisen keine MwSt
    mehr aus** — Zeile „Alle Preise inkl. 19 % MwSt." ersetzt durch
    „Kleinunternehmer gemäß § 19 UStG …", produkte.js ohne
    MWST-Rechnung, Bestelltext „(umsatzsteuerfrei nach § 19 UStG)".
    Cache produkte.js `?v=8`.
- Fußleiste (Hasan: „etwas auseinander und rechtsbündig"): die Links
  Impressum/Datenschutz als `.fuss-links` — Flex mit 14 px Lücke um den
  Punkt, `margin-inline-start: auto` hält sie auch beim Umbruch rechts
  (alle 11 Seiten). Und Kopfleiste (Hasan: „tausch die plätze
  miteinander"): **Warenkorb-Knopf jetzt vor dem Thema-Knopf** — neue
  Reihenfolge Korb → Thema → Sprache (alle 11 Seiten). Cache `?v=77`.
- **6 Sprachversionen gebaut** (Hasans Auftrag „jetzt die sprachen",
  + „türkisch vergessen", + „und russisch"): Ordner `en/ tr/ pl/ ru/
  ar/ zh/` mit je 5 übersetzten Inhaltsseiten (index, leistungen,
  ueber-mich, kundenstimmen, kontakt) — durch 6 parallele Agenten,
  danach zentral geprüft (Pfade `../`, Struktur, Verweis-Existenz,
  Screenshots tr/ar/zh).
  - Sprachauswahl jetzt 7 Einträge (Deutsch, Türkçe, English, Polski,
    Русский, العربية, 中文) mit echten Verweisen auf allen deutschen
    Seiten UND in jeder Sprachversion (eigene Flagge im Knopf,
    aria-current); türkische + russische Flaggen-SVGs neu gebaut.
  - `ar/` komplett RTL (`dir="rtl"`, Telefonnummern mit `dir="ltr"`),
    `zh/` mit System-Schrift-Override (PingFang/YaHei — Lora/Source
    Sans können kein CJK).
  - `hreflang`-Block (de/tr/en/pl/ru/ar/zh + x-default, absolute
    Domain-URLs) auf allen Sprachseiten und den 5 deutschen
    Originalen.
  - Rechtlich in jeder Sprache abgesichert: nur „kosmetische
    Fußpflege"-Äquivalente als Selbstbezeichnung (en „cosmetic foot
    care", tr „kozmetik ayak bakımı", pl „kosmetyczna pielęgnacja
    stóp", ru «косметический уход за стопами», ar „العناية التجميلية
    بالقدمين", zh „足部美容护理"); Podologie überall nur als
    Fremdleistung staatlich Ausgebildeter.
  - Formular-`value`-Attribute bleiben deutsch (WhatsApp-/Mail-Anfrage
    kommt bei Norbert deutsch an) — beim polnischen Agenten
    nachträglich angeglichen.
  - Shop (produkte/warenkorb/kasse) und Impressum/Datenschutz bleiben
    bewusst deutsch; Sprachseiten verlinken mit `../` dorthin.
  - MERKER: KI-Übersetzungen vor Livegang muttersprachlich gegenlesen;
    Text-Änderungen künftig in alle 6 Ordner nachziehen (siehe
    WICHTIG + TODO).
- **Shop mehrsprachig** (Hasans Rückmeldung „da geht nur deutsch,
  sobald man da wechselt kommt man ins start"):
  - `js/produkte.js` (v=9) um eine Sprach-Schnittstelle erweitert:
    optionale Globale `NF_BASIS` (Bild-Pfade `../`), `NF_TEXTE`
    (13 Oberflächen-Texte), `NF_KATEGORIEN` (8 Bereichs-Titel),
    `NF_UEBERSETZUNG` (je Artikel name/info/inhalt) — ohne sie bleibt
    alles deutsch (Rückfall). Anzeige nutzt pName/pInfo/pInhalt;
    der **Bestelltext an Norbert nutzt IMMER die deutschen Namen**
    (positionenText unverändert), Radio-values bleiben deutsch.
  - Je Sprache `js/shop-<code>.js` (~180 Zeilen): alle 128 Artikel
    übersetzt + Texte + Kategorien; per node --check und Zähl-Skript
    geprüft (6 × 128/128 vollständig).
  - Je Sprachordner 4 neue Shop-Seiten (produkte, produkt-bereich,
    warenkorb, kasse) mit hreflang, 7-Sprachen-Auswahl und
    Skript-Reihenfolge thema → main → shop-<code> → produkte;
    deutsche Shop-Seiten: Sprach-Verweise jetzt seitengleich
    (vorher <code>/index.html) + hreflang nachgezogen; in den 30
    bestehenden Sprachseiten Nav/Korb-Verweise von ../produkte.html
    auf produkte.html umgestellt.
  - Geprüft: Verweis-Existenz-Check über alle 65 Seiten (0 kaputt),
    Skript-Reihenfolge auf allen 24 neuen Seiten, DOM-Test
    tr/ru-Bereichsseite (16 Karten, übersetzte Knöpfe/Titel,
    Bild-Pfade ../), Screenshots tr-Übersicht + ar-Kasse (RTL).
    Kleinunternehmer-§19-Zeile in allen Sprachen statt MwSt.
- Kassen-Feinschliff (Hasans Screenshots „diese markierung stört" +
  „muster-ansicht sache weg"): Widerrufsbelehrung/AGB in der
  Einwilligungs-Zeile sind jetzt normale Verweise (Platzhalter-Optik
  mit gestricheltem Kasten entfernt, Ziel bleibt vorerst `#` — Merker
  in TODO: Texte vor Livegang schreiben); die sichtbaren Hinweise
  „Muster-Kasse zur Ansicht." und „Muster-Verbindung – echtes
  PayPal-Konto folgt." entfernt — in ALLEN 7 Kassen (de + 6 Sprachen).
  Nur HTML-Text, kein Cache-Bump nötig.
- Nachschliff Einwilligungs-Zeile (Hasan: „die unterstriche weg" +
  „etwas kleiner, dass kein zeilenumbruch"): `.feld-einwilligung a
  { text-decoration: none }` und Label auf 14 px — Satz passt jetzt
  einzeilig; gilt auch fürs Kontakt-Formular (gleiche Klasse).
  Cache `?v=78` (alle 65 Seiten inkl. Sprachordner).
- **WhatsApp öffnet jetzt direkt die App** (Hasan: „wieso gehe ich
  immer auf eine externe seite und komme nicht zurück"): neuer Helfer
  `window.nfWhatsApp` in main.js (v=19) — Klick startet
  `whatsapp://send?...` (App öffnet sofort, die Website bleibt offen);
  nur wenn nach 1,2 s nichts passiert (keine App installiert), öffnet
  wa.me als Rückfall im NEUEN Tab. Eine Klick-Delegation fängt ALLE
  wa.me-Verweise aller 65 Seiten ab (kein HTML-Umbau nötig);
  Bewertungs-, Kontakt- und Kassen-Versand (produkte.js v=10, mit
  Rückfall) laufen über denselben Helfer. Vorher ersetzten manche
  wa.me-Links die Seite im selben Tab — daher „kein Zurück".
- **Livegang-Vorbereitung + GitHub** (Hasans Auftrag „mach was ohne
  Infos geht, dann ins GitHub, DOKU nicht hochladen"):
  - Aufgeräumt: 9 unbenutzte `bilder/shop-*.jpg` (durch kachel-*.jpg
    ersetzt gewesen) → `~/.Trash/norbert-aufraeumen-0707/`; .DS_Store
    entfernt; `.gitignore` (.DS_Store, *_t.html).
  - `bilder/apple-touch-icon.png` (180 px) + `bilder/og-bild.jpg`
    (1200×630, Logo auf Papierton, Petrol-/Gold-Linie) per PIL erzeugt.
  - og-/twitter-Metadaten auf allen 65 Seiten (Skript: Titel +
    Beschreibung aus der Seite, og:url je Seite, og:locale je Sprache,
    summary_large_image) + apple-touch-icon-Verweis.
  - `sitemap.xml` (65 URLs, hreflang-Alternativen, xmllint-geprüft) und
    `robots.txt` mit **Staging-Sperre** (Disallow / solange Muster-Daten;
    Livegang-Fassung als Kommentar darin).
  - **Handy-Kopfleiste repariert:** unter 480 px waren Logo (62 px) +
    Menü + 3 Rund-Knöpfe zusammen ~464 px breit → Überlauf. Neue
    Media-Query: Logo 46 px, Abstände 6 px, Menü-Knopf kompakter —
    Klickflächen bleiben 44 px. Bei echten 375 px jetzt überlauffrei
    (scrollWidth = 375). Cache `?v=79`.
  - WICHTIGER MESS-MERKER: Headless-Chrome hat ~500 px
    **Mindest-Fensterbreite** — „375-px-Screenshots" sind in Wahrheit
    500 px (rechts beschnitten) und Media-Queries unter 500 greifen
    nicht! Für echte Handy-Messungen die Seite in einen 375-px-iframe
    laden (rahmen_t.html-Trick).
- **GitHub Pages live (Staging):** öffentliches Repo
  `Cehha79/norberts-mobile-fusspflege` mit frischer Historie und NUR
  der Website (rsync ohne DOKU/, CLAUDE.md, server.py; eigenes
  Kurz-README); Pages auf main aktiviert. Verifiziert per curl:
  Startseite 200, tr/produkte 200, style v=79, og-bild, robots.txt
  mit Staging-Sperre aktiv, /DOKU/ = 404. Wiederholbarer
  Veröffentlichungs-Ablauf im lokalen README.md dokumentiert.
  Staging-Adresse: https://cehha79.github.io/norberts-mobile-fusspflege/
- **Repo professionalisiert** (Hasans Auftrag „wie bei meinen anderen
  Webseiten, alles sauber, wird von Leuten geprüft"): öffentliches
  README im MikaTec-Stil (Badges, Überblick, Merkmale, Tech-Stack,
  Projektstruktur-Baum, Architektur inkl. i18n-System, Design-System
  „Petrol & Gold", rechtlicher Rahmen, Deployment) + `.nojekyll`
  (MikaTec-Lehre gegen Pages-Build-Hänger). Alle 14 internen
  `<!-- TODO … -->`-Arbeits-Kommentare aus den HTML-Dateien entfernt
  (Cal.com-Tausch, Social-Links) — die Merker stehen vollständig in
  DOKU/md/TODO.md. Ehrlicher Staging-Hinweis im README (Muster-Daten,
  robots-Sperre).
- **Handy-Feinschliff-Serie nach Hasans Smartphone-Test** (Cache
  `?v=80`, main.js `?v=20`, alle 65 Seiten):
  - **Schnell-Leiste im Kopf:** Start + Leistungen als sichtbare Links
    unter der Kopfzeile, solange die volle Navigation im Menü-Knopf
    steckt (unter 840 px); Links je Seite aus der übersetzten
    Hauptnavigation kopiert (`.kopf-schnell`, aktive Seite mit
    Gold-Unterstrich).
  - **Held mobil:** Foto kommt zuerst (`order: -1`, ab 840 px wieder
    rechts); Haupt-Knöpfe kompakt (max. 300 px, 46 px hoch, mittig) —
    ab 640 px wieder wie gehabt.
  - **Aktionsleiste (Anrufen/WhatsApp/Termin) KOMPLETT entfernt**
    (Hasans Wunsch) — stattdessen ist die **Fußzeile jetzt auf allen
    Breiten fixiert** und immer sichtbar (safe-area-Polster fürs
    iPhone); Fußtext überall gekürzt: „© 2026 Norberts mobile
    Fußpflege" ohne Ortszusatz (alle Sprachen, auch PC).
  - **Kundenstimmen mobil als Zeilen:** unter 840 px zeigt jede
    Bewertung nur Avatar + Name + Sterne + Beispiel-Etikett
    (einzeilig, Ellipsis); Klick öffnet die volle Bewertung als
    Maske (`.stimme-maske`, main.js). Wichtig gelernt: Grid-Elemente
    brauchen `min-width: 0`, sonst Überlauf (Karte war 462 px breit
    in 339-px-Spur). Roll-Pfeile mobil ausgeblendet.
  - **Kontakt-Kacheln mobil linksbündig** (Symbole an einer Kante).
  - **Datumsfeld gezähmt:** `input[type="date"]` bekommt display:block
    + width:100 % + appearance:none — iOS gab ihm sonst eine
    Eigenbreite über den Tafelrand (Hasans Screenshot).
  - Geprüft per 375-px-iframe-Messung: Start/Kundenstimmen/Kontakt
    überlauffrei (scrollWidth = 375), Klick-Maske funktional
    (maske=offen, voller Text), Desktop-Gegencheck Kopf/Fuß sauber,
    Verweis-Check 0 Fehler.
- **Kopfzeile einzeilig** (Hasans Nachbesserung: „Start soll oben
  neben Logo, dann Leistungen, dann Menü/Warenkorb/H-D/Sprache, alle
  in eine Zeile; im Menü nicht mehr doppelt; beim Seitenwechsel
  gleich"): `.kopf-schnell` aus der zweiten Zeile in die Kopfzeile
  verschoben (im DOM vor die Hauptnavigation, `margin-inline-end:
  auto` hält sie am Logo); Menü-Dropdown blendet die ersten zwei
  Punkte aus (`li:nth-child(-n+2)`, ab 840 px wieder alle). Der
  Menü-Knopf trägt jetzt Burger-Symbol + Wort — unter 480 px wird er
  zum runden ☰-Knopf. Unter 480 px alles verdichtet (Logo 34 px,
  Rund-Knöpfe 36 px, Links 13 px, türkische Sonderregel wegen „Ana
  Sayfa/Hizmetler"). Per iframe-Messung bei 375 px: de/tr/ru/zh/en
  einzeilig ohne Abschneiden; Rest-Sicherheitsnetz = unsichtbares
  seitliches Rollen der zwei Links. Cache `?v=81`.

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
