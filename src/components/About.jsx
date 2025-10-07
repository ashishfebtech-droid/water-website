import React from 'react';
import { 
  FaCheckCircle, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaShieldAlt,
  FaGem,
  FaFlask,
  FaLeaf,
  FaClock
} from 'react-icons/fa';

function About() {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <FaShieldAlt /> },
    { number: '5000+', label: 'Happy Customers', icon: <FaUsers /> },
    { number: '50+', label: 'Delivery Areas', icon: <FaMapMarkerAlt /> },
    { number: '100%', label: 'Pure Water', icon: <FaCheckCircle /> }
  ];

  const features = [
    {
      title: 'Premium Quality',
      description: 'Our water goes through 7-stage purification process ensuring the highest quality standards.',
      icon: <FaGem className="text-blue-300" />
    },
    {
      title: 'Lab Tested',
      description: 'Every batch is tested in our certified laboratory before reaching your home.',
      icon: <FaFlask className="text-green-300" />
    },
    {
      title: 'Eco Friendly',
      description: 'We use recyclable bottles and sustainable practices to protect our environment.',
      icon: <FaLeaf className="text-emerald-300" />
    },
    {
      title: '24/7 Service',
      description: 'Round the clock customer support and emergency delivery services available.',
      icon: <FaClock className="text-yellow-300" />
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-300 font-semibold text-sm sm:text-base uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Why Choose WaterSave?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Providing pure, safe, and healthy drinking water to families across the region for over a decade.
          </p>
        </div>

        {/* Stats Section - Glass Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8 text-center transform hover:scale-105 shadow-xl"
            >
              <div className="text-blue-300 text-3xl sm:text-4xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de9d?w=800&q=80" 
                alt="Water Plant" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">ISO 9001:2015</div>
                <div className="text-sm text-blue-100">Certified Quality</div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Trusted Water Supplier Since 2014
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6 leading-relaxed text-justify">
              WaterSave has been the leading name in pure drinking water supply across Dehradun and surrounding areas. 
              Our commitment to quality and customer satisfaction has made us the preferred choice for thousands of families.
            </p>
            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed text-justify">
              We use advanced RO purification technology combined with UV treatment to ensure every drop you drink 
              is safe, healthy, and tastes great. Our state-of-the-art facility is equipped with modern machinery 
              and follows strict hygiene protocols.
            </p>

            {/* Check List */}
            <div className="space-y-4 mb-8">
              {[
                '7-Stage Water Purification Process',
                'Regular Quality Testing & Monitoring',
                'Food Grade Packaging Materials',
                'Trained & Professional Delivery Staff'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                  <span className="text-blue-50 text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More About Us
            </button> */}
          </div>
        </div>

        {/* Features Grid - Glass Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-xl transform hover:scale-105"
            >
              <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;