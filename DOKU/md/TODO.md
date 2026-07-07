# TODO

*Stand: 2026-07-07*

## Aufgabe dieser Datei

Alle offenen Punkte — abhaken, was erledigt ist; nichts stillschweigend streichen.

## Von Hasan / vom Kunden benötigt (Phase 4)

- [x] Preise → aus dem Flyer der alten Seite übernommen (Fachfußpflege 48 €,
  Fußmassage 30 €, Reflexzonen-Wellnessmassage 57 €) — **vom Kunden
  bestätigen lassen, ob aktuell**
- [x] Fotos → 4 Arbeitsfotos + Porträt aus der Strato-Sicherung in `bilder/`
  übernommen; Logo als `bilder/logo-alt.png` gesichert (noch unbenutzt)
- [x] E-Mail-Adresse → norbertsmobilefusspflege@gmx.de überall eingetragen
- [x] Impressum-Adresse → Mittenfeldstraße 39, 70499 Stuttgart; dazu
  Berufshaftpflicht (Allianz) + EU-Streitschlichtung
- [x] Preise 48/30/57 € von Hasan bestätigt (07.07.)
- [x] Anfahrt: **im Preis enthalten** → Preistabelle + Hinweis eingetragen
- [x] Einzugsgebiet: **Weilimdorf + Umkreis bis 50 km** (von Hasan, erst 100,
  dann auf 50 km korrigiert) → `kontakt.html#einzugsgebiet`
- [x] Dauer: ca. 30 Minuten → Fachfußpflege-Zeile + FAQ; Dauer der beiden
  Massagen noch offen (Platzhalter in der Tabelle)
- [x] WhatsApp: gleiche Nummer bestätigt
- [x] Zahlungsarten: bar, auf Rechnung, PayPal → FAQ
- [x] Marken-Entscheidung: **B** — Palette Petrol-Blau/Gold passend zum Logo;
  Logo in Kopf- und Fußleiste eingebaut (Tokens umbenannt: `--gruen` →
  `--marke`)
- [ ] USt-Status fürs Impressum klären (§ 19 UStG Kleinunternehmer?) — „später"
- [ ] Dauer der Fußmassage und der Reflexzonen-Wellnessmassage erfragen
- [ ] Erreichbarkeits-Zeiten → `kontakt.html`
- [ ] Kundenstimmen (mit Freigabe der Kunden) — bleiben laut Hasan vorerst
  Platzhalter

## Bauen (Phase 4–6)

- [ ] Sprachversionen bauen (nach Phase 4): `/en/`, `/pl/`, `/ar/` (RTL,
  `dir="rtl"`), `/zh/` (System-Schriften statt Lora/Source Sans) +
  Sprachwahl in der Kopfleiste + `hreflang`-Verweise
- [ ] PL/AR/ZH von Muttersprachlern gegenlesen lassen (Norbert: Polnisch?)
- [ ] Statisches OSM-Kartenbild des Einzugsgebiets erzeugen →
  `bilder/einzugsgebiet.webp` (Attribution steht schon daneben)
- [x] Favicon: `bilder/logo.svg` als SVG-Favicon eingebunden (07.07.);
  PNG-Fallback/App-Icons für ältere Geräte beim Livegang ergänzen
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
