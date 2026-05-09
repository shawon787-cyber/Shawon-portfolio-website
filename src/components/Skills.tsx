import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Code2,
  FileCode2,
  Boxes,
  Server,
  Database,
  Layers,
  ShoppingBag,
  Globe,
  Figma,
  Zap,
  Cpu,
  Palette,
  MonitorSpeaker,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "Next.js", icon: MonitorSpeaker },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Cpu },
  { name: "MongoDB", icon: Database },
  { name: "Three.js", icon: Boxes },
  { name: "Framer Motion", icon: Zap },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Shopify", icon: ShoppingBag },
  { name: "WordPress", icon: Globe },
  { name: "Figma", icon: Figma },
  { name: "UI / UX", icon: Palette },
];

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="skills" className="relative px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle num="Tech" title="Stack" />

        <div className="relative overflow-hidden py-8">
          {/* Single marquee row */}
          <motion.div
            className="flex gap-6"
            animate={
              isHovered
                ? {}
                : {
                    x: [0, -100 * skills.length],
                  }
            }
            transition={
              isHovered
                ? {}
                : {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }
            }
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {[...skills, ...skills].map((s, i) => (
              <motion.div
                key={`${s.name}-${i}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-default neon-border-hover min-w-[140px] flex-shrink-0 relative cursor-pointer"
                style={{ zIndex: isHovered ? 20 : 10 }}
              >
                <s.icon
                  size={32}
                  className="text-neon group-hover:drop-shadow-[0_0_10px_#ccff00] transition-all"
                />
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground text-center">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
