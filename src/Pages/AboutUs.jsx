import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaChartLine, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-indigo-50 to-white">
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
            About BITROSOFT
            <span className="block text-3xl md:text-4xl text-indigo-600 mt-4">
              Innovating the Future, One Byte at a Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of innovators, creators, and problem-solvers dedicated to
            transforming businesses through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl text-indigo-600 mb-4">
                {stat.icon}
              </div>
              <motion.div
                initial={{ number: 0 }}
                animate={{ number: stat.value }}
                transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
              >
                {({ number }) => <>{Math.floor(number)}{stat.plus && '+'}</>}
              </motion.div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-2/3 p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-6 opacity-90">
                  Founded in 2015 by a group of visionary engineers, BITROSOFT began as a small
                  startup with a big dream: to make advanced technology accessible to businesses of all sizes.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Today, we've grown into a global technology partner, serving clients across
                  15 countries and delivering innovative solutions that drive real business impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    🏆 Tech Startup of the Year 2020
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    🌍 Global Expansion 2021
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    💼 500+ Projects Delivered
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl text-indigo-600 mb-6 inline-block"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {value.description}
                </p>
                <div className="space-y-2">
                  {value.points.map((point, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      {member.social.map((social, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute md:relative left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 z-10">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 mt-8 md:mt-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold text-indigo-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                          {item.milestone}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you're looking to transform your business or build an amazing career,
              we'd love to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Contact Our Team
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Download Company Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const stats = [
  {
    icon: <FaRocket />,
    value: 500,
    plus: true,
    label: "Projects Completed"
  },
  {
    icon: <FaUsers />,
    value: 200,
    plus: true,
    label: "Team Members"
  },
  {
    icon: <FaChartLine />,
    value: 150,
    plus: true,
    label: "Happy Clients"
  },
  {
    icon: <FaAward />,
    value: 25,
    plus: true,
    label: "Industry Awards"
  }
];

const values = [
  {
    icon: "💡",
    title: "Innovation First",
    description: "We constantly push boundaries and embrace new technologies",
    points: [
      "R&D investment",
      "Hackathons & innovation days",
      "Continuous learning",
      "Experimental projects"
    ]
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description: "We build lasting relationships based on trust and results",
    points: [
      "Transparent communication",
      "Regular progress updates",
      "Flexible collaboration",
      "Long-term support"
    ]
  },
  {
    icon: "🎯",
    title: "Excellence",
    description: "We deliver exceptional quality in everything we do",
    points: [
      "Best practices",
      "Quality assurance",
      "Continuous improvement",
      "Attention to detail"
    ]
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "We build solutions that last and grow with your business",
    points: [
      "Scalable architecture",
      "Future-proof solutions",
      "Performance optimization",
      "Maintenance planning"
    ]
  },
  {
    icon: "🌈",
    title: "Diversity",
    description: "We celebrate different perspectives and backgrounds",
    points: [
      "Inclusive hiring",
      "Equal opportunities",
      "Cultural awareness",
      "Team diversity"
    ]
  },
  {
    icon: "❤️",
    title: "Integrity",
    description: "We do what's right, even when no one is watching",
    points: [
      "Ethical practices",
      "Data privacy",
      "Honest communication",
      "Accountability"
    ]
  }
];

const team = [
  {
    name: "Alexandra Chen",
    position: "CEO & Founder",
    bio: "Former Google engineer with 15+ years in tech leadership",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    social: [
      { icon: "in", platform: "LinkedIn" },
      { icon: "🐦", platform: "Twitter" },
      { icon: "📧", platform: "Email" }
    ]
  },
  {
    name: "Marcus Johnson",
    position: "CTO",
    bio: "PhD in Computer Science, AI/ML specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    social: [
      { icon: "in", platform: "LinkedIn" },
      { icon: "💻", platform: "GitHub" },
      { icon: "📧", platform: "Email" }
    ]
  },
  {
    name: "Sophia Williams",
    position: "Head of Product",
    bio: "Ex-Facebook PM with 10+ years product experience",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    social: [
      { icon: "in", platform: "LinkedIn" },
      { icon: "📱", platform: "Product" },
      { icon: "📧", platform: "Email" }
    ]
  },
  {
    name: "Raj Patel",
    position: "Head of Engineering",
    bio: "Built scalable systems for Fortune 500 companies",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    social: [
      { icon: "in", platform: "LinkedIn" },
      { icon: "💻", platform: "GitHub" },
      { icon: "📚", platform: "Blog" }
    ]
  }
];

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Founded in a small garage with 3 engineers and a big vision",
    milestone: "First 10 clients"
  },
  {
    year: "2017",
    title: "First Major Milestone",
    description: "Secured Series A funding and expanded team to 25 members",
    milestone: "$2M funding"
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Opened offices in 3 countries and served 100+ clients",
    milestone: "International presence"
  },
  {
    year: "2021",
    title: "Technology Leadership",
    description: "Launched AI/ML division and won Tech Innovation Award",
    milestone: "Industry recognition"
  },
  {
    year: "2023",
    title: "Current Era",
    description: "Serving 150+ clients globally with 200+ team members",
    milestone: "Market leader"
  }
];

export default AboutUs;