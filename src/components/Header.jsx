import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button' // Perbaiki path import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Fasilitas', href: '/#features' },
    { name: 'Testimoni', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleScrollLink = (e, href) => {
    // Hanya lakukan scroll jika kita di halaman utama
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Untuk navigasi dari halaman lain ke section di home, akan ditangani oleh HomePage
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-green-100 shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
             <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center" aria-hidden="true">
              <div className="text-green-800 font-bold text-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Homestay Bumina Eenk</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={(e) => handleScrollLink(e, link.href)} className="text-gray-700 hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link to="/#kontak" onClick={(e) => handleScrollLink(e, '/#kontak')}>Kontak</Link>
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden mt-4 pt-4 border-t border-green-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={(e) => handleScrollLink(e, link.href)} className="text-gray-700 hover:text-blue-600 py-2">
                  {link.name}
                </Link>
              ))}
              <Button asChild>
                <Link to="/#kontak" onClick={(e) => handleScrollLink(e, '/#kontak')}>Kontak</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header