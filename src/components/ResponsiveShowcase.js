import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function ResponsiveShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // High-quality, working images for each device
  const desktopImage = 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';
  const tabletImage = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';
  const phoneImage = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80';
  
  // State and logic for mouse-tracking parallax effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!showcaseRef.current) return;
      
      const rect = showcaseRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / centerY * -10;
      const tiltY = (x - centerX) / centerX * 10;
      
      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    const currentRef = showcaseRef.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-gray-100 py-8 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animated-shine">
            Perfect On Every Screen
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Your website will be meticulously crafted to provide a flawless and intuitive experience, no matter the device.
          </p>
        </div>

        {/* UPGRADED: Device Mockups Container with Parallax */}
        <div 
          ref={showcaseRef}
          className="relative max-w-6xl mx-auto h-[20rem] md:h-[40rem] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          
          {/* Desktop Mockup (Back Layer) */}
          <div 
            className={`absolute w-full max-w-5xl transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{transitionDelay: '100ms', transform: 'translateZ(-50px)'}}
          >
            <div className="relative mx-auto bg-gray-900 border-gray-700 border-[10px] rounded-t-2xl shadow-2xl">
              <div className="rounded-lg overflow-hidden h-auto">
                <img src={desktopImage} className="w-full h-full object-cover" alt="Desktop preview" />
              </div>
            </div>
          </div>
          
          {/* Tablet Mockup (Middle Layer) */}
          <div 
            className={`absolute -bottom-8 -left-8 sm:left-0 md:-bottom-12 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{transitionDelay: '300ms', transform: 'translateZ(50px)'}}
            >
            <div className="relative mx-auto bg-gray-800 border-gray-700 border-[8px] rounded-2xl shadow-2xl h-[18rem] w-[14rem] sm:h-[24rem] sm:w-[18rem] md:h-[30rem] md:w-[22rem]">
              <div className="rounded-xl overflow-hidden h-full bg-white">
                <img src={tabletImage} className="h-full w-full object-cover object-center" alt="Tablet preview" />
              </div>
            </div>
          </div>

          {/* Phone Mockup (Front Layer) */}
          <div 
            className={`absolute -bottom-12 right-0 sm:right-4 md:-bottom-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{transitionDelay: '500ms', transform: 'translateZ(100px)'}}
          >
            <div className="relative mx-auto bg-gray-900 border-gray-800 border-[6px] rounded-3xl shadow-2xl h-[16rem] w-[8rem] sm:h-[20rem] sm:w-[10rem] md:h-[24rem] md:w-[12rem]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-1/3 bg-gray-800 rounded-b-lg"></div>
              <div className="rounded-2xl overflow-hidden h-full bg-white">
                <img src={phoneImage} className="h-full w-full object-cover object-center" alt="Phone preview" />
              </div>
            </div>
          </div>

        </div>
      </div>
       {/* NEW: Style for animated text shine */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animated-shine {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #8b5cf6, #6366f1);
          animation: shine 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default ResponsiveShowcase;
