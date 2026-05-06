import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import LetterGlitch from './LetterGlitch';

const TechStack = () => {
  const stack = [
    {
      category: "Languages & Logic",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "C++", "HTML", "CSS"]
    },
    {
      category: "Frontend & Interface",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Flutter", "Vite"]
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Node.js", "Flask", "PostgreSQL", "Supabase", "SQL Server",  "MySQL", "Ruby on Rails"]
    },
    {
      category: "Tools & Concepts",
      skills: ["Unity", "Git", "Github", "Docker", "Jira", "VS Code", "REST APIs", "OOP", "System Design", "Netlify", "MVC Architecture"]
    }
  ];

  return (
    <section 
      id="stack" 
      // relative and min-h-screen ensure the background has a container to fill
      className="relative min-h-screen w-full flex items-center py-32 px-4 md:px-8 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      
      {/* Background Fix: Covers 100% of the section's height and width */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"> 
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          // Forces the internal canvas to stretch to the container
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Layer */}
      <div className="w-full max-w-[90rem] mx-auto relative z-10"> 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter">
            Technical <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Arsenal</span>.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((group, idx) => (
              <BorderGlow 
                key={idx} 
                className="p-8 min-h-[400px] flex flex-col justify-start"
                backgroundColor="#080808"
                borderRadius={24}
                colors={['#4ade80', '#14b8a6', '#0ea5e9']}
                edgeSensitivity={50}
              >
                <h3 className="text-green-400 font-semibold mb-8 uppercase tracking-[0.4em] text-[18px] opacity-90">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-sm md:text-base text-white/90 bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 hover:border-teal-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </BorderGlow>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;