import React, { useState } from 'react';
import { 
  FaTint, 
  FaTruck, 
  FaHome, 
  FaBuilding, 
  FaIndustry,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';

function Services() {
  const [activeTab, setActiveTab] = useState('home');

  const services = [
    {
      id: 'home',
      title: 'Home Delivery',
      description: 'Regular water supply for your home with flexible subscription plans.',
      icon: <FaHome className="text-4xl" />,
      features: [
        'Flexible subscription plans',
        'Regular monthly delivery',
        'Emergency same-day service',
        'Free dispenser installation',
        'Online booking & tracking'
      ],
      price: 'Starting at ₹50/month',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&q=80'
    },
    {
      id: 'office',
      title: 'Office Supply',
      description: 'Bulk water solutions for offices, corporate houses, and businesses.',
      icon: <FaBuilding className="text-4xl" />,
      features: [
        'Bulk order discounts',
        'Dedicated account manager',
        'Monthly consumption reports',
        'Free water dispensers',
        'Scheduled deliveries'
      ],
      price: 'Starting at ₹200/month',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=80'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Water solutions for restaurants, hotels, schools, and institutions.',
      icon: <FaIndustry className="text-4xl" />,
      features: [
        'Customized water solutions',
        'Industrial RO plants',
        '24/7 technical support',
        'Water quality certification',
        'AMC services available'
      ],
      price: 'Custom pricing',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80'
    }
  ];

  const additionalServices = [
    {
      icon: <FaTint className="text-3xl" />,
      title: 'Water Purifier Sales',
      description: 'Top-quality RO water purifiers for home and office use.',
      price: 'From ₹8,999'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'AMC Services',
      description: 'Annual Maintenance Contracts for regular service and maintenance.',
      price: 'From ₹1,999/year'
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: 'Emergency Delivery',
      description: 'Same-day emergency water delivery when you need it most.',
      price: '₹99/delivery'
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: 'Custom Solutions',
      description: 'Tailored water solutions for specific needs and requirements.',
      price: 'Get Quote'
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Pure Water Solutions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive water services tailored to meet your home, office, and commercial needs.
          </p>
        </div>

        {/* Main Services Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-16 sm:mb-20">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex-1 min-w-[200px] px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className={`${
                    activeTab === service.id ? 'text-white' : 'text-blue-600'
                  }`}>
                    {service.icon}
                  </div>
                  {service.title}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {activeService?.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {activeService?.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-6">
                {activeService?.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-8">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{activeService?.price}</div>
                  <div className="text-gray-500 text-sm">No hidden charges</div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={activeService?.image} 
                alt={activeService?.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <FaClock className="inline mr-2" />
                <span className="text-sm">Same Day Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Additional Services
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete water solutions beyond just delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-blue-600 font-bold text-lg">
                {service.price}
              </div>
              <button className="w-full mt-4 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 rounded-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              We provide tailored water solutions for specific requirements. Get in touch with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Call Now: +91 XXXXX XXXXX
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;