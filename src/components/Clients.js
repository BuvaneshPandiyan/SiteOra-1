import React, { useEffect, useState } from 'react';

function Clients() {
  // State to track if the component has been scrolled into view
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('clients-section');
      if (section) {
        // Get the position of the section relative to the viewport
        const rect = section.getBoundingClientRect();
        // Check if the top of the section is within the viewport (e.g., 70% of the viewport height)
        if (rect.top < window.innerHeight * 0.7) {
          setInView(true);
        } else {
          setInView(false); // Reset if scrolled out of view upwards
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to check initial position
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="clients-section" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md
            transition-all duration-1000 ease-out transform-gpu animate-text-wave
            ${inView ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-20 rotate-6 scale-90'}`}
        >
          Our Client List? It's Still Under NDA <span className="text-indigo-600">(Naturally).</span>
        </h2>
        <p
          className={`mt-4 text-center text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto
            transition-all duration-1000 ease-out transform-gpu delay-200 animate-text-float
            ${inView ? 'opacity-100 translate-y-0 skew-x-0' : 'opacity-0 translate-y-10 skew-x-3'}`}
        >
          We're busy building the future, one game-changing solution at a time. The world just hasn't caught up yet.
        </p>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }

        @keyframes text-wave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(1deg);
          }
          75% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes text-float {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(5px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        .animate-text-wave {
          animation: text-wave 4s infinite ease-in-out;
        }

        .animate-text-float {
          animation: text-float 3s infinite ease-in-out;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

export default Clients;
