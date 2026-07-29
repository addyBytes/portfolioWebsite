import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    setFormState((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_jlok2lv",
        "template_c6qlwm2",
        {
          name: formState.name,
          email: formState.email,
          title: "Portfolio Contact",
          message: formState.message,
        },
        "wpISDnexCcu7aKSTF",
      );

      setStatus("sent");

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
      setStatus("idle");
    }
  }

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-24 snap-start pb-40"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span className="section-kicker">Contact</span>

          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Let&apos;s build something great together.
          </h2>

          <div className="mt-8 space-y-4 text-lg text-text-secondary">
            <a
              href="mailto:itzadityakapoor@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail size={18} className="text-accent" />
              itzadityakapoor@gmail.com
            </a>

            <a
              href="tel:+918850849686"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Phone size={18} className="text-accent" />
              +91 8850849686
            </a>

            <a
              href="https://github.com/addyBytes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Github size={18} className="text-accent" />
              github.com/addyBytes
            </a>

            <a
              href="https://linkedin.com/in/aditya-kapoor-799b76287"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Linkedin size={18} className="text-accent" />
              linkedin.com/in/aditya-kapoor-799b76287
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/addyBytes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
              aria-label="GitHub profile"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/aditya-kapoor-799b76287"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel-strong rounded-[2rem] p-6 lg:p-8"
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-text-secondary">
                Name
              </span>

              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all placeholder:text-text-muted focus:border-accent/50 focus:bg-accent/5"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-text-secondary">
                Email
              </span>

              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all placeholder:text-text-muted focus:border-accent/50 focus:bg-accent/5"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-text-secondary">
              Message
            </span>

            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all placeholder:text-text-muted focus:border-accent/50 focus:bg-accent/5"
              placeholder="Tell me about your product, app, or idea..."
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="hover-glow magnetic-target inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />

              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent ✅"
                  : "Send Message"}
            </button>

            <p className="text-sm text-text-muted">
              Your message will be sent directly to my inbox.
            </p>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
