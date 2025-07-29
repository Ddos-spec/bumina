"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo & Nama Homestay */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-800">
              Bumina EENK
            </span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tombol CTA (Call to Action) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Booking Sekarang
            </a>
          </div>

          {/* Tombol Menu Mobile */}
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

        {/* Navigasi Mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-600 hover:text-green-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 text-center"
              >
                Booking Sekarang
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;