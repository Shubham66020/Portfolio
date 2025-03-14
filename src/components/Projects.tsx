import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Dynamic, responsive portfolio website showcasing skills and achievements using React.js.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Predictive Analytics Model',
    description: 'Built and deployed a predictive model using Linear Regression for sales forecasting.',
    tech: ['Python', 'Scikit-Learn', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Created a real-time chat application supporting multiple users and dynamic conversations.',
    tech: ['JavaScript', 'Node.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Image Classification System',
    description: 'Developed an image classification system using convolutional neural networks.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Cloud Task Manager',
    description: 'Built a task management application hosted on AWS with real-time updates.',
    tech: ['React', 'Node.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.tech))
  );

  const filteredProjects = selectedTech
    ? projects.filter(project => project.tech.includes(selectedTech))
    : projects;

  return (
    <section ref={ref} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-heading font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedTech === null
                ? 'bg-primary text-white'
                : 'bg-secondary text-gray-300 hover:bg-primary/20'
            }`}
          >
            All
          </motion.button>
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTech === tech
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-gray-300 hover:bg-primary/20'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <motion.div className="relative overflow-hidden h-48">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    href="#" 
                    className="text-white hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-white hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}