import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const industriesTop = [
  { icon: 'fas fa-landmark', name: 'Financial Services' },
  { icon: 'fas fa-shopping-cart', name: 'E-Commerce & Retail' },
  { icon: 'fas fa-briefcase-medical', name: 'Health & Wellness' },
  { icon: 'fas fa-cogs', name: 'Tech Startups' },
  { icon: 'fas fa-building', name: 'Real Estate' },
  { icon: 'fas fa-server', name: 'SaaS Platforms' },
];

const industriesBottom = [
  { icon: 'fas fa-utensils', name: 'Restaurants & Hospitality' },
  { icon: 'fas fa-user-tie', name: 'Professional Services' },
  { icon: 'fas fa-palette', name: 'Creative Agencies' },
  { icon: 'fas fa-graduation-cap', name: 'Education Tech' },
  { icon: 'fas fa-plane-departure', name: 'Travel & Tourism' },
  { icon: 'fas fa-heart', name: 'Non-Profit' },
];

// Reusable Card component for consistency
const IndustryCard = ({ industry }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  // NEW: State for spotlight effect
  const [spotlight, setSpotlight] = useState({ x: '50%', y: '50%', opacity: 0 });

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard || 'ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      const rect = currentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY * -10;
      const tiltY = (x - centerX) / centerX * 10;
      setTilt({ x: tiltX, y: tiltY });
      setSpotlight({ x: `${x}px`, y: `${y}px`, opacity: 1 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setSpotlight({ x: '50%', y: '50%', opacity: 0 });
    };

    currentCard.addEventListener('mousemove', handleMouseMove);
    currentCard.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      currentCard.removeEventListener('mousemove', handleMouseMove);
      currentCard.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col justify-center text-center p-6 h-56 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      {/* --- NEW: Spotlight Effect --- */}
      <div 
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
            background: `radial-gradient(circle at ${spotlight.x} ${spotlight.y}, rgba(165, 180, 252, 0.3), transparent 40%)`,
            opacity: spotlight.opacity,
        }}
      ></div>
      <div className="absolute -inset-px bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
      <div className="relative">
        <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 text-indigo-600 rounded-full text-4xl transition-all duration-300 transform group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
          <i className={industry.icon}></i>
        </div>
        <h3 className="mt-5 text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-700 h-14 flex items-center justify-center">{industry.name}</h3>
      </div>
    </div>
  );
};

function IndustryExpertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const Marquee = ({ industries }) => (
    <div className="marquee-content flex w-max">
      {[...industries, ...industries, ...industries].map((industry, index) => (
        <div key={`${industry.name}-${index}`} className="px-4 flex-shrink-0 w-64">
             <IndustryCard industry={industry} />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Solutions Tailored to Your Industry
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We have experience crafting powerful digital solutions across a variety of sectors.
          </p>
        </div>

        {/* --- UPGRADED: Double Marquee for all screen sizes --- */}
        <div className={`space-y-8 transition-opacity duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full overflow-hidden relative group/marquee">
                <div className="marquee-left">
                    <Marquee industries={industriesTop} />
                </div>
            </div>
            <div className="w-full overflow-hidden relative group/marquee">
                <div className="marquee-right">
                    <Marquee industries={industriesBottom} />
                </div>
            </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
        }
        .marquee-left {
            animation: marquee-left 60s linear infinite;
        }

        @keyframes marquee-right {
            from { transform: translateX(-33.333%); }
            to { transform: translateX(0); }
        }
        .marquee-right {
            animation: marquee-right 60s linear infinite;
        }

        .group\\/marquee:hover .marquee-left,
        .group\\/marquee:hover .marquee-right {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default IndustryExpertise;

