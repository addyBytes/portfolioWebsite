import { motion } from "framer-motion";

const items = [
  {
    title: "Full-Stack Engineering Intern",
    company: "Infidhi Ventures Pvt Ltd",
    period: "Dec 2025 - Apr 2026",
    location: "Navi Mumbai, India",
    bullets: [
      "Spearheaded development of cross-platform mobile applications using React Native, building a reusable component library that streamlined UI development across multiple app screens.",
      "Collaborated with backend teams to integrate REST APIs, reducing data-fetch latency and improving overall app responsiveness and reliability.",
      "Implemented real-time communication features using SFU architecture and WebRTC with TURN/STUN server configuration, enabling stable, low-latency audio and video calls across varied network conditions.",
      "Built data collection and integration pipelines using OAuth authentication and web scraping, automating manual workflows and improving data accuracy for downstream features.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 snap-start">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
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
          <span className="section-kicker">Experience</span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Timeline of impact
          </h2>
        </motion.div>

        <div className="relative mt-12 pl-2 sm:pl-6">
          <motion.div
            className="absolute left-[13px] top-2 h-full w-px origin-top bg-white/10 sm:left-[25px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {items.map((item) => (
            <motion.article
              key={item.title}
              className="relative grid gap-6 pb-10 pl-10 sm:pl-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="absolute left-[2px] top-1.5 h-7 w-7 rounded-full border border-accent/40 bg-accent/14 shadow-glow sm:left-[14px]" />
              <div className="lg:pr-6">
                <div className="glass-panel rounded-[1.7rem] p-6">
                  <div className="text-xs uppercase tracking-[0.24em] text-text-muted">
                    {item.period}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-lg text-accent">{item.company}</div>
                  <div className="mt-3 text-sm text-text-secondary">
                    {item.location}
                  </div>
                </div>
              </div>

              <div className="glass-panel-strong rounded-[1.7rem] p-6 lg:p-7">
                <ul className="space-y-4 text-[15px] leading-7 text-text-secondary">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
