import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Info, Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home', icon: null },
    { to: '/jobs', label: 'Placements', icon: Briefcase },
    { to: '/internships', label: 'Internships', icon: GraduationCap },
    { to: '/hackathons', label: 'Training', icon: Code2 },
    { to: '/resources', label: 'Resources', icon: BookOpen },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                Poornima TPO
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600 relative"
              >
                {location.pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600"
                  />
                )}
                {Icon && <Icon className="w-4 h-4 mr-1" />}
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={`${
                location.pathname === to
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
              } block px-3 py-2 rounded-md text-base font-medium flex items-center`}
            >
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;