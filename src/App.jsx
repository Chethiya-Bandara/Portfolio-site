import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="bg-[#050505] selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <Connect />
      
      <footer className="py-12 border-t border-white/20 text-center text-white/50 text-[10px] uppercase tracking-[0.2em]">
        <p>Made with React.</p>
        &copy; {new Date().getFullYear()} · All rights reserved · Chethiya Bandara</footer>
    </div>
  );
}

export default App;