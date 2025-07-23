// src/components/Footer.jsx

import { MapPin, Phone, Clock, Instagram, Music } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-full">
                <div className="text-sm font-bold text-green-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Homestay Bumina Eenk</h3>
                <p className="text-sm text-gray-400">Penginapan Terbaik di Pangalengan</p>
              </div>
            </div>
            <p className="leading-relaxed text-gray-300 max-w-md">
              Nikmati pengalaman menginap yang tak terlupakan di tengah keindahan alam Pangalengan. 
              Dengan pemandangan gunung dan kebun teh yang menakjubkan, kami siap memberikan kenyamanan terbaik untuk Anda.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+62 852-1946-0779</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-300">Pangalengan Taman Langit Bandung</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Mon-Fri 24 Jam</span>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Ikuti Kami</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/homestay_buminaeenk/" // <-- LINK BARU
                target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 transition-colors hover:text-pink-400"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@homestay_bandung" // <-- LINK BARU
                target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 transition-colors hover:text-blue-400"
              >
                <Music className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h5 className="mb-3 font-semibold">Quick Links</h5>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 transition-colors hover:text-white">Home</a>
                <a href="#about" className="block text-gray-300 transition-colors hover:text-white">About</a>
                <a href="#features" className="block text-gray-300 transition-colors hover:text-white">Fasilitas</a>
                <a href="#testimonials" className="block text-gray-300 transition-colors hover:text-white">Testimoni</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="pt-8 mt-12 border-t border-gray-700">
          <h4 className="mb-4 text-lg font-semibold text-center">Lokasi Kami</h4>
          <div className="p-4 text-center bg-gray-800 rounded-lg">
            <div className="mb-2 text-gray-400">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p>Klik untuk melihat lokasi di Google Maps</p>
            </div>
            <div className="p-4 text-sm bg-gray-700 rounded">
              <p className="font-medium">G68C+QJR, Sukaluyu, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat, Indonesia</p>
              <a 
                href="https://maps.app.goo.gl/9tpgHgmv1B4vYygt5" // Link Google Maps Sebenarnya
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 transition-colors hover:text-blue-300"
              >
                Lihat peta lebih besar →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-700">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 All Rights Reserved. Bumina Eenk
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer