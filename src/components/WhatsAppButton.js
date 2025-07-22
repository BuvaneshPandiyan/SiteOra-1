import React, { useState, useEffect } from 'react';

function WhatsAppButton() { // Renamed the function
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    // Show button if scrolled more than 300px down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to open WhatsApp chat
  const openWhatsAppChat = () => {
    const phoneNumber = '7338816479'; // The WhatsApp number
    // Construct the WhatsApp URL for direct chat
    // Using 'https://wa.me/' is the recommended way for direct chat links
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <button
      id="whatsappButton" // ID remains the same
      className={`fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} // Styling remains the same
      onClick={openWhatsAppChat} // onClick remains the same
      aria-label="Chat on WhatsApp" // Accessibility label remains the same
    >
      <i className="fab fa-whatsapp text-3xl"></i> {/* WhatsApp icon remains the same */}
    </button>
  );
}

export default WhatsAppButton; // Export the new function name
