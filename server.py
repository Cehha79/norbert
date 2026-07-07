#!/usr/bin/env python3
"""Entwicklungs-Server ohne Browser-Zwischenspeicher.

Start:   python3 server.py        (dann http://localhost:8080/ öffnen)

Der einfache `python3 -m http.server` sendet keine Cache-Regeln — Browser
heben die Seiten dann eigenmächtig auf und zeigen beim Weiterklicken alte
Stände. Dieser Server sendet `Cache-Control: no-store`, damit immer der
aktuelle Datei-Stand geladen wird.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class OhneCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    print("Läuft auf http://localhost:8080/  (Beenden: Strg+C)")
    ThreadingHTTPServer(("", 8080), OhneCache).serve_forever()
