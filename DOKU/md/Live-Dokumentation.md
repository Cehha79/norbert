# Live-Dokumentation

*Stand: 2026-07-10*

## 2026-07-10 (Abschluss) — Große Prüfrunde mit 11 Agenten, Fixes, Veröffentlichung

Elf parallele Prüf-Agenten haben Code, Struktur, Recht, Handy-Darstellung,
Barrierefreiheit, Datenschutz, Shop-Daten, Sicherheit und Dateibestand geprüft.
Kein Ergebnis wurde geschätzt — jeder Befund ist im Browser oder per Skript
gemessen. Was gefunden wurde, ist behoben.

### Behoben (kritisch)

- **WhatsApp führte zum Entwickler statt zum Kunden.** Alle 21 `wa.me`-Links und
  beide Skripte (`main.js`, `produkte.js`) zeigten auf `491735904496` — Hasans
  MikaTec-Nummer. Jetzt `4917686961032` (Norbert, wie im Impressum). Die
  MikaTec-Nummer bleibt nur im Impressum als Support-Kontakt stehen.
  **Offen:** Nutzt Norbert auf dieser Nummer WhatsApp? Mit ihm klären.
- **Muster-Daten waren nicht als solche erkennbar.** Die 144 Artikel und Preise
  sind erfunden, auf keiner Shop-Seite stand ein sichtbarer Hinweis (nur ein
  Kommentar im Quelltext). Das ist ein UWG-Risiko, solange die Seite erreichbar
  ist. Jetzt trägt jede der vier Shop-Seiten in allen sieben Sprachen einen
  `.hinweis`-Kasten unter dem Seitenkopf (28 Seiten).
- **Die Datenschutzerklärung behauptete etwas Falsches.** In Abschnitt 2 stand
  „speichert nichts auf Ihrem Gerät". Tatsächlich legt die Seite drei
  localStorage-Einträge an (`nf-thema`, `nf-warenkorb`, `nf-karte`), von denen
  nur einer genannt war. Der Satz gilt jetzt ausdrücklich nur für den passiven
  Besuch; ein neuer Unterabschnitt „Was Ihr Browser speichert" listet alle drei
  Einträge samt Rechtsgrundlage (§ 25 Abs. 2 Nr. 2 TDDG).
- **`measure_t.html` wäre öffentlich gelandet.** Der rsync-Befehl im README
  schloss `*_t.html` nicht aus — die Dateien sind nur lokal per `.gitignore`
  geschützt, und die wird nicht mitkopiert. `--exclude "*_t.html"` ergänzt.

### Behoben (Handy und Barrierefreiheit)

- **320-px-Überlauf im Held-Block** (23 px, alle Sprachen, in `ar/` spiegelbildlich):
  `grid-template-columns: 1fr` ist `minmax(auto, 1fr)` und wird von einem
  min-content-Kind gesprengt → `minmax(0, 1fr)`. Die restlichen 2 px kamen vom
  Firmennamen mit `white-space: nowrap`; unter 345 px ist er jetzt 20 px groß.
  Nachgemessen bei 320/360/375/390/430 px: überall kein Überlauf.
- **Mengen-Knöpfe im Shop** waren 34 × 34 px → 44 × 44 px (eigene Projektregel).
- **Sozial-Knöpfe** bleiben optisch 38 px hoch (Hasans Vorgabe); ein
  unsichtbares `::after` bringt die Tastfläche auf 44 px.
- **Fußzeilen-Links**: Leiste bleibt 29 px, die Links erreichen über
  `min-height: 24px` + Innenabstand das AA-Minimum (WCAG 2.5.8). 44 px ginge
  nur mit höherer Leiste.
- **Menü-Knopf hatte auf dem Handy keinen Namen** — unter 480 px wird der Text
  „Menü" ausgeblendet, das Symbol ist `aria-hidden`. Jetzt festes `aria-label`
  auf allen 65 Seiten, übersetzt.
- **`aria-label="Schnell-Navigation"` war in allen 54 Sprachdateien deutsch.**
  Übersetzt.
- **Sprachnamen im Umschalter** tragen jetzt ihr eigenes `lang` (WCAG 3.1.2),
  Arabisch zusätzlich `dir="rtl"`.
- **Fehler bei der Sternebewertung** wurde nur durch einen roten Schatten
  angezeigt. Jetzt ein sichtbarer Text mit `role="alert"` und `aria-invalid` —
  Farbe darf die Information nicht allein tragen.

### Behoben (Kontraste, in beiden Themen nachgerechnet)

Die Kennfarben `--lk`/`--vt` färben Rahmen und Symbolflächen. Für Text sind sie
zu hell. Statt sie zu ändern (das hätte das Design verändert), gibt es jetzt
dunklere Text-Varianten `--lk-text` und `--vt-text`.

| Stelle | vorher | jetzt | Grenze |
|---|---|---|---|
| Leistungs-Titel (hell) | 3,1–3,6:1 | 5,1–5,3:1 | 4,5:1 |
| Vergleichs-Titel (hell) | 2,1:1 | 5,5:1 | 4,5:1 |
| Lager-Status grün/orange | 3,8 / 4,0:1 | 6,1 / 6,6:1 | 4,5:1 |
| leere Bewertungssterne | 1,4:1 | 3,4:1 | 3:1 |
| WhatsApp-Symbol | 2,0:1 | 5,3:1 | 3:1 |
| Zurück-Link (dunkel) | 3,2:1 | 8,3:1 | 4,5:1 |

Neues Token `--stern-leer`. Das WhatsApp-Grün ist jetzt dasselbe wie beim
Textknopf (`#1f7a4d`) — das helle Marken-Grün `#25d366` ließ das weiße Symbol
verschwinden.

### Geprüft und in Ordnung

2106 interne Links (kein toter), keine doppelten IDs, keine Konsolenfehler auf
11 Seiten, keine XSS-Lücke, beim Seitenaufruf null externe Verbindungen (die
Karte lädt erst nach Klick), Shop-Daten in allen 6 Sprachen identisch (144/144
Artikel-IDs), Summen auf den Cent genau, Warenkorb übersteht Seiten- und
Sprachwechsel, RTL sauber gespiegelt, keine Geheimnisse im Code, keine GPS-Daten
in den Bild-Metadaten, `robots.txt` auf Disallow.

### Bewusst nicht geändert

- **Kopf- und Fußleiste bleiben in beiden Themen schwarz.** Ein Versuch mit
  marineblauen Leisten im Hellmodus wurde von Hasan verworfen. Nicht erneut
  vorschlagen.
- **~90 Zeilen tote CSS-Regeln** (`.aufruf`, `.zahlen-raster`, `.held-marke` …)
  und die vierfach duplizierte Kennfarben-Palette: als TODO notiert, nicht im
  selben Durchgang angefasst — Aufräumen und Fehlerbehebung nicht mischen.
- **28 Artikel ohne eigenes Foto** (nicht 16, wie zuvor dokumentiert). Der
  `onerror`-Rückfall auf das Bereichsbild funktioniert, erzeugt aber je Artikel
  einen 404. Betrifft nur die Muster-Daten.

### Nachtrag: Rechts-Maske ließ sich nicht schließen (v=152)

Hasan meldete: Impressum und Datenschutz öffnen sich, aber nach dem Schließen
bleibt ein Kasten stehen, der unter die Kopfleiste rutscht und sich nicht mehr
wegklicken lässt.

**Ursache** (gemessen, nicht vermutet): `.rechts-maske` trug ein unbedingtes
`display: flex`. Browser blenden einen geschlossenen `<dialog>` über ihre
eingebaute Regel `dialog:not([open]) { display: none }` aus — eine Autor-Regel
mit `display` schlägt sie. Nach `close()` war `open=false`, aber
`display: flex` und die Höhe blieb 650 px. Ohne `showModal` liegt das Element
dann nicht mehr im Top-Layer, sondern normal im Fluss: unter der Kopfleiste,
ohne erreichbaren Schließen-Knopf.

**Fix:** `display`/`flex-direction` nur noch unter `.rechts-maske[open]`.
Nachgemessen über beide Schließwege (× und Esc): `display: none`, Höhe 0.
Die übrigen Masken (`.maske`, `.bild-maske`) setzen kein `display` und waren
nie betroffen.

**Merksatz:** Bei `<dialog>` niemals `display` ohne `[open]` setzen.

**Cache:** `style.css` **v=152**, `main.js` **v=28**, `thema.js` **v=2**,
`goatcounter.js` **v=1**, `produkte.js` **v=11**, `shop-<code>.js` **v=2**.

### Übergabe / Nächster Schritt

**Stand:** Alles committet und auf GitHub Pages veröffentlicht (Staging, weiter
per `robots.txt` gesperrt). Die Website läuft, keine bekannten Fehler.

**Nächste Session startet mit:** dem Kundentermin. Hasan trifft Norbert und
klärt die Punkte, die nur der Kunde beantworten kann (siehe unten). Erst danach
lohnt weitere Arbeit am Shop.

**Entscheidungen, die Norbert treffen muss:**
1. **WhatsApp-Nummer** — die Knöpfe zeigen jetzt auf `0176 8696 1032`. Nutzt er
   auf dieser Nummer WhatsApp? Falls nicht: welche Nummer?
2. **Produkte** — echte Artikel, Preise, Verfügbarkeiten und Fotos. Solange
   Muster-Daten stehen, bleibt der Hinweis-Kasten und die `robots.txt`-Sperre.
   28 der 144 Artikel haben kein eigenes Foto.
3. **Kundenstimmen** — die 18 Bewertungen sind erfunden und als „BEISPIEL"
   markiert. Echte Stimmen einholen oder den Abschnitt entfernen.
4. **Berufshaftpflicht** — im Impressum fehlen Anschrift des Versicherers und
   räumlicher Geltungsbereich (§ 5 Abs. 1 Nr. 7 DDG). Steht als Platzhalter.
5. **AGB und Widerrufsbelehrung** — fehlen noch, bei Verkauf an Verbraucher
   Pflicht. Die Links in der Kasse zeigen derzeit ins Leere (`href="#"`).
6. **YouTube und TikTok** — Kanal-Adressen fehlen, die Knöpfe zeigen auf `#`.

**Offene Fragen, die Hasan klären muss:**
- **GoatCounter**: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO ist nicht
  öffentlich hinterlegt; Betreibername, Rechtsform und Anschrift ebenfalls
  nicht. Bei `support@goatcounter.com` anfragen und in Abschnitt 5 der
  Datenschutzerklärung nachtragen. Nichts erfinden.
- **GoatCounter**: eigene IP unter „Ignore IP addresses" eintragen, sonst zählen
  Norberts und Hasans eigene Aufrufe mit.
- **Rechtstexte gegenlesen lassen.** Sie tragen keinen Entwurfs-Hinweis mehr.
  Besonders: das Restrisiko nach § 25 TDDG bei der Reichweitenmessung.

**Verschoben (bewusst, nicht vergessen):**
- ~90 Zeilen tote CSS-Regeln entfernen (Liste in TODO.md).
- Kennfarben-Palette als Tokens zusammenfassen — dieselben fünf Farben stehen
  vierfach im Stylesheet (`.vp-*`, `.lk-*`, `.av-*`, `.vt-*`).
- Die beiden Hintergrund-Videos (18 MB) stärker komprimieren.
- Beim echten Livegang: `robots.txt` freigeben, `CNAME` für die eigene Domain
  anlegen, `noindex` auf Impressum/Datenschutz bewusst entscheiden.

## Aufgabe dieser Datei

Chronik der Arbeit am Projekt — neueste Einträge oben.

## 2026-07-10 (später) — Textflächen: Bilder bleiben stark, Text wird lesbar

Hasans Freigabe für die saubere Lösung. Die Textblöcke bekommen selbst
eine leicht deckende Fläche (88 % `--flaeche`, feiner Rand, `backdrop-filter`),
so wie es die Karten schon hatten. Das Bild bleibt rundherum voll sichtbar
und der Schleier kann bei 15 % bleiben.

**Warum 88 %?** Gerechnet, nicht geraten. Über der dunkelstmöglichen
Bildstelle (Schwarz) ergibt `#faf9f5` bei 88 % die Farbe RGB (220, 219, 216):

| Thema | Textfarbe | schlechtester Kontrast |
|---|---|---|
| Hell | `#000000` | 15,2:1 |
| Hell | Leisetext `#1d1d1d` | 12,2:1 |
| Hell | Titel `#17435e` | 7,6:1 |
| Dunkel | `#e1e5e8` | 8,5:1 |
| Dunkel | Leisetext `#a4b1ba` | **4,9:1** |
| Dunkel | Titel `#d7e5ee` | 8,3:1 |

Der ungünstigste Fall (leiser Text im dunklen Thema über einer weißen
Bildstelle) liegt mit 4,9:1 über der Norm von 4,5:1. **WCAG AA ist damit
wieder erfüllt** — und die Fotos wirken trotzdem.

**Betroffene Elemente** (alle per CSS, kein HTML angefasst):
`.held-raster > div:first-child`, `.abschnitt-kopf`, `.seitenkopf > .rahmen`,
`.vorstellung`, `.kachel-name`, `.sortier-feld`, `.liste-info`,
`#korb-leer`, `#kasse-leer`. Die letzten sechs kamen erst durch eine
Sichtprüfung aller sieben Seiten dazu — dort stand Text noch nackt auf dem
Bild (Shop-Bereichszeilen, Sortierleiste, Artikelzahl, Leer-Hinweise,
Textspalte auf „Über mich").

**Verworfenes Messverfahren, offen gesagt:** Ein Versuch, den Kontrast an
den echten Textpixeln zu messen (zwei Aufnahmen, einmal mit
`color: transparent`, Differenz = Schrift), lieferte unbrauchbare Werte —
die Einblend-Animationen (`.einblenden`) zeigen in beiden Aufnahmen
verschiedene Zustände, die Differenz fand Bildflächen statt Schrift. Die
Zahlen wurden verworfen statt geglättet. Belastbar ist die obige Rechnung
plus Sichtprüfung.

**Bild für „Leistungen" (hell) getauscht** auf Hasans Wunsch:
`007-badewanne-eukalyptus-oel-hell-real-5k.png` (5120×2880). Das alte
`003-aloe-hydrogel-hell-real-5k.png` liegt unangetastet in
`2 Leistung/Hell/_ersetzt/`.

**Nachbesserung am selben Tag (Hasans Vorgaben):**

- **Kopf-Kästen laufen über die volle Rasterbreite**, bündig mit dem
  Inhalt darunter — aber als eigener Kasten, nicht mit ihm verbunden.
  Nur die Textzeilen darin bleiben auf 700 px begrenzt (Lesbarkeit).
- **Neue Tafel für die Bilder-Galerie** auf der Startseite: Kopf und
  Fotos sitzen auf EINER Fläche über die volle Breite. Grund reinweiß
  im hellen, **tief schwarz** im dunklen Thema (neues Token `--tafel`,
  92 % Deckkraft). Klasse `.abschnitt-tafel` auf allen sieben
  index-Seiten gesetzt.
- **Bewusst KEINE Tafel** bei Abschnitten, die schon eigene Karten
  tragen: Kontakt-Formular, Abgrenzung auf „Leistungen",
  Produkt-Kacheln, „Über mich". Dort stünde sonst Kasten in Kasten.
  Hasans ausdrückliche Ansage. Ein erster Versuch, alle `.abschnitt`
  pauschal zu Tafeln zu machen, wurde deshalb zurückgenommen.

- **Alle Kopf-Kästen sind jetzt Tafeln** (Hasans Vorgabe): Grund reinweiß
  im hellen, **tief schwarz** im dunklen Thema (`--tafel`, 92 %). Betrifft
  Seitenköpfe, Abschnitts-Köpfe, die Held-Textspalte und den Bereichs-Kopf.
- **Schrift und Höhe im Kopf nachgezogen:** Titel `clamp(28px, 5.4vw, 42px)`
  mit engerer Zeilenhöhe, Vorspann 19 px, Textbreite 640 px (ausgewogener
  Umbruch), letztes Element ohne Abstand nach unten — die Tafel wirkte
  sonst unten leer.
- **Fehler gefunden und behoben:** Der eigene Innenabstand der Tafel
  ersetzt das `padding-inline: 18px` von `.rahmen`. Ohne Gegenmaßnahme
  klebten die Tafeln auf schmalen Fenstern am Bildschirmrand. Gelöst über
  `max-width: min(var(--breite), 100% - 36px)`; bei 500 px und 1000 px
  gegengeprüft.

- **Kontakt: Kopf und die vier Knöpfe in EINER Tafel** (Hasans Vorgabe).
  Dafür wurde der Block `.kontakt-wege` per Skript aus der Abschnitts-Section
  in den Kopf-Rahmen verschoben — in allen **sieben** kontakt-Seiten, die
  arabische RTL-Fassung eingeschlossen (Knopfreihe spiegelt korrekt).
  Das Formular bleibt darunter als eigene Karte. Im CSS ist die Knopfreihe
  von der 640-px-Textbreite ausgenommen.
- **Karten in Tafeln abgesetzt** (neues Token `--karte-auf-tafel`:
  `#f1eee6` hell, `#131b22` dunkel). Auf reinweißem bzw. tiefschwarzem
  Grund verschwänden Karten sonst. Betrifft heute die Kontakt-Kacheln;
  die Regel greift ebenso für alles, was künftig in `.abschnitt-tafel`
  landet. In der Bilder-Galerie liegen nur Fotos, keine Karten.

- **Kopf-Typografie nachgeschärft** (Hasans Feinschliff): Überzeile 16 px
  mit weiterem Sperrsatz und 18 px Abstand zur Überschrift, dichter am
  oberen Rand der Tafel; Titel eine Spur kleiner (`clamp(26px, 4.6vw, 36px)`);
  Vorspann 17 px und auf 780 px Breite verteilt, damit er höchstens zwei
  ausgewogene Zeilen bildet.

- **Kontakt-Formular ist eine eigene Tafel** (schwarz/weiß wie der Kopf),
  die Eingabefelder je Thema getrennt:

  | Thema | Tafel | Feld | Schrift | Kontrast |
  |---|---|---|---|---|
  | Hell | weiß | grau `#e3e1da` | `#14181c` | 13,6:1 |
  | Dunkel | tief schwarz | weiß `#eeebe4` | `#14181c` | 15,0:1 |

  Reinweiß wurde bewusst vermieden — es flimmert auf schwarzem Grund.
  Platzhalter `#5b5f63` liegt bei 4,9:1 bzw. 5,4:1, also über der Norm.

  **Fallstrick, der mich erst auflaufen ließ:** Das Kontakt-Formular ist
  `<form class="kasse-formular" id="kontakt-formular">` — es **teilt die
  Klasse mit der Kasse**. Der erste Versuch zielte auf `.formular`; diese
  CSS-Klasse wird von **keinem** HTML benutzt (tote Regel), die Änderung
  hatte also gar keine Wirkung. Jetzt wird über die ID gezielt, damit die
  Kasse nicht mitgefärbt wird. Gegengeprüft: Kasse unverändert.

- **Breiten vereinheitlicht:** `.formular-mitte` (vorher 920 px) ist von
  seiner Sonderbreite befreit; Tafeln stehen auf
  `min(var(--breite) - 36px, 100% - 36px)`, also auf der Kante des Inhalts
  eines normalen `.rahmen`. Kopf-Tafel und Formular fluchten auf jeder
  Fensterbreite.

- **Einzugsgebiet ebenso in EINE Tafel:** Die Orts-Liste (`ul.orte-liste`)
  wurde per Skript in den `.abschnitt-kopf` gezogen — in allen sieben
  kontakt-Seiten. Überschrift und Orte stehen jetzt auf derselben Fläche,
  die Chips tragen `--karte-auf-tafel`. Die Zwei-Klick-Karte bleibt
  darunter als eigene Tafel.

- **Umbruch in den Kopf-Überschriften behoben:** Die 640-px-Textbreite
  hatte auch Überzeile und Überschrift erfasst — „Unterwegs in Stuttgart
  und Umgebung" brach dadurch unnötig um. Überschriften nutzen jetzt die
  volle Tafelbreite (`text-wrap: balance` für schmale Fenster), nur der
  Vorspann bleibt auf 760 px und damit bei zwei Zeilen. Abschnitts-
  Überschrift und Seitentitel teilen sich die Größe
  `clamp(26px, 4.2vw, 38px)` und bilden die klare Spitze der Hierarchie.

- **Karten-Tafel** (Adresse + Zwei-Klick-Karte) trägt jetzt die Tafel-Optik
  (weiß/tief schwarz). Der Adressblock ist transparent und zeigt den
  Tafel-Grund — er soll sich davon NICHT absetzen (Hasans Vorgabe).

- **Fehler behoben: Karte lief beim Scrollen über die Fußleiste.**
  Leaflet vergibt seinen Ebenen und Bedienelementen z-index-Werte bis 1000.
  Die fixe Fußleiste liegt bei `z-index: 40` — die Kartenkacheln wanderten
  also darüber. Gelöst mit `isolation: isolate` auf `.karten-tafel`: Leaflets
  Werte bleiben damit in einem eigenen Stapel-Kontext innerhalb der Tafel.

- **Quellen-Zeile unter der Karte entfernt** (`.gebiet-quelle`, 7 Seiten,
  dazu die tote CSS-Regel). **Die Lizenzhinweise sind nicht verschwunden,
  sondern in die Karte gewandert** — sie sind rechtlich Pflicht:
  OpenStreetMap steht unter ODbL (Namensnennung), Sentinel-2 cloudless
  unter CC BY 4.0. `js/main.js` nennt jetzt in der Leaflet-Attribution
  „© OpenStreetMap-Mitwirkende (ODbL)" mit Link auf die Copyright-Seite
  und „Sentinel-2 cloudless © EOX IT Services GmbH (CC BY 4.0)" mit Link
  auf s2maps.eu. Der Hinweis zur Zwei-Klick-Lösung steht weiterhin im
  Aktivieren-Overlay und in der Datenschutzerklärung.

- **Schrift-Hierarchie umgedreht — Hasans Regel, dreimal angesagt:**
  Die Rubrik-Zeile („EINZUGSGEBIET", „KONTAKT & TERMIN") ist die
  **größte** Schrift (`clamp(20px, 2.8vw, 30px)`), der Titel darunter
  tritt zurück (`clamp(19px, 2.4vw, 26px)`), der Vorspann ist am
  kleinsten (16 px). Größen fallen von oben nach unten.
  Semantisch bleiben `h1`/`h2` die Überschriften — für Suchmaschinen und
  Screenreader zählt die Auszeichnung, nicht die Schriftgröße.
  Die Regel steht jetzt in `CLAUDE.md`, damit sie nicht wieder verloren geht.

- **Kundenstimmen-Band auf eigener Tafel** (`.abschnitt-tafel`, schwarz
  bzw. weiß). Die Stimmen-Karten bleiben klein und seitlich rollbar; sie
  setzen sich per `--karte-auf-tafel` vom Grund ab. Sieben Seiten.

- **FAQ-Kopf einzeilig:** Die zweite Zeile („Gut zu wissen vor dem ersten
  Termin") ist entfallen. Damit die Seite ihre Überschrift nicht verliert,
  wurde die Rubrik-Zeile selbst zum `<h2 class="ueberzeile">` — sie ist
  nach Hasans Hierarchie ohnehin die optische Hauptüberschrift. Die
  h2-Grundregel (Titelschrift, Titelfarbe) wird für diesen Fall
  überschrieben, damit die Rubrik-Optik erhalten bleibt.

- **Kopf-Kästen zwei Punkte kleiner und flacher** (Hasans Vorgabe, gilt
  einheitlich für ALLE Kopf-Kästen der Website):

  | Element | vorher | jetzt |
  |---|---|---|
  | Rubrik (`.ueberzeile`) | `clamp(20px, 2.8vw, 30px)` | `clamp(18px, 2.4vw, 28px)` |
  | Titel (`h1`/`h2`) | `clamp(19px, 2.4vw, 26px)` | `clamp(17px, 2.2vw, 24px)` |
  | Innenabstand | `clamp(18px, 2.4vw, 28px)` | `clamp(14px, 1.8vw, 22px)` |

  Ein Kopf, der nur die Rubrik trägt (FAQ), wird über
  `:has(> h2.ueberzeile:only-child)` zusätzlich flacher. Browser ohne
  `:has()`-Unterstützung zeigen ihn schlicht etwas höher — nichts bricht.

- **Drei weitere Tafeln** (je sieben Sprachen): Leistungs-Karten und
  Preisliste auf `leistungen.html`, „Ihr Hausbesuch in vier Schritten" auf
  `index.html`. Die Preistabelle und ihre Zeilen setzen sich per
  `--karte-auf-tafel` ab. Die Abschnitte wurden über ihren Inhalt erkannt
  (`.karten-raster`, `.preis-tabelle`, `.schritt`), nicht über
  Zeilennummern.
- **Ohne Tafel bleibt weiterhin die Abgrenzung** („Das übernehme ich" /
  Podologie) auf `leistungen.html` — dort stehen eigene Karten, es gäbe
  Kasten in Kasten. Ebenso Kontakt-Formular und Produkt-Kacheln.

- **„Über mich" als Tafel, Porträt nach rechts** (`ueber-mich.html`, sieben
  Sprachen): Der Abschnitt `.person-raster` wird zur Tafel. Damit kein
  Kasten in Kasten entsteht, verlieren die beiden Spalten (`.vorstellung`
  und die Bild-Spalte) darin ihre eigene Textfläche — Grund, Rand und
  Innenabstand werden zurückgesetzt. Ab 840 px tauschen die Spalten per
  `order` die Seite (Bild rechts, Text links); die Spaltenbreiten drehen
  mit (`0.85fr / 1.15fr`), damit das Porträt die breitere Spalte behält.
  Unter 840 px bleibt die einspaltige Reihenfolge: Bild oben, Text darunter.
  Der Hinweis-Kasten „Mein Anspruch" behält bewusst seine Hervorhebung.

  Stand: **42 Tafeln** auf **28 Seiten** (Startseite Galerie + Ablauf,
  Leistungen ×2, Kundenstimmen, Kontakt, „Über mich" — je sieben Sprachen).

- **Qualifikations-Kopf einzeilig** (`ueber-mich.html`, sieben Sprachen):
  „Meine Stationen" entfällt, die Rubrik „Qualifikation" wird selbst zum
  `<h2 class="ueberzeile">` — dieselbe Lösung wie beim FAQ-Kopf. Der Kasten
  eines solchen Nur-Rubrik-Kopfes ist jetzt rund halb so hoch wie ein
  zweizeiliger (`padding-block: clamp(9px, 1.1vw, 13px)` statt `12–18px`).
  Betrifft auch den FAQ-Kopf auf `kundenstimmen.html` — beide bleiben so
  gleich hoch.

- **Ring um die Symbol- und Nummern-Kreise entfernt** (`.vertrauen-punkt
  svg`, `.schritt::before`). Der Ring war ein `box-shadow: 0 0 0 5px
  var(--ring)` in Hintergrundfarbe. Solange die Abschnitte einfarbig waren,
  verschwand er im Grund; über den Hintergrundbildern und auf den schwarzen
  Tafeln stand er als sichtbarer Rahmen um die Kreise. Der Token `--ring`
  ist damit unbenutzt und wurde aus beiden Themen gestrichen.

- **Kopf- und Fußleiste metallisch schwarz** — in **beiden** Themen gleich.
  Vorher lag über beiden ein Verlauf mit grauer Mitte (`rgba(42,46,52,…)`)
  plus `backdrop-filter`, wodurch das Hintergrundbild durchschimmerte. Jetzt
  teilen sich `.kopf` und `.fuss` einen deckenden Grund aus drei Lagen:
  Streiflicht quer (`linear-gradient(100deg, …)`), eine feine senkrechte
  Bürstung (`repeating-linear-gradient(90deg, … 1px 3px)`) und darunter
  `#14181d → #05070a → #000`. Der `backdrop-filter` entfällt (deckend, spart
  Rechenzeit). Die Tokens `--kopf-hg` waren bereits unbenutzt und wurden
  entfernt.

- **Logo in der Kopfleiste freigestellt** — neue Datei `bilder/logo-frei.png`
  (256 px, Palette mit weichem Alpha, 27 KB). Der schwarze Kachel-Grund ist
  weg, das Wappen steht direkt auf der Metall-Leiste.

  Ein einfacher „Schwarz raus"-Schlüssel war nicht möglich: das Wappen
  enthält selbst tiefschwarze Flächen (Füße, Schild-Grund). Entfernt wurde
  darum nur das Schwarz, das vom Bildrand aus zusammenhängend erreichbar ist
  (Flood-Fill über alle Pixel mit Helligkeit < 96). Im Außenbereich ergibt
  sich die Deckkraft weich aus der Helligkeit (`(L − 24) / (96 − 24)`),
  damit keine harte Treppe und kein schwarzer Saum entsteht — 118 Alpha-
  Stufen bleiben erhalten.

  **Nur die Kopfleiste** nutzt das freigestellte Bild. Favicon
  (`logo-klein.png`), `apple-touch-icon.png` und `og-bild.jpg` behalten
  ihren schwarzen Grund: der Flood-Fill nimmt auch die Kreisscheibe hinter
  dem Wappen mit, weshalb die Füße auf hellem Grund weiß erschienen. Auf der
  jetzt in beiden Themen schwarzen Leiste spielt das keine Rolle.

- **Logo größer**: `.marke-zeichen` von 62 auf **76 px** (unter 480 px von 34
  auf **42 px**). Das freigestellte Wappen hat im Quadrat Luft am Rand und
  wirkte darum kleiner als die frühere Kachel. Die Kopfleiste wächst dadurch
  von 66 auf 76 px; auf 500 px und 700 px Breite bleibt die Zeile einreihig.

- **Versuch verworfen: Edelstein-Band in der Kopfleiste.** Ein Band aus
  `futuristic-gem-water-8k-05.png` als Grund der Kopfleiste wirkte unruhig
  und wurde zurückgenommen. Beide Bilder liegen in `~/.Trash`, die Leiste ist
  wieder metallisch schwarz. Die Messungen dazu bleiben nützlich: Die
  schärfste Zone des Fotos liegt bei y = 2600 (Kantenvarianz 147 gegenüber
  30 bei y = 1800 — dort greift die Tiefenunschärfe der Aufnahme).

- **Logo und Kopfleiste kompakter**: `.marke-zeichen` 76 → **60 px** (unter
  480 px 42 → **36 px**), `.kopf-innen` `min-height` 66 → **58 px**. Die
  Leiste ist damit 60 px hoch statt 76.

- **Freistehende Kacheln jetzt schwarz** (hell: weiß): `.vertrauen-punkt`,
  `.schritt`, `.vergleich-tafel` und `.faq-frage` nutzen `var(--tafel)` statt
  `var(--flaeche)`. Das betrifft nur Kacheln, die direkt über einem
  Hintergrundbild stehen. Kacheln **auf** einer Tafel behalten
  `--karte-auf-tafel` — die Regeln dort sind spezifischer und greifen weiter.

- **Held-Block auf der Startseite: Größen und Verteilung.**
  - Schrift-Stufen deutlicher getrennt: Firma 39 → **34 px**, Firmen-Zusatz
    17 → **15 px**, Slogan 26 → **23 px**, Fließtext 20 → **19 px**.
  - Die Text-Spalte verteilte ihre Blöcke mit `space-between` über die volle
    Bildhöhe — dadurch klafften unterschiedlich große Lücken. Jetzt
    `justify-content: center` mit einem einheitlichen `gap`
    (`clamp(20px, 2.4vw, 34px)`).
  - Die Haupt-Knöpfe hatten `max-width: 280px` und standen mittig in ihrer
    Rasterhälfte, also nicht bündig zur Textkante. Jetzt füllen sie ihre
    Hälfte (`max-width: none`, `justify-self: stretch`).
  - Die vier Sozial-Kacheln lagen in zwei `.sozial-paar`-Flexboxen mit
    eigener Mittelachse — ungleiche Breiten, ungleiche Abstände. Die Paare
    lösen sich jetzt per `display: contents` auf, alle vier Kacheln liegen im
    selben `repeat(4, 1fr)`-Raster: gleiche Breite, gleicher Abstand, außen
    bündig mit den Knöpfen darüber.

- **Produkt-Bereiche: 9 statt 8, im 3×3-Raster** (alle sieben Sprachen).
  „Werkzeuge, Instrumente & Hygiene" ist wieder getrennt in
  **Werkzeuge & Instrumente** (`w`) und **Hygiene & Desinfektion** (`d`) —
  damit ergeben neun Bereiche genau drei Reihen zu drei Kacheln.

  - Die acht `d`-Artikel trugen seit 07.07. `kat: 'w'` und wurden zurückgehängt.
    Beide Bereiche waren danach halb leer, also **16 neue Muster-Artikel**
    geschrieben (w3, w8, w11–w16 und d8, d10–d16). Jetzt **144 Artikel**
    (9 × 16), in allen sieben Sprachen vollständig übersetzt — je ein
    Sprach-Agent für tr/en/pl/ru/ar/zh.
  - Bereichsbild `bilder/kachel-hygiene.jpg`: quadratischer Ausschnitt aus
    dem vorhandenen Artikelbild `bilder/produkte/d5.jpg`
    (Instrumenten-Sterilisation, ohne Gesicht). Ein eigenes Bereichsfoto gibt
    es dafür nicht.
  - **Die 16 neuen Artikel haben kein eigenes Foto.** Sie greifen auf den
    vorhandenen `onerror`-Rückfall zurück und zeigen das Bereichsbild. Vor
    dem Livegang mit echten Produktfotos ersetzen (siehe TODO).

  Kachel-Raster: `.kachel` ist jetzt **quadratisch** (`aspect-ratio: 1/1`)
  statt 16:9, ab 900 px drei Spalten. Damit alle Kacheln einer Reihe auf
  einer Linie stehen — auch wenn ein Name zwei Zeilen braucht und arabische
  Zeilen höher sind — liegen Name und Kachel per **`subgrid`** in gemeinsamen
  Rasterzeilen (`grid-row: span 2`). Browser ohne `subgrid` bekommen über
  `min-height` denselben Effekt.

- **Bereichs-Name liegt jetzt IM Bild** (`.kachel-name`), nicht mehr in einem
  eigenen Kasten darüber. Der Name ist absolut über die Kachel gelegt
  (`pointer-events: none`, der Klick geht durch). Damit weiße Schrift auch auf
  hellen Fotos lesbar bleibt, liegt darunter ein Verlauf von Schwarz nach
  Durchsichtig — ein Rahmen wäre wieder ein Kasten.

  Deckkraft gerechnet, nicht geschätzt: die Kopfzone der Kachelbilder erreicht
  im 95. Perzentil Luminanzen bis **0,98** (Nagelpflege) bzw. 0,86
  (Werkzeuge). Bei 74 % Schleier ergäbe das nur 2,8:1. Bei **86 %** bleiben
  0,137 → **4,7:1**, also WCAG AA auch für die kleine Zeile „16 Artikel"
  (15 px, braucht 4,5:1).

  `.kachel-name` wurde dafür aus den vier Selektor-Listen des Blocks
  „Textflächen und Tafeln" entfernt. Die `subgrid`-Lösung von vorhin entfällt —
  der Name nimmt keinen Platz mehr im Fluss ein, alle Kacheln stehen ohnehin
  auf einer Linie.

- **„16 Artikel" kleiner**: 15 → 13 px. Weil kleinere Schrift mehr Kontrast
  braucht, gleichzeitig von 86 % auf 92 % Weiß — sonst rutscht sie unter 4,5:1.

- **Impressum und Datenschutz öffnen als Maske**, nicht mehr als neue Seite.
  Der Fußzeilen-Link behält sein `href`; JavaScript fängt den Klick ab, holt
  dieselbe Datei per `fetch`, schneidet `.rechtstext` heraus und zeigt ihn im
  `<dialog class="maske rechts-maske">`.

  **Warum die Seiten bleiben:** § 5 DDG verlangt, dass das Impressum
  unmittelbar erreichbar ist. Beides ist weiterhin eine echte Seite, direkt
  aufrufbar, ohne JavaScript nutzbar und für Suchmaschinen sichtbar. Schlägt
  `fetch` fehl (z. B. Aufruf über `file://`), führt der Link ganz normal auf
  die Seite. `Strg`/`Cmd`-Klick öffnet weiter einen neuen Tab.

  Aufbau der Maske: fester Kopf (Titel + Schließer) und darunter ein
  rollender Körper (`overflow-y: auto`, `overscroll-behavior: contain`).
  Höhe `min(80dvh, 760px)` — die Maske wird nie länger als der Bildschirm,
  der Titel bleibt beim Rollen stehen. Fließtext im **Blocksatz** mit
  Silbentrennung; unter 560 px linksbündig, weil Blocksatz in einer schmalen
  Spalte Löcher reißt. Abschnitte sind durch feine Linien getrennt, Kopf und
  Körper teilen sich `--tafel`.

  Externe Links in der Maske bekommen `target="_blank"`, damit die Maske nicht
  hinterrücks verlassen wird.

  Die Sprachordner verlinken weiterhin auf die **deutschen** Rechtsseiten
  (`../impressum.html`) — daran ändert die Maske nichts.

- **Kopfzeilen-Knöpfe weiter auseinander**: `.kopf-rechts` `gap` 10 → 16 px.
  Unter 480 px bleibt es bei 2 px, sonst passt die Zeile nicht mehr.

- **Entwurfs-Hinweise entfernt** aus `impressum.html` und `datenschutz.html`
  (die beiden `.abgrenzung`-Kästen). Das **Stand-Datum** der
  Datenschutzerklärung steht jetzt fest: `<time datetime="2026-07-10">10. Juli
  2026</time>` statt Platzhalter. Damit gelten beide Texte als fertig — der
  letzte Platzhalter auf den Rechtsseiten ist weg.

- **Köpfe umgebaut: Rubrik führt, alles linksbündig** (alle sieben Sprachen).
  Hasans Muster vom 10.07., zuerst an der Galerie-Tafel erprobt:

  | Kopf | vorher | nachher |
  |---|---|---|
  | Galerie (index) | Rubrik / h2 / Vorspann | nur Rubrik |
  | Ablauf (index) | Rubrik / h2 | nur Rubrik |
  | Preisliste (leistungen) | Rubrik / h2 / Vorspann | nur Rubrik |
  | Kundenstimmen (Seitenkopf) | Rubrik / h1 / Vorspann | nur Rubrik |
  | Kontakt (Seitenkopf) | Rubrik / h1 / Vorspann | nur Rubrik (Knöpfe bleiben) |
  | Über mich (Seitenkopf) | Rubrik / h1 / Vorspann | Rubrik + Titel **nebeneinander** |
  | Produkte (Seitenkopf) | Rubrik / h1 / Vorspann | Rubrik + Titel nebeneinander |
  | Leistungen (Seitenkopf) | Rubrik / h1 / Vorspann | Rubrik + Titel nebeneinander |
  | Abgrenzung (leistungen) | Rubrik / h2 / Vorspann | Rubrik + Titel nebeneinander |

  **Semantik bleibt:** Die Rubrik-Zeile wird selbst zum `h1` (Seitenköpfe)
  bzw. `h2` (Abschnitte); jede Seite hat weiterhin genau eine `h1` (geprüft).
  Steht ein Titel daneben, sitzt er als `<span class="kopf-titel">` **in** der
  Überschrift — eine Zeile, `flex` mit `flex-wrap`, auf schmalen Schirmen
  rutscht er darunter. `text-align: start` statt `center` für `.seitenkopf`
  und `.abschnitt-kopf` — im arabischen RTL-Layout spiegelt das automatisch.

  Die Kopf-Kästen sind deutlich flacher: 8/9 px Innenabstand bei reiner
  Rubrik, 11/13 px mit Titel daneben; die Tafel darüber rückt auf 12 px heran,
  der Abstand nach unten von 36 auf 14 px.

  **Nicht angetastet:** Der Abgrenzungs-Inhalt auf `leistungen.html` (die zwei
  Vergleichs-Kacheln und der Podologengesetz-Kasten). Nur der einleitende
  Satz darüber ist entfallen — er wiederholte, was darunter ausführlich steht.

  Nachgereicht: Der **Galerie-Kopf** war zunächst nur deutsch umgebaut (Hasans
  Probelauf) und wurde in den sechs Sprachordnern nachgezogen. Gegenprobe über
  alle neun Shop-/Inhaltsseiten × sieben Sprachen: identische Kopf-Struktur,
  kein `<span class="ueberzeile">` mehr im Projekt.

  Nachgezogen (10.07., zweiter Durchgang): **Einzugsgebiet** (kontakt) nur
  Rubrik — die Orte-Kacheln stehen weiter im selben Kopf, die 50-km-Angabe
  bleibt in der Info-Karte unten erhalten. **Warenkorb** und **Kasse**: Zeile 2
  entfällt, der Vorspann rückt neben die Rubrik — als `<span class="kopf-zusatz">`
  in Fließtext-Schrift, nicht als Titel, sonst kippt die Hierarchie.

- **Warenkorb-Breite angeglichen**: `.korb-rahmen` war auf 900 px begrenzt und
  stand schmaler als die Kopf-Tafel. Jetzt dieselbe Formel
  (`min(calc(var(--breite) - 36px), 100% - 36px)`) und `padding-inline: 0`,
  damit die Kanten fluchten. (`max-width: none` allein war falsch — das hebt
  auch die 1120-px-Grenze von `.rahmen` auf, der Inhalt lief über die Seite.)

- **Copyright-Zeile aus der Fußleiste entfernt** (alle 65 Seiten). Übrig
  bleiben Impressum und Datenschutz, **links bündig** mit der Tafel darüber
  (gemessen: beide Kanten bei 112 px, Fenster 1300 px): `.fuss-innen` von
  `space-between` auf `flex-start` (v=142, davor kurz `center`), und das
  `margin-inline-start: auto` an `.fuss-links` musste weg — es stammte aus dem alten Zwei-Spalten-Aufbau und
  drückte die Links weiter nach rechts. Der Jahres-Block in `main.js`
  (`[data-jahr]`) hatte kein Ziel mehr und wurde gelöscht.

  Rechtlich unbedenklich: Ein Copyright-Vermerk ist keine Pflicht, das
  Urheberrecht besteht ohne ihn. Der Hinweis im Impressum bleibt.

- **Held-Knöpfe: eine Zeile, gleiche Breite — in allen Sprachen.**
  „Termin anfragen" ist kurz, „Request an appointment" und „Записаться на
  приём" sind es nicht. Die Knöpfe wurden zweizeilig, wuchsen in der Höhe und
  schoben die Sozial-Leiste nach unten; das Symbol rutschte nach oben.

  - `white-space: nowrap` erzwingt eine Zeile, die Schriftgröße skaliert
    stattdessen mit der Spaltenbreite (`clamp(14px, 1.15vw, 18px)`).
  - `grid-template-columns: 1fr 1fr` machte die Knöpfe **ungleich breit**:
    eine `1fr`-Spalte wächst mit ihrem Textinhalt (bei 700 px stand englisch
    215 gegen 137 px). Jetzt `minmax(0, 1fr)`.
  - Zwischen 840 und 1100 px ist die Textspalte zu schmal für zwei einzeilige
    Knöpfe — dort stehen sie untereinander über die volle Breite.

  Nachgemessen über sieben Sprachen × zehn Fensterbreiten (500–1440 px):
  überall gleiche Breite, gleiche Höhe, kein Überlauf.

- **Hauptüberschrift golden**: `.held-firma` nutzt `var(--sand)` — dasselbe
  Gold wie das Logo. Kontrast gerechnet: hell 3,55:1, dunkel 11,5:1. Die Zeile
  ist 34 px fett, gilt also als große Schrift (Schwelle 3,0:1) — WCAG AA
  erfüllt. Für Fließtext wäre dieses Gold zu schwach.

- **Held-Textblock beginnt oben** statt vertikal mittig
  (`justify-content: flex-start`, Innenabstand oben 14 → 4 px).

- **Leerraum unter dem Held-Block beseitigt** (v=136): Das Porträt hatte ein
  festes `aspect-ratio` und war damit oft kürzer als die Textspalte. Jetzt
  `aspect-ratio: auto; align-self: stretch; min-height: 420px` — das Bild
  zieht sich auf die Höhe der Textspalte, beide Spalten enden bündig. Die
  Abstände in der Textspalte skalieren mit (`gap: clamp(20px, 2.4vw, 32px)`).

- **Held-Textspalte füllt die Tafel** (v=139): `justify-content: space-between`
  statt `flex-start` — Überschrift oben, Knopf-Block unten, der freie Platz
  verteilt sich gleichmäßig auf die drei Zwischenräume. Ein
  `margin-block-start: auto` am Knopf-Block (v=137) war falsch: es schob nur
  die Knöpfe nach unten und ließ ein großes Loch darüber stehen.

- **Leisten bleiben schwarz — endgültig.** Ein Versuch, Kopf- und Fußleiste im
  Hellmodus marineblau einzufärben (`--leiste-*`-Tokens), wurde von Hasan
  verworfen: „so wie es war". Beide Themen tragen dasselbe metallische Schwarz
  (`#05070a`). Nicht erneut vorschlagen.

- **Logo öffnet sich groß** (`main.js` v=27, `style.css` v=149): Klick auf das
  Wappen in der Kopfleiste zeigt es in derselben Bild-Maske wie die Galerie —
  Klasse `.logo-maske`, 520 px breit statt 1100 px (quadratisch, sonst
  erschlagend). Gezeigt wird `logo.png` (800 px, mit Kachel-Grund), nicht das
  freigestellte `logo-frei.png`. Der Pfad wird aus dem `src` der Kopfleiste
  abgeleitet, damit er in den Sprachordnern (`../bilder/…`) stimmt.
  Progressive Enhancement: Das `href="index.html"` bleibt im HTML — ohne
  JavaScript, mit Cmd/Strg-Klick oder mittlerer Maustaste führt das Logo
  weiter zur Startseite.

- **Besucherzähler GoatCounter** (Konto `norbert`, alle 65 Seiten). Der
  offizielle Weg (`<script src="//gc.zgo.at/count.js">`) schied aus zwei
  geprüften Gründen aus: das Skript **liest `localStorage`** (Schlüssel
  `skipgc`) und wertet **kein Do-Not-Track** aus. Das Auslesen des Endgeräts
  ist genau der Tatbestand des § 25 TDDG — es hätte einen Cookie-Banner nötig
  gemacht und die Regel „keine Fremdskripte" gebrochen.

  Stattdessen liegt das Skript lokal unter `js/extern/goatcounter.js` (ISC —
  Änderung erlaubt, Herkunft im Kopf vermerkt). Zwei Eingriffe:
  1. Der `localStorage`-Zugriff ist entfernt (Filter **und** der Schalter
     `#toggle-goatcounter`). Eigene Aufrufe blendet Norbert über
     „Ignore IP addresses" in den GoatCounter-Einstellungen aus.
  2. Neu: Sendet der Browser `doNotTrack` oder `globalPrivacyControl`, wird
     gar nicht gezählt.

  Nachgemessen (Headless-Chrome, `sendBeacon` abgefangen, `localStorage`
  überwacht): ohne Signal genau ein Zählaufruf an
  `norbert.goatcounter.com/count`, die einzigen `localStorage`-Zugriffe der
  Seite stammen aus `thema.js` (`nf-thema`) und dem Warenkorb
  (`nf-warenkorb`). Mit `doNotTrack = '1'`: **null** Aufrufe.

  Datenschutzerklärung: neuer **Abschnitt 5 „Reichweitenmessung
  (GoatCounter)"**, Karte/Rechte/Stand rücken auf 6/7/8; Abschnitt 2
  („keine Inhalte von Drittservern") entsprechend berichtigt. Genannt sind
  Art. 6 Abs. 1 lit. f DSGVO, die Hetzner-Server (Deutschland/Finnland),
  die acht Stunden Sitzungs-Kennung im Arbeitsspeicher und der Widerspruch
  über Do-Not-Track.

- **Fußleiste halbiert** (v=145): 58 → **29 px** (mobil 43 → 28 px).
  `padding-block` 16 → 4 px, Schrift 15 → 14 px, `line-height: 1.45`. Die
  Links sind damit 20 px hoch — unter den 44 px, die für Klickflächen gelten.
  Bewusste Ausnahme wie bei der Kopfleiste unter 480 px: es sind zwei
  Rechts-Links, keine Bedienelemente.

- **Seite startet immer hell** (`js/thema.js` v=2): Bisher folgte sie ohne
  gespeicherte Wahl der System-Einstellung (`prefers-color-scheme: dark`) und
  startete auf dunkel eingestellten Geräten dunkel. Jetzt wird nur noch eine
  eigene Wahl des Besuchers ausgewertet. Gegenprobe mit `--force-dark-mode`:
  Seite bleibt hell.

  Dabei aufgefallen: `thema.js` wurde als einziges Skript **ohne** `?v=`
  eingebunden — auf GitHub Pages hätten Besucher mit altem Cache weiter den
  Dunkelstart bekommen. Trägt jetzt `?v=2` auf allen 65 Seiten.

- **Rubrik-Köpfe kleiner** (v=144, Hasans Vorgabe): Rubrik 28 → **22 px**
  (`clamp(16px, 1.9vw, 22px)`), Titel daneben 24 → **20 px**
  (`clamp(15px, 1.6vw, 20px)`), Vorspann bleibt bei 16 px. Die `vw`-Steigung
  des Titels ist flacher als die der Rubrik, sonst holt er sie in der Mitte
  ein: bei 1000 px standen sie mit 1,85vw fast gleichauf (19 zu 18,5 px).
  Jetzt 19 zu 16 px — die Hierarchie hält über die ganze Spanne.

- **Knopf-Block von der Tafelkante abgehoben** (v=141): `padding-block-end: 42px`
  statt 22 px, Abstand nach unten jetzt 43 px (gemessen bei 900–1440 px).

  **Falle:** Das `padding-block: 4px 10px` an `.held-raster > div:first-child`
  in der 840-px-Regel war seit v=136 wirkungslos. Die Textflächen-Regel
  `body[class*="seite-"] .held-raster > div:first-child { padding: clamp(…) … }`
  hat die höhere Spezifität und gewinnt trotz späterer Position. Wer den
  Innenabstand dieser Tafeln ändert, braucht dasselbe `body[class*="seite-"]`-
  Präfix — sonst passiert gar nichts.

- **Galerie-Bilder liefen aus der Tafel** (v=138): Die 840-px-Regel aus v=136
  galt für **jedes** `.held-bild` — auch für die drei Galerie-Bilder, die
  dieselbe Klasse tragen. `min-height: 420px` erzwang bei 4:3 eine Breite von
  560 px pro Bild, das Raster sprengte die Tafel. Selektor auf
  `.held-raster > .held-bild` verengt. Nachgemessen bei 1300 px: Raster 1010 px,
  drei Bilder à 321 px, rechte Kante genau bündig.

- **Anruf-Knopf ruft an** (alle sieben `index.html`): Der Telefon-Knopf der
  Sozial-Leiste führte auf `kontakt.html`. Jetzt `tel:+4917686961032` —
  Norberts Nummer aus dem Impressum. `aria-label`/`title` nennen die Nummer
  im Klartext und sind übersetzt (Ara / Call / Zadzwoń / Позвонить / اتصل /
  拨打电话). Die Klasse `.sozial-kontakt` bleibt (steuert nur die Farbe).

**Cache:** `style.css` **v=136**, `main.js` **v=28**, `produkte.js` **v=11**,
`shop-<code>.js` **v=2**, Hintergrundbilder `?v=4`,
Logo `?v=1` (jetzt auch `logo-frei.png`).

## 2026-07-10 — Seiten-Hintergründe: je Bereich ein Bild für hell und dunkel

Hasan hat 14 Bilder vorbereitet (`~/Desktop/Norbert Hintergrundbilder/`,
sieben Bereiche × hell/dunkel). Vorgabe: nicht verzerrt, nicht willkürlich
beschnitten, Qualität halten, und auf dem Handy keine langen Ladezeiten.

**Der Zielkonflikt, offen benannt:** Bildschirmfüllend, unverzerrt und
unbeschnitten geht zugleich nicht — die Bilder sind 16:9, ein Handy im
Hochformat ist etwa 1:2. Gewählt: `cover` (füllt, verzerrt nichts,
beschneidet die Ränder). Verzerrung ist damit ausgeschlossen.

**Umwandlung** (Pillow, nur verkleinert, nie hochgerechnet):

- **Drei Stufen** je Bild: 1600 px (Handy), 2560 px (Desktop), 3840 px
  (Retina). Ausgewählt über Fensterbreite (`@media`) **und** Pixeldichte
  (`image-set`, 1x/2x).
- Format WebP. Aus **150,7 MB PNG** wurden **10,3 MB** in 42 Dateien.
- Je Seitenaufruf lädt der Browser genau **ein** Bild: 60–248 KB auf dem
  Handy, 190–743 KB auf einem Retina-Desktop.
  Die Originale im Quellordner sind unberührt.

> **Erst falsch gemacht, dann korrigiert:** Zunächst waren nur zwei Stufen
> bis 2560 px angelegt, mit der Begründung, mehr stelle kein Browser dar.
> Das gilt nur bei einfacher Pixeldichte. Auf einem Retina-Bildschirm
> verlangt ein 2000 px breites Fenster real 4000 Bildpunkte — die Bilder
> wurden hochgerechnet und wirkten unscharf (von Hasan sofort bemerkt).
> Daher die 3840er Stufe und `image-set`. Die Quellen der Bereiche
> **Kundenstimmen** und **Warenkorb** sind nur 1672 px breit; sie können
> die oberen Stufen nicht bedienen und bleiben auf Retina etwas weicher.
> Hochgerechnet wurde bewusst nicht.

**Einbau — bewusst ohne JavaScript:**

- Das vorhandene `.hintergrund-bild` (fest, `cover`, Schleier) wurde
  erweitert statt eine zweite Mechanik daneben zu stellen.
- `<body>` trägt eine Bereichs-Klasse (`seite-start`, `seite-leistungen`,
  `seite-produkte`, `seite-ueber-mich`, `seite-kundenstimmen`,
  `seite-kontakt`, `seite-warenkorb`); das CSS wählt daran vier
  Bild-Variablen (hell/dunkel × klein/groß).
- Die Pfade stehen **in style.css** und sind relativ zum Stylesheet —
  sie gelten damit unverändert in allen sechs Sprachordnern. Kein
  Bildpfad im HTML.
- Der Browser lädt nur das Bild, das die geltende Regel benutzt. Der
  Themenwechsel läuft rein über `data-theme`, ohne Skript.
- Betroffen: **63 Seiten** (alle außer Impressum und Datenschutz —
  reine Rechtstexte bleiben ohne Bild).

**Video-Hintergrund entfernt.** `produkte.html` und `produkt-bereich.html`
hatten seit 07.07. ein Schaum-Video. Da für „Produkte" nun Bilder
vorliegen, ersetzt das Bild das Video (14 Seiten). Der zugehörige
JS-Block in `main.js` wurde entfernt, er lief sonst ins Leere.

**Schleier stark zurückgenommen — auf Hasans ausdrückliche Vorgabe:**
„Fließtext ist jetzt nicht wichtig, die Bilder müssen gut sein."

| | Ausgang | Schritt 2 | jetzt |
|---|---|---|---|
| Hell | 60 % Papierton | 30 % | **15 %** |
| Dunkel | 82 %, dann 74 % | 45 % | **35 %** |

**Zuschnitt auf die scharfe Zone.** Nach dem ersten Schleier-Rückbau blieb
der Eindruck „unscharf mit Schimmer" — zu Recht, aber die Ursache lag
nicht in der Verarbeitung. Die Messung am **Original bei voller
Auflösung** (Kantenvarianz, 1:1-Ausschnitte, keine Skalierung) zeigt:
die Bilder sind fotografisch teilunscharf. Bei `start-hell` steigt die
Schärfe von 155 (oberes Band) auf 388 (unteres Band); der „Schimmer" oben
ist der Wasserdampf im Motiv selbst. Beides lässt sich nicht wegrechnen.

Darum wird je Bild ein 16:9-Fenster mit 75 % der Bildbreite auf die
schärfste Zone gelegt (senkrecht verschoben, waagerecht mittig). Bei
5120×2880 sind das genau **3840×2160 — die große Stufe entsteht damit
ohne jede Skalierung, Pixel für Pixel aus dem Original.** Die kleineren
Stufen werden daraus verkleinert und leicht nachgeschärft (Unsharp Mask),
weil Verkleinern immer Kantenschärfe kostet.

Gewählte Ausschnitte (Beispiele): `start-hell` y 720–2880 (untere Hälfte,
Wasser und Kamelien), `produkte-hell` y 0–2160 (obere Hälfte).
**Kundenstimmen** und **Warenkorb** haben nur 1672-px-Quellen und keine
Reserve zum Zuschneiden; sie werden nur nachgeschärft.

**Preis dafür, gemessen (WCAG AA verlangt 4,5:1 für Fließtext):**

Der Fließtext ist im hellen Thema reines Schwarz. Gemessen wurde der
Hintergrund mit Schleier, ohne Text (Inhalt per `visibility:hidden`
ausgeblendet, Screenshot, relative Luminanz je Bildpunkt):

| Seite | schlechtester Kontrast | Fläche unter der Norm |
|---|---|---|
| index | **1,3:1** | **50,0 %** |
| warenkorb | 1,3:1 | **39,6 %** |
| produkte | 1,4:1 | 1,6 % |
| kontakt | 1,5:1 | 4,8 % |
| kundenstimmen | 1,6:1 | 0,8 % |
| ueber-mich | 2,8:1 | 0,9 % |
| leistungen | 3,3:1 | 0,0 % |

Mit 60 % Schleier lag der schlechteste Wert noch bei 6,4:1 (hell) und
6,0:1 (dunkel), also überall über der Norm. **Der jetzige Stand erfüllt
WCAG AA auf keiner einzigen Seite.** Auf der Startseite liegt die Hälfte
der Fläche darunter. Das ist bewusst so entschieden (Bilder zuerst) und
muss über eigene Flächen hinter den Textblöcken geheilt werden — siehe
TODO. Bei einer Website für die Zielgruppe 45+ ist das kein
Schönheitsfehler, sondern der Punkt, an dem eine Prüfung ansetzt.

**Cache:** `style.css` auf **v=85**, `main.js` auf **v=21**, die
Hintergrundbilder auf `?v=3`.

**Ungenutzt geworden** (nicht gelöscht, Entscheidung offen, siehe TODO):
`bilder/hintergrund-kontakt.jpg`, `hintergrund-hell.jpg`,
`hintergrund-dunkel.jpg`, `hintergrund-hell.mp4` (12,1 MB),
`hintergrund-dunkel.mp4` (5,9 MB) — zusammen 19,5 MB ohne jeden Verweis.

## 2026-07-10 — Logo gewechselt (goldenes Wappen auf schwarzer Kachel)

Auf Hasans Anweisung ersetzt. Quelle ausdrücklich nur diese eine Datei:
`~/Desktop/Norbert Hintergrundbilder/LOGO/10-topas-sonnengold-emblem.webp`
(2048×2048, ohne Alpha-Kanal).

**Aufbereitung** (Skripte liefen im Scratchpad, Pillow):

- Die schwarze Kachel im Quellbild ausgemessen statt geschätzt:
  x 220–1747, y 223–1747, Eckenradius **120 px**. Der dunkelblaue Rahmen
  ringsum wurde weggeschnitten, der Ausschnitt quadratisch zentriert
  (1525×1525).
- Ecken über eine 4-fach überabgetastete Maske gerundet (keine Treppchen),
  Alpha-Kanal ergänzt — dadurch trägt das Logo in **beiden Themen**.
- Es wurde **ausschließlich verkleinert** (Lanczos), nie hochgerechnet.

**Erzeugte Dateien:**

| Datei | Größe | Zweck |
|---|---|---|
| `bilder/logo.png` | 800 px, volle Farbe | Archiv-/Druckfassung |
| `bilder/logo-klein.png` | 400 px, 256 Farben (38 KB statt 215 KB) | Kopfleiste (62 px) + Favicon |
| `bilder/apple-touch-icon.png` | 180 px, eckig, ohne Alpha | iOS rundet die Ecken selbst |
| `bilder/og-bild.jpg` | 1200×630 | Kachel mittig auf Papierton, Petrol-Linien |

Die Farbreduktion auf 256 Farben ist bei 62 px Anzeigegröße nicht
unterscheidbar (auf 200 px gezoomt gegengeprüft), spart aber auf jeder
Seite rund 175 KB — die Datei wird zweimal geladen (Kopfleiste + Favicon).

**Cache:** Die Bildverweise hatten bisher keine Version, Besucher hätten
das alte Logo weiter aus dem Browser-Speicher gesehen. Darum tragen
`logo-klein.png`, `apple-touch-icon.png` und `og-bild.jpg` jetzt `?v=1` —
**260 Verweise auf allen 65 Seiten** (4 je Seite). `style.css` auf **v=82**
(Token-Kommentar beschrieb noch das alte Logo).

**Nicht geändert:** Die Palette bleibt Petrol-Blau/Gold. Ein Umbau auf
Gold/Schwarz beträfe alle 65 Seiten und beide Themen — das ist eine eigene
Aufgabe, keine Nebenwirkung eines Logo-Tauschs.

**Offene Einwände** (von Claude vorgebracht, von Hasan überstimmt — hier
festgehalten, damit sie nicht verlorengehen):

1. Die Formensprache (Schaltkreise, Klingen, Edelsteine, Hochglanz-Gold)
   ist die von Gaming- und Krypto-Marken. Die Zielgruppe 45+ sucht auf
   einer Pflege-Website Vertrauen und Ruhe.
2. **Auf sämtlichen Arbeitsfotos trägt Norbert das alte Logo** auf dem
   Shirt (blaue Füße). Website und Arbeitskleidung widersprechen sich nun.
   Aus genau diesem Logo wurde am 07.07. die Palette abgeleitet.
3. Ob der Wechsel mit Norbert abgestimmt ist, wurde nicht beantwortet.
   Es ist seine Marke, und sie steht auch auf Flyer und Fahrzeug.
4. Bei 62 px in der Kopfleiste verschwinden Leiterbahnen und Edelsteine;
   es bleibt ein goldenes Wappen. Erkennbar, aber die Feinheiten sind
   verschenkt.

**Geprüft:** Startseite und Leistungsseite in Headless-Chrome (1280 px).
Die Kopfleiste ist auf allen Seiten dunkel — die schwarze Kachel sitzt
dort sauber, in hell wie dunkel.

## 2026-07-07 (vormittags) — Leistungs-Tafeln farbig + Detail-Masken mit Fotos

- **Leistungs-Tafeln** (leistungen.html) überarbeitet: jede Tafel hat eine
  Kennfarbe (`--lk`: Blau/Grün/Gold, dunkle Varianten wie die
  Vertrauens-Kreise) — farbige Linie oben, getönter Rand (color-mix mit
  Fallback), Symbol-Kachel und Überschrift in der Kennfarbe. Preiszeile
  in allen Tafeln **unten bündig** (Flex + `margin-block-start: auto`)
  mit Trennlinie und „Details ansehen ›".
- **Detail-Masken:** Klick/Enter/Leertaste auf eine Tafel öffnet ein
  natives `<dialog>` (`.maske`) mit Foto (16:9), Eckdaten-Chips
  (Dauer/Preis/Anfahrt), ausführlicher Beschreibung, Ablauf-Liste,
  „Gut zu wissen"-Hinweis (rechtssicher: kosmetisch, keine Heilkunde)
  und Termin-Knopf. Schließen: X, ESC, Klick auf den Rand. JS in
  main.js (`?v=3`), Fallback: ohne `showModal` bleibt alles wie bisher.
- **Fotos:** Agent-Recherche auf Pexels (Lizenz: kommerziell frei, keine
  Namensnennung nötig, https://www.pexels.com/license/). Eingebaut in
  `bilder/`: `leistung-fusspflege.jpg` (Foto 5619459, Nico Becker),
  `leistung-massage.jpg` (5793925, Yan Krukau),
  `leistung-reflexzonen.jpg` (5793976, Yan Krukau) — je 1600 px, lokal,
  keine Fremdabrufe. Können später gegen echte Norbert-Fotos getauscht
  werden.
- Fehler behoben: `width/height`-Attribute des Masken-Bilds hebelten das
  16:9-Verhältnis aus (Präsentations-Höhe) → `height: auto` im CSS.
- `server.py`: Standard-Port jetzt **8081** (+ Port-Argument, chdir zum
  Skript-Ordner) — unter 8080 läuft auf diesem Mac der MikaTec-Server,
  der sich Port 8080 automatisch zurückholt. Cache `?v=30` (style) /
  `?v=3` (main.js) jetzt wieder auf **allen** 7 Seiten einheitlich
  (waren auseinandergelaufen: nur index auf v=29, Rest v=7).
- Nachbesserung auf Hasans Rückmeldung („zu schmal und zu lang"): Maske
  auf **880 px** verbreitert, Foto als flaches Banner (5:2 statt 16:9),
  Inhalt mittig auf max. 760 px. Cache `?v=31`. (Hasan hatte zudem kurz
  eine Zwischenfassung erwischt: der 16:9-Fix kam nach dem v=30-Bump —
  Merker: nach JEDER CSS-Änderung Version hochzählen, auch bei Nachfixen.)
- Seitenkopf aller Unterseiten kompakter (Hasan: „zu breit und zu viel"):
  H1 kleiner (clamp 27–40 px statt bis 52), Untertext max. 560 px breit,
  Abstände gestrafft (`padding-block` 24–40/14–22 px), Inline-Abstand zum
  ersten Abschnitt einheitlich 16 px auf allen 6 Unterseiten. Cache `?v=32`.
- Preistabelle aufgewertet (Hasan: „Spalten-Linien rein, bessere Tabelle"):
  Spalten-Linien, goldene Linie unter der Kopfzeile, Zebra-Streifen
  (helle + dunkle Variante), Dauer-Spalte mittig mit fester Breite,
  Preis-Spalte rechts, Anfahrt-Zeile als hervorgehobene Schluss-Zeile
  (`--marke-hell`, fett); `border-collapse: separate`, damit die runden
  Ecken wirklich greifen. Abschnitts-Abstand global gestrafft:
  `--abstand` von 52–104 px auf 40–68 px. Cache `?v=33`.
- Abgrenzungs-Bereich professionell umgebaut (Hasans Auftrag „medizinische
  Sache gut erklären"): zwei symmetrische Vergleichs-Tafeln
  (`.vergleich`, ab 840 px nebeneinander) — grün „Das übernehme ich"
  (kosmetische Pflege gesunder Füße) vs. rot „Das gehört in die Podologie"
  (eingewachsene/verdickte Nägel, Pilz-Verdacht, Warzen, offene Stellen,
  diabetisches Fußsyndrom); darunter Erklär-Absatz „Warum diese klare
  Trennung?" (PodG: geschützte Bezeichnungen, staatliche Ausbildung,
  ärztliche Verordnung) + Hygiene-Satz. Rechtlich weiterhin sauber: der
  Pflicht-Hinweis bleibt auf der Leistungs-Seite, nur besser sichtbar.
- Aufruf-Block „Fragen zu einer Leistung?" auf Hasans Wunsch von der
  Leistungs-Seite entfernt. Cache `?v=34`.
- „Warum diese klare Trennung?" als dritte Vergleichs-Tafel: Kennfarbe
  **Orange** (`.vt-warum`, hell #c26a35 / dunkel #cd8352), Glühbirnen-
  Symbol (Hasans Wunsch), volle Breite unter den zwei Tafeln
  (`grid-column: 1 / -1`), Text im **Blocksatz** mit Silbentrennung,
  ab 840 px **zweispaltig** (halb so hoch).
- **Fußleiste fixiert** (ab 1000 px): bleibt beim Scrollen immer sichtbar
  (`position: fixed` + 62 px Body-Puffer). Mobil bewusst NICHT fixiert —
  dort sitzt unten bereits die fixe Aktionsleiste. Cache `?v=35`.
- Weiter verdichtet: „Anfahrt inklusive"-Hinweiskasten unter der Tabelle
  entfernt (Inhalt steht in der Anfahrt-Zeile der Tabelle; Details siehe
  Kontakt-Seite), Abschnitts-Abstand `--abstand` nochmals halbiert auf
  26–40 px. Cache `?v=36`.
- Feinschliff Warum-Tafel: Ergänzungssatz „– beide Bereiche ergänzen
  sich, ersetzen einander aber nicht." gleicht die zwei Textspalten aus
  (vorher links eine Zeile weniger); letzter Abschnitt jeder Seite endet
  jetzt 14 px über der Fußleiste (`main > section:last-child`).
  Cache `?v=37`.
- **Kundenstimmen-Seite neu** (Hasans Auftrag): Stimmen als rollbares
  Band `.stimmen-rolle` — 2 Reihen, auf Desktop 3 Spalten sichtbar
  (`grid-auto-flow: column` + `grid-auto-columns`), seitlich per
  Scroll-Snap und runden Pfeil-Knöpfen zu weiteren Stimmen (12
  Platzhalter), Karten mit Avatar-Kreis und Trennlinie. **Bewertung
  abgeben** direkt auf der Seite: Gold-Tafel im Vergleichs-Stil mit
  Sterne-Auswahl (Radio-Gruppe, row-reverse-Technik, ohne JS gefärbt),
  Name/Ort/Text; Absenden öffnet WhatsApp bzw. E-Mail-Programm mit
  fertigem Text (statisch, kein Backend, DSGVO-schonend — gesendet wird
  erst dort). FAQ „Gut zu wissen" an den Tafel-Stil angepasst: 2 Spalten
  ab 840 px, Marke-Kante, Schatten, `align-items: start`. Aufruf-Block
  „Noch Fragen offen?" entfernt. main.js `?v=4` (Band-Pfeile +
  Bewertungs-Versand), Cache `?v=39`.
- 18 **Muster-Bewertungen** eingesetzt (Hasans Wunsch, nur zum
  Wirkungstest — werden vor Livegang gelöscht/ersetzt, siehe WICHTIG +
  TODO): verschiedene Textlängen, Namen/Orte aus dem Einzugsgebiet,
  farbige Initialen-Avatare (6 Palettenfarben), auch 4-Sterne-Karten;
  jede Karte trägt ein „Beispiel"-Etikett (rechtliche Absicherung, UWG).
  Bewertungs-Tafel kompakter: Sterne + Name + Ort in einer Zeile
  (ab 640 px), Sterne 30 px, Textfeld flacher, Hinweis kleiner.
  Cache `?v=40`.
- **FAQ als Masken** (Hasans Wunsch statt Aufklappen): jede der 8 Fragen
  ist jetzt eine klickbare Tafel (`.faq-frage`, ›-Pfeil, Hover-Anheben)
  und öffnet eine ausführliche Maske — mit Eckdaten-Chips, Ablauf-Listen,
  „Gut zu wissen"-Hinweisen, internen Verweisen (Preisliste, Abgrenzung,
  Kontakt) und wo passend Fotos (Hausbesuch = Norberts echtes
  Arbeitsfoto, Dauer, Hygiene). Gesetzes-Bezug bei „Unterschied" und
  „Diabetiker": PodG erklärt + Link auf gesetze-im-internet.de/podg
  (extern, target=_blank) + Hinweis ärztliche Verordnung/Krankenkasse.
  main.js `?v=5`: Doppel-Öffnen-Schutz (`if (!maske.open)`).
  Cache `?v=41`.
- Feinschliff auf Hasans Rückmeldung: neues Token `--stern`
  (typisches Bewertungs-Gelb, hell #e9a800 / dunkel #f2c14e) für alle
  Sterne (Stimmen-Karten, Auswahl-Sterne) und als Kennfarbe der
  Bewertungs-Tafel (vorher Gold/Orange); Bewertungs-Tafel kompakter
  (kleinere Kachel/Überschrift, Felder 46 px, Textfeld 70 px — die
  globale 140-px-Textarea-Regel hatte die kompakte überschrieben,
  jetzt per Spezifität gelöst); Abstand des letzten Abschnitts zur
  Fußleiste wieder größer (44 px). Cache `?v=42`.
- Bewertungs-Zeile nachgebessert: die drei Labels (Sterne/Name/Ort)
  beginnen jetzt oben auf einer Linie (Feld als Flex-Spalte mit
  `space-between`), Labels in der Zeile 16 px + nowrap. Sterne-Auswahl
  von der CSS-row-reverse-Technik auf **JS-Färbung** umgestellt
  (Hasans Meldung „man kann nur einen Stern auswählen"): Radios in
  normaler Reihenfolge 1→5, Klick auf Stern n füllt 1…n
  (`label.gewaehlt`), Hover vergrößert den Stern leicht. main.js `?v=6`,
  Cache `?v=44`.
- Nachbesserung 2: Sterne direkt unter dem Label (kein Versatz mehr,
  `line-height: 46px` = Feldhöhe), größer (34 px); Name/Ort-Felder auf
  feste 320 px gekürzt (Hasans Vorgabe). Einzelauswahl getestet:
  2 Sterne klicken → genau 2 gelb. Cache `?v=45`.
- **Über-mich-Seite** überarbeitet: Vorstellungs-Text im Blocksatz
  (`.vorstellung`), die drei Stationen-Tafeln mit Kennfarben-Linie
  oben (blau/grün/gold, `.schritt.farbig` + lk-Klassen, Überschrift in
  Kennfarbe), Aufruf „Lernen Sie mich kennen" entfernt. **Galerie
  „Bilder aus meiner Arbeit" auf die Startseite umgezogen** (Hasans
  Anweisung): sitzt jetzt zwischen Vertrauens-Tafeln und „Ihr
  Hausbesuch in vier Schritten". Cache `?v=47`.
- „Mein Weg zur Fußpflege" neu geschrieben (Hasans Auftrag:
  professioneller, ausführlicher, passende Fachbegriffe): drei volle
  Absätze — Wurzeln in der Pflege seit 2012 („Wer gut zu Fuß ist,
  bleibt selbstständig"), Ausbildung 2024/FAY mit Fachvokabular
  (Nagel- und Nagelhautpflege, Hornhautabtragung, Desinfektion,
  Instrumenten-Aufbereitung), Hausbesuch-Nutzen (Senioren,
  eingeschränkte Mobilität); Anspruch-Kasten geschärft. Kein
  Heilkunde-Vokabular, keine erfundenen Fakten. Dabei Layout-Fehler
  behoben: das Porträt (starres `aspect-ratio` inline) lief beim
  längeren Text unter die Text-Spalte → Klasse `.portraet`
  (mobil 4:5, ab 840 px `aspect-ratio: auto` + stretch = volle
  Zeilenhöhe, object-fit cover). Cache `?v=48`.
- **NEU: Produkte-Seite (Shop)** — Hasans Auftrag: Reiter „Produkte"
  zwischen Leistungen und Über mich (alle 8 Seiten), Warenkorb-Knopf
  in der Kopfleiste rechts neben Hell/Dunkel (44-px-Kreis, gelbes
  Zähler-Badge, auf allen Seiten; führt zu produkte.html, dort öffnet
  er die Warenkorb-Maske). produkte.html: Vorteils-Zeile (Übergabe,
  Zahlung Bar/Rechnung/PayPal, Beratung), **9 Bereichs-Tafeln**
  (Werkzeuge, Cremes, Elektrische Geräte, Fußbäder, Nagelpflege,
  Hornhaut & Peeling, Komfort, Hygiene, Geschenke/Gutscheine — je
  Kennfarbe + Icon + Artikelzahl, aktive Tafel markiert),
  **90 Muster-Produkte** (je 10) mit Foto, Sterne-Bewertung,
  Beschreibung, Inhalt/Grundpreis, Lager-Status, Badge (Bestseller/
  Neu), Preis, Mengen-Stepper, „In den Warenkorb"; Sortierung
  (Beliebt/Preis/Name). **Warenkorb**: localStorage `nf-warenkorb`,
  Maske mit Positionen (Menge ±, Entfernen, Zeilensummen), Gesamt,
  Zahlarten-Chips, Leeren, Bestellung als unverbindliche **Anfrage per
  WhatsApp/E-Mail** (kein Bezahlsystem). Technik: js/produkte.js (v1,
  Daten + Logik), main.js v8 (globales Badge), 9 Pexels-Kategorie-
  Fotos lokal (bilder/shop-*.jpg, Lizenz frei), Muster-Hinweis auf der
  Seite als Platzhalter-Text. Funktionstest bestanden: 1×49,90 +
  2×24,90 = 99,70 € korrekt, Badge zeigt 3. Cache `?v=50`.
- **Shop-Ausbau 2** (Hasans Feinheiten): (a) Sprung-Fix beim
  Bereichswechsel (Listen-Höhe wird beim Neuaufbau festgehalten,
  Scrollen erst nach dem Rendern); (b) **Warenkorb ist jetzt eine
  eigene Seite** warenkorb.html (Maske entfernt, Korb-Knopf führt von
  überall dorthin) mit strukturiertem Summenblock: Zwischensumme,
  Lieferung/Übergabe, Gesamt, **ausgewiesene 19 % MwSt.** („darin
  enthalten: …"); (c) je Produkt zusätzlich **„Jetzt kaufen"** (legt in
  den Korb und springt zur Kasse); (d) **kasse.html**: Checkout mit
  Name/Telefon/E-Mail/Adresse, Lieferart (Übergabe beim Termin /
  Lieferung / Abholung), Wunschtermin (Datum), Zahlart (Bar/Rechnung/
  PayPal), Bemerkung, Pflicht-Checkbox Widerruf/AGB (Platzhalter-Links,
  folgt vor Livegang), Bestell-Übersicht (sticky) und Knöpfen
  **„Zahlungspflichtig bestellen"** (§ 312j BGB-Beschriftung) per
  WhatsApp/E-Mail; danach Bestätigungs-Ansicht + Korb wird geleert.
  Global gefixt: `[hidden]` gewinnt jetzt immer (display:none
  !important) — vorher hebelte display:flex das Attribut aus.
  produkte.js v2, Cache `?v=52`. Getestet: Summen korrekt
  (118,60 € · MwSt. 18,94 €), Badge 4.
- Sichtprüfung headless (hell/dunkel/520 px + offene Maske): sauber.
  Merker bestätigt: unter ~500 px Fensterbreite klemmt headless Chrome
  (Testartefakt, kein Seitenfehler).
- **Warenkorb + Kasse als stabile Tafeln** (Hasans Rückmeldung: Inhalte
  schwebten frei auf dem Hintergrund, „soll stabil, robust,
  professionell wirken"): `#korb-tabelle` und `.kasse-formular` sitzen
  jetzt in derselben Tafel-Optik wie der Rest der Seite — Fläche,
  Rand, 4-px-Marken-Linie oben, runde Ecken, Schatten, Innenabstand
  20/22 px. Die Formular-Abschnitte der Kasse (Ihre Angaben, Lieferung/
  Übergabe, Zahlart) haben Unterlinien-Überschriften (19 px,
  `border-block-end`), die Einwilligungs-Zeile bricht sauber um
  (`label { flex: 1 }` — vorher stand der Pflicht-Stern allein in der
  nächsten Zeile). Sichtprüfung mit vorbefülltem Korb (2×49,90 +
  3×24,90 = 174,50 €, MwSt. 27,86 €): beide Seiten sauber, hell wie
  dunkel unverändert über Tokens. Cache `?v=53`.
- **Bestell-Tafel der Kasse auf volle Höhe** (Hasans Auftrag: rechte
  Tafel so lang wie das Formular, auch bei wenig Inhalt): Raster von
  `align-items: start` auf `stretch`, Sticky entfernt, Übersicht als
  Flex-Spalte — Positionen oben, Summenblock/Knöpfe per
  `margin-block-start: auto` unten bündig. Neuer Füll-Inhalt
  **„So geht es weiter"** (`.kasse-weiter`): drei nummerierte Schritte
  (Absenden → Bestätigung → Übergabe & Zahlung) mit Nummern-Kacheln in
  `--marke-hell`. Getestet mit 1 und mit 4 Artikeln: Tafel behält in
  beiden Fällen die volle Länge. Cache `?v=54`.
- **Zahlarten mit Original-Symbolen** (Hasans Auftrag: Knöpfe gleich
  groß, Farbe mit Original-Symbolen): Warenkorb-Zeile „Zahlung" jetzt
  drei **gleich breite Kacheln** (`.zahlarten`, Raster
  `auto + repeat(3, 1fr)`, 44 px hoch; unter 560 px Titel eigene
  Zeile) mit Inline-SVGs in Originalfarben — Geldschein grün
  (#2e7d4f), Rechnungs-Dokument petrol (#2f6f92), PayPal-Doppel-P in
  den Original-Blautönen (#003087/#009cde); keine Fremdabrufe, keine
  Bilddateien. Dieselben Symbole zusätzlich in der Zahlart-Auswahl
  der Kasse (Radio-Liste). Erklär-Satz zur Übergabe steht jetzt als
  eigene Zeile darunter. Cache `?v=55`.
- **Kasse: Felder bündig, DHL-Versand, PayPal-Weiche** (Hasans Auftrag,
  Verständnis-Rückfrage bestätigt): (a) Formular-Doppelzeilen
  (Name/Telefon, PLZ/Ort) liefen nur bis 2/3 — Ursache: die spätere
  `.bewertung-zeile`-Regel (3 Spalten) schlug `.kasse-zeile` (gleiche
  Spezifität); Fix `.kasse-zeile.bewertung-zeile` mit
  `repeat(2, 1fr)` — alle Zeilen jetzt volle Tafelbreite, gleiche
  Feldhöhen. (b) Lieferung um **Versand per DHL (5,49 €)** und
  **DHL Express (12,99 €)** ergänzt (Muster-Preise), jede Lieferart
  zeigt ihren Preis rechtsbündig (`.wahl-preis`); die Bestell-Übersicht
  rechnet live: Zeile „Lieferung / Versand", Gesamt inkl. Versand,
  MwSt. neu (Test: 128,10 + 12,99 = 141,09 €, MwSt. 22,53 € ✓).
  (c) Zahlart heißt jetzt **„Rechnung / Überweisung (per E-Mail)"**.
  (d) **PayPal-Weiche**: bei Zahlart PayPal verschwinden die
  WhatsApp-/E-Mail-Knöpfe, stattdessen blauer Knopf „Zahlungspflichtig
  bestellen – mit PayPal" (#003087) — kopiert die Bestell-Daten in die
  Zwischenablage und öffnet PayPal.Me mit dem Gesamtbetrag
  (Platzhalter-Konto, siehe TODO). Bestelltext enthält jetzt auch
  Versandzeile und Gesamt inkl. Versand. Später laut Hasan:
  E-Mail-API mit PDF-Auftrag + Kalender-Terminbuchung (TODO,
  Abschnitt „Shop-Ausbaustufe"); Weg: erst GitHub Pages, dann Domain.
  produkte.js `?v=3`, Cache `?v=56`.
- **Produkte-Bereich umgebaut: Bild-Kacheln + eigene Bereichs-Seite**
  (Hasans Auftrag, Verständnis bestätigt): (a) Aus 9 Bereichen wurden
  **8** — „Hygiene & Desinfektion" in „Werkzeuge, Instrumente &
  Hygiene" zusammengelegt (Hasans Wahl; alle 10 d-Artikel tragen jetzt
  kat 'w' → 20 Artikel). (b) produkte.html zeigt statt der schmalen
  Balken-Tafeln ein **Kachel-Raster**: 2 Spalten × 4 Reihen
  (`.kachel-raster`, mobil 1 Spalte), jede Kachel gleich groß (16:9),
  **Name + Artikel-Zahl außen über der Kachel** (`.kachel-name`,
  Zahl füllt JS über `data-kat`), Bild als Foto-Kachel mit sanftem
  Zoom beim Zeigen (hinter prefers-reduced-motion). (c) **Neue Seite
  produkt-bereich.html**: Klick auf eine Kachel öffnet den Bereich als
  eigene Seite (`?bereich=<kat>`, ungültige Werte fallen auf 'w'
  zurück) — Zurück-Knopf oben (`.zurueck-knopf`) und unten,
  linksbündiger Seitenkopf (`.seitenkopf-bereich`, Regel bewusst NACH
  `.seitenkopf`), Sortierung + Produktkarten + Warenkorb wie gehabt;
  Seitentitel wird je Bereich gesetzt. Altes `.kategorie*`-CSS und der
  Inline-Listen-Block entfernt. (d) **Agent 1 (Bilder):** 8 verifizierte
  Pexels-Gruppenbilder (Sortimente, keine Einzelprodukte, keine
  lesbaren Marken) als `bilder/kachel-*.jpg` — IDs 9706941 (Werkzeuge,
  Justyna Grochowska), 8101520 (Cremes, Polina Kovaleva), 14018564
  (Geräte, Mehmet Turgut Kirkgoz), 19695948 (Fußbad, Jonathan Borba),
  34930142 (Nagelpflege, J. A. Otegui Auzmendi), 10574838 (Hornhaut,
  Ron Lach), 7796990 (Komfort, Alesia Kozik), 7356379 (Geschenke,
  Alina Vilchenko); die alten `bilder/shop-*.jpg` (9 Stück) sind damit
  unbenutzt. (e) **Agent 2 (Videos):** 9 Kandidaten für einen echten
  Video-Hintergrund (Schaum/Bläschen, Fenster mit Regentropfen, Wasser
  mit Blumen — reale Aufnahmen, Pexels, ≤ 15 MB, lokal) in
  `DOKU/Claude Ausgabe/Hintergrund-Kandidaten/`; Auswahl-Seite
  `DOKU/Claude Ausgabe/Hintergrund-Auswahl.html` — **Hasans Wahl
  (Nr. 1–9) steht noch aus**, Einbau folgt danach. produkte.js `?v=4`,
  Cache `?v=57`.
- **Video-Hintergrund eingebaut** (Hasans Wahl: hell = Nr. 2 feiner
  Schaum / Kelly 4139990, dunkel = Nr. 3 langsame Bläschen /
  Engin Akyurt 10420537): auf produkte.html und produkt-bereich.html
  liegt ein fixes `<video>` hinter dem Inhalt (`.hintergrund-video`,
  z-index −1, object-fit cover) mit Schleier in Seitengrund-Farbe
  (color-mix 74 %/70 % + rgba-Fallback) für die Lesbarkeit. Dateien
  lokal: `bilder/hintergrund-schaum-hell/-dunkel.mp4` (11/12 MB) +
  Standbilder (.jpg, per ffmpeg, 1. Frame). main.js v9 wählt die
  Quelle je Thema (MutationObserver auf `data-theme`, Wechsel sofort);
  bei `prefers-reduced-motion` lädt KEIN Video — nur das Standbild als
  Poster. Sichtprüfung hell/dunkel bestanden. Cache `?v=58`.
- **Video-Qualität nachgebessert** (Hasan: unscharf, wackelt, stoppt,
  springt): Ursachen — die Erst-Fassungen hatten nur 1366×720 bzw.
  960×506 (auf Fensterbreite hochgezogen = unscharf), ein hartes
  Schleifen-Ende (Sprung) und keine Streaming-Optimierung (Stocken).
  Fix: UHD-Originale (2732×1440) beider Pexels-Videos geholt, mit
  ffmpeg neu aufbereitet — **Full HD 1920×1012**, ruhiger
  13-s-Ausschnitt, **nahtlose Schleife** als Palindrom (vorwärts +
  rückwärts verkettet → 26 s ohne Sprungstelle), H.264 crf 23 preset
  slow, `+faststart` (Streaming ohne Aussetzer), je 12–13 MB; Poster
  neu erzeugt. Video-URL trägt jetzt `?v=2` (Browser-Cache!),
  `preload="auto"` am Video-Element. main.js `?v=10`.
- **Hell-Video getauscht** (Hasan: dunkel passt, hell nicht → Nr. 5
  Regentropfen am Fenster, Pexels 13292544, Gültekin Kaya): Full-HD-
  Original (1920×1080) geholt, gleiche Aufbereitung (13-s-Ausschnitt,
  Palindrom-Schleife, crf 23, faststart, 8,7 MB). Dateien dabei
  neutral umbenannt (hell ist kein Schaum mehr):
  `bilder/hintergrund-hell/-dunkel.mp4/.jpg`; alte
  `hintergrund-schaum-*`-Dateien entfernt (in git-Historie
  erhalten). Video-/Poster-URLs `?v=3`, main.js `?v=11`.
  Stand: hell = Regen-Fenster (Nr. 5), dunkel = Bläschen (Nr. 3).
- **Finale Video-Wahl aus Hasans eigener Kandidaten-Seite**
  (~/Desktop/Hin.html, 10 höher aufgelöste Kandidaten): **hell =
  „Tropfen im Abendlicht"** (Pexels 2960875, Tarin Golden, Full HD
  30 fps), **dunkel = „Ablaufendes Regenwasser"** (Pexels 5197762,
  Aleks BM, UHD 2560×1440 → auf 1920 skaliert). Gleiche Aufbereitung
  (13-s-Ausschnitt ab Sek. 5, Palindrom-Schleife, crf 23, faststart);
  hell 12 MB, dunkel 5,9 MB. Video-/Poster-URLs `?v=4`,
  main.js `?v=12`. Beide Themen sichtgeprüft.
- **Bereichs-Seiten: 4 Spalten + 16 Artikel je Bereich** (Hasans
  Auftrag): Produkt-Raster ab 1100 px auf `repeat(4, 1fr)` (vorher 3),
  Karten kompakter (Innenabstand 12/14, h3 17 px, Preis 19 px,
  Knöpfe 40 px). Sortiment auf **8 × 16 = 128 Muster-Artikel**
  gebracht: 4 Doppelungen aus Werkzeuge/Hygiene entfernt (w3
  Eckenfeile, w8 Pinzette, d8 Schuh-Spray, d10 Tücher → 20 − 4 = 16),
  je **6 neue Muster-Artikel** in den 7 anderen Bereichen (c11–c16,
  e11–e16, b11–b16, n11–n16, h11–h16, k11–k16, g11–g16 — u. a. Urea
  25 %, UV-Desinfektionsbox, Fußwanne mit Noppen, Nagelhärter,
  Kaffee-Peeling, Akupressur-Matte, Wert-Gutscheine 50/100 €).
  Weiterhin ALLES Muster-Daten (WICHTIG-Merker gilt).
  produkte.js `?v=5`, Cache `?v=59`.
- **Eigenes Foto je Artikel** (Hasans Auftrag): 8 Agenten parallel
  (einer je Bereich, gleiche Regeln: nur Pexels, URLs vor Download
  verifiziert, markenfrei, Sichtprüfung, md5-Duplikatcheck) →
  **116 von 128 Artikeln mit eigenem Foto** in `bilder/produkte/<id>.jpg`
  (800 px). Rendering: `produktBild()` in produkte.js — Produktkarten,
  Warenkorb- und Kassen-Zeilen laden das Artikel-Foto, bei fehlender
  Datei springt per `onerror` das Bereichs-Bild ein. **Ehrlich ohne
  Foto (12):** e4/e8/e12/e13/e16 (keine markenfreien Motive für
  Schleifrollen/Fräser-Bits/UV-Box/Kompressions-Gerät auf Pexels),
  k9/k15 (Einlegesohlen/Wärmflasche), n6 (Buffer-Block) — dazu 4
  bereichsübergreifende Duplikate entfernt (e3=b4, w10=n9, n13=w6,
  n4=w7; Doppelgänger in ~/.Trash, das jeweils passendere Produkt
  behielt das Foto). Die Agenten haben unterwegs über 15 Kandidaten
  wegen lesbarer Markennamen verworfen (u. a. STALEKS, beurer, OPI,
  doTERRA). Alle Quellen mit Pexels-ID und Fotograf in der neuen
  **DOKU/md/Bildquellen.md**. Sichtprüfung Bereiche w + e bestanden.
  produkte.js `?v=6`.
- **Kontakt-Bereich groß ausgebaut** (Hasans Auftrag): (a) Kontaktwege
  als **Kennfarben-Tafeln** (`.kontakt-kachel` mit `--lk`-Oberlinie +
  Symbol-Kachel): Anrufen grün, WhatsApp im Original-Grün
  (`.lk-wa` #25d366, Hörer im Sprechblasen-Symbol), E-Mail blau,
  Erreichbarkeit gold (Zeilen Mo–Fr/Samstag, Zeiten weiter
  Platzhalter), NEU fünfte Tafel „Hausbesuche" petrol; Spalte als
  Flex — alle Tafeln gleich hoch, bündig mit der Formular-Höhe.
  (b) **Formular auf Kassen-Niveau und endlich funktionsfähig**:
  Tafel-Optik (`.kasse-formular`), Doppel-Zeilen Name/Telefon +
  Wohnort/Wunschtermin (date), NEU Abschnitt „Ihr Anliegen"
  (Radio-Liste mit Preisen 48/30/57 € + Allgemeine Frage), Nachricht
  optional, Absenden **per WhatsApp oder E-Mail** (main.js v13,
  gleiche Technik wie Kasse/Bewertung — vorher toter
  `action="#"`-Knopf). (c) **Echtes Kartenbild**
  `bilder/einzugsgebiet.jpg`: aus 15 OSM-Kacheln (z9) lokal gestitcht
  (curl + Pillow; Framework-Python-SSL-Problem umgangen), Marker
  Weilimdorf + 50-km-Kreis in Markenfarbe, 1280×768, Attribution
  bleibt; Platzhalter-Kasten raus. (d) Orte-Zeile neu (Hasans
  Vorgabe): Stuttgart · Ludwigsburg · Gerlingen · Weilimdorf ·
  Umkreis 50 km · … fragen Sie einfach nach. Cache `?v=60`.
- **Kontakt-Hintergrund eingebaut** (Hasans Bild Nr. 10
  „Milchglas-Tropfen" aus seinem eigenen Ordner
  ~/Downloads/4k/ — 20 vorbereitete 4k-Hintergründe, KI-generiert,
  für später merken): auf 1920 px als
  `bilder/hintergrund-kontakt.jpg` (617 KB), festes Bild hinter dem
  Inhalt (`.hintergrund-bild`, gleiche Technik wie das Produkte-Video)
  mit Schleier 60 % hell / 82 % dunkel. Dabei Kennfarben-Fehler
  behoben: `--lk`-Standard lag auf `.kontakt-kachel` und überstimmte
  die früher notierten lk-Klassen (gleiche Spezifität, spätere Regel
  gewinnt) → Standard jetzt auf `.kontakt-spalte`, lk-Klassen an der
  Kachel greifen wieder. Beide Themen sichtgeprüft. Cache `?v=62`.
- **Kontakt-Feinschliff nach Hasans Rückmeldung** (3 Punkte):
  (a) Hintergrund neu in 2560 px exportiert (war auf Bildschirmbreite
  hochgezogen = zu grob) und per `background-position: right bottom`
  so gelegt, dass die grüne Pflanze rechts unten sitzt.
  (b) **Karte jetzt interaktiv**: Leaflet 1.9.4 LOKAL
  (js/extern/leaflet.js/.css, kein CDN) + eigene Kachel-Pyramide in
  `bilder/karte/` — OSM (Straßen) und **Satellit** (Sentinel-2
  cloudless © EOX, CC BY 4.0, 2016er-Ebene = kommerziell frei) für
  Zoom 10–11, je 97 Kacheln einmalig per curl gespeichert (5,4 MB)
  → zoombar + Karte/Satellit-Umschalter, aber weiterhin NULL
  Fremdabrufe zur Laufzeit (DSGVO-Vorteil bleibt, kein Cookie-Banner
  nötig). 50-km-Kreis + Standort-Marker als Leaflet-Overlays,
  Mausrad-Zoom aus (Seiten-Scrollen), maxBounds aufs Kachel-Gebiet,
  Startzoom 10 (bei 9 wäre das Gebiet schmaler als der Kasten —
  Grauränder); statisches einzugsgebiet.jpg bleibt als
  noscript-Rückfall. Quellen-Zeile unter der Karte erweitert.
  (c) Orte-Chips per `justify-content: space-between` über die volle
  Breite verteilt. main.js `?v=15`, Cache `?v=63`.
- **Karte als richtige Karten-Tafel + Zwei-Klick** (Hasans Rückmeldung:
  zu groß, zu wenig Zoom, „richtige Karte", Tafel mit Adresse links):
  Die lokale Kachel-Pyramide (nur z10–11) war als „richtige" Karte zu
  eng → umgestellt auf **Zwei-Klick-Lösung**: vor dem Klick nur das
  lokale Vorschaubild (einzugsgebiet.jpg) mit Kasten „Karte
  aktivieren"; erst der Klick lädt Live-Kacheln von OSM (Zoom bis 19)
  bzw. EOX-Satellit (nativ bis 14, hochskaliert 18) — Einwilligung
  merkt sich localStorage `nf-karte`. **Datenschutz erweitert**
  (neuer Abschnitt 5 „Interaktive Karte", Grundsätze-Absatz
  angepasst, Nummerierung 6/7). Neue **`.karten-tafel`**: Tafel-Optik,
  links `.karten-info` (Firmenname, Norbert Szczepanik,
  Mittenfeldstraße 39, 70499 Stuttgart-Weilimdorf, Telefon/E-Mail/
  Einzugsgebiet/Anfahrt-Zeilen, Knopf „Route planen" → Google-Maps-
  Routenlink), rechts die Karte (ab 1000 px 34/66, Höhe 440 px);
  Marker-Popup mit voller Adresse. Lokale Kachel-Pyramide entfernt
  (~/.Trash/karte-lokal-kacheln), Leaflet bleibt lokal. WICHTIG-
  Merker zum Cookie-Banner um die Zwei-Klick-Ausnahme ergänzt.
  main.js `?v=16`, Cache `?v=64`. Beide Zustände sichtgeprüft.
- **Online-Terminbuchung entschieden + vorbereitet** (Hasans Wahl nach
  Beratung: **Google + Cal.com**; Microsoft verworfen, weil Bookings
  nur im M365-Abo steckt; Norbert hat bereits ein Google-Konto):
  Tafeln „Erreichbarkeit" und „Hausbesuche" entfernt (Hasans Auftrag),
  stattdessen **„Termin online buchen"** als erste Kontakt-Tafel
  (gold, Kalender-Symbol) — Link noch `#` mit Platzhalter-Etikett,
  bis Cal.com eingerichtet ist. Ablauf: Norbert pflegt Verfügbarkeit
  im Google Kalender/Cal.com, Kunden buchen direkt, Bestätigung
  automatisch. **Datenschutz**: neuer Absatz „Online-Terminbuchung
  (Cal.com)" unter Kontaktaufnahme (reiner Link — Daten fließen erst
  beim Klick). **Anleitung** für die Einrichtung (5 Schritte, inkl.
  Puffer-Zeiten für Anfahrt) in
  `DOKU/Claude Ausgabe/Anleitung-Terminbuchung.html`. TODO-Abschnitt
  „Terminbuchung" angelegt.
- **Buchungs-Link live** (Hasans Test-Konto, „nutze erst das"):
  Tafel „Termin online buchen" verweist jetzt auf
  cal.com/hasan-tepegoz-dzm3vx (neuer Tab, Link verifiziert HTTP 200);
  Platzhalter-Etikett raus, Untertitel „Bestätigung sofort per
  E-Mail". VOR LIVEGANG auf Norberts eigenes Konto tauschen
  (TODO-Kommentar im HTML + TODO.md).
- **Kontakt-Layout entzerrt** (Hasan: gestreckte, leere Tafeln „das
  muss besser werden"): Die Kontaktwege sind keine Seiten-Spalte mehr
  (flex:1 hatte sie auf Formular-Höhe aufgeblasen), sondern eine
  **Reihe gleich großer Kacheln ÜBER dem Formular** (`.kontakt-wege`:
  1 Spalte mobil, 2×2 ab 640 px, 4 nebeneinander ab 1000 px mit
  Symbol-oben-Layout); das Formular sitzt darunter mittig
  (`.formular-mitte`, max. 920 px). Alte `.kontakt-raster`/
  `.kontakt-spalte`-Regeln entfernt. Cache `?v=65`.
- Nachschliff (Hasan): Kontaktwege-Reihe auf **920 px = Formular-Breite**
  begrenzt (bündig) und die Kacheln zu **Knöpfen** reduziert — nur
  Symbol (38 px) + Überschrift, mittig, einzeilig (nowrap); Untertexte
  raus, alte Unterzeilen-/Spalten-Regeln bereinigt. Cache `?v=66`.
- Orte-Chips im gleichen Knopf-Stil (Hasans Wunsch „wie die oben"):
  sechs gleich breite Kennfarben-Knöpfe (`.orte-liste` als Raster,
  2 Spalten mobil / 6 ab 1000 px; lk-blau/gruen/gold/petrol/rot/
  orange, Tafel-Optik mit 4-px-Oberlinie), bündig über der
  Karten-Tafel. Cache `?v=67`.
- **Sozial-Leiste im Held verkleinert** (Hasan: kleiner in Höhe und
  Breite, aber schön unter den Haupt-Knöpfen; „die unteren sollten
  ja kleiner sein als die oberen"): von voller Spaltenbreite/48–52 px
  auf **38–40 px Höhe und max. 140 px Breite** je Knopf, als
  Flex-Zeile mit `space-between` — außen bündig mit „Termin
  anfragen"/„Leistungen & Preise", Symbole 20–22 px.
  Größen-Hierarchie oben→unten stimmt wieder. Cache `?v=68`.
- Nachschliff: Sozial-Knöpfe nochmals schmaler (max. 96 px). Und
  **Bild-Maske für alle Inhaltsbilder** (Hasans Auftrag „alle Bilder
  müssen beim Anklicken aufgehen zu einer großen Maske"): main.js v17
  erzeugt EIN gemeinsames `<dialog class="bild-maske">` je Seite;
  Klick-Delegation auf `main img` (funktioniert dadurch auch für die
  nachgeladenen Produkt-Karten), ausgenommen verlinkte Bilder
  (Bereichs-Kacheln), Leaflet-Karte und die Maske selbst. Bild bis
  1100 px/84 vh, `cursor: zoom-in` als Hinweis, Schließen per X/ESC/
  Rand-Klick. Getestet: Startseiten-Foto + Produktbild öffnen groß.
  Cache `?v=69`.
- **Sozial-Leiste als 2er-Paare** (Hasan: „zwischen abstände kürzer je
  2 knöpfe", dann „die beiden paare mischen noch nach innen"): vier
  Knöpfe zu zwei mittigen Paaren (WhatsApp/YouTube | TikTok/Anrufen)
  gruppiert — `.sozial-leiste` als 2-Spalten-Raster, je Paar ein
  Flex-Container mit 14 px Innenabstand, zentriert. Cache `?v=70/71`.
- Haupt-Knöpfe im Held schmaler (Hasan: „einmischen kleine in der
  breite"): max. 280 px, mittig über den Sozial-Paaren
  (`justify-self: center`). Cache `?v=72`.
- **Vertrauens-Tafeln im Schritte-Format** (Hasan: „sollen gleich groß
  sein wie die" + „der obere zu groß"): gleiche Tafel-Größe wie die
  Schritte-Tafeln (h3 19 px, Text 16,5 px, kompaktes Padding); die zwei
  Werdegangs-Tafeln (Ausbildung, Pflegekraft) in die Stationen auf
  ueber-mich.html integriert, dafür zwei neue Themen: „Diskretion &
  Vertraulichkeit" (Schloss, Gold) und „Pünktlich & zuverlässig"
  (Uhr, Rot). Bewusst NICHT „Schweigepflicht" — das ist ein gesetzlicher
  Begriff für Ärzte/Podologen; formuliert als Verschwiegenheit aus der
  Pflege. Cache `?v=73/74`.
- **Fakten-Korrektur** (Hasan): nicht „Pflegeerfahrung", sondern
  **Pflegekraft im Pflegeheim seit 2012** — korrigiert in Start-Tafel,
  meta-description (index + ueber-mich), Über-mich-Untertitel,
  Vorstellungs-Text und Station 1.
- **WhatsApp-Nummer eingepflegt:** alle wa.me-Verweise auf
  **0173 5904496** (11 Dateien: Kontakt-Kacheln, Formular, Bestellung,
  Bewertung, Aktionsleisten); die Anruf-Nummer 0176 8696 1032 bleibt.
- Karten-Info-Zeilen (Hasan: „die unterstriche weg und die linksbündig
  mit doppelpunkt"): Labels mit Doppelpunkt (Telefon:/E-Mail:/
  Einzugsgebiet:/Anfahrt:), Werte linksbündig direkt dahinter
  (`justify-content: flex-start`, 8 px Lücke), Links ohne Unterstrich
  (`.karten-zeilen a { text-decoration: none }`). Beide Themen
  geprüft. Cache `?v=75`.
- **Muster-Hinweis + Vorteile-Zeile entfernt** (Hasans Auftrag „weg
  machen"): der gelbe Platzhalter-Hinweis „Alle Artikel … sind
  Muster-Beispiele" auf produkte.html und produkt-bereich.html sowie
  die Häkchen-Zeile „✓ Persönliche Übergabe / ✓ Zahlung / ✓ Beratung"
  auf produkte.html gelöscht; verwaiste CSS-Regeln (`.shop-vorteile`,
  `.shop-hinweis`) bereinigt. WICHTIG.md trägt jetzt den Merker, dass
  der Muster-Erinnerungshinweis nur noch in der Doku existiert.
  Cache `?v=76`.
- **Fakten-Korrektur FAY** (Hasan: „die kooperation gibt es nicht
  mehr, aber dort die ausbildung gemacht"): alle drei Stellen auf
  ueber-mich.html (meta-description, Vorstellungs-Text, Station 2)
  von „in Kooperation mit der Fußpflegeschule FAY" auf **„an der
  Fußpflegeschule FAY"** umformuliert — die Ausbildung dort bleibt
  als Fakt, die Kooperation wird nicht mehr behauptet. Nur
  Text-Änderung, kein Cache-Bump nötig.
- **Impressum + Datenschutz ausgebaut** (Hasans Auftrag „besser machen,
  meine Daten als Firma und auch der Support der Seite"; Vorlage =
  MikaTec-Impressum von mika-tec.com):
  - Impressum in **MikaTec-Struktur**: „Angaben gemäß § 5 DDG (ehem.
    TMG) / § 18 MStV" mit „Norbert Szczepanik — Einzelunternehmen",
    Kontakt mit Web/Telefon/E-Mail, **Umsatzsteuer: Kleinunternehmer
    § 19 UStG** (Hasans Ansage „ich bin auch Kleingewerbe … passe
    seines dementsprechend an"), „Verantwortlich i.S.d. § 18 Abs. 2
    MStV", Berufshaftpflicht.
  - Neu: Block **„Website-Erstellung & technischer Support"** mit
    MikaTec – Hasan Tepegöz (Einzelunternehmen), Pontoiser Straße 54,
    71034 Böblingen, www.mika-tec.com, info@mika-tec.com,
    0173 5904496 + Zuständigkeits-Satz (Technik → MikaTec, Fußpflege →
    Norbert).
  - Neu: Haftung für Inhalte, Haftung für Links, Urheberrecht,
    **Bildnachweise** (eigene Fotos, Pexels-Lizenz, OSM-Attribution
    fürs Karten-Vorschaubild). **EU-Streitschlichtung entfernt** — die
    OS-Plattform der EU-Kommission wurde im Juli 2025 eingestellt;
    Verbraucherstreitbeilegungs-Absatz bleibt.
  - Datenschutz: Abschnitt 3 heißt jetzt „Hosting und technische
    Betreuung" (+ MikaTec als technischer Betreuer, ausdrücklich ohne
    Zugriff auf Besucherdaten); Formular-Platzhalter ersetzt durch die
    echte Beschreibung (Formular sendet nichts an einen Server,
    öffnet nur WhatsApp/E-Mail-Programm; gilt auch für
    Warenkorb-Anfragen); Entwurfs-Kasten entschärft (nur noch
    Schluss-Prüfung + Stand-Datum offen).
  - Folge aus § 19: **Warenkorb- und Kassen-Summen weisen keine MwSt
    mehr aus** — Zeile „Alle Preise inkl. 19 % MwSt." ersetzt durch
    „Kleinunternehmer gemäß § 19 UStG …", produkte.js ohne
    MWST-Rechnung, Bestelltext „(umsatzsteuerfrei nach § 19 UStG)".
    Cache produkte.js `?v=8`.
- Fußleiste (Hasan: „etwas auseinander und rechtsbündig"): die Links
  Impressum/Datenschutz als `.fuss-links` — Flex mit 14 px Lücke um den
  Punkt, `margin-inline-start: auto` hält sie auch beim Umbruch rechts
  (alle 11 Seiten). Und Kopfleiste (Hasan: „tausch die plätze
  miteinander"): **Warenkorb-Knopf jetzt vor dem Thema-Knopf** — neue
  Reihenfolge Korb → Thema → Sprache (alle 11 Seiten). Cache `?v=77`.
- **6 Sprachversionen gebaut** (Hasans Auftrag „jetzt die sprachen",
  + „türkisch vergessen", + „und russisch"): Ordner `en/ tr/ pl/ ru/
  ar/ zh/` mit je 5 übersetzten Inhaltsseiten (index, leistungen,
  ueber-mich, kundenstimmen, kontakt) — durch 6 parallele Agenten,
  danach zentral geprüft (Pfade `../`, Struktur, Verweis-Existenz,
  Screenshots tr/ar/zh).
  - Sprachauswahl jetzt 7 Einträge (Deutsch, Türkçe, English, Polski,
    Русский, العربية, 中文) mit echten Verweisen auf allen deutschen
    Seiten UND in jeder Sprachversion (eigene Flagge im Knopf,
    aria-current); türkische + russische Flaggen-SVGs neu gebaut.
  - `ar/` komplett RTL (`dir="rtl"`, Telefonnummern mit `dir="ltr"`),
    `zh/` mit System-Schrift-Override (PingFang/YaHei — Lora/Source
    Sans können kein CJK).
  - `hreflang`-Block (de/tr/en/pl/ru/ar/zh + x-default, absolute
    Domain-URLs) auf allen Sprachseiten und den 5 deutschen
    Originalen.
  - Rechtlich in jeder Sprache abgesichert: nur „kosmetische
    Fußpflege"-Äquivalente als Selbstbezeichnung (en „cosmetic foot
    care", tr „kozmetik ayak bakımı", pl „kosmetyczna pielęgnacja
    stóp", ru «косметический уход за стопами», ar „العناية التجميلية
    بالقدمين", zh „足部美容护理"); Podologie überall nur als
    Fremdleistung staatlich Ausgebildeter.
  - Formular-`value`-Attribute bleiben deutsch (WhatsApp-/Mail-Anfrage
    kommt bei Norbert deutsch an) — beim polnischen Agenten
    nachträglich angeglichen.
  - Shop (produkte/warenkorb/kasse) und Impressum/Datenschutz bleiben
    bewusst deutsch; Sprachseiten verlinken mit `../` dorthin.
  - MERKER: KI-Übersetzungen vor Livegang muttersprachlich gegenlesen;
    Text-Änderungen künftig in alle 6 Ordner nachziehen (siehe
    WICHTIG + TODO).
- **Shop mehrsprachig** (Hasans Rückmeldung „da geht nur deutsch,
  sobald man da wechselt kommt man ins start"):
  - `js/produkte.js` (v=9) um eine Sprach-Schnittstelle erweitert:
    optionale Globale `NF_BASIS` (Bild-Pfade `../`), `NF_TEXTE`
    (13 Oberflächen-Texte), `NF_KATEGORIEN` (8 Bereichs-Titel),
    `NF_UEBERSETZUNG` (je Artikel name/info/inhalt) — ohne sie bleibt
    alles deutsch (Rückfall). Anzeige nutzt pName/pInfo/pInhalt;
    der **Bestelltext an Norbert nutzt IMMER die deutschen Namen**
    (positionenText unverändert), Radio-values bleiben deutsch.
  - Je Sprache `js/shop-<code>.js` (~180 Zeilen): alle 128 Artikel
    übersetzt + Texte + Kategorien; per node --check und Zähl-Skript
    geprüft (6 × 128/128 vollständig).
  - Je Sprachordner 4 neue Shop-Seiten (produkte, produkt-bereich,
    warenkorb, kasse) mit hreflang, 7-Sprachen-Auswahl und
    Skript-Reihenfolge thema → main → shop-<code> → produkte;
    deutsche Shop-Seiten: Sprach-Verweise jetzt seitengleich
    (vorher <code>/index.html) + hreflang nachgezogen; in den 30
    bestehenden Sprachseiten Nav/Korb-Verweise von ../produkte.html
    auf produkte.html umgestellt.
  - Geprüft: Verweis-Existenz-Check über alle 65 Seiten (0 kaputt),
    Skript-Reihenfolge auf allen 24 neuen Seiten, DOM-Test
    tr/ru-Bereichsseite (16 Karten, übersetzte Knöpfe/Titel,
    Bild-Pfade ../), Screenshots tr-Übersicht + ar-Kasse (RTL).
    Kleinunternehmer-§19-Zeile in allen Sprachen statt MwSt.
- Kassen-Feinschliff (Hasans Screenshots „diese markierung stört" +
  „muster-ansicht sache weg"): Widerrufsbelehrung/AGB in der
  Einwilligungs-Zeile sind jetzt normale Verweise (Platzhalter-Optik
  mit gestricheltem Kasten entfernt, Ziel bleibt vorerst `#` — Merker
  in TODO: Texte vor Livegang schreiben); die sichtbaren Hinweise
  „Muster-Kasse zur Ansicht." und „Muster-Verbindung – echtes
  PayPal-Konto folgt." entfernt — in ALLEN 7 Kassen (de + 6 Sprachen).
  Nur HTML-Text, kein Cache-Bump nötig.
- Nachschliff Einwilligungs-Zeile (Hasan: „die unterstriche weg" +
  „etwas kleiner, dass kein zeilenumbruch"): `.feld-einwilligung a
  { text-decoration: none }` und Label auf 14 px — Satz passt jetzt
  einzeilig; gilt auch fürs Kontakt-Formular (gleiche Klasse).
  Cache `?v=78` (alle 65 Seiten inkl. Sprachordner).
- **WhatsApp öffnet jetzt direkt die App** (Hasan: „wieso gehe ich
  immer auf eine externe seite und komme nicht zurück"): neuer Helfer
  `window.nfWhatsApp` in main.js (v=19) — Klick startet
  `whatsapp://send?...` (App öffnet sofort, die Website bleibt offen);
  nur wenn nach 1,2 s nichts passiert (keine App installiert), öffnet
  wa.me als Rückfall im NEUEN Tab. Eine Klick-Delegation fängt ALLE
  wa.me-Verweise aller 65 Seiten ab (kein HTML-Umbau nötig);
  Bewertungs-, Kontakt- und Kassen-Versand (produkte.js v=10, mit
  Rückfall) laufen über denselben Helfer. Vorher ersetzten manche
  wa.me-Links die Seite im selben Tab — daher „kein Zurück".
- **Livegang-Vorbereitung + GitHub** (Hasans Auftrag „mach was ohne
  Infos geht, dann ins GitHub, DOKU nicht hochladen"):
  - Aufgeräumt: 9 unbenutzte `bilder/shop-*.jpg` (durch kachel-*.jpg
    ersetzt gewesen) → `~/.Trash/norbert-aufraeumen-0707/`; .DS_Store
    entfernt; `.gitignore` (.DS_Store, *_t.html).
  - `bilder/apple-touch-icon.png` (180 px) + `bilder/og-bild.jpg`
    (1200×630, Logo auf Papierton, Petrol-/Gold-Linie) per PIL erzeugt.
  - og-/twitter-Metadaten auf allen 65 Seiten (Skript: Titel +
    Beschreibung aus der Seite, og:url je Seite, og:locale je Sprache,
    summary_large_image) + apple-touch-icon-Verweis.
  - `sitemap.xml` (65 URLs, hreflang-Alternativen, xmllint-geprüft) und
    `robots.txt` mit **Staging-Sperre** (Disallow / solange Muster-Daten;
    Livegang-Fassung als Kommentar darin).
  - **Handy-Kopfleiste repariert:** unter 480 px waren Logo (62 px) +
    Menü + 3 Rund-Knöpfe zusammen ~464 px breit → Überlauf. Neue
    Media-Query: Logo 46 px, Abstände 6 px, Menü-Knopf kompakter —
    Klickflächen bleiben 44 px. Bei echten 375 px jetzt überlauffrei
    (scrollWidth = 375). Cache `?v=79`.
  - WICHTIGER MESS-MERKER: Headless-Chrome hat ~500 px
    **Mindest-Fensterbreite** — „375-px-Screenshots" sind in Wahrheit
    500 px (rechts beschnitten) und Media-Queries unter 500 greifen
    nicht! Für echte Handy-Messungen die Seite in einen 375-px-iframe
    laden (rahmen_t.html-Trick).
- **GitHub Pages live (Staging):** öffentliches Repo
  `Cehha79/norberts-mobile-fusspflege` mit frischer Historie und NUR
  der Website (rsync ohne DOKU/, CLAUDE.md, server.py; eigenes
  Kurz-README); Pages auf main aktiviert. Verifiziert per curl:
  Startseite 200, tr/produkte 200, style v=79, og-bild, robots.txt
  mit Staging-Sperre aktiv, /DOKU/ = 404. Wiederholbarer
  Veröffentlichungs-Ablauf im lokalen README.md dokumentiert.
  Staging-Adresse: https://cehha79.github.io/norberts-mobile-fusspflege/
- **Repo professionalisiert** (Hasans Auftrag „wie bei meinen anderen
  Webseiten, alles sauber, wird von Leuten geprüft"): öffentliches
  README im MikaTec-Stil (Badges, Überblick, Merkmale, Tech-Stack,
  Projektstruktur-Baum, Architektur inkl. i18n-System, Design-System
  „Petrol & Gold", rechtlicher Rahmen, Deployment) + `.nojekyll`
  (MikaTec-Lehre gegen Pages-Build-Hänger). Alle 14 internen
  `<!-- TODO … -->`-Arbeits-Kommentare aus den HTML-Dateien entfernt
  (Cal.com-Tausch, Social-Links) — die Merker stehen vollständig in
  DOKU/md/TODO.md. Ehrlicher Staging-Hinweis im README (Muster-Daten,
  robots-Sperre).
- **Handy-Feinschliff-Serie nach Hasans Smartphone-Test** (Cache
  `?v=80`, main.js `?v=20`, alle 65 Seiten):
  - **Schnell-Leiste im Kopf:** Start + Leistungen als sichtbare Links
    unter der Kopfzeile, solange die volle Navigation im Menü-Knopf
    steckt (unter 840 px); Links je Seite aus der übersetzten
    Hauptnavigation kopiert (`.kopf-schnell`, aktive Seite mit
    Gold-Unterstrich).
  - **Held mobil:** Foto kommt zuerst (`order: -1`, ab 840 px wieder
    rechts); Haupt-Knöpfe kompakt (max. 300 px, 46 px hoch, mittig) —
    ab 640 px wieder wie gehabt.
  - **Aktionsleiste (Anrufen/WhatsApp/Termin) KOMPLETT entfernt**
    (Hasans Wunsch) — stattdessen ist die **Fußzeile jetzt auf allen
    Breiten fixiert** und immer sichtbar (safe-area-Polster fürs
    iPhone); Fußtext überall gekürzt: „© 2026 Norberts mobile
    Fußpflege" ohne Ortszusatz (alle Sprachen, auch PC).
  - **Kundenstimmen mobil als Zeilen:** unter 840 px zeigt jede
    Bewertung nur Avatar + Name + Sterne + Beispiel-Etikett
    (einzeilig, Ellipsis); Klick öffnet die volle Bewertung als
    Maske (`.stimme-maske`, main.js). Wichtig gelernt: Grid-Elemente
    brauchen `min-width: 0`, sonst Überlauf (Karte war 462 px breit
    in 339-px-Spur). Roll-Pfeile mobil ausgeblendet.
  - **Kontakt-Kacheln mobil linksbündig** (Symbole an einer Kante).
  - **Datumsfeld gezähmt:** `input[type="date"]` bekommt display:block
    + width:100 % + appearance:none — iOS gab ihm sonst eine
    Eigenbreite über den Tafelrand (Hasans Screenshot).
  - Geprüft per 375-px-iframe-Messung: Start/Kundenstimmen/Kontakt
    überlauffrei (scrollWidth = 375), Klick-Maske funktional
    (maske=offen, voller Text), Desktop-Gegencheck Kopf/Fuß sauber,
    Verweis-Check 0 Fehler.
- **Kopfzeile einzeilig** (Hasans Nachbesserung: „Start soll oben
  neben Logo, dann Leistungen, dann Menü/Warenkorb/H-D/Sprache, alle
  in eine Zeile; im Menü nicht mehr doppelt; beim Seitenwechsel
  gleich"): `.kopf-schnell` aus der zweiten Zeile in die Kopfzeile
  verschoben (im DOM vor die Hauptnavigation, `margin-inline-end:
  auto` hält sie am Logo); Menü-Dropdown blendet die ersten zwei
  Punkte aus (`li:nth-child(-n+2)`, ab 840 px wieder alle). Der
  Menü-Knopf trägt jetzt Burger-Symbol + Wort — unter 480 px wird er
  zum runden ☰-Knopf. Unter 480 px alles verdichtet (Logo 34 px,
  Rund-Knöpfe 36 px, Links 13 px, türkische Sonderregel wegen „Ana
  Sayfa/Hizmetler"). Per iframe-Messung bei 375 px: de/tr/ru/zh/en
  einzeilig ohne Abschneiden; Rest-Sicherheitsnetz = unsichtbares
  seitliches Rollen der zwei Links. Cache `?v=81`.

## 2026-07-07 (morgens) — Feinschliff-Serie + Tiefen-Hintergrund Sternen-Staub

- Feinschliff-Serie nach Hasans Screenshots: Firmenname aus der
  Kopfleiste in den Held (große Hauptüberschrift, Slogan kleiner),
  Sprachauswahl als runder Flaggen-Knopf ganz rechts (DE/EN/PL/AR/ZH,
  Verweise noch Platzhalter), Kopf- und Fußleiste schwarz-metallisch-
  glasig, Vertrauensbereich als 4 Tafeln baugleich zu den Schritt-Karten
  (farbige Symbol-Kreise außen), Sozial-Kacheln statt Kreise, eine
  einzige Hintergrund-Ebene, Fließtexte hell = richtig schwarz.
- **Tiefen-Hintergrund:** 2 Recherche-Agenten (Techniken + Beispiele),
  Vergleichsseite mit 10 Varianten in 2 Runden; Hasans Wahl: Variante H
  (Sternen-Staub), verfeinert: nur feiner Staub in zwei Ebenen, 5
  Mini-Funkeln, keine Licht-Höfe. Umgesetzt als Body-Hintergrund auf
  allen Seiten + Schatten-Tokens (getönt, Lichtkante) + Boden-Ellipsen.
  Entscheidungs-Datei danach in den Papierkorb. Cache `?v=29`.
- Merker: `server.py` (no-store) für die lokale Ansicht nutzen —
  Browser-Cache hatte mehrfach alte Stände gezeigt.

## 2026-07-07 (nachts, 5) — Held-Umbau + Sozial-Leiste, Startseite weiter gekürzt

- Überschrift fest zweizeilig: „Gepflegte Füße" / „Bequem bei Ihnen zu
  Hause" (zweite Zeile bricht nie um, fluide Schriftgröße); klarer
  Abstands-Rhythmus Überschrift → Text → Knöpfe; Held-Text im
  **Blocksatz** (Hasans Vorgabe).
- Neue **Sozial-Leiste** unter den Knöpfen: WhatsApp, YouTube, TikTok in
  Original-Plattformfarben (Original-Glyphen als Inline-SVG) + Kontakt-Knopf
  (Telefon-Symbol, Markenfarbe). YouTube/TikTok-Adressen fehlen noch (TODO).
- Auf Hasans Wunsch zusätzlich von der Startseite entfernt: der
  „Gut zu wissen"-Abgrenzungskasten (bleibt auf der Leistungs-Seite —
  rechtlich dort entscheidend) und der Aufruf „Bereit für gepflegte Füße?".
- Startseite jetzt: Held → Vertrauensleiste → Ablauf → Fußleiste.
  Cache `?v=8`.

## 2026-07-07 (nachts, 4) — Startseite entschlackt (Hasans Vorgabe)

- Auf Hasans Wunsch von der Startseite entfernt: Badge „Ausgebildeter
  Fachfußpfleger", Zeile „Oder rufen Sie direkt an …",
  Leistungs-Vorschau (3 Karten), Zahlen-Sektion (14+/100 %/1),
  Kundenstimmen-Auszug.
- Startseite jetzt: Held → Vertrauensleiste → Ablauf (4 Schritte) →
  Abgrenzungs-Hinweis → Aufruf → Fußleiste. Leistungen/Preise sind über
  den Held-Knopf und die Navigation erreichbar.
- Zwischenfall: erster Entfernungs-Versuch hatte durch einen mehrdeutigen
  Suchanker die Kopfzeile beschädigt → per `git checkout` wiederhergestellt
  und mit eindeutigen Ankern sauber neu ausgeführt (Merke: Anker immer auf
  Eindeutigkeit prüfen, Text kommt auch in Meta-Beschreibungen vor).

## 2026-07-07 (nachts, 3) — Logo: Original in hoher Auflösung statt Nachbau

- Hasan: Logo soll **original bleiben**, nur bessere Qualität. Fund: Auf dem
  Strato-Server lag die unverkleinerte Originaldatei (1595×1600 px,
  transparenter Hintergrund) — heruntergeladen und verwendet.
- Telefonnummer unten per präzisem PNG-Zuschnitt entfernt (eigenes
  Skript, da sips-Crop unzuverlässig); Versuch eines runden
  Zeichen-Ausschnitts verworfen (Schrift ist über die Fußspitze gemalt).
- Eingesetzt: `bilder/logo-klein.png` (400 px) in Kopfleiste (54 px),
  Fußleiste (170 px) und als Favicon; `bilder/logo.png` (800 px) als
  große Fassung. SVG-Nachbau, Zeichen-Ausschnitt und altes Mini-PNG
  gelöscht. Cache `?v=7`.

## 2026-07-07 (nachts, 2) — Logo als hochwertiges SVG neu gebaut

- Hasans Rückmeldung: eingebautes PNG-Logo wirkte unscharf/minderwertig →
  Bildmarke als **Vektor neu gezeichnet** (`bilder/logo.svg`): zwei
  Fußabdrücke „im Gang" mit Blau-Verlauf, Verlaufs-Ring, Gold-Funkeln;
  **ohne Telefonnummer** (Hasans Vorgabe). Drei Entwurfs-Runden mit
  Render-Sichtprüfung (hell/dunkel, 300/88/44 px).
- Eingesetzt: Kopfleiste 46 px, Fußleiste 112 px, **SVG-Favicon** auf allen
  7 Seiten; weiße Kreis-Hüllen entfernt (SVG bringt eigene Scheibe mit).
- Original-PNG bleibt als Referenz (`bilder/logo-alt.png`). Cache `?v=6`.

## 2026-07-07 (nachts) — Phase 4 (Teil 2): Kundendaten komplett + Palette B

- Hasans Antworten eingepflegt: Preise bestätigt; **Anfahrt im Preis
  enthalten**; Einzugsgebiet **Weilimdorf + Umkreis bis 50 km** (Hasan
  korrigierte 100 → 50 km); Dauer ca. 30 Min. (Fachfußpflege + FAQ);
  Zahlung bar/Rechnung/PayPal; WhatsApp = gleiche Nummer.
- **Design-Entscheidung B:** Palette von Grün auf **Petrol-Blau + Gold**
  umgestellt (hell + dunkel), passend zu Kunden-Logo/Flyer/Arbeitskleidung.
  Tokens umbenannt `--gruen`→`--marke` (+ `-hover`, `-hell`).
- **Logo eingebaut** (Kundenwunsch): Kopfleiste (weißer Kreis, 44 px) und
  Fußleiste (108 px) auf allen Seiten; Datei `bilder/logo-alt.png`.
- Cache-Version `?v=5`; Sichtprüfung hell/dunkel nach Palettenwechsel.

## 2026-07-07 (abends) — Strato-Sicherung + Phase 4 (Teil 1)

- Öffentliche alte Website vollständig gesichert nach
  `~/Desktop/Strato-Sicherung Norbert/` (203 Dateien; Strato-Baukasten hat
  keinen Export — Sicherung über die veröffentlichte Seite; Session-Link-
  Warnung an Hasan, Strato-Kündigung erst nach Domain-Umzug!).
- Funde: Flyer-PDF mit Preisen (48/30/57 €), Impressum (Mittenfeldstraße 39,
  70499 Stuttgart), E-Mail norbertsmobilefusspflege@gmx.de, Berufshaftpflicht
  Allianz, 4 Arbeitsfotos + Porträt + Logo (blau/gold).
- Eingepflegt: echte Leistungen/Preise (3 Angebote statt 6 Vermutungs-Karten),
  Fotos (Held, Porträt, Galerie), E-Mail überall, Impressum + Datenschutz-
  Verantwortlicher, Vertrauenspunkt „Berufshaftpflichtversichert (Allianz)",
  Stuttgart in Titel/Texten/Einzugsgebiet, Flyer als
  `DOKU/Preisliste-Flyer-alt.pdf` gesichert.
- Offen (siehe TODO): USt-Status, Anfahrtsregelung, Stadtteile, Dauer je
  Leistung, Zeiten, Zahlungsarten, Kundenstimmen, WhatsApp-Bestätigung,
  Marken-Frage Blau/Grün.

## 2026-07-07 (später) — Mobile-First-Umbau + Sprachen entschieden

- Kundenklärung durch Hasan: Seite wird hauptsächlich im **Handy-Browser**
  genutzt; Sprachen **DE, EN, PL, AR, ZH** als echte Versionen (kein Widget).
- `style.css` komplett auf **Mobile-First** umgebaut: Basis-Styles = Handy
  (eine Spalte, Menü-Knopf, Aktionsleiste unten, kompaktere Abstände),
  Erweiterungen ab 640 px (2 Spalten), 840 px (Desktop-Navigation, Held
  zweispaltig, Aktionsleiste weg), 1000 px (volle Raster).
- Richtungs-Eigenschaften auf **logische CSS-Eigenschaften** umgestellt
  (`inline-start/-end`, `block-start/-end`) — Vorbereitung für Arabisch (RTL).
- Preistabelle in Wisch-Hülle `.tabelle-rolle` (auf dem Handy horizontal
  wischbar statt gequetscht). Cache-Version aller Seiten auf `?v=2`.
- Fahrplan/TODO/REGELN entsprechend aktualisiert (Sprachversionen nach
  Phase 4; Muttersprachler-Gegenlesen als Prüfpunkt).
- Sichtprüfung per headless Chrome (hell + dunkel, 500/1000/1024/1280 px):
  Kopfzeile war zwischen 1000 und 1100 px zu eng → Desktop-Navigation
  erst ab 1000 px (darunter Menü-Knopf + Aktionsleiste), Nav-Punkt heißt
  jetzt „Leistungen", Kopfzeile verdichtet. Cache-Version `?v=3`.

## 2026-07-07 — Projektstart: Recherche + Phasen 1–3

**Recherche** (zwei Agenten, Ergebnisse mit Quellen auf dem Desktop:
`~/Desktop/Claude Ausgabe/Fusspflege-Website-Recherche.html`):

- Ist-Zustand der alten Strato-Seite erfasst (Norbert Szczepanik,
  Fachfußpfleger 2024, FAY-Kooperation, Telefon, Seitenaufbau).
- Beispiel-Seiten, übliche Preise (mobil 35–55 €), Rechtslage (PodG,
  DDG-Impressum, Google-Fonts-Urteil, BFSG greift nicht).
- Design-Leitlinien Zielgruppe 45+: hoher Kontrast, 18 px, dezente
  Animationen, kein Parallax.

**Gebaut:**

- Projektordner `~/Desktop/Projekte/WEB/Norbert` nach dem Muster der
  Nachbar-Projekte (MikaTec-Seitenstruktur, netz-atlas-DOKU).
- Schriften Lora + Source Sans 3 lokal (WOFF2, via google-webfonts-helper).
- `style.css`: Design-System mit Themen-Tokens — hell (Standard, gedämpftes
  warmes Papierweiß) und dunkel (Grün-Anthrazit); Komponenten: Kopfleiste,
  Held, Vertrauensleiste, Karten, Schritte, Preistabelle, Zahlen,
  Kundenstimmen, FAQ, Formular, Kontakt-Kacheln, Ortsliste, Aufruf,
  Fußleiste, mobile Aktionsleiste.
- `js/thema.js` (Thema ohne Flackern, Standard hell, folgt sonst dem System)
  und `js/main.js` (Umschalter, mobiles Menü, Scroll-Einblenden,
  Zahlen-Zähler, Jahr) — alles hinter `prefers-reduced-motion`.
- Alle 7 Seiten gebaut: `index`, `leistungen`, `ueber-mich`,
  `kundenstimmen`, `kontakt`, `impressum`, `datenschutz` — echte Fakten von
  der alten Seite übernommen, fehlende Kundendaten als sichtbare
  Platzhalter (`.platzhalter`).
- Rechtliche Leitplanken direkt eingebaut: Abgrenzung kosmetisch/podologisch,
  keine geschützten Begriffe, Rechtsseiten als gekennzeichneter Entwurf.
- DOKU angelegt (md-Quellen + erzeugte HTML-Ansichten), git initialisiert.

**Zwischenruf von Hasan während des Baus:** Dunkelmodus + gedämpfter
Hellmodus (umgesetzt), Mehrsprachigkeit wie auf der alten Seite
(Entscheidung offen — siehe Fahrplan).
