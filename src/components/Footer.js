import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer({ onOpenHiringModal }) {
  const [isLogoEnlarged, setIsLogoEnlarged] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleLogoEnlarged = (e) => {
    e.stopPropagation();
    setIsLogoEnlarged(!isLogoEnlarged);
  };

  return (
    <>
      <footer className="relative bg-gray-900 text-white pt-32 pb-12 overflow-hidden">
        {/* --- SVG Wave Divider --- */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-1px)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 md:h-32">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-gray-900"></path>
          </svg>
        </div>

        {/* --- Animated Constellation Background --- */}
        <div className="absolute inset-0 z-0">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Link to="/" className="flex items-center mb-4 group cursor-pointer">
                <img
                  src="/favicon.png"
                  alt="SiteOra Logo"
                  className="w-14 h-14 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleLogoEnlarged(e); }}
                />
                <span className="ml-4 text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-glow">
                  SiteOra
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Crafting digital experiences that inspire, engage, and convert.
              </p>
            </div>

            {/* --- UPGRADED: Quick Links Section with New Hover Style --- */}
            <div className="text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-6 text-indigo-300 relative pb-2">
                Quick Links
                <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-indigo-400 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li><Link to="/" className="footer-link"><i className="fas fa-home mr-3 text-indigo-400"></i>Home</Link></li>
                <li><Link to="/services" className="footer-link"><i className="fas fa-cogs mr-3 text-indigo-400"></i>Services</Link></li>
                <li><Link to="/portfolio" className="footer-link"><i className="fas fa-briefcase mr-3 text-indigo-400"></i>Portfolio</Link></li>
                <li><Link to="/about" className="footer-link"><i className="fas fa-info-circle mr-3 text-indigo-400"></i>About Us</Link></li>
                <li><Link to="/contact" className="footer-link"><i className="fas fa-paper-plane mr-3 text-indigo-400"></i>Contact</Link></li>
                <li><button onClick={onOpenHiringModal} className="footer-link w-full text-left"><i className="fas fa-user-plus mr-3 text-indigo-400"></i>Careers</button></li>
              </ul>
            </div>

            <div className="text-center md:text-left animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-6 text-purple-300 relative pb-2">
                Connect With Us
                <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-purple-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4 mb-8">
                <li><a href="tel:+917338816479" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-phone-alt mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>+91 7338816479</a></li>
                <li><a href="mailto:siteorawebsolutions@gmail.com" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-envelope mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>siteorawebsolutions@gmail.com</a></li>
                <li><a href="https://maps.app.goo.gl/YourMapLink" target="_blank" rel="noopener noreferrer" className="group text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"><i className="fas fa-map-marker-alt mr-3 text-purple-400 group-hover:scale-110 transition-transform"></i>Chennai, Tamil Nadu</a></li>
              </ul>
              {/* --- UPGRADED: Social Icons with Enhanced Hover --- */}
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://instagram.com/siteoraofficial" target="_blank" rel="noopener noreferrer" className="social-icon text-gray-400"><i className="fab fa-instagram text-2xl"></i></a>
                <a href="https://wa.me/917338816479" target="_blank" rel="noopener noreferrer" className="social-icon text-gray-400"><i className="fab fa-whatsapp text-2xl"></i></a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700/50 mt-16 pt-8 flex flex-col items-center text-gray-500 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                <p className="mb-4 sm:mb-0 text-sm">© {new Date().getFullYear()} SiteOra. All Rights Reserved.</p>
                <div className="flex space-x-6 text-sm">
                  <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300 focus:outline-none">
                     Privacy Policy
                  </Link>
                </div>
            </div>
            <div className="mt-6">
                 <a 
                    href="https://www.instagram.com/buvaneshwarx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-400 transition-colors hover:text-white animate-auto-glow"
                >
                    Designed & developed by Buvaneshwaran
                </a>
            </div>
          </div>
        </div>
      </footer>

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
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
       <style jsx>{`
        @keyframes move-twinkle-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        .stars, .stars2, .stars3 {
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            width:100%;
            height:100%;
            display:block;
            background:transparent url('https://www.script-tutorials.com/demos/360/images/stars.png') repeat top center;
            z-index:0;
            animation:move-twinkle-back 200s linear infinite;
        }
        .stars2 {
            background-image:url('https://www.script-tutorials.com/demos/360/images/twinkling.png');
            animation-duration:100s;
        }
        .stars3 {
            background-image:url('https://www.script-tutorials.com/demos/360/images/clouds.png');
            animation-duration:150s;
            opacity: 0.3;
        }

        @keyframes auto-glow {
            0%, 100% { text-shadow: 0 0 8px rgba(196, 181, 253, 0.4); }
            50% { text-shadow: 0 0 20px rgba(196, 181, 253, 0.8), 0 0 30px rgba(196, 181, 253, 0.6); }
        }
        .animate-auto-glow {
            animation: auto-glow 4s infinite ease-in-out;
        }

        /* --- NEW: Cool link hover effect --- */
        .footer-link {
            position: relative;
            display: flex;
            align-items: center;
            padding: 4px 8px;
            border-radius: 6px;
            overflow: hidden;
            z-index: 1;
            color: #D1D5DB; /* text-gray-300 */
            transition: color 0.3s ease-in-out;
        }
        .footer-link:hover {
            color: #FFF; /* text-white */
        }
        .footer-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(139, 92, 246, 0.15);
            transform: translateX(-101%);
            transition: transform 0.3s ease-in-out;
            z-index: -1;
            border-radius: 6px;
        }
        .footer-link:hover::before {
            transform: translateX(0);
        }

        /* --- NEW: Social icon hover effect --- */
        .social-icon {
            transition: all 0.3s ease-out;
        }
        .social-icon:hover {
            transform: scale(1.25) translateY(-2px);
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(167, 139, 250, 0.5);
        }
      `}</style>
    </>
  );
}

export default Footer;

