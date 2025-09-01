import React from 'react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    step: '01',
    title: 'Discover & Strategize',
    description: 'We start with a deep dive into your goals to create a comprehensive plan and roadmap for success.',
    icon: 'fas fa-search'
  },
  {
    step: '02',
    title: 'Design & Develop',
    description: 'Our team brings your vision to life with stunning design and clean, efficient code.',
    icon: 'fas fa-pencil-ruler'
  },
  {
    step: '03',
    title: 'Launch & Grow',
    description: 'We deploy your project and provide the support you need to ensure long-term growth and success.',
    icon: 'fas fa-rocket'
  },
];

// Reusable SVG Arrow for connecting cards on desktop
const Arrow = ({ inView }) => (
    <svg className={`w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-200 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
        <path className="arrow-path" d="M5 65 C 30 5, 100 5, 125 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="200" strokeDashoffset={inView ? 0 : 200} />
        <path d="M120 60 L125 65 L120 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


function OurSimpleProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Path to Success</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A simple, transparent process designed for collaboration and results.
          </p>
        </div>
        
        {/* --- DESKTOP: Horizontal Layout with Animated Arrows --- */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex"
              >
                <div
                  className={`group relative w-full text-center transition-all duration-700 ease-out 
                    bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg p-8
                    hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2
                    ${ inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }
                  `}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                    <div className="absolute -inset-px bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative">
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-full text-2xl font-bold shadow-lg border-4 border-white">
                            {step.step}
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 mx-auto bg-gray-100 text-indigo-600 rounded-full text-3xl mt-8 mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
                            <i className={step.icon}></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                </div>

                {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-32 h-32">
                        <Arrow inView={inView} />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- UPGRADED: Mobile & Tablet Vertical Timeline --- */}
        <div className="lg:hidden relative">
            {/* The vertical connector line */}
            <div 
              className={`absolute left-10 top-10 w-1 bg-indigo-200 rounded-full transition-height duration-1000 ease-out ${inView ? 'h-[calc(100%-4rem)]' : 'h-0'}`}
              style={{transitionDelay: '200ms'}}
            ></div>
            
            <div className="relative flex flex-col gap-16">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className={`relative pl-20 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* The step circle on the line */}
                    <div className="absolute -left-px top-2 flex items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-full text-2xl font-bold shadow-lg border-4 border-white">
                        {step.step}
                    </div>
                    
                    {/* The card content */}
                    <div className="group relative w-full text-left bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-indigo-100">
                      <div className="absolute -inset-px bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                      <div className="relative">
                          <div className="flex items-center justify-center h-16 w-16 bg-gray-100 text-indigo-600 rounded-full text-3xl mb-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
                              <i className={step.icon}></i>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>

      </div>
       <style jsx>{`
        .bg-grid-pattern {
            background-image: linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px);
            background-size: 2rem 2rem;
        }
        .arrow-path {
            transition: stroke-dashoffset 1s ease-out 0.5s;
        }
        .transition-height {
            transition-property: height;
        }
      `}</style>
    </section>
  );
}

export default OurSimpleProcess;

