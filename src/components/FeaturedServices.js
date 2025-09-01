import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const vitals = [
  {
    icon: 'fas fa-rocket',
    title: 'Blazing-Fast Loading',
    description: 'We optimize every asset to ensure your content loads almost instantly, capturing visitor attention.',
  },
  {
    icon: 'fas fa-mouse-pointer',
    title: 'Instant Interactivity',
    description: 'Every button, form, and link is immediately responsive for a snappy and satisfying user experience.',
  },
  {
    icon: 'fas fa-universal-access',
    title: 'Accessibility (A11y)',
    description: 'We build inclusive websites that are usable by everyone, ensuring you reach the widest possible audience.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Rock-Solid Security',
    description: 'We implement best practices to protect your website and your users\' data from common threats.',
  },
  {
    icon: 'fas fa-edit',
    title: 'CMS Integration',
    description: 'Take control of your content. We can integrate powerful, user-friendly Content Management Systems.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Scalable Architecture',
    description: 'Your website is built on a foundation that can grow with your business, handling increased traffic with ease.',
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Analytics & Reporting',
    description: 'Gain valuable insights into your audience with integrated analytics to track performance and user behavior.',
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Brand Cohesion',
    description: 'We ensure your website is a perfect digital extension of your brand, with a consistent and memorable identity.',
  },
  {
    icon: 'fas fa-chrome',
    title: 'Cross-Browser Compatibility',
    description: 'Your site will look and function perfectly across all modern browsers, from Chrome and Firefox to Safari.',
  },
  {
    icon: 'fas fa-puzzle-piece',
    title: 'Visual Stability',
    description: 'No frustrating jumps or shifting layouts. Your content stays exactly where it should, providing a calm experience.',
  },
];

// Reusable Card component
const VitalCard = ({ vital }) => (
    <div className="w-full max-w-[320px] h-[400px] text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-xl flex flex-col items-center justify-center">
        <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 mx-auto mb-6 text-3xl">
            <i className={vital.icon}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{vital.title}</h3>
        <p className="text-gray-600 flex-grow">{vital.description}</p>
    </div>
);


function CoreVitalsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // --- State for DESKTOP interactive fan ---
  const [activeIndex, setActiveIndex] = useState(Math.floor(vitals.length / 2));
  const [isHovered, setIsHovered] = useState(false);
  
  // --- State for MOBILE swipeable and shakeable stack ---
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const minSwipeDistance = 50;

  // --- Handlers for DESKTOP ---
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };
  const handleNextDesktop = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % vitals.length);
  };
  const handlePrevDesktop = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + vitals.length) % vitals.length);
  };

  // --- Handlers for MOBILE (swipe and shake) ---
  const goToNextMobile = useCallback(() => {
    setMobileActiveIndex(prev => (prev + 1) % vitals.length);
  }, []);

  const goToPrevMobile = useCallback(() => {
    setMobileActiveIndex(prev => (prev - 1 + vitals.length) % vitals.length);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      goToNextMobile();
    } else if (distance < -minSwipeDistance) {
      goToPrevMobile();
    }
  };

  useEffect(() => {
    let lastShakeTime = 0;
    const shakeThreshold = 20; // m/s^2 - adjust for sensitivity
    const shakeCooldown = 1000; // 1 second cooldown

    const handleDeviceMotion = (event) => {
      const currentTime = new Date().getTime();
      if ((currentTime - lastShakeTime) < shakeCooldown) return;

      const { x } = event.accelerationIncludingGravity;
      
      if (Math.abs(x) > shakeThreshold) {
        lastShakeTime = currentTime;
        if (x > 0) {
          goToNextMobile();
        } else {
          goToPrevMobile();
        }
      }
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleDeviceMotion);
    }

    return () => {
      if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', handleDeviceMotion);
      }
    };
  }, [goToNextMobile, goToPrevMobile]);


  return (
    <section ref={ref} className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem]"
          style={{ maskImage: 'radial-gradient(ellipse_at_center,transparent_20%,black)' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Engineered for Excellence
          </h2>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We build websites that don't just look good—they perform flawlessly. Our commitment to modern web standards means a better experience for your users and better results for you.
          </p>
        </div>

        {/* --- DESKTOP: Interactive Clickable & Hoverable Fanned Cards --- */}
        <div 
            className="hidden lg:flex justify-center items-center mt-20 h-[450px] relative perspective-1000 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button onClick={handlePrevDesktop} className={`absolute left-0 z-30 w-16 h-16 bg-white/50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-white`}>
                <i className="fas fa-chevron-left text-gray-700"></i>
            </button>
            <button onClick={handleNextDesktop} className={`absolute right-0 z-30 w-16 h-16 bg-white/50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-white`}>
                <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
            
            {vitals.map((vital, index) => {
                const numItems = vitals.length;
                let offset = index - activeIndex;
                if (offset > numItems / 2) { offset -= numItems; }
                if (offset < -numItems / 2) { offset += numItems; }

                const isVisible = Math.abs(offset) <= 3;
                let transform;

                if (isHovered) {
                    transform = `rotate(${offset * 10}deg) translateX(${offset * 150}px) scale(${1 - Math.abs(offset) * 0.05})`;
                    if(offset === 0) {
                        transform += ` translateY(-2rem) scale(1.1)`;
                    }
                } else {
                    transform = `rotate(${offset * 3}deg) translateX(${offset * 20}px) translateY(${Math.abs(offset) * 10}px)`;
                }

                const style = { transform, zIndex: 10 - Math.abs(offset), opacity: isVisible ? 1 : 0, transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};

                return (
                    <div
                        key={vital.title}
                        className={`absolute transition-all duration-500 ease-in-out transform-gpu cursor-pointer ${inView ? 'opacity-100' : 'opacity-0'}`}
                        style={style}
                        onClick={() => handleCardClick(index)}
                    >
                        <VitalCard vital={vital} />
                    </div>
                );
            })}
        </div>

        {/* --- MOBILE: Looping, Swipeable, and Shakeable Stack --- */}
        <div className="lg:hidden mt-8">
            <div className="relative h-[450px] w-full max-w-sm mx-auto">
                {vitals.map((vital, index) => {
                    const numItems = vitals.length;
                    let offset = index - mobileActiveIndex;
                    if (offset > numItems / 2) { offset -= numItems; }
                    if (offset < -numItems / 2) { offset += numItems; }

                    const isVisibleStack = Math.abs(offset) <= 3;
                    let transform = '';
                    let opacity = 0;

                    if (offset === 0) {
                        transform = 'translateY(0) scale(1) rotate(0deg)';
                        opacity = 1;
                    } else if (isVisibleStack) {
                        // --- UPDATED: Restored "messy" stack look ---
                        transform = `translateX(${offset * 10}px) translateY(${Math.abs(offset) * 20}px) rotate(${offset * 5}deg) scale(${1 - Math.abs(offset) * 0.05})`;
                        opacity = 1;
                    } else {
                        opacity = 0;
                    }

                    const style = { transform, zIndex: vitals.length - Math.abs(offset), opacity, transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};

                    return (
                        <div
                            key={vital.title}
                            className="absolute top-0 left-0 w-full h-full flex justify-center"
                            style={style}
                            onTouchStart={offset === 0 ? handleTouchStart : undefined}
                            onTouchEnd={offset === 0 ? handleTouchEnd : undefined}
                        >
                            <VitalCard vital={vital} />
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
       <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

export default CoreVitalsSection;

