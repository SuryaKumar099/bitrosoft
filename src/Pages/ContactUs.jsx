import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaHeadset, FaGlobe } from 'react-icons/fa';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: 'general'
      });
      setSubmitStatus(null);
    }, 3000);
  };

  // Filter offices to only show India and USA
  const filteredOffices = offices.filter(office =>
    office.city.includes('India') || office.city.includes('USA')
  );

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <Nav />
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Contact Us
            <span className="block text-3xl md:text-4xl text-blue-600 mt-4">
              Let's Build Something Amazing Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Need technical consultation? Reach out to our team—we'd love
            to hear about your ideas and help bring them to life.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl text-blue-600 mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <div key={idx} className="text-gray-600">
                    {detail}
                  </div>
                ))}
              </div>
              {info.action && (
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  {info.action}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h2>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Company Inc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="staff">Staff Augmentation</option>
                  <option value="consulting">Technical Consulting</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-2xl'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaPaperPlane className="mr-3" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Interactive Map */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {/* Map visualization */}
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Presence</h3>
                  <p className="text-gray-600">Offices in India and USA</p>
                </div>

                {/* Animated location markers - Only showing India and USA */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {filteredOffices.map((office, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-3">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{office.city}</h4>
                        <p className="text-gray-600 text-sm">{office.address}</p>
                        <p className="text-gray-500 text-sm">{office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 text-center"
            >
              <div className="text-4xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response Time</h3>
              <p className="mb-4 opacity-90">
                We typically respond within 2 hours during business hours
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                <FaClock className="mr-2" />
                Response Time: 1-2 hours
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Get in Touch CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefer a Direct Conversation?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Schedule a free 30-minute consultation with our experts to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Book a Meeting
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Join Our Webinar
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-80">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">Confidential</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const contactInfo = [
  {
    icon: <FaPhone />,
    title: "Call Us",
    details: [
      "US: +1 (555) 123-4567",
      "India: +91 9876543210",
      "Support: +1 (555) 987-6543"
    ],
    action: "Call Now"
  },
  {
    icon: <FaGlobe />,
    title: "Website",
    details: [
      "General: bitrosoft.com",
      "Support: bitrosoft.com",
      "Sales: bitrosoft.com"
    ],
    action: "Visit Website"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    details: [
      "123 Tech Street, Suite 100",
      "San Francisco, CA 94107",
      "United States"
    ],
    action: "Get Directions"
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 4PM",
      "Sunday: Closed"
    ],
    action: "View Timezone"
  }
];

// Modified to only include India and USA offices
const offices = [
  {
    city: "San Francisco, USA",
    address: "123 Tech Street, Suite 100, San Francisco, CA 94107",
    hours: "Mon-Fri: 9AM-6PM PST"
  },
  {
    city: "Bangalore, India",
    address: "456 Tech Park, Koramangala, Bangalore, Karnataka 560034",
    hours: "Mon-Fri: 9AM-6PM IST"
  },
  {
    city: "Chennai, India",
    address: "789 IT Corridor, OMR, Chennai, Tamil Nadu 600119",
    hours: "Mon-Fri: 9AM-6PM IST"
  }
];


const faqs = [
  {
    question: "What's your typical response time?",
    answer: "We respond to all inquiries within 2 hours during business hours and within 24 hours maximum."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a free 30-minute consultation to understand your project requirements."
  },
  {
    question: "What industries do you serve?",
    answer: "We work with clients across finance, healthcare, retail, education, technology, and manufacturing."
  },
  {
    question: "What's your project minimum?",
    answer: "We work on projects of all sizes, from small MVPs to large enterprise solutions."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. We sign NDAs to protect your intellectual property and confidential information."
  }
];

export default ContactUs;