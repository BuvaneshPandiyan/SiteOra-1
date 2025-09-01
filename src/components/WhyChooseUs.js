import React from 'react';
import { useInView } from 'react-intersection-observer';

// --- UPDATED: Importing local images as requested ---
import BuiltForPerformanceImage from '../assets/images/BuiltForPerformanceImage.png';
import ATruePartnershipImage from '../assets/images/ATruePartnershipImage.jpg';

const points = [
  {
    title: 'Built For Performance',
    description: 'Slow websites lose customers. We are obsessed with speed and performance optimization. Your website will be built on modern technology to ensure it loads in the blink of an eye, keeping your visitors engaged and happy.',
    imageUrl: BuiltForPerformanceImage, // Using imported image
    align: 'left',
    takeaways: [
      { icon: 'fas fa-tachometer-alt', text: 'Sub-Second Load Times' },
      { icon: 'fas fa-mobile-alt', text: 'Flawless Mobile Experience' },
      { icon: 'fas fa-search-dollar', text: 'Optimized for SEO' }
    ]
  },
  {
    title: 'A True Partnership',
    description: 'We believe in building relationships, not just websites. We see ourselves as an extension of your team, dedicated to your success. From the first meeting to post-launch support, we are with you every step of the way.',
    imageUrl: ATruePartnershipImage, // Using imported image
    align: 'right',
    takeaways: [
        { icon: 'fas fa-comments', text: 'Transparent Communication' },
        { icon: 'fas fa-sync-alt', text: 'Iterative Feedback Process' },
        { icon: 'fas fa-hands-helping', text: 'Dedicated Long-Term Support' }
    ]
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Vision, Amplified</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We don't just build websites. We build digital experiences that drive growth.
          </p>
        </div>

        <div className="space-y-24">
          {points.map((point) => (
            <FeaturePoint key={point.title} {...point} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual feature points to handle animations
const FeaturePoint = ({ title, description, imageUrl, align, takeaways }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isRight = align === 'right';

  return (
    <div
      ref={ref}
      className="md:grid md:grid-cols-2 md:gap-10 md:gap-16 md:items-center"
    >
      {/* --- Image Column --- */}
      <div
        className={`relative transition-all duration-1000 ease-out ${isRight ? 'md:order-last' : ''} ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`absolute -inset-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl transition-transform duration-700 delay-300 ${isRight ? '-rotate-2' : 'rotate-2'} ${inView ? 'scale-100 rotate-0' : 'scale-90'}`}></div>
        <div className={`relative rounded-2xl shadow-2xl overflow-hidden transition-transform duration-700 group ${inView ? 'scale-100' : 'scale-90'}`}>
            <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-[28rem] md:h-96 transition-transform duration-500 group-hover:scale-105"
            />
        </div>
      </div>

      {/* --- Text Column (with different mobile/desktop styles) --- */}
      <div
        className={`
          relative bg-white p-8 -mt-24 mx-4 rounded-2xl shadow-2xl 
          md:bg-transparent md:shadow-none md:p-0 md:mt-0 md:mx-0
          transition-all duration-1000 ease-out 
          ${ inView ? 'opacity-100 transform-none' : `opacity-0 translate-y-10 md:translate-y-0 ${isRight ? 'md:translate-x-10' : 'md:-translate-x-10'}` }
        `}
      >
        <h3 className={`text-2xl md:text-3xl font-bold text-indigo-700 mb-4 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>{title}</h3>
        <p className={`text-base md:text-lg text-gray-700 leading-relaxed transition-all duration-500 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>{description}</p>
        <ul className="mt-6 space-y-4">
            {takeaways.map((item, index) => (
                <li 
                    key={item.text} 
                    className={`flex items-center transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{transitionDelay: `${300 + index * 150}ms`}}
                >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                        <i className={item.icon}></i>
                    </div>
                    <span className="ml-4 font-semibold text-gray-800">{item.text}</span>
                </li>
            ))}
        </ul>
      </div>
      
    </div>
  );
};

export default WhyChooseUs;

