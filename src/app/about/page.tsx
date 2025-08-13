import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { generateMetadataObject } from "@/lib/seo";
import { Metadata } from "next";

// --- METADATA SEO TERPUSAT ---
export const metadata: Metadata = generateMetadataObject({
  title: "Tentang Kami - Homestay Bumina EENK | Cerita di Balik Villa Pangalengan",
  description: "Pelajari kisah Homestay Bumina EENK, visi kami untuk memberikan pengalaman menginap terbaik di Pangalengan, dan komitmen kami pada kenyamanan dan kehangatan.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">Bumina EENK</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sebuah tempat untuk pulang, di mana kehangatan bertemu dengan sejuknya alam Pangalengan.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kisah Kami
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Homestay Bumina EENK berawal dari sebuah mimpi sederhana: menciptakan sebuah ruang di mana keluarga dan sahabat bisa berkumpul, melepaskan penat dari hiruk pikuk kota, dan kembali terhubung dengan alam.
                  </p>
                  <p>
                    Terletak di jantung perkebunan teh Pangalengan yang legendaris, kami membangun villa ini bukan hanya sebagai tempat menginap, tapi sebagai rumah kedua. Setiap sudutnya kami desain untuk memberikan kenyamanan maksimal, dari perapian yang menghangatkan suasana hingga jendela besar yang membingkai pemandangan gunung yang megah.
                  </p>
                  <p>
                    Bagi kami, kebahagiaan adalah melihat tawa tamu kami saat berkumpul di malam hari, menyaksikan mereka menikmati secangkir teh hangat di pagi hari, dan menjadi bagian dari kenangan liburan mereka yang tak terlupakan.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-full">
                <Image 
                  src="/konten2.webp" 
                  alt="Suasana Homestay Bumina EENK" 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-2xl shadow-xl"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visi & Misi Kami
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  Menjadi destinasi penginapan pilihan utama di Pangalengan, yang dikenal karena kehangatan pelayanannya, kenyamanan fasilitasnya, dan keindahan alamnya yang otentik.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Menyediakan fasilitas yang bersih, nyaman, dan lengkap.</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Memberikan pelayanan yang ramah dan personal seperti keluarga.</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Membantu tamu menjelajahi keindahan wisata lokal Pangalengan.</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Menciptakan kenangan liburan yang tak terlupakan bagi setiap tamu.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-xl text-gray-600">
                Prinsip yang menjadi pondasi pelayanan kami.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">🛋️</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kenyamanan</h3>
                <p className="text-gray-600">Kami memastikan setiap tamu merasa nyaman seperti di rumah sendiri.</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">😊</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Keramahan</h3>
                <p className="text-gray-600">Pelayanan yang tulus dan ramah adalah prioritas utama kami.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">🔥</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kehangatan</h3>
                <p className="text-gray-600">Menciptakan suasana yang hangat dan akrab untuk semua tamu.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">✨</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kebersihan</h3>
                <p className="text-gray-600">Menjaga kebersihan di setiap sudut villa adalah komitmen kami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Menciptakan Kenangan?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Jadikan Homestay Bumina EENK sebagai bagian dari cerita liburan Anda selanjutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Booking via WhatsApp
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Lihat Kontak & Lokasi
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}