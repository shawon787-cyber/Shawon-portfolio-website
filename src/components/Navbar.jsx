import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-mono text-lg tracking-tight">
          <span className="text-neon glow-text">{"<"}</span>
          <span className="text-foreground font-medium">SHAWON</span>
          <span className="text-neon glow-text">{"/>"}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-neon transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/shawon787-cyber"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-sm font-mono px-4 py-2 border border-neon text-neon rounded-sm hover:bg-neon hover:text-black transition-all shadow-neon-sm"
        >
          GitHub
        </a>
        <button className="md:hidden text-neon" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-3 mx-6 rounded-lg p-6"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-neon"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
