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
- Impressum und Datenschutz sind noch **Entwurf** (Platzhalter) — vor dem
  Livegang befüllen und prüfen.

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
| Lora + Source Sans 3, lokal (WOFF2) | edel + sehr gut lesbar; DSGVO-Pflicht |
| Karte als statisches OSM-Bild geplant | DSGVO-konform ohne Zwei-Klick-Lösung, null JS |
| Formular-Dienst erst beim Livegang | GitHub Pages hat kein Backend; Dienst-Wahl offen (siehe TODO) |
| WhatsApp nur als Link (wa.me) | beim Ansehen der Seite fließen keine Daten an Meta — steht so im Datenschutz |
