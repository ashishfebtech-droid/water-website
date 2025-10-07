import React, { useState, useEffect } from 'react';
import { 
  FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, 
  FaHome, FaInfoCircle, FaTools, FaPhoneAlt 
} from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaInfoCircle />, href: '#about' },
    { name: 'Services', icon: <FaTools />, href: '#services' },
    { name: 'Contact', icon: <FaPhoneAlt />, href: '#contact' }
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-blue-700/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-blue-600/50 backdrop-blur-sm py-5'
        } ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl">💧</div>
            <div className="text-white">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide">WaterSave</h1>
              <p className="text-xs text-blue-100 hidden sm:block">Pure & Fresh Water</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons (desktop) */}
          <div className="hidden md:flex gap-4 text-white text-xl">
            <a 
              href="#" 
              className="hover:text-blue-200 hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-200 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-200 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white z-50 transform transition-transform duration-300 flex flex-col shadow-2xl md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white flex justify-between items-center p-6 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <h2 className="text-xl font-bold">WaterSave</h2>
          </div>
          <button 
            className="text-2xl hover:rotate-90 transition-transform duration-300" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 text-gray-700 font-medium"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600 text-sm mb-3 text-center font-medium">
            💧 Save Water, Save Earth 🌍
          </p>
          <div className="flex justify-center gap-6 text-blue-700 text-2xl">
            <a 
              href="#" 
              className="hover:text-blue-500 hover:scale-125 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              className="hover:text-pink-500 hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </aside>

      
    </>
  );
}

export default Header;