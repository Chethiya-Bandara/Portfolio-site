import GhostFibers from "./GhostFibers";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { SiReact, SiFastapi, SiPostgresql, SiSupabase, SiNextdotjs, SiTailwindcss, SiGooglegemini, SiExpress, SiPrisma, SiJsonwebtokens, SiGo, SiDocker, SiUnity, SiFlutter, SiDart, SiDotnet, SiTypescript, SiTauri, SiRust, SiSpotify, SiPython, SiTensorflow, SiStreamlit } from "react-icons/si";

const technologyIcons = {
  React: SiReact, "React.js": SiReact, FastAPI: SiFastapi, PostgreSQL: SiPostgresql,
  Supabase: SiSupabase, "Next.js": SiNextdotjs, Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss, Gemini: SiGooglegemini, "Express.js": SiExpress,
  Prisma: SiPrisma, JWT: SiJsonwebtokens, Go: SiGo, Docker: SiDocker,
  Unity: SiUnity, Flutter: SiFlutter, Dart: SiDart, "ASP.NET Core MVC": SiDotnet,
  TypeScript: SiTypescript, Tauri: SiTauri, Rust: SiRust, "Spotify API": SiSpotify,
  Python: SiPython, TensorFlow: SiTensorflow, Streamlit: SiStreamlit,
};

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
    title: "Task Tracker System",
    desc: "A task tracking application built with ASP.NET Core MVC for organizing and managing tasks. It applies object-oriented programming principles and exception handling.",
    tags: ["C#", "Task Management", "ASP.NET Core MVC", "Razor Views"],
    github: "https://github.com/Chethiya-Bandara/task_tracker_system",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const project = projects[activeIndex];
  const navigate = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#06120d] px-6 py-32 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_35%),linear-gradient(to_bottom,#06120d,#091810)]" />
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <GhostFibers glowColor="#10b981" lineColor="#bbf7d0" secondaryColor="#65a30d" layers={2} threads={60} brightness={0.8} dpr={1} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-emerald-300/70">Selected work</p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              My <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>
          <div className="flex items-center gap-3" aria-label="Project navigation">
            <span className="mr-2 font-mono text-xs tracking-widest text-white/50" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => navigate(-1)} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-green-400/50 hover:bg-green-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"><ArrowLeft size={18} /></button>
            <button type="button" onClick={() => navigate(1)} aria-label="Next project" className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-green-300 transition hover:bg-emerald-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"><ArrowRight size={18} /></button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-emerald-300/15 bg-[#091b12]/95 shadow-[0_24px_90px_rgba(0,0,0,0.35)]" onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.18),transparent_38%),linear-gradient(135deg,transparent,rgba(101,163,13,0.06))]" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.article key={project.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="relative grid min-h-[390px] gap-8 p-7 sm:p-10 md:grid-cols-[1fr_220px] md:gap-12 md:p-14">
              <div className="flex flex-col items-start">
                <div className="mb-8 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs tracking-widest text-emerald-300/70">{String(activeIndex + 1).padStart(2, "0")} / PROJECT</span>
                  {project.featured && <span className="rounded-full border border-amber-300/35 bg-amber-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-amber-300">Featured</span>}
                  {project.development && <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-300">In development</span>}
                  {project.game && <span className="rounded-full border border-lime-300/30 bg-lime-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-lime-300">Game</span>}
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{project.desc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const Icon = technologyIcons[tag];
                    return <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-green-100/75">{Icon && <Icon aria-hidden="true" className="text-green-300" size={14} />}{tag}</span>;
                  })}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center gap-2 border-b border-emerald-400/50 pb-2 text-sm font-semibold text-green-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400">
                  {project.github.includes("github.com") ? <><FaGithub size={16} /> View on GitHub</> : "Play game"}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="hidden items-center justify-center md:flex" aria-hidden="true">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/[0.04] shadow-[0_0_80px_rgba(16,185,129,0.12)]">
                  <div className="absolute inset-4 rounded-full border border-dashed border-green-300/20" />
                  <span className="font-mono text-6xl font-light tracking-tighter text-green-200/80">{String(activeIndex + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="relative flex gap-1.5 px-7 pb-7 sm:px-10 md:px-14" aria-label="Choose a project">
            {projects.map((item, index) => <button key={item.title} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${item.title}`} aria-current={index === activeIndex ? "true" : undefined} className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 ${index === activeIndex ? "w-8 bg-green-400" : "w-2 bg-white/25 hover:bg-white/60"}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
