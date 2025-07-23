// Constants untuk Homestay Bumina Eenk

export const SITE_CONFIG = {
  name: "Homestay Bumina Eenk",
  title: "Penginapan di Taman Langit Pangalengan Bandung",
  description: "Penginapan Nyaman di Pangalengan Bandung dengan Pemandangan Gunung dan Kebun Teh yang Menakjubkan",
  url: "https://buminaeenk.com",
  basePath: process.env.NODE_ENV === 'production' ? '/bumina' : '',
};

export const CONTACT_INFO = {
  phone: "+62 812-3456-7890", // Placeholder - akan diganti dengan nomor asli
  address: "Pangalengan, Bandung, Jawa Barat",
  email: "info@buminaeenk.com", // Placeholder
  operatingHours: "24 Jam",
};

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6281234567890", // Placeholder - akan diganti dengan link asli
  instagram: "https://instagram.com/buminaeenk", // Placeholder
  tiktok: "https://tiktok.com/@buminaeenk", // Placeholder
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Fasilitas", href: "#fasilitas" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Blog", href: "/blog" },
];

export const HERO_CONTENT = {
  headline: "Penginapan di Taman Langit Pangalengan bandung",
  description: "Nikmati kesejukan udara pegunungan dan kehangatan perapian hanya di Homestay Bumina Eenk. Lokasi strategis dekat Taman Langit Pangalengan dan tempat wisata alam terbaik di Bandung. Jadikan liburan Anda lebih berkesan dengan suasana tenang yang menyatu dengan alam.",
  cta: "Pesan Sekarang dan Rasakan Perbedaannya!",
  ctaButton: "Hubungi Kami Sekarang",
};

export const BENEFITS = [
  {
    title: "Lokasi Strategis",
    description: "Penginapan sangat dekat dengan wisata taman langit bandung. Setiap Pagi bisa melihat pemandangan gunung hijau yang berbaris dan hamparan kebun teh yang menyejukan mata.",
    image: "/images/benefits/benefit1.webp",
  },
  {
    title: "Pemandangan Menakjubkan",
    description: "Nikmati pemandangan gunung dan kebun teh yang memukau langsung dari kamar Anda. Suasana yang tenang dan udara yang sejuk.",
    image: "/images/benefits/benefit2.webp",
  },
  {
    title: "Fasilitas Lengkap",
    description: "Dilengkapi dengan perapian yang hangat, kamar yang nyaman, dan fasilitas modern untuk kenyamanan Anda.",
    image: "/images/benefits/benefit3.webp",
  },
  {
    title: "Akses Mudah",
    description: "Mudah dijangkau dan dekat dengan berbagai tempat wisata populer di Pangalengan seperti Situ Cileunca dan Nemo Highland.",
    image: "/images/benefits/benefit4.webp",
  },
];

export const SEO_POINTS = [
  "Dekat Taman Langit Pangalengan",
  "Dekat Situ Cileunca",
  "Dekat Nemo Highland",
  "Dekat Pemandian Air Panas",
];

export const TESTIMONIALS = [
  {
    name: "Sarah Wijaya",
    rating: 5,
    comment: "Pengalaman menginap yang luar biasa! Pemandangan kebun teh dan gunung sangat memukau. Perapian di malam hari membuat suasana semakin hangat dan romantis.",
    avatar: "/images/testimonials/avatar1.webp",
  },
  {
    name: "Budi Santoso",
    rating: 5,
    comment: "Lokasi yang sangat strategis untuk menjelajahi wisata Pangalengan. Kamar bersih, nyaman, dan pelayanan yang ramah. Pasti akan kembali lagi!",
    avatar: "/images/testimonials/avatar2.webp",
  },
  {
    name: "Maya Putri",
    rating: 5,
    comment: "Homestay yang sempurna untuk liburan keluarga. Anak-anak senang dengan pemandangan alam dan udara yang sejuk. Highly recommended!",
    avatar: "/images/testimonials/avatar-karyawan.webp",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Panduan Lengkap Wisata Taman Langit Pangalengan",
    excerpt: "Temukan keindahan Taman Langit Pangalengan dan tips terbaik untuk menikmati wisata alam yang menakjubkan ini.",
    author: "Admin Bumina Eenk",
    date: "2024-01-15",
    thumbnail: "/images/blog/blog1.webp",
    slug: "panduan-wisata-taman-langit-pangalengan",
  },
  {
    id: 2,
    title: "5 Tempat Wisata Terbaik di Sekitar Pangalengan",
    excerpt: "Jelajahi tempat-tempat wisata menakjubkan di sekitar Pangalengan yang wajib Anda kunjungi saat menginap di Homestay Bumina Eenk.",
    author: "Admin Bumina Eenk",
    date: "2024-01-10",
    thumbnail: "/images/blog/blog2.webp",
    slug: "tempat-wisata-terbaik-pangalengan",
  },
  {
    id: 3,
    title: "Tips Menikmati Udara Sejuk Pegunungan Bandung",
    excerpt: "Pelajari cara terbaik untuk menikmati udara sejuk pegunungan dan aktivitas menarik yang bisa dilakukan di Pangalengan.",
    author: "Admin Bumina Eenk",
    date: "2024-01-05",
    thumbnail: "/images/blog/blog3.webp",
    slug: "tips-menikmati-udara-sejuk-pegunungan",
  },
];

