import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Find Jobs', path: '/jobs' },
    { label: 'Browse Internships', path: '/internships' },
    { label: 'Upcoming Hackathons', path: '/hackathons' },
    { label: 'Learning Resources', path: '/resources' },
    { label: 'About Us', path: '/about' }
  ];

  const resources = [
    { label: 'Career Guide', path: '/resources#career-guide' },
    { label: 'Interview Tips', path: '/resources#interview-tips' },
    { label: 'Resume Builder', path: '/resources#resume-builder' },
    { label: 'Skill Assessments', path: '/resources#assessments' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/aayushsharma' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/aayushsharma' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/aayushsharma' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/aayushsharma' },
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/aayushsharma' }
  ];

  return (
    <footer className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Poornima Training & Placement Office</h3>
            <p className="text-gray-200 mb-4">
              Empowering the next generation of tech professionals with opportunities and resources.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@itfreshershub.com" 
                className="flex items-center text-gray-200 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                contact@itfreshershub.com
              </a>
              <a href="tel:+1234567890" 
                className="flex items-center text-gray-200 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start text-gray-200">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley,<br />California, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="flex items-center text-gray-200 hover:text-white hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path}
                    className="flex items-center text-gray-200 hover:text-white hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-200 mb-4">
              Subscribe to our newsletter for the latest opportunities and tech updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 py-8 border-t border-white/10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-200 hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5 mr-2" />
              {social.label}
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <p className="text-gray-200">
                © {new Date().getFullYear()} Poornima Training & Placement Office. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  {index > 0 && <span className="text-gray-400">•</span>}
                  <Link 
                    to={link.path}
                    className="text-gray-200 hover:text-white text-sm"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center text-sm text-gray-200">
              <span className="flex items-center">
                Developed with <Heart className="w-4 h-4 mx-1 text-pink-300" /> by
                <a 
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-semibold hover:text-pink-200"
                >
                  Aayush Sharma
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;