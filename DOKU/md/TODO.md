# TODO

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Alle offenen Punkte — abhaken, was erledigt ist; nichts stillschweigend streichen.

## Von Hasan / vom Kunden benötigt (Phase 4)

- [ ] Preisliste (PDF der alten Strato-Seite) → Preise + Dauer in
  `leistungen.html` (Karten + Tabelle) eintragen
- [ ] Anfahrtsregelung (Pauschale oder Umkreis inklusive) → `leistungen.html`
- [ ] Einzugsgebiet: Ortsliste → `kontakt.html#einzugsgebiet`
- [ ] Fotos: Porträt, Arbeit/Hausbesuch, Ausstattung → `bilder/` (als WebP,
  Platzhalter in `index.html`, `ueber-mich.html` ersetzen)
- [ ] E-Mail-Adresse des Kunden → Fußleiste (4×), `kontakt.html`,
  `impressum.html`, `datenschutz.html`
- [ ] WhatsApp-Nummer bestätigen (aktuell angenommen: gleiche Nummer
  0176 8696 1032 → `wa.me/4917686961032`)
- [ ] Erreichbarkeits-Zeiten → `kontakt.html`
- [ ] Zahlungsarten → FAQ in `kundenstimmen.html`
- [ ] Kundenstimmen (mit Freigabe der Kunden) → `kundenstimmen.html` + Auszug
  `index.html`
- [ ] Impressum-Daten: ladungsfähige Adresse, USt-Status (§ 19 UStG?)
- [ ] Ungefähre Dauer einer Fußpflege bestätigen (FAQ-Platzhalter „45–60 Min.")

## Bauen (Phase 4–6)

- [ ] Sprachversionen bauen (nach Phase 4): `/en/`, `/pl/`, `/ar/` (RTL,
  `dir="rtl"`), `/zh/` (System-Schriften statt Lora/Source Sans) +
  Sprachwahl in der Kopfleiste + `hreflang`-Verweise
- [ ] PL/AR/ZH von Muttersprachlern gegenlesen lassen (Norbert: Polnisch?)
- [ ] Statisches OSM-Kartenbild des Einzugsgebiets erzeugen →
  `bilder/einzugsgebiet.webp` (Attribution steht schon daneben)
- [ ] Favicon + App-Icons (Fußabdruck-Zeichen aus der Kopfleiste ableiten)
- [ ] Open-Graph-Bild + `og:`-Metadaten für schönes Teilen (WhatsApp!)
- [ ] Formular-Dienst wählen und anschließen (`kontakt.html`, action-URL),
  Datenschutzerklärung ergänzen
- [ ] `sitemap.xml` + `robots.txt` beim Livegang (wie MikaTec)
- [ ] Impressum + Datenschutz fertigstellen, Entwurfs-Kästen entfernen

## Prüfung (Phase 5)

- [ ] Beide Themen (hell/dunkel) auf allen 7 Seiten prüfen
- [ ] Responsive: 375 px (Handy), 768 px (Tablet), 1280 px (Desktop)
- [ ] Kontraste messen (Ziel: WCAG AA, 4,5:1 Fließtext)
- [ ] Alle Links klicken (intern, tel:, wa.me), Formular-Pflichtfelder testen
- [ ] Rechtstexte gegen Wortwahl-Regeln aus `WICHTIG.md` prüfen
