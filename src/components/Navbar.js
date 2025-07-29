import React, { useState, useEffect, useRef } from 'react';

// Navbar component now accepts 'onNavigate' and 'currentPage' props from App.js
function Navbar({ onNavigate, currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State for scroll animation

  // Ref for the mobile menu container itself
  const mobileMenuRef = useRef(null);
  // Ref for the menu toggle button
  const menuToggleButtonRef = useRef(null);

  // Helper function to navigate to the home page (if not already there)
  // and then scroll to a specific section.
  const navigateAndScroll = (sectionId) => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }

    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Adjust for fixed navbar height. h-10 is 40px.
        window.scrollTo({
          top: targetElement.offsetTop - 40, // Adjusted from 48 to 40
          behavior: 'smooth',
        });
      }
    }, currentPage !== 'home' ? 100 : 0);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Effect to handle scroll animation for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the mobile menu is open AND the click is NOT on the mobile menu itself
      // AND the click is NOT on the menu toggle button, then close the menu.
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuToggleButtonRef.current &&
        !menuToggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener when the mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener when component unmounts or mobile menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Re-run effect when isMobileMenuOpen changes

  return (
    <nav className={`fixed w-full z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10 items-center"> {/* Changed h-12 to h-10 */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo/Brand - Clicking this should always go to the home page */}
            <button onClick={() => onNavigate('home')} className="flex items-center focus:outline-none">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-md transform hover:scale-105 transition-transform duration-300">SO</div> {/* Changed w-8 h-8 to w-7 h-7 and text-lg to text-base */}
              <span className="ml-2 text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SiteOra</span> {/* Changed text-lg to text-base and ml-3 to ml-2 */}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6"> {/* Adjusted space-x-8 to space-x-6 */}
              {/* Home link - directly navigates to home page */}
              <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none"> {/* Adjusted px-3 to px-2.5 and py-1.5 to py-1 */}
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              {/* Other links use navigateAndScroll to go to home and then scroll */}
              <button onClick={() => navigateAndScroll('services-section')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none">
                Services
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => navigateAndScroll('portfolio')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none">
                Portfolio
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => navigateAndScroll('pricing')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none">
                Pricing
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => navigateAndScroll('contact')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => navigateAndScroll('about')} className="text-gray-700 hover:text-indigo-600 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 relative group focus:outline-none">
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button id="menu-toggle" ref={menuToggleButtonRef} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  // 'X' icon paths
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12" />
                  </>
                ) : (
                  // Hamburger icon paths
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden bg-white shadow-lg rounded-lg mx-4 mt-2 py-2 overflow-hidden
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {/* Mobile Home link - directly navigates to home page */}
        <button onClick={() => onNavigate('home')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">Home</button>
        {/* Other mobile links use navigateAndScroll */}
        <button onClick={() => navigateAndScroll('services-section')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">Services</button>
        <button onClick={() => navigateAndScroll('portfolio')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">Portfolio</button>
        <button onClick={() => navigateAndScroll('pricing')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">Pricing</button>
        <button onClick={() => navigateAndScroll('contact')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">Contact</button>
        <button onClick={() => navigateAndScroll('about')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left transition-colors duration-300">About Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
