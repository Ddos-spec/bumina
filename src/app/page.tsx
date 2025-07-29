"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  { name: "Durian", description: "Snack yang terbuat dari buah durian asli, diolah dengan teknologi canggih untuk menjaga rasa otentik dan nutrisi alaminya.", image: '/durian.webp', shopeeUrl: "#", tokopediaUrl: "#" },
  { name: "Manggis", description: "Nikmati kelezatan manggis dalam bentuk keripik renyah. Penuh antioksidan dan rasa manis yang khas.", image: '/manggis.webp', shopeeUrl: "#", tokopediaUrl: "#" },
  { name: "Apel", description: "Keripik apel renyah yang mempertahankan semua kebaikan buah apel segar. Camilan sehat tanpa rasa bersalah.", image: '/apel.webp', shopeeUrl: "#", tokopediaUrl: "#" },
  { name: "Mangga", description: "Rasa manis mangga tropis yang intens dalam setiap gigitan. Sumber energi alami yang praktis dibawa.", image: '/mangga.webp', shopeeUrl: "#", tokopediaUrl: "#" },
  { name: "Jus Bar Mangga", description: "Nangka pilihan dengan rasa manis otentik, diolah sempurna untuk menjaga tekstur dan aroma khasnya.", image: '/manggajusbar.webp', shopeeUrl: "#", tokopediaUrl: "#" },
  { name: "Pisang", description: "Manisnya pisang asli dalam setiap gigitan renyah. Diproses dengan cermat untuk mengunci semua kebaikan buah.", image: '/pisang.webp', shopeeUrl: "#", tokopediaUrl: "#" },
];

const sliderImages = [
    '/slider1.webp',
    '/slider2.webp',
    '/slider3.webp',
];

// --- Kumpulan Ikon (MENGGUNAKAN VERSI ASLI DARI KODE LU) ---
const StarIcon = () => ( <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> </svg> );
const ShopeeIcon = () => ( <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 512 512"><path d="M256.1 2.2c-1.2 3.6-2.5 7.1-4.2 10.5-2.6 5.1-6.1 9.4-10.4 12.8-10.2 8.2-24.1 11.4-36.9 8.2-13.8-3.5-26.2-12.3-33.8-24.4-3.1-5-5.6-10.4-7.3-16-1-3.3-1.8-6.7-2.3-10.1-4.1 1.8-8.1 3.9-11.8 6.4-11.4 7.6-24.9 12.1-38.9 12.1-22.3 0-42.5-9.3-56.1-24.4-14-15.5-22.3-36.1-22.3-58.2 0-23.4 9.6-44.9 25.3-60.2 16-15.6 37.9-25 61.8-25 14.2 0 27.9 4.7 39.4 13.2 9.5 7.2 17.5 16.9 23.3 28.1 4.5 8.7 8 18.2 10.4 28.1 3.1 12.8 3.1 26.2 0 39.4-2.1 8.9-5.3 17.5-9.4 25.4-8.2 16-22.3 27.2-39.4 31.9-18.7 5.1-38.9 2-54-8.2-12.8-8.7-22.3-21.2-26.2-35.6-2.5-9.1-3.6-18.5-3.6-28.1 0-18.5 5.3-35.6 14.8-49.7 9.8-14.5 24.1-24.4 41.5-28.1 18.2-3.8 37.1-.5 52.9 8.2 15.2 8.4 27.4 21.2 34.8 36.9 4.2 8.9 7.3 18.7 9.4 29.1 2.3 11.6 2.3 23.6 0 35.6-2.3 11.8-6.9 22.8-13.2 32.4-1.2-3.6-2.5-7.1-4.2-10.5-2.6-5.1-6.1 9.4-10.4 12.8-10.2-8.2-24.1-11.4-36.9-8.2-13.8 3.5-26.2 12.3-33.8 24.4-3.1 5-5.6 10.4-7.3-16-1-3.3-1.8-6.7-2.3-10.1-4.1 1.8-8.1 3.9-11.8 6.4-11.4 7.6-24.9 12.1-38.9 12.1-22.3 0-42.5-9.3-56.1-24.4-14-15.5-22.3-36.1-22.3-58.2 0-23.4 9.6-44.9 25.3-60.2 16-15.6 37.9-25 61.8-25 14.2 0 27.9 4.7 39.4 13.2 9.5 7.2 17.5 16.9 23.3 28.1 4.5 8.7 8 18.2 10.4 28.1 3.1 12.8 3.1 26.2 0 39.4-2.1 8.9-5.3 17.5-9.4 25.4-8.2 16-22.3 27.2-39.4 31.9-18.7 5.1-38.9 2-54-8.2-12.8-8.7-22.3-21.2-26.2-35.6-2.5-9.1-3.6-18.5-3.6-28.1 0-18.5 5.3-35.6 14.8-49.7 9.8-14.5 24.1-24.4 41.5-28.1 18.2-3.8 37.1-.5 52.9 8.2 15.2 8.4 27.4 21.2 34.8 36.9 4.2 8.9 7.3 18.7 9.4 29.1 2.3 11.6 2.3 23.6 0 35.6-2.3 11.8-6.9 22.8-13.2 32.4z"/></svg> );
const TokopediaIcon = () => ( <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119.03 8 8 119.03 8 256s111.03 248 248 248 248-111.03 248-248S392.97 8 256 8zm113.9 336.8c-2.3 2.3-5.4 3.5-8.5 3.5s-6.2-1.2-8.5-3.5L256 248.5l-96.9 96.3c-2.3 2.3-5.4 3.5-8.5 3.5s-6.2-1.2-8.5-3.5c-4.7-4.7-4.7-12.3 0-17l96.9-96.3-96.9-96.3c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l96.9 96.3 96.9-96.3c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L273.5 256l96.9 96.3c4.7 4.5 4.7 12.3-.5 17z"/></svg> );

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-white py-24 sm:py-32 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-gray-500">
                  Jasa Vacuum Freeze Dried Pertama di Indonesia
                </p>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900">
                  Freeze Dried <span className="text-orange-500">INDONESIA</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Anda sedang mencari pesanan khusus untuk makanan Freeze Dried?
                </p>
              </div>
              <div className="w-full h-80 relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/fotoawalhero.webp" alt="Produk Freeze Dried Unggulan" layout="fill" objectFit="cover" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Penjelasan "Apa itu Vacuum Freeze Dried?" */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-bold">Apa itu Vacuum Freeze Dried?</h2>
             <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-8"></div>
             <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Pengeringan beku adalah proses dehidrasi makanan beku di bawah vakum sehingga kadar air berubah langsung dari bentuk padat menjadi gas tanpa harus mengalami keadaan cair perantara melalui sublimasi. Dalam proses ini, makanan kering beku mempertahankan ukuran dan bentuk aslinya dengan kerusakan sel yang minimal. Menghilangkan kelembapan mencegah produk memburuk pada suhu kamar.
             </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                 {sliderImages.map((src, index) => (
                    <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <Image src={src} alt={`Slider Image ${index + 1}`} layout="fill" objectFit="cover" unoptimized />
                    </div>
                 ))}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {sliderImages.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={`block w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500' : 'bg-white'}`}></button>
                    ))}
                 </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Keunggulan Proses Olahan Makanan</h3>
                <ul className="space-y-6">
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Kualitas Produk Lebih Stabil</h4><p className="text-gray-600">Tidak terjadi perubahan aroma, warna, dan unsur organoleptik lainnya.</p></div></li>
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Struktur Bahan Tetap Terjaga</h4><p className="text-gray-600">Tidak terjadi pengerutan atau perubahan bentuk struktur bahan.</p></div></li>
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Daya Rehidrasi Meningkat</h4><p className="text-gray-600">Dapat kembali ke sifat fisik yang hampir sama dengan sebelum pengeringan.</p></div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Product Olahan Kami</h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="relative w-full h-64">
                    <Image src={product.image} alt={`Gambar ${product.name}`} layout="fill" objectFit="cover" unoptimized />
                  </div>
                  <div className="p-6 text-left flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-orange-600">{product.name}</h3>
                    <p className="mt-4 text-gray-600 flex-grow">{product.description}</p>
                    {/* ===== BAGIAN INI YANG DIUBAH ===== */}
                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center space-x-4">
                        <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
                            <ShopeeIcon />
                            Shopee
                        </a>
                        <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                            <TokopediaIcon />
                            Tokopedia
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mengapa Memilih Kami Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Mengapa Memilih Kami?</h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Mesin Terbaik</h3>
                <p className="mt-4 text-gray-600">Menggunakan mesin terbaik dalam proses pengolahan dan dijamin kebersihannya.</p>
              </div>
               <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Terpercaya</h3>
                <p className="mt-4 text-gray-600">Telah melayani konsumen dari berbagai daerah di Indonesia dan tersertifikasi P-IRT.</p>
              </div>
               <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Beragam Pilihan</h3>
                <p className="mt-4 text-gray-600">Menerima berbagai pilihan produk atau jasa freeze dried food sesuai kebutuhan Anda.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ultimate CTA Section - Kursus */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center bg-gray-800 text-white p-12 rounded-2xl">
            <h2 className="text-4xl font-extrabold">🚀 Buka Revolusi Bisnis Snack Sehat Anda!</h2>
            <p className="mt-4 text-2xl font-semibold">
              Kuasai Teknologi Freeze Drying dan Jadilah Pelopor di Industri yang Sedang Meledak!
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
              Ini bukan sekadar kursus. Ini adalah tiket Anda untuk menciptakan produk inovatif, membangun brand yang kuat, dan meraih keuntungan di pasar makanan sehat. Dari teori fundamental hingga strategi bisnis yang terbukti, kami siapkan Anda menjadi ahli. ✨
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20siap%20mengubah%20peluang%20menjadi%20keuntungan%20dengan%20kursus%20Freeze%20Drying."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
            >
              Daftar Sekarang Juga! 👉
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}