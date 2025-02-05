import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Building2, 
  Users, 
  Target,
  CheckCircle,
  TrendingUp,
  Globe,
  Laptop,
  BookCheck,
  Medal
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: Briefcase,
      title: 'Campus Placements',
      description: 'Connect with 500+ recruiting partners including top MNCs and startups',
      link: '/jobs',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Industry-aligned technical and soft skills development programs',
      link: '/hackathons',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: BookOpen,
      title: 'Career Development',
      description: 'Comprehensive resources for interview preparation and skill enhancement',
      link: '/resources',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Building2,
      title: 'Industry Partnerships',
      description: 'Collaborations with leading tech companies for specialized training',
      link: '/about',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { number: '95%+', label: 'Placement Rate', icon: Award },
    { number: '500+', label: 'Recruiting Partners', icon: Building2 },
    { number: '₹12 LPA', label: 'Highest Package', icon: Target },
    { number: '8000+', label: 'Alumni Network', icon: Users }
  ];

  const recruiters = [
    { name: 'TCS', logo: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&w=200' },
    { name: 'Infosys', logo: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?auto=format&fit=crop&w=200' },
    { name: 'Wipro', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200' },
    { name: 'IBM', logo: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=200' }
  ];

  const programs = [
    {
      icon: Laptop,
      title: 'Technical Skills',
      items: ['Full Stack Development', 'Cloud Computing', 'Data Structures', 'Machine Learning']
    },
    {
      icon: BookCheck,
      title: 'Professional Development',
      items: ['Communication Skills', 'Interview Preparation', 'Resume Building', 'Group Discussions']
    },
    {
      icon: Medal,
      title: 'Certifications',
      items: ['AWS Certification', 'Microsoft Azure', 'Google Cloud', 'Oracle Java']
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants} 
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-12 mb-16"
      >
        <div className="relative z-10 max-w-3xl">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold mb-6"
          >
            Shape Your Future with<br />Poornima Training & Placement
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Empowering students with industry-ready skills and exceptional placement opportunities. 
            Join our legacy of excellence in technical education and professional development.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Placements <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/hackathons"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold"
            >
              Training Programs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000"
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl p-12 mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg opacity-90">Setting new benchmarks in placements and career development</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-indigo-200" />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Training Programs Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Training Programs</h2>
          <p className="text-xl text-gray-600">Developing industry-ready professionals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <program.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <ul className="space-y-3">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${feature.color} p-4`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Top Recruiters */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-lg p-12 mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Top Recruiters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {recruiters.map((recruiter, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-xl bg-gray-50 p-6 flex items-center justify-center"
            >
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="text-center bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-12"
      >
        <Globe className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
        <h2 className="text-3xl font-bold mb-4">Begin Your Success Story</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join Poornima Institute's legacy of excellence in placements and training.
          Transform your career with our industry-focused programs and placement support.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/jobs"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;