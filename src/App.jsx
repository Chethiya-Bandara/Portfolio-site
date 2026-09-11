import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Connect from "./components/Connect";
import { ArrowUp } from "lucide-react";

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

      <footer
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.06]
          bg-[#050816]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              w-[500px]
              h-[200px]
              rounded-full
              bg-blue-600/[0.05]
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_20%,rgba(3,5,12,0.7)_100%)]
            "
          />
        </div>

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            md:px-8
            py-10
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-6
            "
          >
            <div className="text-center md:text-left">
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  font-semibold
                  text-white/70
                "
              >
                Chethiya Bandara
              </p>

              <p className="mt-2 text-[10px] text-white/25 tracking-[0.15em]">
                Software Engineering • Full-Stack • Machine Learning
              </p>
            </div>

            {/* Center */}
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/20
                text-center
              "
            >
              Built with React
            </p>

            {/* Back to top */}
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Back to top"
              className="
                group
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.02]
                text-white/35
                hover:text-white
                hover:border-blue-400/20
                hover:bg-blue-500/[0.05]
                transition-all
                duration-300
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                "
              >
                Back to top
              </span>

              <ArrowUp
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>

          {/* Bottom line */}
          <div
            className="
              mt-8
              pt-6
              border-t
              border-white/[0.05]
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-3
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/15
              "
            >
              © {new Date().getFullYear()} Chethiya Bandara
            </p>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/15
              "
            >
              All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;