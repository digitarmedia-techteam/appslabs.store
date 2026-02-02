"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        setParticles([...Array(20)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 10 + 20
        })));
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-indigo-500/30">

            {/* Background Effects */}
            <div className="absolute inset-0 grid-bg opacity-30 bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-20" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
                        animate={{
                            x: [`${p.x}vw`, `${(p.x + 10) % 100}vw`],
                            y: [`${p.y}vh`, `${(p.y + 10) % 100}vh`],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-2 h-2 bg-indigo-500 rounded-full blur-sm"
                    />
                ))}
            </div>

            {/* 404 Content */}
            <div className="relative z-10 text-center px-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <h1 className="text-[10rem] md:text-[14rem] font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl leading-[0.8] select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] -z-10 rounded-full animate-pulse" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold font-display mb-6"
                >
                    <span className="text-white">System</span> <span className="text-indigo-400">Malfunction</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-400 max-w-md mx-auto mb-10 text-lg font-medium"
                >
                    The coordinates you are looking for have been lost in the digital void.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <Link
                        href="/"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 glass border-white/5 text-slate-300 hover:text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/5 active:scale-95"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>
            </div>

            {/* Footer decoration */}
            <div className="absolute bottom-10 left-0 right-0 text-center">
                <p className="text-slate-600 font-mono text-xs uppercase tracking-[0.3em]">Error Code: 404_NOT_FOUND</p>
            </div>
        </div>
    );
}
