import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="backToTop"
      className={`fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  );
}

export default BackToTopButton;
