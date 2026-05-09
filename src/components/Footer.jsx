"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  Send,
  Loader2,
  Mail,
} from "lucide-react";

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { z } from "zod";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

const schema = z.string().trim().email("Invalid email").max(255);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    const parsed = schema.safeParse(email);

    if (!parsed.success) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("subscribers")
      .insert({ email: parsed.data });

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.info("You're already subscribed!");
      } else {
        toast.error("Subscription failed. Try again.");
      }
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-neon/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Footer Grid */}
        <div className="grid lg:grid-cols-3 gap-14">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Logo */}
            <div className="flex items-center gap-4">

              <img
                src="/logo.png"
                alt="logo"
                className="w-14 h-14 object-contain"
              />

              <h2 className="text-3xl font-bold text-neon">
                TECH AGENT
              </h2>

            </div>

            {/* Description */}
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-sm">

              Crafting seamless digital experiences with modern
              technologies and creative development solutions.

            </p>

            {/* Email Box */}
            <div className="mt-8 flex items-center gap-4 border border-neon/10 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 max-w-md">

              <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center text-neon">

                <Mail size={20} />

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="text-white break-all">
                  shawonmohammad787@gmail.com
                </p>

              </div>

            </div>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pl-12"
          >

            <h3 className="text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              {[
                "About",
                "Skills",
                "Projects",
                "Services",
                "Contact",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-neon transition-colors duration-300"
                >
                  {item}
                </a>
              ))}

            </div>

          </motion.div>

          {/* Connect + Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <h3 className="text-2xl font-semibold text-white">
              Connect
            </h3>

            <p className="mt-8 text-muted-foreground leading-relaxed max-w-sm">
              Let’s build something great together.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl border border-neon/10 bg-white/[0.03] flex items-center justify-center text-neon text-xl hover:bg-neon hover:text-black transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl border border-neon/10 bg-white/[0.03] flex items-center justify-center text-neon text-xl hover:bg-neon hover:text-black transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl border border-neon/10 bg-white/[0.03] flex items-center justify-center text-neon text-xl hover:bg-neon hover:text-black transition-all duration-300"
              >
                <FaGithub />
              </a>

            </div>

            {/* Subscribe Form */}
            <form
              onSubmit={subscribe}
              className="mt-10 flex flex-col gap-4 max-w-sm"
            >

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-white/[0.03] border border-neon/10 rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-neon text-black px-6 py-4 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(37,214,113,0.35)] transition-all duration-300 disabled:opacity-60"
              >

                {loading ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={18} />
                )}

                Subscribe

              </button>

            </form>

          </motion.div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-neon/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p className="font-mono text-center md:text-left">
            © {new Date().getFullYear()} Tech Agent — Built with
            React, Next.js & Framer Motion.
          </p>

          <p className="font-mono text-xs text-center md:text-right">
            Designed & Developed by Md Shaon
          </p>

        </div>

      </div>

    </footer>
  );
}