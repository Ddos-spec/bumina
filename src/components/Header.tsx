"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// HAPUS basePath
// const basePath = process.env.NODE_ENV === 'production' ? '/bumina' : '';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo - Diganti jadi gambar */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12">
                {/* HAPUS basePath dari sini */}
                <Image src="/bumina/favicon.avif" alt="Logo Astronot Food" layout="fill" objectFit="contain" unoptimized />
            </div>
            <span className="text-xl font-bold text-orange-600 hidden sm:block">
              Freeze Dried Indonesia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5" }`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isMenuOpen ? "opacity-0" : "opacity-100" }`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5" }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors duration-200 text-center"
              >
                Hubungi Kami
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;