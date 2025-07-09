import React from 'react';
import { Building, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">Mwaura Property Managers</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in real estate. We help you find the perfect property
              and manage your investments with excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">079471233</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">ochiengkevin280320@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/properties" className="block text-gray-300 hover:text-green-500 transition-colors">
                Properties
              </a>
              <a href="/about" className="block text-gray-300 hover:text-green-500 transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-green-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mwaura Property Managers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;