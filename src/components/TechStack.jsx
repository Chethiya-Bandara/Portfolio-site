import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import LetterGlitch from "./LetterGlitch";

import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaUnity,
  FaServer,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiVite,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiDotnet,
  SiMysql,
  SiRender,
  SiPostman,
  SiJira,
  SiNetlify,
} from "react-icons/si";

const TechStack = () => {
  const stack = [
    {
      number: "01",
      category: "Languages & Logic",
      description:
        "Core languages used for application development, data processing and problem solving.",
      skills: [
        {
          name: "Python",
          icon: FaPython,
        },
        {
          name: "JavaScript",
          icon: FaJs,
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
        },
        {
          name: "SQL",
          icon: FaDatabase,
        },
        {
          name: "C#",
          icon: SiDotnet,
        },
        {
          name: "C++",
          icon: FaCode,
        },
      ],
    },
    {
      number: "02",
      category: "Frontend & Interface",
      description:
        "Tools for building responsive, interactive and modern user experiences.",
      skills: [
        {
          name: "React",
          icon: FaReact,
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
        },
        {
          name: "Framer Motion",
          icon: FaReact,
        },
        {
          name: "Flutter",
          icon: SiFlutter,
        },
        {
          name: "Vite",
          icon: SiVite,
        },
      ],
    },
    {
      number: "03",
      category: "Backend & Systems",
      description:
        "Technologies used to design APIs, databases and scalable application backends.",
      skills: [
        {
          name: "FastAPI",
          icon: SiFastapi,
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
        },
        {
          name: "Express.js",
          icon: SiExpress,
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
        },
        {
          name: "Supabase",
          icon: SiSupabase,
        },
        {
          name: "ASP.NET MVC",
          icon: SiDotnet,
        },
        {
          name: "MySQL",
          icon: SiMysql,
        },
        {
          name: "Render",
          icon: SiRender,
        },
      ],
    },
    {
      number: "04",
      category: "Tools & Architecture",
      description:
        "Development tools and engineering concepts used to build and ship complete systems.",
      skills: [
        {
          name: "Postman",
          icon: SiPostman,
        },
        {
          name: "GitHub",
          icon: FaGithub,
        },
        {
          name: "Docker",
          icon: FaDocker,
        },
        {
          name: "Jira",
          icon: SiJira,
        },
        {
          name: "Unity",
          icon: FaUnity,
        },
        {
          name: "REST APIs",
          icon: FaServer,
        },
        {
          name: "System Design",
          icon: FaServer,
        },
        {
          name: "MVC Architecture",
          icon: FaCode,
        },
        {
          name: "Netlify",
          icon: SiNetlify,
        },
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="
        relative
        min-h-screen
        w-full
        flex
        items-center
        py-32
        px-6
        md:px-8
        bg-[#070a12]
        border-t
        border-white/[0.06]
        overflow-hidden
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Letter glitch */}
        <div className="absolute inset-0 opacity-[0.06]">
          <LetterGlitch
            glitchSpeed={70}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Ambient blue */}
        <div
          className="
            absolute
            -top-32
            left-[5%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[130px]
          "
        />

        {/* Ambient violet */}
        <div
          className="
            absolute
            bottom-[-150px]
            right-[5%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[150px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            top-[40%]
            left-[50%]
            -translate-x-1/2
            w-[300px]
            h-[300px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[120px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(3,5,12,0.75)_100%)]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Heading */}
          <h2
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              text-white
              mb-5
            "
          >
            Technical{" "}
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
              Stack
            </span>
          </h2>

          {/* Intro */}
          <p
            className="
              max-w-2xl
              text-sm
              md:text-base
              text-white/40
              leading-7
              mb-14
            "
          >
            The technologies I use to design, build and deploy full-stack
            applications, machine learning systems and interactive digital
            experiences.
          </p>

          {/* =====================================================
              STACK GRID
          ====================================================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stack.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                }}
              >
                <BorderGlow
                  className="
                    p-7
                    md:p-8
                    min-h-[330px]
                    flex
                    flex-col
                    backdrop-blur-xl
                  "
                  backgroundColor="rgba(9, 13, 24, 0.78)"
                  borderRadius={20}
                  colors={[
                    "#3b82f6",
                    "#06b6d4",
                    "#8b5cf6",
                  ]}
                  edgeSensitivity={38}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <div
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.3em]
                          text-white/20
                          mb-3
                        "
                      >
                        Category {group.number}
                      </div>

                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                          text-white
                        "
                      >
                        {group.category}
                      </h3>
                    </div>

                    <span
                      className="
                        text-4xl
                        font-light
                        text-white/[0.06]
                        leading-none
                      "
                    >
                      {group.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-sm
                      text-white/35
                      leading-6
                      max-w-lg
                      mb-7
                    "
                  >
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <motion.span
                          key={skill.name}
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                            group/skill
                            relative
                            flex
                            items-center
                            gap-2
                            px-3.5
                            py-2
                            rounded-lg
                            text-xs
                            md:text-sm
                            text-white/65
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            hover:bg-blue-500/[0.08]
                            hover:text-cyan-300
                            hover:border-cyan-400/20
                            transition-all
                            duration-300
                            cursor-default
                          "
                        >
                          {/* Hover glow */}
                          <span
                            className="
                              absolute
                              inset-0
                              rounded-lg
                              opacity-0
                              group-hover/skill:opacity-100
                              transition-opacity
                              bg-gradient-to-r
                              from-blue-500/[0.08]
                              to-violet-500/[0.08]
                            "
                          />

                          {/* Icon */}
                          <Icon
                            size={16}
                            className="
                              relative
                              z-10
                              shrink-0
                              text-white/40
                              group-hover/skill:text-cyan-300
                              transition-colors
                              duration-300
                            "
                          />

                          {/* Name */}
                          <span className="relative z-10">
                            {skill.name}
                          </span>
                        </motion.span>
                      );
                    })}
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>

          {/* =====================================================
              BOTTOM TECH STRIP
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-x-5
              gap-y-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/15
            "
          >
            <span>Software Engineering</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>REST APIs</span>
            <span>•</span>
            <span>Database Systems</span>
            <span>•</span>
            <span>System Design</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;