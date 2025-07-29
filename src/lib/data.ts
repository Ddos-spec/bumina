// src/lib/data.ts

// Definisikan "bentuk" atau tipe data untuk satu post
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image: string; // Kita pake emoji aja dulu biar cepet
  content: string;
};

// Data artikel diubah total jadi soal wisata Pangalengan
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Spot Sunrise Terbaik di Pangalengan, Wajib Datang!",
    excerpt: "Jangan ngaku ke Pangalengan kalau belum liat sunrise-nya. Ini dia 5 spot terbaik buat nikmatin matahari terbit yang bikin lupa daratan.",
    date: "2024-07-28",
    category: "Wisata Alam",
    slug: "spot-sunrise-terbaik-pangalengan",
    image: "🌅",
    content: "Pangalengan itu surganya pemburu sunrise. Dari atas ketinggian, lo bisa liat lautan awan dan semburat emas yang keren banget. Beberapa tempat yang wajib lo datengin itu Sunrise Point Cukul, Taman Langit Pangalengan, dan Wayang Windu Panenjoan. Siapin jaket tebel ya, karena udaranya dingin banget!",
  },
  {
    id: 2,
    title: "Panduan Lengkap Wisata ke Situ Cileunca: Ada Apa Aja?",
    excerpt: "Situ Cileunca bukan cuma danau biasa. Dari rafting, flying fox, sampai jembatan cinta yang ikonik, semua ada di sini. Yuk, kita bedah tuntas!",
    date: "2024-07-25",
    category: "Aktivitas",
    slug: "panduan-wisata-situ-cileunca",
    image: "🚣",
    content: "Situ Cileunca itu paket lengkap. Buat yang suka tantangan, ada arung jeram di Sungai Palayangan. Buat yang mau santai, bisa naik perahu keliling danau atau foto-foto di Jembatan Cinta. Jangan lupa juga cobain agrowisata petik stroberi di sekitarnya. Cocok buat semua umur!",
  },
  {
    id: 3,
    title: "Tips Liburan Hemat dan Seru di Pangalengan",
    excerpt: "Siapa bilang liburan ke Pangalengan harus mahal? Dengan tips ini, lo bisa nikmatin semua keindahannya tanpa bikin kantong bolong.",
    date: "2024-07-20",
    category: "Tips",
    slug: "tips-liburan-hemat-pangalengan",
    image: "💰",
    content: "Kunci liburan hemat di Pangalengan itu perencanaan. Pilih penginapan kayak homestay yang bisa buat rame-rame, bawa bekal simpel, dan fokus ke wisata alam yang tiket masuknya murah meriah kayak kebun teh atau hutan pinus. Banyak kok spot gratis yang pemandangannya juara!",
  },
  {
    id: 4,
    title: "Selain Kebun Teh, Ini 3 Hidden Gems di Pangalengan",
    excerpt: "Bosen sama kebun teh? Tenang, Pangalengan masih punya banyak 'harta karun' tersembunyi. Dari curug sampai penangkaran rusa, ini dia tempatnya.",
    date: "2024-07-15",
    category: "Hidden Gems",
    slug: "hidden-gems-pangalengan",
    image: "💎",
    content: "Coba deh mampir ke Penangkaran Rusa Kertamanah, di sana lo bisa interaksi langsung sama rusa-rusa jinak. Atau tracking santai ke Curug Penganten yang suasananya masih asri. Tempat-tempat kayak gini yang bikin pengalaman liburan lo beda dari yang lain.",
  },
];