import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 rounded-2xl p-1 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-[#050024] h-full w-full rounded-xl p-6 flex flex-col z-10">
        <div className="h-40 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] border border-white/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/50 transition-colors">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
          ) : (
            <h3 className="text-xl font-bold text-white text-center px-4 z-10 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">
              {title}
            </h3>
          )}
          <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/0 transition-colors duration-300 pointer-events-none"></div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">{title}</h3>

        <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">{description}</p>

        <a
          href="https://github.com/sizan999"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border border-cyan-500/50 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-[#03001C] transition-all duration-300 text-sm font-semibold hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
