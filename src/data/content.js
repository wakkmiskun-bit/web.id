// Ganti nomor WhatsApp di bawah ini dengan nomor bisnis Anda (format: kode negara tanpa +)
export const WHATSAPP_NUMBER = "6281234567890";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = waLink(
  "Halo NexaCode Studio, saya ingin konsultasi mengenai pembuatan website/sistem aplikasi untuk bisnis saya."
);

export const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Estimasi Biaya", href: "#kalkulator" },
  { label: "Alur Kerja", href: "#alur-kerja" },
  { label: "Paket Harga", href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Tim", href: "#tim" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  { value: "35+", label: "Proyek Dirilis", sub: "100% tepat waktu" },
  { value: "99.9%", label: "Uptime & Stabilitas", sub: "Arsitektur cloud teruji" },
  { value: "100%", label: "Garansi Pasca-Rilis", sub: "Bebas bug & support" },
  { value: "24/7", label: "Dukungan Klien", sub: "Fast response" },
];

export const TECH_CATEGORIES = [
  {
    category: "Backend & Core",
    items: [
      { name: "Laravel 11", desc: "Enterprise PHP Framework", badge: "Primary" },
      { name: "PHP 8.3", desc: "High-Performance Scripting", badge: "Engine" },
      { name: "Node.js / Express", desc: "Real-time Microservices", badge: "Async" },
      { name: "RESTful & GraphQL API", desc: "Clean & Documented", badge: "Interface" },
    ],
  },
  {
    category: "Frontend & UI/UX",
    items: [
      { name: "React 18", desc: "Interactive Web Apps", badge: "Framework" },
      { name: "Tailwind CSS v3", desc: "Modern Utility-First", badge: "Styling" },
      { name: "Framer Motion", desc: "Fluid 3D & Micro-interactions", badge: "Motion" },
      { name: "Next.js / Vite", desc: "Blazing-Fast Bundling", badge: "Build" },
    ],
  },
  {
    category: "Database & Cache",
    items: [
      { name: "MySQL / MariaDB", desc: "ACID Relational Storage", badge: "Relational" },
      { name: "PostgreSQL", desc: "Advanced Scalable DB", badge: "Enterprise" },
      { name: "Redis Cache", desc: "In-memory Sub-millisecond", badge: "High Speed" },
    ],
  },
  {
    category: "Cloud, DevOps & Security",
    items: [
      { name: "Docker & CI/CD", desc: "Automated Deployments", badge: "DevOps" },
      { name: "Vercel / VPS Linux", desc: "Edge Deployment & Scaling", badge: "Infra" },
      { name: "SSL & Hardened Shield", desc: "OWASP Compliant Security", badge: "Security" },
    ],
  },
];

export const TECH_STACK = [
  "Laravel",
  "React",
  "Tailwind CSS",
  "PHP 8.3",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "TypeScript",
  "Docker",
  "Vercel",
  "Framer Motion",
  "Git CI/CD",
];

export const SERVICES = [
  {
    icon: "Building2",
    title: "Company Profile Modern",
    desc: "Membangun citra kredibilitas dan reputasi perusahaan skala korporat dengan estetika elegan, loading super cepat, dan SEO on-page optimal.",
    tag: "01_profile",
    features: ["Custom Brand Identity", "Mobile-first Responsive", "Interactive Showcase", "SEO & Speed 95+"],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce & Toko Online",
    desc: "Platform jual-beli bertenaga tinggi dengan manajemen katalog rapi, kalkulator ongkir otomatis, dan payment gateway aman (Midtrans/Xendit).",
    tag: "02_ecommerce",
    features: ["Payment Gateway Multi-Channel", "Hitung Ongkir Otomatis", "Admin Dashboard Transaksi", "Notifikasi WA / Email"],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: "Server",
    title: "Sistem Aplikasi Custom Laravel",
    desc: "Pengembangan sistem informasi dan ERP/CRM spesifik alur bisnis Anda — role multi-level, reporting otomatis, dan database terstruktur.",
    tag: "03_system",
    features: ["Role & Permission Granular", "Automated PDF/Excel Reports", "Audit Trail & Log Aktivitas", "Database High-Concurrency"],
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: "Rocket",
    title: "Landing Page High-Converting",
    desc: "Halaman penawaran khusus kampanye iklan (Meta Ads/Google Ads) dengan psikologi copywriting, call-to-action tajam, dan konversi tinggi.",
    tag: "04_landing",
    features: ["A/B Testing Ready", "Tracking Pixel & GTM", "Form Lead Terhubung WA", "Ultra Fast < 1.2s Load"],
    accent: "from-amber-500 to-orange-600",
  },
  {
    icon: "UserRound",
    title: "Portofolio & Personal Branding",
    desc: "Etalase digital memukau bagi profesional, eksekutif, dan kreator untuk menampilkan karya, publikasi, dan keahlian secara berkelas.",
    tag: "05_portfolio",
    features: ["Interactive 3D Elements", "Case Study Layout", "Resume & Contact Integration", "Dynamic Gallery"],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: "CalendarCheck2",
    title: "Sistem Reservasi & Booking",
    desc: "Sistem otomatisasi jadwal, tiket digital, dan reservasi online dengan proteksi double-booking dan pengingat pesan WhatsApp otomatis.",
    tag: "06_reservation",
    features: ["Real-time Slot Availability", "QR Code Check-in System", "Automated WA Reminder", "Payment Confirmation"],
    accent: "from-rose-500 to-pink-600",
  },
];

export const PORTFOLIO = [
  {
    name: "BYD Cirebon",
    desc: "Situs resmi dealer kendaraan listrik premium BYD wilayah Cirebon — menampilkan katalog unit 360°, estimasi kredit, booking test drive, dan kontak sales.",
    url: "https://bydcirebon.id/",
    domain: "bydcirebon.id",
    category: "Company Profile",
    industry: "Automotive EV",
    gradient: "from-indigo-600 via-blue-600 to-slate-950",
    tags: ["Live Production", "EV Showcase", "Sales Automation", "Interactive UI"],
    metrics: "Peningkatan lead test drive +180%",
    highlight: "Katalog unit interaktif & direct booking WA",
  },
  {
    name: "Mariposas Indonesia",
    desc: "Company profile & katalog brand fashion & lifestyle mewah dengan identitas visual haute couture, lookbook interaktif, dan integrasi omnichannel.",
    url: "https://mariposasindonesia.com/",
    domain: "mariposasindonesia.com",
    category: "Company Profile",
    industry: "Fashion & Lifestyle",
    gradient: "from-fuchsia-600 via-indigo-700 to-slate-950",
    tags: ["Elegance UI", "Lookbook Gallery", "Responsive Design", "Fast CDN"],
    metrics: "Bounce rate turun ke 24%",
    highlight: "Visual storytelling mewah & fluid transitions",
  },
  {
    name: "Sistem Perpustakaan Digital",
    desc: "Sistem manajemen perpustakaan institusi lengkap: sirkulasi peminjaman, katalogisasi ISBN, pelacakan denda otomatis, dan scan kartu anggota QR.",
    url: "https://perpustakaan.nue.dom.my.id/",
    domain: "perpustakaan.nue.dom.my.id",
    category: "Sistem Aplikasi Custom",
    industry: "Education & Library",
    gradient: "from-emerald-600 via-teal-700 to-slate-950",
    tags: ["Laravel 10", "QR Code Scanner", "Role Management", "Real-time Stats"],
    metrics: "Kelola 10.000+ data buku tanpa lag",
    highlight: "Sirkulasi buku otomatis & kalkulasi denda instan",
  },
  {
    name: "TaskMate Project Hub",
    desc: "Aplikasi kolaborasi manajemen proyek tim modern: papan Kanban interaktif, pelacakan milestone, assignment anggota tim, dan visualisasi produktivitas.",
    url: "https://gettaskmate.sao.dom.my.id/",
    domain: "gettaskmate.sao.dom.my.id",
    category: "Sistem Aplikasi Custom",
    industry: "Productivity SaaS",
    gradient: "from-blue-600 via-cyan-600 to-slate-950",
    tags: ["React & Laravel", "Kanban Drag-Drop", "Activity Logs", "Clean UI"],
    metrics: "Efisiensi koordinasi tim meningkat 2.5x",
    highlight: "Kanban board responsif & pelacakan deadline real-time",
  },
  {
    name: "Siladata — SI Akreditasi",
    desc: "Sistem informasi pengelolaan dan audit data akreditasi institusi pendidikan terpusat, memudahkan verifikasi berkas borang secara sistematis.",
    url: "https://siladata.my.id/",
    domain: "siladata.my.id",
    category: "Sistem Aplikasi Custom",
    industry: "Academic Governance",
    gradient: "from-violet-600 via-purple-700 to-slate-950",
    tags: ["Enterprise Laravel", "Document Vault", "Multi-Tier Review", "Encrypted"],
    metrics: "Waktu audit dokumen tereduksi 60%",
    highlight: "Audit trail ketat & enkripsi penyimpanan dokumen",
  },
];

export const WORKFLOW = [
  {
    step: "01",
    icon: "MessagesSquare",
    title: "Discovery & Blueprint Analisis",
    desc: "Kami membedah objektif bisnis, profil target pengguna, alur data, dan kebutuhan fungsional secara mendalam untuk merumuskan arsitektur sistem yang presisi.",
    badge: "Tahap 1: Konseptual",
  },
  {
    step: "02",
    icon: "PenTool",
    title: "High-Fidelity UI/UX & Interaksi 3D",
    desc: "Perancangan prototipe visual interaktif, hierarki tipografi, sistem komponen responsif, dan skema database relasional sebelum penulisan kode dimulai.",
    badge: "Tahap 2: Desain",
  },
  {
    step: "03",
    icon: "Code2",
    title: "Full-Stack Clean Development",
    desc: "Implementasi kode bersih berstandar clean architecture (Laravel + React/Tailwind), modularitas tinggi, integrasi API, dan efisiensi query database.",
    badge: "Tahap 3: Produksi",
  },
  {
    step: "04",
    icon: "ShieldCheck",
    title: "Security Hardening & Live Release",
    desc: "Pengujian fungsional menyeluruh (QA), optimasi kecepatan Core Web Vitals, pengamanan celah SQLi/XSS/CSRF, hingga rilis publik bergaransi.",
    badge: "Tahap 4: Peluncuran",
  },
];

export const ESTIMATOR_CONFIG = {
  types: [
    { id: "landing", name: "Landing Page Promosi", basePrice: 1500000, days: 5 },
    { id: "company", name: "Company Profile Bisnis", basePrice: 3000000, days: 12 },
    { id: "ecommerce", name: "Toko Online / E-Commerce", basePrice: 4800000, days: 18 },
    { id: "custom_system", name: "Sistem Aplikasi Custom Laravel", basePrice: 7500000, days: 28 },
  ],
  addons: [
    { id: "payment", name: "Integrasi Payment Gateway (Midtrans/Xendit)", price: 1000000 },
    { id: "multilang", name: "Fitur Multi-Bahasa (ID / EN)", price: 600000 },
    { id: "seo_pro", name: "Optimasi SEO & Speed Rank 98+", price: 800000 },
    { id: "wa_bot", name: "Notifikasi Otomatis WhatsApp Gateway", price: 900000 },
    { id: "cms_pro", name: "Admin Dashboard Kustom & Analytics", price: 1500000 },
  ],
  speeds: [
    { id: "standard", name: "Standar (Sesuai Timeline)", mult: 1.0 },
    { id: "express", name: "Express Prioritas (+30% Kecepatan)", mult: 1.25 },
  ],
};

export const PRICING = [
  {
    name: "Starter",
    subtitle: "Landing Page Fokus Konversi",
    price: "Rp 1.500.000",
    period: "sekali bayar",
    highlight: false,
    badge: "Cocok untuk Campaign & Promo",
    features: [
      "1 halaman landing page responsif",
      "Desain custom modern sesuai brand identity",
      "Optimasi kecepatan loading & SEO on-page dasar",
      "Domain (.com) & cloud hosting 1 tahun",
      "Integrasi tombol WhatsApp & formulir leads",
      "Revisi 2x putaran",
      "Garansi bug & error 14 hari",
    ],
    cta: "Pilih Paket Starter",
  },
  {
    name: "Pro Business",
    subtitle: "Company Profile / E-Commerce",
    price: "Rp 4.500.000",
    period: "sekali bayar",
    highlight: true,
    badge: "Paling Populer & Komprehensif",
    features: [
      "Hingga 8 halaman dinamis / modul e-commerce",
      "Katalog produk / layanan dengan filter interaktif",
      "Admin panel manajemen konten & transaksi mandiri",
      "Integrasi payment gateway & notifikasi otomatis",
      "Optimasi SEO lanjutan & Google Analytics",
      "Domain premium & server cloud performa tinggi",
      "Revisi 4x putaran fleksibel",
      "Garansi bug 30 hari + pendampingan teknis 1 bulan",
    ],
    cta: "Pilih Paket Pro Business",
  },
  {
    name: "Enterprise",
    subtitle: "Custom Laravel Application",
    price: "Mulai Rp 8.000.000+",
    period: "investasi custom",
    highlight: false,
    badge: "Sistem Bisnis Skala Besar",
    features: [
      "Arsitektur sistem custom berbasis Laravel & React",
      "Role & permission berjenjang (Multi-User RBAC)",
      "Reporting komprehensif (Export PDF, Excel, Visual Charts)",
      "Integrasi API pihak ketiga (ERP, CRM, WhatsApp Bot)",
      "Audit trail log keamanan & pencadangan data otomatis",
      "Dedicated Technical Project Manager",
      "Garansi bug 60 hari + SLA Support Prioritas 24/7",
      "Dokumentasi arsitektur sistem & pelatihan tim internal",
    ],
    cta: "Konsultasi Kebutuhan Enterprise",
  },
];

export const TESTIMONIALS = [
  {
    quote: "NexaCode Studio mengubah website dealer kami menjadi jauh lebih modern dan responsif. Pengunjung yang menghubungi kami untuk booking test drive naik signifikan!",
    author: "Hendrawan Pratama",
    role: "Marketing Manager",
    company: "Dealer Otomotif Jawa Barat",
    rating: 5,
    project: "Company Profile & Lead Engine",
    avatarBg: "from-blue-500 to-indigo-600",
    initials: "HP",
  },
  {
    quote: "Sistem informasi custom yang dibangun tim NexaCode sangat stabil dan mudah digunakan staf kami. Waktu input data dan laporan akreditasi yang dulunya berminggu-minggu kini selesai dalam hitungan jam.",
    author: "Dr. Sri Wahyuni, M.Kom",
    role: "Koordinator Tim Penjaminan Mutu",
    company: "Institusi Pendidikan Tinggi",
    rating: 5,
    project: "Sistem Informasi Akreditasi",
    avatarBg: "from-violet-500 to-purple-600",
    initials: "SW",
  },
  {
    quote: "Desain visualnya sangat berkelas dan estetikanya premium sesuai harapan brand fashion kami. Animasi dan kecepatan loadingnya sangat mulus di smartphone.",
    author: "Clara Angelica",
    role: "Creative Director",
    company: "Fashion & Lifestyle Label",
    rating: 5,
    project: "Brand Showcase & Lookbook",
    avatarBg: "from-pink-500 to-rose-600",
    initials: "CA",
  },
];

export const TRUST_BADGES = [
  { icon: "Lock", label: "Clean Code & Enkripsi Data" },
  { icon: "ShieldCheck", label: "Garansi Bug 100% Bebas Biaya" },
  { icon: "Zap", label: "Ultra Fast Load & Core Web Vitals" },
  { icon: "Code2", label: "Full Source Code Milik Klien" },
];

export const TEAM = [
  {
    name: "Wakkmiskun",
    role: "Lead Systems Architect & Backend Specialist",
    desc: "Merancang arsitektur database relasional, skalabilitas server, pengamanan data tingkat enterprise, dan efisiensi backend Laravel berkecepatan tinggi.",
    url: "https://wakkmiskun-bit.github.io/ft/",
    ring: "from-accent-indigo via-accent-blue to-accent-cyan",
    initials: "WK",
    tags: ["Laravel Architecture", "MySQL Tuning", "API Security", "Server Hardening"],
  },
  {
    name: "Riko Rizky",
    role: "Lead Frontend Engineer & UI/UX Specialist",
    desc: "Menerjemahkan visi bisnis menjadi antarmuka digital yang interaktif, modern dengan efek 3D fluid, aksesibel, dan berfokus pada kenyamanan pengguna.",
    url: "https://rikorizky.my.id/",
    ring: "from-accent-cyan via-accent-blue to-accent-indigo",
    initials: "RR",
    tags: ["React.js", "Tailwind CSS", "3D Motion UX", "Conversion Design"],
  },
];

export const FAQ = [
  {
    category: "Umum",
    q: "Berapa lama waktu pengerjaan proyek dari awal sampai rilis?",
    a: "Landing page umumnya rampung dalam 4–7 hari kerja. Company profile dan toko online membutuhkan 2–3 minggu. Sedangkan sistem custom Laravel skala enterprise membutuhkan 4–8 minggu tergantung kompleksitas modul. Estimasi pasti dan jadwal milestone tertulis akan kami berikan transparan setelah sesi konsultasi awal.",
  },
  {
    category: "Umum",
    q: "Apakah saya akan mendapatkan source code dan hak milik penuh?",
    a: "Ya, 100%. Setelah pelunasan, seluruh source code, database, akun domain, dan kredensial hosting menjadi aset hak milik penuh bisnis Anda tanpa sistem sewa atau keterikatan tersembunyi. Kami juga menyertakan dokumentasi teknis dasar untuk memudahkan maintenance ke depan.",
  },
  {
    category: "Biaya & Pengerjaan",
    q: "Bagaimana tahapan pembayaran proyek di NexaCode Studio?",
    a: "Skema standar kami adalah pembayaran bertahap: Down Payment (DP) 50% saat penandatanganan kesepakatan proyek dan 50% pelunasan setelah website/sistem disetujui di server staging serta siap di-deploy ke domain publik Anda. Untuk proyek enterprise skala besar, skema termin multi-fase juga tersedia.",
  },
  {
    category: "Biaya & Pengerjaan",
    q: "Bagaimana mekanisme revisi jika ada hal yang perlu disesuaikan?",
    a: "Setiap paket sudah mencakup kuota putaran revisi komprehensif (mulai dari 2x hingga 4x putaran). Pada setiap putaran, Anda dapat mengumpulkan daftar perbaikan desain, tata letak, atau teks secara tertata. Tim kami akan mengeksekusi revisi secara cepat dan rapi.",
  },
  {
    category: "Teknis & Keamanan",
    q: "Apakah ada garansi jika terjadi bug atau kendala teknis setelah rilis?",
    a: "Tentu saja. Semua paket kami sertai dengan Garansi Bebas Bug selama 14 hingga 60 hari setelah go-live. Jika terjadi error atau kendala teknis dari sistem yang kami bangun, tim kami akan memperbaikinya secara prioritas tanpa biaya tambahan sepeser pun.",
  },
  {
    category: "Teknis & Keamanan",
    q: "Apakah website yang dibuat sudah ramah mesin pencari (SEO) dan aman?",
    a: "Pasti. Kami menerapkan standar modern Google Core Web Vitals: semantic HTML5, schema markup, dynamic meta tag, kompresi aset WebP, SSL HTTPS, proteksi terhadap serangan CSRF, XSS, serta SQL Injection pada seluruh sistem yang kami kembangkan.",
  },
];

