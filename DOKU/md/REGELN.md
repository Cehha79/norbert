# REGELN

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Arbeitsregeln für dieses Projekt — sie gelten für jede Sitzung.

## Sprache und Recht

- Alle sichtbaren Texte auf Deutsch, Ansprache „Sie" (Endkunden von Norbert).
- Wortwahl-Regeln aus `WICHTIG.md` sind Pflicht (keine geschützten
  Berufsbezeichnungen, kein Heilkunde-Vokabular).
- Preise, Orte, Zeiten, Kundenstimmen: **nur echte Kundendaten** eintragen,
  bis dahin Platzhalter (`<span class="platzhalter">`) stehen lassen.

## Code

- Vanilla HTML/CSS/JS — keine Frameworks, keine Bibliotheken, keine
  CDN-Einbindungen, keine Online-Schriften.
- **Mobile-First:** Grund-Styles beschreiben immer das Handy-Layout;
  größere Bildschirme nur über `@media (min-width: …)` erweitern
  (Stufen 640/840/1000 px). Neues zuerst im Handy-Viewport (375–430 px)
  gestalten und prüfen, dann Desktop nachziehen.
- **RTL-tauglich schreiben:** Richtungs-Eigenschaften logisch
  (`padding-inline-start`, `margin-block-end`, `inset-inline`,
  `text-align: start/end`) statt `left/right` — Vorbereitung für die
  arabische Sprachversion.
- Design-Änderungen nur über die Tokens in `style.css`; beide Themen
  (hell und dunkel) müssen bei jeder Änderung geprüft werden.
- Layout von Anfang an symmetrisch und am Raster ausgerichtet
  (`.rahmen`, Raster-Klassen); Einrückung 2 Leerzeichen.
- Nach jeder CSS-/JS-Änderung die Cache-Version `?v=N` in allen
  HTML-Dateien hochzählen.
- Fließtext nie unter 18 px; Klickflächen mindestens 44 px; jede Bewegung
  hinter `prefers-reduced-motion`.
- Deutsche Klassen- und Variablennamen beibehalten (`.knopf`, `--gruen`,
  `zaehleHoch` …) — nicht mit englischen mischen.

## Doku

- Quellen sind die `.md`-Dateien in `DOKU/md/`; die `.html`-Ansichten werden
  daraus erzeugt und nie von Hand bearbeitet.
- Erzeugen: `python3 DOKU/md2doku.py DOKU` (vom Projektordner aus; das Skript
  liegt dauerhaft in `DOKU/md2doku.py`).
- Bei jedem größeren Schritt `Live-Dokumentation.md` ergänzen und `TODO.md`
  aktuell halten, dann HTML-Ansichten neu erzeugen.

## Git

- Arbeiten auf `main`, solange die Seite nicht live ist; committen und pushen
  nur nach Freigabe durch Hasan.
- Commit-Texte auf Deutsch, kurz und konkret („Preistabelle: echte Preise
  eingetragen").
