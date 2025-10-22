import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sunnyreddy2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sannihith-reddy-k-527926251', label: 'LinkedIn' },
    { icon: Code, href: 'https://hackerrank.com/profile/sannihithreddy_1', label: 'HackerRank' },
    { icon: Mail, href: 'mailto:sannihithreddy.k789@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  darkMode
                    ? 'bg-gray-800 text-blue-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                } transition-all shadow-md hover:shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>by Kothakapu Sannihith Reddy</span>
            </p>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
