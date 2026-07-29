import { motion } from "framer-motion";
import { Award, BookOpen, Trophy, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Pillai College of Engineering, New Panvel, Mumbai - B.Tech Information Technology, CGPA 8.3, 2022-2026",
  },
  {
    icon: Award,
    title: "Certification",
    text: "Complete Web Development Bootcamp by Angela Yu (Udemy)",
  },
  {
    icon: Trophy,
    title: "Achievements",
    text: "Adobe India Hackathon 2025, Mumbai Hacks Hackathon participant",
  },
  {
    icon: Users,
    title: "Leadership",
    text: "Graphics Team Designer and Social Media Head at CSIPCE",
  },
];

function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-24 snap-start">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
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
          <span className="section-kicker">Education & Achievements</span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Academic foundation with hackathon momentum
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="glass-panel-strong rounded-[1.7rem] p-6 lg:p-7"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-glow">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
