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

## Hinweis zu headless Chrome

Headless-Chrome-Screenshots über die Kommandozeile klemmen die Fensterbreite
intern auf ~500 px — ein 390-px-Screenshot zeigt dann rechts abgeschnittenen
Inhalt, obwohl das Layout in Ordnung ist. Schmaler als 500 px daher im
Browser-Responsive-Modus oder am echten Gerät prüfen.

## Prüfstand

| Datum | Prüfung | Ergebnis |
|---|---|---|
| 2026-07-07 | Erstbau Phasen 1–3, lokaler Server, alle Seiten + Ressourcen HTTP 200 | bestanden |
| 2026-07-07 | Wortwahl-Prüfung (geschützte Begriffe/Heilkunde) über alle 7 Seiten | bestanden — nur erlaubte Abgrenzungs-Erklärungen |
| 2026-07-07 | Sichtprüfung nach Mobile-First-Umbau (headless Chrome): Handy 500 px hell + dunkel, Kontakt/Leistungen 500 px, Desktop 1280 px, Kopfzeile 1000/1024 px | bestanden — Kopfzeile bei 1000–1024 px war anfangs zu eng (Markenname/Umschalter abgeschnitten), behoben: Desktop-Navigation erst ab 1000 px, Nav-Punkt „Leistungen", verdichtete Kopfzeile |
| — | Vollständige Phase-5-Prüfung (echtes Gerät, Bewegung reduzieren, Kontrastmessung) | steht aus |
