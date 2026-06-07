import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si';

export default function Skills() {
  const skillsList = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'C++ / OOP', icon: <SiCplusplus /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Technologies I work with
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {skillsList.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent"
            >
              <span className="text-4xl text-muted transition-colors duration-200 group-hover:text-accent">
                {skill.icon}
              </span>
              <p className="text-center text-sm font-medium text-foreground">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
