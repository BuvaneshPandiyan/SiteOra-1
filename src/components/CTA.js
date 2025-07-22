import React, { useEffect, useState } from 'react';

function CTA() {
  const [isVisible, setIsVisible] = useState(false);

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
        `}
      </style>

      <section
        id="cta-section" // ID for Intersection Observer
        className={`py-24 animated-gradient-bg text-white relative overflow-hidden
          ${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}
        `}
      >
        {/* Decorative background "blob" elements */}
        {/* These blobs will animate subtly and blend to create a dynamic background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${isVisible ? 'animate__animated animate__zoomIn animate__delay-0-5s' : ''}`}></div>
          <div className={`absolute top-1/2 right-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${isVisible ? 'animate__animated animate__zoomIn animate__delay-1s' : ''}`}></div>
          <div className={`absolute bottom-1/4 left-1/2 w-56 h-56 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${isVisible ? 'animate__animated animate__zoomIn animate__delay-1-5s' : ''}`}></div>
        </div>

        {/* Main content, positioned above the blobs with z-index */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className={`text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-glow
              ${isVisible ? 'animate__animated animate__fadeInDown animate__delay-0-5s' : 'opacity-0 translate-y-8'}
              transition-all duration-1000 ease-out
            `}
          >
            Ready to <span className="text-yellow-300">Elevate</span> Your Online Presence?
          </h2>
          <p
            className={`text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-12 font-light
              ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0 scale-90'}
              transition-all duration-1000 ease-out
            `}
          >
            Let's create something truly <span className="font-semibold text-white">amazing</span> together. Get in touch for a free consultation and quote.
          </p>
          <a
            href="#contact"
            className={`inline-block px-12 py-5 bg-white text-indigo-700 font-bold rounded-full shadow-2xl
              hover:bg-gray-100 transition-all duration-500 ease-in-out
              transform hover:scale-110 hover:-translate-y-2 button-glow-hover
              ${isVisible ? 'animate__animated animate__bounceIn animate__delay-1-5s' : 'opacity-0 translate-y-16'}
            `}
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </>
  );
}

export default CTA;