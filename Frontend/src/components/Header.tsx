import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SharePurchaseModal from './SharePurchaseModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Investment', href: '/investment' },
    { name: 'Careers', href: '/careers' },
    { name: 'Booking', href: '/booking' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-maroon text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+977 9766883351 / +977 9767222801</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={16} />
              <span>info@purelandhospitality.com.np</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            Your Sanctuary for Peace & Wellness
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-maroon to-navy rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">PL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">Pure Land Hospitality</h1>
              <p className="text-xs text-gray-600">Spiritual Wellness Retreat</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-maroon border-b-2 border-maroon pb-1'
                    : 'text-gray-700 hover:text-maroon'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Share Purchase Button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="bg-gradient-to-r from-maroon to-navy text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <TrendingUp size={16} />
              <span>Share Purchase</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-maroon transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-maroon'
                    : 'text-gray-700 hover:text-maroon'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Share Purchase Button */}
            <button
              onClick={() => {
                setIsShareModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-maroon to-navy text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-red-800 hover:to-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <TrendingUp size={16} />
              <span>Share Purchase</span>
            </button>
          </motion.div>
        )}
      </nav>
      
      {/* Share Purchase Modal */}
      <SharePurchaseModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </header>
  );
};

export default Header;