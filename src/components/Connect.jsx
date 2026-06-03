import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Connect = () => {
  const socials = [
    { 
      name: "GitHub", 
      url: "https://github.com/Chethiya-Bandara", 
      color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/chethiya-bandara-845017330/", 
      color: "hover:text-blue-400 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.04)]" 
    },
    { 
      name: "Email", 
      url: "mailto:Chethiyabandara2004@gmail.com", 
      color: "hover:text-rose-400 hover:border-rose-500/20 hover:shadow-[0_0_30px_rgba(244,63,94,0.04)]" 
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black border-t border-white/5 overflow-hidden">
      {/* Structural Tech Grid Backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        
        {/* Main Heading - Fixed Responsive Scale */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
        >
          Let's work on{" "}
          <span className="bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-200 bg-clip-text text-transparent">
            Something.
          </span>
        </motion.h2>

        {/* Supporting Copy Container */}
        <div className="mb-20 space-y-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-neutral-400 leading-tight tracking-tight font-medium"
          >
            Feel free to contact me for new challenges to solve and systems to architect. 
            Let's build something{" "}
            <span className="relative inline-block text-white group cursor-default">
              efficient.
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-white/30 transition-colors duration-300 group-hover:bg-white" />
            </span>
          </motion.p>

          {/* Isolated Resume Callout to fix text overlapping */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm text-white tracking-widest uppercase block pt-4 font-light"
          >
            Email me to request my resume
          </motion.div>
        </div>
        
        {/* Social Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              whileTap={{ scale: 0.99 }}
              className={`flex items-center justify-between p-6 rounded-xl bg-white/[0.01] border border-white/5 text-neutral-400 transition-all duration-500 ${social.color} group backdrop-blur-md`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {social.name}
              </span>
              
              <ArrowUpRight 
                size={18} 
                className="opacity-20 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </motion.a>
          ))}
        </div>

        {/* Minimal Footer Signature */}
        <p className="mt-28 text-neutral-600 text-[9px] uppercase tracking-[0.7em] font-medium pointer-events-none select-none">
          Architected in the void
        </p>
      </div>
    </section>
  );
};

export default Connect;