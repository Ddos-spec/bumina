// src/components/SocialWidget.jsx

import { Instagram, Music } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // <-- Import ikon baru

const SocialWidget = () => {
  // Data untuk semua link
  const socials = [
    {
      name: 'WhatsApp',
      // --- IKON SUDAH DIGANTI ---
      icon: <FaWhatsapp className="w-8 h-8" />, 
      bgColor: 'bg-green-500 hover:bg-green-600',
      url: `https://wa.me/6285219460779?text=${encodeURIComponent("Halo, saya tertarik dengan Homestay Bumina Eenk.")}`
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-7 h-7" />,
      bgColor: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90', // <-- Warnanya dibikin lebih keren
      url: 'https://www.instagram.com/homestay_buminaeenk/'
    },
    {
      name: 'TikTok',
      icon: <Music className="w-7 h-7" />,
      bgColor: 'bg-black hover:bg-gray-800',
      url: 'https://www.tiktok.com/@homestay_bandung'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${social.bgColor}`}
          aria-label={`Chat di ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialWidget;