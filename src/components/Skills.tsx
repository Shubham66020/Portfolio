import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Brain, Globe, Database, Terminal, Cloud,
  Cpu, GitBranch, Server, Monitor, Wrench, Layout
} from 'lucide-react';

const skills = {
  'Programming Languages': [
    { name: 'C++', icon: Code2 },
    { name: 'Python', icon: Terminal },
    { name: 'JavaScript', icon: Globe }
  ],
  'Web Development': [
    { name: 'HTML/CSS', icon: Layout },
    { name: 'React', icon: Monitor },
    { name: 'Next.js', icon: Server }
  ],
  'Machine Learning': [
    { name: 'Scikit-Learn', icon: Brain },
    { name: 'TensorFlow', icon: Cpu }
  ],
  'Tools & Technologies': [
    { name: 'Git', icon: GitBranch },
    { name: 'AWS/GCP', icon: Cloud },
    { name: 'Docker', icon: Database },
    { name: 'DevOps', icon: Wrench }
  ]
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-black p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <h3 className="text-primary font-bold text-xl mb-6">{category}</h3>
              <div className="space-y-4">
                {skillList.map(({ name, icon: Icon }, skillIndex) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="text-primary" size={20} />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {['Problem Solving', 'Team Collaboration', 'Time Management', 'Continuous Learning'].map((skill, index) => (
            <div key={skill} className="bg-black p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">{skill}</span>
                <span className="text-primary">95%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '95%' } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}