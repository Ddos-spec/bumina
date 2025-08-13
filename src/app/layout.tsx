import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";
import { generateMetadataObject } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

// --- METADATA DASAR UNTUK SELURUH SITUS ---
export const metadata: Metadata = generateMetadataObject({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}