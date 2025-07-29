"use client";

import { useState } from "react";

// Komponen Ikon WhatsApp format SVG
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-8 h-8 text-white"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 439.6c-38.2 0-73.9-14.9-100.2-41.2l-7.1-4.2-74.9 19.6 19.9-73.1-4.6-7.4C78.8 301.1 70 263.3 70 223.9c0-101.6 82.6-184.2 184.2-184.2 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.6-82.6 184.2-186.2 184.2zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);


const FloatingWidgets = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const widgets = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20dengan%20produk%20Anda",
    },
    {
      name: "Shopee",
      icon: <span className="font-bold text-2xl">S</span>, // Ganti pake ikon Shopee kalo mau
      color: "bg-orange-500 hover:bg-orange-600",
      link: "https://shopee.co.id/rajafreezdriedfood",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {widgets.map((widget, index) => (
          <div
            key={widget.name}
            className={`transform transition-all duration-300 ease-in-out ${
              isExpanded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-95 pointer-events-none"
            }`}
            style={{
              transitionDelay: isExpanded ? `${index * 100}ms` : "0ms",
            }}
          >
            <a
              href={widget.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all duration-200 transform hover:scale-110 ${widget.color}`}
              title={`Hubungi kami di ${widget.name}`}
            >
              {widget.icon}
            </a>
          </div>
        ))}

        {/* Tombol utama sekarang pake ikon WA dan warna hijau */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
          title="Hubungi Kami"
        >
          <span
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-45" : "rotate-0"
            }`}
          >
            {isExpanded ? <span className="text-2xl">✕</span> : <WhatsAppIcon />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingWidgets;