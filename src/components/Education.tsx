import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      institution: 'K L University',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2023 – 2027',
      location: 'Hyderabad, India',
      grade: 'CGPA: 9.86',
      icon: GraduationCap,
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (MPC)',
      duration: '2021 – 2023',
      location: 'Hyderabad, India',
      grade: 'Percentage: 95.6%',
      icon: Award,
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg">
                  <edu.icon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-blue-500">
                    {edu.institution}
                  </h3>
                  <p className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.degree}
                  </p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.duration} | {edu.location}
                  </p>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
