
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to send message");

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
            {/* Dynamic Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
                {/* Header */}
                <header className="flex justify-between items-center mb-16 md:mb-24">
                    <Link href="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">Back to Home</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 relative rounded-lg overflow-hidden shadow-lg shadow-indigo-600/20">
                            <Image
                                src="/logo.png"
                                alt="AppsLabs Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-lg font-bold font-display tracking-tight liquid-text">AppsLabs.store</span>
                    </Link>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black font-display mb-8 tracking-tight leading-tight">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Something Epic.</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
                            Have a visionary idea? We have the engineering prowess to bring it to life. Tell us about your project.
                        </p>

                        <div className="space-y-8">
                            {[
                                { label: "Email", value: "hello@appslabs.store", href: "mailto:hello@appslabs.store" },
                                { label: "Studio", value: "Global Virtual HQ", href: "#" },
                                { label: "Socials", value: "@appslabs", href: "#" }
                            ].map((item, i) => (
                                <div key={item.label} className="border-l-2 border-white/10 pl-6 py-1">
                                    <span className="block text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">{item.label}</span>
                                    <a href={item.href} className="text-lg font-medium hover:text-indigo-300 transition-colors">{item.value}</a>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-[2.5rem] -z-10 blur-xl" />

                        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={(e: any) => handleChange(e)} // Type cast needed for select
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-300 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select a topic...</option>
                                        <option value="Project Inquiry">Project Inquiry</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Support">Support</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white rounded-2xl font-bold shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 transition-all group mt-4 relative overflow-hidden cursor-pointer"
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : status === "success" ? (
                                        <>
                                            <span>Message Sent!</span>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errorMessage || "Something went wrong. Please try again."}
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
