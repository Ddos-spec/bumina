"use client";

import Image from "next/image";

const FloatingWidgets = () => {
  const widgets = [
    {
      name: "WhatsApp",
      icon: "/whatsapp.svg",
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20dengan%20produk%20Anda",
    },
    {
      name: "Shopee",
      icon: "/shopee.svg",
      color: "bg-orange-500 hover:bg-orange-600",
      link: "https://shopee.co.id/rajafreezdriedfood",
    },
    {
      name: "Tokopedia",
      icon: "/tokped.svg",
      color: "bg-green-600 hover:bg-green-700",
      link: "https://tokopedia.com/rajafreezdriedfood",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Langsung dijejerin ke samping pake flex dan space-x */}
      <div className="flex items-center space-x-4">
        {widgets.map((widget) => (
          <a
            key={widget.name}
            href={widget.link}
            target="_blank"
            rel="noopener noreferrer"
            // Tombol digedein jadi w-16 h-16
            className={`flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transition-all duration-200 transform hover:scale-110 ${widget.color}`}
            title={`Hubungi kami di ${widget.name}`}
          >
            <Image
              src={widget.icon}
              alt={`${widget.name} Icon`}
              // Ikon di dalemnya juga digedein jadi 32x32
              width={32}
              height={32}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingWidgets;