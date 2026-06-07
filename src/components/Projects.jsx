import { motion } from 'framer-motion';
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Student Registration System",
      description: "Built using HTML, CSS, JavaScript with form validation.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
    },
    {
      title: "Chat App",
      description: "A communication-based chat application project.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80"
    },
    {
      title: "E-Commerce Website",
      description: "A modern online shopping website with product cards and clean user interface.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
    },
    {
      title: "YouTube Clone",
      description: "A video platform clone inspired by YouTube layout and design.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80"
    },
    {
      title: "Tea House",
      description: "A responsive landing page project for a tea brand or tea shop.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80"
    },
    {
      title: "Biker Zone",
      description: "A stylish website project for bike products and services.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
    },
    {
      title: "Food Restaurant Project",
      description: "A restaurant website with menu, food items, and modern design.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
    },
    {
      title: "Simple Calculator",
      description: "A Java-based application that performs basic arithmetic operations.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&q=80"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectList.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <ProjectCard title={proj.title} description={proj.description} image={proj.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
