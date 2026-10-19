import { motion } from "framer-motion";
import GlowCursor from "./GlowCursor";
import ReflectiveCard from "./ReflectiveCard";

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
        bg-[#06120d]
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
            bg-[radial-gradient(circle_at_75%_35%,rgba(5,150,105,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(101,163,13,0.10),transparent_32%),linear-gradient(to_bottom,#06120d,#091a12)]
            pointer-events-none
          "
        />

        {/* Emerald glow */}
        <div
          className="
            absolute
            top-[10%]
            right-[-8%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-emerald-600/[0.07]
            blur-[150px]
            pointer-events-none
          "
        />

        {/* Lime glow */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-lime-600/[0.06]
            blur-[150px]
            pointer-events-none
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_28%,rgba(2,10,6,0.8)_100%)]
            pointer-events-none
          "
        />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <GlowCursor color="#4ade80" secondaryColor="#059669" intensity={1.3} trailWidth={3} linger={1.4} glow={1.2} quality="medium" clickBurst />
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
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400/70" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-emerald-300/60
              "
            >
              About Me
            </span>

            <span className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400/70" />
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
                from-green-300
                via-emerald-400
                to-lime-500
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
              text-white/80
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
                  text-white/80
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
                  text-white/80
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
                  text-white/80
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
                  text-white/80
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
                border-emerald-500/20
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
                  from-emerald-400
                  via-green-400/40
                  to-transparent
                "
              />

              <p
                className="
                  text-sm
                  md:text-base
                  leading-7
                  italic
                  text-white/80
                "
              >
                "The goal is not simply to make something work. It's to
                understand why it works, where it can break, and how to make
                it better."
              </p>
            </motion.div>
          </motion.div>


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
            <ReflectiveCard
              width="100%"
              height={500}
              tint="#86efac"
              glare={0.45}
              enableTilt={false}
              className="max-w-md mx-auto"
            >
              <div className="flex h-full flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-green-200/75">About me</span>
                <div className="mt-5 min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/15">
                  <img src="/Profile_Pic_defined.jpeg" alt="Chethiya Bandara" className="h-full w-full object-cover object-center" />
                </div>
                <div className="pt-5">
                  <h3 className="text-xl font-semibold text-white">Chethiya Bandara</h3>
                  <p className="mt-1 text-sm text-white/65">Software Engineer</p>
                </div>
              </div>
            </ReflectiveCard>
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
