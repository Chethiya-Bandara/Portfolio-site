import { motion } from "framer-motion";
import PixelBlast from './PixelBlast';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#050505] overflow-hidden">
      
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#0b0149"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Content Layer */}
      {/* Removed pointer-events-none here so the buttons can be clicked! */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* NEW: System Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm flex items-center gap-2 text-xs md:text-sm font-mono text-blue-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          System Online // Initializing sequence
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6">
          CHETHIYA <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">BANDARA</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Full-Stack & Machine Learning Engineer. Computer Science Undergrad.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Explore My Work
          </a>
          <a 
            href="https://github.com/Chethiya-Bandara" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white/5 text-white/90 font-semibold text-sm border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            View GitHub
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 animate-bounce text-white/20 z-10 pointer-events-none"
      >
        <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;