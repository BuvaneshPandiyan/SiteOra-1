import React, { useState, useEffect } from 'react';

// Navbar component now accepts 'onNavigate' prop from App.js
function Navbar({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to navigate to the home page and then scroll to a specific section.
  // This is crucial when navigating from the Privacy Policy page back to the home page sections.
  const navigateAndScroll = (sectionId) => {
    // First, navigate to the 'home' page state in App.js
    onNavigate('home');
    // Use a small timeout to allow React to render the 'home' page components
    // before attempting to scroll to an element that might not be in the DOM yet.
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Adjust for fixed navbar height if necessary, otherwise remove '- 80'
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }, 100); // 100ms timeout should be sufficient, adjust if needed
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo/Brand - Clicking this should always go to the home page */}
            <button onClick={() => onNavigate('home')} className="flex items-center focus:outline-none">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">SO</div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SiteOra</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Home link - directly navigates to home page */}
              <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">Home</button>
              {/* Other links use navigateAndScroll to go to home and then scroll */}
              <button onClick={() => navigateAndScroll('services-section')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">Services</button>
              <button onClick={() => navigateAndScroll('portfolio')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">Portfolio</button>
              <button onClick={() => navigateAndScroll('pricing')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">Pricing</button>
              <button onClick={() => navigateAndScroll('contact')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">Contact</button>
              <button onClick={() => navigateAndScroll('about')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">About</button>
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
        {/* Mobile Home link - directly navigates to home page */}
        <button onClick={() => onNavigate('home')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">Home</button>
        {/* Other mobile links use navigateAndScroll */}
        <button onClick={() => navigateAndScroll('services-section')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">Services</button>
        <button onClick={() => navigateAndScroll('portfolio')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">Portfolio</button>
        <button onClick={() => navigateAndScroll('pricing')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">Pricing</button>
        <button onClick={() => navigateAndScroll('contact')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">Contact</button>
        <button onClick={() => navigateAndScroll('about')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left">About Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
