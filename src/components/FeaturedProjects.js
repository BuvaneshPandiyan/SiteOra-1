import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// Adding the new image imports. 
// NOTE: Make sure you have 'SiteoraImage.png' and 'FionaMakeoverArtistryImage.png' in your assets/images folder.
import GenZMilletImage from '../assets/images/GenZMilletImage.png';
import SiteoraImage from '../assets/images/SiteoraImage.png'; 
import FionaMakeoverArtistryImage from '../assets/images/FionaMakeoverArtistryImage.png';

const projects = [
  {
    title: 'Genz Millet',
    description: 'For this health-focused startup, we created an innovative WhatsApp e-commerce solution. To match their budget, we designed a streamlined static site where customers can browse millet products. The "Proceed to Checkout" action cleverly compiles their order into a pre-formatted WhatsApp message, sending it directly to the business owner to finalize the sale.',
    tags: ['WhatsApp E-commerce', 'Static Site', 'Small Business Solution', 'React'],
    imageUrl: GenZMilletImage,
    align: 'left',
    link: 'https://genzmillet.store', 
  },
  {
    title: 'Siteora',
    description: 'We engineered this comprehensive platform to deliver bespoke website creation services directly to customers. This live project powerfully showcases our ability to architect complex web applications that are deeply intuitive and built on a future-proof, scalable foundation. We ensured flawless, responsive performance across all devices. This project is a testament to our commitment to building powerful, market-ready web solutions.',
    tags: ['Web Development', 'Live Site', 'React', 'SaaS Platform'],
    imageUrl: SiteoraImage,
    align: 'right',
    link: 'https://siteora.online', 
  },
  {
    title: 'Fiona Artistry',
    description: 'We are currently crafting a bespoke digital portfolio for a leading makeup artist that reflects the elegance of their work. This visually stunning online gallery will showcase their diverse services, from bridal to editorial photoshoots. By blending sophisticated aesthetics with an intuitive user experience, we are building a digital stage that not only displays their artistry but elevates their entire brand.',
    tags: ['Makeup Artistry', 'UI/UX Design', 'In Progress', 'Portfolio'],
    imageUrl: FionaMakeoverArtistryImage,
    align: 'left',
    link: null, 
  },
];

const ProjectCard = ({ title, description, tags, imageUrl, align, link }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const isRight = align === 'right';
  
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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

    if (!isTouchDevice) {
      currentCard.addEventListener('mousemove', handleMouseMove);
      currentCard.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (!isTouchDevice && currentCard) {
        currentCard.removeEventListener('mousemove', handleMouseMove);
        currentCard.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div 
        ref={cardRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        <div 
          className={`relative transition-all duration-1000 ease-out group ${isRight ? 'lg:order-last' : ''} ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className={`absolute -inset-4 bg-indigo-50 rounded-3xl transition-transform duration-700 delay-300 ${isRight ? '-rotate-2 group-hover:-rotate-3' : 'rotate-2 group-hover:rotate-3'} ${inView ? 'scale-100 rotate-0' : 'scale-90'}`}></div>
          {/* --- MODIFICATION 1: Image height increased for a bigger card --- */}
          <img src={imageUrl} alt={title} className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-105" />
        </div>
        
        <div 
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
            {/* --- MODIFICATION 2: This content area now scrolls if text is too long --- */}
            <div className="flex-1 overflow-y-auto pr-4">
              <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
              <p className="mt-4 text-lg text-gray-700">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {tags.map(tag => (
                  <span key={tag} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            
            {/* --- MODIFICATION 3: This block is pushed to the bottom and won't shrink --- */}
            <div className="flex-shrink-0 pt-6">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group"
                >
                  View Live Site
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              ) : (
                <div className="inline-block text-lg font-semibold text-gray-400 cursor-not-allowed">
                  Full Project Coming Soon...
                </div>
              )}
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
        <div className="space-y-28">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
