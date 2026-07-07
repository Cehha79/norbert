# STRUKTUR

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Ordner- und Dateiaufbau des Projekts „Norbert" (Kunden-Website
norberts-mobile-fusspflege.de).

## Dateibaum

| Pfad | Zweck |
|---|---|
| `index.html` | Startseite: Held, Vertrauensleiste, Leistungs-Vorschau, Ablauf, Zahlen, Kundenstimmen-Auszug, Abgrenzung, Aufruf |
| `leistungen.html` | Leistungs-Karten, Preistabelle, Anfahrts-Hinweis, Abgrenzung kosmetisch/podologisch (`#abgrenzung`) |
| `ueber-mich.html` | Person, Werdegang (2012/2024/FAY), Stationen, Galerie |
| `kundenstimmen.html` | Kundenstimmen (6 Plätze) + FAQ (8 Fragen) + Feedback-Aufruf |
| `kontakt.html` | Kontakt-Kacheln (Anruf/WhatsApp/E-Mail/Zeiten), Formular, Einzugsgebiet (`#einzugsgebiet`) |
| `impressum.html` | Pflichtseite § 5 DDG — noch Entwurf mit Platzhaltern, `noindex` |
| `datenschutz.html` | Pflichtseite DSGVO — noch Entwurf mit Platzhaltern, `noindex` |
| `style.css` | zentrales Stylesheet: Themen-Tokens (hell/dunkel), alle Komponenten, responsive |
| `js/thema.js` | synchron im `<head>`: gespeichertes Thema vor dem ersten Zeichnen setzen (kein Flackern) |
| `js/main.js` | Themen-Umschalter, mobiles Menü, Scroll-Einblenden, Zahlen-Zähler, Jahr in Fußleiste |
| `schriften/` | Lora + Source Sans 3 als WOFF2 (regular/600/700, latin + latin-ext) |
| `bilder/` | Fotos und Kartenbild (noch leer — echte Fotos folgen) |
| `DOKU/` | Projekt-Doku: `.html`-Ansichten hier, Quellen in `DOKU/md/` |
| `CLAUDE.md` | Arbeitsanweisungen für Claude Code in diesem Projekt |
| `README.md` | Kurzbeschreibung des Projekts |
| `.nojekyll` | GitHub Pages: Jekyll-Verarbeitung abschalten |

## Aufbau-Prinzipien

- Flache Struktur wie bei `WEB/MikaTec`: jede Seite eine eigene HTML-Datei,
  ein gemeinsames Stylesheet, gemeinsames JS.
- Kopfleiste, Fußleiste und mobile Aktionsleiste sind auf allen Seiten
  identisch — bei Änderungen **alle sieben Seiten** anfassen.
- Design nur über die Tokens am Anfang von `style.css` steuern
  (`--marke`, `--grund`, `--flaeche` …) — nie Farbwerte im HTML verstreuen.
- DOKU-HTML wird aus `DOKU/md/*.md` erzeugt (Konverter-Skript, siehe REGELN).
