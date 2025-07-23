import { SEO_POINTS } from "@/lib/constants";

export default function SEOSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
            Penginapan di Pangalengan dengan View Terbagus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lokasi strategis yang memberikan akses mudah ke berbagai destinasi wisata populer di Pangalengan
          </p>
        </div>

        {/* SEO Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SEO_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    {point}
                  </h3>
                  <p className="text-gray-600">
                    {getPointDescription(point)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Posisi Strategis untuk Petualangan Anda
            </h3>
            <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto">
              Homestay Bumina Eenk terletak di jantung kawasan wisata Pangalengan, memberikan Anda akses mudah 
              ke semua destinasi populer. Mulai dari keindahan Taman Langit hingga kesejukan Situ Cileunca, 
              semuanya dapat dijangkau dengan mudah dari lokasi kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function getPointDescription(point: string): string {
  const descriptions: { [key: string]: string } = {
    "Dekat Taman Langit Pangalengan": "Hanya beberapa menit berkendara menuju destinasi wisata paling populer di Pangalengan",
    "Dekat Situ Cileunca": "Nikmati keindahan danau dan aktivitas air yang menyegarkan di lokasi yang mudah dijangkau",
    "Dekat Nemo Highland": "Eksplorasi wahana seru dan pemandangan spektakuler di highland terdekat",
    "Dekat Pemandian Air Panas": "Relaksasi di pemandian air panas alami untuk menyegarkan tubuh dan pikiran"
  };
  
  return descriptions[point] || "Lokasi strategis dengan akses mudah ke berbagai tempat wisata menarik";
}

