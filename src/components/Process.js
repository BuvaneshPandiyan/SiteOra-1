import React, { useEffect } from 'react';
// Import FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons you need
import {
  faLightbulb,
  faPaintBrush,
  faCode,
  faCheckCircle,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';


function Process() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.",
      icon: faLightbulb // Use the imported icon directly
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and mockups, refining the user experience and visual design based on your feedback.",
      icon: faPaintBrush // Use the imported icon directly
    },
    {
      step: 3,
      title: "Development",
      description: "Our developers bring the design to life with clean, efficient code, implementing all functionality and integrations.",
      icon: faCode // Use the imported icon directly
    },
    {
      step: 4,
      title: "Testing & Refinement",
      description: "We rigorously test across devices and browsers, ensuring optimal performance, security, and user experience.",
      icon: faCheckCircle // Use the imported icon directly
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support, maintenance, and optimization as needed.",
      icon: faRocket // Use the imported icon directly
    },
  ];

  // Scroll animations for process cards (left/right slide-in)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (index % 2 === 0) {
              entry.target.classList.add('animate-slideInLeft');
            } else {
              entry.target.classList.add('animate-slideInRight');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll('.process-card').forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      document.querySelectorAll('.process-card').forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);


  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Seamless Steps to Success
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our streamlined methodology ensures your project's smooth journey from a brilliant idea to a launched reality.
          </p>
        </div>

        {/* Desktop Horizontal Layout */}
        <div className="hidden md:block relative px-8 py-12">
          <div className="flex justify-between items-start relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                data-index={index}
                className="flex-1 text-center group process-card transition-all duration-300"
              >
                <div className="w-28 h-28 mx-auto mb-4 bg-white border-4 border-indigo-400 rounded-full flex flex-col items-center justify-center text-indigo-600 text-3xl font-extrabold shadow-lg
                            transform group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 relative z-20 overflow-hidden">
                  {/* Use FontAwesomeIcon component here */}
                  <FontAwesomeIcon icon={step.icon} />
                  <span className="text-sm font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Step {step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 px-2 text-sm max-w-[200px] mx-auto opacity-0 group-hover:opacity-100 group-hover:mt-2 transition-opacity duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Stacked Cards (Enhanced with slide-in) */}
        <div className="md:hidden space-y-6 mt-12">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              data-index={index}
              className="group bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center border border-gray-200 process-card
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-indigo-400"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md mb-4
                          transition-all duration-300 group-hover:scale-110 group-hover:from-indigo-600 group-hover:to-purple-700">
                {/* Use FontAwesomeIcon component here */}
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action at the bottom */}
        <div className="mt-5 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your project?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and turn it into a captivating digital experience.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;