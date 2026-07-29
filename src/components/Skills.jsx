import { motion } from "framer-motion";

const categories = [
  { title: "Languages", items: ["JavaScript", "HTML5", "CSS3"], progress: 96 },
  {
    title: "Frontend",
    items: ["React.js", "React Native", "Tailwind CSS", "Bootstrap"],
    progress: 94,
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
    progress: 92,
  },
  {
    title: "Real-Time Communication",
    items: ["WebRTC", "SFU", "TURN/STUN Servers"],
    progress: 89,
  },
  { title: "Databases", items: ["MongoDB"], progress: 88 },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "OAuth", "Cloudinary", "Web Scraping"],
    progress: 91,
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 snap-start">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span className="section-kicker">Skills</span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Structured across the stack
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="glass-panel-strong rounded-[1.7rem] p-6 lg:p-7"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <span className="text-sm text-text-muted">
                  {category.progress}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent via-[#7a9dff] to-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.progress}%` }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
