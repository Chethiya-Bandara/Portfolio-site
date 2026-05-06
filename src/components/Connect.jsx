import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Connect = () => {
  const socials = [
    { 
      name: "GitHub", 
      url: "https://github.com/Chethiya-Bandara", 
      color: "hover:text-white hover:border-white/40" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/chethiya-bandara-845017330/", 
      color: "hover:text-blue-400 hover:border-blue-400/40" 
    },
    { 
      name: "Email", 
      url: "mailto:Chethiyabandara2004@gmail.com", 
      color: "hover:text-red-400 hover:border-red-400/40" 
    },
  ];

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter"
        >
          Let's Build <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent italic">Something!</span>
        </motion.h2>

        <div className="mb-20 space-y-6">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="font-mono text-xs md:text-sm tracking-[0.3em] text-green-500 uppercase flex items-center justify-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System status: Ready for deployment!
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl text-white/70 max-w-4xl mx-auto leading-tight tracking-tight font-medium"
          >
            Feel free to contact me for new challenges to solve and systems to architect. 
            Let's build something <span className="relative inline-block text-white">
              efficient.
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
            <span className="relative inline-block text-white text-xl md:text-2xl ml-1">Email me to get my resume.</span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 text-white/70 transition-all duration-300 ${social.color} group backdrop-blur-sm`}
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                {social.name}
              </span>
              
              <ArrowUpRight 
                size={20} 
                className="opacity-20 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </motion.a>
          ))}
        </div>

        <p className="mt-24 text-white/50 text-[10px] uppercase tracking-[0.6em] font-light">
          Architected in the void
        </p>
      </div>
    </section>
  );
};

export default Connect;