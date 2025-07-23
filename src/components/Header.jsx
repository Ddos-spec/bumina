import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-green-100 shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              About
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              Fasilitas
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              Testimoni
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Kontak
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-green-200 pt-4" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                About
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                Fasilitas
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                Testimoni
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Kontak
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

