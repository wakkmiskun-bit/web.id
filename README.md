# NexaCode Studio — Landing Page (Enterprise Edition)

Landing page agensi jasa pembuatan software & web development. Dibangun
dengan **React + Vite**, **Tailwind CSS**, dan **Framer Motion** — lengkap
dengan efek **3D tilt interaktif**, animasi scroll, dan copywriting bergaya
enterprise. Tema dark mode futuristik (slate-950/900, aksen indigo–blue–cyan).

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Build production:

```bash
npm run build
npm run preview
```

## Struktur Project

```
src/
  components/
    Tilt3D.jsx          -> Wrapper reusable efek 3D tilt (dipakai di banyak section)
    Navbar.jsx           -> Navbar sticky + glassmorphism
    Hero.jsx              -> Hero + terminal 3D tilt + tech stack marquee + statistik
    Services.jsx          -> Grid 6 layanan dengan tilt 3D (juga berisi SectionHeading)
    Portfolio.jsx          -> Portofolio dengan browser mockup frame + tilt 3D
    Workflow.jsx            -> 4 langkah alur kerja
    Pricing.jsx              -> 3 paket harga + trust badges, tombol otomatis ke WhatsApp
    Team.jsx                  -> Tim: split-screen glassmorphic grid
    FaqSection.jsx              -> Accordion FAQ
    FloatingWhatsApp.jsx         -> Tombol WhatsApp melayang dengan animasi pulse
    CTAFooter.jsx                 -> Banner CTA penutup 3D + footer
  data/
    content.js                     -> Semua teks & data terpusat (mudah diedit)
  App.jsx                          -> Merangkai seluruh section
  index.css                        -> Base style + utility class (btn, card, glass)
  main.jsx                         -> Entry point React
tailwind.config.js                -> Token warna, font, keyframes, utility 3D (preserve-3d, perspective)
```

## Yang Perlu Anda Sesuaikan

1. **Nomor WhatsApp** — buka `src/data/content.js`, ganti `WHATSAPP_NUMBER`
   (format: kode negara tanpa `+`, contoh: `6281234567890`). Nomor ini otomatis
   dipakai di navbar, tombol hero, setiap paket harga, tombol floating, dan CTA footer.
2. **Isi konten** — semua teks layanan, portofolio, workflow, harga, tim, dan
   FAQ ada di `src/data/content.js`.
3. **Nama agensi & logo** — saat ini "NexaCode Studio" (teks), ganti di
   `Navbar.jsx` dan `CTAFooter.jsx`, atau ganti dengan `<img>` logo Anda.
4. **Harga paket** — sesuaikan angka di `PRICING` pada `content.js` dengan rate Anda.

## Fitur Utama

- Navbar sticky glassmorphism + mobile menu.
- Hero dengan terminal kode 3D tilt (mengikuti gerakan kursor) dan marquee tech stack.
- Efek 3D tilt reusable (`Tilt3D`) dipakai konsisten di Services, Portfolio, Pricing, Team, dan CTA banner.
- Portofolio dalam browser mockup frame, link asli membuka tab baru.
- 4 langkah alur kerja dengan penomoran (proses nyata, bukan dekorasi).
- 3 paket harga transparan, tombol "Pilih Paket" otomatis membawa pesan pre-filled ke WhatsApp sesuai paket yang dipilih.
- Trust badges (Secure Clean Code, Garansi Bug 30 Hari, High Performance & SEO).
- Tim dengan tampilan split-screen glassmorphic + tilt 3D pada avatar.
- FAQ accordion interaktif.
- Tombol WhatsApp melayang dengan animasi pulse, selalu terlihat di semua halaman.
- Mendukung `prefers-reduced-motion` dan fokus keyboard yang jelas (accessibility).
