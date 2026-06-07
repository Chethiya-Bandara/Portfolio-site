import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";

const projects = [
  {
    title: "Mediconnect",
    desc: "Worked in a group to develop an automated healthcare management system for pharmacies and hospitals.",
    tags: ["React", "FastAPI", "PostgreSQL", "Supabase", "Gemini Chatbot"],
    github: "https://github.com/Mohamed-Ruzaik/MediConnect"
  },
  {
    title: "Monetra",
    desc: "Personal finance tracking with Prophet ML forecasting and real time analytics.",
    tags: ["Next.js", "Prophet ML", "Tailwind", "FastAPI", "Supabase", "Gemini Chatbot"],
    github: "https://github.com/Chethiya-Bandara/Monetra"
  },
  {
    title: "TumorDetect.AI",
    desc: "Deep learning CNN to track tumor growth from MRI scans.",
    tags: ["Python", "TensorFlow", "Streamlit", "Convolutional Neural Networks", "Computer Vision"],
    github: "https://github.com/Chethiya-Bandara/TumorDetect-AI"
  },
  {
    title: "Noughts-and-crosses",
    desc: "Simple tic-tac-toe game with integrated difficulty levels.",
    tags: ["flutter","dart"],
    github: "https://github.com/Chethiya-Bandara/noughts-and-crosses"
  },
  {
    title: "Premier League Analysis Dashboard",
    desc: "Sports data analytics platform. A work in progress, which currently supports only CLI version",
    tags: ["Python", "APIs", "Data Visualisation"],
    github: "https://github.com/Chethiya-Bandara/Premier_League_Analysis"
  },
  {
    title: "TaskForge (Under progress)",
    desc: "Team collaboration platform containing kanban boards and task tracking",
    tags: ["Express.js", "React", "Postman API Testing"],
    github: "https://github.com/Chethiya-Bandara/TaskForge"
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      // Changed base to pure black to anchor the void theme, increased vertical padding
      className="relative py-32 px-8 bg-black overflow-hidden"
    >
      {/* --- CREATIVE BACKGROUND START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. The Data Grid: Subtle dotted pattern representing data points */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* 2. Top Left Aurora (Blue) */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />

        {/* 3. Bottom Right Aurora (Purple) */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen" />
        
        {/* 4. Vignette mask to fade out the edges seamlessly into the black void */}
        <div className="absolute inset-0 bg-black/40 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>
      {/* --- CREATIVE BACKGROUND END --- */}

      {/* Added relative and z-10 to ensure content floats above the background */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <BorderGlow 
              key={i}
              className="p-8 h-full flex flex-col backdrop-blur-sm" // Added backdrop-blur for glass effect against the orbs
              backgroundColor="rgba(8, 8, 8, 0.7)" // Made slightly transparent
              borderRadius={16}
              colors={['#3b82f6', '#8b5cf6', '#0ea5e9']}
              edgeSensitivity={40}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map(tag => (
                    <motion.span 
                      key={tag}
                      whileHover={{ y: -2, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      className="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <a 
                href={p.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-all border border-white/10 hover:border-blue-500/50"
              >
                View on Github
              </a>
            </BorderGlow>
          ))}

          <BorderGlow 
            className="p-8 h-full flex flex-col border border-dashed border-white/10 backdrop-blur-sm"
            backgroundColor="rgba(0, 0, 0, 0.4)"
            borderRadius={16}
            colors={['#1e293b', '#334155']}
            edgeSensitivity={20}
          >
            <div className="flex-grow flex flex-col justify-center items-center text-center py-12">
              <div className="w-12 h-12 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <motion.span 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="text-blue-500 text-xl"
                >
                  +
                </motion.span>
              </div>
              <h3 className="text-xl font-semibold text-white/80 mb-2">Many more to come!</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                This is just the start! Currently architecting new solutions in the void.
              </p>
            </div>
            
            <div className="mt-auto w-full py-3 rounded-lg bg-white/[0.02] text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold border border-white/5 text-center cursor-default">
              System Loading...
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default Projects;