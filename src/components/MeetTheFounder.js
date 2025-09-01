import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import BuvaneshwaranImage from './Buvaneshwaran.jpg'; // Import the local image

function MeetTheFounder() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  // --- State and logic for 3D tilt effect ---
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const isTouchDevice = 'ontouchstart' in window;

    // Mouse-based parallax for desktop
    const handleMouseMove = (e) => {
      const rect = currentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY * -8;
      const tiltY = (x - centerX) / centerX * 8;
      setTilt({ x: tiltX, y: tiltY });
    };
    
    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    // Gyroscope-based parallax for mobile
    const handleDeviceOrientation = (e) => {
        const tiltX = e.beta ? Math.min(Math.max(e.beta - 45, -15), 15) * -1 : 0;
        const tiltY = e.gamma ? Math.min(Math.max(e.gamma, -15), 15) : 0;
        setTilt({ x: tiltX, y: tiltY });
    };

    if (isTouchDevice && window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
        currentCard.addEventListener('mousemove', handleMouseMove);
        currentCard.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (isTouchDevice && window.DeviceOrientationEvent) {
          window.removeEventListener('deviceorientation', handleDeviceOrientation);
      } else if (currentCard) {
          currentCard.removeEventListener('mousemove', handleMouseMove);
          currentCard.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const instagramUrl = "https://www.instagram.com/buvaneshwarx";
  const whatsappUrl = "https://wa.me/7338816479";

  return (
    <section ref={ref} className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- UPGRADED: 3D Parallax Card --- */}
        <div
          ref={cardRef}
          className={`relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 transition-all duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* --- UPGRADED: Founder Image --- */}
            <div 
              className="md:col-span-1"
              style={{ transform: 'translateZ(50px)' }}
            >
              <img 
                src={BuvaneshwaranImage} 
                alt="Buvaneshwaran Pandiyan, Founder & CEO of SiteOra"
                className="h-64 w-full object-cover md:h-full rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              />
            </div>

            <div 
              className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center"
              style={{ transform: 'translateZ(20px)' }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600">A Message from Our Founder</h3>
              <p className="mt-4 text-2xl md:text-3xl font-medium text-gray-800 italic">
                "We don't just build websites; we build the core of your digital business. My commitment is to blend cutting-edge technology with your unique vision to create something truly impactful."
              </p>
              <div className="mt-6">
                <p className="text-xl font-bold text-gray-900">Buvaneshwaran Pandiyan</p>
                <p className="text-gray-600">Founder & CEO, SiteOra</p>
              </div>

              {/* --- Contact Buttons --- */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
                    <i className="fab fa-instagram mr-3"></i> Instagram
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
                     <i className="fab fa-whatsapp mr-3"></i> WhatsApp
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
       <style jsx>{`
        /* Removed unused orbit animation */
      `}</style>
    </section>
  );
}

export default MeetTheFounder;

