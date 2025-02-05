import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, AlertTriangle, Scale, Shield, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: UserCheck,
      title: 'User Responsibilities',
      content: [
        'Maintain accurate account information',
        'Protect account credentials',
        'Comply with platform guidelines',
        'Respect other users and their content'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Activities',
      content: [
        'Sharing false or misleading information',
        'Unauthorized access attempts',
        'Harassment or abuse',
        'Spam or unsolicited communications'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'Content ownership rights',
        'License to use platform',
        'Trademark protection',
        'Copyright compliance'
      ]
    },
    {
      icon: Shield,
      title: 'Platform Security',
      content: [
        'Account security measures',
        'Data protection protocols',
        'Breach notification procedures',
        'Security best practices'
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
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Please read these terms carefully before using our platform
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
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-8 mb-12"
      >
        <FileText className="w-12 h-12 mb-6" />
        <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
        <p className="text-lg leading-relaxed">
          By accessing or using IT Freshers Hub, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
          If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
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

      {/* Additional Terms */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modifications</h3>
            <p className="text-gray-700">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this platform.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination</h3>
            <p className="text-gray-700">
              We may terminate or suspend your account and bar access to the platform immediately, without prior notice or liability, under our sole discretion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <HelpCircle className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Clarification?</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions about these Terms, please contact us.
        </p>
        <a
          href="mailto:legal@itfreshershub.com"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
        >
          Contact Legal Team
        </a>
      </motion.div>
    </motion.div>
  );
};

export default TermsOfService;