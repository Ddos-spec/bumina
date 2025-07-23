import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function AboutSection() {
  const galleryImages = [
    { src: "/images/about/villa1.webp", alt: "Villa Homestay Bumina Eenk" },
    { src: "/images/about/kebun_teh1.webp", alt: "Pemandangan Kebun Teh" },
    { src: "/images/about/villa3.webp", alt: "Interior Villa" },
    { src: "/images/about/villa2.webp", alt: "Suasana Villa" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gallery Images */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
                About Us
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Homestay Bumina Eenk adalah destinasi penginapan yang sempurna untuk Anda yang mencari 
                  ketenangan dan keindahan alam pegunungan Pangalengan. Terletak strategis di kawasan 
                  wisata Taman Langit, kami menawarkan pengalaman menginap yang tak terlupakan.
                </p>
                
                <p>
                  Dikelilingi oleh hamparan kebun teh yang hijau dan pemandangan gunung yang memukau, 
                  setiap sudut homestay kami dirancang untuk memberikan kenyamanan maksimal. Udara sejuk 
                  pegunungan dan suasana tenang menjadikan tempat ini ideal untuk melepas penat dari 
                  hiruk pikuk kota.
                </p>
                
                <p>
                  Fasilitas modern yang kami sediakan, termasuk perapian yang hangat di malam hari, 
                  memastikan Anda merasakan kehangatan dan kenyamanan seperti di rumah sendiri. 
                  Lokasi yang dekat dengan berbagai tempat wisata populer membuat Homestay Bumina Eenk 
                  menjadi pilihan terbaik untuk liburan Anda.
                </p>
                
                <p className="font-medium text-gray-700">
                  Rasakan keindahan alam Pangalengan dan nikmati ketenangan yang menyatu dengan alam 
                  hanya di Homestay Bumina Eenk.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Hubungi Kami Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

