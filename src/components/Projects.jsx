import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, PlayCircle, Sparkles } from "lucide-react";

const projects = [
  {
    title: "CreatorIQ-AI",
    stack:
      "MongoDB, Express.js, React.js, Node.js, Gemini API, YouTube Data API",
    description:
      "Full-stack MERN application for AI-driven YouTube content analysis, giving creators actionable channel insights.",
    highlights: [
      "Integrated Google Gemini API and YouTube Data API to automate analysis workflows and improve content-strategy accuracy.",
      "Responsive React dashboard visualizing channel analytics and AI-generated recommendations.",
    ],
    github: "https://github.com/addyBytes/CreatorIQ-AI",
    demo: "#contact",
  },
  {
    title: "Video Conferencing App",
    stack: "React.js, Node.js, LiveKit, WebRTC",
    description:
      "Google Meet-style video calling app using LiveKit SFU infrastructure for scalable real-time audio/video.",
    highlights: [
      "Multi-participant video rooms, screen sharing, and in-call chat with emoji reactions.",
      "TURN/STUN server configuration for reliable connectivity across varied networks.",
    ],
    github: "https://github.com/addyBytes",
    demo: "#contact",
  },
  {
    title: "Hotel Listing Web Application",
    stack: "Node.js, Express.js, MongoDB, EJS, Cloudinary",
    description:
      "Full-stack hotel management and listing platform with secure auth and complete CRUD workflows.",
    highlights: [
      "Cloudinary integration for scalable image storage and optimized media delivery.",
      "Search and filter by location, price range, and amenities.",
    ],
    github: "https://github.com/addyBytes/WanderHotels",
    demo: "https://wanderhotels.onrender.com",
  },
];

function TiltCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      className="group relative rounded-[1.9rem]"
      style={{ perspective: 1200 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="gradient-border glass-panel-strong h-full rounded-[1.9rem] p-6 lg:p-7"
      >
        <div className="absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div
          className="relative flex h-full flex-col gap-5"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.26em] text-text-muted">
                Featured project
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h3>
            </div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-glow">
              <Sparkles size={18} />
            </span>
          </div>

          <p className="text-sm uppercase tracking-[0.22em] text-accent/90">
            {project.stack}
          </p>
          <p className="max-w-xl text-[15px] leading-7 text-text-secondary">
            {project.description}
          </p>

          <ul className="space-y-3 text-[15px] leading-7 text-text-secondary">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className="magnetic-target inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              <Github size={16} />
              View Code
            </a>
            <a
              href={project.demo}
              className="hover-glow magnetic-target inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow"
              data-magnetic
            >
              <PlayCircle size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 snap-start">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span className="section-kicker">Projects</span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Featured work that blends polish with utility
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:gap-8 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
