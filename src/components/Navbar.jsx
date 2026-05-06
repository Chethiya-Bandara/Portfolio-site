import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "stack" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-4 md:p-8 pointer-events-none">
      
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="pointer-events-auto"
      >
        <a 
          href="#home" 
          className="text-white font-bold tracking-tighter text-lg md:text-xl uppercase"
        >
          Chethiya <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Bandara</span>
        </a>
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto flex gap-1 md:gap-2 px-2 md:px-4 py-1.5 rounded-full bg-[#050505]/70 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-medium text-white/60 shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 md:px-4 py-2 hover:text-white transition-colors rounded-full"
            >
              {hovered === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="hidden md:block w-32"></div>
    </nav>
  );
};

export default Navbar;