import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, DollarSign, Clock, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

const Internships = () => {
  const [internships, setInternships] = React.useState([]);

  React.useEffect(() => {
    fetch('/data/internships.json')
      .then(res => res.json())
      .then(data => setInternships(data.internships));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Internship Opportunities</h1>
        <p className="text-xl text-gray-600">Kickstart your career with hands-on experience</p>
      </div>

      <div className="grid gap-8">
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{internship.title}</h2>
                <p className="text-gray-600 mb-4">{internship.company}</p>
                <p className="text-gray-700 mb-6">{internship.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>Apply by {format(new Date(internship.applicationDeadline), 'MMM d, yyyy')}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {internship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center">
                <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Internships;