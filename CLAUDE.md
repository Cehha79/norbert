# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Was das ist

Kunden-Website **„Norberts mobile Fußpflege"** (norberts-mobile-fusspflege.de) —
erster Kundenauftrag der Firma MikaTec. Eine **statische, abhängigkeitsfreie
Mehrseiten-Website** (Vanilla HTML/CSS/JS, kein Build, kein Framework, keine
Fremdabrufe) für einen **kosmetischen Fußpfleger** mit Hausbesuchen.
Ziel: lokal fertig bauen → GitHub Pages → Domain von Strato umziehen.

## Ausführen

Kein Build, kein Test-Framework. Ansehen:

```
python3 -m http.server 8080      # dann http://localhost:8080/ öffnen
```

## Aufbau

7 Seiten mit identischer Kopf-/Fußleiste und mobiler Aktionsleiste:
`index`, `leistungen`, `ueber-mich`, `kundenstimmen`, `kontakt`,
`impressum`, `datenschutz`. Ein Stylesheet (`style.css`, Themen-Tokens
hell/dunkel), zwei Skripte (`js/thema.js` synchron im Head, `js/main.js`
defer). Details in `DOKU/md/STRUKTUR.md`.

## Harte Regeln (rechtlich!)

- **Nie** „Podologe" oder „medizinischer Fußpfleger / medizinische Fußpflege"
  als Bezeichnung für den Betreiber — geschützte Berufsbezeichnungen (PodG).
- Kein Heilkunde-Vokabular („Behandlung von …", „Therapie", „Diagnose").
  Erlaubt: „kosmetische Fußpflege", „Pflege gesunder Füße".
- Der Abgrenzungs-Hinweis (keine podologischen Fälle) bleibt auf Start- und
  Leistungs-Seite.
- Keine Fremdabrufe: Schriften/Bilder/Skripte nur lokal (Google-Fonts-Urteil).
  Dadurch braucht die Seite kein Cookie-Banner — so halten.

## Konventionen

- Deutsche Namen in Code und Klassen (`.knopf`, `--gruen`, `zaehleHoch`).
- Design nur über die Tokens am Anfang von `style.css`; beide Themen prüfen.
- Fehlende Kundendaten als `<span class="platzhalter">…</span>` markieren —
  nie erfinden.
- Nach CSS/JS-Änderung Cache-Version `?v=N` in allen 7 HTML-Dateien hochzählen.
- Fließtext ≥ 18 px, Klickflächen ≥ 44 px, Bewegung hinter
  `prefers-reduced-motion` (Zielgruppe 45+).
- Gemeinsame Bereiche (Kopf, Fuß, Aktionsleiste) sind kopiert — Änderungen
  auf **allen** Seiten nachziehen.
- DOKU: Quellen in `DOKU/md/*.md`, HTML-Ansichten daraus erzeugen
  (nie von Hand editieren). Bei größeren Schritten `Live-Dokumentation.md`
  und `TODO.md` pflegen.
- Committen/Pushen nur nach Freigabe durch Hasan.
