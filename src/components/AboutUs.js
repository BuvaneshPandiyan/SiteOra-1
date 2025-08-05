import React, { useState, useEffect } from 'react';
import 'animate.css'; // Ensure animate.css is imported
import { useInView } from 'react-intersection-observer'; // Import useInView hook
// IMPORTANT: Please adjust the paths below if your image files are located elsewhere.
// Import carousel images
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png';

function About() {
  // Array of carousel images
  const carouselImages = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual navigation for carousel
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  // Hook for the header section
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hook for the vision section
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hook for the team section
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <style>
        {`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 400px; /* Adjust height as needed for content */
          perspective: 1000px; /* This creates the 3D effect */
          border-radius: 1.5rem; /* Match Tailwind's rounded-3xl */
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s; /* Smooth transition for the flip */
          transform-style: preserve-3d; /* Keep children in 3D space */
          border-radius: inherit;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg); /* Flip on Y-axis on hover */
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Hide back of the element when facing away */
          backface-visibility: hidden; /* Standard property */
          border-radius: inherit; /* Inherit border-radius from parent */
          display: flex; /* Use flexbox for centering content */
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem; /* Consistent padding */
          box-sizing: border-box; /* Include padding in element's total width and height */
        }

        .flip-card-front {
          background-color: #ffffff; /* White background for the front */
          color: #1f2937; /* Dark gray text */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Tailwind shadow-xl */
        }

        .flip-card-back {
          background-color: #6d28d9; /* Deep purple background for the back */
          color: #ffffff; /* White text for contrast */
          transform: rotateY(180deg); /* Initially rotated to be hidden */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Tailwind shadow-xl */
        }

        /* Carousel specific styles */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 400px; /* Fixed height for carousel */
          overflow: hidden;
          border-radius: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-image.active {
          opacity: 1;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 1rem;
          cursor: pointer;
          z-index: 10;
          border-radius: 9999px; /* Full rounded */
          transition: background-color 0.3s ease;
        }

        .carousel-button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .carousel-button.left {
          left: 1rem;
        }

        .carousel-button.right {
          right: 1rem;
        }

        .carousel-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .carousel-dot.active {
          background-color: white;
        }
        `}
      </style>

      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={`text-center mb-16 ${headerInView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
          >
            <span className="text-purple-700 font-extrabold text-lg tracking-wide uppercase">OUR STARTUP</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
              Innovating the Future, <span className="text-indigo-600">One Solution at a Time</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
              At SiteOra, we are not just building web applications; we are crafting digital experiences that empower and inspire. Our passion drives us to turn groundbreaking ideas into tangible realities.
            </p>
          </div>

          {/* Vision and What Drives Us Section */}
          <div
            ref={visionRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${visionInView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
          >
            <div className={`order-2 md:order-1 ${visionInView ? 'animate__animated animate__fadeInLeft' : ''}`}>
              <div className="carousel-container">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Office Image ${index + 1}`}
                    className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
                <button onClick={goToPrevImage} className="carousel-button left">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={goToNextImage} className="carousel-button right">
                  <i className="fas fa-chevron-right"></i>
                </button>
                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <span
                      key={index}
                      className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <div className={`order-1 md:order-2 ${visionInView ? 'animate__animated animate__fadeInRight' : ''}`}>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Our Vision & What Drives Us</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our vision is simple yet ambitious: to emerge as a trailblazer in the digital realm, providing intuitive and robust online tools that benefit both individuals and enterprises. We are relentless in our pursuit of innovation and committed to continuous improvement.
              </p>
              <ul className="space-y-4 text-gray-800 text-lg">
                <li className={`flex items-center ${visionInView ? 'animate__animated animate__fadeInUp animate__delay-0-5s' : ''}`}>
                  <i className="fas fa-rocket text-purple-600 text-2xl mr-3 transform rotate-12"></i>
                  <span>Innovation: We are always exploring cutting-edge technologies and pushing creative boundaries.</span>
                </li>
                <li className={`flex items-center ${visionInView ? 'animate__animated animate__fadeInUp animate__delay-0-7s' : ''}`}>
                  <i className="fas fa-puzzle-piece text-indigo-600 text-2xl mr-3 transform -rotate-12"></i>
                  <span>Problem Solving: We excel at devising ingenious solutions for the toughest challenges.</span>
                </li>
                <li className={`flex items-center ${visionInView ? 'animate__animated animate__fadeInUp animate__delay-0-9s' : ''}`}>
                  <i className="fas fa-users-crown text-purple-600 text-2xl mr-3"></i>
                  <span>Collaboration: We believe in the synergy of teamwork and fostering open communication.</span>
                </li>
                <li className={`flex items-center ${visionInView ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
                  <i className="fas fa-chart-line text-indigo-600 text-2xl mr-3"></i>
                  <span>Growth: Our focus is on perpetual learning and expanding our capabilities.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div
            ref={teamRef}
            className={`mt-24 text-center ${teamInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
          >
            <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Our Core Team</h3>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Meet the brilliant minds and passionate hearts driving SiteOra forward. Our diverse skills and collective experiences fuel our innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Team Member 1 - Buvaneshwar */}
              <div className={`flip-card ${teamInView ? 'animate__animated animate__zoomIn animate__delay-0-5s' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front p-8 flex flex-col items-center text-center">
                    <i className="fas fa-cogs text-7xl text-purple-500 mb-6"></i>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Buvaneshwar</h4>
                    <p className="text-indigo-600 font-semibold mb-3 text-lg">Lead Developer</p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      As our architectural visionary, he translates complex requirements into elegant, high-performance code, driving our platform's stability and scalability.
                    </p>
                  </div>
                  <div className="flip-card-back p-8 flex flex-col items-center text-center">
                    <h4 className="text-2xl font-bold mb-2">Buvaneshwar</h4>
                    <p className="text-lg mb-4">"Innovating with passion and precision."</p>
                    <p className="text-base leading-relaxed">
                      With deep expertise in full-stack development and cloud infrastructure, our lead dev ensures our technical foundation is future-proof and mentors the team to foster a culture of excellence.
                    </p>
                    <div className="flex space-x-4 mt-5">
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-github"></i></a>
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Monika */}
              <div className={`flip-card ${teamInView ? 'animate__animated animate__zoomIn animate__delay-0-7s' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front p-8 flex flex-col items-center text-center">
                    <i className="fas fa-palette text-7xl text-indigo-500 mb-6"></i>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Monika</h4>
                    <p className="text-purple-600 font-semibold mb-3 text-lg">Creative Designer</p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      The artist behind our brand's identity, meticulously crafting every pixel to create a seamless, intuitive, and visually stunning user experience that captivates and delights.
                    </p>
                  </div>
                  <div className="flip-card-back p-8 flex flex-col items-center text-center">
                    <h4 className="text-2xl font-bold mb-2">Monika</h4>
                    <p className="text-lg mb-4">"Design is not just what it looks like. It's how it works."</p>
                    <p className="text-base leading-relaxed">
                      Blending user-centric research with creative flair results in designs that are not only beautiful but also highly functional. Great design solves problems and tells a compelling story.
                    </p>
                    <div className="flex space-x-4 mt-5">
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-dribbble"></i></a>
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Ayesha */}
              <div className={`flip-card ${teamInView ? 'animate__animated animate__zoomIn animate__delay-0-9s' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front p-8 flex flex-col items-center text-center">
                    <i className="fas fa-rocket text-7xl text-purple-500 mb-6"></i>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Ayesha</h4>
                    <p className="text-indigo-600 font-semibold mb-3 text-lg">Strategy & Growth</p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Our strategic compass, navigating the market landscape to steer SiteOra towards new horizons. Her vision and business acumen are key to our sustained growth.
                    </p>
                  </div>
                  <div className="flip-card-back p-8 flex flex-col items-center text-center">
                    <h4 className="text-2xl font-bold mb-2">Ayesha</h4>
                    <p className="text-lg mb-4">"Growth is the result of forces working together."</p>
                    <p className="text-base leading-relaxed">
                      Excels at forging key partnerships and identifying emerging trends. This leadership ensures our innovative solutions meet market needs and drive our mission forward.
                    </p>
                    <div className="flex space-x-4 mt-5">
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-twitter"></i></a>
                       <a href="#" className="text-white hover:text-purple-200 text-2xl transform hover:scale-125 transition-transform duration-300"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
