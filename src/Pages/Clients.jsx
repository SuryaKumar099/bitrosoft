import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaBuilding, FaGlobe, FaChartBar, FaHandshake } from 'react-icons/fa';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Clients = () => {
  const [filter, setFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredClients = filter === 'all'
    ? clients
    : clients.filter(client => client.industry === filter);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-teal-50 to-white">
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
            Our Clients
            <span className="block text-3xl md:text-4xl text-teal-600 mt-4">
              Trusted by Industry Leaders
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We partner with forward-thinking organizations to deliver exceptional results
            and drive digital transformation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {clientStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl text-teal-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Filter */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Filter by Industry
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${filter === 'all'
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setFilter(industry.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${filter === industry.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Client Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, rotateY: 10 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  {/* Client Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{client.logo}</span>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {client.name}
                    </h3>
                    <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                      <FaBuilding className="mr-2" />
                      {client.industry} • {client.location}
                    </div>
                    <div className="flex justify-center items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mx-0.5" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {client.rating}/5
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Project:</h4>
                      <p className="text-gray-600 text-sm">{client.project}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                      <div className="space-y-2">
                        {client.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {client.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <FaQuoteLeft className="text-2xl mb-3" />
                    <p className="text-sm italic">"{client.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-8 md:mb-0">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-teal-100">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-12">
                  <FaQuoteLeft className="text-4xl text-teal-600 mb-6" />
                  <p className="text-xl text-gray-700 mb-8 italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-teal-600 font-semibold">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                      ? 'bg-teal-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Partnership Models
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {model.title}
                </h3>
                <p className="mb-6 opacity-90">
                  {model.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold">{model.duration}</span>
                  <div className="text-sm opacity-80">Typical Engagement</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm opacity-80">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Satisfaction Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">Uptime SLA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const clientStats = [
  {
    icon: <FaBuilding />,
    value: "150+",
    label: "Enterprise Clients"
  },
  {
    icon: <FaGlobe />,
    value: "15+",
    label: "Countries Served"
  },
  {
    icon: <FaChartBar />,
    value: "95%",
    label: "Retention Rate"
  },
  {
    icon: <FaHandshake />,
    value: "4.9/5",
    label: "Client Satisfaction"
  }
];

const industries = [
  { id: 'finance', name: 'Finance & Banking' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'retail', name: 'Retail & E-commerce' },
  { id: 'education', name: 'Education' },
  { id: 'technology', name: 'Technology' },
  { id: 'manufacturing', name: 'Manufacturing' }
];

const clients = [
  {
    id: 1,
    name: "FinTrust Bank",
    logo: "🏦",
    industry: "finance",
    location: "New York, USA",
    rating: 4.9,
    project: "Digital Banking Platform",
    results: [
      "40% increase in mobile app usage",
      "30% reduction in transaction time",
      "99.9% platform uptime"
    ],
    technologies: ["React", "Node.js", "AWS", "Blockchain"],
    quote: "Transformed our digital banking experience"
  },
  {
    id: 2,
    name: "HealthCare Plus",
    logo: "🏥",
    industry: "healthcare",
    location: "London, UK",
    rating: 4.8,
    project: "Telemedicine Platform",
    results: [
      "50% more patient consultations",
      "Secure HIPAA compliance",
      "Real-time video consultations"
    ],
    technologies: ["React Native", "WebRTC", "PostgreSQL", "Redis"],
    quote: "Revolutionized our patient care delivery"
  },
  {
    id: 3,
    name: "StyleHub",
    logo: "🛍️",
    industry: "retail",
    location: "Paris, France",
    rating: 5.0,
    project: "E-commerce Platform",
    results: [
      "300% increase in online sales",
      "2-second page load time",
      "Personalized recommendations"
    ],
    technologies: ["Next.js", "GraphQL", "MongoDB", "ElasticSearch"],
    quote: "Our best investment in digital transformation"
  },
  {
    id: 4,
    name: "EduTech Solutions",
    logo: "🎓",
    industry: "education",
    location: "Singapore",
    rating: 4.7,
    project: "Learning Management System",
    results: [
      "10,000+ active student users",
      "95% course completion rate",
      "AI-powered learning paths"
    ],
    technologies: ["Vue.js", "Python", "Django", "TensorFlow"],
    quote: "Scalable platform that grows with our needs"
  },
  {
    id: 5,
    name: "TechNova",
    logo: "💻",
    industry: "technology",
    location: "San Francisco, USA",
    rating: 4.9,
    project: "Cloud Migration",
    results: [
      "60% cost reduction in infrastructure",
      "Zero downtime migration",
      "Enhanced security posture"
    ],
    technologies: ["Kubernetes", "Docker", "AWS", "Terraform"],
    quote: "Flawless migration with exceptional support"
  },
  {
    id: 6,
    name: "AutoMakers Inc",
    logo: "🏭",
    industry: "manufacturing",
    location: "Tokyo, Japan",
    rating: 4.8,
    project: "IoT Monitoring System",
    results: [
      "25% increase in production efficiency",
      "Predictive maintenance alerts",
      "Real-time factory monitoring"
    ],
    technologies: ["IoT", "React", "Node.js", "MQTT", "Time Series DB"],
    quote: "Transformed our manufacturing operations"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "FinTrust Bank",
    quote: "Working with BITROSOFT was a game-changer for our digital transformation. Their team's expertise and dedication delivered results beyond our expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "HealthCare Plus",
    quote: "The telemedicine platform they built helped us reach 50% more patients during the pandemic. Their understanding of healthcare compliance was impressive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emma Wilson",
    position: "Director of E-commerce",
    company: "StyleHub",
    quote: "Our online sales tripled after launching the new platform. The user experience is exceptional, and the performance is outstanding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "David Park",
    position: "Head of Technology",
    company: "TechNova",
    quote: "The cloud migration was executed perfectly with zero downtime. Their technical expertise and project management are world-class.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const partnerships = [
  {
    icon: "🤝",
    title: "Strategic Partnership",
    description: "Long-term collaboration for digital transformation",
    features: [
      "Dedicated team",
      "Quarterly strategy reviews",
      "Innovation workshops",
      "Executive sponsorship"
    ],
    duration: "12+ months"
  },
  {
    icon: "🎯",
    title: "Project-Based",
    description: "Focused delivery for specific initiatives",
    features: [
      "Fixed scope & timeline",
      "Clear deliverables",
      "Regular progress reports",
      "Post-launch support"
    ],
    duration: "3-6 months"
  },
  {
    icon: "🚀",
    title: "Rapid MVP",
    description: "Quick development of Minimum Viable Products",
    features: [
      "Agile development",
      "Weekly demos",
      "User feedback integration",
      "Scalable architecture"
    ],
    duration: "1-3 months"
  }
];

export default Clients;