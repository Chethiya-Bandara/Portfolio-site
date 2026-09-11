import { motion } from "framer-motion";

const Education = () => {
  const edu = [
    {
      school: "Edith Cowan University, Sri Lanka",
      degree: "BSc in Computer Science",
      focus: "Major in Software Engineering",
      status:
        "Currently completing my final year of studies while developing a strong foundation in software engineering, full-stack development, and modern computing systems.",
      year: "2024 - Present",
      current: true,
    },
    {
      school: "Trinity College, Kandy",
      degree: "GCE Advanced Level",
      focus: "Physical Science Stream",
      status:
        "Completed Advanced Level studies with results of 1A, 1B, and 1C.",
      year: "2020 - 2023",
      current: false,
    },
    {
      school: "Trinity College, Kandy",
      degree: "GCE Ordinary Level",
      focus: "Secondary Education",
      status:
        "Completed Ordinary Level studies with 9 A passes.",
      year: "2010 - 2020",
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="
        relative
        min-h-[90vh]
        flex
        items-center
        py-32
        md:py-40
        px-6
        overflow-hidden
        bg-[#070a12]
      "
    >

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            top-[-15%]
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.08]
            blur-[150px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[160px]
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
            rounded-full
            bg-blue-500/[0.035]
            blur-[140px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,5,12,0.8)_100%)]
          "
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400/70" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-blue-300/60
              "
            >
              Background
            </span>

            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-400/70" />
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-[-0.05em]
              leading-none
              text-white
            "
          >
            My{" "}
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
              Journey
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              md:text-base
              leading-7
              text-white/40
            "
          >
            A timeline of the academic path that shaped my foundation in
            computer science, software engineering, and technology.
          </p>
        </motion.div>


        <div className="relative">
          {/* Timeline line */}
          <div
            className="
              absolute
              left-[9px]
              top-2
              bottom-2
              w-px
              bg-gradient-to-b
              from-blue-400/70
              via-cyan-400/30
              to-violet-500/20
            "
          />

          <div className="space-y-10">
            {edu.map((item, index) => (
              <motion.div
                key={`${item.school}-${item.year}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline node */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-5
                    h-5
                    rounded-full
                    border
                    border-blue-300/40
                    bg-[#070a12]
                    flex
                    items-center
                    justify-center
                    z-10
                  "
                >
                  <div
                    className={`
                      w-2
                      h-2
                      rounded-full
                      ${
                        item.current
                          ? "bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
                          : "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                      }
                    `}
                  />
                </div>

                {/* Education card */}
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    backdrop-blur-xl
                    p-6
                    md:p-7
                    transition-all
                    duration-300
                    hover:border-blue-400/20
                    hover:bg-blue-500/[0.025]
                    hover:shadow-[0_15px_45px_rgba(37,99,235,0.08)]
                  "
                >
                  {/* Top row */}
                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3
                      mb-5
                    "
                  >
                    <span
                      className="
                        inline-flex
                        w-fit
                        px-3
                        py-1.5
                        rounded-full
                        bg-blue-500/[0.08]
                        border
                        border-blue-400/10
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        font-semibold
                        text-blue-300/80
                      "
                    >
                      {item.year}
                    </span>

                    {item.current && (
                      <span
                        className="
                          inline-flex
                          w-fit
                          items-center
                          gap-2
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-cyan-300/60
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_8px_rgba(34,211,238,0.8)]
                          "
                        />
                        Current
                      </span>
                    )}
                  </div>

                  {/* School */}
                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-semibold
                      tracking-tight
                      text-white/90
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {item.school}
                  </h3>

                  {/* Degree */}
                  <p
                    className="
                      mt-2
                      text-base
                      md:text-lg
                      font-medium
                      text-white/65
                    "
                  >
                    {item.degree}
                  </p>

                  {/* Focus */}
                  <p
                    className="
                      mt-1
                      text-sm
                      text-cyan-300/50
                    "
                  >
                    {item.focus}
                  </p>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      max-w-3xl
                      text-sm
                      md:text-[15px]
                      leading-7
                      text-white/40
                    "
                  >
                    {item.status}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-6
                      right-6
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-blue-400/10
                      to-transparent
                    "
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;