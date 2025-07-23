import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Temukan Keajaiban Alam dan Kehangatan di Homestay Bumina Eenk
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Di sini, setiap detik adalah kesempatan untuk menikmati pemandangan gunung yang memukau, 
            udara sejuk yang menenangkan, dan suasana nyaman dengan perapian yang menghangatkan hati. 
            Kunjungi kami dan rasakan pengalaman menginap yang tak terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Hubungi Kami Sekarang</span>
            </Button>
            
            <Button 
              size="lg" 
  variant="outline"
  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-700 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2" // <--- TAMBAHIN bg-transparent
>
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp</span>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-blue-200 text-sm uppercase tracking-wide">Telepon</div>
              <div className="text-xl font-semibold">+62 852-1946-0779</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-200 text-sm uppercase tracking-wide">Lokasi</div>
              <div className="text-xl font-semibold">Pangalengan Taman Langit Bandung</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-200 text-sm uppercase tracking-wide">Jam Operasional</div>
              <div className="text-xl font-semibold">Mon-Fri 24 Jam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

