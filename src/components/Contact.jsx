import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "78eb5fda-2469-43c4-89dd-752ed0e0fcc4",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: "New Contact Form Submission",
          redirect: "https://your-website.com/thank-you", // optional
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Sun: 6AM-10PM",
      color: "bg-green-500",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      details: "+91 98765 43210",
      subtitle: "24/7 Available",
      color: "bg-green-400",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "info@watersave.com",
      subtitle: "We reply within 2 hours",
      color: "bg-blue-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: "123 Water Street, Dehradun",
      subtitle: "Uttarakhand, India - 248001",
      color: "bg-red-500",
    },
  ];

  const services = [
    "Home Water Delivery",
    "Office Water Supply",
    "Commercial Solutions",
    "Water Purifier Sales",
    "AMC Services",
    "Emergency Delivery",
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-300 font-semibold text-sm sm:text-base uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Contact WaterSave
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Get in touch
            with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-lg font-semibold mb-1">
                    {item.details}
                  </p>
                  <p className="text-blue-200 text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <FaClock className="text-blue-300 text-2xl" />
                <h3 className="text-white font-bold text-xl">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
                  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
                  { day: "Sunday", time: "8:00 AM - 8:00 PM" },
                  { day: "Emergency Service", time: "24/7 Available" },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                  >
                    <span className="text-blue-100 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-white font-semibold">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, color: "bg-blue-600", href: "#" },
                  { icon: <FaTwitter />, color: "bg-blue-400", href: "#" },
                  { icon: <FaInstagram />, color: "bg-pink-600", href: "#" },
                  { icon: <FaWhatsapp />, color: "bg-green-500", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-white text-2xl font-bold mb-2">
              Send us a Message
            </h3>
            <p className="text-blue-100 mb-8">
              We'll get back to you within 2 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Service Interested
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="text-gray-900"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-white font-medium mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Send Message
              </button>

              <p className="text-blue-200 text-sm text-center">
                We respect your privacy and will never share your information
                with third parties.
              </p>
            </form>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h3 className="text-white text-2xl font-bold mb-6 text-center">
            Find Us Here
          </h3>
          <div className="bg-gray-300 rounded-2xl h-64 sm:h-80 flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.396237513325!2d78.0322147753671!3d30.31636297476094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa47df1f6d%3A0x5d0e82d8e951d3a6!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="WaterSave Location in Dehradun"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <div className="flex items-center justify-center gap-2 text-blue-200 mb-2">
              <FaMapMarkerAlt className="text-xl" />
              <p className="text-lg font-semibold">Our Location</p>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              123 Water Street, Dehradun, Uttarakhand - 248001
            </p>
            <a
              href="https://maps.google.com/?q=Dehradun,Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <FaMapMarkerAlt />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
