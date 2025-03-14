import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown, Code, Brain, Database } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_75%,#333_75%)]" 
             style={{ backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Trend Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary px-4 py-1 rounded-full text-white text-sm font-bold"
          >
            NICE TO SEE YOU HERE 👋
          </motion.div>

          {/* Main Title */}
          <div className="space-y-2">
            <motion.div 
              className="text-6xl font-heading font-black text-white tracking-tighter h-[100px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  'HI, I AM SHUBHAM',
                  1000,
                  'ML ENTHUSIAST',
                  1000,
                  'WEB DEVELOPER',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 text-gray-400"
            >
              <span className="text-xl font-medium">DEVELOPER</span>
              <span className="w-16 h-[1px] bg-primary">FixBugs</span>
              <span className="text-xl font-medium">ENGINEER</span>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-primary/20 p-4 rounded-lg">
              <div className="text-primary text-sm">EXPERIENCE</div>
              <div className="text-white text-2xl font-bold">FRESHER</div>
            </div>
            <div className="border border-primary/20 p-4 rounded-lg">
              <div className="text-primary text-sm">PROJECTS</div>
              <div className="text-white text-2xl font-bold">25+</div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="text-primary text-sm font-medium">TECH STACK</div>
            <div className="flex gap-3">
              {[Code, Brain, Database].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center"
                >
                  <Icon className="text-primary" size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a 
              href="https://github.com/Shubham66020" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://twitter.com/Shubham241424" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/shubham-yadav-07199a24b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Image and Overlays */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[0/4] rounded-lg overflow-hidden">
            <img
              src="assets/images/B&W DP (1).png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg"
            >
              <div className="text-xs text-gray-400">ROLE</div>
              <div className="text-white font-medium">Full Stack Developer</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-400">SPECIALIZATION</div>
                  <div className="text-white font-medium">Machine Learning & Web Dev</div>
                </div>
                {/* <div className="flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <div key={size} className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs text-gray-400">
                      {size}
                    </div>
                  ))}
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}