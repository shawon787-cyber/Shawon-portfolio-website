import { motion } from "framer-motion";

export default function SectionTitle({ num, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-12"
    >
      <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
        <span className="text-neon font-mono mr-3 glow-text">{num}</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-neon/30" />
    </motion.div>
  );
}
