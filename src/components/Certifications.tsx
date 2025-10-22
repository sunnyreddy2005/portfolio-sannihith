import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications = ({ darkMode }: CertificationsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'AWS Academy Graduate',
      issuer: 'AWS Cloud Foundations',
      link: '#',
      icon: '☁️',
    },
    {
      title: 'PW DSA Certification',
      issuer: 'PW Skills',
      link: '#',
      icon: '📊',
    },
    {
      title: 'Spring Framework Course',
      issuer: 'Online Course',
      link: '#',
      icon: '🌱',
    },
    {
      title: 'Introduction to Operating Systems',
      issuer: 'Coursera',
      link: '#',
      icon: '💻',
    },
    {
      title: 'Meta React Basics',
      issuer: 'Coursera',
      link: '#',
      icon: '⚛️',
    },
    {
      title: 'LeetCode & CodeChef',
      issuer: 'Competitive Programming',
      link: '#',
      icon: '🏆',
    },
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`w-80 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all flex-shrink-0`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-blue-500">
                      {cert.title}
                    </h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cert.issuer}
                    </p>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg text-sm font-medium"
                    >
                      <span>View</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-xl`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-500">
            Extracurricular Activities
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Igebra.ai Hackathon (Feb 2025): Built an AI storytelling app for kids',
              'Full Stack Chat App Development (Feb 2025 – Present): Backend and UI developer',
              'Hackathon (MedHelper Project): Built AI-based medical recommender using Flask and SVM',
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <Award size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
