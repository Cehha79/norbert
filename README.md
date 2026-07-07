# Norberts mobile Fußpflege

Kunden-Website für **Norbert Szczepanik** — kosmetische Fußpflege als
Hausbesuch. Erster Kundenauftrag der Firma **MikaTec**.

- **Live (Ziel):** https://norberts-mobile-fusspflege.de
- **Technik:** statisches HTML/CSS/JS, kein Build, keine Fremdabrufe,
  Schriften lokal, hell/dunkel umschaltbar
- **Hosting (Ziel):** GitHub Pages, Domain-Umzug von Strato

## Lokal ansehen

```
python3 -m http.server 8080
```

dann http://localhost:8080/ öffnen.

## Doku

Projekt-Doku im Ordner `DOKU/` (HTML-Ansichten, Quellen in `DOKU/md/`):
WICHTIG · STRUKTUR · REGELN · Fahrplan · TODO · Live-Dokumentation ·
Tests-Qualitaet

## Veröffentlichen (GitHub Pages)

Öffentliches Repo: https://github.com/Cehha79/norberts-mobile-fusspflege
(nur die Website — OHNE DOKU/, CLAUDE.md, server.py). Live-Adresse
(Staging): https://cehha79.github.io/norberts-mobile-fusspflege/

Neuen Stand hochladen:

```
D=$(mktemp -d)
gh repo clone Cehha79/norberts-mobile-fusspflege "$D"
rsync -a --delete --exclude ".git" --exclude "DOKU" --exclude "CLAUDE.md"   --exclude "server.py" --exclude ".gitignore" --exclude "README.md"   --exclude ".DS_Store" ./ "$D/"
cd "$D" && git add -A && git commit -m "Stand JJJJ-MM-TT" && git push
```

(README.md im öffentlichen Repo ist eine eigene Kurzfassung — nicht
überschreiben, darum der --exclude.)
