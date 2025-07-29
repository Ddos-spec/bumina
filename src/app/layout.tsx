import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({ subsets: ["latin"] });

// --- METADATA BARU BUAT SEO HOMESTAY ---
export const metadata: Metadata = {
  title: "Homestay Bumina EENK - Villa & Penginapan Terbaik di Pangalengan",
  description: "Nikmati pengalaman menginap tak terlupakan di Homestay Bumina EENK, villa sejuk di tengah kebun teh Pangalengan. Fasilitas lengkap dengan perapian hangat.",
  
  // Ganti favicon ke yang lebih umum atau sesuai homestay
  icons: {
    icon: '/bumina/favicon.ico',
  },

  keywords: "homestay pangalengan, villa di pangalengan, penginapan kebun teh, sewa villa bandung, wisata pangalengan, bumina eenk, taman langit pangalengan",
  authors: [{ name: "Homestay Bumina EENK" }],
  
  // Info buat pas di-share ke Facebook, WhatsApp, dll.
  openGraph: {
    title: "Homestay Bumina EENK - Villa Terbaik di Pangalengan",
    description: "Villa sejuk di tengah kebun teh Pangalengan dengan pemandangan gunung memukau.",
    type: "website",
    locale: "id_ID",
    // Tambahin gambar utama biar cakep pas di-share
    images: 'https://ddos-spec.github.io/bumina/homestay1.webp', 
    url: 'https://ddos-spec.github.io/bumina/', // URL website lo
  },
  
  // Info buat pas di-share ke Twitter
  twitter: {
    card: "summary_large_image",
    title: "Homestay Bumina EENK - Villa Terbaik di Pangalengan",
    description: "Villa sejuk di tengah kebun teh Pangalengan dengan pemandangan gunung memukau.",
    images: ['https://ddos-spec.github.io/bumina/homestay1.webp'], // Tambahin gambar juga
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* --- STRUCTURED DATA BARU, BIAR GOOGLE MAKIN PAHAM --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              // Diubah jadi LodgingBusiness biar lebih spesifik buat SEO
              "@type": "LodgingBusiness",
              "name": "Homestay Bumina EENK",
              "description": "Villa dan penginapan sejuk di tengah kebun teh Pangalengan, Bandung, dengan kapasitas hingga 25 orang dan fasilitas perapian.",
              "url": "https://Ddos-spec.github.io/bumina",
              "image": "https://Ddos-spec.github.io/bumina/homestay1.webp",
              "telephone": "+62-812-3456-7890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Kebun Teh Sosro",
                "addressLocality": "Pangalengan",
                "addressRegion": "Jawa Barat",
                "postalCode": "40378",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                // Ini koordinat kira-kira, ganti pake yang asli ya
                "latitude": "-7.2188",
                "longitude": "107.5958"
              },
              "priceRange": "$$", // Ganti sesuai harga (contoh: $$ = moderat)
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}