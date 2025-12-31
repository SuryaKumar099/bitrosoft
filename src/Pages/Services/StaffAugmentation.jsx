import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUserTie, FaLaptopCode, FaChartLine, FaHandshake, FaClock } from 'react-icons/fa';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const StaffAugmentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
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
            Staff Augmentation
            <span className="block text-3xl md:text-4xl text-orange-600 mt-2">
              Scale Your Team with Top Talent
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Add skilled professionals to your team quickly and efficiently. Get the right talent for your specific needs.
          </p>
        </motion.div>

        {/* Animated Team Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 to-yellow-900/40"></div>

            {/* Floating Team Icons */}
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 text-white text-5xl"
            >
              <FaUsers />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              className="absolute top-1/2 right-1/3 text-white text-6xl"
            >
              <FaLaptopCode />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-2/3 text-white text-4xl"
            >
              <FaUserTie />
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-yellow-500"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step Number */}
                  <div className="absolute md:relative left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`md:w-5/12 mt-8 md:mt-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="text-4xl text-orange-600 mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Available Talent Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl text-orange-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.roles.map((role, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Experience: {category.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-900 to-yellow-900 text-white rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Staff Augmentation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-orange-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Skilled Talent? We Have You Covered!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get matched with pre-vetted professionals in 48 hours or less
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Request Talent Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View Talent Profiles
              </button>
            </div>
            <div className="mt-8 text-orange-100">
              <FaClock className="inline-block mr-2" />
              Average matching time: <span className="font-bold">48 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const processSteps = [
  {
    number: "1",
    icon: <FaHandshake />,
    title: "Requirements Analysis",
    description: "We understand your project needs, team structure, and required skill sets.",
    duration: "1-2 Days"
  },
  {
    number: "2",
    icon: <FaUsers />,
    title: "Talent Matching",
    description: "Our AI-powered system matches you with pre-vetted professionals from our network.",
    duration: "24-48 Hours"
  },
  {
    number: "3",
    icon: <FaLaptopCode />,
    title: "Interview & Selection",
    description: "Conduct interviews and select the perfect fit for your team.",
    duration: "2-3 Days"
  },
  {
    number: "4",
    icon: <FaUserTie />,
    title: "Onboarding & Integration",
    description: "Seamless onboarding with full support for team integration.",
    duration: "1 Week"
  },
  {
    number: "5",
    icon: <FaChartLine />,
    title: "Ongoing Support",
    description: "Continuous monitoring and support throughout the engagement.",
    duration: "Ongoing"
  }
];

const categories = [
  {
    icon: "💻",
    title: "Development",
    roles: ["Frontend Developers", "Backend Engineers", "Full Stack Developers", "Mobile Developers", "DevOps Engineers"],
    experience: "3+ years"
  },
  {
    icon: "🎨",
    title: "Design & UX",
    roles: ["UI/UX Designers", "Product Designers", "Graphic Designers", "UX Researchers", "Design Systems"],
    experience: "2+ years"
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    roles: ["Data Scientists", "ML Engineers", "Data Analysts", "BI Specialists", "Data Engineers"],
    experience: "3+ years"
  },
  {
    icon: "☁️",
    title: "Cloud & Infrastructure",
    roles: ["Cloud Architects", "System Administrators", "Network Engineers", "Security Specialists"],
    experience: "4+ years"
  },
  {
    icon: "🎯",
    title: "Project Management",
    roles: ["Product Managers", "Scrum Masters", "Project Coordinators", "Agile Coaches"],
    experience: "3+ years"
  },
  {
    icon: "🛡️",
    title: "Quality Assurance",
    roles: ["QA Engineers", "Test Automation", "Manual Testers", "Performance Testers"],
    experience: "2+ years"
  }
];

const benefits = [
  {
    icon: "⚡",
    title: "Fast Onboarding",
    description: "Get professionals onboarded within days, not months"
  },
  {
    icon: "🎯",
    title: "Pre-vetted Talent",
    description: "All candidates go through rigorous screening and testing"
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description: "Save 40% compared to traditional hiring methods"
  },
  {
    icon: "🔄",
    title: "Flexible Engagement",
    description: "Hourly, monthly, or project-based contracts available"
  },
  {
    icon: "🌍",
    title: "Global Talent Pool",
    description: "Access to top talent from around the world"
  },
  {
    icon: "🛡️",
    title: "Risk Free",
    description: "30-day replacement guarantee if not satisfied"
  }
];

export default StaffAugmentation;