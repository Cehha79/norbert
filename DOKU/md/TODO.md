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
- [x] USt-Status fürs Impressum: **Kleinunternehmer § 19 UStG** (Hasans
  Ansage 07.07., wie MikaTec) — Impressum, Warenkorb- und Kassen-Summen
  weisen keine USt mehr aus; beim Livegang mit Norbert gegenprüfen
- [ ] Dauer der Fußmassage und der Reflexzonen-Wellnessmassage erfragen
- [ ] Erreichbarkeits-Zeiten → `kontakt.html`
- [ ] Kundenstimmen: echte Stimmen (mit Freigabe der Kunden) einpflegen und
  dabei die 18 **Muster-Bewertungen löschen** (nur Wirkungstest, tragen
  „Beispiel"-Etikett — PFLICHT vor Livegang, siehe WICHTIG)

## Bauen (Phase 4–6)

- [x] Sprachversionen gebaut (07.07., Hasans Auftrag inkl. Türkisch +
  Russisch): `/en/ /tr/ /pl/ /ru/ /ar/ /zh/` — je 5 Inhaltsseiten (Start,
  Leistungen, Über mich, Kundenstimmen, Kontakt); `/ar/` mit `dir="rtl"`,
  `/zh/` mit System-Schrift-Override; `hreflang` auf allen Sprach- UND
  deutschen Seiten; Sprachwahl-Verweise überall aktiv. Shop seit 07.07.
  ebenfalls übersetzt (siehe unten); nur Impressum/Datenschutz bewusst
  deutsch (Rückverweise mit `../`)
- [ ] **ALLE 6 Übersetzungen von Muttersprachlern gegenlesen lassen**
  (KI-übersetzt; Norbert: Polnisch? Hasan: Türkisch!) — vor Livegang
- [ ] Bei künftigen Text-Änderungen an den 5 Inhaltsseiten: alle 6
  Sprachversionen mitziehen (Ordner en/tr/pl/ru/ar/zh)
- [x] Shop mehrsprachig (07.07., Hasans Auftrag): produkte.js mit
  Sprach-Schnittstelle (NF_BASIS/NF_TEXTE/NF_KATEGORIEN/NF_UEBERSETZUNG),
  je Sprache js/shop-<code>.js (128 Artikel übersetzt) + 4 Shop-Seiten
  im Sprachordner; Bestell-Nachricht an Norbert bleibt IMMER deutsch
- [ ] Beim Tausch der Muster-Artikel gegen Norberts echtes Sortiment:
  alle 6 js/shop-<code>.js-Dateien mit übersetzen (128 Einträge je Datei)
- [x] Statisches OSM-Kartenbild des Einzugsgebiets erzeugt (07.07.):
  `bilder/einzugsgebiet.jpg` — aus OSM-Kacheln (z9) gestitcht, Marker
  Weilimdorf + 50-km-Kreis; Attribution steht daneben
- [x] Favicon: `bilder/logo-klein.png` (Original-Logo) eingebunden (07.07.);
  `bilder/apple-touch-icon.png` (180 px, Logo auf Papierton) erzeugt und
  auf allen 65 Seiten verlinkt (07.07.)
- [x] Open-Graph-Bild + `og:`-Metadaten (07.07.): `bilder/og-bild.jpg`
  (1200×630, Logo auf Papierton mit Marken-Linien) + og/twitter-Tags auf
  allen 65 Seiten (Titel/Beschreibung je Seite, og:locale je Sprache)
- [ ] Formular-Dienst optional: das Kontakt-Formular sendet seit 07.07.
  per WhatsApp/E-Mail (kein Backend nötig); echter Formular-Dienst nur,
  falls Norbert Anfragen ohne WhatsApp/Mail-Programm möchte
- [x] `sitemap.xml` (65 URLs mit hreflang-Alternativen) + `robots.txt`
  angelegt (07.07.). ACHTUNG robots.txt = **Staging-Sperre** (Disallow /),
  solange Muster-Daten drauf sind — **vor Livegang freischalten**
  (vorbereitete Zeilen stehen als Kommentar in der Datei)
- [ ] Impressum + Datenschutz fertigstellen, Entwurfs-Kästen entfernen
  (Grundausbau 07.07. erledigt: MikaTec-Struktur, Support-Block,
  Haftung/Urheberrecht/Bildnachweise, § 19 UStG, Formular-Absatz echt;
  offen nur noch Schluss-Prüfung + Stand-Datum)

## Terminbuchung (entschieden 07.07.: Google + Cal.com)

- [x] Cal.com-Konto eingerichtet (07.07., Hasans Test-Konto) und
  **Buchungs-Link eingetragen**: cal.com/hasan-tepegoz-dzm3vx auf der
  Tafel „Termin online buchen"
- [ ] **Vor Livegang: auf Norberts eigenes Cal.com-Konto umstellen**
  (mit seinem Google-Konto, Anleitung in
  `DOKU/Claude Ausgabe/Anleitung-Terminbuchung.html`) und den Link auf
  kontakt.html tauschen (TODO-Kommentar steht an der Tafel);
  Ereignistypen 48/30/57 € + Puffer + Pflichtfeld Adresse prüfen
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
- [ ] **Widerrufsbelehrung + AGB schreiben und verlinken** — die zwei
  Verweise in der Kassen-Einwilligung zeigen auf `#` (Platzhalter-Optik
  am 07.07. auf Hasans Wunsch entfernt; ohne echte Texte kein echter
  Verkauf!). Gilt für kasse.html UND alle 6 Sprach-Kassen
- [ ] Ablauf laut Hasan: erst GitHub Pages, wenn fertig → richtige Domain

## Prüfung (Phase 5)

- [ ] Beide Themen (hell/dunkel) auf allen 7 Seiten prüfen
- [ ] Responsive: 375 px (Handy), 768 px (Tablet), 1280 px (Desktop)
- [ ] Kontraste messen (Ziel: WCAG AA, 4,5:1 Fließtext)
- [ ] Alle Links klicken (intern, tel:, wa.me), Formular-Pflichtfelder testen
- [ ] Rechtstexte gegen Wortwahl-Regeln aus `WICHTIG.md` prüfen
