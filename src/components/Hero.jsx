import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroImageCandidates = [
  "https://ssmpvfkczpuimnrlixkz.supabase.co/storage/v1/object/public/assests/adityapic.png",
  "/adityapic.png",
].filter(Boolean);

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [heroImage, setHeroImage] = useState(heroImageCandidates[0]);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setHeroImage(heroImageCandidates[0]);
    setImageFailed(false);
  }, []);

  return (
    <section
      id="home"
      className="section-shell scroll-mt-24 snap-start pt-40 lg:pt-44"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 max-w-3xl">
          <motion.p
            className="section-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Full-Stack Engineer - AI Integrations - Real-Time Systems
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(3.8rem,10vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Aditya Kapoor
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Final-year IT engineer building full-stack MERN apps, AI-integrated
            tools, and real-time communication systems.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#projects"
              data-magnetic
              className="hover-glow magnetic-target inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-300"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              data-magnetic
              className="magnetic-target inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-3 text-xs uppercase tracking-[0.26em] text-text-muted"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              "React Native",
              "WebRTC",
              "Gemini AI",
              "Cloudinary",
              "LiveKit",
              "REST APIs",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[11px] text-text-secondary backdrop-blur-xl"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="glass-panel-strong relative min-h-[560px] overflow-hidden rounded-[2rem] p-5 lg:min-h-[680px] lg:p-8"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.18),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.08),transparent_18%)]" />

          <div className="relative h-full overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-[#090b12]/90">
            {!imageFailed ? (
              <img
                src={heroImage}
                alt="Aditya Kapoor portrait"
                loading="eager"
                decoding="async"
                className="h-full min-h-[520px] w-full object-cover object-center lg:min-h-full"
                onError={() => {
                  if (heroImage !== "/adityapic.png") {
                    setHeroImage("/adityapic.png");
                  } else {
                    setImageFailed(true);
                  }
                }}
              />
            ) : (
              <div className="flex h-full min-h-[520px] items-center justify-center p-8 lg:min-h-full">
                <div className="max-w-sm rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-6 text-center backdrop-blur-xl">
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-text-muted">
                    Add your portrait asset
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    Use the supplied Supabase image URL or place your local
                    fallback in{" "}
                    <span className="text-white">public/adityapic.png</span>.
                  </p>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] ring-1 ring-inset ring-white/5" />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-3 text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/[0.14] p-1">
            <motion.span
              className="mt-1 h-2 w-2 rounded-full bg-accent"
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
