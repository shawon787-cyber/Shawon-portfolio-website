
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

import "../components/css/style.module.css";

const ROLES = [
  "Frontend Developer",
  "Web Specialist",
  "Next.js Developer",
  "UI/UX Designer",
  "Shopify & WordPress Dev",
];

function useTyping(words, speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];

    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));

          if (text.length + 1 === word.length) {
            setTimeout(() => setDel(true), pause);
          }
        } else {
          setText(word.slice(0, text.length - 1));

          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );

    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 rounded-full" />
      <div className="absolute" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-24 md:gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-neon font-mono text-sm mb-6"
            >
              <span className="h-px w-10 bg-neon shadow-neon-sm" />
              <span className="glow-text">Hi, my name is</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
            >
              Md Shaon.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 text-2xl sm:text-3xl font-mono"
            >
              <span className="text-muted-foreground">{">"} </span>

              <span className="text-neon glow-text">
                {typed}
              </span>

              <span className="inline-block w-[3px] h-7 bg-neon ml-1 animate-pulse align-middle" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              Building pixel-perfect interfaces and scalable web applications
              with <br />
              React, Next.js, and the MERN stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 flex items-center gap-2 text-sm text-muted-foreground font-mono"
            >
              <MapPin
                size={14}
                className="text-neon"
              />

              Sylhet, Bangladesh — available worldwide
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1Exg2Ghvpt8sNOJfGvDIQuqsNLpBE7FEM"
                download
                className="group inline-flex items-center gap-2 bg-neon text-black px-7 py-4 rounded-md font-semibold shadow-neon-xl hover:shadow-[0_0_40px_#ccff00] transition-all"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md border border-neon text-neon font-semibold hover:bg-neon/10 transition-all"
              >
                Get in touch

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-neon/20 blur-3xl rounded-full animate-pulse" />

            {/* Water Blob */}
            <div
              className="absolute w-[420px] h-[420px] bg-gradient-to-br from-neon/30 via-neon/10 to-transparent opacity-80"
              style={{
                borderRadius:
                  "58% 42% 65% 35% / 40% 45% 55% 60%",
                animation: "morph 8s ease-in-out infinite",
              }}
            />

            {/* Second Blob */}
            <div
              className="absolute w-[360px] h-[360px] border border-neon/20"
              style={{
                borderRadius:
                  "40% 60% 30% 70% / 55% 30% 70% 45%",
                animation: "morph2 10s ease-in-out infinite",
              }}
            />

            {/* Floating Social Card */}
            <div className="absolute bottom-8 -right-10 hidden lg:block z-50">
              <div className="bg-[#0f1115]/40 border border-neon/10 backdrop-blur-xl rounded-md px-5 py-4 shadow-[0_0_30px_rgba(37,214,113,0.08)]">
                <div className="flex items-center gap-3 text-neon text-xl">
                   <FiGithub />
                   <FiLinkedin />
                   <FiFacebook />
                   <FaWhatsapp />
                </div>
              </div>
            </div>

            
            <div className="relative z-20">
  {/* Image */}
  <img
    src="https://i.ibb.co.com/4xFxzQZ/my-Image.png"
    alt="Developer"
    className="
      w-[320px] sm:w-[380px] md:w-[430px]
      object-cover
      drop-shadow-[0_0_40px_rgba(37,214,113,0.25)]
      [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
    "
  />

  {/* Extra Bottom Glow */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-neon/10 blur-2xl -z-10" />
</div>

            {/* Available Badge */}
            <div className="absolute top-10 -left-6 md:left-10 lg:-left-16 z-50 hidden md:block">
              <div className="flex items-center gap-3 bg-[#0f1115]/50 border border-neon/20 backdrop-blur-xl rounded-full px-4 py-2 shadow-[0_0_30px_rgba(37,214,113,0.08)]">
                <span className="w-3 h-3 rounded-full bg-neon animate-pulse" />

                <div>
                  <p className="text-sm text-white font-medium">
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}