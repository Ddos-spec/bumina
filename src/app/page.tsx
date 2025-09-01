import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomepageContent from "@/components/HomepageContent";
import { SchemaOrg } from '@/lib/seo';
import { getAllArticles, type Article } from "@/blog/articleHelpers";

// Data statis untuk halaman, bisa dipindahkan ke file lain jika perlu
const testimonials = [
  { 
    name: "Keluarga Budi Santoso", 
    feedback: "Pengalaman menginap yang luar biasa! Suasana kebun teh yang hijau dan udara sejuk pegunungan membuat kami merasa sangat nyaman. Perapian di dalam rumah benar-benar menghangatkan malam yang dingin. Highly recommended!", 
    image: '/orang3.webp',
    rating: 5,
    location: "Jakarta"
  },
  { 
    name: "Rombongan Kantor PT Maju Bersama", 
    feedback: "Villa yang sangat luas, bisa menampung 25 orang dengan nyaman. Fasilitas lengkap, dapur bersih, dan yang paling berkesan adalah pemandangan gunung di pagi hari. Tim kami sangat puas dengan pelayanannya.", 
    image: '/orang2.webp',
    rating: 5,
    location: "Surabaya"
  },
  { 
    name: "Keluarga Sari Wijaya", 
    feedback: "Lokasi strategis dekat Taman Langit Pangalengan! Cuma jalan kaki sebentar sudah sampai. Anak-anak senang banget bisa main di camping ground berlantai kayu. Suasana alami yang masih asri.", 
    image: '/orang1.webp',
    rating: 5,
    location: "Bandung"
  },
];

const sliderImages = [
    '/herohome.webp',
    '/herohome-tamanlangit.webp', 
    '/herohome-kebon-teh.webp',
    '/herohome-pantai-buaya.webp',
    '/herohome-depan-villa.webp'
];

export default async function Home() {
  // Ambil 3 artikel terbaru di server
  const latestArticles = (await getAllArticles()).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaOrg.lodgingBusiness()) }}
      />
      <Header />
      
      {/* Render komponen client untuk bagian interaktif */}
      <HomepageContent testimonials={testimonials} sliderImages={sliderImages} />

      {/* Render bagian blog terbaru langsung di server component */}
      {latestArticles.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Dari <span className="text-green-600">Blog Kami</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dapatkan tips, panduan, dan cerita terbaru seputar wisata di Pangalengan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="w-full h-48 relative">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <time className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString("id-ID", { month: 'long', day: 'numeric' })}
                        </time>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 flex-grow group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/blog" className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
