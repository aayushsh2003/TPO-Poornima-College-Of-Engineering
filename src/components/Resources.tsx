import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Video, Code, Download, Clock, Target, Award } from 'lucide-react';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => setResources(data.resources));
  }, []);

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'course':
        return Book;
      case 'video series':
        return Video;
      case 'guide':
        return Code;
      case 'documentation':
        return Download;
      case 'workshop':
        return Target;
      default:
        return Book;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
        <p className="text-xl text-gray-600">Curated materials to help you grow in your tech career</p>
      </div>

      <div className="grid gap-12">
        {resources.map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.03 }}
                    className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.duration}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Award className="w-4 h-4 mr-1" />
                            {item.difficulty}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Topics covered:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {item.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-start text-gray-700"
                              >
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Resources;