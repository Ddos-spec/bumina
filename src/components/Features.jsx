import { MapPin, Mountain, Home, Waves } from 'lucide-react'

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Penginapan sangat dekat dengan wisata taman langit bandung",
      description: "Setiap Pagi bisa melihat pemandangan gunung hijau yang berbaris dan hamparan kebun teh yang menyejukan mata.",
      image: "/taman_langit1.webp",
      color: "bg-green-500",
      textColor: "text-white",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      id: 2,
      title: "penginapan di situ cileunca bandung",
      description: "Rumah Luas bisa sampai 25 orang dan disediakan juga campign Ground berlantai kayu dan perapian dalam rumah",
      image: "/kebun_teh2.webp",
      color: "bg-orange-500",
      textColor: "text-white",
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Villa di pangalengan bandung",
      description: "Parkiran Motor dan Mobil Luas, sehingga tidak perlu khawatir, jalan tidak terlalu curam menanjak.",
      image: "/villa1.webp",
      color: "bg-blue-400",
      textColor: "text-white",
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 4,
      title: "penginapan dekat nimo highland bandung",
      description: "Terdapat Dapur dalam Rumah sehingga tamu bisa membawa masakan yang siap untuk dimasak di sana.",
      image: "/villa2.webp",
      color: "bg-purple-500",
      textColor: "text-white",
      icon: <MapPin className="w-6 h-6" />
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            Homestay Bumina Eenk Villa Pangalengan bandung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Penginapan di Dekat Wisata Taman Langit Bandung, di tengah-tengah kebun teh Sosro
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="relative h-80">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Color Badge */}
                <div className={`${feature.color} ${feature.textColor} inline-flex items-center space-x-2 px-3 py-2 rounded-lg mb-4 self-start`}>
                  {feature.icon}
                  <span className="font-medium text-sm">Fasilitas Utama</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-4 ${feature.color.replace('bg-', 'border-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-navy-800 text-center mb-12">
            Penginapan di pangalengan dengan view terbagus
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-navy-800 text-lg mb-3">Keuntungan Pertama</h4>
              <p className="text-gray-600">Penginapan Dekat Dengan Wisata Taman Langit Pangalengan Bandung</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-navy-800 text-lg mb-3">Keuntungan Ke Dua</h4>
              <p className="text-gray-600">Villa Dekat Dengan Wisata Situ Cileunca Pangalengan Bandung</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-navy-800 text-lg mb-3">Keuntungan Ke Tiga</h4>
              <p className="text-gray-600">Penginapan Dekat Wisata Nemo Highland, Rahong</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-navy-800 text-lg mb-3">Keuntungan Ke Empat</h4>
              <p className="text-gray-600">Dekat Wisata Pemandian Air Panas Gunung Wayang Windu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

