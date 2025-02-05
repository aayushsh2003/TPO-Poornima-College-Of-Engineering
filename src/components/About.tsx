import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Mail, Github, Award, Globe, Heart, Rocket } from 'lucide-react';

const About = () => {
  const mission = {
    title: 'Our Mission',
    description: 'To empower the next generation of tech professionals by providing them with the resources, opportunities, and community support they need to succeed in their careers.'
  };

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community and collaborative learning, fostering an environment where tech enthusiasts can grow together.'
    },
    {
      icon: Target,
      title: 'Quality Resources',
      description: 'Curated, up-to-date content and opportunities to help you stay ahead in the ever-evolving tech landscape.'
    },
    {
      icon: Heart,
      title: 'Inclusive Growth',
      description: 'Creating equal opportunities for all, regardless of background or experience level.'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Staying at the forefront of technology trends and preparing our community for the future.'
    }
  ];

  const team = [
    {
      name: 'Aayush Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
      description: 'Tech enthusiast with a vision to bridge the gap between fresh talent and industry opportunities.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
      description: 'Passionate about building and nurturing tech communities.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          About Poornima Training & Placement Office
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Building the future of tech careers, one opportunity at a time
        </motion.p>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl p-12 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
          <h2 className="text-3xl font-bold mb-6">{mission.title}</h2>
          <p className="text-xl leading-relaxed text-gray-100">{mission.description}</p>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <value.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Have questions or suggestions? We'd love to hear from you!</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Us
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;