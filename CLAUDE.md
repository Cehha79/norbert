# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Was das ist

Kunden-Website **„Norberts mobile Fußpflege"** (norberts-mobile-fusspflege.de) —
erster Kundenauftrag der Firma MikaTec. Eine **statische, abhängigkeitsfreie
Mehrseiten-Website** (Vanilla HTML/CSS/JS, kein Build, kein Framework) für
einen **kosmetischen Fußpfleger** mit Hausbesuchen.
**Staging LIVE:** https://cehha79.github.io/norberts-mobile-fusspflege/
(öffentliches Repo `Cehha79/norberts-mobile-fusspflege`) — beim Livegang
kommt die Domain dazu.

## Ausführen

Kein Build, kein Test-Framework. Ansehen:

```
python3 server.py      # Port 8081 (8080 gehört dem MikaTec-Server!)
```

Veröffentlichen: rsync-Kopie ohne DOKU/CLAUDE.md/server.py ins öffentliche
Repo pushen — genauer Ablauf steht im README.md unter „Veröffentlichen".
**DOKU/ und CLAUDE.md dürfen NIE ins öffentliche Repo.**

## Aufbau

**65 Seiten**: 11 deutsche Seiten (`index`, `leistungen`, `produkte`,
`produkt-bereich`, `warenkorb`, `kasse`, `ueber-mich`, `kundenstimmen`,
`kontakt`, `impressum`, `datenschutz`) + **6 Sprachordner** `tr/ en/ pl/
ru/ ar/ zh/` mit je 9 Seiten (ohne Rechtsseiten; `ar/` ist RTL). Ein
Stylesheet (`style.css`, Themen-Tokens hell/dunkel, Kennfarben `--lk`),
Skripte: `js/thema.js` (synchron), `js/main.js` (defer), Shop =
`js/produkte.js` (deutsche Daten + Sprach-Schnittstelle) + je Sprache
`js/shop-<code>.js`. Details in `DOKU/md/STRUKTUR.md`.

## Harte Regeln (rechtlich!)

- **Nie** „Podologe" oder „medizinischer Fußpfleger / medizinische Fußpflege"
  als Bezeichnung für den Betreiber — geschützte Berufsbezeichnungen (PodG).
  Gilt in ALLEN Sprachen (tr: nie „medikal/tıbbi ayak bakımı", en: nie
  „podiatrist/medical pedicure" usw.).
- Kein Heilkunde-Vokabular („Behandlung von …", „Therapie", „Diagnose").
  Erlaubt: „kosmetische Fußpflege", „Pflege gesunder Füße".
- Der Abgrenzungs-Hinweis (keine podologischen Fälle) bleibt auf der
  Leistungs-Seite.
- Shop-Artikel (128) und Kundenstimmen (18) sind **gekennzeichnete
  Muster-Daten** — vor Livegang ersetzen (siehe WICHTIG/TODO). Darum ist
  `robots.txt` auf Disallow (Staging-Sperre).
- Keine Fremdabrufe (Schriften/Bilder/Skripte lokal). Einzige dokumentierte
  Ausnahme: die Zwei-Klick-Karte lädt OSM-/EOX-Kacheln erst nach
  Einwilligung. Kein Cookie-Banner nötig — so halten.

## Konventionen

- Deutsche Namen in Code und Klassen (`.knopf`, `--marke`, `zaehleHoch`).
- Design nur über die Tokens am Anfang von `style.css`; beide Themen prüfen.
- Fehlende Kundendaten als `<span class="platzhalter">…</span>` markieren —
  nie erfinden.
- Nach CSS/JS-Änderung Cache-Version `?v=N` in **allen 65** HTML-Dateien
  hochzählen (Stand: style v=81, main.js v=20, produkte.js v=10).
- Fließtext ≥ 18 px, Klickflächen ≥ 44 px (Kopfzeile unter 480 px: 36–40 px
  als bewusste Ausnahme), Bewegung hinter `prefers-reduced-motion`
  (Zielgruppe 45+).
- Kopf-/Fußzeile sind kopiert — Änderungen per Skript auf **allen 65
  Seiten** nachziehen; Text-Änderungen zusätzlich in den 6 Sprachordnern,
  beim Shop auch in `js/shop-<code>.js`.
- Handy-Prüfung: Headless-Chrome hat ~500 px Mindestbreite — echte
  375-px-Messungen nur über den iframe-Trick (siehe Live-Dokumentation).
- DOKU: Quellen in `DOKU/md/*.md`, HTML-Ansichten mit
  `python3 DOKU/md2doku.py` erzeugen (nie von Hand). Bei größeren Schritten
  `Live-Dokumentation.md` und `TODO.md` pflegen; offene Punkte auch in
  `DOKU/Claude Ausgabe/Offene-Punkte.html`.
- Committen/Pushen nur nach Freigabe durch Hasan.
