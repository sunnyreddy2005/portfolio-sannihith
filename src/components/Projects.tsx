import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'CFO-Helper',
      description: 'A web-based financial assistant leveraging AI to analyze company data and generate insights. Designed for startups and small businesses to automate expense tracking and cash flow forecasting.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI'],
      github: 'https://github.com/sunnyreddy2005/CFO-Helper',
      live: 'https://cfo-helper-six.vercel.app/',
    },
    {
      title: 'AI Story Builder for Kids',
      description: 'AI-powered story generator using React, Next.js, and TypeScript handling 100+ users. Enhanced engagement by 40% through interactive storytelling. Improved backend query performance by 35%.',
      tech: ['React', 'Next.js', 'TypeScript', 'AI'],
      github: 'https://github.com/sunnyreddy2005/ai-story-builder',
      live: 'https://ai-story-builder-green.vercel.app/',
    },
    {
      title: 'Full Stack Chat App',
      description: 'Real-time messaging app using React, Node.js, Express, MongoDB, and Socket.IO. Added JWT authentication, reducing login failures by 50%. Optimized event handling, cutting server load by 60%.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      github: 'https://github.com/sunnyreddy2005/fullstack-chat-app-Deployment',
      live: 'https://fullstack-chat-app-frontend-np9p.onrender.com/',
    },
    {
      title: 'Grocery Analytics Dashboard',
      description: 'Built a data analytics dashboard for grocery retail insights using React, Chart.js, and Python Flask API. Visualizes sales, customer behavior, and inventory trends for decision-making.',
      tech: ['React', 'Chart.js', 'Python', 'Flask'],
      github: 'https://github.com/sunnyreddy2005/Grocery-Analytics-Dashboard',
      live: 'https://grocery-analytics-dashboard.vercel.app/',
    },
    {
      title: 'SIH – GreenQuest',
      description: 'A sustainability-focused project for Smart India Hackathon. Developed a platform to track eco-friendly practices and carbon footprint using MERN stack and AI-based recommendation system.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AI'],
      github: 'https://github.com/sunnyreddy2005/SIH-GreenQuest',
      live: 'https://sih-green-quest.vercel.app/',
    },
    {
      title: 'Medication Recommendation System',
      description: 'AI-based disease prediction app using SVM with 85% accuracy. Built a Flask UI with symptom-based medicine suggestions. Reduced response time by 25% via optimized API calls.',
      tech: ['Python', 'Flask', 'SVM', 'ML'],
      github: 'https://github.com/sunnyreddy2005',
      live: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${
                darkMode ? 'bg-gray-900' : 'bg-gray-50'
              } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group`}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-500 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-gray-800 text-teal-400'
                        : 'bg-gray-200 text-blue-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-all`}
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white transition-all"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
