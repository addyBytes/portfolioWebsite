import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-8 text-center sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/addyBytes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/aditya-kapoor-799b76287"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
        <p className="text-sm text-text-secondary">
          Designed &amp; built by Aditya Kapoor
        </p>
        <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
          Copyright 2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;
