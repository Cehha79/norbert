# Fahrplan

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Die sieben Phasen bis zur fertigen Kunden-Website — mit aktuellem Stand.

## Phasen

| Nr. | Phase | Inhalt | Stand |
|---|---|---|---|
| 1 | Grundgerüst | Ordner, git, DOKU-Struktur, Schriften lokal | ✅ fertig (07.07.2026) |
| 2 | Design-System | `style.css` mit Themen-Tokens (hell/dunkel), Komponenten, responsive | ✅ fertig (07.07.2026) |
| 3 | Seiten bauen | alle 7 Seiten mit Struktur und Basistexten, Platzhalter für Kundendaten | ✅ fertig (07.07.2026) |
| 4 | Echte Inhalte | Texte, Preise, Fotos, Orte, Kundenstimmen, Impressum-/Datenschutz-Daten einpflegen | ⬜ offen — wartet auf Kundendaten von Hasan |
| 5 | Prüfung | Responsive-Test, beide Themen, Kontraste, Links, Rechtstexte, Code-Prüfer | ⬜ offen |
| 6 | Veröffentlichung | GitHub-Repo, GitHub Pages, Formular-Dienst anschließen, sitemap/robots | ⬜ offen |
| 7 | Domain | norberts-mobile-fusspflege.de von Strato auf GitHub Pages umstellen (CNAME, DNS) | ⬜ offen |

## Entschieden

- **Mobile zuerst (07.07.2026):** Die Seite wird hauptsächlich im
  Handy-Browser genutzt — das CSS ist Mobile-First aufgebaut (Basis =
  Handy-Layout, Erweiterungen ab 640/840/1000 px). Gestaltet und geprüft
  wird zuerst im Handy-Viewport.
- **Sprachen (07.07.2026):** 5 echte statische Sprachversionen —
  Deutsch (Stamm), Englisch `/en/`, Polnisch `/pl/`, Arabisch `/ar/`
  (RTL!), Chinesisch `/zh/` (System-Schrift). Kein Übersetzer-Widget.
  Umsetzung erst **nach** Phase 4, damit Texte nicht fünffach
  nachgezogen werden müssen. PL/AR/ZH vor Livegang von Muttersprachlern
  gegenlesen lassen.

## Offene Entscheidungen

- **Formular-Dienst:** Anbieter noch wählen (bei Phase 6), danach
  Datenschutzerklärung ergänzen.
- **Online-Terminbuchung:** vorerst nicht — Formular + Telefon + WhatsApp
  reichen für den Start; später erweiterbar.
