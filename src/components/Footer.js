import React, { useState } from 'react';
import 'animate.css'; // Ensure animate.css is imported

function Footer({ onNavigate, currentPage, onOpenHiringModal }) {
  // State to manage the enlarged logo view
  const [isLogoEnlarged, setIsLogoEnlarged] = useState(false);

  // Function to toggle the enlarged state
  const toggleLogoEnlarged = (e) => {
    e.stopPropagation(); // Prevents other click events from firing
    setIsLogoEnlarged(!isLogoEnlarged);
  };

  // Helper function to navigate to home and then scroll
  const navigateAndScroll = (sectionId) => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    // Timeout ensures the home page is rendered before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 72, // Adjusted for navbar height
          behavior: 'smooth',
        });
      }
    }, currentPage !== 'home' ? 100 : 0);
  };

  return (
    <>
      <footer className="relative bg-gray-900 text-white py-20 rounded-t-3xl shadow-inner overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4 group cursor-pointer" onClick={() => onNavigate('home')}>
                <img
                  src="/favicon.png"
                  alt="SiteOra Logo"
                  className="w-14 h-14 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110"
                  onClick={(e) => { e.stopPropagation(); toggleLogoEnlarged(e); }} // Allow enlarging even within the group
                />
                <span className="ml-4 text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-glow">
                  SiteOra
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Crafting digital experiences that inspire, engage, and convert.
              </p>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-6 text-indigo-300 relative pb-2">
                Company
                <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-indigo-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li><button onClick={() => navigateAndScroll('about')} className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start focus:outline-none"><i className="fas fa-info-circle mr-3 text-indigo-400 group-hover:scale-110 transition-transform"></i>About Us</button></li>
                <li><button onClick={() => navigateAndScroll('portfolio')} className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start focus:outline-none"><i className="fas fa-briefcase mr-3 text-indigo-400 group-hover:scale-110 transition-transform"></i>Portfolio</button></li>
                <li><button onClick={() => navigateAndScroll('testimonials')} className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start focus:outline-none"><i className="fas fa-quote-right mr-3 text-indigo-400 group-hover:scale-110 transition-transform"></i>Testimonials</button></li>
                <li><button onClick={onOpenHiringModal} className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start focus:outline-none"><i className="fas fa-user-plus mr-3 text-indigo-400 group-hover:scale-110 transition-transform"></i>Careers</button></li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-6 text-purple-300 relative pb-2">
                Connect With Us
                <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-purple-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4 mb-8">
                <li><a href="tel:+917338816479" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-phone-alt mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>+91 7338816479</a></li>
                <li><a href="mailto:siteorawebsolutions@gmail.com" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-envelope mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>siteorawebsolutions@gmail.com</a></li>
                <li><a href="https://www.google.com/maps/search/?api=1&query=Chennai,Tamil+Nadu,India" target="_blank" rel="noopener noreferrer" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-map-marker-alt mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>Chennai, Tamil Nadu</a></li>
              </ul>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"><i className="fab fa-linkedin-in text-2xl"></i></a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"><i className="fab fa-twitter text-2xl"></i></a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"><i className="fab fa-instagram text-2xl"></i></a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"><i className="fab fa-facebook-f text-2xl"></i></a>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
            <p className="mb-4 md:mb-0 text-sm">© {new Date().getFullYear()} SiteOra. All Rights Reserved.</p>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors duration-300 focus:outline-none">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Enlarged logo overlay, conditionally rendered with animation */}
      {isLogoEnlarged && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 cursor-pointer p-4 animate__animated animate__fadeIn"
          onClick={toggleLogoEnlarged}
        >
          <div className="relative animate__animated animate__zoomIn animate__faster">
            <img
              src="/favicon.png"
              alt="Enlarged SiteOra Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full shadow-2xl shadow-indigo-500/50"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking the image
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
