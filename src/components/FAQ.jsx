import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = {
    'General Questions': [
      {
        question: 'What areas do you serve in Dehradun?',
        answer: 'We serve all areas in and around Dehradun including Rajpur Road, Clement Town, Mussoorie Road, Sahastradhara Road, Haridwar Road, and surrounding regions. We continuously expand our service areas.'
      },
      {
        question: 'How do I place an order for water delivery?',
        answer: 'You can place an order through multiple ways:\n• Call us directly at +91 XXXXX XXXXX\n• WhatsApp your order to +91 XXXXX XXXXX\n• Use our website booking form\n• Download our mobile app (coming soon)\n• Email us at orders@watersave.com'
      },
      {
        question: 'What are your business hours?',
        answer: 'Our regular business hours are:\n• Monday-Friday: 6:00 AM - 10:00 PM\n• Saturday: 7:00 AM - 9:00 PM\n• Sunday: 8:00 AM - 8:00 PM\nEmergency services are available 24/7.'
      }
    ],
    'Delivery & Services': [
      {
        question: 'How soon can I get water delivered?',
        answer: '• Regular orders: Within 4-6 hours\n• Express delivery: Within 2 hours (+₹50 charge)\n• Emergency delivery: Within 1 hour (+₹100 charge)\n• Subscription customers get priority delivery'
      },
      {
        question: 'Do you provide water dispensers?',
        answer: 'Yes, we provide free water dispensers with our subscription plans. For one-time purchases, dispensers are available for rent at ₹200/month or purchase starting from ₹2,999.'
      },
      {
        question: 'What is your delivery charge?',
        answer: '• Free delivery on orders above ₹300\n• ₹30 delivery charge for orders below ₹300\n• No delivery charges for subscription customers\n• Emergency delivery: ₹100 flat charge'
      },
      {
        question: 'Can I change my delivery schedule?',
        answer: 'Yes, subscription customers can easily modify their delivery schedule through our customer portal, by calling us, or via WhatsApp. Changes require 24 hours notice.'
      }
    ],
    'Water Quality & Safety': [
      {
        question: 'How is your water purified?',
        answer: 'Our water goes through a 7-stage purification process:\n1. Sediment filtration\n2. Carbon filtration\n3. Reverse Osmosis (RO)\n4. UV treatment\n5. Mineral enhancement\n6. Ozonation\n7. Final quality check\nEach batch is tested in our certified laboratory.'
      },
      {
        question: 'Do you provide water quality certificates?',
        answer: 'Yes, we provide monthly water quality certificates from our NABL accredited laboratory. These certificates are available to all our commercial customers and residential customers upon request.'
      },
      {
        question: 'How often do you test water quality?',
        answer: 'We conduct:\n• Daily testing at our plant\n• Weekly comprehensive lab tests\n• Monthly third-party verification\n• Random surprise inspections\nAll test results are documented and maintained for 2 years.'
      },
      {
        question: 'Are your bottles safe and hygienic?',
        answer: 'Absolutely! We use food-grade PET bottles that are:\n• Washed with RO water\n• Sanitized with ozone treatment\n• Sealed automatically\n• Used only once\n• Recycled properly after use'
      }
    ],
    'Payment & Subscription': [
      {
        question: 'What subscription plans do you offer?',
        answer: 'We offer flexible subscription plans:\n• Basic: 2 cans/week - ₹200/month\n• Standard: 4 cans/week - ₹350/month\n• Premium: 7 cans/week - ₹550/month\n• Custom plans available for offices and commercial use'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept:\n• Cash on delivery\n• UPI payments (PhonePe, GPay, PayTM)\n• Credit/Debit cards\n• Net banking\n• Monthly invoices for corporate clients'
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel your subscription anytime with no cancellation fees. We require 7 days notice for subscription cancellation. Any advance payment will be refunded on pro-rata basis.'
      },
      {
        question: 'Do you offer discounts for long-term subscriptions?',
        answer: 'Yes! We offer:\n• 5% discount for 6-month advance payment\n• 10% discount for 1-year advance payment\n• Special corporate discounts for bulk orders\n• Referral discounts for existing customers'
      }
    ]
  };

  const emergencyContacts = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Emergency Delivery',
      number: '+91 98765 43210',
      description: '24/7 Immediate Service'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp Support',
      number: '+91 98765 43210',
      description: 'Instant Chat Support'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Support',
      number: 'support@watersave.com',
      description: 'Response within 2 hours'
    }
  ];

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find quick answers to common questions about our services, delivery, and water quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Left Side - Categories Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-8">
              <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                <FaQuestionCircle className="text-blue-600" />
                Categories
              </h3>
              <div className="space-y-2">
                {Object.keys(faqCategories).map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(`category-${index}`);
                      element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-medium"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Emergency Contacts */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-gray-900 font-bold text-lg mb-4">Need Immediate Help?</h4>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-600">
                          {contact.icon}
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">
                          {contact.title}
                        </span>
                      </div>
                      <div className="text-blue-700 font-bold text-lg">
                        {contact.number}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {contact.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {Object.entries(faqCategories).map(([category, questions], categoryIndex) => (
                <div key={categoryIndex} id={`category-${categoryIndex}`} className="scroll-mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {questions.map((item, index) => {
                      const fullIndex = categoryIndex * 10 + index;
                      return (
                        <div
                          key={fullIndex}
                          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                          <button
                            onClick={() => toggleFAQ(fullIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-300"
                          >
                            <span className="text-lg font-semibold text-gray-900 flex-1">
                              {item.question}
                            </span>
                            <div className="text-blue-600 flex-shrink-0">
                              {activeIndex === fullIndex ? (
                                <FaChevronUp className="text-lg" />
                              ) : (
                                <FaChevronDown className="text-lg" />
                              )}
                            </div>
                          </button>
                          <div
                            className={`px-6 overflow-hidden transition-all duration-300 ${
                              activeIndex === fullIndex ? 'max-h-96 pb-6' : 'max-h-0'
                            }`}
                          >
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contact Support
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;