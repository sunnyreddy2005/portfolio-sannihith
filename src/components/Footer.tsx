import { motion } from 'framer-motion';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Made</span>
              
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
