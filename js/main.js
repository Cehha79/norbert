// Norberts mobile Fußpflege — gemeinsames Skript aller Seiten.
// Vanilla JS, keine Abhängigkeiten. Bewegung nur, wenn der Nutzer sie zulässt.
(function () {
  'use strict';

  var ruhig = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Hell-/Dunkel-Umschalter ---------- */
    var KEY = 'nf-thema';
    var SONNE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    var MOND  = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

    function istDunkel() {
      return document.documentElement.getAttribute('data-theme') === 'dunkel';
    }
    var themaKnopf = document.querySelector('.thema-knopf');
    if (themaKnopf) {
      themaKnopf.innerHTML = istDunkel() ? SONNE : MOND;
      themaKnopf.addEventListener('click', function () {
        var dunkel = !istDunkel();
        if (dunkel) document.documentElement.setAttribute('data-theme', 'dunkel');
        else document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem(KEY, dunkel ? 'dunkel' : 'hell'); } catch (e) {}
        themaKnopf.innerHTML = dunkel ? SONNE : MOND;
      });
    }

    /* ---------- Video-Hintergrund (Produkte): Quelle je Thema ---------- */
    var videoGrund = document.querySelector('.hintergrund-video video');
    if (videoGrund) {
      var setzeGrundVideo = function () {
        var art = istDunkel() ? 'dunkel' : 'hell';
        videoGrund.poster = 'bilder/hintergrund-' + art + '.jpg?v=4';
        if (ruhig) return;                    /* reduzierte Bewegung: nur Standbild */
        var quelle = 'bilder/hintergrund-' + art + '.mp4?v=4';
        if (videoGrund.getAttribute('src') !== quelle) {
          videoGrund.setAttribute('src', quelle);
          var p = videoGrund.play();
          if (p && p.catch) p.catch(function () {});
        }
      };
      setzeGrundVideo();
      /* Thema-Umschalter ändert data-theme am <html> — darauf reagieren */
      if ('MutationObserver' in window) {
        new MutationObserver(setzeGrundVideo)
          .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      }
    }

    /* ---------- Mobile Navigation ---------- */
    var navKnopf = document.querySelector('.nav-knopf');
    var nav = document.querySelector('.hauptnav');
    if (navKnopf && nav) {
      navKnopf.addEventListener('click', function () {
        var offen = nav.classList.toggle('offen');
        navKnopf.setAttribute('aria-expanded', offen ? 'true' : 'false');
      });
    }

    /* ---------- Sanftes Einblenden beim Scrollen ---------- */
    var ziele = document.querySelectorAll('.einblenden');
    if (ruhig || !('IntersectionObserver' in window)) {
      ziele.forEach(function (el) { el.classList.add('sichtbar'); });
    } else if (ziele.length) {
      var io = new IntersectionObserver(function (eintraege) {
        eintraege.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('sichtbar');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      ziele.forEach(function (el, i) {
        el.style.transitionDelay = (i % 3) * 80 + 'ms';
        io.observe(el);
      });
    }

    /* ---------- Zahlen hochzählen (einmalig beim Einscrollen) ---------- */
    var zahlen = document.querySelectorAll('[data-zaehle]');
    function zaehleHoch(el) {
      var ziel = parseInt(el.getAttribute('data-zaehle'), 10);
      if (isNaN(ziel)) return;
      var dauer = 1200, start = null;
      function schritt(zeit) {
        if (!start) start = zeit;
        var anteil = Math.min((zeit - start) / dauer, 1);
        el.textContent = Math.round(ziel * (1 - Math.pow(1 - anteil, 3)));
        if (anteil < 1) requestAnimationFrame(schritt);
      }
      requestAnimationFrame(schritt);
    }
    if (zahlen.length) {
      if (ruhig || !('IntersectionObserver' in window)) {
        zahlen.forEach(function (el) { el.textContent = el.getAttribute('data-zaehle'); });
      } else {
        var zio = new IntersectionObserver(function (eintraege) {
          eintraege.forEach(function (e) {
            if (e.isIntersecting) { zaehleHoch(e.target); zio.unobserve(e.target); }
          });
        }, { threshold: 0.5 });
        zahlen.forEach(function (el) { zio.observe(el); });
      }
    }

    /* ---------- Kundenstimmen: Pfeile rollen das Band seitlich ---------- */
    var rolle = document.querySelector('.stimmen-rolle');
    if (rolle) {
      var band = rolle.querySelector('.stimmen-raster');
      rolle.querySelectorAll('.rolle-pfeil').forEach(function (pfeil) {
        pfeil.addEventListener('click', function () {
          var richtung = pfeil.classList.contains('rolle-vor') ? 1 : -1;
          band.scrollBy({
            left: richtung * band.clientWidth,
            behavior: ruhig ? 'auto' : 'smooth'
          });
        });
      });
    }

    /* ---------- Bewertung absenden: öffnet WhatsApp bzw. E-Mail-Programm ---------- */
    var bewertung = document.getElementById('bewertung-formular');
    if (bewertung) {
      /* Sterne-Auswahl: Klick auf Stern n füllt die Sterne 1 bis n */
      var sterneWahl = bewertung.querySelector('.sterne-wahl');
      var sterneWert = document.getElementById('b-sterne');
      var sterneKnoepfe = bewertung.querySelectorAll('.stern');
      sterneKnoepfe.forEach(function (knopf) {
        knopf.addEventListener('click', function () {
          sterneWert.value = knopf.getAttribute('data-wert');
          sterneWahl.classList.remove('fehlt');
          sterneKnoepfe.forEach(function (k) {
            k.classList.toggle('gewaehlt',
              parseInt(k.getAttribute('data-wert'), 10) <= parseInt(sterneWert.value, 10));
          });
        });
      });
      var eingabenOk = function () {
        if (!sterneWert.value) {
          sterneWahl.classList.add('fehlt');
          sterneKnoepfe[0].focus();
          return false;
        }
        return bewertung.reportValidity();
      };
      var bewertungsText = function () {
        var name = document.getElementById('b-name').value.trim();
        var ort = document.getElementById('b-ort').value.trim();
        var text = document.getElementById('b-text').value.trim();
        return 'Meine Bewertung für Norberts mobile Fußpflege\n\n' +
          'Sterne: ' + sterneWert.value + ' von 5\n' +
          'Von: ' + name + (ort ? ', ' + ort : '') + '\n\n' +
          text + '\n\n' +
          'Mit der Veröffentlichung auf der Website bin ich einverstanden.';
      };
      document.getElementById('b-whatsapp').addEventListener('click', function () {
        if (!eingabenOk()) return;
        window.open('https://wa.me/4917686961032?text=' +
          encodeURIComponent(bewertungsText()), '_blank', 'noopener');
      });
      document.getElementById('b-mail').addEventListener('click', function () {
        if (!eingabenOk()) return;
        location.href = 'mailto:norbertsmobilefusspflege@gmx.de' +
          '?subject=' + encodeURIComponent('Meine Bewertung') +
          '&body=' + encodeURIComponent(bewertungsText());
      });
    }

    /* ---------- Sprachauswahl: Klick daneben schließt sie ---------- */
    var sprache = document.querySelector('.sprache');
    if (sprache) {
      document.addEventListener('click', function (e) {
        if (sprache.open && !sprache.contains(e.target)) sprache.open = false;
      });
    }

    /* ---------- Leistungs-Masken (Detail-Fenster) ---------- */
    document.querySelectorAll('[data-maske]').forEach(function (tafel) {
      var maske = document.getElementById(tafel.getAttribute('data-maske'));
      if (!maske || typeof maske.showModal !== 'function') return;
      function oeffnen() { if (!maske.open) maske.showModal(); }
      tafel.addEventListener('click', oeffnen);
      tafel.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); oeffnen(); }
      });
    });
    document.querySelectorAll('dialog.maske').forEach(function (maske) {
      var zu = maske.querySelector('.maske-schliessen');
      if (zu) zu.addEventListener('click', function () { maske.close(); });
      maske.addEventListener('click', function (e) {
        if (e.target === maske) maske.close();   /* Klick auf den abgedunkelten Rand */
      });
    });

    /* ---------- Warenkorb-Zähler in der Kopfleiste ---------- */
    window.nfKorbBadge = function () {
      var zahl = document.querySelector('.korb-zahl');
      if (!zahl) return;
      var korb = {};
      try { korb = JSON.parse(localStorage.getItem('nf-warenkorb')) || {}; } catch (e) {}
      var summe = 0;
      Object.keys(korb).forEach(function (k) { summe += korb[k]; });
      zahl.textContent = summe;
      zahl.hidden = summe === 0;
    };
    window.nfKorbBadge();

    /* ---------- Jahr in der Fußleiste ---------- */
    var jahr = document.querySelector('[data-jahr]');
    if (jahr) jahr.textContent = new Date().getFullYear();
  });
})();
