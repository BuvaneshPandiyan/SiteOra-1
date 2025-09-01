import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

// --- NEW CONTENT: Replaced "Vitals" with "Our Commitments" ---
const commitments = [
  {
    icon: 'fas fa-receipt',
    title: 'Transparent Pricing',
    description: 'No hidden fees, ever. You\'ll receive a detailed, upfront quote so you know exactly what to expect from day one.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Direct Communication',
    description: 'You\'ll have a direct line of communication with us, ensuring your voice is always heard and your questions are answered promptly.',
  },
  {
    icon: 'fas fa-clock',
    title: 'On-Time Delivery',
    description: 'We respect your timeline. We set realistic deadlines and stick to them, keeping you informed every step of the way.',
  },
  {
    icon: 'fas fa-ruler-combined',
    title: 'Pixel-Perfect Quality',
    description: 'We are obsessed with the details. Your final product will be a polished, pixel-perfect reflection of the approved design.',
  },
  {
    icon: 'fas fa-key',
    title: 'You Own Everything',
    description: 'Upon completion, you receive full ownership of your website\'s code, assets, and all associated accounts. No strings attached.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Personalized Strategy',
    description: 'We don\'t use templates. Your business is unique, and your website strategy will be tailored specifically to your goals.',
  },
  {
    icon: 'fas fa-code-branch',
    title: 'Future-Proof Code',
    description: 'We write clean, modern, and scalable code, ensuring your website is easy to maintain and ready for future growth.',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Post-Launch Training',
    description: 'We won\'t leave you in the dark. We provide clear instructions and training so you feel confident managing your new site.',
  },
  {
    icon: 'fas fa-life-ring',
    title: 'Proactive Support',
    description: 'We\'re your long-term partners. We monitor your site\'s health and are always here to help with any questions or future needs.',
  },
  {
    icon: 'fas fa-trophy',
    title: 'Success-Driven Focus',
    description: 'Our ultimate goal is to deliver a product that helps your business thrive. We are genuinely invested in your success.',
  },
];

// Reusable Card component - structure remains the same
const CommitmentCard = ({ commitment }) => (
    <div className="w-full max-w-[320px] h-[400px] text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-xl flex flex-col items-center justify-center">
        <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 mx-auto mb-6 text-3xl">
            <i className={commitment.icon}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{commitment.title}</h3>
        <p className="text-gray-600 flex-grow">{commitment.description}</p>
    </div>
);


function CoreVitalsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const [activeIndex, setActiveIndex] = useState(Math.floor(commitments.length / 2));
  const [isHovered, setIsHovered] = useState(false);
  
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const minSwipeDistance = 50;

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };
  const handleNextDesktop = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % commitments.length);
  };
  const handlePrevDesktop = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + commitments.length) % commitments.length);
  };

  const goToNextMobile = useCallback(() => {
    setMobileActiveIndex(prev => (prev + 1) % commitments.length);
  }, []);

  const goToPrevMobile = useCallback(() => {
    setMobileActiveIndex(prev => (prev - 1 + commitments.length) % commitments.length);
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
    const shakeThreshold = 20;
    const shakeCooldown = 1000;

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
            Our Commitment to You
          </h2>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We believe in building more than just websites. We build partnerships founded on trust, transparency, and a shared passion for excellence.
          </p>
        </div>

        {/* --- Desktop Looping Interactive Hover & Click Fanned Cards Layout --- */}
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
            
            {commitments.map((commitment, index) => {
                const numItems = commitments.length;
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
                        key={commitment.title}
                        className={`absolute transition-all duration-500 ease-in-out transform-gpu cursor-pointer ${inView ? 'opacity-100' : 'opacity-0'}`}
                        style={style}
                        onClick={() => handleCardClick(index)}
                    >
                        <CommitmentCard commitment={commitment} />
                    </div>
                );
            })}
        </div>

        {/* --- Mobile & Tablet "Messy" Looping Swipeable/Shakeable Stack --- */}
        <div className="lg:hidden mt-8">
            <div className="relative h-[450px] w-full max-w-sm mx-auto">
                {commitments.map((commitment, index) => {
                    const numItems = commitments.length;
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
                        transform = `translateX(${offset * 10}px) translateY(${Math.abs(offset) * 20}px) rotate(${offset * 5}deg) scale(${1 - Math.abs(offset) * 0.05})`;
                        opacity = 1;
                    } else {
                        opacity = 0;
                    }

                    const style = { transform, zIndex: commitments.length - Math.abs(offset), opacity, transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};

                    return (
                        <div
                            key={commitment.title}
                            className="absolute top-0 left-0 w-full h-full flex justify-center"
                            style={style}
                            onTouchStart={offset === 0 ? handleTouchStart : undefined}
                            onTouchEnd={offset === 0 ? handleTouchEnd : undefined}
                        >
                            <CommitmentCard commitment={commitment} />
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

