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
  <section className="py-10 md:py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            gradient: 'from-stone-900 to-stone-700',
            icon: (
              <svg className="w-8 h-8 text-amber-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM12 3v4" />
              </svg>
            ),
            title: 'Makeup Sale',
            sub: 'Up to 40% off on all makeup',
            cta: 'Shop Now',
          },
          {
            gradient: 'from-amber-900 to-amber-700',
            icon: (
              <svg className="w-8 h-8 text-amber-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
            title: 'Skincare Fest',
            sub: 'Buy 2 Get 1 Free on skincare',
            cta: 'Explore',
          },
          {
            gradient: 'from-rose-900 to-rose-700',
            icon: (
              <svg className="w-8 h-8 text-rose-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 4v16M15 4v8M11 4v8M7 4v8M3 4v16h16" />
              </svg>
            ),
            title: 'Haircare Deals',
            sub: 'Free delivery on haircare orders',
            cta: 'View Deals',
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`relative bg-gradient-to-br ${card.gradient} rounded-3xl p-7 text-white overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
          >
            <div className="absolute -right-6 -bottom-6 text-white opacity-10 group-hover:opacity-20 transition-opacity select-none w-28 h-28">
              {card.icon}
            </div>
            {card.icon}
            <h3 className="text-2xl font-playfair font-bold mb-1">{card.title}</h3>
            <p className="text-white/80 text-sm mb-4 font-light">{card.sub}</p>
            <span className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold transition-colors">
              {card.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
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
      <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 text-sm font-semibold px-5 py-1.5 rounded-full mb-5 tracking-wide uppercase">
        {tag}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone-900 mb-4">
      {title}{' '}
      {highlight && (
        <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

/* ─── Newsletter ──────────────────────────────────────────────────────── */
const Newsletter = () => (
  <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5"
      style={{backgroundImage: 'radial-gradient(circle, #fcd34d 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500 opacity-5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500 opacity-5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 relative z-10 text-center text-white">
      <span className="inline-block bg-white/5 border border-white/10 text-sm font-light tracking-widest uppercase px-6 py-2 rounded-full mb-8">
        Stay in the Loop
      </span>
      <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 max-w-3xl mx-auto leading-tight">
        Get Exclusive <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent italic">Beauty Deals</span> First
      </h2>
      <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light">
        Subscribe and be the first to know about new arrivals, flash sales, and beauty tips from Coco Ventures.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all backdrop-blur-sm"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
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

      {/* 2. BRAND PHILOSOPHY WRITEUP (Replaced Slider) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <span className="inline-block bg-stone-50 text-stone-600 border border-stone-200 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone-900 mb-8 leading-tight">
            The Essence of <span className="italic bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">Pure Beauty</span>
          </h2>
          <p className="text-lg md:text-2xl text-stone-500 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
            At Coco Ventures, we believe that beauty is an art form rooted in nature and elevated by science. 
            Our curated collections are designed to nourish your skin, inspire your senses, and bring out your most radiant, confident self. 
            Experience the perfect harmony of luxury, purity, and elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/perfume/3.jpeg" alt="Essence of Beauty" className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-xl shadow-stone-200/50" />
            <img src="/perfume/8.jpeg" alt="Luxury Cosmetics" className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-xl shadow-stone-200/50" />
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES */}
      <FeaturedCategories />

      {/* 4. OFFER BANNERS */}
      <OfferBanner />

      {/* 5. FEATURED PRODUCTS */}
      <section className="py-14 md:py-20 bg-gray-50">
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
                  className="inline-flex items-center gap-3 bg-stone-900 text-amber-400 px-10 py-4 rounded-full font-bold text-base hover:shadow-xl hover:shadow-stone-500/20 transform hover:-translate-y-1 transition-all duration-300"
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
      <section className="py-14 md:py-20 bg-white">
        <WhyChooseUs />
      </section>

      {/* 7. STATS */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-slate-50 to-zinc-100">
        <StatsSection />
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-14 md:py-20 bg-white">
        <Testimonials />
      </section>

      {/* 9. NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default Home;
