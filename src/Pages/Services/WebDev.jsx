import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';

const WebDev= () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8">
      <Nav />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Web Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building modern, scalable, and high-performance web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Web Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl text-green-600 mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-600">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Process Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Development Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center mb-8 md:mb-0"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const technologies = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description: "React, Vue.js, Angular, and modern JavaScript frameworks"
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
    description: "Node.js, Express, Django, Ruby on Rails, and PHP"
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description: "MongoDB, PostgreSQL, MySQL, and Redis integration"
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Fast loading, caching strategies, and CDN implementation"
  },
  {
    icon: "🔒",
    title: "Security",
    description: "SSL, authentication, authorization, and data protection"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first approach and cross-browser compatibility"
  }
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description: "Understand requirements and plan architecture"
  },
  {
    number: "2",
    title: "UI/UX Design",
    description: "Create wireframes and design mockups"
  },
  {
    number: "3",
    title: "Development",
    description: "Code implementation with agile methodology"
  },
  {
    number: "4",
    title: "Testing & Launch",
    description: "Quality assurance and deployment"
  }
];

export default WebDev;