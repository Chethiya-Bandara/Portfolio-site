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
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] brightness-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Obsessive <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Execution.</span>
            </h2>
            <div className="h-[1px] w-40 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* The Narrative */}
            <div className="lg:col-span-7 space-y-8 text-slate-300">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white font-medium leading-snug">
                  I don't just participate in systems; I optimize them. 
                </p>
                <p className="text-lg leading-relaxed">
                  From my O-Levels through my A-Levels and into University, my trajectory has been defined by a refusal to settle for "good enough." This drive helped me move forward. It wasn't about the accolades—it was about proving that rigorous discipline produces unshakeable results.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, I apply that same academic rigor to full-stack engineering. Whether I'm architecting <span className="text-white underline decoration-blue-500/30 underline-offset-4">high-concurrency healthcare backends</span> or training deep learning models, my goal is to eliminate friction and build for the long term.
                </p>
              </div>

              {/* The "Manifesto" list */}
              <div className="space-y-4 pt-6 border-l-2 border-blue-500/20 pl-6">
                <p className="italic text-slate-400">
                  <strong className="text-white not-italic">The Philosophy:</strong> Make it clean. Make it make sense. Make it last.
                </p>
                <p className="italic text-slate-400">
                  <strong className="text-white not-italic">The Approach:</strong> I’m a hands-on collaborator who works in the trenches with the team, holding the architectural structure together so the vision can flow.
                </p>
              </div>
            </div>

            {/* The Technical Card */}
            <div className="lg:col-span-5">
              <BorderGlow 
                className="p-[1px]"
                backgroundColor="transparent"
                borderRadius={24}
                colors={['#3b82f6', '#8b5cf6']}
              >
                <div className="bg-[#050505]/90 backdrop-blur-3xl p-10 rounded-[23px] border border-white/5 h-full">
                  <h3 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-8">System Focus</h3>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Architectural Integrity
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Structuring scalable, high-performance backends using FastAPI and modern cloud infrastructure.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        Applied Intelligence
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Integrating ML models into production environments to turn static data into predictive insights.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'FastAPI', 'ML/DL'].map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-400 uppercase tracking-tighter">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;