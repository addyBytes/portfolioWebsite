import { motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X, ArrowDownToLine } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar({ navItems, activeSection, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.div
        className={`glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[1.5rem] px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "shadow-glow" : ""
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="#home"
          className="flex items-center text-sm font-semibold tracking-[0.18em] text-white"
        >
          <span className="hidden sm:inline">Aditya Kapoor</span>
          <span className="sm:hidden">Aditya Kapoor</span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-active={activeSection === item.href.replace("#", "")}
              data-magnetic
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            data-magnetic
            className="hover-glow magnetic-target inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-300"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <SunMedium size={16} />
            ) : (
              <MoonStar size={16} />
            )}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <a
            href="https://ssmpvfkczpuimnrlixkz.supabase.co/storage/v1/object/public/assests/AdityaResume%20(1).pdf"
            download
            data-magnetic
            className="hover-glow magnetic-target inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform duration-300"
          >
            <ArrowDownToLine size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <motion.div
        className="mt-3 mx-auto max-w-7xl overflow-hidden rounded-[1.5rem]"
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass-panel-strong rounded-[1.5rem] p-5 xl:hidden">
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="mb-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
            >
              {theme === "dark" ? (
                <SunMedium size={16} />
              ) : (
                <MoonStar size={16} />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{
                  opacity: mobileOpen ? 1 : 0,
                  x: mobileOpen ? 0 : -14,
                }}
                transition={{
                  duration: 0.35,
                  delay: mobileOpen ? index * 0.05 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary transition-colors hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}

            <a
              href="https://ssmpvfkczpuimnrlixkz.supabase.co/storage/v1/object/public/assests/AdityaResume%20(1).pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-glow"
              onClick={() => setMobileOpen(false)}
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
