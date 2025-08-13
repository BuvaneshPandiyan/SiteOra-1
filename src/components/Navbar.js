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
        let found = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
            found = true;
          }
        });
        // If no section is intersecting, it means we are likely at the top, so 'home' is active.
        if (!found && window.scrollY < window.innerHeight * 0.5) {
            setActiveSection('home');
        }
      },
      {
        rootMargin: '-40% 0px -60% 0px', // Asymmetrical margin to feel more natural on scroll
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
};

/**
 * Custom hook to control navbar visibility based on scroll direction.
 * @returns {boolean} Whether the navbar should be visible.
 */
const useScrollDirection = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMobileMenuOpen) return; // Don't hide navbar if mobile menu is open
      
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
};


// Main Navbar component with upgraded styling and animations
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const navLinks = [
    { id: 'home', title: 'Home', icon: 'fas fa-home' },
    { id: 'services-section', title: 'Services', icon: 'fas fa-cogs' },
    { id: 'portfolio', title: 'Portfolio', icon: 'fas fa-th-large' },
    { id: 'pricing', title: 'Pricing', icon: 'fas fa-dollar-sign' },
    { id: 'contact', title: 'Contact', icon: 'fas fa-envelope' },
    { id: 'about', title: 'About', icon: 'fas fa-info-circle' },
  ];

  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);
  const isVisible = useScrollDirection(isMobileMenuOpen);

  const navigateAndScroll = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80; // Adjusted for navbar height + extra space
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const toggleEnlarged = (e) => {
    e.stopPropagation();
    setIsEnlarged(!isEnlarged);
  };

  const DesktopNavLink = ({ sectionId, title }) => {
    const isActive = activeSection === sectionId;
    return (
      <button
        onClick={() => navigateAndScroll(sectionId)}
        className={`relative px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none ${
          isActive
            ? 'text-indigo-600 bg-indigo-100/80'
            : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-200/50'
        }`}
      >
        {title}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-1.5 h-0.5 bg-indigo-600 rounded-full motion-safe:animate-fade-in"></span>
        )}
      </button>
    );
  };
  
  const MobileNavLink = ({ sectionId, title, icon }) => {
    const isActive = activeSection === sectionId;
    return (
        <button
            onClick={() => navigateAndScroll(sectionId)}
            className={`w-full text-left flex items-center gap-4 px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            <i className={`${icon} w-5 text-center ${isActive ? 'text-indigo-600' : 'text-gray-500'}`}></i>
            <span>{title}</span>
        </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center py-2">
            {/* Left side: Logo and Brand */}
            <button onClick={() => navigateAndScroll('home')} className="flex items-center gap-2 focus:outline-none">
              <img
                src="https://placehold.co/64x64/818cf8/ffffff?text=S"
                alt="Site Logo"
                className="w-10 h-10 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
                onClick={toggleEnlarged}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SiteOra
              </span>
            </button>

            {/* Right side: Desktop Nav and Mobile Button Wrapper */}
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 p-1 bg-gray-100/50 rounded-full border border-gray-200/80">
                {navLinks.map(link => <DesktopNavLink key={link.id} {...link} />)}
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="relative h-6 w-6">
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out shadow-lg border-t border-gray-200 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map(link => <MobileNavLink key={link.id} {...link} />)}
          </div>
        </div>
      </nav>

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
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Navbar;
