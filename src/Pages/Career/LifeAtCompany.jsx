import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaTrophy, FaGlassCheers, FaHandsHelping, FaLaughBeam } from 'react-icons/fa';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';

const LifeAtCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white">
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
            Life at Bitrosoft
            <span className="block text-3xl md:text-4xl text-pink-600 mt-2">
              More Than Just a Workplace
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A culture of innovation, collaboration, and growth where every team member thrives
          </p>
        </motion.div>

        {/* Hero Video/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-orange-900/40"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 text-white text-5xl"
            >
              <FaHeart />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 right-1/3 text-white text-6xl"
            >
              <FaUsers />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-2/3 text-white text-4xl"
            >
              <FaLaughBeam />
            </motion.div>
          </div>
        </motion.div>

        {/* Culture Values */}
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ rotateY: 10 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl text-pink-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-700 mb-2">Manifestations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {value.manifestations.map((manifestation, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                      >
                        {manifestation}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Office Tour */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Office Spaces
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeSpaces.map((space, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{space.title}</h3>
                    <p className="text-sm opacity-90">{space.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Employee Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-900 to-rose-900 text-white rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Employee Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-pink-100 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Team Stories & Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                    <p className="text-gray-600">{story.role}</p>
                    <p className="text-sm text-gray-500">Joined: {story.tenure}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{story.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {story.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Events & Activities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Events & Activities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-4xl text-pink-600 mb-4">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">🎯 {event.frequency}</span>
                    <span>👥 {event.participation}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white p-12 rounded-3xl shadow-2xl mb-2">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of a team that celebrates your growth and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Meet Our Team
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule Office Tour
              </button>
            </div>
            <div className="mt-8 flex justify-center space-x-8 text-pink-100">
              <span className="flex items-center">
                <FaGlassCheers className="mr-2" /> 200+ Happy Employees
              </span>
              <span className="flex items-center">
                <FaTrophy className="mr-2" /> 4.9/5 Glassdoor Rating
              </span>
              <span className="flex items-center">
                <FaHandsHelping className="mr-2" /> 15+ Employee Resource Groups
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const values = [
  {
    icon: "🤝",
    title: "Collaboration First",
    description: "We believe great things happen when people work together.",
    manifestations: ["Cross-team projects", "Open communication", "Pair programming", "Team retrospectives"]
  },
  {
    icon: "💡",
    title: "Innovation Driven",
    description: "We encourage creative thinking and experimenting with new ideas.",
    manifestations: ["Hackathons", "Innovation time", "Idea sharing sessions", "R&D budget"]
  },
  {
    icon: "❤️",
    title: "People First",
    description: "Our employees' well-being and growth are our top priority.",
    manifestations: ["Mental health support", "Career development", "Work-life balance", "Inclusive environment"]
  },
  {
    icon: "🎯",
    title: "Customer Obsessed",
    description: "Everything we do is focused on delivering value to our customers.",
    manifestations: ["Customer feedback loops", "Product quality", "User-centered design", "Quick iterations"]
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    description: "We embrace challenges as opportunities to learn and improve.",
    manifestations: ["Learning culture", "Constructive feedback", "Skill development", "Knowledge sharing"]
  },
  {
    icon: "🌈",
    title: "Diversity & Inclusion",
    description: "We celebrate differences and create equal opportunities for all.",
    manifestations: ["DEI initiatives", "Inclusive hiring", "Cultural awareness", "Accessible workplace"]
  }
];

const officeSpaces = [
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    title: "Collaboration Zones",
    description: "Open spaces designed for team brainstorming and creativity"
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Focus Areas",
    description: "Quiet zones for deep work and concentration"
  },
  {
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Wellness Rooms",
    description: "Spaces for relaxation, meditation, and mental breaks"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Game & Recreation",
    description: "Fun areas for team bonding and stress relief"
  },
  {
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Kitchen & Cafe",
    description: "Fully stocked kitchens with healthy snacks and drinks"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Meeting Pods",
    description: "Modern meeting spaces for productive discussions"
  }
];

const benefits = [
  {
    icon: "💰",
    title: "Competitive Compensation",
    description: "Above-market salaries with annual bonuses"
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and mental health coverage"
  },
  {
    icon: "🏖️",
    title: "Unlimited PTO",
    description: "Take time off when you need it to recharge"
  },
  {
    icon: "🏠",
    title: "Flexible Work",
    description: "Remote-first with flexible hours and locations"
  },
  {
    icon: "🎓",
    title: "Learning Stipend",
    description: "$3,000 annual budget for professional development"
  },
  {
    icon: "👶",
    title: "Parental Leave",
    description: "16 weeks paid leave for all new parents"
  },
  {
    icon: "🍽️",
    title: "Meals & Snacks",
    description: "Free meals, snacks, and beverages in all offices"
  },
  {
    icon: "🚴",
    title: "Fitness Allowance",
    description: "$500 monthly for gym memberships or fitness classes"
  }
];

const stories = [
  {
    name: "Alex Martinez",
    role: "Senior Software Engineer",
    tenure: "3 years",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "The mentorship culture here is incredible. I've grown more in 3 years than I did in my previous 5 years combined.",
    highlights: ["Promoted twice", "Mentored 5 junior engineers", "Led major product launch"]
  },
  {
    name: "Sarah Kim",
    role: "Product Designer",
    tenure: "2 years",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "The work-life balance is real here. I can do my best work while still having time for my family and hobbies.",
    highlights: ["Design system lead", "User research expert", "Cross-team collaboration"]
  },
  {
    name: "David Chen",
    role: "Data Scientist",
    tenure: "1 year",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "The learning opportunities are endless. I've attended 3 international conferences in my first year!",
    highlights: ["ML model deployment", "Conference speaker", "Open source contributor"]
  },
  {
    name: "Maria Rodriguez",
    role: "Engineering Manager",
    tenure: "4 years",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "Seeing my team grow and succeed is the most rewarding part. The company truly invests in people.",
    highlights: ["Built 2 teams from scratch", "Employee development programs", "Culture champion"]
  }
];

const events = [
  {
    icon: "🎪",
    title: "Monthly Hackathons",
    description: "24-hour innovation events to build creative solutions",
    frequency: "Monthly",
    participation: "80%+",
    tags: ["Innovation", "Learning", "Prizes", "Networking"]
  },
  {
    icon: "🎭",
    title: "Cultural Celebrations",
    description: "Events celebrating diversity and different cultures",
    frequency: "Quarterly",
    participation: "Company-wide",
    tags: ["Diversity", "Inclusion", "Food", "Music"]
  },
  {
    icon: "🏆",
    title: "Sports Tournaments",
    description: "Friendly competitions in various sports and games",
    frequency: "Seasonal",
    participation: "50-100 employees",
    tags: ["Fitness", "Team Building", "Fun", "Competition"]
  },
  {
    icon: "🎓",
    title: "Learning Workshops",
    description: "Professional development sessions and tech talks",
    frequency: "Bi-weekly",
    participation: "Open to all",
    tags: ["Learning", "Growth", "Skills", "Development"]
  },
  {
    icon: "🎨",
    title: "Creative Nights",
    description: "Art, music, and creative expression sessions",
    frequency: "Monthly",
    participation: "30-50 employees",
    tags: ["Creativity", "Arts", "Relaxation", "Expression"]
  },
  {
    icon: "🤝",
    title: "Volunteer Days",
    description: "Team volunteering in local community projects",
    frequency: "Quarterly",
    participation: "Company-wide",
    tags: ["Giving Back", "Community", "Teamwork", "Impact"]
  }
];

export default LifeAtCompany;