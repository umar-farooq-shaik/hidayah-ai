
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bookmark, Globe, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('English');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🕌</span>
            <span className="font-cairo font-bold text-xl text-slate group-hover:text-primary transition-colors">
              Hidayah AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/ask"
              className="btn-secondary text-sm hover:scale-105 transform transition-all"
            >
              Ask a Question
            </Link>
            
            <Link
              to="/bookmarks"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/bookmarks') ? 'text-primary bg-accent' : 'text-slate hover:text-primary'
              }`}
            >
              <Bookmark size={18} />
              <span>Bookmarks</span>
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>English</option>
                <option>Arabic</option>
                <option>Urdu</option>
              </select>
              <Globe size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                to="/ask"
                className="btn-secondary text-center"
                onClick={toggleMenu}
              >
                Ask a Question
              </Link>
              
              <Link
                to="/bookmarks"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={toggleMenu}
              >
                <Bookmark size={18} />
                <span>Bookmarks</span>
              </Link>

              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-gray-600">Language:</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-gray-200 rounded px-3 py-1 text-sm"
                >
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Urdu</option>
                </select>
              </div>

              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
