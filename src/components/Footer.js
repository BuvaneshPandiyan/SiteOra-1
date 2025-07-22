import React from 'react';
import 'animate.css'; // Ensure animate.css is imported

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 rounded-t-3xl shadow-2xl overflow-hidden"> {/* Added gradient, increased padding, rounded top, shadow, and overflow-hidden for animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12"> {/* Maintained 4 columns as per your latest input, increased gap */}
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-2s"> {/* Added animation */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">SO</div> {/* Larger, more prominent logo with hover transformation */}
              <span className="ml-4 text-2xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">SiteOra</span> {/* Gradient text for logo */}
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">Crafting digital experiences that inspire, engage, and convert.</p> {/* Lighter text, better line height */}
          </div>

          {/* Services Links */}
          <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-4s"> {/* Added animation */}
            <h3 className="text-xl font-bold mb-5 text-indigo-200">Services</h3> {/* Stronger heading, lighter color */}
            <ul className="space-y-3"> {/* Increased space between list items */}
              <li><a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-code mr-2 text-indigo-400"></i>Web Development</a></li> {/* Added icon and hover transformation */}
              <li><a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-shopping-cart mr-2 text-indigo-400"></i>E-Commerce</a></li> {/* Added icon and hover transformation */}
              <li><a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-paint-brush mr-2 text-indigo-400"></i>UI/UX Design</a></li> {/* Added icon and hover transformation */}
              <li><a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-chart-line mr-2 text-indigo-400"></i>SEO & Marketing</a></li> {/* Added icon and hover transformation */}
              <li><a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-mobile-alt mr-2 text-indigo-400"></i>Mobile Apps</a></li> {/* Added icon and hover transformation */}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-6s"> {/* Added animation */}
            <h3 className="text-xl font-bold mb-5 text-purple-200">Company</h3> {/* Stronger heading, lighter color */}
            <ul className="space-y-3"> {/* Increased space between list items */}
              <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-info-circle mr-2 text-purple-400"></i>About Us</a></li> {/* Added icon and hover transformation */}
              <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-briefcase mr-2 text-purple-400"></i>Portfolio</a></li> {/* Added icon and hover transformation */}
              <li><a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-quote-right mr-2 text-purple-400"></i>Testimonials</a></li> {/* Added icon and hover transformation */}
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-briefcase mr-2 text-purple-400"></i>Careers</a></li> {/* Added icon and hover transformation */}
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center md:justify-start transform hover:translate-x-1 hover:text-white"><i className="fas fa-blog mr-2 text-purple-400"></i>Blog</a></li> {/* Added icon and hover transformation */}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-0-7s"> {/* Added animation */}
            <h3 className="text-xl font-bold mb-5 text-green-200">Newsletter</h3> {/* Stronger heading, new color */}
            <p className="text-gray-300 leading-relaxed mb-6">Subscribe to our newsletter for the latest updates and insights.</p> {/* Lighter text, better line height, adjusted margin */}
            <form className="flex w-full max-w-sm mx-auto md:mx-0"> {/* Added width constraints and centering for mobile */}
              <input type="email" placeholder="Your email" className="px-4 py-3 rounded-l-lg focus:outline-none text-gray-900 w-full border border-indigo-400 focus:border-purple-500" /> {/* Increased padding, added border styles */}
              <button type="submit" className="bg-gradient-to-br from-indigo-500 to-purple-600 px-5 py-3 rounded-r-lg text-white font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"> {/* Applied gradient, increased padding, added shadow, hover effects */}
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 animate__animated animate__fadeInUp animate__delay-0-9s"> {/* Lighter border, increased top margin, added animation */}
          <p className="mb-4 md:mb-0 text-sm">© {new Date().getFullYear()} SiteOra. All rights reserved.</p> {/* Dynamic year, smaller text */}
          <div className="flex space-x-6 text-sm"> {/* Smaller text for legal links */}
            <a href="#" className="hover:text-white transition-colors duration-300 transform hover:scale-105">Privacy Policy</a> {/* Added hover transformation */}
            <a href="#" className="hover:text-white transition-colors duration-300 transform hover:scale-105">Terms of Service</a> {/* Added hover transformation */}
            <a href="#" className="hover:text-white transition-colors duration-300 transform hover:scale-105">Sitemap</a> {/* Added hover transformation */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
