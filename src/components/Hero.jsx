// src/components/Hero.jsx

import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <>
      {/* Skip Link buat aksesibilitas, ini penting */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Skip to main content
      </a>
      
      <section id="home" className="bg-white">
        {/* === BAGIAN GAMBAR HERO (REDESIGN) === */}
        <div className="grid h-[60vh] grid-cols-1 md:grid-cols-2">
          
          {/* --- Gambar Kiri (Kebun Teh) --- */}
          {/* Teknik ini pake background-image, lebih stabil dan anti-gagal */}
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/hero-kebun-teh.jpeg')` }}
            aria-label="Pemandangan kebun teh Pangalengan"
          >
            {/* Lapisan gelap biar kontras */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* --- Gambar Kanan (Poster) --- */}
          <div
            className="relative hidden h-full w-full bg-cover bg-center md:block"
            style={{ backgroundImage: `url('/poster_homestay_bumina.webp')` }}
            aria-label="Poster promosi Homestay Bumina Eenk"
          >
             {/* Dikasih hidden di mobile biar fokus ke satu gambar */}
          </div>

        </div>

        {/* === BAGIAN KONTEN UTAMA (TETAP SAMA) === */}
        <main id="main-content" className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-navy-800 md:text-5xl">
              Penginapan di Taman Langit Pangalengan bandung
            </h1>
            
            <div className="mb-8 space-y-6 text-lg text-gray-700">
              <p>
                Penginapan Taman Langit pangalengan Bandung, Berada di tengah-tengah perkebunan teh sosro, 
                kabut setiap hari turun, suhu mencapai 17 derajat. Sangat dingin di sarankan untuk membawa 
                jaket dan kaus kaki tebal agar tirdur nyenyak.
              </p>
              
              <p>
                Penginapan Nyaman di Pangalengan Bandung dengan Pemandangan Gunung dan Kebun Teh yang Menakjubkan.
              </p>
              
              <p>
                Nikmati kesejukan udara pegunungan dan kehangatan perapian hanya di{' '}
                <span className="font-bold text-navy-800">Homestay Bumina Eenk</span>. 
                Lokasi strategis dekat <span className="font-bold">Taman Langit Pangalengan</span> dan 
                tempat wisata alam terbaik di Bandung. Jadikan liburan Anda lebih berkesan dengan 
                suasana tenang yang menyatu dengan alam.
              </p>
            </div>

            <div className="mb-8 text-xl font-bold text-navy-800">
              Pesan Sekarang dan Rasakan Perbedaannya!
            </div>

            <Button 
              size="lg" 
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Hubungi kami untuk reservasi homestay"
            >
              Hubungi Kami Sekarang
            </Button>
          </div>
        </main>
      </section>
    </>
  )
}

export default Hero