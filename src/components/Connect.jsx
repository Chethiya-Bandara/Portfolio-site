import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Connect = () => {
  const socials = [
    {
      name: "GitHub",
      label: "Projects & Code",
      url: "https://github.com/Chethiya-Bandara",
      icon: FaGithub,
      iconColor: "group-hover:text-white",
      hover:
        "hover:text-white hover:border-white/20 hover:bg-white/[0.04]",
    },
    {
      name: "LinkedIn",
      label: "Professional Network",
      url: "https://www.linkedin.com/in/chethiya-bandara-845017330/",
      icon: FaLinkedin,
      iconColor: "group-hover:text-blue-400",
      hover:
        "hover:text-blue-300 hover:border-blue-400/25 hover:bg-blue-500/[0.05]",
    },
    {
      name: "Email",
      label: "Let's talk",
      url: "mailto:Chethiyabandara2004@gmail.com",
      icon: FaEnvelope,
      iconColor: "group-hover:text-cyan-400",
      hover:
        "hover:text-cyan-300 hover:border-cyan-400/25 hover:bg-cyan-500/[0.05]",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        py-32
        md:py-40
        bg-[#050816]
        border-t
        border-white/[0.06]
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            top-[-20%]
            left-[10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.08]
            blur-[150px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            left-[35%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-500/[0.06]
            blur-[150px]
          "
        />

        {/* Violet glow */}
        <div
          className="
            absolute
            top-[20%]
            right-[-10%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[150px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(3,5,12,0.8)_100%)]
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400/60" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-blue-300/60">
            Let's Connect
          </span>

          <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-400/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            lg:text-9xl
            font-bold
            tracking-[-0.055em]
            leading-[0.9]
            text-white
          "
        >
          Let's build
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
            something.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <p className="text-base md:text-xl text-white/45 leading-8">
            Have a problem worth solving, a system worth building, or simply
            want to talk about technology?
            <span className="text-white/80">
              {" "}
              I’d love to hear from you.
            </span>
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.a
          href="mailto:Chethiyabandara2004@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            group
            inline-flex
            items-center
            gap-3
            mt-10
            px-7
            py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-violet-500
            text-white
            text-sm
            font-semibold
            shadow-[0_0_30px_rgba(59,130,246,0.12)]
            hover:shadow-[0_0_40px_rgba(59,130,246,0.22)]
            transition-all
            duration-300
          "
        >
          Start a conversation

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </motion.a>

        {/* Resume note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-white/20
          "
        >
          Resume available upon request
        </motion.p>

        {/* Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            max-w-4xl
            mx-auto
            mt-20
          "
        >
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{
                  y: -5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  group
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-white/[0.025]
                  backdrop-blur-xl
                  border
                  border-white/[0.08]
                  text-white/50
                  transition-all
                  duration-300
                  ${social.hover}
                `}
              >
                {/* Brand Icon */}
                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-xl
                    bg-white/[0.04]
                    border
                    border-white/[0.08]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-white/[0.06]
                    group-hover:border-white/[0.12]
                  "
                >
                  <Icon
                    size={19}
                    className={`
                      text-white/40
                      transition-all
                      duration-300
                      ${social.iconColor}
                    `}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-left">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      font-semibold
                      text-white/70
                      group-hover:text-current
                      transition-colors
                    "
                  >
                    {social.name}
                  </p>

                  <p className="text-[11px] text-white/25 mt-1">
                    {social.label}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={17}
                  className="
                    text-white/20
                    group-hover:text-current
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;