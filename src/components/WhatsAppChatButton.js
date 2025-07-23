import React, { useState, useEffect } from 'react';

function WhatsAppChatButton() {
  // State to control the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // The WhatsApp phone number (without + or 00)
  const phoneNumber = '7338816479';

  // The pre-filled message for the WhatsApp chat
  const message = 'Hey! I\'m exploring options for web development and would love to hear how you can help. Let\'s talk!';

  /**
   * Toggles the visibility state of the button based on scroll position.
   * The button becomes visible when the user scrolls down more than 300 pixels.
   */
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Opens a new WhatsApp chat window with the specified phone number and pre-filled message.
   * The message is URL-encoded to handle special characters correctly.
   */
  const openWhatsAppChat = () => {
    // Encode the message to ensure it's URL-safe
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open the URL in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  // useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <>
      <button
        id="whatsappChatButton"
        // Tailwind CSS classes for styling and responsiveness
        // fixed: Positions the button relative to the viewport
        // bottom-8 right-8: Places it 8 units from the bottom and right edges
        // w-12 h-12: Sets a fixed width and height for the button
        // bg-green-500 hover:bg-green-600: Green background with a darker hover effect
        // rounded-full: Makes the button perfectly circular
        // shadow-lg: Adds a large shadow for depth
        // text-white: Sets the icon color to white
        // flex items-center justify-center: Centers the icon within the button
        // transition-all duration-300: Smooth transition for opacity and transform changes
        // transform hover:scale-110: Scales up the button slightly on hover
        // focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75: Focus styles for accessibility
        // Conditional opacity and visibility based on isVisible state
        className={`fixed bottom-8 right-8 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={openWhatsAppChat}
        aria-label="Chat on WhatsApp" // Accessibility label for screen readers
      >
        {/* Font Awesome WhatsApp icon */}
        <i className="fab fa-whatsapp text-xl"></i>
      </button>

      {/* Font Awesome for the WhatsApp icon - include this in your public/index.html or App.js */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
}

export default WhatsAppChatButton;
