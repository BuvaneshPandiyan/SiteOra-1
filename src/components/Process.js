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
  const [currentStep, setCurrentStep] = useState('date'); // 'date' or 'time'

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
    setCurrentStep('date'); // Always start with date selection
  };

  // Function to close the consultation modal
  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setCurrentStep('date'); // Reset step when closing modal
  };

  // Function to handle date and time selection
  const handleDateTimeChange = (date) => {
    if (currentStep === 'date') {
      // When a date is selected, store it and move to time selection
      const newDateTime = new Date(date);
      // Preserve existing time if any, otherwise set to a default (e.g., start of day or current time)
      if (selectedDateTime) {
        newDateTime.setHours(selectedDateTime.getHours());
        newDateTime.setMinutes(selectedDateTime.getMinutes());
      } else {
        newDateTime.setHours(new Date().getHours());
        newDateTime.setMinutes(new Date().getMinutes());
      }
      setSelectedDateTime(newDateTime);
      setCurrentStep('time');
    } else if (currentStep === 'time') {
      // When a time is selected, combine it with the previously selected date
      if (selectedDateTime) {
        const newDateTime = new Date(selectedDateTime);
        newDateTime.setHours(date.getHours());
        newDateTime.setMinutes(date.getMinutes());
        setSelectedDateTime(newDateTime);
      } else {
        // Fallback: if somehow date wasn't set, use current date with selected time
        setSelectedDateTime(date);
      }
    }
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
      // Replaced alert with a simple console log as alerts are not allowed in canvas
      console.log("Please select a date and time for your consultation.");
    }
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-100 overflow-hidden font-sans">
      {/* Tailwind CSS animation for slide-in from left */}
      <style>
        {`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out forwards;
        }

        /* Custom styles for react-datepicker to ensure mobile responsiveness */
        .react-datepicker-popper {
            z-index: 9999; /* Ensure it's above other elements */
            /* Force centering for the popper */
            left: 50% !important;
            transform: translateX(-50%) !important;
            /* Ensure it doesn't overflow on small screens */
            max-width: 95vw; /* Max width relative to viewport width */
            width: fit-content; /* Adjust width to content, but respect max-width */
        }

        .react-datepicker {
            font-family: "Inter", sans-serif;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            width: auto; /* Allow content to dictate width */
            max-width: 100%; /* Ensure it doesn't exceed popper width */
            margin: 0 auto; /* Center the calendar within its container */
            display: flex; /* Use flexbox for internal centering */
            flex-direction: column; /* Stack elements vertically */
            align-items: center; /* Center horizontally */
        }

        .react-datepicker__header {
            background-color: #f8fafc; /* gray-50 */
            border-bottom: 1px solid #e2e8f0; /* border-gray-200 */
            padding-top: 0.75rem; /* py-3 */
        }

        .react-datepicker__current-month,
        .react-datepicker-time__header,
        .react-datepicker-year-header {
            font-weight: 700; /* font-bold */
            color: #1a202c; /* gray-900 */
            margin-bottom: 0.5rem; /* mb-2 */
        }

        .react-datepicker__day-name {
            color: #4a5568; /* gray-700 */
            font-weight: 600; /* font-semibold */
        }

        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected,
        .react-datepicker__time-list-item--selected {
            background-color: #4f46e5; /* indigo-600 */
            color: white;
            border-radius: 0.25rem; /* rounded-md */
        }

        .react-datepicker__day--selected:hover,
        .react-datepicker__day--keyboard-selected:hover,
        .react-datepicker__time-list-item--selected:hover {
            background-color: #4338ca; /* indigo-700 */
        }

        .react-datepicker__day:hover,
        .react-datepicker__time-list-item:hover {
            background-color: #e0e7ff; /* indigo-100 */
            border-radius: 0.25rem; /* rounded-md */
        }

        .react-datepicker__day--outside-month {
            color: #a0aec0; /* gray-400 */
        }

        .react-datepicker__navigation--previous,
        .react-datepicker__navigation--next {
            top: 10px;
            border: none;
            background: none;
        }

        .react-datepicker__navigation-icon::before {
            border-color: #4f46e5; /* indigo-600 */
            border-width: 2px 2px 0 0;
            display: inline-block;
            width: 8px;
            height: 8px;
        }

        .react-datepicker__navigation--previous .react-datepicker__navigation-icon::before {
            transform: rotate(-135deg);
        }

        .react-datepicker__navigation--next .react-datepicker__navigation-icon::before {
            transform: rotate(45deg);
        }

        .react-datepicker__input-container {
            width: 100%; /* Ensure the input takes full width */
        }

        .react-datepicker__input-container input {
            width: 100%;
            padding: 0.75rem 1rem; /* p-3, px-4 */
            border: 1px solid #d1d5db; /* border-gray-300 */
            border-radius: 0.375rem; /* rounded-md */
            font-size: 1rem; /* text-base */
            color: #1f2937; /* gray-800 */
            transition: all 0.2s ease-in-out;
            text-align: center; /* Center the text in the input */
        }

        .react-datepicker__input-container input:focus {
            outline: none;
            border-color: #6366f1; /* indigo-500 */
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5); /* ring-indigo-500 */
        }

        /* Time picker specific styles */
        .react-datepicker__time-container {
            border-left: 1px solid #e2e8f0; /* border-gray-200 */
            width: 100%; /* Ensure time picker takes full width */
        }

        .react-datepicker__time {
            width: 100%; /* Ensure time picker content takes full width */
        }

        .react-datepicker__time-box {
            width: 100%; /* Ensure time box takes full width */
            display: flex; /* Use flexbox for centering */
            justify-content: center; /* Center time list */
        }

        .react-datepicker__time-list {
            padding-right: 0; /* Remove default padding */
            width: 100%; /* Ensure list takes full width */
            max-height: 200px; /* Limit height for scrollability */
            overflow-y: auto; /* Add scroll if needed */
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }

        /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
        .react-datepicker__time-list::-webkit-scrollbar {
            display: none;
        }

        .react-datepicker__time-list-item {
            padding: 0.5rem 0.75rem; /* py-2 px-3 */
            font-size: 0.9rem;
            color: #4a5568; /* gray-700 */
            text-align: center; /* Center time items */
        }
        `}
      </style>
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
            onClick={openConsultationModal}
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
            {/* Close Button */}
            <button
              onClick={closeConsultationModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Schedule Your Free Consultation</h2>
            <p className="text-gray-700 mb-6 text-center">
              {currentStep === 'date' ? 'Step 1: Select your preferred date:' : 'Step 2: Select your preferred time:'}
            </p>

            <div className="flex justify-center mb-6">
              {currentStep === 'date' && (
                <DatePicker
                  selected={selectedDateTime}
                  onChange={handleDateTimeChange}
                  dateFormat="PP" // Only date format
                  minDate={new Date()} // Prevents selecting past dates
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-center"
                  popperPlacement="bottom-end"
                  placeholderText="Click to select date"
                  inline // Display calendar directly for date selection
                />
              )}

              {currentStep === 'time' && (
                <DatePicker
                  selected={selectedDateTime}
                  onChange={handleDateTimeChange}
                  showTimeSelect
                  showTimeSelectOnly // Important: only show time picker
                  timeFormat="p" // Time format (e.g., 9:30 PM)
                  timeIntervals={15} // Example: 15-minute intervals
                  dateFormat="p" // Display only time in input
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-center"
                  popperPlacement="bottom-end"
                  placeholderText="Click to select time"
                  inline // Display time picker directly for time selection
                />
              )}
            </div>

            {selectedDateTime && (currentStep === 'time' || (currentStep === 'date' && selectedDateTime)) && (
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
              disabled={!selectedDateTime || currentStep === 'date'} // Disable button if no time is selected or still on date step
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
