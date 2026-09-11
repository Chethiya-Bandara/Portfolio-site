import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "stack" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) =>
        observer.unobserve(section)
      );
    };
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>

      <nav
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          pointer-events-none
          px-4
          pt-4
          md:px-6
          md:pt-6
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            pointer-events-auto
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#050816]/75
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.28)]
            px-4
            py-3
            md:px-5
            md:py-3.5
          "
        >

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              group
              flex
              items-center
              gap-3
              shrink-0
            "
          >
            {/* Status dot */}
            <span
              className="
                relative
                flex
                items-center
                justify-center
                w-2
                h-2
              "
            >
              <span
                className="
                  absolute
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.9)]
                "
              />

              <span
                className="
                  absolute
                  w-4
                  h-4
                  rounded-full
                  border
                  border-cyan-400/20
                  group-hover:scale-125
                  transition-transform
                  duration-300
                "
              />
            </span>

            <span
              className="
                text-sm
                md:text-base
                font-semibold
                tracking-[-0.02em]
                text-white
              "
            >
              Chethiya{" "}
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
                Bandara
              </span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    px-3.5
                    py-2
                    rounded-lg
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                  "
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="
                        absolute
                        inset-0
                        rounded-lg
                        bg-white/[0.05]
                        border
                        border-white/[0.06]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`
                      relative
                      z-10
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/35 hover:text-white/80"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="
                        absolute
                        -bottom-1
                        left-1/2
                        -translate-x-1/2
                        w-1
                        h-1
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_8px_rgba(34,211,238,0.9)]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>


          <div className="flex items-center gap-3">
            {/* Availability */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(74,222,128,0.7)]
                "
              />
              Personal Portfolio
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="
                md:hidden
                w-9
                h-9
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.03]
                flex
                items-center
                justify-center
                text-white/60
                hover:text-white
                hover:border-blue-400/20
                transition-all
                duration-300
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                  >
                    <X size={17} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                  >
                    <Menu size={17} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                md:hidden
                max-w-7xl
                mx-auto
                mt-2
                pointer-events-auto
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#050816]/90
                backdrop-blur-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                overflow-hidden
              "
            >
              {/* Top accent */}
              <div
                className="
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/40
                  to-transparent
                "
              />

              <div className="p-2">
                {navItems.map((item, index) => {
                  const isActive =
                    activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        scrollToSection(item.id)
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        rounded-xl
                        transition-all
                        duration-200
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            w-1.5
                            h-1.5
                            rounded-full
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                : "bg-white/15"
                            }
                          `}
                        />

                        <span
                          className={`
                            text-sm
                            transition-colors
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/50"
                            }
                          `}
                        >
                          {item.label}
                        </span>
                      </div>

                      <span
                        className="
                          text-[9px]
                          tracking-[0.2em]
                          text-white/15
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;