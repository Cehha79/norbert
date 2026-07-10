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
- [x] **Lesbarkeit über den Hintergrundbildern hergestellt** (10.07.):
  Textblöcke bekommen eine Fläche mit 88 % Deckkraft; schlechtester
  gerechneter Kontrast 4,9:1 (leiser Text, dunkles Thema) — WCAG AA erfüllt.
  Schleier bleibt bei 15 %, die Fotos wirken. Elemente und Rechnung stehen
  in der Live-Dokumentation vom 10.07.
- [x] **Alte Hintergrund-Dateien gelöscht** (10.07., nach Commit 57c3646).
  Eigene Gegenprobe: null Verweise aus HTML/CSS/JS. Kopie liegt in
  `~/.Trash/Norbert-alte-Hintergruende-2026-07-10/`, Wiederherstellung mit
  `git checkout 57c3646 -- bilder/<datei>`. Gespart: 19,6 MB.
- [ ] **Neues Logo mit Norbert abstimmen** (Wechsel am 10.07. auf Hasans
  Anweisung). Es ist seine Marke: auf allen Arbeitsfotos, dem Flyer und der
  Kleidung steht noch das alte Logo. Entweder Norbert bestätigt das neue,
  oder Fotos/Kleidung/Website laufen auseinander. Bedenken siehe
  `Live-Dokumentation.md` (10.07.)
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
  je Sprache js/shop-<code>.js (144 Artikel übersetzt) + 4 Shop-Seiten
  im Sprachordner; Bestell-Nachricht an Norbert bleibt IMMER deutsch
- [ ] Beim Tausch der Muster-Artikel gegen Norberts echtes Sortiment:
  alle 6 js/shop-<code>.js-Dateien mit übersetzen (144 Einträge je Datei)
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
- [x] Impressum + Datenschutz fertiggestellt (10.07.): Entwurfs-Kästen
  entfernt, Stand-Datum gesetzt (10. Juli 2026), Platzhalter raus.
  Beide öffnen als Maske, bleiben aber eigene Seiten (§ 5 DDG).
- [ ] **Rechtstexte vor Livegang gegenlesen lassen** — sie tragen keinen
  Entwurfs-Hinweis mehr, gelten also als final. Ändert sich vorher etwas an
  Cal.com, WhatsApp, GitHub Pages oder den Bildquellen, muss die
  Datenschutzerklärung nachgezogen und das Stand-Datum aktualisiert werden.
- [ ] **GoatCounter: Auftragsverarbeitungsvertrag (Art. 28 DSGVO) klären.**
  GoatCounter verarbeitet in Norberts Auftrag; ein AVV ist auf der Website
  des Anbieters nicht öffentlich hinterlegt. Bei `support@goatcounter.com`
  anfragen. Der Betreiber (Name, Rechtsform, Anschrift) ist ebenfalls nicht
  öffentlich dokumentiert — vor Livegang erfragen und in Abschnitt 5 der
  Datenschutzerklärung ergänzen. **Nicht erfinden.**
- [ ] **GoatCounter: eigene Aufrufe ausblenden** — in den Einstellungen des
  Kontos `norbert` unter „Ignore IP addresses" Norberts und Hasans IP
  eintragen. Der frühere Weg über `#toggle-goatcounter` wurde bewusst
  ausgebaut (er hätte einen Cookie-Banner nötig gemacht).
- [ ] **GoatCounter: Restrisiko § 25 TDDG.** Die Zählung greift nicht auf das
  Endgerät zu, es wird nur eine IP-Adresse übertragen und dort verworfen.
  Nach Auffassung von GoatCounter und Fathom ist das einwilligungsfrei; eine
  gefestigte Rechtsprechung fehlt. Beim Gegenlesen der Rechtstexte mit
  bewerten lassen.
- [ ] **GoatCounter: Feld „Ihre Website" berichtigen.** In den Einstellungen
  des Kontos `norbert` steht dort `norbert.goatcounter.com` (der Zähl-Endpunkt).
  Richtig wäre die tatsächliche Adresse: derzeit
  `cehha79.github.io/norberts-mobile-fusspflege`, beim Livegang
  `norberts-mobile-fusspflege.de`. Beeinflusst nur die Verlinkung in der
  Übersicht, nicht die Zählung.
- [ ] **GoatCounter: erste echte Zählung prüfen.** Die Live-Seite einmal in
  einem normalen Browserfenster aufrufen und kontrollieren, ob der Aufruf unter
  https://norbert.goatcounter.com erscheint. **Nicht wundern**, wenn nichts
  gezählt wird: auf `localhost` zählt das Skript absichtlich nicht, ebenso wenig
  bei aktiviertem „Do Not Track"/GPC oder bei Werbeblockern, die
  `goatcounter.com` sperren.

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
- [x] GitHub Pages LIVE (07.07., Staging): Repo
  `Cehha79/norberts-mobile-fusspflege` (öffentlich, NUR Website — ohne
  DOKU/CLAUDE.md/server.py), https://cehha79.github.io/norberts-mobile-fusspflege/
  — geprüft (Startseite, tr-Shop, CSS, og-Bild, robots-Sperre, DOKU=404);
  Veröffentlichungs-Ablauf steht im lokalen README.md
- [ ] Beim Livegang: Domain norberts-mobile-fusspflege.de aufschalten
  (CNAME ins Repo + DNS bei Strato), robots.txt freischalten

## Prüfung (Phase 5)

- [ ] Beide Themen (hell/dunkel) auf allen 7 Seiten prüfen
- [ ] **Produktfotos für die 16 neuen Muster-Artikel** (w3, w8, w11–w16,
      d8, d10–d16). Sie zeigen derzeit über den `onerror`-Rückfall das
      Bereichsbild. Ebenso fehlen weiterhin Fotos für e-, k- und n-Artikel.
- [ ] **Eigenes Bereichsbild für Hygiene & Desinfektion**: aktuell ein
      quadratischer Ausschnitt aus `bilder/produkte/d5.jpg`.
- [ ] Responsive: 375 px (Handy), 768 px (Tablet), 1280 px (Desktop)
- [ ] Kontraste messen (Ziel: WCAG AA, 4,5:1 Fließtext)
- [ ] Alle Links klicken (intern, tel:, wa.me), Formular-Pflichtfelder testen
- [ ] Rechtstexte gegen Wortwahl-Regeln aus `WICHTIG.md` prüfen

## Nach der Prüfrunde vom 10.07. offen

- [ ] **WhatsApp-Nummer bestätigen lassen** — Knöpfe zeigen jetzt auf Norberts
  `0176 8696 1032` (vorher fälschlich Hasans MikaTec-Nummer). Nutzt Norbert dort
  WhatsApp? Falls nein, Nummer erfragen. Betrifft 21 HTML-Seiten + `main.js` +
  `produkte.js`.
- [ ] **Tote CSS-Regeln entfernen** (~90 Zeilen, alle belegt ohne HTML/JS-Treffer):
  `.nur-vorleser`, `.marke-text/.marke-name/.marke-zusatz`, `.held-marke`,
  `.held-telefon`, `.bild-platzhalter`, `.zahlen-raster/.zahl-wert/.zahl-text`,
  `.hintergrund-video`, `.korb-fuss`, `.formular` (nackt), `.zeiten`,
  `.nav-termin`, `.aufruf` (ganzer Block), `.fuss-raster`. Vorsicht: erst gegen
  `js/main.js` und `js/produkte.js` gegenprüfen (dynamische Klassen).
- [ ] **Kennfarben als Tokens** — `#2f8fc0 #3e8e5a #a8823c #b5544a #c26a35` stehen
  vierfach im Stylesheet (`.vp-*`, `.lk-*`, `.av-*`, `.vt-*`), je mit eigener
  Dunkel-Variante. Eine Änderung erfordert bis zu 8 Stellen.
- [ ] **28 Produktfotos fehlen** (nicht 16): `w3 w8 w10–w16 e3 e4 e8 e12 e13 e16
  n4 n6 n13 k9 k15 d8 d10–d16`. Rückfall auf das Bereichsbild funktioniert,
  erzeugt aber je Artikel einen 404 in der Konsole.
- [ ] **Zwei wirkungslose CSS-Deklarationen**: `.kopf-innen { gap: 12px }` (von
  `gap: 34px` im selben Media-Block geschlagen) und die Basis-Farben von
  `.stimme-avatar` (immer von `.av-*` überschrieben).
- [ ] **Media-Queries stehen nicht aufsteigend** (900 vor 840, 1100 vor 1000).
  Aktuell kein Konflikt, aber eine später ergänzte Regel bräche still.
- [x] **Hintergrund-Videos**: erledigt — sie waren unbenutzt und sind gelöscht.
  (Zwei Prüf-Agenten widersprachen sich; die eigene Messung ergab null Verweise.)
- [ ] **Grenzwertige Produkt-Claims** vor Livegang prüfen: „Fußspray
  antibakteriell" (d4), „Schrunden-Salbe" (c3) — bei Kosmetik nach Kosmetik-VO
  bzw. LFGB heikel.
