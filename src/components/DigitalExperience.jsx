"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaDatabase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Development",
    desc: "Building scalable and responsive applications with modern frontend technologies.",
  },
  {
    icon: <FaCode />,
    title: "Clean Architecture",
    desc: "Writing optimized, maintainable, and reusable code for long-term scalability.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    desc: "Creating smooth, high-performance user experiences with optimized workflows.",
  },
  {
    icon: <FaDatabase />,
    title: "Full Stack Solutions",
    desc: "Developing complete MERN stack applications with secure backend integration.",
  },
];

const stats = [
  {
    number: "15+",
    label: "Projects Completed",
  },
  {
    number: "1+",
    label: "Years Experience",
  },
  {
    number: "4K+",
    label: "Coding Hours",
  },
];

const DigitalExperience = () => {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-neon/30 bg-neon/10 px-5 py-2 rounded-full text-neon text-sm font-medium backdrop-blur-md">

              <FaCode className="text-sm" />

              Creative Web Developer

            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-white">

              Turning Ideas Into{" "}

              <span className="text-neon">
                Modern Digital Products
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">

              I create visually stunning and high-performance web applications
              focused on clean design, smooth user experience, and scalable
              development solutions.

            </p>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">

              From modern frontend interfaces to powerful full-stack systems,
              I enjoy building products that combine creativity with
              functionality using the latest technologies.

            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">

              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="border-l border-neon/30 pl-4"
                >

                  <h3 className="text-4xl font-bold text-neon">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-neon/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-neon/30 transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-neon/5 to-transparent" />

                <div className="relative flex gap-5 items-start">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon text-2xl shrink-0">

                    {feature.icon}

                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DigitalExperience;