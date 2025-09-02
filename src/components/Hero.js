import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Custom hook to control navbar visibility.
 * Shows the navbar only when the user is at the very top of the page.
 */
const useScrollDirection = (isMobileMenuOpen) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return visible;
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: 'home', title: 'Home', path: '/', icon: 'fas fa-home' },
    { id: 'services', title: 'Services', path: '/services', icon: 'fas fa-cogs' },
    { id: 'portfolio', title: 'Portfolio', path: '/portfolio', icon: 'fas fa-briefcase' },
    { id: 'pricing', title: 'Pricing', path: '/pricing', icon: 'fas fa-tags' },
    { id: 'about', title: 'About', path: '/about', icon: 'fas fa-user-friends' },
    { id: 'contact', title: 'Contact', path: '/contact', icon: 'fas fa-paper-plane' },
  ];

  const isVisible = useScrollDirection(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }

  const toggleEnlarged = (e) => {
    e.stopPropagation();
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      {/*
        FIX: The entire fixed header is now positioned 1rem from the top using `top-4`.
        This moves the whole component down, showing the Hero component's carousel
        in the space above instead of a white bar.
      */}
      <header
        className={`fixed w-full top-4 left-0 z-50 transition-transform duration-300 ease-in-out ${
          (isVisible && !isMobileMenuOpen) ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* The inner nav container NO LONGER has a margin-top */}
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 flex justify-between items-center h-20 px-6">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2 focus:outline-none group">
              <img
                src="/favicon.png"
                alt="Site Logo"
                className="w-11 h-11 rounded-full cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                onClick={toggleEnlarged}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-80">
                SiteOra
              </span>
            </Link>

            <div className="flex items-center">
              <div className="hidden md:flex items-center relative p-1 bg-gray-100/80 rounded-full border border-gray-200/90">
                {navLinks.map(link => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                      location.pathname === link.path
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-500 hover:text-indigo-600'
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="md:hidden ml-4">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-gray-800 focus:outline-none bg-white/70 border border-gray-900/10 hover:bg-gray-100 transition-colors"
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-current rounded-full"></span>
                    <span className="block w-6 h-0.5 bg-current rounded-full"></span>
                    <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* --- Mobile Menu and Image Modal (No changes needed here) --- */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Menu</h2>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                    location.pathname === link.path ? 'bg-indigo-50 text-indigo-700' : 'text-gray-800 hover:bg-gray-100'
                  } ${isMobileMenuOpen ? 'animate-slide-in-right' : ''}`}
                  style={{ animationDelay: `${isMobileMenuOpen ? index * 50 : 0}ms` }}
                >
                  <i className={`${link.icon} w-6 text-center text-xl ${location.pathname === link.path ? 'text-indigo-600' : 'text-gray-500'}`}></i>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isEnlarged && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4 animate-fade-in"
          onClick={toggleEnlarged}
        >
          <img
            src="/favicon.png"
            alt="Enlarged Site Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        /* Your existing keyframes CSS here */
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slide-in-right { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.4s ease-out forwards; opacity: 0; }
      `}</style>
    </>
  );
}

export default Navbar;
