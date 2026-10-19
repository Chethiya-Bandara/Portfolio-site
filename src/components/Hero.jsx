import { motion } from "framer-motion";
import GlowCursor from "./GlowCursor";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-5
        overflow-hidden
        bg-[#04100c]
      "
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,rgba(5,150,105,0.13),transparent_35%),radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.08),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(101,163,13,0.10),transparent_32%)]
          "
        />

        {/* Central glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            md:w-[700px]
            md:h-[700px]
            rounded-full
            bg-emerald-600/[0.07]
            blur-[140px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,10,6,0.72)_100%)]
          "
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#04100c] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06120d] to-transparent" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <GlowCursor
          color="#4ade80"
          secondaryColor="#059669"
          intensity={1.3}
          trailWidth={3}
          linger={1.4}
          glow={1.2}
          quality="medium"
          clickBurst
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          max-w-6xl
        "
      >
        <h1
          className="
            text-[3.5rem]
            sm:text-6xl
            md:text-8xl
            lg:text-[9.5rem]
            font-bold
            tracking-[-0.06em]
            leading-[0.9]
            text-white
          "
        >
          CHETHIYA
          <br />

          <span
            className="
              bg-gradient-to-r
              from-green-300
              via-emerald-400
              to-lime-500
              bg-clip-text
              text-transparent
            "
          >
            BANDARA
          </span>
        </h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "110px", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="
            h-px
            bg-gradient-to-r
            from-transparent
            via-emerald-400
            to-transparent
            mt-8
            mb-7
          "
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="
            text-sm
            sm:text-base
            md:text-xl
            text-white/80
            max-w-2xl
            leading-8
            px-4
          "
        >
          Building scalable web applications, intelligent systems,
          and data-driven products with modern software engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            mt-10
          "
        >
          {/* Primary */}
          <a
            href="#projects"
            className="
              group
              relative
              px-8
              py-4
              rounded-xl
              overflow-hidden
              bg-gradient-to-r
              from-emerald-700
              to-green-700
              text-white
              font-semibold
              text-sm
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-green-400/20
                via-transparent
                to-lime-400/20
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Chethiya-Bandara"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              px-8
              py-4
              rounded-xl
              bg-white/[0.04]
              hover:bg-white/[0.07]
              text-white/80
              hover:text-white
              font-semibold
              text-sm
              border
              border-white/10
              hover:border-green-400/25
              backdrop-blur-md
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FaGithub size={18} />
            <span>GitHub</span>

            <span
              className="
                text-white/40
                group-hover:text-green-300
                transition-colors
              "
            >
              ↗
            </span>
          </a>
        </motion.div>

        {/* Tech stack hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="
            flex
            flex-wrap
            justify-center
            gap-x-5
            gap-y-2
            mt-10
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/50
          "
        >
          <span>React</span>
          <span>•</span>
          <span>FastAPI</span>
          <span>•</span>
          <span>Python</span>
          <span>•</span>
          <span>PostgreSQL</span>
          <span>•</span>
          <span>Machine Learning</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;