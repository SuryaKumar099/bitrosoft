import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaReact, FaAndroid, FaApple } from 'react-icons/fa';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const MobileDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8">
      <Nav />
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating powerful, intuitive, and engaging mobile experiences for iOS and Android platforms
          </p>
        </motion.div>

        {/* Animated Image/Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Mobile App Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Mobile Development?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl mb-2"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create something amazing together
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const services = [
  {
    icon: <FaReact />,
    title: "React Native Apps",
    description: "Cross-platform mobile applications using React Native for iOS and Android"
  },
  {
    icon: <FaAndroid />,
    title: "Android Development",
    description: "Native Android apps using Kotlin and Java with modern architecture"
  },
  {
    icon: <FaApple />,
    title: "iOS Development",
    description: "Native iOS applications using Swift and SwiftUI with best practices"
  },
  {
    icon: <FaMobileAlt />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive mobile interfaces that users love"
  },
  {
    icon: "⚡",
    title: "App Optimization",
    description: "Performance optimization and battery efficiency improvements"
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Enterprise-grade security and data protection for your mobile apps"
  }
];

const features = [
  {
    icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
    title: "Cross-Platform Expertise",
    description: "Build once, deploy everywhere with our React Native expertise"
  },
  {
    icon: "🚀",
    title: "Fast Development",
    description: "Rapid prototyping and agile development methodology"
  },
  {
    icon: "📱",
    title: "Native Performance",
    description: "Achieve native-like performance with optimized code"
  },
  {
    icon: "🔄",
    title: "Continuous Updates",
    description: "Regular updates and maintenance for your mobile applications"
  }
];

export default MobileDev;