import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles, type Article } from "@/lib/articleHelpers";

// Metadata diubah biar sesuai tema homestay & SEO-friendly
export const metadata = {
  title: "Blog Wisata Pangalengan - Tips & Rekomendasi dari Bumina EENK",
  description: "Temukan panduan, tips liburan, dan rekomendasi tempat wisata terbaik di Pangalengan dari blog Homestay Bumina EENK.",
};

export default async function BlogPage() {
  // Fetch articles from JSON file
  const articles = await getAllArticles();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Bumina EENK
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Panduan, tips, dan cerita seru buat nemenin petualangan lo di Pangalengan.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((post: Article) => (
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
                      <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}