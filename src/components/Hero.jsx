import React, { useState, useEffect } from 'react';
import { FaPhone, FaWater, FaAward, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBottle, setCurrentBottle] = useState(0);

  // Background images for slider
  const heroImages = [
    'https://images.unsplash.com/photo-1603398938373-e54da0bb5e48?w=1600&q=80',
    'https://images.unsplash.com/photo-1579627986989-97e976b6cf78?w=1600&q=80',
    'https://images.unsplash.com/photo-1544003484-3cd181d179c4?w=1600&q=80'
  ];

  // Custom branded bottles images - Aap yahan apni images daal sakte hain
  const bottleImages = [
    'https://images.unsplash.com/photo-1544003484-3cd181d179c4?w=500&q=80', // Wedding bottle
    'https://images.unsplash.com/photo-1579627986989-97e976b6cf78?w=500&q=80', // Corporate bottle
    'https://images.unsplash.com/photo-1603398938373-e54da0bb5e48?w=500&q=80', // Event bottle
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80', // Hotel bottle
  ];

  // Auto slider - 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Bottle carousel navigation
  const nextBottle = () => {
    setCurrentBottle((prev) => (prev + 1) % bottleImages.length);
  };

  const prevBottle = () => {
    setCurrentBottle((prev) => (prev - 1 + bottleImages.length) % bottleImages.length);
  };

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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Content - Updated layout with bottle carousel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left justify-between">
            {/* Certification Badges */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <div className="bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm">FSSAI Certified</span>
              </div>
              <div className="bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm">ISO Certified</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Adplus<span className="text-cyan-300">.aqua</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-cyan-200 font-light mb-6">
                Custom Branded Water Bottles
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
                We create customized, high quality packaged drinking water bottles that carry your brand message wherever they go
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <FaPhone />
                Get Custom Quote
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                View Portfolio
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTag className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-bold mb-1">Custom Labels</h3>
                <p className="text-cyan-100 text-xs">Your brand, your design</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWater className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-bold mb-1">7-Stage Purified</h3>
                <p className="text-green-100 text-xs">Premium quality water</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaAward className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-bold mb-1">Premium Quality</h3>
                <p className="text-yellow-100 text-xs">FSSAI & ISO certified</p>
              </div>
            </div>
          </div>

          {/* Right Side - Bottle Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-white text-xl font-bold text-center mb-6">Our Custom Bottles</h3>
              
              {/* Main Bottle Image */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={bottleImages[currentBottle]} 
                  alt={`Custom bottle design ${currentBottle + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevBottle}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextBottle}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Bottle Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {bottleImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBottle(index)}
                    className={`relative h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentBottle 
                        ? 'ring-2 ring-cyan-400 transform scale-105' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Bottle Indicator */}
              <div className="flex justify-center mt-4">
                <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">
                  {currentBottle + 1} / {bottleImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Slider Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-10 h-3 bg-cyan-400 rounded-full' 
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}

export default Hero;