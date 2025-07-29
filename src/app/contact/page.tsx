import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Metadata diubah total biar relevan sama homestay
export const metadata = {
  title: "Kontak & Lokasi - Homestay Bumina EENK di Pangalengan",
  description: "Hubungi kami untuk booking atau informasi lebih lanjut mengenai Homestay Bumina EENK. Temukan lokasi kami di Pangalengan, Bandung.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hubungi <span className="text-green-600">Kami</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Punya pertanyaan soal booking, fasilitas, atau mau nanya-nanya dulu? Jangan ragu kontak kami. Tim kami siap bantu!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & FAQ */}
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
                        Jl. Perkebunan Teh Sosro, Pangalengan<br />
                        Kabupaten Bandung, Jawa Barat 40378<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon / WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href="tel:+6281234567890" className="hover:text-green-600 transition-colors">
                          +62 812-3456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info.bumina@example.com" className="hover:text-green-600 transition-colors">
                          info.bumina@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Cara Tercepat Menghubungi Kami</h3>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-block"
                  >
                    Chat via WhatsApp
                  </a>
                  <p className="text-sm text-gray-600 mt-4">
                    Klik tombol di atas untuk respon tercepat dari tim kami.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Pertanyaan Umum (FAQ)
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Berapa kapasitas maksimal homestay?
                      </h3>
                      <p className="text-gray-600">
                        Homestay kami dapat menampung hingga 25 orang dengan nyaman, cocok untuk keluarga besar atau rombongan kantor.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Fasilitas apa saja yang tersedia?
                      </h3>
                      <p className="text-gray-600">
                        Kami menyediakan dapur lengkap, perapian hangat, parkir luas, dan tentunya pemandangan kebun teh dan pegunungan yang indah.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Bagaimana cara melakukan booking?
                      </h3>
                      <p className="text-gray-600">
                        Anda bisa booking langsung melalui WhatsApp untuk respon tercepat atau melalui platform Booking.com. Link tersedia di halaman utama.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Apakah boleh membawa hewan peliharaan?
                      </h3>
                      <p className="text-gray-600">
                        Untuk saat ini, kami belum bisa mengakomodasi hewan peliharaan untuk menjaga kenyamanan semua tamu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Temukan Lokasi Kami
              </h2>
              <p className="text-xl text-gray-600">
                Kami berada di lokasi strategis yang dikelilingi keindahan alam Pangalengan.
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
              {/* Ganti pake iframe Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.15810143831!2d107.58307399999999!3d-7.2929250000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68f3a8b41a319d%3A0x26588226210f175a!2sTaman%20Langit%20Pangalengan!5e0!3m2!1sen!2sid!4v1690123456789!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Homestay Bumina EENK"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}