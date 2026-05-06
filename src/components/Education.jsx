const Education = () => {
  const edu = [
    { school: "Edith Cowan University, Sri Lanka", 
      degree: "BSc in Computer Science (major in Software Engineering)", 
      status: "Pursuing final year studies at Edith Cowan University Sri Lanka. Currently maintaining a GPA of 3.4+.",
      year: "2024 - Present" 
    },
    { school: "Trinity College, Kandy", 
      degree: "GCE Advanced Level", 
      status: "Under the physical science stream, I achieved 1A, 1B, 1C.",
      year: "2020 - 2023" 
    },
    { school: "Trinity College, Kandy", 
      degree: "GCE Ordinary Level", 
      status: "Completed O/Ls at Trinity College Kandy. Where I obtained 9As.",
      year: "2010 - 2020" 
    }
  ];

  return (
    <section id = "education" className="relative min-h-[80vh] flex items-center py-40 bg-[#0a0a0a] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-12 tracking-tighter text-white">
          My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Journey</span>
        </h2>

        <div className="space-y-12">
          {edu.map((item, i) => (
            <div key={i} className="border-l border-white/30 pl-8 relative group pb-12 last:pb-0">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300" />
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400/80">
                  {item.year}
                </span>
                
                <h4 className="text-2xl font-semibold tracking-tight text-white/90">
                  {item.school}
                </h4>
                
                <p className="text-lg font-medium text-white/70">
                  {item.degree}
                </p>
                
                <p className="text-base text-white/40 leading-relaxed max-w-2xl">
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;