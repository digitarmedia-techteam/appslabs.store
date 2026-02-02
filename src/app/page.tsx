"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import {
  ExternalLink,
  ShoppingBag,
  Terminal,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Code,
  Layout,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ArrowUp
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for showcase
const APPS = [
  {
    id: 1,
    title: "TaskFlow",
    description: "A sleek, modern mobile application interface for a productivity app. Features clean dashboard and task lists.",
    image: "/app_taskflow_preview_1770041862173.png",
    category: "Productivity",
    link: "#",
    tags: ["Next.js", "React Native", "Firebase"]
  },
  {
    id: 2,
    title: "FinEase",
    description: "A premium mobile app interface for a finance app. Displays credit cards, monthly spending and portfolios.",
    image: "/app_finease_preview_1770042043986.png",
    category: "Fintech",
    link: "#",
    tags: ["TypeScript", "Tailwind", "Supabase"]
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    description: "Enterprise level analytics dashboard for data-driven decisions. High performance and real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise",
    link: "#",
    tags: ["React", "D3.js", "PostgreSQL"]
  },
  {
    id: 4,
    title: "MintX",
    description: "Engaging quiz game where users earn 'Mint Coin' and convert it to coupons. Features task-based rewards like app installations.",
    image: "/app_mintx_preview.png",
    category: "Entertainment",
    link: "#",
    tags: ["Next.js", "Gamification", "Node.js"]
  }
];

const NAV_ITEMS = [
  { name: 'Showcase', href: '#showcase' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '/contact' }
];

const SERVICES = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Globe,
    title: "Web Solutions",
    description: "High-performance websites using Next.js and modern stacks.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Shield,
    title: "Secure Arch.",
    description: "Enterprise-grade security and scalable cloud infrastructure.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    icon: Code,
    title: "Custom Soft.",
    description: "Tailored software designed to solve business challenges.",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive, beautiful, and engaging digital product design.",
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Comprehensive performance audits and optimizations.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  }
];

// --- Animation Components ---

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    spring.set(to);
  }, [spring, to]);

  return <motion.span>{display}</motion.span>;
};

const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap overflow-hidden align-top">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {word}
            {i !== words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      initial: {
        x: Math.random() * 100 - 50 + "vw",
        y: Math.random() * 100 - 50 + "vh",
        opacity: 0,
      },
      animate: {
        x: [
          Math.random() * 100 - 50 + "vw",
          Math.random() * 100 - 50 + "vw",
        ],
        y: [
          Math.random() * 100 - 50 + "vh",
          Math.random() * 100 - 50 + "vh",
        ],
        opacity: [0.1, 0.3, 0.1],
      },
      duration: Math.random() * 10 + 20,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={p.initial}
          animate={p.animate}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-2 h-2 bg-indigo-500 rounded-full blur-sm"
        />
      ))}
    </div>
  );
};

// Helper for Splash Screen
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  // SEO Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareHouse",
    "name": "AppsLabs.store",
    "image": "https://appslabs.store/logo.png",
    "@id": "https://appslabs.store",
    "url": "https://appslabs.store",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Virtual Studio",
      "addressLocality": "Global",
      "postalCode": "00000",
      "addressCountry": "US"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/appslabs",
      "https://github.com/appslabs",
      "https://linkedin.com/company/appslabs"
    ]
  };

  // 1. Page Scroll Progress
  const { scrollYProgress: pageProgress } = useScroll();
  const scaleX = useSpring(pageProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Scroll to Top Logic
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 3. Splash Screen Logic
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Existing Hero Scroll Logic
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-sans relative">
      <FloatingParticles />

      {/* Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 mb-8 relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
              >
                <Image src="/logo.png" alt="AppsLabs" fill className="object-cover" />
              </motion.div>
              <motion.div
                className="absolute -inset-4 border border-indigo-500/30 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 border border-violet-500/30 rounded-3xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight flex gap-2">
              <span className="water-text">AppsLabs</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-indigo-500"
              >
                _
              </motion.span>
            </h1>

            <div className="mt-8 font-mono text-xs text-indigo-400">
              <Typewriter text="Initializing Core Systems..." />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[101]"
        style={{ scaleX }}
      />

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[90] cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-14 h-14">
              {/* Progress Ring Container */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" /> {/* Indigo-500 */}
                    <stop offset="50%" stopColor="#a855f7" /> {/* Purple-500 */}
                    <stop offset="100%" stopColor="#ec4899" /> {/* Pink-500 */}
                  </linearGradient>
                </defs>
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-800"
                />
                {/* Progress Value */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="url(#progress-gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  className="drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]"
                  style={{ pathLength: pageProgress }}
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner Button */}
              <div className="w-10 h-10 bg-indigo-600 group-hover:bg-indigo-700 rounded-full flex items-center justify-center shadow-inner text-white transition-all group-active:scale-95">
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 relative rounded-xl overflow-hidden shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
              <Image
                src="/logo.png"
                alt="AppsLabs Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold font-display tracking-tight liquid-text">AppsLabs.store</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-slate-200 transition-all"
            >
              Visit Store
              <ShoppingBag className="w-4 h-4" />
            </motion.button>
          </div>

          <button
            className="lg:hidden p-2 text-slate-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] lg:hidden pt-20"
          >
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" />
            <div className="relative p-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold font-display flex justify-between items-center group cursor-pointer"
                >
                  {item.name}
                  <ChevronRight className="w-6 h-6 text-indigo-500 group-hover:translate-x-2 transition-transform" />
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl text-xl font-bold shadow-2xl shadow-indigo-600/30 flex items-center justify-center gap-3">
                Visit Store
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen lg:h-screen flex items-center justify-center pt-20 px-5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-indigo-600/20 blur-[150px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="text-center lg:text-left flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 lg:mb-6 shadow-lg shadow-indigo-500/10 mx-auto lg:mx-0 w-fit"
            >
              <Zap className="w-2.5 h-2.5" />
              Next-Gen Development Lab
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl lg:text-6xl 2xl:text-7xl font-black font-display mb-8 lg:mb-6 tracking-tight leading-[0.9]"
            >
              <TextReveal text="Beyond" className="block" />
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                <span className="gradient-text"><TextReveal text="Exceptional" /></span>
                <span className="text-indigo-500">.</span>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-400/90 mb-10 lg:mb-10 leading-relaxed font-medium"
            >
              Premium digital engineering for visionary brands. We build high-performance applications that define tomorrow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass border-white/5 rounded-2xl font-bold hover:bg-white/10 transition-all text-slate-300 hover:text-white">
                Explore Work
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Element Container */}
          <motion.div style={{ scale: heroScale }} className="relative perspective-1000 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "circOut" }}
            >
              <div className="relative w-full aspect-[4/5] max-w-[320px] mx-auto preserve-3d">
                {/* Back shadows/glow */}
                <div className="absolute inset-x-10 inset-y-20 bg-indigo-500/30 blur-[100px] -z-10 rounded-full" />

                <motion.div
                  animate={{
                    rotateY: [-5, 5, -5],
                    rotateX: [2, -2, 2],
                    y: [0, -15, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-slate-900 rounded-[3.5rem] p-3 border-[6px] border-slate-800 shadow-[0_50px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-800 rounded-b-2xl z-20 shadow-inner" />
                  <img
                    src="/app_taskflow_preview_1770041862173.png"
                    alt="App Interface"
                    className="w-full h-full object-cover rounded-[2.8rem]"
                  />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-12 -right-12 w-28 h-28 glass rounded-[2rem] flex items-center justify-center shadow-2xl border-white/20 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Zap className="text-yellow-400 w-12 h-12" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-10 -left-12 w-24 h-24 glass rounded-[1.8rem] flex items-center justify-center shadow-2xl border-white/20"
                >
                  <div className="p-4 bg-indigo-500/20 rounded-2xl">
                    <Smartphone className="text-indigo-400 w-8 h-8" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Logo Section */}
      <div className="py-20 border-y border-white/5 bg-slate-950 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Successful Deployments", val: 150, suffix: "+" },
            { label: "Design Awards", val: 12, suffix: "" },
            { label: "Countries Reached", val: 45, suffix: "" },
            { label: "Line of Code", val: 1, suffix: "M+" }
          ].map((stat) => (
            <div key={stat.label}>
              <h4 className="text-3xl md:text-5xl font-black font-display mb-2 gradient-text flex justify-center items-center gap-1">
                <CountUp to={stat.val} /> {stat.suffix}
              </h4>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 px-5 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] -z-10 rounded-full mix-blend-screen" />

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 px-4 py-2 rounded-full glass border-indigo-500/20 shadow-lg shadow-indigo-500/10"
              >
                Core Solutions
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black font-display tracking-tight leading-[0.9]"
              >
                <TextReveal text="Infinite" className="block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                  <TextReveal text="Possibilities" />
                </span>
                <span className="text-indigo-500">.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-xl max-w-sm font-medium leading-relaxed"
            >
              We provide end-to-end digital engineering services for modern startups and enterprises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <TiltCard key={service.title} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ transition: { duration: 0.2 } }}
                  className="group p-8 md:p-10 rounded-[2.5rem] glass border-white/5 hover:border-indigo-500/30 transition-all cursor-default h-full flex flex-col justify-between"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div>
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg]", service.bg)}>
                      <service.icon className={cn("w-8 h-8", service.color)} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Full Service <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section id="showcase" className="py-32 px-5 bg-slate-950 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
              >
                Selected Projects
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-tight"
              >
                Visual <br /> Masterpieces
              </motion.h2>
            </div>
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
              <button className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-black text-sm shadow-xl">Latest Work</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {APPS.map((app, index) => (
              <TiltCard key={app.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group relative h-full min-h-[500px] md:min-h-[600px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl"
                >
                  {/* Hover Glow Background */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                  {/* Main Content Container with mask for border effect */}
                  <div className="absolute inset-[1px] overflow-hidden rounded-[2.5rem] bg-slate-950">
                    {/* Background Image with Zoom */}
                    <div className="absolute inset-0 h-full w-full">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transition-transform duration-1000 will-change-transform group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90 opacity-80" />
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      {/* Top Row */}
                      <div className="flex items-start justify-between z-10">
                        <div className="flex gap-2">
                          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-lg">
                            {app.category}
                          </span>
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black shadow-lg">
                          <ArrowRight className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Bottom Row - Title & Info */}
                      <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0 z-10">
                        <h3 className="mb-4 font-display text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
                          {app.title}
                        </h3>
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                          <div className="overflow-hidden">
                            <p className="mb-6 max-w-lg text-lg font-medium leading-relaxed text-slate-300/90 pt-2">
                              {app.description}
                            </p>
                            <div className="flex flex-wrap gap-3 pb-2">
                              {app.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-widest leading-none flex items-center">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-32 px-5 border-t border-white/5 bg-slate-950 selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-10">
                <div className="w-10 h-10 relative rounded-xl overflow-hidden shadow-lg shadow-indigo-600/20">
                  <Image
                    src="/logo.png"
                    alt="AppsLabs Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-2xl font-bold font-display tracking-tight liquid-text">AppsLabs.store</span>
              </Link>
              <p className="text-slate-400 text-xl max-w-md mb-12 font-medium leading-[1.6]">
                Building tomorrow's digital infrastructure today. Crafting premium software solutions that scale.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                  <Link key={social} href="#" className="px-6 py-3 rounded-xl glass border-white/5 font-bold text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-10 text-white uppercase text-xs tracking-[0.3em]">Navigate</h4>
              <ul className="space-y-6 text-slate-400">
                <li><Link href="#showcase" className="hover:text-indigo-400 transition-colors font-medium">Showcase</Link></li>
                <li><Link href="#services" className="hover:text-indigo-400 transition-colors font-medium">Expertise</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors font-medium">Contact</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors font-medium">Store</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-10 text-white uppercase text-xs tracking-[0.3em]">Office</h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Innovation Hub <br />
                Global Virtual Studio <br />
                <span className="text-indigo-400 mt-4 block">hello@appslabs.store</span>
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-slate-600">
            <p>© 2024 AppsLabs Global. All rights reserved.</p>
            <div className="flex gap-12">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
