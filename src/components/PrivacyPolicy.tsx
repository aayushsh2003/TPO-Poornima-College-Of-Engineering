import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, contact details)',
        'Professional information (education, work experience)',
        'Usage data and analytics',
        'Cookies and tracking information'
      ]
    },
    {
      icon: Lock,
      title: 'How We Protect Your Data',
      content: [
        'Industry-standard encryption protocols',
        'Regular security audits and updates',
        'Strict access controls and authentication',
        'Data backup and recovery procedures'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Providing and improving our services',
        'Personalizing your experience',
        'Communication about opportunities',
        'Analytics and platform enhancement'
      ]
    },
    {
      icon: Database,
      title: 'Data Storage and Retention',
      content: [
        'Secure cloud infrastructure',
        'Data retention policies',
        'Regular data cleanup',
        'User data export options'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Your privacy is our top priority
        </motion.p>
      </div>

      {/* Last Updated */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-12 text-center"
      >
        <p className="text-gray-600">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="prose max-w-none mb-12"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          At IT Freshers Hub, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
        </p>
      </motion.div>

      {/* Main Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <section.icon className="w-12 h-12 text-indigo-600 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="space-y-8 mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <Bell className="w-12 h-12 text-indigo-600 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Communications</h2>
          <p className="text-gray-700 mb-4">
            We may contact you regarding:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Service updates and announcements</li>
            <li>Job and internship opportunities</li>
            <li>Platform features and improvements</li>
            <li>Newsletter (with your consent)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <Globe className="w-12 h-12 text-indigo-600 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfer</h2>
          <p className="text-gray-700">
            Your information may be transferred to and processed in countries other than your country of residence. 
            We ensure appropriate safeguards are in place to protect your data during such transfers.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
        <p className="mb-6">
          If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
        </p>
        <a
          href="mailto:privacy@itfreshershub.com"
          className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Contact Privacy Team
        </a>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;