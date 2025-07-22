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

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Crafting Digital <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Masterpieces</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We transform ideas into stunning, high-performance websites that drive results and captivate audiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="px-8 py-4 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Get Started <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="#portfolio" className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-100 hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center">
                View Our Work <i className="fas fa-eye ml-2"></i>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client" />
              </div>
              <div>
  <p class="text-sm text-gray-600">
    <span class="font-bold text-indigo-600">Innovating for the future,</span> one solution at a time.
  </p>
</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative floating">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-20 -right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-800 py-2 px-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400">www.yourwebsite.com</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                  <div className="bg-white rounded-lg overflow-hidden shadow">
                    <div className="bg-indigo-600 px-4 py-2 text-white font-medium">Modern Web Design</div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="h-16 bg-indigo-100 rounded"></div>
                        <div className="h-16 bg-indigo-100 rounded"></div>
                        <div className="h-16 bg-indigo-100 rounded"></div>
                      </div>
                      <div className="h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-medium typewriter-text"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;