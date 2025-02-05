import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, BriefcaseIcon, Filter, DollarSign, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    experience: '',
    jobType: ''
  });

  useEffect(() => {
    fetch('/data/jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data.jobs));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Find Your Dream IT Job</h1>
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {job.type}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1" />
                {job.experience}
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Posted {format(new Date(job.postedDate), 'MMM d, yyyy')}
              </div>
            </div>

            <p className="text-gray-700 mb-4">{job.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Jobs;