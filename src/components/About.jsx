import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";

const About = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center py-24 px-8 border-t border-white/5 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 70% 50%, #0a192f 0%, #050505 100%)'
      }}
    >
      {/* Subtle Noise Texture for that premium "grainy" feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-300 leading-relaxed text-base md:text-lg">
            <div className="flex flex-col justify-center">
              <p className="mb-6">
                I am a developer who bridges the gap between <span className="text-white">complex data systems</span> and intuitive user interfaces. With a strong foundation in both machine learning and full-stack web development, I build applications that are not only highly functional but also intelligent.
              </p>
              <p>
                Whether it's deploying a deep learning CNN to track medical anomalies or structuring a <span className="text-white">high-concurrency backend</span> for a healthcare system, my goal is always to write clean, scalable, and impactful code.
              </p>
            </div>
            
            <BorderGlow 
              className="p-8 h-full flex flex-col justify-center shadow-2xl shadow-blue-900/10"
              backgroundColor="rgba(5, 5, 5, 0.8)" // Slightly transparent to let the blue peek through
              borderRadius={20}
              colors={['#3b82f6', '#8b5cf6', '#0ea5e9']}
            >
              <h3 className="text-white text-xl font-medium mb-6">Core Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span>
                  Predictive Modeling & Deep Learning
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#8b5cf6]"></span>
                  High-Performance Backends (FastAPI)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#0ea5e9]"></span>
                  Modern UI/UX Implementation (React)
                </li>
              </ul>
            </BorderGlow>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;