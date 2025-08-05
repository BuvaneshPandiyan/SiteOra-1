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
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 rounded-t-3xl shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-2s">
              <div className="flex items-center mb-4">
                {/* Replaced the div with the image, added onClick handler */}
                <img
                  src="/favicon.png"
                  alt="Site Logo"
                  className="w-12 h-12 rounded-full cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onClick={toggleLogoEnlarged}
                />
                <span className="ml-4 text-2xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">SiteOra</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-xs">Crafting digital experiences that inspire, engage, and convert.</p>
            </div>

            {/* Services Links */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-4s">
              <h3 className="text-xl font-bold mb-5 text-indigo-200">Services</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigateAndScroll('services-section')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-code mr-2 text-indigo-400"></i>Web Development</button></li>
                <li><button onClick={() => navigateAndScroll('services-section')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-shopping-cart mr-2 text-indigo-400"></i>E-Commerce</button></li>
                <li><button onClick={() => navigateAndScroll('services-section')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-paint-brush mr-2 text-indigo-400"></i>UI/UX Design</button></li>
                <li><button onClick={() => navigateAndScroll('services-section')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-chart-line mr-2 text-indigo-400"></i>SEO & Marketing</button></li>
                <li><button onClick={() => navigateAndScroll('services-section')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-mobile-alt mr-2 text-indigo-400"></i>Mobile Apps</button></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-6s">
              <h3 className="text-xl font-bold mb-5 text-purple-200">Company</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigateAndScroll('about')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-info-circle mr-2 text-purple-400"></i>About Us</button></li>
                <li><button onClick={() => navigateAndScroll('portfolio')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-briefcase mr-2 text-purple-400"></i>Portfolio</button></li>
                <li><button onClick={() => navigateAndScroll('testimonials')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-quote-right mr-2 text-purple-400"></i>Testimonials</button></li>
                <li><button onClick={onOpenHiringModal} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white focus:outline-none"><i className="fas fa-briefcase mr-2 text-purple-400"></i>Careers</button></li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-7s">
              <h3 className="text-xl font-bold mb-5 text-green-200">Connect With Us</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="tel:7338816479" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white">
                    <i className="fas fa-phone-alt mr-2 text-green-400"></i>+91 7338816479
                  </a>
                </li>
                <li>
                <a href="siteorawebsolutions@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white">
                  <i className="fas fa-envelope mr-2 text-green-400"></i>siteorawebsolutions@gmail.com
                </a>
              </li>
                <li>
                  <a href="https://maps.app.goo.gl/nfJnVNFjRRyaQRFMA?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white">
                    <i className="fas fa-map-marker-alt mr-2 text-green-400"></i>Chennai, Tamil Nadu, India
                  </a>
                </li>
              </ul>
              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-6 mt-4">
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 transform hover:scale-125">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition-colors duration-300 transform hover:scale-125">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-300 transform hover:scale-125">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 animate__animated animate__fadeInUp animate__delay-0-9s">
            <p className="mb-4 md:mb-0 text-sm">© {new Date().getFullYear()} SiteOra. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => onNavigate('privacy-policy')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Enlarged logo overlay, conditionally rendered */}
      {isLogoEnlarged && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 cursor-pointer p-4"
          onClick={toggleLogoEnlarged}
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

export default Footer;

