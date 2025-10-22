import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
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
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          } rounded-2xl p-8 shadow-xl`}
        >
          <motion.p
            className={`text-lg leading-relaxed mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a <span className="font-semibold text-blue-500">B.Tech Computer Science student</span> at K L University (2023–2027) with a CGPA of <span className="font-semibold text-teal-400">9.8</span>, passionate about Artificial Intelligence, Web Development, and Machine Learning.
          </motion.p>

          <motion.p
            className={`text-lg leading-relaxed mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Currently, I am working as an <span className="font-semibold text-blue-500">AI Intern at igebra.ai</span>, developing AI-driven applications that solve real-world problems. I've built multiple Full Stack AI-based projects and participated in hackathons, merging my skills in AI, problem-solving, and user-centered design.
          </motion.p>

          <motion.p
            className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I'm constantly learning new technologies and strive to create <span className="font-semibold text-teal-400">innovative digital solutions</span> that have a meaningful impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
