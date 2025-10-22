import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  darkMode: boolean;
}

// Custom Icons for coding platforms
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11.257.004c-.37.002-.737.037-1.098.112a5.448 5.448 0 0 0-1.003.288 5.427 5.427 0 0 0-.91.467c-.14.088-.277.182-.409.284a5.48 5.48 0 0 0-.748.65 5.503 5.503 0 0 0-.65.748 5.427 5.427 0 0 0-.467.91c-.12.318-.216.647-.288 1.003a5.448 5.448 0 0 0-.112 1.098c0 .37.037.737.112 1.098.072.356.168.685.288 1.003.12.318.271.625.467.91.088.14.182.277.284.409a5.48 5.48 0 0 0 1.398 1.398c.285.196.592.347.91.467.318.12.647.216 1.003.288.36.075.728.112 1.098.112s.737-.037 1.098-.112a5.448 5.448 0 0 0 1.003-.288c.318-.12.625-.271.91-.467.14-.088.277-.182.409-.284a5.48 5.48 0 0 0 .748-.65c.275-.257.513-.54.65-.748.196-.285.347-.592.467-.91.12-.318.216-.647.288-1.003a5.448 5.448 0 0 0 .112-1.098c0-.37-.037-.737-.112-1.098a5.448 5.448 0 0 0-.288-1.003 5.427 5.427 0 0 0-.467-.91 5.48 5.48 0 0 0-1.398-1.398 5.427 5.427 0 0 0-.91-.467 5.448 5.448 0 0 0-1.003-.288 5.448 5.448 0 0 0-1.098-.112zm12.177 12.177c-.37.002-.737.037-1.098.112a5.448 5.448 0 0 0-1.003.288c-.318.12-.625.271-.91.467-.14.088-.277.182-.409.284a5.48 5.48 0 0 0-.748.65 5.503 5.503 0 0 0-.65.748c-.196.285-.347.592-.467.91-.12.318-.216.647-.288 1.003a5.448 5.448 0 0 0-.112 1.098c0 .37.037.737.112 1.098.072.356.168.685.288 1.003.12.318.271.625.467.91.088.14.182.277.284.409a5.48 5.48 0 0 0 1.398 1.398c.285.196.592.347.91.467.318.12.647.216 1.003.288.36.075.728.112 1.098.112s.737-.037 1.098-.112a5.448 5.448 0 0 0 1.003-.288c.318-.12.625-.271.91-.467.14-.088.277-.182.409-.284a5.48 5.48 0 0 0 .748-.65c.275-.257.513-.54.65-.748.196-.285.347-.592.467-.91.12-.318.216-.647.288-1.003a5.448 5.448 0 0 0 .112-1.098c0-.37-.037-.737-.112-1.098a5.448 5.448 0 0 0-.288-1.003 5.427 5.427 0 0 0-.467-.91 5.48 5.48 0 0 0-1.398-1.398 5.427 5.427 0 0 0-.91-.467 5.448 5.448 0 0 0-1.003-.288 5.448 5.448 0 0 0-1.098-.112z"/>
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
  </svg>
);

const Hero = ({ darkMode }: HeroProps) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Aspiring Software Engineer', 'AI Enthusiast', 'Tech Explorer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sunnyreddy2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sannihith-reddy-k-527926251', label: 'LinkedIn' },
    { icon: LeetCodeIcon, href: 'https://leetcode.com/u/sannihithreddy', label: 'LeetCode' },
    { icon: CodeChefIcon, href: 'https://www.codechef.com/users/sannihithreddy', label: 'CodeChef' },
    { icon: CodeforcesIcon, href: 'https://codeforces.com/profile/sannihithreddy.k789', label: 'Codeforces' },
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
