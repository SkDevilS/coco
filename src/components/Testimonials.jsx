import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: "Excellent quality cosmetics and fast delivery! The skincare items I ordered were exactly as described — completely authentic. Highly recommended.",
      initial: 'R',
      color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,  
      text: "Great shopping experience at Coco Ventures! The makeup and skincare products are top-notch and the customer service is amazing. Will order again!",
      initial: 'P',
      color: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 5,
      text: "Best prices on genuine cosmetics products. The items I bought are 100% authentic and great quality. Fast shipping too — love Coco Ventures!",
      initial: 'A',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: "Love the variety of beauty products available. Easy navigation, smooth checkout, and quick delivery. Coco Ventures is now my go-to beauty store!",
      initial: 'S',
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block mb-6 text-lavender-600 border border-lavender-200 bg-lavender-50 px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-sm">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-stone-900 leading-tight">
            What Our <span className="italic font-light text-lavender-600">Customers</span> Say
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-light">
            Real reviews from real beauty enthusiasts who trust our products.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-4 px-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-2">
                  <div className="group bg-white border border-stone-100 rounded-[2rem] p-10 md:p-16 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-stone-200/50 flex flex-col items-center text-center mx-auto">
                    <div className="flex mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-3xl text-stone-600 mb-12 font-playfair italic leading-relaxed group-hover:text-stone-800 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border shadow-sm ${testimonial.color}`}>
                        {testimonial.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 tracking-wide">{testimonial.name}</h4>
                        <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-lavender-500 w-10 h-2.5'
                    : 'bg-stone-300 w-2.5 h-2.5 hover:bg-lavender-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
