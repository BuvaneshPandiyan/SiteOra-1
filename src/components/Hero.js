import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    // Typewriter effect logic
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;

    let phrases = [
      "Web Development",
      "E-Commerce",
      "UI/UX Design",
      "SEO Optimization",
      "Mobile Apps"
    ];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function typeWriter() {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        typingSpeed = 100;
      } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentLetterIndex + 1);
        currentLetterIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && typewriterElement.textContent === currentPhrase) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of phrase
      } else if (isDeleting && typewriterElement.textContent === '') {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }

      setTimeout(typeWriter, typingSpeed);
    }

    // Start the typewriter effect after a delay
    const timeoutId = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []); // Empty dependency array means this runs once on mount

  // WhatsApp link with pre-filled message
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in crafting digital masterpieces like web development, e-commerce, UI/UX design, SEO optimization, and mobile apps. Can you tell me more?");
  const whatsappLink = `https://wa.me/7338816479?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text Content and Buttons */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 drop-shadow-sm">
              Crafting Digital <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Masterpieces</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg mx-auto lg:mx-0">
              We transform ideas into stunning, high-performance websites that drive results and captivate audiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a
                href={whatsappLink} // Updated href to WhatsApp link
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl border border-indigo-200 hover:bg-indigo-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-100"
              >
                How We Work
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background blobs for visual interest */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-20 -right-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>

            {/* Mockup Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out w-full max-w-md">
              {/* Browser Header */}
              <div className="bg-gray-800 py-3 px-5 flex items-center rounded-t-3xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400 font-mono">yourwebsite.com</div>
              </div>
              {/* Mockup Content */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-indigo-600 px-5 py-3 text-white font-medium text-lg">Modern Web Interface</div>
                  <div className="p-5">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="grid grid-cols-3 gap-5 mb-6">
                      <div className="h-20 bg-indigo-100 rounded-lg shadow-sm"></div>
                      <div className="h-20 bg-indigo-100 rounded-lg shadow-sm"></div>
                      <div className="h-20 bg-indigo-100 rounded-lg shadow-sm"></div>
                    </div>
                    <div className="h-28 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center border border-indigo-200">
                      <span className="text-indigo-700 font-bold text-xl typewriter-text"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
