// src/components/About.jsx

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl text-navy-800">
            About Us
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Kiri: Galeri Gambar */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* 1. Tampak Depan Villa */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/villa1.webp" 
                alt="Homestay Bumina Eenk - Tampak depan villa"
                className="object-cover w-full h-48 duration-300 transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* 2. Pemandangan Kebun Teh */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/kebun_teh1.webp" 
                alt="Pemandangan gunung dan kebun teh dari homestay"
                className="object-cover w-full h-48 duration-300 transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* 3. GAMBAR PENGGANTI VIDEO (SUDAH DIGANTI) */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/villa3.webp" 
                alt="Grup tamu yang sedang menginap di Homestay Bumina Eenk"
                className="object-cover w-full h-48 duration-300 transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* 4. Interior Villa */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/villa2.webp" 
                alt="Interior homestay dengan perapian"
                className="object-cover w-full h-48 duration-300 transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Kanan: Teks Deskripsi */}
          <div className="space-y-6">
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                Selamat datang di <span className="font-bold text-navy-800">Homestay Bumina Eenk</span>, 
                penginapan terbaik di <span className="font-bold text-navy-800">Pangalengan Bandung</span> yang 
                dirancang untuk memberikan kenyamanan dan kehangatan seperti di rumah sendiri. Berada di kawasan 
                hijau yang indah, kami menawarkan pengalaman unik dengan pemandangan gunung, kebun teh, dan 
                suasana sejuk khas pegunungan.
              </p>
              
              <p>
                Homestay Bumina Eenk adalah villa di pangalengan bandung tempat di mana keindahan alam bertemu 
                dengan kenyamanan rumah. Terletak di tengah hamparan kebun teh yang hijau dengan latar belakang 
                pegunungan yang megah, kami menawarkan pengalaman menginap yang tak hanya memberikan kehangatan, 
                tetapi juga ketenangan yang sulit ditemukan di tempat lain.
              </p>
              
              <p className="font-medium text-navy-800">
                Selamat datang di Homestay Bumina Eenk—tempat di mana cerita indah Anda dimulai.
              </p>
            </div>

            <Button 
              size="lg" 
              className="px-8 py-3 text-white duration-300 transition-all bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl"
            >
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About