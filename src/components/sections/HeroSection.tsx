import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT, SOCIAL_LINKS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background Images */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8">
        <div className="relative h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero/hero1.webp"
            alt="Homestay Bumina Eenk - Pemandangan Gunung"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero/hero2.webp"
            alt="Homestay Bumina Eenk - Kebun Teh"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {HERO_CONTENT.headline}
          </h1>
          
          <div className="space-y-4 text-gray-600 text-lg lg:text-xl mb-8">
            <p>
              Nikmati kesejukan udara pegunungan dan kehangatan perapian hanya di Homestay Bumina Eenk. 
              Lokasi strategis dekat Taman Langit Pangalengan dan tempat wisata alam terbaik di Bandung.
            </p>
            <p className="font-medium text-gray-700">
              Penginapan Nyaman di Pangalengan Bandung dengan Pemandangan Gunung dan Kebun Teh yang Menakjubkan.
            </p>
            <p>
              {HERO_CONTENT.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xl lg:text-2xl font-semibold text-blue-600 mb-6">
              {HERO_CONTENT.cta}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#kontak"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {HERO_CONTENT.ctaButton}
              </Link>
              
              <Link
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

