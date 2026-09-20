import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import PixelBlast from "./PixelBlast";

const focusAreas = [
  {
    title: "Backend & Architecture",
    description:
      "Designing APIs, data models, authentication flows, and scalable backend systems with a strong focus on structure and reliability.",
    color: "blue",
  },
  {
    title: "Machine Learning",
    description:
      "Building and integrating ML solutions that turn data into practical insights, from computer vision to predictive analytics.",
    color: "violet",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Connecting backend systems and databases to responsive interfaces while keeping the overall product coherent and maintainable.",
    color: "cyan",
  },
];

const technologies = [
  "React",
  "Next.js",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Machine Learning",
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        items-center
        py-32
        md:py-40
        px-6
        md:px-8
        border-t
        border-white/[0.06]
        overflow-hidden
        bg-[#070a12]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.10),transparent_32%),linear-gradient(to_bottom,#070a12,#080d18)]
            pointer-events-none
          "
        />

        {/* Interactive sci-fi field */}
        <div className="absolute inset-0 opacity-55">
          <PixelBlast
            variant="diamond"
            pixelSize={4}
            color="#38bdf8"
            patternScale={2.4}
            patternDensity={0.82}
            pixelSizeJitter={0.18}
            enableRipples
            rippleSpeed={0.32}
            rippleThickness={0.08}
            rippleIntensityScale={1.15}
            liquid
            liquidStrength={0.07}
            liquidRadius={1.1}
            liquidWobbleSpeed={3.5}
            speed={0.22}
            edgeFade={0.42}
            transparent
          />
        </div>

        {/* Scanning overlay */}
        <motion.div
          className="
            absolute
            inset-x-0
            h-32
            bg-gradient-to-b
            from-transparent
            via-cyan-300/[0.035]
            to-transparent
            pointer-events-none
          "
          animate={{ top: ["-15%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            top-[10%]
            right-[-8%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[150px]
            pointer-events-none
          "
        />

        {/* Violet glow */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[150px]
            pointer-events-none
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_28%,rgba(3,5,12,0.8)_100%)]
            pointer-events-none
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400/70" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-blue-300/60
              "
            >
              About Me
            </span>

            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-400/70" />
          </div>

          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              tracking-[-0.055em]
              leading-[0.9]
              text-white
            "
          >
            Built around
            <br />
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              execution.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              md:text-lg
              leading-8
              text-white
            "
          >
            I enjoy taking complex technical problems, breaking them down,
            and turning them into systems that are practical, reliable, and
            genuinely useful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="space-y-7">
              <p
                className="
                  text-xl
                  md:text-2xl
                  leading-snug
                  font-medium
                  text-white/90
                "
              >
                I don't just build features. I think about the systems
                underneath them.
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  leading-8
                  text-white/90
                "
              >
                I'm a Computer Science undergraduate specialising in Software
                Engineering, with a strong interest in full-stack development,
                backend architecture, and machine learning.
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  leading-8
                  text-white/90
                "
              >
                Through university projects, team-based development, and my
                own portfolio work, I've built applications across healthcare,
                finance, project management, computer vision, and data
                analytics.
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  leading-8
                  text-white/90
                "
              >
                I especially enjoy working where different pieces have to
                connect properly: APIs with databases, backend logic with
                user interfaces, and machine learning with real-world
                applications.
              </p>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                relative
                mt-10
                pl-6
                border-l-2
                border-blue-500/20
              "
            >
              <div
                className="
                  absolute
                  left-[-2px]
                  top-0
                  bottom-0
                  w-px
                  bg-gradient-to-b
                  from-blue-400
                  via-cyan-400/40
                  to-transparent
                "
              />

              <p
                className="
                  text-sm
                  md:text-base
                  leading-7
                  italic
                  text-white/90
                "
              >
                "The goal is not simply to make something work. It's to
                understand why it works, where it can break, and how to make
                it better."
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT: ENGINEERING FOCUS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            <BorderGlow
              className="p-[1px]"
              backgroundColor="transparent"
              borderRadius={24}
              colors={[
                "#3b82f6",
                "#06b6d4",
                "#8b5cf6",
              ]}
              edgeSensitivity={35}
            >
              <div
                className="
                  rounded-[23px]
                  bg-[#080d18]/90
                  backdrop-blur-2xl
                  border
                  border-white/[0.05]
                  p-7
                  md:p-8
                "
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-blue-300/60
                      "
                    >
                      Engineering Focus
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      What I like building
                    </h3>
                  </div>

                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_12px_rgba(34,211,238,0.8)]
                    "
                  />
                </div>

                {/* Focus areas */}
                <div className="space-y-6">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.1,
                      }}
                      whileHover={{ x: 3 }}
                      className="group"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`
                            mt-2
                            w-1.5
                            h-1.5
                            rounded-full
                            shrink-0
                            ${
                              area.color === "blue"
                                ? "bg-blue-400 shadow-[0_0_9px_rgba(96,165,250,0.7)]"
                                : area.color === "violet"
                                ? "bg-violet-400 shadow-[0_0_9px_rgba(167,139,250,0.7)]"
                                : "bg-cyan-400 shadow-[0_0_9px_rgba(34,211,238,0.7)]"
                            }
                          `}
                        />

                        <div>
                          <h4 className="text-sm md:text-base font-semibold text-white/85 group-hover:text-white transition-colors">
                            {area.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-white/35">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/[0.06]" />

                {/* Technologies */}
                <div>
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/25
                    "
                  >
                    Core stack
                  </span>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          px-3
                          py-2
                          rounded-lg
                          bg-white/[0.035]
                          border
                          border-white/[0.08]
                          text-white/45
                          hover:text-blue-300
                          hover:border-blue-400/20
                          hover:bg-blue-500/[0.05]
                          transition-all
                          duration-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>

        {/* Bottom markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
            flex
            flex-wrap
            gap-x-8
            gap-y-3
            mt-16
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/20
          "
        >
          <span>Software Engineering</span>
          <span>•</span>
          <span>Full-Stack Development</span>
          <span>•</span>
          <span>Machine Learning</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
