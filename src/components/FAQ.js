import React, { useState, useEffect, useRef } from 'react';
// Import FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons you need
import {
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';


function FAQ() {
  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. A basic brochure website typically takes 2-4 weeks, while more complex e-commerce or custom web applications can take 8-12 weeks or longer. We'll provide a detailed timeline after our initial consultation.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "We leverage modern deployment platforms like Netlify and Vercel to provide you with lifetime free hosting for your website. This means you won't incur any monthly hosting fees from us. The small catch is that your domain name will initially include their branding, for example: yourwebsite.netlify.app or yourwebsite.vercel.app. This gives you a lifetime free domain name as well. Custom Domain Names: If you desire a unique, custom domain name (like yourwebsite.com), we can absolutely help you purchase it from third-party domain providers. Please note that while the Netlify/Vercel hosting remains free, a custom domain name will have an associated cost, which you'll need to renew, typically on a monthly or annual basis, depending on the provider and domain chosen.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All websites we create are fully responsive, meaning they automatically adapt to look and function perfectly on smartphones, tablets, and desktops. Mobile-friendliness is also crucial for SEO, which we optimize for in every project.",
    },
    {
      question: "Can I update the website myself after launch?",
      answer: "Yes, we can integrate a user-friendly Content Management System (CMS) like WordPress or build a custom admin panel that allows you to easily update content, add blog posts, upload images, and more. We'll also provide training and documentation.",
    },
    {
      question: "What if I need help after my website launches?",
      answer: "We offer various ongoing support and maintenance plans to suit your needs. From one-off fixes to comprehensive monthly maintenance packages that include updates, backups, security monitoring, and content updates - we've got you covered.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]); // Ref to hold references to each FAQ item for IntersectionObserver

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Scroll animation for FAQ items and section title
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each FAQ item
    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe section title elements
    document.querySelectorAll('.section-title-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      document.querySelectorAll('.section-title-animate').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);


  return (
    <section className="py-16 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium section-title-animate">FAQS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 section-title-animate">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto section-title-animate">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)} // Attach ref for scroll animation
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0" // Start hidden for scroll animation
              >
                <button
                  className="faq-toggle w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <FontAwesomeIcon
                    icon={openIndex === index ? faChevronUp : faChevronDown}
                    className="text-indigo-600 transition-transform duration-300"
                  />
                </button>
                {/* Smooth accordion content */}
                <div
                  className={`faq-content transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
                  } overflow-hidden px-6`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;