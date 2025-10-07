import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaLinkedinIn,
  FaArrowRight,
  FaShieldAlt,
  FaAward,
  FaHeadset
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Home Water Delivery', href: '#services' },
    { name: 'Office Water Supply', href: '#services' },
    { name: 'Commercial Solutions', href: '#services' },
    { name: 'Water Purifier Sales', href: '#services' },
    { name: 'AMC Services', href: '#services' },
    { name: 'Emergency Delivery', href: '#services' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'Quality Standards', href: '#' }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-lg" />,
      info: '+91 98765 43210',
      description: '24/7 Customer Support'
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      info: '+91 98765 43210',
      description: 'WhatsApp Chat'
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      info: 'info@watersave.com',
      description: 'Email Us'
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      info: '123 Water Street, Dehradun',
      description: 'Uttarakhand - 248001'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', name: 'Facebook' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' },
    { icon: <FaYoutube />, href: '#', name: 'YouTube' },
    { icon: <FaLinkedinIn />, href: '#', name: 'LinkedIn' }
  ];

  const certifications = [
    { icon: <FaShieldAlt />, text: 'ISO 9001:2015 Certified' },
    { icon: <FaAward />, text: 'FSSAI Approved' },
    { icon: <FaHeadset />, text: '24/7 Support' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Newsletter Text */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Stay Hydrated & Informed
                </h3>
                <p className="text-blue-200 text-lg max-w-xl">
                  Subscribe to our newsletter for exclusive offers, health tips, and water conservation insights.
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
                  Subscribe Now
                  <FaArrowRight />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  WaterSave
                </h3>
                <p className="text-blue-200 mt-2 leading-relaxed">
                  Providing pure, safe, and healthy drinking water to families and businesses across Dehradun since 2014.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-blue-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{contact.info}</div>
                      <div className="text-blue-200 text-sm">{contact.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-white/10 hover:bg-blue-600 border border-white/20 w-10 h-10 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications Bar */}
        <div className="border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-blue-200">
                    <div className="text-blue-400">
                      {cert.icon}
                    </div>
                    <span className="text-sm font-medium">{cert.text}</span>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-4">
                <span className="text-blue-200 text-sm font-medium">We Accept:</span>
                <div className="flex gap-2">
                  {/* Payment Icons - You can replace with actual payment method icons */}
                  <div className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg text-xs font-semibold">UPI</div>
                  <div className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg text-xs font-semibold">Cards</div>
                  <div className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg text-xs font-semibold">Net Banking</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} WaterSave. All rights reserved. | Made with ❤️ in Dehradun
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;