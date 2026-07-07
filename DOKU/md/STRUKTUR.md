# STRUKTUR

*Stand: 2026-07-07 (abends)*

## Aufgabe dieser Datei

Ordner- und Dateiaufbau des Projekts „Norbert" (Kunden-Website
norberts-mobile-fusspflege.de; Staging live auf
https://cehha79.github.io/norberts-mobile-fusspflege/).

## Dateibaum

| Pfad | Zweck |
|---|---|
| `index.html` | Startseite: Held (mobil Foto zuerst), Vertrauens-Tafeln, Einblicke, Ablauf in 4 Schritten |
| `leistungen.html` | Leistungs-Tafeln mit Detail-Masken, Preistabelle, Abgrenzung kosmetisch/podologisch (`#abgrenzung`) |
| `produkte.html` | Shop: 8 Bereichs-Kacheln (Bild + Name + Artikel-Zahl) |
| `produkt-bereich.html` | Shop: Artikel-Liste je Bereich (`?bereich=w/c/e/b/n/h/k/g`), Sortierung |
| `warenkorb.html` | Warenkorb (localStorage `nf-warenkorb`), Mengen-Steuerung |
| `kasse.html` | Kasse: Lieferarten (DHL-Muster), Zahlarten inkl. PayPal-Weiche, Versand per WhatsApp/E-Mail |
| `ueber-mich.html` | Person, Werdegang (Pflegekraft seit 2012, FAY 2024), Stationen, Galerie |
| `kundenstimmen.html` | Bewertungs-Band (mobil: Klick-Zeilen + Maske), FAQ-Masken, Bewertung abgeben |
| `kontakt.html` | Kontakt-Knöpfe, Cal.com-Buchung, Formular, Orte, Zwei-Klick-Karte (`#einzugsgebiet`) |
| `impressum.html` | § 5 DDG, § 19 UStG, MikaTec-Support-Block, Haftung/Urheberrecht/Bildnachweise |
| `datenschutz.html` | DSGVO inkl. Zwei-Klick-Karte, Cal.com, WhatsApp, technische Betreuung (MikaTec) |
| `tr/ en/ pl/ ru/ ar/ zh/` | **6 Sprachversionen** — je 9 Seiten (alles außer Impressum/Datenschutz); `ar/` komplett RTL, `zh/` mit System-Schrift-Override |
| `style.css` | zentrales Stylesheet: Themen-Tokens hell/dunkel, Kennfarben `--lk`, alle Komponenten, responsive (Kaskade: mobil → 480 → 560 → 640 → 840 → 1000) |
| `js/thema.js` | synchron im `<head>`: gespeichertes Thema vor dem ersten Zeichnen (kein Flackern) |
| `js/main.js` | Umschalter, Menü, Masken (Leistungen/FAQ/Bilder/Stimmen), Formulare, WhatsApp-Direktstart (`nfWhatsApp`), Leaflet-Karte, Video-Wahl |
| `js/produkte.js` | Shop-Motor + deutsches Datenmodell (128 Muster-Artikel) mit Sprach-Schnittstelle (`NF_BASIS/NF_TEXTE/NF_KATEGORIEN/NF_UEBERSETZUNG`) |
| `js/shop-<code>.js` | Übersetzungen je Sprache: 13 Oberflächen-Texte, 8 Kategorien, 128 Artikel |
| `js/extern/` | Leaflet 1.9.4 lokal (einzige Fremd-Bibliothek) |
| `schriften/` | Lora + Source Sans 3 als WOFF2 (lokal, keine Font-CDNs) |
| `bilder/` | Fotos, Bereichs-Kacheln, `produkte/` (116 Artikel-Fotos), Hintergrund-Videos + Poster, `og-bild.jpg`, `apple-touch-icon.png`, `einzugsgebiet.jpg` |
| `sitemap.xml` | 65 URLs mit hreflang-Alternativen |
| `robots.txt` | **Staging-Sperre** (Disallow /) — vor Livegang freischalten |
| `server.py` | lokaler Testserver, Port **8081** (bleibt lokal) |
| `DOKU/` | Projekt-Doku: `.html`-Ansichten hier, Quellen in `DOKU/md/` (bleibt lokal, NICHT im öffentlichen Repo) |
| `CLAUDE.md` | Arbeitsanweisungen für Claude Code (bleibt lokal) |
| `README.md` | lokales README inkl. **Veröffentlichungs-Ablauf** (das öffentliche Repo hat ein eigenes) |

## Veröffentlichung

- Öffentliches Repo: `Cehha79/norberts-mobile-fusspflege` (GitHub Pages) —
  enthält NUR die Website, ohne DOKU/, CLAUDE.md, server.py, .gitignore,
  lokales README. Ablauf: rsync-Kopie + push (siehe README.md).
- Lokales Repo = vollständige Arbeits-Historie inkl. DOKU.

## Aufbau-Prinzipien

- Flache Struktur wie bei `WEB/MikaTec`: jede Seite eine eigene HTML-Datei,
  ein Stylesheet, gemeinsames JS; Sprachversionen als Ordner-Kopien mit
  `../`-Pfaden.
- Kopfleiste (inkl. Schnell-Links Start/Leistungen + Sprachwahl) und fixe
  Fußzeile sind auf allen Seiten identisch — Änderungen auf **allen 65
  Seiten** nachziehen (Skript!), Text-Änderungen zusätzlich in den
  6 Sprachordnern und beim Shop in `js/shop-<code>.js`.
- Design nur über die Tokens am Anfang von `style.css` (`--marke`,
  `--grund`, `--flaeche`, `--lk` …) — nie Farbwerte im HTML verstreuen.
- Nach CSS/JS-Änderung Cache-Version `?v=N` überall gemeinsam hochzählen
  (Stand: style **v=81**, main.js **v=20**, produkte.js **v=10**,
  shop-*.js v=1).
- DOKU-HTML wird aus `DOKU/md/*.md` erzeugt: `python3 DOKU/md2doku.py`.
