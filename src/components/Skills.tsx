import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Brain, Users } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      icon: Code2,
      skills: ['C', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Libraries & Frameworks',
      icon: Wrench,
      skills: ['Flask', 'SQLAlchemy', 'React.js', 'jQuery', 'Next.js', 'Axios', 'Tailwind CSS'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      category: 'Databases & Cloud',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Node.js', 'Git', 'GitHub'],
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Core Areas',
      icon: Brain,
      skills: ['AI', 'ML', 'Web Development', 'Cloud Security', 'Data Science'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Teamwork', 'Communication', 'Creativity', 'Problem Solving'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section
      id="skills"
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
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-500">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    } hover:bg-gradient-to-r ${category.color} hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
