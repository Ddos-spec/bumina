import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
            Kata Tamu Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman luar biasa dari tamu-tamu yang telah merasakan kenyamanan Homestay Bumina Eenk
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="80px"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 text-lg">Tamu Puas</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">4.9</div>
              <p className="text-gray-600 text-lg">Rating Rata-rata</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600 text-lg">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Bergabunglah dengan ratusan tamu yang telah merasakan pengalaman luar biasa di Homestay Bumina Eenk
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Lihat Semua Review
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg">
              Tulis Review Anda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

