import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const activeSection = useActiveSection(sectionIds);
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowIntro(false),
      shouldReduceMotion ? 250 : 1200,
    );
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const magneticTargets = Array.from(
      document.querySelectorAll("[data-magnetic]"),
    );

    const onMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      target.style.setProperty("--mx", `${offsetX * 0.18}px`);
      target.style.setProperty("--my", `${offsetY * 0.18}px`);
    };

    const onLeave = (event) => {
      event.currentTarget.style.setProperty("--mx", "0px");
      event.currentTarget.style.setProperty("--my", "0px");
    };

    magneticTargets.forEach((target) => {
      target.addEventListener("mousemove", onMove);
      target.addEventListener("mouseleave", onLeave);
    });

    return () => {
      magneticTargets.forEach((target) => {
        target.removeEventListener("mousemove", onMove);
        target.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const introVariants = useMemo(
    () => ({
      hidden: { opacity: 1 },
      show: {
        opacity: 0,
        transition: {
          duration: shouldReduceMotion ? 0.1 : 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }),
    [shouldReduceMotion],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-text-primary selection:bg-accent/30 selection:text-white">
      <CustomCursor />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050507]"
            initial="hidden"
            animate="show"
            exit="show"
            variants={introVariants}
          >
            <div className="text-center">
              <motion.p
                className="mb-4 text-xs uppercase tracking-[0.45em] text-text-secondary"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Portfolio loading
              </motion.p>
              <motion.h1
                className="font-display text-4xl font-semibold text-white md:text-6xl"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Aditya Kapoor
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
