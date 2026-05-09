import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/8801000000000", label: "WhatsApp" },
  { icon: Mail, href: "mailto:shawonmohammad787@gmail.com", label: "Email" },
];

export default function SocialBar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="hidden md:flex fixed left-6 bottom-0 z-30 flex-col items-center gap-5 after:content-[''] after:w-px after:h-24 after:bg-neon/40"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted-foreground hover:text-neon hover:-translate-y-1 transition-all hover:drop-shadow-[0_0_8px_#ccff00]"
        >
          <s.icon size={20} />
        </a>
      ))}
    </motion.aside>
  );
}
