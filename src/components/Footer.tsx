import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Info Perusahaan */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Homestay Bumina EENK
            </h3>
            <p className="text-gray-300 mb-4">
              Penginapan nyaman di tengah sejuknya kebun teh Pangalengan, Bandung. Tempat terbaik untuk liburan keluarga dan rombongan.
            </p>
          </div>

          {/* Link Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Info Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info.bumina@example.com</li>
              <li>Phone: +62 812-3456-7890</li>
              <li>Alamat: Pangalengan, Bandung</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Homestay Bumina EENK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;