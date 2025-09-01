import React from 'react';
import { useInView } from 'react-intersection-observer';

const technologiesTop = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Next.js', icon: 'fas fa-arrow-up' }, // Using a generic icon for Next.js
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'Vercel', icon: 'fas fa-cloud' },
];

const technologiesBottom = [
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'TypeScript', icon: 'fas fa-code' }, // Generic icon for TS
  { name: 'Firebase', icon: 'fas fa-fire' },
  { name: 'Figma', icon: 'fab fa-figma' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind' }, // Generic icon
];


function TechnologyShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const Marquee = ({ technologies, direction = 'left' }) => (
    <div className="marquee-content flex w-max">
      {/* Render the list twice for a seamless loop */}
      {[...technologies, ...technologies].map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className={`
            subtle-gradient-border relative group flex flex-col items-center justify-center space-y-3 p-6 mx-4
            w-32 h-32
            bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg
            transition-all duration-300 ease-in-out hover:shadow-indigo-100 hover:shadow-2xl hover:-translate-y-2
          `}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
          <div className="relative flex flex-col items-center justify-center">
            <i className={`${tech.icon} text-5xl text-gray-500 group-hover:text-indigo-600 transition-colors duration-300`}></i>
            <span className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{tech.name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:1.5rem_1.5rem]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Powered by Modern Technology</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We use a cutting-edge, reliable tech stack to build high-quality digital products.
          </p>
        </div>
        
        {/* --- UPGRADED: Infinite Scrolling Marquee --- */}
        <div className={`space-y-8 transition-opacity duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {/* Top row, scrolls left */}
            <div className="w-full overflow-hidden">
                <div className="marquee-left">
                    <Marquee technologies={technologiesTop} />
                </div>
            </div>
            {/* Bottom row, scrolls right */}
            <div className="w-full overflow-hidden">
                <div className="marquee-right">
                    <Marquee technologies={technologiesBottom} />
                </div>
            </div>
        </div>
      </div>
       <style jsx>{`
        @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .marquee-left {
            animation: marquee-left 40s linear infinite;
        }

        @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
        }
        .marquee-right {
            animation: marquee-right 40s linear infinite;
        }

        /* --- NEW: Subtle Gradient Border Style --- */
        .subtle-gradient-border::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 1rem; /* Tailwind's rounded-2xl */
            padding: 1px; /* border thickness */
            background: linear-gradient(135deg, rgba(199, 210, 254, 0.7), rgba(221, 214, 254, 0.7)); /* indigo-200, purple-200 with opacity */
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none; /* Make sure it doesn't interfere with hover */
        }
      `}</style>
    </section>
  );
}

export default TechnologyShowcase;

