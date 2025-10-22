import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

interface InternshipProps {
  darkMode: boolean;
}

const Internship = ({ darkMode }: InternshipProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const responsibilities = [
    'Working on GenAI projects and real-world AI applications',
    'Enhancing collaboration through AI-driven development',
    'Delivering technically robust and business-impactful solutions',
  ];

  return (
    <section
      id="internship"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Internship Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-teal-400 hidden md:block" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'
            } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all ml-0 md:ml-16`}
          >
            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex-shrink-0"
              >
                <Briefcase size={32} className="text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-blue-500">
                  AI Intern
                </h3>
                <p className={`text-xl font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  igebra.ai
                </p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Feb 2025 – July 2025 | Hyderabad, India
                </p>

                <div className="space-y-3">
                  {responsibilities.map((resp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
