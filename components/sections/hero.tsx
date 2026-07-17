"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-16"
      aria-label="Introduction"
    >
      {/* Animated gradient / grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="animated-gradient absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="animated-gradient absolute right-0 top-40 size-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-28 lg:px-8 lg:py-32">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-sm font-medium text-success"
          >
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Available for new projects
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I build fast, modern web applications with{" "}
            <span className="font-medium text-foreground">Next.js</span>,
            React and{" "}
            <span className="font-medium text-foreground">AI</span> — from
            pixel-perfect interfaces to scalable back-ends.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-violet-500 text-white hover:bg-violet-600"
            >
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#portfolio">
                View Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile photo — top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto md:ml-auto md:mr-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-500 to-purple-300 opacity-70 blur-md" />
            <div className="relative size-48 overflow-hidden rounded-full border-4 border-violet-500 shadow-xl sm:size-56 lg:size-64">
              <Image
                src="/profile.png"
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                sizes="(max-width: 768px) 12rem, 16rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
