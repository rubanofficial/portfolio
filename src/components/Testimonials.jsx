import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Project Mentor',
      role: 'Full-Stack Development',
      text: 'Ruban demonstrates strong problem-solving skills and excellent attention to detail in building scalable applications.',
      image: '👨‍💼'
    },
    {
      name: 'Team Lead',
      role: 'SAN Technovation',
      text: 'Impressed with Ruban\'s ability to learn quickly and implement efficient solutions using modern technologies.',
      image: '👨‍🔬'
    },
    {
      name: 'Code Reviewer',
      role: 'GitHub Contributor',
      text: 'Clean code, good documentation, and solid understanding of MERN stack best practices.',
      image: '👨‍💻'
    }
  ];

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-slate-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
        >
          What People Say
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{testimonial.image}</span>
                <div>
                  <h3 className="font-semibold text-cyan-400">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
