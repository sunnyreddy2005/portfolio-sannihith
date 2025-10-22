import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['AI Enthusiast', 'Full Stack Developer', 'ML Engineer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sunnyreddy2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sannihith-reddy-k-527926251', label: 'LinkedIn' },
    
    { icon: Mail, href: 'mailto:sannihithreddy.k789@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Profile photo: replace /profile.jpg in the public folder with your image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 p-1 overflow-hidden">
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}>
                  <img
                    src={profileImg}
                    alt="Sannihith Reddy"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Sannihith Reddy
              </span>
            </motion.h1>

            <motion.div
              className="h-16 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500"
              >
                {roles[roleIndex]}
              </motion.h2>
            </motion.div>

            <motion.p
              className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              B.Tech CSE Student | AI Intern @ igebra.ai
            </motion.p>

            <motion.div
              className="flex items-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Phone size={18} className="text-blue-500" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                +91-9392637652
              </span>
            </motion.div>

            <motion.div
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-blue-400 hover:bg-gray-700'
                      : 'bg-white text-blue-600 hover:bg-gray-100'
                  } shadow-lg transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-center ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
