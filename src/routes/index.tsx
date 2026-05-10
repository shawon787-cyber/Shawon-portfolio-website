import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Md Shaon — Frontend Developer & Web Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Md Shaon (Ishak Qureshee Akib) — Frontend Developer specializing in Next.js, React, TypeScript, MERN, Shopify & WordPress. Sylhet, Bangladesh.",
      },
      {
        name: "keywords",
        content:
          "Md Shaon, Ishak Qureshee Akib, Frontend Developer, Next.js, React, TypeScript, MERN, Shopify, WordPress, Sylhet, Bangladesh",
      },
      { property: "og:title", content: "Md Shaon — Frontend Developer & Web Specialist" },
      {
        property: "og:description",
        content:
          "Crafting fast, accessible, motion-rich web experiences with Next.js, React & Framer Motion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Md Shaon — Frontend Developer" },
      {
        name: "twitter:description",
        content: "Frontend Developer & Web Specialist — Next.js, React, MERN, Shopify, WordPress.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <ParticleBackground />
      <Toaster theme="dark" position="bottom-right" />
      <Navbar />
      <SocialBar />
      <main>
        <Hero />
        <About />
        
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
