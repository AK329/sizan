import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">sizan12092@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">+880178695617</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Bangladesh</p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/sizan999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-cyan-500 text-[#03001C] px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:-translate-y-1"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col gap-5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl bg-[#050024]/50 border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-xl bg-[#050024]/50 border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-4 rounded-xl bg-[#050024]/50 border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
