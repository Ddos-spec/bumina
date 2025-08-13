import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({ subsets: ["latin"] });

// The root metadata is now minimal, as page-specific metadata will be generated on each page.
export const metadata: Metadata = {
  title: "Homestay Bumina EENK - Villa & Penginapan Terbaik di Pangalengan",
  description: "Nikmati pengalaman menginap tak terlupakan di Homestay Bumina EENK, villa sejuk di tengah kebun teh Pangalengan. Fasilitas lengkap dengan perapian hangat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head />
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}