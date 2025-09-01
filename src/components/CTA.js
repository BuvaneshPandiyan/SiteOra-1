import React, { useEffect, useRef, useState } from 'react';

function CTA() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the section container
  const [showContactOptions, setShowContactOptions] = useState(false);
  const phoneNumber = '7338816479';
  const customWhatsAppMessage = "Hello, I'm interested in your services and would like to know more!";

  // --- Particle Animation Effect ---
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasDimensions = () => {
      // Use section dimensions instead of window
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    setCanvasDimensions();


    let particlesArray = [];
    
    const mouse = {
        x: null,
        y: null,
        radius: 150
    }
    
    const mouseMoveHandler = (event) => {
        const rect = section.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', mouseMoveHandler);

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size){
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10;
                }
            }

            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        const numberOfParticles = Math.floor(canvas.width / 20);
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 0.5;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .4) - .2;
            let directionY = (Math.random() * .4) - .2;
            let color = 'rgba(199, 210, 254, 0.8)';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        ctx.clearRect(0,0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }
    
    const handleResize = () => {
        setCanvasDimensions();
        init();
    };
    
    window.addEventListener('resize', handleResize);
    
    init();
    animate();
    
    return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', mouseMoveHandler);
    }

  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowContactOptions(false);
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(customWhatsAppMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowContactOptions(false);
  };

  return (
    <>
      <section
        id="cta-section"
        ref={sectionRef}
        className="py-40 md:py-56 bg-gray-900 text-white relative flex items-center justify-center overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.3),transparent_70%)] z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animated-shine bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent">
                    Ready to Elevate Your Online Presence?
                </h2>
                <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10 font-light">
                    Let's create something truly <span className="font-semibold text-white">amazing</span> together. Get in touch for a free consultation and quote.
                </p>
                <button
                    onClick={() => setShowContactOptions(true)}
                    className="cta-button"
                >
                    <span className="cta-button-text">Start Your Project Today</span>
                </button>
            </div>
        </div>
      </section>

      {showContactOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 modal-enter"
             onClick={() => setShowContactOptions(false)}>
          <div className="bg-gray-800 border border-purple-400/30 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative modal-content-enter"
               onClick={e => e.stopPropagation()}>
            <h3 className="text-3xl font-extrabold text-white mb-6">How would you like to connect?</h3>
            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="w-full py-4 px-6 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <span className="mr-2">📞</span> Call Us
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 px-6 bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <span className="mr-2">💬</span> WhatsApp Us
              </button>
            </div>
            <button
              onClick={() => setShowContactOptions(false)}
              className="mt-8 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              No, thanks
            </button>
          </div>
        </div>
      )}

       <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animated-shine {
          background-size: 200% auto;
          animation: shine 8s linear infinite;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            border: 2px solid transparent;
            border-radius: 9999px;
            font-weight: 700;
            color: #fff;
            background-color: rgba(124, 58, 237, 0.8);
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
        }
        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: all 0.5s;
        }
        .cta-button:hover::before {
            left: 100%;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInUp { from { transform: translateY(50px) scale(0.95); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
        .modal-enter { animation: fadeIn 0.3s forwards; }
        .modal-content-enter { animation: slideInUp 0.4s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94); }
      `}</style>
    </>
  );
}

export default CTA;

