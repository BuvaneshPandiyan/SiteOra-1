import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// --- UPDATED: Importing local images as requested ---
import GenZMilletImage from '../assets/images/GenZMilletImage.png';
import TwizzleTeesImage from '../assets/images/TwizzleTeesImage.png';

const projects = [
  {
    title: 'Genz Millet',
    description: 'For this health-focused startup, we created an innovative WhatsApp e-commerce solution. To match their budget, we designed a streamlined static site where customers can browse millet products. The "Proceed to Checkout" action cleverly compiles their order into a pre-formatted WhatsApp message, sending it directly to the business owner to finalize the sale.',
    tags: ['WhatsApp E-commerce', 'Static Site', 'Small Business Solution', 'React'],
    imageUrl: GenZMilletImage, // Using imported image
    align: 'left',
  },
  {
    title: 'TwizzleTees',
    description: 'This custom printed t-shirt business wanted a digital presence that mirrored their WhatsApp-based sales process. We built a vibrant, visually engaging showcase for their designs. Similar to our other small business solutions, the checkout process directs customers to a WhatsApp chat with a customized, bill-like message, making ordering simple and direct.',
    tags: ['WhatsApp Business', 'Fashion E-commerce', 'UI/UX Design', 'Cost-Effective'],
    imageUrl: TwizzleTeesImage, // Using imported image
    align: 'right',
  },
];

const ProjectCard = ({ title, description, tags, imageUrl, align }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const isRight = align === 'right';
  
  // --- State and logic for 3D tilt effect ---
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    // Check for touch device to decide which effect to use
    const isTouchDevice = 'ontouchstart' in window;

    // Mouse-based parallax for desktop
    const handleMouseMove = (e) => {
      const rect = currentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY * -8; // Max tilt of 8 degrees
      const tiltY = (x - centerX) / centerX * 8;
      setTilt({ x: tiltX, y: tiltY });
    };
    
    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 }); // Reset tilt
    };

    // Gyroscope-based parallax for mobile
    const handleDeviceOrientation = (e) => {
        // e.beta is front-to-back tilt, e.gamma is left-to-right
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

  return (
    <div ref={ref}>
        <div 
            ref={cardRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-300 ease-out"
            style={{ 
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
        >
        {/* --- UPGRADED: Image Column with Pattern Background --- */}
        <div 
            className={`relative transition-all duration-1000 ease-out group ${isRight ? 'lg:order-last' : ''} ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'translateZ(30px)' }} // Pull image forward
        >
            <div className={`absolute -inset-4 bg-indigo-50 rounded-3xl transition-transform duration-700 delay-300 ${isRight ? '-rotate-2 group-hover:-rotate-3' : 'rotate-2 group-hover:rotate-3'} ${inView ? 'scale-100 rotate-0' : 'scale-90'}`}></div>
            <img src={imageUrl} alt={title} className="relative rounded-2xl shadow-2xl object-cover w-full h-96 transition-transform duration-500 group-hover:scale-105" />
        </div>
        
        {/* --- UPGRADED: Text Column with Inner Card --- */}
        <div 
            className={`transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: 'translateZ(60px)' }} // Pull text card even more forward
        >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                <p className="mt-4 text-lg text-gray-700">{description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                {tags.map(tag => (
                    <span key={tag} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">{tag}</span>
                ))}
                </div>
                <div className="inline-block mt-8 text-lg font-semibold text-gray-400 cursor-not-allowed">
                Full Project Coming Soon...
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Signature Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A glimpse into the solutions we've crafted for our clients.
          </p>
        </div>
        <div className="space-y-20">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;

