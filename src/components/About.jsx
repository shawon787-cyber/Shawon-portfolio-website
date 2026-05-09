import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { FaWordpress } from "react-icons/fa";
import { ImFileOpenoffice } from "react-icons/im";

const timeline = [
  {
    icon: Code2,
    title: "Complete Web Development",
    org: "Programming Hero",
    period: "Bootcamp",
    desc: "Mastered the MERN stack, modern React, Next.js, and production-grade web architecture through intensive hands-on projects.",
  },
  {
    icon: FaWordpress,
    title: "Wordpress Development",
    org: "CodemanBD",
    period: "BOOTCAMP",
    desc: "Completed a hands-on WordPress bootcamp covering custom development and responsive website creation.",
  },
  {
    icon: ImFileOpenoffice,
    title: "Wordpress & Web Developer",
    org: "ABG-SERVICE. Germany (Remote)",
    period: "JOB EXPERIENCE ",
    desc: "Gained real-world experience developing custom WordPress websites, optimizing performance, and creating clean, scalable solutions for clients in a remote role with a Germany-based company.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-24 lg:pt-4 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle num="About" title="Me" />
        <div className="grid md:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
          >
            <p>
              I’m a MERN Stack and WordPress Developer passionate about building modern, responsive, and user-focused web applications. With nearly 1 year of professional experience, I’ve worked on real-world projects ranging from custom WordPress websites to dynamic full-stack applications using <span className="text-neon">React.js, Next.js, MongoDB, Express.js, and Node.js</span>.
            </p>
            <p>
              I also worked remotely with a <span className="text-neon">Germany</span>-based company as a <span className="text-neon">WordPress & Web Developer</span>, where I gained hands-on experience developing custom websites, optimizing performance, and creating clean, scalable solutions for clients. Alongside WordPress, I enjoy crafting interactive frontend experiences with modern JavaScript technologies and converting Figma designs into pixel-perfect interfaces.
            </p>
            <p>I’m constantly exploring new technologies, improving my development <span className="text-neon">skills</span>, and building products that combine performance, usability, and clean design.
            </p>
          </motion.div>

          <div className="md:col-span-2 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/40 to-transparent" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14"
                >
                  <span className="absolute left-0 top-0 w-10 h-10 rounded-full border border-neon bg-background flex items-center justify-center shadow-neon-sm">
                    <t.icon size={18} className="text-neon" />
                  </span>
                  <p className="font-mono text-xs text-neon uppercase tracking-wider">{t.period}</p>
                  <h3 className="font-bold text-lg mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.org}</p>
                  <p className="text-sm text-muted-foreground/80 mt-2">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
