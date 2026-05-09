
// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import "./project.module.css";
// import {
//   FaArrowUpRightFromSquare,
//   FaArrowRight,
//   FaGithub,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa6";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const projects = [
//   {
//     img: "https://i.ibb.co/Z6W1KY9N/Tech-Agent-05-10-2026-01-26-AM.png",
//     category: "AGENCY",
//     title: "Tech Agent",
//     desc: "Modern developer portfolio showcasing creative projects, clean UI, and innovation.",
//     live: "https://tech-agent-shawon-portfolio.netlify.app/",
//     github: "https://github.com/shawon787-cyber/Tech-Agent",
//   },
//   {
//     img: "https://i.ibb.co/SDFj9rXP/keen-keeper-05-10-2026-01-36-AM.png",
//     category: "WEB DEVELOPMENT",
//     title: "Keen Keeper",
//     desc: "Modern task management web application with responsive UI.",
//     live: "https://keen-keeper-wheat.vercel.app/",
//     github: "https://github.com/shawon787-cyber/Keen-Keeper",
//   },
//   {
//     img: "https://i.ibb.co/ds8TG0Pb/Create-Next-App-05-10-2026-01-03-AM.png",
//     category: "WEB DEVELOPMENT",
//     title: "SkillSphere",
//     desc: "Modern learning website with responsive and clean UI.",
//     live: "https://skill-sphere-two-gamma.vercel.app/",
//     github: "https://github.com/shawon787-cyber/SkillSphere",
//   },
// ];

// const Projects = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section
//       id="projects"
//       className="relative py-24 overflow-hidden"
//     >
//       {/* Glow Background */}
//       <div className="absolute top-0 left-[-200px] h-full w-[400px] bg-gradient-to-r from-neon/10 via-neon/5 to-transparent blur-[100px] opacity-40" />

//       <div className="absolute -bottom-40 -right-32 w-[700px] h-[700px] bg-neon/5 rounded-full blur-[120px] opacity-30" />

//       {/* Grid Background */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(37,214,113,0.12) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(37,214,113,0.12) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <p className="text-neon font-mono uppercase tracking-[4px] text-sm">
//             Featured Work
//           </p>

//           <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
//             My <span className="text-neon glow-text">Projects</span>
//           </h2>

//           <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             A collection of business websites, modern web apps,
//             and creative development projects.
//           </p>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative mt-16">

//           {/* Left Arrow */}
//           <button
//             ref={prevRef}
//             className="absolute left-[-15px] lg:left-[-70px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/40 backdrop-blur-md text-neon flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,214,113,0.25)]"
//           >
//             <FaChevronLeft />
//           </button>

//           {/* Right Arrow */}
//           <button
//             ref={nextRef}
//             className="absolute right-[-15px] lg:right-[-70px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/40 backdrop-blur-md text-neon flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,214,113,0.25)]"
//           >
//             <FaChevronRight />
//           </button>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = prevRef.current;
//               swiper.params.navigation.nextEl = nextRef.current;
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               1024: {
//                 slidesPerView: 1,
//               },
//               1280: {
//                 slidesPerView: 1,
//               },
//             }}
//             className="pb-14"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.15,
//                   }}
//                   className="group relative h-full bg-white/[0.03] border border-neon/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-neon/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_30px_rgba(37,214,113,0.05)]"
//                 >

//                   {/* Image */}
//                   <div className="relative overflow-hidden">

//                     <Image
//                       src={project.img}
//                       alt={project.title}
//                       width={700}
//                       height={500}
//                       unoptimized
//                       className="h-[260px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-neon text-black p-4 rounded-full text-xl hover:scale-110 transition duration-300 shadow-[0_0_25px_rgba(37,214,113,0.5)]"
//                       >
//                         <FaArrowUpRightFromSquare />
//                       </a>

//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">

//                     <p className="text-neon text-xs font-mono tracking-[3px] uppercase">
//                       {project.category}
//                     </p>

//                     <h3 className="mt-3 text-2xl font-semibold text-white">
//                       {project.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                       {project.desc}
//                     </p>

//                     {/* Buttons */}
//                     <div className="mt-6 flex items-center gap-4 flex-wrap">

//                       {/* Live */}
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 bg-neon text-black px-5 py-3 rounded-lg font-medium hover:shadow-[0_0_25px_rgba(37,214,113,0.4)] transition-all duration-300"
//                       >
//                         View Project
//                         <FaArrowRight className="text-sm" />
//                       </a>

//                       {/* GitHub */}
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 border border-neon/30 text-neon px-5 py-3 rounded-lg hover:bg-neon/10 transition-all duration-300"
//                       >
//                         <FaGithub />
//                         GitHub
//                       </a>

//                     </div>
//                   </div>

//                 </motion.div>

//               </SwiperSlide>
//             ))}
//           </Swiper>

//         </div>

//         {/* Bottom Text */}
//         <div className="flex flex-col items-center mt-16">

//           <p className="text-center text-muted-foreground leading-relaxed">
//             Every project is crafted with modern technologies,
//             responsive layouts, and smooth user experiences.
//           </p>

//           <button className="mt-6 group inline-flex items-center gap-2 border border-neon text-neon px-7 py-4 rounded-md hover:bg-neon/10 transition-all duration-300">
//             More Projects Coming Soon

//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    img: "https://i.ibb.co/Z6W1KY9N/Tech-Agent-05-10-2026-01-26-AM.png",

    category: "AGENCY",

    title: "Tech Agent",

    desc: "Modern developer portfolio showcasing creative projects, clean UI, animations, and premium user experience.",

    features: [
      "Responsive Design",
      "Smooth Animations",
      "Modern UI/UX",
      "Interactive Sections",
    ],

    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <FaReact key="react" />,
    ],

    live: "https://tech-agent-shawon-portfolio.netlify.app/",

    github: "https://github.com/shawon787-cyber/Tech-Agent",
  },

  {
    img: "https://i.ibb.co/SDFj9rXP/keen-keeper-05-10-2026-01-36-AM.png",

    category: "WEB DEVELOPMENT",

    title: "Keen Keeper",

    desc: "Modern task management web application with clean design and productivity-focused features.",

    features: [
      "Authentication System",
      "Responsive Dashboard",
      "Task Management",
      "Realtime Updates",
    ],

    tech: [
      <FaReact key="react" />,
      <SiFirebase key="firebase" />,
      <SiTailwindcss key="tailwind" />,
    ],

    live: "https://keen-keeper-wheat.vercel.app/",

    github: "https://github.com/shawon787-cyber/Keen-Keeper",
  },

  {
    img: "https://i.ibb.co/ds8TG0Pb/Create-Next-App-05-10-2026-01-03-AM.png",

    category: "WEB DEVELOPMENT",

    title: "SkillSphere",

    desc: "Modern learning platform with elegant UI, responsive layouts, and smooth learning experience.",

    features: [
      "Course Management",
      "Authentication",
      "Responsive Design",
      "Modern Interface",
    ],

    tech: [
      <SiNextdotjs key="next" />,
      <SiMongodb key="mongodb" />,
      <FaNodeJs key="node" />,
    ],

    live: "https://skill-sphere-two-gamma.vercel.app/",

    github: "https://github.com/shawon787-cyber/SkillSphere",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-200px] h-full w-[400px] bg-gradient-to-r from-neon/10 via-neon/5 to-transparent blur-[100px] opacity-40" />

      <div className="absolute -bottom-40 -right-32 w-[700px] h-[700px] bg-neon/5 rounded-full blur-[120px] opacity-30" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,214,113,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,214,113,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-neon font-mono uppercase tracking-[4px] text-sm">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
            My <span className="text-neon glow-text">Projects</span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of modern web applications,
            creative interfaces, and full-stack solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-20 px-2 lg:px-20 pb-20">

          {/* Left Arrow */}
          <button
            ref={prevRef}
            className="absolute left-0 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/60 backdrop-blur-md text-neon flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,214,113,0.25)]"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            className="absolute right-0 lg:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/60 backdrop-blur-md text-neon flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,214,113,0.25)]"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-neon/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_30px_rgba(37,214,113,0.05)]"
                >

                  <div className="grid lg:grid-cols-2 items-center">

                    {/* Left Image */}
                    <div className="relative overflow-hidden h-full">

                      <Image
                        src={project.img}
                        alt={project.title}
                        width={1000}
                        height={700}
                        unoptimized
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                    </div>

                    {/* Right Content */}
                    <div className="p-8 lg:p-12">

                      <p className="text-neon text-xs uppercase tracking-[4px] font-mono">
                        {project.category}
                      </p>

                      <h2 className="mt-4 text-4xl font-bold text-white">
                        {project.title}
                      </h2>

                      <p className="mt-5 text-muted-foreground leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Features */}
                      <div className="mt-8 space-y-3">

                        {project.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-neon" />

                            {feature}
                          </div>
                        ))}

                      </div>

                      {/* Tech Stack */}
                      <div className="mt-10">

                        <p className="text-sm uppercase tracking-[3px] text-neon font-mono mb-5">
                          Tech Stack
                        </p>

                        <div className="flex items-center gap-5 text-3xl text-neon">

                          {project.tech.map((icon, i) => (
                            <div
                              key={i}
                              className="hover:scale-110 transition-transform duration-300"
                            >
                              {icon}
                            </div>
                          ))}

                        </div>

                      </div>

                      {/* Buttons */}
                      <div className="mt-10 flex flex-wrap items-center gap-4">

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-neon text-black px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(37,214,113,0.4)] transition-all duration-300"
                        >
                          Live Preview
                          <FaArrowUpRightFromSquare />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-neon/30 text-neon px-6 py-3 rounded-xl hover:bg-neon/10 transition-all duration-300"
                        >
                          <FaGithub />
                          GitHub Repo
                        </a>

                      </div>

                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Projects;