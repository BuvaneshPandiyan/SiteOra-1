import React, { useState, useEffect } from 'react';
// Assuming your images are in src/assets/images/
import CarouselImage1 from '../assets/images/CarouselImage1.jpg';
import CarouselImage2 from '../assets/images/CarouselImage2.jpg';
import CarouselImage3 from '../assets/images/CarouselImage3.jpg';
import CarouselImage4 from '../assets/images/CarouselImage4.jpg';
import CarouselImage5 from '../assets/images/CarouselImage4.jpg';

const carouselImages = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;

    let phrases = ["Web Development", "E-Commerce", "UI/UX Design", "SEO Optimization", "Mobile Apps"];
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
        typingSpeed = 2000;
      } else if (isDeleting && typewriterElement.textContent === '') {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      setTimeout(typeWriter, typingSpeed);
    }
    const timeoutId = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const whatsappMessage = encodeURIComponent("Hello, I'm interested in crafting digital masterpieces like web development, e-commerce, UI/UX design, SEO optimization, and mobile apps. Can you tell me more?");
  const whatsappLink = `https://wa.me/7338816479?text=${whatsappMessage}`;

  return (
    // --- FIXED: Replaced h-screen with min-h-screen and removed negative margin. Added padding for navbar spacing. ---
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12">
      
      <div className="absolute inset-0 z-0">
        {carouselImages.map((src, index) => (
          <img
            key={index} // Use index for key as src might not be unique if an image is repeated
            src={src}
            alt="Dynamic background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* --- FIXED: Removed mt-16 as padding is now on the parent section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg">
              Crafting Digital <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Masterpieces</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto lg:mx-0">
              We transform ideas into stunning, high-performance websites that drive results and captivate audiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                Get Started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
               <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-100">
                How We Work
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </a>
            </div>
          </div>

          {/* --- FIXED: Hide this entire block on mobile to prevent unnecessary rendering --- */}
          <div className="relative hidden lg:flex justify-center lg:justify-end">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-400 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out w-full max-w-md">
              <div className="bg-gray-900/50 py-3 px-5 flex items-center rounded-t-3xl">
                <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
              </div>
              <div className="p-6">
                <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-indigo-600 px-5 py-3 text-white font-medium text-lg">Modern Web Interface</div>
                  <div className="p-5">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2 mb-6"></div>
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
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9); }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}

export default Hero;

