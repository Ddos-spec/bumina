import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog - Raja Freeze Dried Food | Tips dan Informasi Freeze Drying",
  description: "Baca artikel terbaru tentang teknologi freeze drying, tips bisnis makanan sehat, dan informasi terkini dari Raja Freeze Dried Food.",
};

const blogPosts = [
  {
    id: 1,
    title: "Mengenal Teknologi Freeze Drying: Revolusi dalam Pengawetan Makanan",
    excerpt: "Pelajari bagaimana teknologi freeze drying bekerja dan mengapa ini menjadi metode pengawetan makanan terbaik di era modern.",
    date: "2024-01-15",
    category: "Teknologi",
    slug: "mengenal-teknologi-freeze-drying",
    image: "🔬",
  },
  {
    id: 2,
    title: "5 Keunggulan Makanan Freeze Dried untuk Kesehatan",
    excerpt: "Temukan manfaat luar biasa makanan freeze dried untuk kesehatan dan mengapa ini menjadi pilihan terbaik untuk gaya hidup sehat.",
    date: "2024-01-10",
    category: "Kesehatan",
    slug: "keunggulan-makanan-freeze-dried",
    image: "🥗",
  },
  {
    id: 3,
    title: "Cara Memulai Bisnis Freeze Dried Food dari Nol",
    excerpt: "Panduan lengkap untuk memulai bisnis makanan freeze dried, mulai dari perencanaan hingga strategi pemasaran yang efektif.",
    date: "2024-01-05",
    category: "Bisnis",
    slug: "cara-memulai-bisnis-freeze-dried",
    image: "💼",
  },
  {
    id: 4,
    title: "Tren Makanan Sehat 2024: Freeze Dried Food Memimpin",
    excerpt: "Analisis tren makanan sehat tahun 2024 dan bagaimana freeze dried food menjadi pilihan utama konsumen modern.",
    date: "2024-01-01",
    category: "Tren",
    slug: "tren-makanan-sehat-2024",
    image: "📈",
  },
  {
    id: 5,
    title: "Tips Menyimpan dan Menggunakan Produk Freeze Dried",
    excerpt: "Pelajari cara terbaik untuk menyimpan dan menggunakan produk freeze dried agar kualitas dan nutrisinya tetap terjaga.",
    date: "2023-12-28",
    category: "Tips",
    slug: "tips-menyimpan-freeze-dried",
    image: "📦",
  },
  {
    id: 6,
    title: "Perbandingan Freeze Drying vs Metode Pengawetan Lainnya",
    excerpt: "Analisis mendalam perbandingan freeze drying dengan metode pengawetan makanan tradisional lainnya.",
    date: "2023-12-25",
    category: "Perbandingan",
    slug: "perbandingan-freeze-drying",
    image: "⚖️",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Raja Freeze Dried Food
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan tips, informasi, dan wawasan terbaru tentang teknologi freeze drying, 
              bisnis makanan sehat, dan tren industri makanan.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-6xl mb-4">{post.image}</div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Baca Selengkapnya
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru, tips, 
              dan informasi eksklusif tentang freeze drying.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20ingin%20berlangganan%20newsletter%20untuk%20mendapatkan%20update%20terbaru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-block"
            >
              Berlangganan via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

