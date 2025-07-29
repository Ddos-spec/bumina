"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Keluarga Budi Santoso",
    feedback: "Pengalaman menginap yang luar biasa! Suasana kebun teh yang hijau dan udara sejuk pegunungan membuat kami merasa sangat nyaman. Perapian di dalam rumah benar-benar menghangatkan malam yang dingin. Highly recommended!",
    image: '/bumina/testimoni1.webp',
    rating: 5,
    location: "Jakarta"
  },
  {
    name: "Rombongan Kantor PT Maju Bersama",
    feedback: "Villa yang sangat luas, bisa menampung 25 orang dengan nyaman. Fasilitas lengkap, dapur bersih, dan yang paling berkesan adalah pemandangan gunung di pagi hari. Tim kami sangat puas dengan pelayanannya.",
    image: '/bumina/testimoni2.webp',
    rating: 5,
    location: "Surabaya"
  },
  {
    name: "Keluarga Sari Wijaya",
    feedback: "Lokasi strategis dekat Taman Langit Pangalengan! Cuma jalan kaki sebentar sudah sampai. Anak-anak senang banget bisa main di camping ground berlantai kayu. Suasana alami yang masih asri.",
    image: '/bumina/testimoni3.webp',
    rating: 5,
    location: "Bandung"
  },
  {
    name: "Komunitas Fotografi Nusantara",
    feedback: "Spot foto terbaik! Hamparan kebun teh sosro yang hijau dengan latar belakang pegunungan sangat instagramable. Sunrise dan sunset view yang spektakuler. Pasti akan kembali lagi!",
    image: '/bumina/testimoni4.webp',
    rating: 5,
    location: "Yogyakarta"
  }
];

const sliderImages = [
    '/bumina/homestay1.webp',
    '/bumina/homestay2.webp',
    '/bumina/homestay3.webp',
    '/bumina/homestay4.webp',
    '/bumina/homestay5.webp'
];

// Komponen Ikon
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const BookingIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
  </svg>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-32 sm:py-48 flex items-center min-h-screen">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-emerald-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <p className="text-lg font-semibold text-emerald-200">
                    🏔️ Villa Terbaik di Pangalengan Bandung
                  </p>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase text-white leading-none">
                  HOMESTAY <br/>
                  <span className="text-emerald-400">BUMINA EENK</span>
                </h1>
                <div className="mt-8 space-y-4">
                  <p className="text-xl md:text-2xl text-emerald-100 font-medium">🌿 Di tengah kebun teh sosro yang hijau</p>
                  <p className="text-xl md:text-2xl text-emerald-100 font-medium">🏔️ Pemandangan gunung yang memukau</p>
                  <p className="text-xl md:text-2xl text-emerald-100 font-medium">🔥 Perapian hangat untuk malam dingin</p>
                  <p className="text-xl md:text-2xl text-emerald-100 font-medium">🚶 Dekat Taman Langit Pangalengan</p>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20booking%20Homestay%20Bumina%20EENK" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <WhatsAppIcon /> Book via WhatsApp
                  </a>
                  <a href="https://www.booking.com/hotel/id/bumina-eenk.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <BookingIcon /> Book via Booking.com
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  {sliderImages.map((src, index) => (
                    <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                      <Image src={src} alt={`Homestay Bumina EENK ${index + 1}`} layout="fill" objectFit="cover" unoptimized />
                    </div>
                  ))}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                    {sliderImages.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)} className={`block w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-emerald-400 scale-125' : 'bg-white/50 hover:bg-white/75'}`}/>
                    ))}
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl transform rotate-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold">17°C</div>
                    <div className="text-sm">Suhu Sejuk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Apa Kata <span className="text-emerald-400">Mereka</span></h2>
              <div className="w-32 h-2 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dengarkan pengalaman nyata dari tamu-tamu yang telah merasakan kehangatan dan kenyamanan Homestay Bumina EENK.
              </p>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                          <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-400">
                            <Image src={testimonial.image} alt={testimonial.name} layout="fill" objectFit="cover" unoptimized />
                          </div>
                          
                          <div className="flex-1 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start mb-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            
                            <blockquote className="text-xl lg:text-2xl text-gray-100 mb-6 italic leading-relaxed">
                              &quot;{testimonial.feedback}&quot;
                            </blockquote>
                            
                            <div>
                              <div className="text-xl font-bold text-emerald-400">{testimonial.name}</div>
                              <div className="text-emerald-200">{testimonial.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-emerald-400 scale-125' : 'bg-white/30 hover:bg-white/50'}`}/>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}