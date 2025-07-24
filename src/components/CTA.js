import React, { useEffect, useState } from 'react';

function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false); // New state for modal visibility
  const phoneNumber = '7338816479'; // Your phone number
  const customWhatsAppMessage = "Hello, I'm interested in your services and would like to know more!"; // Custom message for WhatsApp

  // Use an Intersection Observer to trigger animations when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true if it's currently false to avoid re-triggering
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    const ctaSection = document.getElementById('cta-section'); // Give your section an ID
    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => {
      if (ctaSection) {
        observer.unobserve(ctaSection);
      }
    };
  }, [isVisible]); // Depend on isVisible to re-run if its state changes

  // Function to handle opening the call link
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowContactOptions(false); // Close modal after action
  };

  // Function to handle opening the WhatsApp link with a custom message
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(customWhatsAppMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowContactOptions(false); // Close modal after action
  };

  return (
    <>
      {/* Custom styles for the animated background, text glow, button glow, and blob animations */}
      <style>
        {`
        /* Animated Background Gradient */
        @keyframes pulse-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient-bg {
          background: linear-gradient(270deg, #667eea, #764ba2, #ef4444, #f97316); /* Vibrant, multi-color gradient */
          background-size: 400% 400%; /* Allows for movement */
          animation: pulse-gradient 15s ease infinite; /* Slow, continuous animation */
        }

        /* Text Shadow/Glow for Heading */
        .text-glow {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.5);
        }

        /* Button Glow on Hover */
        .button-glow-hover:hover {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 25px rgba(255, 255, 255, 0.4);
        }

        /* Blob Animation for Background Elements */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }

        /* Custom animation delays for blobs (Tailwind doesn't have these by default) */
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }

        /* Modal specific animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-enter {
          animation: fadeIn 0.3s forwards;
        }

        .modal-content-enter {
          animation: slideInUp 0.4s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .modal-exit {
          animation: fadeOut 0.3s forwards;
        }

        .modal-content-exit {
          animation: slideOutDown 0.4s forwards cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideOutDown {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
        }
        `}
      </style>

      <section
        id="cta-section" // ID for Intersection Observer
        className={`py-24 animated-gradient-bg text-white relative overflow-hidden
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-1000 ease-in-out
        `}
      >
        {/* Decorative background "blob" elements */}
        {/* These blobs will animate subtly and blend to create a dynamic background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-1000 delay-500`}></div>
          <div className={`absolute top-1/2 right-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-1000 delay-1000`}></div>
          <div className={`absolute bottom-1/4 left-1/2 w-56 h-56 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-1000 delay-1500`}></div>
        </div>

        {/* Main content, positioned above the blobs with z-index */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className={`text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-glow
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              transition-all duration-1000 ease-out delay-500
            `}
          >
            Ready to <span className="text-yellow-300">Elevate</span> Your Online Presence?
          </h2>
          <p
            className={`text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-12 font-light
              ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
              transition-all duration-1000 ease-out delay-1000
            `}
          >
            Let's create something truly <span className="font-semibold text-white">amazing</span> together. Get in touch for a free consultation and quote.
          </p>
          <button
            onClick={() => setShowContactOptions(true)} // Open the modal
            className={`inline-block px-12 py-5 bg-white text-indigo-700 font-bold rounded-full shadow-2xl
              hover:bg-gray-100 transition-all duration-500 ease-in-out
              transform hover:scale-110 hover:-translate-y-2 button-glow-hover
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
              transition-all duration-1000 ease-out delay-1500
            `}
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* Contact Options Modal */}
      {showContactOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 modal-enter"
             onClick={() => setShowContactOptions(false)}> {/* Close modal on overlay click */}
          <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative modal-content-enter"
               onClick={e => e.stopPropagation()}> {/* Prevent closing when clicking inside modal */}
            <h3 className="text-3xl font-extrabold text-white mb-6">How would you like to connect?</h3>
            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="w-full py-4 px-6 bg-green-500 text-white font-bold rounded-xl shadow-lg
                           hover:bg-green-600 transition-all duration-300 ease-in-out
                           transform hover:scale-105 hover:shadow-xl button-glow-hover"
              >
                <span className="mr-2">📞</span> Call Us
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 px-6 bg-blue-500 text-white font-bold rounded-xl shadow-lg
                           hover:bg-blue-600 transition-all duration-300 ease-in-out
                           transform hover:scale-105 hover:shadow-xl button-glow-hover"
              >
                <span className="mr-2">💬</span> WhatsApp Us
              </button>
            </div>
            <button
              onClick={() => setShowContactOptions(false)}
              className="mt-8 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              No, thanks
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CTA;
