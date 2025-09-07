import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-maroon to-golden rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PL</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Pure Land Hospitality Pvt. Ltd.</h3>
                <p className="text-sm text-gray-300">Spiritual Wellness Retreat</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A tranquil sanctuary offering spiritual, wellness, and cultural experiences in the heart of Nepal. 
              Discover peace, mindfulness, and authentic hospitality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-golden cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-golden cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-golden cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/booking" className="block text-gray-300 hover:text-white transition-colors">Book Now</Link>
              <Link to="/investment" className="block text-gray-300 hover:text-white transition-colors">Investment</Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-golden mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Retreat:</p>
                  <p>Chanlakhel, Dakshinkali Municipality</p>
                  <p>Ward No. 1, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-golden" />
                <div className="text-sm text-gray-300">
                  <p>+977 9766883351</p>
                  <p>+977 9767222801</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-golden" />
                <span className="text-sm text-gray-300">info@purelandhospitality.com.np</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pure Land Hospitality Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;