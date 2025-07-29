import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({ subsets: ["latin"] });

// HAPUS basePath

export const metadata: Metadata = {
  title: "Raja Freeze Dried Food - Makanan Sehat Freeze Dried Terbaik",
  description: "Raja Freeze Dried Food menyediakan makanan sehat freeze dried berkualitas tinggi. Nikmati kelezatan dan nutrisi yang terjaga dengan teknologi freeze drying terdepan.",
  // Ganti Favicon - pake path absolut
  icons: {
    icon: '/favicon.avif',
  },

  keywords: "freeze dried food, makanan sehat, snack sehat, freeze drying, makanan kering, nutrisi terjaga",
  authors: [{ name: "Raja Freeze Dried Food" }],
  openGraph: {
    title: "Raja Freeze Dried Food - Makanan Sehat Freeze Dried Terbaik",
    description: "Raja Freeze Dried Food menyediakan makanan sehat freeze dried berkualitas tinggi. Nikmati kelezatan dan nutrisi yang terjaga dengan teknologi freeze drying terdepan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Freeze Dried Food - Makanan Sehat Freeze Dried Terbaik",
    description: "Raja Freeze Dried Food menyediakan makanan sehat freeze dried berkualitas tinggi. Nikmati kelezatan dan nutrisi yang terjaga dengan teknologi freeze drying terdepan.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Raja Freeze Dried Food",
              "description": "Penyedia makanan sehat freeze dried berkualitas tinggi",
              "url": "https://Ddos-spec.github.io", // <-- SUDAH DIBENERIN
              "logo": "https://Ddos-spec.github.io/astronot-food-logo.avif", // <-- SUDAH DIBENERIN
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-xxx-xxxx-xxxx",
                "contactType": "customer service"
              }
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