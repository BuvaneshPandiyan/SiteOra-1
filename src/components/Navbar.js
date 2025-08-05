import React, { useState, useEffect } from 'react';

// Navbar component with upgraded styling and animations
function Navbar({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  // Function to handle navigation to the home page (scroll to top)
  const handleHomeClick = () => {
    onNavigate('home'); // Ensure the home view is active
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMobileMenuOpen(false); // Close mobile menu if it's open
  };

  // Function to toggle the enlarged logo state
  const toggleEnlarged = (e) => {
    e.stopPropagation();
    setIsEnlarged(!isEnlarged);
  };

  // Helper function for navigation and scrolling to other sections
  const navigateAndScroll = (sectionId) => {
    onNavigate('home'); // Assumes all sections are on the home page
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 72, // Adjusted for navbar height
          behavior: 'smooth',
        });
      }
    }, 100);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Updated handler for mobile links to use the new home click logic
  const handleMobileLinkClick = (sectionId) => {
    if (sectionId === 'home') {
      handleHomeClick(); // Use the new, consolidated function
    } else {
      navigateAndScroll(sectionId);
    }
    // Programmatically remove focus from the clicked button
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left side: Logo and Brand */}
            <div className="flex-shrink-0 flex items-center">
              {/* FIXED: Using handleHomeClick */}
              <button onClick={handleHomeClick} className="flex items-center focus:outline-none">
                <img
                  src="/favicon.png"
                  alt="Site Logo"
                  className="w-12 h-12 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={toggleEnlarged}
                />
                <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SiteOra</span>
              </button>
            </div>

            {/* Right side: Desktop Nav and Mobile Button Wrapper */}
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* FIXED: Using handleHomeClick */}
                  <button onClick={handleHomeClick} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                  <button onClick={() => navigateAndScroll('services-section')} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    Services
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                  <button onClick={() => navigateAndScroll('portfolio')} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    Portfolio
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                  <button onClick={() => navigateAndScroll('pricing')} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                  <button onClick={() => navigateAndScroll('contact')} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    Contact
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                  <button onClick={() => navigateAndScroll('about')} className="relative group text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none hover:text-indigo-600 focus:text-indigo-600">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </button>
                </div>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden ml-4">
                <button
                  id="menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="relative h-6 w-6">
                    <span className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          id="mobile-menu"
        >
          {/* NO CHANGE NEEDED HERE: The fix is in the handleMobileLinkClick function */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
            <button onClick={() => handleMobileLinkClick('home')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">Home</button>
            <button onClick={() => handleMobileLinkClick('services-section')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">Services</button>
            <button onClick={() => handleMobileLinkClick('portfolio')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">Portfolio</button>
            <button onClick={() => handleMobileLinkClick('pricing')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">Pricing</button>
            <button onClick={() => handleMobileLinkClick('contact')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">Contact</button>
            <button onClick={() => handleMobileLinkClick('about')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full text-left">About Us</button>
          </div>
        </div>
      </nav>

      {/* Enlarged logo overlay */}
      {isEnlarged && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 cursor-pointer p-4"
          onClick={toggleEnlarged}
        >
          <img
            src="/favicon.png"
            alt="Enlarged Site Logo"
            className="w-64 h-64 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
