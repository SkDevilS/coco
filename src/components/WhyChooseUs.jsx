const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Genuine Products',
      description: "We source only authentic cosmetics and beauty products from licensed manufacturers and trusted brands like Lakme, L'Oreal, Dove, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      glowColor: 'bg-fuchsia-200',
      iconColor: 'group-hover:text-fuchsia-600 group-hover:border-fuchsia-200 group-hover:bg-fuchsia-50',
      titleGradient: 'group-hover:from-fuchsia-600 group-hover:to-pink-500',
    },
    {
      id: 2,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across India to get your beauty and cosmetics products delivered right to your doorstep, fast.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      glowColor: 'bg-purple-200',
      iconColor: 'group-hover:text-purple-600 group-hover:border-purple-200 group-hover:bg-purple-50',
      titleGradient: 'group-hover:from-purple-600 group-hover:to-fuchsia-500',
    },
    {
      id: 3,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and special offers on cosmetics, skincare, haircare, and makeup products.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      glowColor: 'bg-indigo-200',
      iconColor: 'group-hover:text-indigo-600 group-hover:border-indigo-200 group-hover:bg-indigo-50',
      titleGradient: 'group-hover:from-indigo-600 group-hover:to-purple-500',
    },
    {
      id: 4,
      title: 'Easy Returns',
      description: "Hassle-free 7-day return policy. If you're not satisfied with your beauty purchase, return within 7 days for a full refund.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      glowColor: 'bg-rose-200',
      iconColor: 'group-hover:text-rose-600 group-hover:border-rose-200 group-hover:bg-rose-50',
      titleGradient: 'group-hover:from-rose-500 group-hover:to-orange-400',
    },
    {
      id: 5,
      title: 'Secure Shopping',
      description: 'Your data and payments are protected with industry-standard encryption and secure payment gateways.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      glowColor: 'bg-emerald-200',
      iconColor: 'group-hover:text-emerald-600 group-hover:border-emerald-200 group-hover:bg-emerald-50',
      titleGradient: 'group-hover:from-emerald-500 group-hover:to-teal-400',
    },
    {
      id: 6,
      title: 'Expert Support',
      description: 'Our beauty experts and customer support team are always ready to help you choose the right cosmetics and skincare products.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      glowColor: 'bg-amber-200',
      iconColor: 'group-hover:text-amber-600 group-hover:border-amber-200 group-hover:bg-amber-50',
      titleGradient: 'group-hover:from-amber-500 group-hover:to-orange-400',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-stone-50 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block mb-6 text-lavender-600 border border-lavender-200 bg-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-sm">
            The Coco Standard
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-stone-900 leading-tight">
            Elevating Your <span className="italic font-light text-lavender-600">Beauty Journey</span>
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-light">
            Experience uncompromising quality, secure shopping, and premium service at every step of your self-care routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white border border-stone-100 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-stone-200/50"
            >
              {/* Animated glowing orb that appears on hover */}
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 blur-3xl rounded-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-60 ${feature.glowColor}`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center text-stone-400 transition-all duration-500 mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                
                <h3 className={`text-2xl font-playfair font-bold text-stone-900 mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${feature.titleGradient}`}>
                  {feature.title}
                </h3>
                
                <p className="text-stone-500 font-light leading-relaxed transition-colors duration-500 group-hover:text-stone-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
