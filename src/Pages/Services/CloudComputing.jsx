import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaShieldAlt, FaDatabase, FaSync, FaChartLine } from 'react-icons/fa';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const CloudComputing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <Nav />
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Cloud Computing
            <span className="block text-3xl md:text-4xl text-blue-600 mt-2">
              Transform Your Digital Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Leverage the power of cloud computing to scale your business, reduce costs, and enhance performance
          </p>
        </motion.div>

        {/* Animated Cloud Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
              alt="Cloud Computing Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>

            {/* Floating Cloud Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 text-white text-4xl"
            >
              <FaCloud />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/3 right-1/3 text-white text-5xl"
            >
              <FaServer />
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 left-1/3 text-white text-6xl"
            >
              <FaDatabase />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Cloud Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-5xl text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Providers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            We Work With All Major Cloud Providers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{provider.icon}</div>
                <h3 className="text-xl font-bold">{provider.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Benefits of Cloud Computing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Business to the Cloud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free cloud migration assessment and strategy session
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Download Cloud Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const services = [
  {
    icon: <FaCloud />,
    title: "Cloud Migration",
    description: "Seamlessly move your infrastructure to the cloud",
    features: ["Zero-downtime migration", "Data security", "Cost optimization", "Performance testing"]
  },
  {
    icon: <FaServer />,
    title: "Infrastructure as a Service",
    description: "Scalable and flexible infrastructure solutions",
    features: ["Virtual servers", "Storage solutions", "Networking", "Load balancing"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Managed database services in the cloud",
    features: ["Automated backups", "High availability", "Real-time monitoring", "Scalability"]
  },
  {
    icon: <FaShieldAlt />,
    title: "Cloud Security",
    description: "Comprehensive security solutions for your cloud environment",
    features: ["Identity management", "Data encryption", "Threat detection", "Compliance"]
  },
  {
    icon: <FaSync />,
    title: "DevOps Automation",
    description: "Automate your development and operations",
    features: ["CI/CD pipelines", "Container orchestration", "Infrastructure as code", "Monitoring"]
  },
  {
    icon: <FaChartLine />,
    title: "Cloud Optimization",
    description: "Maximize performance and minimize costs",
    features: ["Cost analysis", "Performance tuning", "Resource optimization", "Auto-scaling"]
  }
];

const providers = [
  { icon: "☁️", name: "AWS" },
  { icon: "🔵", name: "Azure" },
  { icon: "🌈", name: "Google Cloud" },
  { icon: "🐧", name: "DigitalOcean" }
];

const benefits = [
  {
    icon: "💰",
    title: "Cost Efficient",
    description: "Pay only for what you use with no upfront hardware costs"
  },
  {
    icon: "⚡",
    title: "High Performance",
    description: "Access to high-performance computing resources"
  },
  {
    icon: "📈",
    title: "Scalability",
    description: "Scale resources up or down based on demand"
  },
  {
    icon: "🛡️",
    title: "Reliability",
    description: "99.9% uptime with built-in redundancy"
  }
];

export default CloudComputing;