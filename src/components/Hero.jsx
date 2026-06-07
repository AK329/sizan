import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-3/5 bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-400 font-semibold mb-3 tracking-widest uppercase text-sm drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]"
            >
              Welcome to my universe
            </motion.p>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Ashiqul islam <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                Sizan
              </span>
            </h2>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-cyan-100 font-medium mb-6 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"
            >
              CSE Student | Full Stack Web Developer
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-300 max-w-xl leading-relaxed text-lg mb-10"
            >
              Hello! I'm Sizan, a passionate Computer Science and Engineering student focused on Full Stack Web Development and Software Engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-5"
            >
              <a
                href="/cv.pdf"
                download
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-cyan-500 border border-transparent rounded-xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:-translate-y-1"
              >
                Download CV
              </a>
              
              <a
                href="https://github.com/sizan999"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-cyan-400 transition-all duration-200 bg-white/5 border border-cyan-500/50 backdrop-blur-md rounded-xl hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-1"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] flex-shrink-0"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#03001C] bg-[#050024] relative z-10">
              <img 
                src="https://github.com/sizan999.png" 
                alt="Ashiqul islam Sizan" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/400x400/050024/06b6d4?text=Profile+Image";
                }}
              />
            </div>
            
            {/* Glowing orb decorations */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-60 animate-pulse z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
