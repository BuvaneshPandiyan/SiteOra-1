import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faPaintBrush,
  faCode,
  faCheckCircle,
  faRocket,
  faTimes, // Added for close button icon
} from '@fortawesome/free-solid-svg-icons';

// Import React Datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

function Process() {
  const whatsappNumber = "7338816479"; // Your WhatsApp number

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.",
      icon: faLightbulb
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and mockups, refining the user experience and visual design based on your feedback.",
      icon: faPaintBrush
    },
    {
      step: 3,
      title: "Development",
      description: "Our developers bring the design to life with clean, efficient code, implementing all functionality and integrations.",
      icon: faCode
    },
    {
      step: 4,
      title: "Testing & Refinement",
      description: "We rigorously test across devices and browsers, ensuring optimal performance, security, and user experience.",
      icon: faCheckCircle
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support, maintenance, and optimization as needed.",
      icon: faRocket
    },
  ];

  // State for managing the consultation modal
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null); // State to store selected date and time

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

  // Function to open the consultation modal
  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
    setSelectedDateTime(null); // Reset selected date when opening
  };

  // Function to close the consultation modal
  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  // Function to handle date and time selection
  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  // Function to generate and open WhatsApp chat
  const handleScheduleConsultation = () => {
    if (selectedDateTime) {
      const formattedDate = selectedDateTime.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = selectedDateTime.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const message = `Hello! I'd like to schedule a free consultation. I'd prefer a slot on ${formattedDate} at ${formattedTime}. Please let me know if this time works or suggest an alternative.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
      closeConsultationModal(); // Close modal after opening WhatsApp
    } else {
      alert("Please select a date and time for your consultation.");
    }
  };

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
          <button
            onClick={openConsultationModal} // Changed from <a> to <button> and added onClick handler
            className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative animate-zoomIn">
            <button
              onClick={closeConsultationModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Schedule Your Free Consultation</h2>
            <p className="text-gray-700 mb-6 text-center">Select your preferred date and time:</p>
            
            <div className="flex justify-center mb-6">
              <DatePicker
                selected={selectedDateTime}
                onChange={handleDateTimeChange}
                showTimeSelect
                dateFormat="Pp"
                minDate={new Date()} // Prevents selecting past dates
                inline // Displays calendar directly
                className="custom-datepicker" // Custom class for potential styling
              />
            </div>

            {selectedDateTime && (
              <p className="text-center text-lg text-indigo-700 font-medium mb-6">
                You selected: {selectedDateTime.toLocaleDateString('en-IN', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })} at {selectedDateTime.toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            )}

            <button
              onClick={handleScheduleConsultation}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedDateTime} // Disable button if no date/time is selected
            >
              Confirm & Connect on WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Process;