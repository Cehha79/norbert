# WICHTIG

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Wichtige Entscheidungen, Warnungen und Merksätze zur Kunden-Website
„Norberts mobile Fußpflege" (erster MikaTec-Kundenauftrag).

## Warnungen (rechtlich — unbedingt einhalten)

- **Nie** die Wörter „Podologe/Podologin" oder „medizinischer Fußpfleger /
  medizinische Fußpflege" für Norbert verwenden — geschützte Berufsbezeichnungen
  nach dem Podologengesetz (PodG).
- Heilkunde-Vokabular meiden: „Behandlung von …", „Therapie", „Diagnose",
  „Anamnese". Sichere Wörter: „Pflege", „kosmetische Fußpflege", „Fußpflege
  gesunder Füße".
- Der Abgrenzungs-Hinweis („keine podologischen Fälle") muss auf der
  **Leistungs-Seite** bleiben (dort wird beworben — rechtlich entscheidend).
  Von der Startseite wurde er am 07.07. auf Hasans Wunsch entfernt.
- Schriften nur lokal einbinden (LG München I, Az. 3 O 17493/20) — keine
  Google-Fonts-URL, keine CDN-Skripte, keine Fremdabrufe.
- Kein Cookie-Banner nötig, solange die Seite statisch bleibt und nichts von
  Drittservern lädt — das ist ein Qualitätsmerkmal, nicht vergessen bei Erweiterungen.
  EINZIGE Ausnahme (07.07.): die interaktive Kontakt-Karte lädt OSM-/EOX-Kacheln
  erst nach Klick „Karte aktivieren" (Zwei-Klick-Lösung, Datenschutz Abschnitt 5,
  Einwilligung im localStorage) — weiterhin keine Cookies, kein Banner nötig.
- Impressum und Datenschutz sind noch **Entwurf** (Platzhalter) — vor dem
  Livegang befüllen und prüfen.
- **PRODUKTE-SEITE = komplett MUSTER + rechtlich VOR Livegang klären!**
  Alle 90 Artikel, Preise, Bewertungen und Lager-Angaben auf produkte.html
  sind erfunden (Hasans Wunsch, nur zur Ansicht) — vor Livegang durch
  Norberts echtes Sortiment ersetzen oder Seite abschalten. Rechtlich
  nötig, sobald echt verkauft wird: Preisangaben (USt/Grundpreis),
  Widerrufsbelehrung, AGB, ggf. „zahlungspflichtig bestellen"-Button
  (aktuell bewusst nur unverbindliche Anfrage per WhatsApp/E-Mail —
  kein Kaufabschluss auf der Seite, kein Bezahlsystem).
  **Achtung:** Der sichtbare Muster-Hinweis auf produkte.html und
  produkt-bereich.html wurde am 07.07. auf Hasans Wunsch entfernt —
  dieser Merker hier ist jetzt die EINZIGE Erinnerung daran.
- **MUSTER-BEWERTUNGEN vor dem Livegang entfernen!** Die 18 Kundenstimmen
  auf kundenstimmen.html sind erfundene Layout-Muster (Hasans Wunsch, nur
  zum Wirkungstest; jede trägt ein „Beispiel"-Etikett). Erfundene
  Bewertungen ohne Kennzeichnung sind wettbewerbswidrig (UWG Anhang
  Nr. 23b/23c, gefälschte Verbraucherbewertungen) und abmahnfähig — vor
  dem Livegang durch echte, freigegebene Stimmen ersetzen oder löschen.

- **Sprachversionen (en/tr/pl/ru/ar/zh) sind KI-Übersetzungen** (07.07.) —
  vor dem Livegang von Muttersprachlern gegenlesen lassen. Rechtliche
  Leitplanke gilt in JEDER Sprache: nie „medizinische Fußpflege"/„Podologe"
  als Selbstbezeichnung (tr: nie „medikal ayak bakımı", en: nie „podiatrist/
  medical pedicure" usw.). Text-Änderungen am deutschen Original müssen in
  alle 6 Sprachordner nachgezogen werden — beim SHOP zusätzlich in den
  Übersetzungs-Dateien `js/shop-<code>.js` (Produktnamen/-texte); neue
  Artikel in produkte.js brauchen je einen Eintrag in allen 6 Dateien,
  sonst erscheinen sie dort deutsch (eingebauter Rückfall).

## Merksätze

| Punkt | Bedeutung |
|---|---|
| Platzhalter-System | fehlende Kundendaten stehen in `<span class="platzhalter">` — gelb gestrichelt, leicht zu finden |
| Cache-Version | nach CSS/JS-Änderung `?v=N` in allen HTML-Dateien hochzählen |
| Zielgruppe 45+ | Fließtext nie unter 18 px, hoher Kontrast, große Knöpfe, dezente Animationen |
| Bewegung | alles hinter `prefers-reduced-motion` — Nutzer mit Bewegungsempfindlichkeit sehen einfache Standbilder |
| Ehrliche Zahlen | keine erfundenen Kundenzahlen oder Bewertungen — nur belegte Fakten (seit 2012, Ausbildung 2024) |

## Entscheidungen

| Entscheidung | Warum |
|---|---|
| Statisch, Vanilla HTML/CSS/JS, kein Build | wie MikaTec/netz-atlas; schnell, wartbar, läuft direkt auf GitHub Pages |
| Zwei Themen (hell Standard, dunkel wählbar) | Kundenwunsch; hell bewusst gedämpft (warmes Papierweiß statt Reinweiß) |
| Palette Petrol-Blau + Gold (07.07., Entscheidung „B") | passt zum vorhandenen Kunden-Logo (`bilder/logo-alt.png`), Flyer und Arbeitskleidung auf allen Fotos; Tokens heißen `--marke`/`--marke-hover`/`--marke-hell` |
| **Original-Logo in hoher Auflösung** (07.07.) | Hasan lehnte den SVG-Nachbau ab — Original soll bleiben. Lösung: Originaldatei in 1595×1600 px vom Strato-Server geholt (transparenter Grund!), nur die **Telefonnummer unten abgeschnitten** (Hasans Vorgabe). Dateien: `bilder/logo.png` (800 px) + `bilder/logo-klein.png` (400 px, für Kopf/Fuß/Favicon) |
| Tiefen-Hintergrund Sternen-Staub (07.07., Hasans Wahl aus 10 recherchierten Varianten) | zwei SVG-Staub-Ebenen (Vektor, data-URI, keine Fremd-Abrufe) über Farbverlauf; hell: Petrol/Gold/Petrol, dunkel: Tiefschwarz mit hellem Staub; KEINE großen Sterne, keine Licht-Höfe/Spotlights (Hasans Vorgabe); dazu getönte Doppel-Schatten mit Lichtkante als Tokens (`--schatten`) und Boden-Ellipsen (`--boden`) unter Tafeln/Karten |
| Kein Zeichen-Ausschnitt fürs Logo | die goldene Schrift ist im Original ÜBER die Fußspitze gemalt — sauberes Freistellen unmöglich ohne Verschmieren; daher überall das komplette Logo |
| Leistungs-Fotos von Pexels (07.07.) | drei reale Tätigkeits-Fotos in den Detail-Masken (`bilder/leistung-*.jpg`, IDs 5619459/5793925/5793976); Pexels-Lizenz: kommerziell frei, keine Namensnennung nötig; lokal gespeichert (keine Fremdabrufe); später gegen echte Norbert-Fotos tauschbar |
| Shop-Kachel-Fotos von Pexels (07.07.) | 8 Gruppen-/Sortiment-Fotos für die Bereichs-Kacheln (`bilder/kachel-*.jpg`, IDs 9706941/8101520/14018564/19695948/34930142/10574838/7796990/7356379); agentgeprüft: keine lesbaren Marken, alle URLs verifiziert; die 9 alten `bilder/shop-*.jpg` sind seitdem unbenutzt (Löschung nur nach Freigabe) |
| Hintergrund-Video Produkte-Bereich (offen) | 9 reale Pexels-Video-Kandidaten in `DOKU/Claude Ausgabe/Hintergrund-Kandidaten/` (Schaum/Regen-Fenster/Wasser-Blumen); Auswahl-Seite `Hintergrund-Auswahl.html`; nach Hasans Wahl lokal einbinden (kein Fremdabruf), abdunkeln fürs Lesen + Standbild hinter `prefers-reduced-motion` |
| Lora + Source Sans 3, lokal (WOFF2) | edel + sehr gut lesbar; DSGVO-Pflicht |
| Karte als statisches OSM-Bild geplant | DSGVO-konform ohne Zwei-Klick-Lösung, null JS |
| Formular-Dienst erst beim Livegang | GitHub Pages hat kein Backend; Dienst-Wahl offen (siehe TODO) |
| WhatsApp nur als Link (wa.me) | beim Ansehen der Seite fließen keine Daten an Meta — steht so im Datenschutz |
