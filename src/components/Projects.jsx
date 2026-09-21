import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import BorderGlow from "./BorderGlow";

const projects = [
  {
    title: "MediConnect",
    desc: "Worked as the lead backend and database engineer in a group of 5 developers to develop a healthcare management platform for pharmacies and hospitals, combining role-based access, patient and medication management, secure APIs.",
    tags: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Chatbot",
    ],
    github: "https://github.com/Mohamed-Ruzaik/MediConnect",
    featured: true,
  },
  {
    title: "Monetra",
    desc: "A full-stack personal finance platform for tracking transactions, analysing spending patterns, and generating financial insights with real-time dashboards and Prophet-based forecasting.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind",
      "FastAPI",
      "Supabase",
      "Gemini",
    ],
    github: "https://github.com/Chethiya-Bandara/Monetra",
    featured: true,
  },
  {
    title: "TaskForge",
    desc: "A team collaboration and project management platform featuring Kanban boards, task tracking, project roles, authentication, and structured access control for collaborative development.",
    tags: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
    github: "https://github.com/Chethiya-Bandara/TaskForge",
    featured: true,
    development: true,
  },
  {
    title: "Altera",
    desc: "A backend-focused platform built with Go, featuring RESTful APIs, PostgreSQL persistence, database migrations, authentication, and a clean modular architecture.",
    tags: [
      "Go",
      "PostgreSQL",
      "REST API",
      "Docker",
      "JWT",
      "Migrations",
    ],
    github: "https://github.com/Chethiya-Bandara/Altera",
    featured: true,
    development: true,
  },
  {
    title: "Bladebound",
    desc: "A 2d Side scroller game built with Unity, featuring multiple difficulty levels and a simple interface designed around responsive gameplay.",
    tags: ["Unity", "C#", "Game Development"],
    game: true,
    github: "https://chethiya-bandara.itch.io/bladebound",
  },
  {
    title: "Gravity Flip",
    desc: "An extension of Bladebound, featuring multiple difficulty levels, responsive gameplay and a newly introduced gravity flip mode.",
    tags: ["Unity", "C#", "Game Development"],
    game: true,
    github: "https://chethiya-bandara.itch.io/gravity-flip",
  },
  {
    title: "Noughts & Crosses",
    desc: "A lightweight mobile tic-tac-toe game built with Flutter, featuring multiple difficulty levels and a simple interface designed around responsive gameplay.",
    tags: ["Flutter", "Dart", "Game Development"],
    game: true,
    github: "https://github.com/Chethiya-Bandara/noughts-and-crosses",
  },
  {
    title: "Sonora",
    desc: "A lightweight desktop Spotify companion that displays real-time playback, track details, album artwork, and media controls in a compact customizable popup.",
    tags: [
      "React",
      "TypeScript",
      "Tauri",
      "Rust",
      "Spotify API",
      "Tailwind CSS",
    ],
    github: "https://github.com/Chethiya-Bandara/Sonora",
  },
  {
    title: "TumorDetect.AI",
    desc: "A computer vision application using convolutional neural networks to classify brain MRI scans and assist with tumour detection through an interactive Streamlit interface.",
    tags: [
      "Python",
      "TensorFlow",
      "Streamlit",
      "CNN",
      "Computer Vision",
    ],
    github: "https://github.com/Chethiya-Bandara/TumorDetect-AI",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 10);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollProjects = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = container.clientWidth * 0.72;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;

      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollProjects("left");
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollProjects("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="projects"
      className="
        relative
        py-32
        px-6
        md:px-8
        overflow-hidden
        bg-[#070a12]
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep page background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(139,92,246,0.14),transparent_35%),linear-gradient(to_bottom,#070a12,#0a0d16)]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
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
            bg-blue-600/10
            blur-[140px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-purple-600/10
            blur-[160px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(3,5,10,0.75)_100%)]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                My{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Projects
                </span>
              </h2>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollProjects("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll projects left"
                className="
                  group
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-blue-500/10
                  hover:border-blue-400/30
                  hover:text-blue-300
                  disabled:opacity-20
                  disabled:cursor-not-allowed
                "
              >
                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:-translate-x-0.5
                  "
                >
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollProjects("right")}
                disabled={!canScrollRight}
                aria-label="Scroll projects right"
                className="
                  group
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-purple-500/10
                  hover:border-purple-400/30
                  hover:text-purple-300
                  disabled:opacity-20
                  disabled:cursor-not-allowed
                "
              >
                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <div
          className="
            relative
            rounded-[28px]
            border
            border-blue-300/[0.14]
            bg-[#10192a]
            backdrop-blur-xl
            shadow-[0_24px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)]
            overflow-hidden
          "
        >
          {/* Layered navy panel background */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_12%_15%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_88%_85%,rgba(8,145,178,0.10),transparent_34%),linear-gradient(135deg,#121d31_0%,#0d1627_52%,#101a2d_100%)]
              pointer-events-none
            "
          />

          {/* Subtle texture separates the panel from the cards */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.12]
              bg-[linear-gradient(rgba(147,197,253,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.08)_1px,transparent_1px)]
              [background-size:44px_44px]
              pointer-events-none
            "
          />

          {/* Top border glow */}
          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/55
              to-transparent
              pointer-events-none
              z-20
            "
          />

          {/* Inner glow */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[80%]
              h-[70%]
              rounded-full
              bg-blue-400/[0.07]
              blur-[100px]
              pointer-events-none
            "
          />

          {/* Keyboard hint */}
          <div
            className="
              absolute
              top-5
              right-6
              z-30
              hidden
              md:flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/50
              pointer-events-none
            "
          >
            <span>You can use</span>

            <kbd
              className="
                px-2
                py-1
                rounded-md
                border
                border-white/10
                bg-white/[0.04]
                text-white/35
                font-sans
                normal-case
              "
            >
              ←
            </kbd>

            <kbd
              className="
                px-2
                py-1
                rounded-md
                border
                border-white/10
                bg-white/[0.04]
                text-white/35
                font-sans
                normal-case
              "
            >
              →
            </kbd>

            <span>keys to navigate too!</span>
          </div>

          {/* Scroll area */}
          <div
            ref={scrollRef}
            className="
              relative
              flex
              gap-6
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              snap-x
              snap-mandatory
              px-0
              py-8
              pt-16
              [scrollbar-width:none]
              [-ms-overflow-style:none]
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow:
                    "0 18px 45px rgba(59,130,246,0.12)",
                }}
                className="
                  relative
                  flex-none
                  w-[88%]
                  sm:w-[65%]
                  md:w-[48%]
                  lg:w-[36%]
                  first:ml-[6%]
                  sm:first:ml-[17.5%]
                  md:first:ml-[26%]
                  lg:first:ml-[32%]
                  snap-start
                  rounded-[18px]
                  transition-shadow
                  duration-300
                "
              >
                {/* Project badges */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        bg-amber-400/[0.12]
                        border
                        border-amber-300/30
                        text-amber-300
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        shadow-[0_0_18px_rgba(251,191,36,0.08)]
                        backdrop-blur-md
                      "
                    >
                      <span className="text-[10px]">
                        ★
                      </span>

                      Featured
                    </div>
                  )}

                  {/* Development badge */}
                  {project.development && (
                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        bg-cyan-400/[0.12]
                        border
                        border-cyan-300/30
                        text-cyan-300
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        shadow-[0_0_18px_rgba(34,211,238,0.10)]
                        backdrop-blur-md
                      "
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      </span>

                      In Development
                    </div>
                  )}

                  {/* Game badge */}
                  {project.game && (
                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        bg-emerald-400/[0.12]
                        border
                        border-emerald-300/30
                        text-emerald-300
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        shadow-[0_0_18px_rgba(251,191,36,0.08)]
                        backdrop-blur-md
                      "
                    >
                      <span className="text-[10px]">
                        ★
                      </span>

                      Game
                    </div>
                  )}
                </div>

                <BorderGlow
                  className="
                    p-7
                    h-[430px]
                    flex
                    flex-col
                    backdrop-blur-xl
                  "
                  backgroundColor="rgba(8, 13, 24, 0.88)"
                  borderRadius={18}
                  colors={[
                    "#3b82f6",
                    "#06b6d4",
                    "#8b5cf6",
                  ]}
                  edgeSensitivity={35}
                >
                  <div className="flex-grow">
                    {/* Project number */}
                    <div className="flex items-center justify-between mb-7">
                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-white/25
                        "
                      >
                        Project{" "}
                        {String(index + 1).padStart(2, "0")}
                      </span>

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

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-7 mb-7">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ y: -2 }}
                          className="
                            text-[10px]
                            uppercase
                            tracking-widest
                            bg-white/[0.04]
                            text-white/55
                            px-2.5
                            py-1.5
                            rounded-md
                            border
                            border-white/10
                            transition-all
                            hover:bg-blue-500/10
                            hover:text-blue-300
                            hover:border-blue-500/30
                          "
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {!project.game && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-2.5
                        w-full
                        py-3.5
                        rounded-xl
                        bg-gradient-to-r
                        from-white/[0.06]
                        to-white/[0.03]
                        hover:from-blue-500/15
                        hover:to-purple-500/15
                        text-white/80
                        hover:text-white
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        font-semibold
                        border
                        border-white/10
                        hover:border-blue-400/30
                        transition-all
                        duration-300
                      "
                    >
                      <FaGithub
                        size={16}
                        className="
                          text-white/40
                          group-hover:text-cyan-300
                          transition-colors
                          duration-300
                        "
                      />

                      <span>View on GitHub</span>

                      <span
                        className="
                          text-white/30
                          group-hover:text-cyan-300
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      >
                        ↗
                      </span>
                    </a>
                  )}

                  {project.game && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-2.5
                        w-full
                        py-3.5
                        rounded-xl
                        bg-gradient-to-r
                        from-white/[0.06]
                        to-white/[0.03]
                        hover:from-blue-500/15
                        hover:to-purple-500/15
                        text-white/80
                        hover:text-white
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        font-semibold
                        border
                        border-white/10
                        hover:border-blue-400/30
                        transition-all
                        duration-300
                      "
                    >
                      <span>Play Demo Game</span>

                      <span
                        className="
                          text-white/30
                          group-hover:text-cyan-300
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </BorderGlow>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                flex-none
                w-[88%]
                sm:w-[65%]
                md:w-[48%]
                lg:w-[36%]
                snap-start
              "
            >
              <BorderGlow
                className="
                  p-7
                  h-[430px]
                  flex
                  flex-col
                  backdrop-blur-xl
                "
                backgroundColor="rgba(8, 11, 18, 0.55)"
                borderRadius={18}
                colors={[
                  "#1e293b",
                  "#334155",
                  "#475569",
                ]}
                edgeSensitivity={20}
              >
                <div
                  className="
                    flex-grow
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-5
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      flex
                      items-center
                      justify-center
                      mb-7
                    "
                  >
                    <motion.span
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        text-2xl
                        text-blue-400
                        font-light
                      "
                    >
                      +
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white/80 mb-3">
                    More in the pipeline
                  </h3>

                  <p className="text-sm leading-7 text-white/35 max-w-xs">
                    New systems, experiments and ideas are currently
                    being built. This portfolio is still expanding.
                  </p>
                </div>

                <div
                  className="
                    mt-auto
                    w-full
                    py-3.5
                    rounded-xl
                    bg-white/[0.02]
                    text-white/20
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    font-bold
                    border
                    border-white/5
                    text-center
                  "
                >
                  Building...
                </div>
              </BorderGlow>
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-6
              bg-gradient-to-t
              from-[#0c1220]/70
              to-transparent
              pointer-events-none
            "
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/10" />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            Drag or use arrow keys
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>

      {/* Hide scrollbar in WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;