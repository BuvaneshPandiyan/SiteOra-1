import React, { useEffect, useState } from 'react';

function Clients() {
  // State to track if the component has been scrolled into view
  const [inView, setInView] = useState(false);

  // Array of core values for the marquee
  const coreValues = [
    { name: 'Innovation Driven', icon: 'fas fa-lightbulb' },
    { name: 'Quality First', icon: 'fas fa-gem' },
    { name: 'Peak Performance', icon: 'fas fa-tachometer-alt' },
    { name: 'Client Partnership', icon: 'fas fa-handshake' },
    { name: 'User-Centric Design', icon: 'fas fa-user-friends' },
    { name: 'Future-Proof Code', icon: 'fas fa-code-branch' },
    { name: 'Creative Solutions', icon: 'fas fa-paint-brush' },
    { name: 'Transparent Process', icon: 'fas fa-clipboard-check' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('clients-section');
      if (section) {
        // Get the position of the section relative to the viewport
        const rect = section.getBoundingClientRect();
        // Check if the top of the section is within the viewport
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
          Our Foundation is Built on Strong Values
        </h2>
        <p
          className={`mt-4 text-center text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto
            transition-all duration-1000 ease-out transform-gpu delay-200 animate-text-float
            ${inView ? 'opacity-100 translate-y-0 skew-x-0' : 'opacity-0 translate-y-10 skew-x-3'}`}
        >
          These are the principles that guide every project we undertake, ensuring we deliver excellence and build lasting partnerships.
        </p>
      </div>
      
      {/* --- Infinite Scrolling Marquee of Core Values --- */}
      <div className={`relative mt-12 transition-opacity duration-1000 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="marquee-container w-full overflow-hidden relative h-24 flex items-center">
            <div className="marquee-content flex w-max">
                {/* We render the list twice for a seamless loop */}
                {[...coreValues, ...coreValues].map((value, index) => (
                    <div key={index} className="flex items-center mx-8 text-gray-400 hover:text-gray-700 transition-colors duration-300">
                        <i className={`${value.icon} text-3xl mr-4`}></i>
                        <span className="text-2xl font-semibold">{value.name}</span>
                    </div>
                ))}
            </div>
        </div>
        {/* Fading overlays for the edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>


      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        @keyframes text-wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          75% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes text-float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(5px); }
        }
        
        /* --- Marquee Animation --- */
        @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }

        .marquee-content {
            animation: marquee 40s linear infinite;
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

