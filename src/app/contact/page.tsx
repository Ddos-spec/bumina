// app/kontak/page.tsx (atau sesuai path file lu)
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontak - Raja Freeze Dried Food | Hubungi Kami",
  description: "Hubungi Raja Freeze Dried Food untuk informasi lebih lanjut tentang produk, kursus, atau kerjasama bisnis. Kami siap membantu Anda.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hubungi <span className="text-green-600">Kami</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami siap membantu Anda dengan informasi produk, kursus, atau 
                peluang kerjasama bisnis. Jangan ragu untuk menghubungi kami!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Informasi Kontak
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Alamat</h3>
                      <p className="text-gray-600">
                        Jl. Teknologi Freeze Drying No. 123<br />
                        Jakarta Selatan, DKI Jakarta 12345<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+6281234567890" className="hover:text-green-600 transition-colors">
                          +62 812-3456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@rajafreezdriedfood.com" className="hover:text-green-600 transition-colors">
                          info@rajafreezdriedfood.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                      <div className="text-gray-600">
                        <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                        <p>Sabtu: 08:00 - 15:00 WIB</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Ikuti Kami</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      title="WhatsApp"
                    >
                      <span className="text-xl">💬</span>
                    </a>
                    <a
                      href="https://shopee.co.id/rajafreezdriedfood"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                      title="Shopee"
                    >
                      <span className="text-xl">🛒</span>
                    </a>
                    <a
                      href="https://tokopedia.com/rajafreezdriedfood"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                      title="Tokopedia"
                    >
                      <span className="text-xl">🏪</span>
                    </a>
                  </div>
                </div>

                {/* Call to Action - WhatsApp */}
                <div className="mt-12 text-center">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20ingin%20menghubungi%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-block"
                  >
                    Hubungi Kami via WhatsApp
                  </a>
                  <p className="text-sm text-gray-600 mt-4">
                    Klik tombol di atas untuk terhubung langsung dengan kami via WhatsApp.
                  </p>
                </div>
              </div>

              {/* FAQ Section - Dipindah ke bawah agar seimbang */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Pertanyaan yang Sering Diajukan
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Apa itu teknologi freeze drying?
                      </h3>
                      <p className="text-gray-600">
                        Freeze drying adalah proses pengawetan makanan yang menghilangkan air melalui 
                        sublimasi (perubahan langsung dari es menjadi uap) pada suhu rendah dan tekanan vakum, 
                        sehingga nutrisi dan rasa makanan tetap terjaga.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Berapa lama durasi kursus freeze drying?
                      </h3>
                      <p className="text-gray-600">
                        Kursus kami berlangsung selama 3 hari dengan total 24 jam pembelajaran, 
                        mencakup teori, praktik langsung, dan sesi konsultasi bisnis.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Apakah tersedia sertifikat setelah menyelesaikan kursus?
                      </h3>
                      <p className="text-gray-600">
                        Ya, setiap peserta yang menyelesaikan kursus akan mendapatkan sertifikat 
                        resmi dari Raja Freeze Dried Food yang dapat digunakan untuk keperluan bisnis.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Bagaimana cara memesan produk freeze dried?
                      </h3>
                      <p className="text-gray-600">
                        Anda dapat memesan produk kami melalui marketplace resmi di Shopee dan Tokopedia, 
                        atau langsung menghubungi kami via WhatsApp untuk pemesanan dalam jumlah besar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lokasi Kami
              </h2>
              <p className="text-xl text-gray-600">
                Kunjungi fasilitas kami untuk melihat langsung teknologi freeze drying terdepan
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Peta Lokasi</h3>
                <p className="text-gray-600">
                  Jl. Teknologi Freeze Drying No. 123<br />
                  Jakarta Selatan, DKI Jakarta 12345
                </p>
                <a
                  href="https://maps.google.com/?q=Jakarta+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}