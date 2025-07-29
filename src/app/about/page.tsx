import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link"; // <-- TAMBAHAN IMPORT

export const metadata = {
  title: "Tentang Kami - Raja Freeze Dried Food | Pionir Teknologi Freeze Drying",
  description: "Pelajari lebih lanjut tentang Raja Freeze Dried Food, visi misi kami, dan komitmen untuk menyediakan makanan sehat berkualitas tinggi dengan teknologi freeze drying terdepan.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">Raja Freeze Dried Food</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pionir dalam teknologi freeze drying di Indonesia, berkomitmen untuk 
                menyediakan makanan sehat berkualitas tinggi dan edukasi terbaik.
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
                    Raja Freeze Dried Food lahir dari visi untuk menghadirkan revolusi 
                    dalam industri makanan sehat di Indonesia. Kami memulai perjalanan 
                    dengan satu tujuan sederhana: membuat teknologi freeze drying 
                    accessible untuk semua orang.
                  </p>
                  <p>
                    Dengan pengalaman bertahun-tahun dalam industri makanan dan teknologi 
                    pengawetan, kami memahami betapa pentingnya menjaga nutrisi dan 
                    kelezatan makanan tanpa mengorbankan kualitas dan keamanan.
                  </p>
                  <p>
                    Hari ini, kami bangga menjadi salah satu pionir teknologi freeze 
                    drying di Indonesia, tidak hanya menyediakan produk berkualitas 
                    tinggi, tetapi juga berbagi pengetahuan melalui program pelatihan 
                    dan kursus yang komprehensif.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏭</div>
                    <h3 className="text-2xl font-bold text-gray-800">Fasilitas Modern</h3>
                    <p className="text-gray-600 mt-2">Teknologi Terdepan</p>
                  </div>
                </div>
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
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  Menjadi perusahaan terdepan dalam teknologi freeze drying di Asia Tenggara, 
                  menghadirkan inovasi makanan sehat yang accessible untuk semua kalangan, 
                  dan menciptakan ekosistem bisnis yang berkelanjutan.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Menyediakan produk freeze dried berkualitas tinggi
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Mengedukasi masyarakat tentang teknologi freeze drying
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Memberdayakan entrepreneur di bidang makanan sehat
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Berkontribusi pada gaya hidup sehat masyarakat Indonesia
                  </li>
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
                Prinsip-prinsip yang memandu setiap langkah perjalanan kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kualitas</h3>
                <p className="text-gray-600">
                  Komitmen terhadap standar kualitas tertinggi dalam setiap produk dan layanan
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inovasi</h3>
                <p className="text-gray-600">
                  Terus berinovasi dan mengadopsi teknologi terdepan untuk kemajuan industri
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integritas</h3>
                <p className="text-gray-600">
                  Transparansi dan kejujuran dalam setiap aspek bisnis dan hubungan
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Keberlanjutan</h3>
                <p className="text-gray-600">
                  Berkomitmen pada praktik bisnis yang ramah lingkungan dan berkelanjutan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tim Ahli Kami
              </h2>
              <p className="text-xl text-gray-600">
                Didukung oleh para profesional berpengalaman di bidangnya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tim Teknologi</h3>
                <p className="text-gray-600">
                  Para ahli teknologi freeze drying dengan pengalaman internasional
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍🏫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tim Edukasi</h3>
                <p className="text-gray-600">
                  Instruktur berpengalaman dalam pelatihan dan pengembangan SDM
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tim Bisnis</h3>
                <p className="text-gray-600">
                  Konsultan bisnis yang membantu mengembangkan strategi pemasaran
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabunglah dengan Kami
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Mari bersama-sama membangun masa depan industri makanan sehat di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20untuk%20bergabung%20dengan%20program%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Hubungi Kami
              </a>
              {/* INI BAGIAN YANG DIUBAH */}
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Baca Blog Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}