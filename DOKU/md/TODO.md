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
- [ ] **YouTube- und TikTok-Kanal-Adressen von Norbert** — die zwei
  Sozial-Knöpfe im Held zeigen bis dahin ins Leere (`href="#"`)
- [ ] USt-Status fürs Impressum klären (§ 19 UStG Kleinunternehmer?) — „später"
- [ ] Dauer der Fußmassage und der Reflexzonen-Wellnessmassage erfragen
- [ ] Erreichbarkeits-Zeiten → `kontakt.html`
- [ ] Kundenstimmen: echte Stimmen (mit Freigabe der Kunden) einpflegen und
  dabei die 18 **Muster-Bewertungen löschen** (nur Wirkungstest, tragen
  „Beispiel"-Etikett — PFLICHT vor Livegang, siehe WICHTIG)

## Bauen (Phase 4–6)

- [ ] Sprachversionen bauen (nach Phase 4): `/en/`, `/pl/`, `/ar/` (RTL,
  `dir="rtl"`), `/zh/` (System-Schriften statt Lora/Source Sans) +
  `hreflang`-Verweise; Sprachwahl in der Kopfleiste ist gebaut (07.07.,
  ersetzt den Termin-Knopf) — **Verweise dort aktivieren** (aktuell `#`)
- [ ] PL/AR/ZH von Muttersprachlern gegenlesen lassen (Norbert: Polnisch?)
- [x] Statisches OSM-Kartenbild des Einzugsgebiets erzeugt (07.07.):
  `bilder/einzugsgebiet.jpg` — aus OSM-Kacheln (z9) gestitcht, Marker
  Weilimdorf + 50-km-Kreis; Attribution steht daneben
- [x] Favicon: `bilder/logo-klein.png` (Original-Logo) eingebunden (07.07.);
  App-Icons in weiteren Größen beim Livegang ergänzen
- [ ] Open-Graph-Bild + `og:`-Metadaten für schönes Teilen (WhatsApp!)
- [ ] Formular-Dienst optional: das Kontakt-Formular sendet seit 07.07.
  per WhatsApp/E-Mail (kein Backend nötig); echter Formular-Dienst nur,
  falls Norbert Anfragen ohne WhatsApp/Mail-Programm möchte
- [ ] `sitemap.xml` + `robots.txt` beim Livegang (wie MikaTec)
- [ ] Impressum + Datenschutz fertigstellen, Entwurfs-Kästen entfernen

## Terminbuchung (entschieden 07.07.: Google + Cal.com)

- [ ] **Cal.com einrichten** (macht Hasan/Norbert selbst — Anleitung liegt in
  `DOKU/Claude Ausgabe/Anleitung-Terminbuchung.html`): Konto mit Norberts
  vorhandenem Google-Konto, Kalender verbinden, Verfügbarkeit + 3
  Ereignistypen (48/30/57 €) anlegen
- [ ] **Buchungs-Link eintragen**: Tafel „Termin online buchen" auf
  kontakt.html zeigt noch `href="#"` mit Platzhalter — echten
  cal.com-Link einsetzen, Platzhalter-Etikett entfernen
- [ ] Microsoft bewusst verworfen (Bookings nur im M365-Abo ~6–7 €/Monat)

## Shop-Ausbaustufe (später, von Hasan geplant)

- [ ] **E-Mail-Anbindung über API**: Bestellung geht automatisch als
  E-Mail mit **PDF-Auftrag** an Norbert (statische Seite kann das nicht
  selbst — braucht Dienst/Backend; Wahl offen)
- [ ] **Echtes PayPal-Konto** anschließen — aktuell öffnet der
  PayPal-Knopf einen PayPal.Me-**Platzhalter**
  (`paypal.me/NorbertsFusspflege`, in js/produkte.js markiert) mit dem
  Gesamtbetrag; vor Livegang durch Norberts echten PayPal.Me-Namen
  ersetzen oder echten PayPal-Checkout bauen
- [x] **Kalender-Anbindung** → über Google + Cal.com gelöst (siehe eigener
  Abschnitt „Terminbuchung"); tiefere API-Integration bleibt Option
- [ ] DHL-Versandpreise (5,49 € / Express 12,99 €) sind **Muster** —
  echte Konditionen mit Norbert klären
- [ ] Ablauf laut Hasan: erst GitHub Pages, wenn fertig → richtige Domain

## Prüfung (Phase 5)

- [ ] Beide Themen (hell/dunkel) auf allen 7 Seiten prüfen
- [ ] Responsive: 375 px (Handy), 768 px (Tablet), 1280 px (Desktop)
- [ ] Kontraste messen (Ziel: WCAG AA, 4,5:1 Fließtext)
- [ ] Alle Links klicken (intern, tel:, wa.me), Formular-Pflichtfelder testen
- [ ] Rechtstexte gegen Wortwahl-Regeln aus `WICHTIG.md` prüfen
