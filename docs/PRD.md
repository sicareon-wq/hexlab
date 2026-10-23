# PRD — Hexalab Studio Branding Web

- **Version:** 0.2
- **Timestamp:** 2026-10-23
- **Status:** Final (MVP build)

## 1. Overview
Studio branding "Hexalab" — web front-end statis (3 halaman) dengan tema **klasik-modern** (gabungan 2 era), desain **minimalis**, tone **biru hitam**, typography **sans modern**.
Isi: layanan digital & pembuatan web. Konten = placeholder (generate, akan diganti user).

## 2. Keputusan Final (v0.2)
| Item | Keputusan |
|---|---|
| Warna dasar | Navy-hitam `#0A0F1A`, surface `#10182B`, teks `#E6EDF7`, muted `#8B9BB8` |
| Aksen | Royal blue `#2563EB` (hover `#3B82F6`) |
| Font | Space Grotesk (variable, di-host lokal `assets/fonts/`) + fallback sistem |
| Hamburger | Slide panel dari kanan + glass backdrop, di mobile |
| CTA hero | 2 tombol (utama solid + sekunder outline) |
| Halaman 3 | "Tentang" — kontak jadi section di dalamnya |
| Sentuhan klasik | Label uppercase letterspaced, hairline border, ornamen tipografi — tanpa serif |

## 3. Fitur
- Navbar fixed, glassmorphism saat scroll, menu **centered**, hamburger (≤768px)
- Smooth scroll, scroll-reveal (IntersectionObserver, stagger)
- Button hover animation (shine sweep + arrow shift), `prefers-reduced-motion` dihormati
- Highlight nav-link halaman aktif

## 4. Halaman & Section
| Halaman | Section |
|---|---|
| Home | Hero + 2 CTA + stats · Layanan preview · Keunggulan · Testimonial · CTA akhir |
| Layanan | Header · 4 layanan digital · Detail pembuatan web · Proses kerja (4 langkah) · CTA |
| Tentang | Header · Cerita studio · Nilai/prinsip · Kontak (info + form placeholder) |

## 5. Struktur File
```
hexlab/
├── index.html  layanan.html  tentang.html
├── assets/
│   ├── css/style.css     (shared)
│   ├── js/main.js        (shared)
│   └── fonts/            (.woff2 lokal)
└── docs/PRD.md
```

## 6. MVP Scope & Non-Goals
- MVP: 3 halaman, CSS+JS murni (tanpa framework), responsive (breakpoint 768px & 480px), konten placeholder
- Non-goals: parallax/canvas, backend/CMS, deploy platform (nanti: Cloudflare/Vercel)

## 7. Acceptance Criteria (v0.2)
- [ ] Navbar blur saat scroll; menu centered desktop; hamburger berfungsi mobile
- [ ] 3 halaman terhubung via nav; link aktif ter-highlight
- [ ] Scroll-reveal & button animation berjalan; tetap terbaca tanpa JS (no-js fallback)
- [ ] Kontras teks ≥ WCAG AA; `prefers-reduced-motion` menghentikan animasi
- [ ] Tanpa horizontal scroll di 480/768/1440px
- [ ] Lighthouse ≥ 90 (Performance & Accessibility)

## 8. Decisions Log
- 2026-10-23 — v0.1: typography sans modern; hamburger mobile; konten generate dulu.
- 2026-10-23 — v0.2: warna final (#0A0F1A/#10182B/#2563EB); font Space Grotesk lokal; hamburger slide kanan; 2 CTA hero; halaman 3 "Tentang"; struktur file & section plan; acceptance criteria diperluas.
