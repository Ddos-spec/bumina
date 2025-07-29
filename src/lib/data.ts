// src/lib/data.ts

// Definisikan "bentuk" atau tipe data untuk satu post
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image: string;
  content: string;
};

// Kasih tau kalo `blogPosts` adalah sebuah array yang isinya objek `BlogPost`
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mengenal Teknologi Freeze Drying: Revolusi dalam Pengawetan Makanan",
    excerpt: "Pelajari bagaimana teknologi freeze drying bekerja dan mengapa ini menjadi metode pengawetan makanan terbaik di era modern.",
    date: "2024-01-15",
    category: "Teknologi",
    slug: "mengenal-teknologi-freeze-drying",
    image: "🔬",
    content: "Konten lengkap tentang Mengenal Teknologi Freeze Drying...",
  },
  {
    id: 2,
    title: "5 Keunggulan Makanan Freeze Dried untuk Kesehatan",
    excerpt: "Temukan manfaat luar biasa makanan freeze dried untuk kesehatan dan mengapa ini menjadi pilihan terbaik untuk gaya hidup sehat.",
    date: "2024-01-10",
    category: "Kesehatan",
    slug: "keunggulan-makanan-freeze-dried",
    image: "🥗",
    content: "Konten lengkap tentang 5 Keunggulan Makanan Freeze Dried...",
  },
  {
    id: 3,
    title: "Cara Memulai Bisnis Freeze Dried Food dari Nol",
    excerpt: "Panduan lengkap untuk memulai bisnis makanan freeze dried, mulai dari perencanaan hingga strategi pemasaran yang efektif.",
    date: "2024-01-05",
    category: "Bisnis",
    slug: "cara-memulai-bisnis-freeze-dried",
    image: "💼",
    content: "Konten lengkap tentang Cara Memulai Bisnis Freeze Dried...",
  },
  {
    id: 4,
    title: "Tren Makanan Sehat 2024: Freeze Dried Food Memimpin",
    excerpt: "Analisis tren makanan sehat tahun 2024 dan bagaimana freeze dried food menjadi pilihan utama konsumen modern.",
    date: "2024-01-01",
    category: "Tren",
    slug: "tren-makanan-sehat-2024",
    image: "📈",
    content: "Konten lengkap tentang Tren Makanan Sehat 2024...",
  },
  {
    id: 5,
    title: "Tips Menyimpan dan Menggunakan Produk Freeze Dried",
    excerpt: "Pelajari cara terbaik untuk menyimpan dan menggunakan produk freeze dried agar kualitas dan nutrisinya tetap terjaga.",
    date: "2023-12-28",
    category: "Tips",
    slug: "tips-menyimpan-freeze-dried",
    image: "📦",
    content: "Konten lengkap tentang Tips Menyimpan Produk Freeze Dried...",
  },
  {
    id: 6,
    title: "Perbandingan Freeze Drying vs Metode Pengawetan Lainnya",
    excerpt: "Analisis mendalam perbandingan freeze drying dengan metode pengawetan makanan tradisional lainnya.",
    date: "2023-12-25",
    category: "Perbandingan",
    slug: "perbandingan-freeze-drying",
    image: "⚖️",
    content: "Konten lengkap tentang Perbandingan Freeze Drying...",
  },
];