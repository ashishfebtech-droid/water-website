import React, { useState, useEffect } from 'react';
import { FaPhone, FaWater, FaTruck, FaAward } from 'react-icons/fa';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for slider
  const heroImages = [
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1600&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1600&q=80'
  ];

  // Auto slider - 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-start sm:items-center justify-center pt-20 sm:pt-0">
      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Content - PADDING FIXED */}
      
      <div className="relative z-10 text-center w-full px-4 sm:px-9 lg:px-8 py-20 sm:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Pure & Fresh Water
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-200 font-light mb-6">
              Delivered to Your Doorstep
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Quality water for a healthy life. Available 24/7 for homes and offices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <FaPhone />
              Order Now
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View Products
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWater className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">100% Pure</h3>
              <p className="text-blue-100 text-sm">
                Tested & certified drinking water
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-green-100 text-sm">
                Same day delivery available
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">ISO Certified</h3>
              <p className="text-yellow-100 text-sm">
                Quality assured products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-10 h-3 bg-white rounded-full' 
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
      {/* Scroll Down Indicator - FIXED FOR MOBILE */}
<div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
    <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
  </div>
</div>
    </section>
  );
}

export default Hero;