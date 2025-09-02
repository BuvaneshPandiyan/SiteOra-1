import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your local images
import CarouselImage1 from '../assets/images/CarouselImage1.jpg';
import CarouselImage2 from '../assets/images/CarouselImage2.jpg';
import CarouselImage3 from '../assets/images/CarouselImage3.jpg';
import CarouselImage4 from '../assets/images/CarouselImage4.jpg';
import CarouselImage5 from '../assets/images/CarouselImage4.jpg'; // Using the same image as #4 per original code

// Your custom styles for this component
import './Hero.css';

// WhatsApp link generation
const whatsappMessage = encodeURIComponent("Hello, I'm interested in crafting digital masterpieces like web development, e-commerce, UI/UX design, SEO optimization, and mobile apps. Can you tell me more?");
const whatsappLink = `https://wa.me/7338816479?text=${whatsappMessage}`;

const slidesData = [
  {
    imageUrl: CarouselImage1,
  },
  {
    imageUrl: CarouselImage2,
  },
  {
    imageUrl: CarouselImage3,
  },
  {
    imageUrl: CarouselImage4,
  },
  {
    imageUrl: CarouselImage5,
  }
];

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        effect="slide"
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">

            <div
              className="hero-slide__image"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            ></div>

            <div className="hero-slide__overlay"></div>

            <div className="hero-slide__content">
              <div className="container mx-auto px-4 text-center lg:text-left">
                <div className="max-w-3xl mx-auto lg:mx-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg">
                        Crafting Digital <span className="masterpiece-gradient">Masterpieces</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10">
                        We transform ideas into stunning, high-performance websites that drive results and captivate audiences.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button indigo-gradient-button flex items-center justify-center px-8 py-4 rounded-xl font-semibold">
                            Get Started
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        <a href="#portfolio" className="cta-button glass-button flex items-center justify-center px-8 py-4 rounded-xl font-semibold">
                            How We Work
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
