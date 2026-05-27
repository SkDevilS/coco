import { useState, useEffect, useCallback } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'New Collection',
      title: 'Discover Your',
      highlight: 'Signature Scent',
      subtitle: 'Immerse yourself in our exclusive collection of luxury fragrances, crafted to leave a lasting impression.',
      cta: 'Shop Perfumes',
      ctaSecondary: 'Explore Collection',
      image: '/perfume/6.jpeg',
      accent: 'from-amber-500 to-rose-400',
      badge1: { text: '50% Off', sub: 'This Week' },
      badge2: { text: '500+', sub: 'Products' },
      stat: '10K+ Happy Customers',
    },
    {
      id: 2,
      tag: 'Bestseller',
      title: 'Elegance In',
      highlight: 'Every Drop',
      subtitle: 'Experience the perfect blend of floral notes and woody undertones. A timeless fragrance for the modern aesthetic.',
      cta: 'Discover Scents',
      ctaSecondary: 'View Bestsellers',
      image: '/perfume/1.jpeg',
      accent: 'from-rose-500 to-pink-500',
      badge1: { text: 'Free Ship', sub: 'Above ₹500' },
      badge2: { text: '50+', sub: 'Brands' },
      stat: 'Clean & Aesthetic',
    },
    {
      id: 3,
      tag: 'Trending Now',
      title: 'Aura Of',
      highlight: 'Sophistication',
      subtitle: 'Elevate your daily routine with premium luxury perfumes. Long-lasting, captivating, and uniquely yours.',
      cta: 'Explore Fragrances',
      ctaSecondary: 'Shop All Scents',
      image: '/perfume/9.jpeg',
      accent: 'from-orange-400 to-amber-500',
      badge1: { text: 'COD', sub: 'Available' },
      badge2: { text: '7-Day', sub: 'Returns' },
      stat: 'Natural & Pure',
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    // Slower carousel speed (8 seconds)
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleScrollToCategories = (e) => {
    e.preventDefault();
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] lg:h-[92vh] bg-[#FDFBF7] overflow-hidden flex items-center py-16 lg:py-0">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br ${slide.accent} opacity-10 rounded-full blur-3xl transition-all duration-1000`} />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl ${slide.accent} opacity-5 rounded-full blur-3xl transition-all duration-1000`} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{backgroundImage: 'radial-gradient(circle, #d6d3d1 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-stone-900 space-y-5 md:space-y-6 text-center lg:text-left">
            {/* Tag badge */}
            <div
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-stone-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full animate-fadeInUp shadow-sm text-stone-800"
            >
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accent} animate-pulse`} />
              {slide.tag}
            </div>

            {/* Headline */}
            <div key={`title-${currentSlide}`} className="animate-fadeInUp animation-delay-200">
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                {slide.title}
                <br />
                <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent italic`}>
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              key={`sub-${currentSlide}`}
              className="text-stone-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fadeInUp animation-delay-400 font-light"
            >
              {slide.subtitle}
            </p>

            {/* Stat strip */}
            <div
              key={`stat-${currentSlide}`}
              className="flex items-center justify-center lg:justify-start gap-4 animate-fadeInUp animation-delay-400"
            >
              <div className="flex -space-x-3">
                {['bg-stone-100','bg-amber-100','bg-rose-100'].map((c,i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-xs text-stone-800 font-serif italic shadow-sm`}>
                    {['C','V','+'][i]}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-500 font-semibold tracking-widest uppercase">{slide.stat}</p>
            </div>

            {/* CTA Buttons */}
            <div
              key={`cta-${currentSlide}`}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5 pt-4 animate-fadeInUp animation-delay-600"
            >
              <button
                onClick={handleScrollToCategories}
                className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${slide.accent} text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-1 transition-all duration-300 tracking-wide`}
              >
                {slide.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={handleScrollToCategories}
                className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md border border-stone-200 text-stone-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                {slide.ctaSecondary}
              </button>
            </div>

            {/* Floating badges — bottom row */}
            <div
              key={`badges-${currentSlide}`}
              className="flex justify-center lg:justify-start gap-3 sm:gap-5 pt-6 animate-fadeInUp animation-delay-600"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-stone-100 rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-center hover:bg-white transition-colors shadow-lg shadow-stone-200/50">
                <p className="text-xl sm:text-2xl font-playfair font-bold text-stone-900">{slide.badge1.text}</p>
                <p className="text-[10px] sm:text-xs text-stone-500 font-semibold tracking-wider uppercase mt-1">{slide.badge1.sub}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-stone-100 rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-center hover:bg-white transition-colors shadow-lg shadow-stone-200/50">
                <p className="text-xl sm:text-2xl font-playfair font-bold text-stone-900">{slide.badge2.text}</p>
                <p className="text-[10px] sm:text-xs text-stone-500 font-semibold tracking-wider uppercase mt-1">{slide.badge2.sub}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-stone-100 rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-center hidden sm:block hover:bg-white transition-colors shadow-lg shadow-stone-200/50">
                <p className="text-xl sm:text-2xl font-playfair font-bold text-amber-500">✓</p>
                <p className="text-[10px] sm:text-xs text-stone-500 font-semibold tracking-wider uppercase mt-1">Genuine</p>
              </div>
            </div>
          </div>

          {/* Product Image with floating elements */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center w-full">
            {/* Glow ring */}
            <div className={`absolute w-[100%] h-[100%] bg-gradient-to-br ${slide.accent} rounded-full opacity-10 blur-3xl`} />

            {/* Main image container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-[550px]">
              <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-300/50 border border-stone-100 aspect-[4/5] sm:aspect-square group bg-white">
                <img
                  key={`img-${currentSlide}`}
                  src={slide.image}
                  alt={slide.highlight}
                  className="w-full h-full object-cover object-center animate-fadeIn group-hover:scale-105 transition-transform duration-[1.5s] ease-out mix-blend-multiply"
                  style={{ transition: 'opacity 0.7s ease' }}
                />
              </div>

              {/* Floating card — top right (hidden on tiny screens) */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-white/90 backdrop-blur-xl border border-stone-100 rounded-2xl shadow-xl shadow-stone-200/50 px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 animate-fadeIn z-20">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${slide.accent} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-inner`}>
                  ✨
                </div>
                <div>
                  <p className="font-playfair font-bold text-stone-900 text-sm sm:text-base">Top Rated</p>
                  <div className="flex text-amber-500 text-xs sm:text-sm mt-0.5">★★★★★</div>
                </div>
              </div>

              {/* Floating card — bottom left (hidden on tiny screens) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white/90 backdrop-blur-xl border border-stone-100 rounded-2xl shadow-xl shadow-stone-200/50 px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 animate-fadeIn z-20">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${slide.accent} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-inner`}>
                  ✧
                </div>
                <div>
                  <p className="font-playfair font-bold text-stone-900 text-sm sm:text-base">Premium</p>
                  <p className="text-stone-500 text-xs sm:text-sm mt-0.5 tracking-wide uppercase font-semibold">Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual controls removed per request */}
      </div>
    </section>
  );
};

export default HeroSection;
