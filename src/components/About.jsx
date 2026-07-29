import { motion } from "framer-motion";
import {
  Code2,
  Database,
  DatabaseZap,
  BrainCircuit,
  Rocket,
  Wrench,
} from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.3" },
  { label: "Status", value: "Final Year B.Tech IT" },
  { label: "Location", value: "Navi Mumbai, India" },
];

const techStack = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, Express.js, REST APIs, Authentication",
  },
  {
    icon: DatabaseZap,
    title: "Database",
    description: "MongoDB, PostgreSQL, Supabase, Firebase",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Python, LangChain, RAG, Gemini API, OpenAI",
  },
  {
    icon: Wrench,
    title: "Dev Tools",
    description: "Git, GitHub, VS Code, Postman, Docker",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Vercel, Netlify, Render, Cloudinary",
  },
];

function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 snap-start">
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 26 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span className="section-kicker">About</span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Building polished software at the intersection of product, AI, and
            real-time systems.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            Final-year Information Technology student with hands-on experience
            building full-stack MERN applications, cross-platform mobile apps
            with React Native, and AI-integrated web tools. Skilled in REST API
            development, third-party service integration, and real-time
            communication systems using WebRTC, SFU, and TURN/STUN setups.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel rounded-2xl px-4 py-3"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-text-muted">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 26 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <div className="glass-panel-strong gradient-border rounded-[2rem] p-6 lg:p-8">
            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Tech Stack
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.15rem]">
                The technologies I use to build scalable web applications,
                AI-powered products, and modern user experiences.
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {techStack.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-glow"
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.18),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.06] text-accent transition-transform duration-300 group-hover:scale-110">
                          <Icon size={20} />
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
