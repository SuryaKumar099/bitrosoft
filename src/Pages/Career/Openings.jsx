import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const Openings = () => {
  const [jobs, setJobs] = useState(allJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: 'all',
    type: 'all',
    experience: 'all'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allJobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.department.toLowerCase().includes(term) ||
      job.skills.some(skill => skill.toLowerCase().includes(term))
    );

    setJobs(filtered);
  };

  const handleFilter = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let filtered = allJobs;

    if (newFilters.department !== 'all') {
      filtered = filtered.filter(job => job.department === newFilters.department);
    }

    if (newFilters.type !== 'all') {
      filtered = filtered.filter(job => job.type === newFilters.type);
    }

    if (newFilters.experience !== 'all') {
      filtered = filtered.filter(job => job.experience === newFilters.experience);
    }

    setJobs(filtered);
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-green-50 to-white">
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
            Current Openings
            <span className="block text-3xl md:text-4xl text-green-600 mt-2">
              Join Our Growing Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore exciting career opportunities and be part of something extraordinary
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search jobs by title, skills, or department..."
                className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaFilter className="inline mr-2" /> Department
                </label>
                <select
                  value={filters.department}
                  onChange={(e) => handleFilter('department', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  <option value="all">All Departments</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="product">Product</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaBriefcase className="inline mr-2" /> Job Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilter('type', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="remote">Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline mr-2" /> Experience
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) => handleFilter('experience', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  <option value="all">All Levels</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior</option>
                  <option value="lead">Lead</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Available Positions ({jobs.length})
            </h2>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({ department: 'all', type: 'all', experience: 'all' });
                setJobs(allJobs);
              }}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Clear All Filters
            </button>
          </div>

          {jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </motion.div>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            <FaMapMarkerAlt className="mr-1" /> {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            <FaBriefcase className="mr-1" /> {job.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            <FaClock className="mr-1" /> {job.experience}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600 mb-2">
                          <FaDollarSign className="inline" /> {job.salary}
                        </div>
                        <span className="text-sm text-gray-500">
                          Posted: {job.posted}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Department:</h4>
                      <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                        {job.department}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {job.responsibilities.slice(0, 4).map((resp, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-500 text-sm">
                          {job.applicants} applicants • Apply by {job.deadline}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
                          Apply Now
                        </button>
                        <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-900 to-emerald-900 text-white rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-green-100">{benefit.description}</p>
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find Your Dream Role?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Submit your resume and we'll notify you when matching positions open up
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Submit Resume
              </button>
            </div>
            <p className="mt-4 text-green-100 text-sm">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const allJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "engineering",
    location: "Remote",
    type: "Full Time",
    experience: "Senior",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    deadline: "Dec 30, 2024",
    applicants: 24,
    responsibilities: [
      "Develop and maintain React-based web applications",
      "Collaborate with design and backend teams",
      "Write clean, testable, and efficient code",
      "Participate in code reviews and team meetings",
      "Optimize applications for maximum performance"
    ],
    skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL", "Jest"]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "design",
    location: "New York, NY",
    type: "Full Time",
    experience: "Mid Level",
    salary: "$85,000 - $110,000",
    posted: "1 week ago",
    deadline: "Jan 15, 2025",
    applicants: 18,
    responsibilities: [
      "Create user-centered designs",
      "Develop wireframes and prototypes",
      "Conduct user research and testing",
      "Collaborate with product and engineering teams",
      "Maintain design systems"
    ],
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "engineering",
    location: "San Francisco, CA",
    type: "Contract",
    experience: "Senior",
    salary: "$130,000 - $160,000",
    posted: "3 days ago",
    deadline: "Jan 10, 2025",
    applicants: 15,
    responsibilities: [
      "Manage cloud infrastructure on AWS",
      "Implement CI/CD pipelines",
      "Monitor system performance",
      "Ensure security best practices",
      "Automate deployment processes"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"]
  },
  {
    id: 4,
    title: "Product Manager",
    department: "product",
    location: "Remote",
    type: "Full Time",
    experience: "Senior",
    salary: "$140,000 - $170,000",
    posted: "5 days ago",
    deadline: "Jan 20, 2025",
    applicants: 32,
    responsibilities: [
      "Define product vision and strategy",
      "Work with cross-functional teams",
      "Prioritize product features",
      "Analyze market and user needs",
      "Track product performance metrics"
    ],
    skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis", "Roadmapping", "User Stories"]
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "marketing",
    location: "Chicago, IL",
    type: "Part Time",
    experience: "Entry Level",
    salary: "$60,000 - $75,000",
    posted: "1 week ago",
    deadline: "Jan 5, 2025",
    applicants: 28,
    responsibilities: [
      "Develop marketing campaigns",
      "Manage social media presence",
      "Create content for various channels",
      "Analyze campaign performance",
      "Collaborate with sales team"
    ],
    skills: ["Digital Marketing", "SEO", "Content Creation", "Social Media", "Google Analytics", "Email Marketing"]
  },
  {
    id: 6,
    title: "HR Coordinator",
    department: "hr",
    location: "Austin, TX",
    type: "Full Time",
    experience: "Mid Level",
    salary: "$70,000 - $85,000",
    posted: "2 weeks ago",
    deadline: "Jan 25, 2025",
    applicants: 21,
    responsibilities: [
      "Manage recruitment processes",
      "Coordinate employee onboarding",
      "Handle employee relations",
      "Maintain HR records",
      "Assist with benefits administration"
    ],
    skills: ["Recruitment", "Onboarding", "HR Policies", "Employee Relations", "Communication", "Organization"]
  }
];

const benefits = [
  {
    icon: "💼",
    title: "Career Growth",
    description: "Clear promotion paths and skill development programs"
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive medical, dental, and vision insurance"
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    description: "Above-market salaries with performance bonuses"
  },
  {
    icon: "🏖️",
    title: "Work-Life Balance",
    description: "Flexible hours and unlimited paid time off"
  },
  {
    icon: "🏠",
    title: "Remote Friendly",
    description: "Work from anywhere with our remote-first policy"
  },
  {
    icon: "🎓",
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences"
  },
  {
    icon: "🍽️",
    title: "Meals & Snacks",
    description: "Free lunch and fully stocked kitchens at offices"
  },
  {
    icon: "🚀",
    title: "Stock Options",
    description: "Equity ownership for all full-time employees"
  }
];

export default Openings;