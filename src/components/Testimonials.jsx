import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      location: 'Rajpur Road, Dehradun',
      rating: 5,
      comment: 'WaterSave has been providing us with pure drinking water for over 2 years. Their service is punctual and water quality is consistently excellent. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80',
      service: 'Home Delivery'
    },
    {
      id: 2,
      name: 'Priya Singh',
      location: 'Clement Town, Dehradun',
      rating: 5,
      comment: 'As a restaurant owner, water quality is crucial for our business. WaterSave ensures we get the best quality water with timely deliveries. Their commercial plans are very convenient.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&q=80',
      service: 'Commercial Supply'
    },
    {
      id: 3,
      name: 'Anil Kumar',
      location: 'Haridwar Road, Dehradun',
      rating: 4,
      comment: 'Good service and reasonable prices. The emergency delivery option saved us during a family function. Water tastes fresh and pure.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80',
      service: 'Home Delivery'
    },
    {
      id: 4,
      name: 'Sunita Rawat',
      location: 'Mussoorie Road, Dehradun',
      rating: 5,
      comment: 'I appreciate their eco-friendly approach. The bottles are always clean and the delivery staff is very polite. Been using their service for 3 years now.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80',
      service: 'Office Supply'
    },
    {
      id: 5,
      name: 'Vikram Joshi',
      location: 'Sahastradhara Road, Dehradun',
      rating: 5,
      comment: 'Excellent water quality and professional service. The AMC for our water purifier is worth every penny. Technical support is very responsive.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80',
      service: 'AMC Services'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with WaterSave.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-12 relative">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-blue-100 text-6xl">
              <FaQuoteLeft />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <StarRating rating={testimonials[currentTestimonial].rating} />
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="text-left">
                  <h4 className="text-gray-900 font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '5000+', label: 'Happy Customers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '98%', label: 'Service Satisfaction' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Join Our Happy Customers Family
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Experience the difference of pure, quality water delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Subscription
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;