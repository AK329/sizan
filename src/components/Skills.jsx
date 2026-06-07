import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skillsList = [
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-500" /> },
    { name: "Software Engineering", icon: <FaNodeJs className="text-5xl text-green-500" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          My Skills
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                {skill.icon}
              </div>
              <p className="font-semibold text-gray-300 group-hover:text-cyan-300 transition-colors text-center text-sm mt-2">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
