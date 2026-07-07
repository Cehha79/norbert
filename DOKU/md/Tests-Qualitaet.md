# Tests-Qualitaet

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Wie das Projekt geprüft wird und was der letzte Prüfstand ergab.

## So wird geprüft

- **Lokal ansehen:** `python3 -m http.server 8080` im Projektordner, dann
  `http://localhost:8080/` — alle 7 Seiten durchklicken.
- **Themen:** Umschalter oben rechts; zusätzlich Systemeinstellung
  hell/dunkel testen (ohne gespeicherte Wahl folgt die Seite dem System).
- **Responsive:** Browser-Entwicklerwerkzeuge, Breiten 375 / 768 / 1280 px;
  unter 800 px müssen Menü-Knopf und Aktionsleiste erscheinen.
- **Bewegung:** macOS „Bewegung reduzieren" einschalten — Einblendungen und
  Zähler müssen sofort ohne Animation dastehen.
- **Rechtstexte:** Wortliste aus `WICHTIG.md` gegen alle Seiten prüfen
  (podolog…, medizinisch…, Therapie, Diagnose, Behandlung von …).
- **Links:** alle internen Links, `tel:`-, `wa.me`- und Fußzeilen-Links.

## Prüfstand

| Datum | Prüfung | Ergebnis |
|---|---|---|
| 2026-07-07 | Erstbau Phasen 1–3, lokaler Server, Seiten laden | siehe Live-Dokumentation — Grundprüfung beim Bau; vollständige Phase-5-Prüfung steht noch aus |
