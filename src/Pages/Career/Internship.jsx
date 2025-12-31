import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLaptopCode, FaUsers } from 'react-icons/fa';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';

const Internship = () => {
  const [internships, setInternships] = useState(allInternships);
  const [selectedDept, setSelectedDept] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterByDepartment = (dept) => {
    setSelectedDept(dept);
    if (dept === 'all') {
      setInternships(allInternships);
    } else {
      setInternships(allInternships.filter(intern => intern.department === dept));
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white">
      <Nav/>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Internship Program
            <span className="block text-3xl md:text-4xl text-purple-600 mt-2">
              Launch Your Tech Career
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Gain hands-on experience, learn from industry experts, and build your professional network
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-4xl text-purple-600 mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Filter by Department
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => filterByDepartment('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedDept === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => filterByDepartment(dept.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedDept === dept.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Internship Listings */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Internships ({internships.length})
          </h2>

          {internships.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No internships in this department</h3>
              <p className="text-gray-600">Try selecting a different department</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {internship.title}
                        </h3>
                        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                          {internship.department}
                        </span>
                      </div>
                      <span className="text-4xl">{internship.icon}</span>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" /> {internship.location}
                      </span>
                      <span className="inline-flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2" /> {internship.duration}
                      </span>
                      <span className="inline-flex items-center text-gray-600">
                        <FaClock className="mr-2" /> {internship.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {internship.learnings.map((learning, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {internship.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Perks & Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.perks.map((perk, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                          >
                            {perk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-500 text-sm">
                          Stipend: <span className="font-bold text-gray-700">{internship.stipend}</span>
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
                          Apply Now
                        </button>
                        <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Program Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Program Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl text-purple-600 mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {highlight.description}
                </p>
                <ul className="space-y-2">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Hear From Our Alumni
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-purple-100 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-yellow-400">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Application Process
          </h2>
          <div className="relative">
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2"></div>
            <div className="flex flex-col md:flex-row justify-between">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex-1 text-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 mx-auto bg-white border-4 border-purple-500 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mb-4 shadow-lg z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-2 text-sm text-gray-500">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Applications are reviewed on a rolling basis. Apply today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
            <p className="mt-8 text-purple-100">
              Questions? Email us at{' '}
              <a href="mailto:internships@bitstatic.com" className="underline hover:text-white">
                internships@bitstatic.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const stats = [
  { icon: '🎓', value: '200+', label: 'Interns Hired' },
  { icon: '💼', value: '85%', label: 'Conversion Rate' },
  { icon: '⭐', value: '4.8', label: 'Average Rating' },
  { icon: '🌍', value: '15+', label: 'Countries' }
];

const departments = [
  { id: 'engineering', name: 'Engineering' },
  { id: 'design', name: 'Design' },
  { id: 'data', name: 'Data Science' },
  { id: 'product', name: 'Product' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' }
];

const allInternships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    department: "engineering",
    icon: "💻",
    location: "Remote",
    duration: "Summer 2024 (12 weeks)",
    schedule: "Full-time",
    stipend: "$5,000/month",
    learnings: [
      "Full-stack web development with modern frameworks",
      "Collaboration with senior engineers on real projects",
      "Agile development methodologies",
      "Code review and testing best practices",
      "Deployment and DevOps basics"
    ],
    requirements: [
      "Pursuing CS or related degree",
      "Knowledge of at least one programming language",
      "Basic understanding of algorithms",
      "Strong problem-solving skills",
      "Good communication abilities"
    ],
    perks: ["Mentorship", "Networking Events", "Certificate", "Letter of Recommendation", "Potential Full-time Offer"]
  },
  {
    id: 2,
    title: "UX Design Intern",
    department: "design",
    icon: "🎨",
    location: "San Francisco, CA",
    duration: "Fall 2024 (16 weeks)",
    schedule: "Part-time (20 hrs/week)",
    stipend: "$4,000/month",
    learnings: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Design system development",
      "Usability testing methodologies",
      "Collaboration with product teams"
    ],
    requirements: [
      "Portfolio of design work",
      "Proficiency in Figma/Sketch",
      "Understanding of design principles",
      "Creative problem-solving skills",
      "Attention to detail"
    ],
    perks: ["Design Workshops", "Conference Access", "Hardware Stipend", "Portfolio Review", "Mentorship"]
  },
  {
    id: 3,
    title: "Data Science Intern",
    department: "data",
    icon: "📊",
    location: "New York, NY",
    duration: "Spring 2025 (14 weeks)",
    schedule: "Full-time",
    stipend: "$5,500/month",
    learnings: [
      "Machine learning model development",
      "Data analysis and visualization",
      "Statistical analysis techniques",
      "Big data processing with Spark",
      "Production deployment of ML models"
    ],
    requirements: [
      "Strong background in statistics",
      "Experience with Python/R",
      "Knowledge of ML algorithms",
      "SQL proficiency",
      "Research experience preferred"
    ],
    perks: ["GPU Access", "Research Publication", "Conference Budget", "Mentorship", "Networking"]
  },
  {
    id: 4,
    title: "Product Management Intern",
    department: "product",
    icon: "🎯",
    location: "Remote",
    duration: "Summer 2024 (12 weeks)",
    schedule: "Full-time",
    stipend: "$4,800/month",
    learnings: [
      "Product strategy and roadmapping",
      "User story creation and backlog management",
      "Data-driven decision making",
      "Cross-functional team leadership",
      "Market analysis and competitive research"
    ],
    requirements: [
      "Strong analytical skills",
      "Excellent communication abilities",
      "Basic understanding of tech products",
      "Leadership experience",
      "Customer-centric mindset"
    ],
    perks: ["Executive Mentorship", "Product Training", "Customer Meetings", "Strategy Sessions", "Networking"]
  }
];

const highlights = [
  {
    icon: "👨‍🏫",
    title: "Mentorship Program",
    description: "Each intern is paired with an experienced mentor",
    features: [
      "Weekly one-on-one sessions",
      "Career guidance and advice",
      "Technical skill development",
      "Networking opportunities"
    ]
  },
  {
    icon: "🏆",
    title: "Real Projects",
    description: "Work on meaningful projects that impact the business",
    features: [
      "Contribute to live products",
      "Own features end-to-end",
      "Present to leadership",
      "Build your portfolio"
    ]
  },
  {
    icon: "🌐",
    title: "Global Network",
    description: "Connect with professionals worldwide",
    features: [
      "Global intern community",
      "Virtual networking events",
      "Alumni connections",
      "International exposure"
    ]
  }
];

const testimonials = [
  {
    initials: "SA",
    name: "Sarah Johnson",
    role: "Former Intern, now Software Engineer",
    quote: "The mentorship I received was incredible. My project became a key feature in our product!",
    rating: 5
  },
  {
    initials: "MJ",
    name: "Michael Chen",
    role: "Former Intern, now Product Manager",
    quote: "The hands-on experience with real customers was invaluable for my career growth.",
    rating: 5
  },
  {
    initials: "EP",
    name: "Emily Park",
    role: "Former Intern, now UX Designer",
    quote: "The design team's feedback helped me build a portfolio that landed me multiple offers.",
    rating: 5
  }
];

const processSteps = [
  {
    number: "1",
    title: "Online Application",
    description: "Submit your resume and cover letter",
    duration: "10-15 minutes"
  },
  {
    number: "2",
    title: "Technical Assessment",
    description: "Complete our coding challenge or design task",
    duration: "60-90 minutes"
  },
  {
    number: "3",
    title: "Video Interview",
    description: "Interview with team members",
    duration: "45 minutes"
  },
  {
    number: "4",
    title: "Final Decision",
    description: "Receive your offer letter",
    duration: "1-2 weeks"
  }
];

export default Internship;