import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Brain, Clock, Users } from 'lucide-react';

const strengths = [
  {
    icon: Brain,
    title: 'Problem-Solving',
    description: 'Strong analytical thinking and the ability to tackle complex challenges.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Effective communication and teamwork, with experience in both individual and group projects.'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Ability to prioritize tasks and meet deadlines in fast-paced settings.'
  },
  {
    icon: Book,
    title: 'Continuous Learning',
    description: 'Quick learner, open to new technologies, and thrives in dynamic environments.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-heading font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Education</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <h4 className="text-xl text-white mb-2">B.Tech in Computer Science</h4>
              <p className="text-gray-400 mb-4">Rungta College Of Engineering And Technology</p>
              <p className="text-primary">3rd Year</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-4 rounded-lg text-center"
              >
                <strength.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{strength.title}</h4>
                <p className="text-gray-400 text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}