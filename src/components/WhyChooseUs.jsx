const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Genuine Products',
      description: "We source only authentic cosmetics and beauty products from licensed manufacturers and trusted brands like Lakme, L'Oreal, Dove, and more.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across India to get your beauty and cosmetics products delivered right to your doorstep, fast.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and special offers on cosmetics, skincare, haircare, and makeup products.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Easy Returns',
      description: "Hassle-free 7-day return policy. If you're not satisfied with your beauty purchase, return within 7 days for a full refund.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Secure Shopping',
      description: 'Your data and payments are protected with industry-standard encryption and secure payment gateways.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Expert Support',
      description: 'Our beauty experts and customer support team are always ready to help you choose the right cosmetics and skincare products.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 mb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="bg-stone-50 text-stone-600 border border-stone-200 px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
            Our Commitment
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-stone-900">
          Elevating Your <span className="italic bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">Beauty Journey</span>
        </h2>
        <p className="text-stone-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Experience uncompromising quality, secure shopping, and premium service at every step of your self-care routine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-[2rem] p-8 shadow-xl shadow-stone-200/30 hover:shadow-2xl hover:shadow-stone-300/50 transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 group"
          >
            <div className="text-amber-500 mb-6 group-hover:text-rose-400 transition-colors duration-300 bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-playfair font-bold text-stone-900 mb-3">{feature.title}</h3>
            <p className="text-stone-500 font-light leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
