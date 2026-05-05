import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            RUBAN S
          </motion.h1>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-6">
          Full-Stack Developer (MERN)
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building responsive interfaces and scalable backends. Passionate about creating seamless user experiences and robust architectures.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Get In Touch
          </motion.button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/rubanofficial"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300 text-3xl"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ruban-s"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300 text-3xl"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/S_RUBAN/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
            title="LeetCode"
          >
            <i className="fab fa-code"></i>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-400 text-sm">Scroll to explore</p>
          <p className="text-2xl">⬇️</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
