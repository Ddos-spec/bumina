import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anak Motor Bekasi",
      text: "Tempat sangat bersih, ada perapian dalam rumah membuat kita enak berkumpul karena malam sangat dingin jadi sangat seru banget",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Karyawan PNS Dinas Ketenagakerjaan",
      text: "Family Gathering disini sangat-sangat enak sekali, tempatnya bersih, parkiran luas, dekat dengan banyak wisata salah satunya Taman Langit dan Situ Cileunca.",
      avatar: "/avatar-karyawan.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Keluarga Ustazah Siti Hanah Pondok Indah",
      text: "Ngadain Acara di Homestay Bumina Eenk sangat-sangat indah dan enak. suhu di sini kisaran 15 sd 17 derajat jadi bawa jaket ya guys..pemandangannya Masya Allah di manjakan gunung-gunung yan gberbaris depan teras persis.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman tamu-tamu kami yang telah merasakan kehangatan dan kenyamanan di Homestay Bumina Eenk
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Tamu Homestay</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Tamu Puas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">4.9</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Pelayanan</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600">Kepuasan</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

