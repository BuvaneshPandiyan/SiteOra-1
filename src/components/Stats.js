import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheckCircle, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';

function Stats() {
  const statsData = [
    {
      value: "Innovation",
      label: "Our Core",
      icon: faLightbulb,
      note: "Continuously exploring cutting-edge technologies and creative methodologies to deliver groundbreaking, future-ready solutions."
    },
    {
      value: "Quality",
      label: "Our Standard",
      icon: faCheckCircle,
      note: "Upholding the highest standards in every phase of development for robust, reliable, and high-performing digital products."
    },
    {
      value: "Partnership",
      label: "Our Approach",
      icon: faUsers,
      note: "Fostering deep, transparent collaborations with clients to ensure shared vision, mutual success, and lasting relationships."
    },
    {
      value: "Growth",
      label: "Your Success",
      icon: faChartLine,
      note: "Empowering your growth through strategic insights, scalable solutions, and continuous optimization to achieve business milestones."
    },
  ];

  const sectionRef = useRef(null);
  const [sectionIsVisible, setSectionIsVisible] = useState(false);
  const [activeCardIndexForPopup, setActiveCardIndexForPopup] = useState(null); // Tracks which card's popup should be visible
  const cardRefs = useRef([]); // To hold refs for each stat card

  // Effect for main section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effect for individual card popups based on intersection
  useEffect(() => {
    const isMobile = window.innerWidth <= 767; // Define mobile breakpoint

    if (!isMobile) return; // Only apply this for mobile

    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.8, // Trigger when 80% of the item is visible
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index, 10);
        if (entry.isIntersecting) {
          // If the card is in view, set it as the active popup
          setActiveCardIndexForPopup(index);
        } else {
          // If the card leaves view, check if it was the active one and clear
          if (activeCardIndexForPopup === index) {
            setActiveCardIndexForPopup(null);
          }
        }
      });
    }, observerOptions);

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);
      }
    });

    // Clean up
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          cardObserver.unobserve(card);
        }
      });
    };
  }, [activeCardIndexForPopup]); // Re-run if active popup changes to update logic

  // Handle mouse enter/leave for desktop hover effect
  const handleMouseEnter = (index) => {
    // Only set hovered index if NOT on mobile (or if you want hover on desktop AND intersection on mobile)
    if (window.innerWidth > 767) {
      setActiveCardIndexForPopup(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 767) {
      setActiveCardIndexForPopup(null);
    }
  };


  return (
    <>
      {/* Integrated CSS Styles */}
      <style jsx>{`
        /* --- General Animations --- */
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(60px); /* More dramatic slide */
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flipInY {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(90deg) translateY(50px); /* Start flipped and slightly lower */
          }
          40% {
            transform: perspective(1000px) rotateY(-20deg) translateY(-10px); /* Overshoot for bounce */
          }
          60% {
            transform: perspective(1000px) rotateY(10deg) translateY(5px);
          }
          80% {
            transform: perspective(1000px) rotateY(-5deg) translateY(-2px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateY(0);
          }
        }

        @keyframes shimmerBackground {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes iconBounceOnce {
          0% { transform: translateY(0) scale(1); }
          20% { transform: translateY(-15px) scale(1.2); } /* Higher bounce, larger scale */
          40% { transform: translateY(0) scale(1); }
          60% { transform: translateY(-7px) scale(1.05); }
          80% { transform: translateY(0) scale(1); }
          100% { transform: translateY(0) scale(1); }
        }

        @keyframes iconPulseLoop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); } /* Subtle continuous pulse */
        }

        /* --- Section Background --- */
        .professional-bg {
          background-color: #f0f4f8; /* Slightly darker light gray for contrast */
          position: relative;
          overflow: hidden;
        }

        .professional-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* More dynamic gradient pattern */
          background-image: linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 75%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 100%),
                                  linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 75%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 100%);
          background-size: 60px 60px; /* Larger pattern for more impact */
          opacity: 0.6;
          z-index: 0;
          animation: ${sectionIsVisible ? 'shimmerBackground 40s linear infinite alternate' : 'none'}; /* Slower, continuous shimmer */
        }

        /* --- Stat Card Styles --- */
        .stat-card {
          background: linear-gradient(145deg, #ffffff, #f0f4f8); /* Subtle gradient for card background */
          border-radius: 1rem;
          padding: 2.5rem; /* Increased padding for more space */
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); /* Deeper initial shadow */
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease-out; /* Smoother, more bouncy transition */
          opacity: 0; /* Hidden initially */
          position: relative;
          z-index: 1;
          transform-style: preserve-3d; /* For 3D hover effect */
        }

        .stat-card.animate-in {
          animation: flipInY 1.2s ease-out forwards; /* Apply flip-in animation */
        }

        /* Use .active class for popup trigger on mobile */
        .stat-card:hover,
        .stat-card.active-popup { /* Add active-popup class here */
          transform: translateY(-15px) scale(1.03) rotateX(5deg) rotateY(5deg); /* Lift, scale, and more pronounced 3D tilt */
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35), 0 0 0 8px rgba(99, 102, 241, 0.3); /* Stronger shadow and a vibrant indigo glow */
        }

        /* --- Stat Value & Label --- */
        .stat-value {
          font-size: 3rem; /* Larger value */
          font-weight: 800;
          margin-bottom: 0.6rem;
          color: #1a202c;
          letter-spacing: -0.03em; /* Tighter letter spacing */
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* More prominent text shadow */
        }

        .stat-label {
          font-size: 1.25rem; /* Larger label */
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.08em; /* Wider letter spacing for uppercase */
          font-weight: 600; /* Semibold */
        }

        /* --- Stat Icon --- */
        .stat-icon {
          font-size: 3.5rem; /* Even larger icon */
          margin-bottom: 1.8rem; /* More space below icon */
          color: #6366f1; /* Primary indigo accent */
          transition: transform 0.4s ease-out;
          opacity: 0; /* Hidden initially */
        }

        .stat-card.animate-in .stat-icon {
          animation: iconBounceOnce 1s ease-out forwards, iconPulseLoop 2s 1s infinite ease-in-out; /* Single bounce then continuous pulse */
          opacity: 1;
        }

        /* Use .active-popup for mobile icon animation */
        .stat-card:hover .stat-icon,
        .stat-card.active-popup .stat-icon {
          transform: scale(1.3) rotate(15deg); /* Even more pronounced scale and rotation on hover */
        }

        /* --- Staggered Animation Delays for Cards --- */
        .stat-card:nth-child(1).animate-in { animation-delay: 0.1s; }
        .stat-card:nth-child(2).animate-in { animation-delay: 0.3s; } /* Increased delay for more distinct stagger */
        .stat-card:nth-child(3).animate-in { animation-delay: 0.5s; }
        .stat-card:nth-child(4).animate-in { animation-delay: 0.7s; }

        /* --- Main Title Animation Delay (also scroll-triggered) --- */
        .main-title-animation {
          opacity: 0;
        }
        .main-title-animation.animate-in {
          animation: fadeInSlideUp 1s ease-out forwards; /* Longer, more dramatic entrance */
          animation-delay: 0.1s;
        }

        .main-description-animation {
          opacity: 0;
        }
        .main-description-animation.animate-in {
          animation: fadeInSlideUp 1s ease-out forwards;
          animation-delay: 0.4s; /* Increased delay */
        }

        /* --- NEW & ENHANCED Hover Popup Styles --- */
        .hover-popup {
          position: absolute;
          top: -20px; /* Lift it higher to make room */
          left: 50%;
          transform: translateX(-50%) translateY(-100%); /* Center and lift */
          background: linear-gradient(135deg, #6366f1, #4f46e5); /* Gradient background for a premium look */
          color: #ffffff; /* White text for contrast */
          padding: 1.2rem 1.5rem; /* More padding for spacious feel */
          border-radius: 0.75rem; /* Slightly more rounded corners */
          width: 280px; /* Fixed width for better readability of longer text */
          max-width: 90vw; /* Ensure it's responsive on smaller screens */
          text-align: left; /* Align text to the left */
          font-size: 0.95rem; /* Slightly larger font */
          line-height: 1.5; /* Better line spacing */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 0 5px rgba(99, 102, 241, 0.2); /* Stronger shadow with a subtle glow */
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out; /* Smoother transition */
          z-index: 10; /* Ensure it's above other elements */
          pointer-events: none; /* Allows interaction with elements behind it if needed */
        }

        /* Animation for popup appearance */
        @keyframes popupEnter {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(-100%) scale(1);
          }
        }

        /* Apply popup styles to .active-popup and :hover */
        .stat-card:hover .hover-popup,
        .stat-card.active-popup .hover-popup { /* Add active-popup here */
          opacity: 1;
          visibility: visible;
          animation: popupEnter 0.4s forwards cubic-bezier(0.34, 1.56, 0.64, 1); /* Apply bounce-like entry */
        }

        .hover-popup::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px; /* Position the caret below the popup */
          transform: translateX(-50%);
          border-width: 8px; /* Larger caret */
          border-style: solid;
          border-color: #4f46e5 transparent transparent transparent; /* Match the darker gradient color */
        }

        /* Responsive adjustments for popup */
        @media (max-width: 640px) {
          .hover-popup {
            width: 90vw; /* Take up more width on small screens */
            left: 50%;
            transform: translateX(-50%) translateY(-100%);
          }
          .stat-card:hover .hover-popup,
          .stat-card.active-popup .hover-popup { /* Add active-popup here */
            transform: translateX(-50%) translateY(-110%); /* Adjust for smaller screens */
          }
        }
      `}</style>

      <section ref={sectionRef} className="py-20 professional-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight main-title-animation ${sectionIsVisible ? 'animate-in' : ''}`}>
              Our Guiding Principles
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto main-description-animation ${sectionIsVisible ? 'animate-in' : ''}`}>
              The foundations upon which we build exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {statsData.map((stat, index) => (
              <div
                key={index}
                // Assign ref and dataset index for Intersection Observer
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`stat-card ${sectionIsVisible ? 'animate-in' : ''} ${activeCardIndexForPopup === index ? 'active-popup' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)} // Desktop only hover
                onMouseLeave={handleMouseLeave} // Desktop only hover
              >
                {stat.icon && <FontAwesomeIcon icon={stat.icon} className="stat-icon" />}
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>

                {/* Always render the popup for position, control visibility with CSS */}
                <div className="hover-popup">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
