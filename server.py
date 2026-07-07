#!/usr/bin/env python3
"""Entwicklungs-Server ohne Browser-Zwischenspeicher.

Start:   python3 server.py         (dann http://localhost:8081/ öffnen)
         python3 server.py 9000    (anderer Port, falls 8081 belegt ist)

Standard-Port ist 8081, weil auf diesem Mac unter 8080 bereits der
MikaTec-Entwicklungs-Server läuft.

Der einfache `python3 -m http.server` sendet keine Cache-Regeln — Browser
heben die Seiten dann eigenmächtig auf und zeigen beim Weiterklicken alte
Stände. Dieser Server sendet `Cache-Control: no-store`, damit immer der
aktuelle Datei-Stand geladen wird.
"""
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class OhneCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8081
    print(f"Läuft auf http://localhost:{port}/  (Beenden: Strg+C)")
    ThreadingHTTPServer(("", port), OhneCache).serve_forever()
