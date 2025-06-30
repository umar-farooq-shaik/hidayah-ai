
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🕌</span>
              <span className="font-cairo font-bold text-xl">Hidayah AI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted source for authentic Islamic answers from the Quran and Hadith.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
              <Link to="/ask" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Ask Question
              </Link>
              <Link to="/bookmarks" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Bookmarks
              </Link>
              <Link to="/sources" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Sources
              </Link>
            </div>
          </div>

          {/* Legal and Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Contact
              </Link>
              <a href="#" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Disclaimer
              </a>
              <a href="#" className="block text-gray-300 hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>for the Ummah</span>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-secondary transition-colors"
              title="Open Source on GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
