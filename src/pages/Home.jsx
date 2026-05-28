import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import ProductGrid from '../components/ProductGrid';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import SEO from '../components/SEO';

/* ─── Offer Banner ───────────────────────────────────────────────────── */
const OfferBanner = () => (
  <section className="py-16 bg-stone-50 relative overflow-hidden z-0">
    {/* Decorative background blobs to make it look premium */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-lavender-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none" />
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none" style={{ animationDelay: '2s' }} />
    <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <svg className="w-7 h-7 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM12 3v4" />
              </svg>
            ),
            title: 'Makeup Sale',
            sub: 'Exclusive deals up to 40% off',
            cta: 'Shop Collection',
            textGradient: 'from-fuchsia-700 to-pink-500',
            hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.3)]',
            iconBg: 'bg-white',
            cardBg: 'bg-gradient-to-b from-fuchsia-50/80 to-white',
          },
          {
            icon: (
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
            title: 'Skincare Fest',
            sub: 'Buy 2 Get 1 Free on all routines',
            cta: 'Discover More',
            textGradient: 'from-purple-700 to-fuchsia-500',
            hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]',
            iconBg: 'bg-white',
            cardBg: 'bg-gradient-to-b from-purple-50/80 to-white',
          },
          {
            icon: (
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 4v16M15 4v8M11 4v8M7 4v8M3 4v16h16" />
              </svg>
            ),
            title: 'Haircare Deals',
            sub: 'Complimentary shipping today',
            cta: 'View Offers',
            textGradient: 'from-indigo-700 to-purple-500',
            hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)]',
            iconBg: 'bg-white',
            cardBg: 'bg-gradient-to-b from-indigo-50/80 to-white',
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`relative ${card.cardBg} rounded-[2rem] p-6 md:p-7 overflow-hidden group hover:shadow-2xl ${card.hoverShadow} transition-all duration-500 hover:-translate-y-2 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm`}
          >
            {/* Background icon watermark */}
            <div className="absolute -right-6 -bottom-6 text-black opacity-[0.02] group-hover:opacity-[0.04] group-hover:scale-110 transition-all duration-700 select-none w-40 h-40 pointer-events-none">
              {card.icon}
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className={`${card.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {card.icon}
              </div>
              
              <h3 className={`text-2xl font-playfair font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${card.textGradient}`}>
                {card.title}
              </h3>
              
              <p className="text-stone-500 text-sm mb-6 font-light leading-relaxed">
                {card.sub}
              </p>
              
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 bg-stone-900 text-white shadow-md px-5 py-2.5 rounded-full text-xs font-semibold group-hover:bg-lavender-600 transition-colors">
                  {card.cta}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section Header ──────────────────────────────────────────────────── */
const SectionHeader = ({ tag, title, highlight, subtitle }) => (
  <div className="text-center mb-10 md:mb-14">
    {tag && (
      <span className="inline-flex items-center gap-2 bg-white text-lavender-600 border border-lavender-100 shadow-sm text-xs font-bold px-5 py-1.5 rounded-full mb-5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 animate-pulse"></span>
        {tag}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone-900 mb-4">
      {title}{' '}
      {highlight && (
        <span className="text-lavender-600 italic font-light">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">{subtitle}</p>}
  </div>
);

/* ─── Newsletter ──────────────────────────────────────────────────────── */
const Newsletter = () => (
  <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5"
      style={{backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lavender-500 opacity-10 rounded-full blur-3xl animate-blob" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
    <div className="container mx-auto px-4 relative z-10 text-center text-white">
      <span className="inline-block bg-white/5 border border-white/10 text-sm font-light tracking-widest uppercase px-6 py-2 rounded-full mb-8">
        Stay in the Loop
      </span>
      <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 max-w-3xl mx-auto leading-tight">
        Get Exclusive <span className="text-lavender-400 italic drop-shadow-[0_0_20px_rgba(167,139,250,0.4)]">Beauty Deals</span> First
      </h2>
      <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light">
        Subscribe and be the first to know about new arrivals, flash sales, and beauty tips from Coco Ventures.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-lavender-400 focus:bg-white/10 transition-all backdrop-blur-sm"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-lavender-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-lavender-500/20 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap bg-[length:200%_auto] hover:animate-gradientPan"
        >
          Subscribe Free
        </button>
      </form>
      <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);

/* ─── Main Home Component ────────────────────────────────────────────── */
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products', {
          params: { is_featured: true, per_page: 8 },
        });
        setProducts(response.data?.products || []);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <SEO
        title="Coco Ventures - Premium Cosmetics & Beauty Products"
        description="Shop premium cosmetics and beauty products at Coco Ventures Private Limited. Trusted distributor of skincare, makeup, haircare and personal care brands."
        keywords="cosmetics online, beauty products, skincare, makeup, haircare, personal care, Coco Ventures"
        url="/"
      />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. BRAND PHILOSOPHY - SLEEK LIGHT ANIMATED LAYOUT */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lavender-50 via-white to-purple-50 overflow-hidden text-stone-900">
        
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lavender-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(139,92,246,0.15)] border border-white">
                <img 
                  src="/perfume/5.jpeg" 
                  alt="Essence of Beauty" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-lavender-900/5 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Floating animated badge (contained, won't break mobile bounds) */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white animate-fadeInUp shadow-xl z-20">
                  <p className="font-playfair text-lg sm:text-xl font-bold text-stone-900 mb-1">Crafted with Passion</p>
                  <div className="flex gap-1 text-lavender-500 text-xs sm:text-sm">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left py-8">
              <div className="overflow-hidden mb-6">
                <span className="inline-block text-lavender-600 font-semibold tracking-[0.3em] uppercase text-xs animate-fadeInUp">
                  — Our Philosophy
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-stone-900 mb-8 leading-[1.15] animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                The Essence of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-purple-500 italic font-light">Pure Beauty</span>
              </h2>
              
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light mb-10 max-w-lg mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                At Coco Ventures, we believe that beauty is an art form rooted in nature and elevated by science. Our curated collections are designed to nourish your skin, inspire your senses, and bring out your most radiant, confident self.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                <Link to="/about" className="px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-lavender-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300 tracking-[0.1em] text-sm font-semibold w-full sm:w-auto border border-transparent inline-block text-center">
                  Discover Our Story
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CATEGORIES */}
      <FeaturedCategories />

      {/* 4. OFFER BANNERS */}
      <OfferBanner />

      {/* 5. FEATURED PRODUCTS */}
      <section id="products" className="py-14 md:py-20 bg-lavender-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            tag="✧ Signature Selection"
            title="Curated"
            highlight="Elegance"
            subtitle="Explore our most sought-after beauty essentials, meticulously chosen to elevate your daily ritual."
          />

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-14 h-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
              <p className="mt-4 text-gray-400 text-lg">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            <>
              <ProductGrid products={products} />
              <div className="text-center mt-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 bg-stone-900 text-lavender-300 px-10 py-4 rounded-full font-bold text-base hover:shadow-xl hover:shadow-stone-500/20 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View All Products
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-500 text-xl font-medium">No products available yet.</p>
              <p className="text-gray-400 mt-2">Check back soon for amazing beauty deals!</p>
            </div>
          )}
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 7. STATS */}
      <StatsSection />

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default Home;
