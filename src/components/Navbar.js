import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">SO</div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SiteOra</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
              <a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a> {/* Changed #aboutus to #about */}
            </div>
          </div>
          <div className="md:hidden">
            <button id="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg rounded-lg mx-4 mt-2 py-2`}>
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Home</a>
        <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Services</a>
        <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Portfolio</a>
        <a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Pricing</a>
        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
        <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">About Us</a> {/* Changed #aboutus to #about */}
      </div>
    </nav>
  );
}

export default Navbar;
