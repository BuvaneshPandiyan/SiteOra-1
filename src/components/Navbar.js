import React, { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track the currently active section based on visibility in the viewport.
 * @param {Array<string>} sectionIds - An array of element IDs to observe.
 * @returns {string} The ID of the currently active section.
 */
const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
};

/**
 * Custom hook to control navbar visibility based on scroll direction.
 * @param {boolean} isMobileMenuOpen - Prevents hiding when the mobile menu is active.
 * @returns {boolean} Whether the navbar should be visible.
 */
const useScrollDirection = (isMobileMenuOpen) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return; // This now works correctly
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]); // The hook now correctly depends on isMobileMenuOpen

  return visible;
};

// Main Navbar component with a complete design overhaul
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);

  const navLinks = [
    { id: 'home', title: 'Home', icon: 'fas fa-home' },
    { id: 'services-section', title: 'Services', icon: 'fas fa-cogs' },
    { id: 'portfolio', title: 'Portfolio', icon: 'fas fa-briefcase' },
    { id: 'pricing', title: 'Pricing', icon: 'fas fa-tags' },
    { id: 'contact', title: 'Contact', icon: 'fas fa-paper-plane' },
    { id: 'about', title: 'About', icon: 'fas fa-user-friends' },
  ];

  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);
  const isVisible = useScrollDirection(isMobileMenuOpen);

  // Effect to update the sliding indicator for the active desktop link
  useEffect(() => {
    const activeLinkEl = document.getElementById(`nav-${activeSection}`);
    if (activeLinkEl && navRef.current) {
      const { offsetLeft, offsetWidth } = activeLinkEl;
      setSliderStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeSection]);

  const navigateAndScroll = (sectionId) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = ''; // Re-enable scrolling
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 100; // Adjusted for navbar height + extra space
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  
  // Toggle mobile menu and body scroll
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const toggleEnlarged = (e) => {
    e.stopPropagation();
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="relative max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 flex justify-between items-center h-20 px-6">
            {/* Left side: Logo and Brand */}
            <button onClick={() => navigateAndScroll('home')} className="flex items-center gap-2 focus:outline-none group">
              <img
                src="https://placehold.co/64x64/818cf8/ffffff?text=S"
                alt="Site Logo"
                className="w-11 h-11 rounded-full cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                onClick={toggleEnlarged}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-80">
                SiteOra
              </span>
            </button>

            {/* Right side: Desktop Nav and Mobile Button Wrapper */}
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div ref={navRef} className="hidden md:flex items-center relative p-1 bg-gray-100/60 rounded-full border border-gray-200/80">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    id={`nav-${link.id}`}
                    onClick={() => navigateAndScroll(link.id)}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                      activeSection === link.id ? 'text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.title}
                  </button>
                ))}
                <div
                  className="absolute h-full bg-indigo-500 rounded-full transition-all duration-500 ease-in-out"
                  style={sliderStyle}
                ></div>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden ml-4">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-gray-800 focus:outline-none bg-white/70 border border-gray-900/10 hover:bg-gray-100 transition-colors"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* New, improved hamburger/X icon */}
                  <div className="relative w-6 h-6">
                    <span className={`absolute block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'}`}></span>
                    <span className={`absolute block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`absolute block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
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
          <div className="p-8 pt-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Menu</h2>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => navigateAndScroll(link.id)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.id ? 'bg-indigo-50 text-indigo-700' : 'text-gray-800 hover:bg-gray-100'
                  } ${isMobileMenuOpen ? 'animate-slide-in-right' : ''}`}
                  style={{ animationDelay: `${isMobileMenuOpen ? index * 50 : 0}ms` }}
                >
                  <i className={`${link.icon} w-6 text-center text-xl ${activeSection === link.id ? 'text-indigo-600' : 'text-gray-500'}`}></i>
                  <span>{link.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Enlarged logo overlay */}
      {isEnlarged && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4 animate-fade-in"
          onClick={toggleEnlarged}
        >
          <img
            src="https://placehold.co/256x256/818cf8/ffffff?text=S"
            alt="Enlarged Site Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-in-right {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out forwards;
        }
        .animate-slide-in-right {
            animation: slide-in-right 0.4s ease-out forwards;
            opacity: 0; /* Start hidden */
        }
      `}</style>
    </>
  );
}

export default Navbar;
