/* ============================================================
   SCRIPT.JS — Raghav Creative Portfolio
   GSAP + Lenis + Premium Interactions
   ============================================================ */

'use strict';

/* ============================================================
   PROJECT DATA
   ============================================================ */
const PROJECTS = [
  // ── BRANDING ──────────────────────────────────────────────
  { img: '3D Logo Mockup on Glass Wall.webp',  title: 'Makeover by Jyoti',        sub: 'Beauty Brand · 3D Identity',            cat: 'branding'  },
  { img: 'logo.webp',                           title: 'NodeConnect',               sub: 'Tech Startup Logo Design',              cat: 'branding'  },
  { img: 'INDICOLA.webp',                       title: 'IndiCola',                  sub: 'Beverage Brand Campaign',               cat: 'branding'  },
  { img: 'Indicola COlor (1).webp',             title: 'IndiCola Color System',     sub: 'Logo & Color Identity',                 cat: 'branding'  },
  { img: 'main logo (1).webp',                  title: 'Rudransh Trading Academy',  sub: 'Financial Brand Identity',              cat: 'branding'  },
  { img: 'logo o.webp',                         title: 'Brand Identity',            sub: 'Logo Design',                          cat: 'branding'  },

  // ── SPRING HILL RESORTS ───────────────────────────────────
  { img: 'WhatsApp Image 2026-05-20 at 11.51.26 AM.webp',      title: 'Spring Hill Resorts',      sub: 'Chilli Garlic Noodles · Food Creative',   cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.27 AM.webp',      title: 'Spring Hill Resorts',      sub: 'Dining · Restaurant Social Creative',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.27 AM (1).webp',  title: 'Crepe Suzette',            sub: 'Spring Hill Resorts · Food Creative',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.28 AM (1).webp',  title: 'Potato Balls',             sub: 'Spring Hill Resorts · Food Creative',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.29 AM.webp',      title: 'Veg Tandoori Platter',     sub: 'Spring Hill Resorts · Food Creative',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.29 AM (1).webp',  title: 'Wontons Done Right',       sub: 'Spring Hill Resorts · Food Creative',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.28 AM.webp',      title: 'Where Luxury Meets Leisure', sub: 'Spring Hill Resorts · Resort Creative',  cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.30 AM.webp',      title: 'Breathe in the Beauty',    sub: 'Spring Hill Resorts · Venue Creative',     cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.30 AM (1).webp',  title: 'Venue Hunting?',           sub: 'Spring Hill Resorts · Wedding Venue',      cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.31 AM.webp',      title: 'Plan Your Wedding',        sub: 'Spring Hill Resorts · Wedding Creative',   cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.31 AM (1).webp',  title: 'Spring Hill Weddings',     sub: 'Spring Hill Resorts · Instagram Reel',     cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-20 at 11.51.31 AM (2).webp',  title: 'Why Trust Spring Hill',    sub: 'Spring Hill Resorts · Brand Creative',     cat: 'social'    },

  // ── EVENTS ────────────────────────────────────────────────
  { img: 'lakhwinder wadali canada tour 2.webp',               title: 'Lakhwinder Wadali',    sub: 'Canada Tour 2025',                   cat: 'events'    },
  { img: 'lakhwinder wadali canada tour 3.webp',               title: 'Lakhwinder Wadali',    sub: 'Tour Series — Variant',              cat: 'events'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.07 PM.webp',     title: 'Sunday Symphony',      sub: 'Firangi Garden · Event Poster',      cat: 'events'    },
  { img: 'DJ NIGHT.webp',                                       title: 'The Christmas Affair', sub: 'DJ Night · Best Western Merrion',    cat: 'events'    },
  { img: 'TORONTO 1ST COFFEE PARTY.webp',                       title: 'Coffee Disco',         sub: "Toronto's First Coffee Party",       cat: 'events'    },
  { img: 'PARTY2 PS.webp',                                      title: 'Party Promo',          sub: 'Event Visual Design',                cat: 'events'    },
  { img: 'punjabi hood 2.webp',                                 title: 'Punjabi Hood',         sub: 'Cultural Event Poster',              cat: 'events'    },
  { img: 'DJ PARTY STORY.webp',                                 title: 'DJ Party Story',       sub: 'Instagram Story Format',             cat: 'events'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.09 PM.webp',     title: 'Live Event Creative',  sub: 'Event Poster Design',                cat: 'events'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.09 PM (1).webp', title: 'Live Event Creative',  sub: 'Event Poster Design',                cat: 'events'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.09 PM (2).webp', title: 'Live Event Creative',  sub: 'Event Poster Design',                cat: 'events'    },

  // ── PACKAGING ─────────────────────────────────────────────
  { img: 'WhatsApp Image 2026-05-20 at 4.07.34 PM.webp',       title: 'Dress Code Couture',   sub: 'Shopping Bag · Packaging Design',    cat: 'packaging' },
  { img: 'WhatsApp Image 2026-05-20 at 4.07.34 PM (1).webp',   title: 'Eagle Motel',          sub: 'Carry Bag · Brand Packaging',        cat: 'packaging' },
  { img: 'mockup.webp',                                         title: 'Velora Moments',       sub: 'Candle Label Design',                cat: 'packaging' },
  { img: 'premium chocolate box.webp',                          title: 'Vriiyogoo Chocolates', sub: 'Premium Chocolate Campaign',         cat: 'packaging' },
  { img: 'candle sticker.webp',                                 title: 'Candle Packaging',     sub: 'Label & Sticker Design',             cat: 'packaging' },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.10 PM (2).webp', title: 'Sifti Ice Cream',      sub: 'Strawberry Crunch Label',            cat: 'packaging' },
  { img: 'dvd.webp',                                            title: 'DVD Cover Design',     sub: 'Print & Packaging',                  cat: 'packaging' },
  { img: 'Karwachauth Special Packages.jpg',                   title: 'Karwachauth Special',  sub: 'Festival Packaging Campaign',        cat: 'packaging' },

  // ── SOCIAL MEDIA ──────────────────────────────────────────
  { img: 'black friday banner 2nd colour.webp',                 title: 'Black Friday Sale',    sub: 'Campaign Banner',                    cat: 'social'    },
  { img: 'black friday banner mobile.webp',                     title: 'Black Friday Mobile',  sub: 'Campaign · Mobile Format',           cat: 'social'    },
  { img: 'Navratri Offer.webp',                                 title: 'Navratri Special',     sub: 'Festival Campaign',                  cat: 'social'    },
  { img: 'govardhan puja.webp',                                 title: 'Govardhan Puja',       sub: 'Festival Digital Creative',          cat: 'social'    },
  { img: 'CANADA PR NURSES strok.webp',                         title: 'Canada PR Nurses',     sub: 'Immigration Campaign',               cat: 'social'    },
  { img: 'paper bags 2.webp',                                   title: 'Eco Paper Bags',       sub: 'B2B Marketing Creative',             cat: 'social'    },
  { img: 'sf.webp',                                             title: 'Anant Energy Products',sub: 'MC4 Connector Campaign',             cat: 'social'    },
  { img: 'POST 1.webp',                                         title: 'Social Creative',      sub: 'Digital Marketing Post',             cat: 'social'    },
  { img: 'post 2.webp',                                         title: 'Social Creative',      sub: 'Digital Marketing Post',             cat: 'social'    },
  { img: 'POST 8.webp',                                         title: 'Social Creative',      sub: 'Digital Marketing Post',             cat: 'social'    },
  { img: "INDIA'S TRUSTED MANUFACTURER FOR FROZEN KABAB.jpg",  title: 'Frozen Kabab Brand',   sub: 'FMCG Marketing Creative',            cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.08 PM.webp',      title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.08 PM (1).webp',  title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.08 PM (2).webp',  title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.10 PM.webp',      title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.10 PM (1).webp',  title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.37.11 PM.webp',      title: 'Digital Creative',     sub: 'Client Social Post',                 cat: 'social'    },
  { img: 'WhatsApp Image 2026-05-16 at 12.46.17 PM.webp',      title: 'Brand Idenity',     sub: 'Packaging & Merchandise Design',                 cat: 'branding'    },
  { img: 'feelings youtube.webp',                               title: 'YouTube Thumbnail',    sub: 'Digital Content Design',             cat: 'social'    },
  { img: 'masterclass.webp',                                    title: 'Masterclass Creative', sub: 'Digital Campaign',                   cat: 'social'    },
  { img: 'psychology of breeding.webp',                         title: 'Content Creative',     sub: 'Digital Post Design',                cat: 'social'    },
  { img: 'Team members.webp',                                   title: 'Team Profile',         sub: 'Corporate Social Creative',          cat: 'social'    },
  { img: 'POSTER 2 a.webp',                                     title: 'Poster Design',        sub: 'Digital Campaign Creative',          cat: 'social'    },

  // ── PRINT ─────────────────────────────────────────────────
  { img: 'brochure curved_page-0001.webp',                      title: 'Corporate Brochure',   sub: 'Multi-page Print Design · P1',       cat: 'print'     },
  { img: 'brochure curved_page-0002.webp',                      title: 'Corporate Brochure',   sub: 'Multi-page Print Design · P2',       cat: 'print'     },
  { img: 'MENU_page-0001.webp',                                 title: 'Restaurant Menu',      sub: 'F&B Print Design',                   cat: 'print'     },
  { img: 'WINTER COCKTAILS MENU AMRITSAR_page-0001.webp',       title: 'Winter Cocktail Menu', sub: 'Seasonal Menu Design',               cat: 'print'     },
  { img: 'WINTER COCKTAILS MENU AMRITSAR a5_page-0001.webp',    title: 'Cocktail Menu A5',     sub: 'Pocket Format Menu',                 cat: 'print'     },
  { img: 'nadiad a4.webp',                                      title: 'A4 Flyer Design',      sub: 'Print Marketing Material',           cat: 'print'     },
  { img: 'NP A4 FLYER-images-0.webp',                           title: 'Event Flyer',          sub: 'A4 Print Design',                    cat: 'print'     },
  { img: 'bakers navya 1_page-0001.webp',                       title: "Baker's Navya",        sub: 'Bakery Print Design',                cat: 'print'     },
  { img: 'AHUJA BOOK STORE.webp',                               title: 'Ahuja Book Store',     sub: 'Retail Print Design',                cat: 'print'     },
  { img: 'PAGE 10.webp',                                        title: 'Print Layout',         sub: 'Editorial Design',                   cat: 'print'     },

  // ── UI/UX ─────────────────────────────────────────────────
  { img: 'UI UX - 1 (1).webp',                                  title: 'CryptoX Portfolio App',sub: 'Mobile UI — Home Screen',            cat: 'uiux'      },
  { img: 'UI UX - 1 (2).webp',                                  title: 'CryptoX Portfolio App',sub: 'Mobile UI — Markets',                cat: 'uiux'      },
  { img: 'UI UX - 1 (3).webp',                                  title: 'CryptoX Portfolio App',sub: 'Mobile UI — Trade',                  cat: 'uiux'      },
  { img: 'UI UX - 1 (4).webp',                                  title: 'CryptoX Portfolio App',sub: 'Mobile UI — Portfolio',              cat: 'uiux'      },
  { img: 'UI UX - 1 (5).webp',                                  title: 'CryptoX Portfolio App',sub: 'Mobile UI — Activity',               cat: 'uiux'      },

  // ── CREATIVE ──────────────────────────────────────────────
  { img: 'design 6.webp',                                       title: 'Hustle Over Hope',     sub: 'Apparel Graphic · Warrior Series',   cat: 'creative'  },
  { img: 'design 7.webp',                                       title: 'GRINDER',              sub: 'Streetwear Graphic · Wings Edition', cat: 'creative'  },
  { img: 'design 8.webp',                                       title: 'SURVIVOR',             sub: 'Editorial Typography Design',        cat: 'creative'  },
  { img: 'thumbnail.webp',                                      title: 'Creative Thumbnail',   sub: 'Digital Visual Design',              cat: 'creative'  },
  { img: 'ChatGPT Image Sep 7, 2025, 07_40_07 PM.webp',           title: 'Mobile Numerology',        sub: 'Astrology Marketing Creative',        cat: 'social'    },
  { img: 'ChatGPT Image May 16, 2026, 12_52_15 PM.webp',          title: 'Name Numerology',          sub: 'Name Correction · Astrology Series',  cat: 'social'    },

  // ── BEHANCE ────────────────────────────────────────────────
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/da2d6e208443561.66eeac8c8c536.jpeg',   title: 'Banner Design',             sub: 'Visual Banner Design',              cat: 'social'    },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/49e379208443505.66eeac2d121fa.jpeg',     title: 'Social Media Posts',        sub: 'Social Media Design Series',        cat: 'social'    },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cce81c208443263.66eeaafdd07a5.jpeg',   title: 'Brochure Design',           sub: 'Corporate Print Design',            cat: 'print'     },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/eff8dc208443185.66eeaa8121a3f.jpg',    title: 'Graphical Ad',              sub: 'Mesh Tool Illustration',            cat: 'creative'  },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/43717d208443113.66eeaa1e05d39.jpeg',     title: 'Social Media Posts',        sub: 'Social Media Design Series',        cat: 'social'    },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ef290c208443059.66eea9bff2305.jpg',    title: 'Movie Poster',              sub: 'Cinematic Poster Design',           cat: 'creative'  },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c82597208442953.66eea92b974aa.jpeg',     title: 'Flyer Design',              sub: 'Event & Promotional Flyer',         cat: 'print'     },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6cb577208442867.66eea8c2719e1.jpeg',     title: 'Wedding Invite',            sub: 'Wedding Stationery Design',         cat: 'print'     },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9efa14208442097.66eea4fb0cadc.jpg',    title: 'PolyVector',                sub: 'Vector Illustration Art',           cat: 'creative'  },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/442ab2208442027.66eea4a8aa7be.jpg',    title: 'Chips Packet Design',       sub: 'Packaging & Label Design',          cat: 'packaging' },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c3794a208440873.66ee9efbe7807.jpeg',   title: 'Visiting Card Design',      sub: 'Print & Identity Design',           cat: 'print'     },
  { img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6a4ae5208440717.66ee9e5b0a607.jpeg',     title: 'Social Media Posts Design', sub: 'Social Media Design Series',        cat: 'social'    },
];

const CAT_LABELS = {
  branding:  'Branding',
  events:    'Events',
  packaging: 'Packaging',
  social:    'Social Media',
  print:     'Print',
  uiux:      'UI / UX',
  creative:  'Creative',
};

/* ============================================================
   UTILITY
   ============================================================ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
function lerp(a, b, t)    { return a + (b - a) * t; }
function escapeAttr(str)  {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ============================================================
   STATE
   ============================================================ */
let lbIndex      = 0;
let lbList       = [];
let activeFilter = 'all';
let mouseX = 0, mouseY = 0;
let curX   = 0, curY   = 0;
let ringX  = 0, ringY  = 0;

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
let lenis;

function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 1.15,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  // Drive Lenis ONLY via GSAP ticker — no separate RAF loop
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    // Fallback if GSAP not available
    function rafLoop(time) { lenis.raf(time); requestAnimationFrame(rafLoop); }
    requestAnimationFrame(rafLoop);
  }

  // Pause when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', () => {
    document.hidden ? lenis.stop() : lenis.start();
  });
}

/* ============================================================
   PRELOADER
   ============================================================ */
(function initLoader() {
  const loader = $('#loader');
  const nameEl = $('#ldrName');
  const subEl  = $('#ldrSub');
  const bar    = $('#ldrBar');
  const pct    = $('#ldrPct');

  const text = nameEl.textContent;
  nameEl.innerHTML = text.split('').map(c => c === ' ' ? '<span>&nbsp;</span>' : `<span>${c}</span>`).join('');
  const chars = $$('span', nameEl);

  let count = 0;
  bar.classList.add('grow');
  chars.forEach((c, i) => setTimeout(() => c.classList.add('in'), 80 + i * 50));
  setTimeout(() => subEl.classList.add('in'), 80 + chars.length * 50 + 80);

  const timer = setInterval(() => {
    count = Math.min(count + 1.5, 100);
    pct.textContent = Math.floor(count) + '%';
    if (count >= 100) {
      clearInterval(timer);
      pct.textContent = '100%';
      setTimeout(hideLoader, 300);
    }
  }, 18);

  function hideLoader() {
    loader.classList.add('out');
    setTimeout(() => {
      loader.style.display = 'none';
      revealHero();
      initLenis();
      initHorizontalScroll();
      initMagneticButtons();
    }, 900);
  }
})();

/* ============================================================
   HERO ENTRANCE
   ============================================================ */
function revealHero() {
  const eyebrow = $('#heroEyebrow');
  const hl1     = $('#hl1');
  const hl2     = $('#hl2');
  const hl3     = $('#hl3');
  const desc    = $('#heroDesc');
  const actions = $('#heroActions');
  const stats   = $('#heroStats');
  const cards   = $('#heroCards');

  setTimeout(() => eyebrow.classList.add('in'), 80);
  setTimeout(() => hl1.classList.add('in'),     200);
  setTimeout(() => hl2.classList.add('in'),     320);
  setTimeout(() => hl3.classList.add('in'),     440);
  setTimeout(() => desc.classList.add('in'),    540);
  setTimeout(() => actions.classList.add('in'), 660);
  setTimeout(() => stats.classList.add('in'),   800);
  setTimeout(() => cards.classList.add('in'),   380);
  setTimeout(runCounters, 950);
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
(function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot   = $('#cur');
  const ring  = $('#curRing');
  const label = $('#curLabel');

  let cursorMoved = false;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorMoved = true;
  }, { passive: true });

  (function loop() {
    if (cursorMoved) {
      curX  = lerp(curX,  mouseX, 0.88);
      curY  = lerp(curY,  mouseY, 0.88);
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      dot.style.left   = curX  + 'px';
      dot.style.top    = curY  + 'px';
      ring.style.left  = ringX + 'px';
      ring.style.top   = ringY + 'px';
      // Reset dirty flag once cursor is settled
      if (Math.abs(curX - mouseX) < 0.1 && Math.abs(ringX - mouseX) < 0.1) cursorMoved = false;
    }
    requestAnimationFrame(loop);
  })();

  // Hover expand on interactive elements
  const hoverSel   = 'a, button, .nav__lnk, .nav__cta, .fbtn, .skill, .svc-item';
  const viewSel    = '.fi, .gi, .hs-panel, .is-item';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(viewSel))  { ring.classList.add('view-on');  ring.classList.remove('big'); }
    else if (e.target.closest(hoverSel)) { dot.classList.add('big');  ring.classList.add('big');    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(viewSel))  ring.classList.remove('view-on');
    if (e.target.closest(hoverSel)) { dot.classList.remove('big');    ring.classList.remove('big'); }
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* ============================================================
   HERO PARALLAX (mouse)
   ============================================================ */
(function initParallax() {
  const cards = $$('.hc');
  if (!cards.length) return;
  let cx = 0, cy = 0, pcx = 0, pcy = 0;
  const speeds = [22, 14, 10];
  const rots   = [3.5, -4.5, 2];

  cards.forEach((c, i) => c.style.setProperty('--base-rot', rots[i]));

  let parallaxMoved = false;
  document.addEventListener('mousemove', e => {
    cx = (e.clientX / window.innerWidth  - 0.5) * 2;
    cy = (e.clientY / window.innerHeight - 0.5) * 2;
    parallaxMoved = true;
  }, { passive: true });

  (function loop() {
    if (parallaxMoved) {
      pcx = lerp(pcx, cx, 0.055);
      pcy = lerp(pcy, cy, 0.055);
      cards.forEach((c, i) => {
        const rot = rots[i] || 0;
        c.style.transform = `rotate(${rot}deg) translate(${pcx * speeds[i]}px, ${pcy * speeds[i]}px)`;
      });
      if (Math.abs(pcx - cx) < 0.001 && Math.abs(pcy - cy) < 0.001) parallaxMoved = false;
    }
    requestAnimationFrame(loop);
  })();
})();

/* ============================================================
   NAVBAR
   ============================================================ */
(function initNav() {
  const nav     = $('#nav');
  const burger  = $('#burger');
  const mobMenu = $('#mobMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 60);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobMenu.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
  });

  $$('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('open');
      mobMenu.classList.remove('open');
      document.body.classList.remove('locked');
    });
  });
})();

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagneticButtons() {
  if (typeof gsap === 'undefined') return;

  $$('.mag-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.32;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.32;
      gsap.to(btn, { x, y, duration: 0.5, ease: 'power3.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ============================================================
   HORIZONTAL SCROLL SHOWCASE (GSAP ScrollTrigger)
   ============================================================ */
function initHorizontalScroll() {
  const viewport = $('#hscrollViewport');
  const bar      = $('#hscrollBar');
  if (!viewport) return;

  // Wheel → horizontal scroll via RAF to avoid blocking the main thread
  let wheelPending = false, wheelDelta = 0;
  viewport.addEventListener('wheel', e => {
    e.preventDefault();
    wheelDelta += (e.deltaY !== 0 ? e.deltaY : e.deltaX) * 1.2;
    if (!wheelPending) {
      wheelPending = true;
      requestAnimationFrame(() => {
        viewport.scrollLeft += wheelDelta;
        wheelDelta = 0;
        wheelPending = false;
      });
    }
  }, { passive: false });

  // Progress bar
  if (bar) {
    viewport.addEventListener('scroll', () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      bar.style.width = (max > 0 ? (viewport.scrollLeft / max) * 100 : 0) + '%';
    }, { passive: true });
  }

  // Drag to scroll
  let dragging = false, startX = 0, scrollStart = 0, dragDist = 0;

  viewport.addEventListener('mousedown', e => {
    dragging   = true;
    startX     = e.clientX;
    scrollStart = viewport.scrollLeft;
    dragDist   = 0;
    viewport.classList.add('is-dragging');
  });
  window.addEventListener('mouseup', () => {
    dragging = false;
    viewport.classList.remove('is-dragging');
  });
  viewport.addEventListener('mousemove', e => {
    if (!dragging) return;
    dragDist = Math.abs(e.clientX - startX);
    viewport.scrollLeft = scrollStart - (e.clientX - startX);
  });
  // Prevent panel click after a drag
  viewport.addEventListener('click', e => {
    if (dragDist > 6) e.stopPropagation();
  }, { capture: true });
}

/* ============================================================
   GALLERY — RENDER
   ============================================================ */
function renderGallery(filter) {
  const container = $('#gal');
  container.innerHTML = '';

  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  lbList = list;

  const BATCH = 18;
  let rendered = 0;

  // IntersectionObserver to reveal items as they scroll into view
  const revealIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.opacity   = '1';
      e.target.style.transform = 'none';
      obs.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px 80px 0px' });

  function buildItem(p, idx) {
    const item = document.createElement('div');
    item.className = 'gi';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `View ${p.title}`);
    item.dataset.idx = idx;
    item.innerHTML = `
      <img src="${escapeAttr(p.img)}" alt="${escapeAttr(p.title)}" loading="lazy" decoding="async">
      <div class="gi__veil">
        <div class="gi__tag">${CAT_LABELS[p.cat] || p.cat}</div>
        <div class="gi__title">${p.title}</div>
        <div class="gi__sub">${p.sub}</div>
      </div>`;
    item.style.opacity   = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = `opacity .5s ease ${(idx % 9) * 40}ms, transform .5s ease ${(idx % 9) * 40}ms`;
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); });
    return item;
  }

  function renderBatch() {
    const end = Math.min(rendered + BATCH, list.length);
    const frag = document.createDocumentFragment();
    for (let i = rendered; i < end; i++) {
      const el = buildItem(list[i], i);
      frag.appendChild(el);
    }
    container.appendChild(frag);

    // Observe newly added items for reveal
    $$('.gi', container).slice(rendered).forEach(el => revealIO.observe(el));
    rendered = end;

    // Append sentinel to trigger next batch
    if (rendered < list.length) {
      const sentinel = document.createElement('div');
      sentinel.style.cssText = 'height:1px;width:100%;grid-column:1/-1;';
      container.appendChild(sentinel);
      const batchIO = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          batchIO.disconnect();
          sentinel.remove();
          renderBatch();
        }
      }, { rootMargin: '400px' });
      batchIO.observe(sentinel);
    }
  }

  renderBatch();
}

/* Filters removed — gallery always shows all work */

/* ============================================================
   FEATURED — click to lightbox
   ============================================================ */
(function initFeatured() {
  $$('.fi').forEach(el => {
    const open = () => openLightboxDirect(el.dataset.img, el.dataset.title, el.dataset.sub);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
})();

/* ============================================================
   HORIZONTAL PANEL — click to lightbox
   ============================================================ */
(function initHsPanels() {
  $$('.hs-panel').forEach(el => {
    const imgEl = el.querySelector('img');
    const title = el.querySelector('.hs-panel__title');
    const sub   = el.querySelector('.hs-panel__sub');
    if (!imgEl) return;
    el.style.cursor = 'none';
    el.addEventListener('click', () => {
      // Get just the filename from the src URL
      const src = decodeURIComponent(imgEl.src.split('/').pop());
      openLightboxDirect(src, title?.textContent || '', sub?.textContent || '');
    });
  });
})();

/* ============================================================
   IMAGE MARQUEE STRIP — click to lightbox
   ============================================================ */
(function initMarqueeClicks() {
  $$('.is-item').forEach(el => {
    const imgEl = el.querySelector('img');
    if (!imgEl) return;
    el.style.cursor = 'none';
    el.addEventListener('click', () => {
      // Decode filename from URL and find matching project
      const filename = decodeURIComponent(imgEl.src.split('/').pop());
      const project  = PROJECTS.find(p => p.img === filename);
      if (project) {
        // Open within full project list so prev/next works
        lbList  = PROJECTS;
        lbIndex = PROJECTS.indexOf(project);
        showLbItem(project);
        lb.classList.add('open');
        document.body.classList.add('locked');
        if (lenis) lenis.stop();
      } else {
        openLightboxDirect(filename, filename.replace(/\.[^.]+$/, ''), '');
      }
    });
  });
})();

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lb      = $('#lb');
const lbImg   = $('#lbImg');
const lbTitle = $('#lbTitle');
const lbSub   = $('#lbSub');
const lbBg    = $('#lbBg');
const lbClose = $('#lbClose');
const lbPrev  = $('#lbPrev');
const lbNext  = $('#lbNext');

function openLightbox(idx) {
  lbIndex = idx;
  showLbItem(lbList[idx]);
  lb.classList.add('open');
  document.body.classList.add('locked');
  if (lenis) lenis.stop();
}

function openLightboxDirect(img, title, sub) {
  lbList  = [{ img, title, sub }];
  lbIndex = 0;
  showLbItem(lbList[0]);
  lb.classList.add('open');
  document.body.classList.add('locked');
  if (lenis) lenis.stop();
}
window.openLightboxDirect = openLightboxDirect;

function showLbItem(p) {
  if (!p) return;
  lbImg.style.opacity   = '0';
  lbImg.style.transform = 'scale(.95)';
  setTimeout(() => {
    lbImg.src           = p.img;
    lbImg.alt           = p.title;
    lbTitle.textContent = p.title;
    lbSub.textContent   = p.sub || '';
    lbImg.style.transition = 'opacity .38s ease, transform .38s ease';
    const show = () => { lbImg.style.opacity = '1'; lbImg.style.transform = 'scale(1)'; };
    lbImg.onload = show;
    if (lbImg.complete) show();
  }, 55);
}

function closeLightbox() {
  lb.classList.remove('open');
  document.body.classList.remove('locked');
  if (lenis) lenis.start();
  lbList = activeFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === activeFilter);
}

function prevImage() { lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; showLbItem(lbList[lbIndex]); }
function nextImage() { lbIndex = (lbIndex + 1)               % lbList.length;   showLbItem(lbList[lbIndex]); }

lbBg.addEventListener('click', closeLightbox);
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevImage);
lbNext.addEventListener('click', nextImage);

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

let touchStartX = 0;
lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) dx < 0 ? nextImage() : prevImage();
});

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, duration = 1300) {
  const start = performance.now();
  (function step(now) {
    const p = clamp((now - start) / duration, 0, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * ease);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(performance.now());
}

function runCounters() {
  $$('.cnt').forEach(el => {
    const to = parseInt(el.dataset.to, 10);
    if (!isNaN(to)) animateCounter(el, to);
  });
}

/* ============================================================
   INTERSECTION OBSERVER — scroll reveal
   ============================================================ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        if (en.target.classList.contains('stats-grid')) {
          $$('.cnt', en.target).forEach(el => {
            const to = parseInt(el.dataset.to, 10);
            if (!isNaN(to)) animateCounter(el, to);
          });
        }
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.rv, .rv-l').forEach(el => obs.observe(el));
})();

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
});
