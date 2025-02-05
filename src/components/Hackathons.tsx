import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, ExternalLink, CheckCircle, Target } from 'lucide-react';
import { format } from 'date-fns';

const Hackathons = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetch('/data/hackathons.json')
      .then(res => res.json())
      .then(data => setHackathons(data.hackathons));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Hackathons</h1>
        <p className="text-xl text-gray-600">Showcase your skills and win exciting prizes</p>
      </div>

      <div className="grid gap-8">
        {hackathons.map((hackathon) => (
          <motion.div
            key={hackathon.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{hackathon.title}</h2>
                <p className="text-gray-600 mb-4">Organized by {hackathon.organizer}</p>
                <p className="text-gray-700 mb-6">{hackathon.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>
                      {format(new Date(hackathon.startDate), 'MMM d')} - {format(new Date(hackathon.endDate), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>Prize Pool: {hackathon.prize}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{hackathon.participants} Participants</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-indigo-600" />
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {hackathon.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-indigo-600" />
                      Themes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.themes.map((theme, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <a
                  href={hackathon.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Register Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hackathons;