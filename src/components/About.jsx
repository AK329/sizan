import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          About Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
          style={{ perspective: 1000 }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
        >
          {/* Subtle glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl text-center">
              Hello! I'm <span className="text-cyan-400 font-semibold">Sizan</span>, a Computer Science and Engineering student. I am
              passionate about Full Stack web development and software
              engineering. I enjoy learning new technologies and building
              practical projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
