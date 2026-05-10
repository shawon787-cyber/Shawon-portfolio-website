import Head from "next/head";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import Projects from "@/components/Projects/Projects";
import DigitalExperience from "@/components/DigitalExperience";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Md Shaon — Frontend Developer & Web Specialist</title>
        <meta
          name="description"
          content="Portfolio of Md Shaon — Frontend Developer specializing in Next.js, React, and motion-rich experiences."
        />
        <meta
          name="keywords"
          content="Md Shaon, Frontend Developer, Next.js, React, MERN, Shopify, WordPress, Sylhet, Bangladesh"
        />
        <meta property="og:title" content="Md Shaon — Frontend Developer & Web Specialist" />
        <meta
          property="og:description"
          content="Crafting fast, accessible, motion-rich web experiences with Next.js, React, and Framer Motion."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="relative min-h-screen overflow-hidden text-foreground">
        {/* Background Animation */}
        <div className="fixed inset-0 -z-100">
          <ParticleBackground />
        </div>

        <Toaster theme="dark" position="bottom-right" />

        <Navbar />
        <SocialBar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <DigitalExperience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
