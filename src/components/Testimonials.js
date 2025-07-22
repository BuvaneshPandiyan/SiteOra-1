import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Updated import for react-spring v9+
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform } from 'framer-motion'; // For advanced scroll effects, if needed later, but sticking to react-spring for now.

function Testimonials() {
  const testimonialsData = []; // Intentionally empty as per your request

  // useInView hook to trigger animations when the section enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters view
    threshold: 0.2,    // Triggers when 20% of the section is visible
  });

  // Animation for the main heading and sub-text
  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Animations for each line of the funny message
  const line1Animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 500, // Starts after header
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const line2Animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 700, // Staggered delay for the second line
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Parallax background animation (simple version based on scroll position within the element)
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Calculate scroll progress within the element's visible range
      // This is a simplified approach. For more complex parallax,
      // react-spring's useScroll or framer-motion might be better.
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const elementBottom = rect.bottom + scrollY;
      const viewportHeight = window.innerHeight;

      // When the element is in view, calculate how far through it we are
      if (scrollY + viewportHeight > elementTop && scrollY < elementBottom) {
        const progress = (scrollY + viewportHeight - elementTop) / (elementBottom - elementTop + viewportHeight);
        setOffset({ offset: progress });
      } else {
        setOffset({ offset: scrollY > elementBottom ? 1 : 0 }); // Reset or set to full for elements not in view
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = offset.to(o => o * 50 - 25); // Moves background 50px total, centered

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Parallax background element */}
      <animated.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"
        style={{ transform: translateY.to(y => `translateY(${y}px)`) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated header section */}
        <animated.div style={headerAnimation} className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses we've helped transform.
          </p>
        </animated.div>

        {testimonialsData.length === 0 ? (
          // Animated div for the funny message when no testimonials exist
          <div className="text-center py-16 px-6 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <animated.p style={line1Animation} className="text-2xl text-gray-800 font-extrabold mb-4">
              We're so new, our testimonials are still in beta! 😉
            </animated.p>
            <animated.p style={line2Animation} className="text-lg text-gray-600">
              Check back soon, we're busy making clients happy!
            </animated.p>
          </div>
        ) : (
          // This part would render if testimonialsData is NOT empty
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <animated.div // You'd add a useSpring animation here for each card
                key={index}
                className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star mr-1"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center mt-6">
                  <img className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-indigo-200" src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-indigo-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;