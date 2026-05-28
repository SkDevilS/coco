import { useState, useEffect, useCallback } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Discover Your',
      highlight: 'Signature Scent',
      subtitle: 'Immerse yourself in our exclusive collection of luxury fragrances, crafted to leave a lasting impression.',
      image: '/perfume/6.jpeg',
      cta: 'Shop Perfumes',
    },
    {
      id: 2,
      title: 'Elegance In',
      highlight: 'Every Drop',
      subtitle: 'Experience the perfect blend of floral notes and woody undertones. A timeless fragrance for the modern aesthetic.',
      image: '/perfume/1.jpeg',
      cta: 'Discover Scents',
    },
    {
      id: 3,
      title: 'Aura Of',
      highlight: 'Sophistication',
      subtitle: 'Elevate your daily routine with premium luxury perfumes. Long-lasting, captivating, and uniquely yours.',
      image: '/perfume/9.jpeg',
      cta: 'Explore Fragrances',
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleScrollToProducts = (e) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative h-[85vh] min-h-[600px] bg-stone-950 overflow-hidden">
      {/* Background Slider */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-stone-900/40 z-10" /> {/* Dark overlay */}
          <img
            src={s.image}
            alt={s.title}
            className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Decorative ambient background blobs */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-fuchsia-900/30 rounded-full blur-[120px] pointer-events-none z-10 -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-lavender-900/30 rounded-full blur-[120px] pointer-events-none z-10 translate-y-1/2 -translate-x-1/3 mix-blend-screen" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
          <span key={`tag-${currentSlide}`} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-lavender-400/30 bg-lavender-500/10 text-lavender-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm animate-fadeInUp">
            {slide.tag}
          </span>
          
          <h1 key={`title-${currentSlide}`} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white mb-6 leading-[1.1] animate-fadeInUp animation-delay-200">
            {slide.title} <br className="hidden md:block" />
            <span className="text-lavender-400 italic font-light">{slide.highlight}</span>
          </h1>
          
          <p key={`sub-${currentSlide}`} className="text-stone-200 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10 animate-fadeInUp animation-delay-400">
            {slide.subtitle}
          </p>
          
          <div key={`cta-${currentSlide}`} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 animate-fadeInUp animation-delay-600">
            <button
              onClick={handleScrollToProducts}
              className="px-10 py-4 bg-lavender-600 hover:bg-lavender-500 text-white rounded-full font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] w-full sm:w-auto"
            >
              {slide.cta}
            </button>
            <button
              onClick={handleScrollToProducts}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium tracking-wide transition-all duration-300 backdrop-blur-md w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-6 right-6 container mx-auto flex items-center justify-between z-30">
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-lavender-400' : 'w-4 bg-white/30 hover:bg-white/60'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden sm:flex gap-4">
            <div className="text-right text-white/60 text-sm font-light">
              <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes zoomEffect {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>
    </section>
  );
};

export default HeroSection;
