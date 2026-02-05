"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FloatingParticles = () => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const generatedParticles = [...Array(15)].map((_, i) => ({
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
                opacity: [0.1, 0.2, 0.1],
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

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
            {/* Dynamic Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <FloatingParticles />
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 grid-bg opacity-40 bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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

                {/* Main Content */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-[2.5rem] -z-10 blur-xl" />

                        {/* Content Container */}
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16">
                            {/* Header Section */}
                            <div className="flex items-start gap-6 mb-12">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tight leading-tight">
                                        Privacy Policy
                                        <span className="text-indigo-500">.</span>
                                    </h1>
                                    <p className="text-slate-400 text-lg">
                                        Effective as of: <span className="text-white font-semibold">2026-02-05</span>
                                    </p>
                                </div>
                            </div>

                            {/* Introduction */}
                            <div className="space-y-6 mb-12 pb-12 border-b border-white/10">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    This privacy policy applies to the <span className="text-indigo-400 font-semibold">MintX</span> app (hereby referred to as "Application") for mobile devices that was created by <span className="text-white font-semibold">appslabs</span> (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
                                </p>
                            </div>

                            {/* Sections */}
                            <div className="space-y-12">
                                {/* Information Collection and Use */}
                                <section>
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">01.</span>
                                        Information Collection and Use
                                    </h2>
                                    <div className="space-y-6 ml-4 md:ml-8">
                                        <p className="text-slate-300 leading-relaxed">
                                            The Application collects information when you download and use it. This information may include information such as:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "Your device's Internet Protocol address (e.g. IP address)",
                                                "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
                                                "The time spent on the Application",
                                                "The operating system you use on your mobile device"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                                                    <span className="text-slate-300 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-slate-300 leading-relaxed">
                                            The Application does not gather precise information about the location of your mobile device.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                                        </p>
                                    </div>
                                </section>

                                {/* Third Party Access */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">02.</span>
                                        Third Party Access
                                    </h2>
                                    <div className="space-y-6 ml-4 md:ml-8">
                                        <p className="text-slate-300 leading-relaxed">
                                            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                { name: "Google Play Services", url: "https://policies.google.com/privacy" },
                                                { name: "AdMob", url: "https://support.google.com/admob/answer/6128543" },
                                                { name: "Google Analytics for Firebase", url: "https://firebase.google.com/support/privacy" },
                                                { name: "Firebase Crashlytics", url: "https://firebase.google.com/support/privacy" }
                                            ].map((service, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                                                    <a
                                                        href={service.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                                                    >
                                                        {service.name}
                                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-slate-300 leading-relaxed">
                                            The Service Provider may disclose User Provided and Automatically Collected Information:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "as required by law, such as to comply with a subpoena, or similar legal process;",
                                                "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;",
                                                "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement."
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                                                    <span className="text-slate-300 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* Opt-Out Rights */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">03.</span>
                                        Opt-Out Rights
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed ml-4 md:ml-8">
                                        You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                                    </p>
                                </section>

                                {/* Data Retention Policy */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">04.</span>
                                        Data Retention Policy
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed ml-4 md:ml-8">
                                        The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:appslabs@digitarmedia.com" className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">appslabs@digitarmedia.com</a> and they will respond in a reasonable time.
                                    </p>
                                </section>

                                {/* Children */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">05.</span>
                                        Children
                                    </h2>
                                    <div className="space-y-6 ml-4 md:ml-8">
                                        <p className="text-slate-300 leading-relaxed">
                                            The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:appslabs@digitarmedia.com" className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">appslabs@digitarmedia.com</a>) so that they will be able to take the necessary actions.
                                        </p>
                                    </div>
                                </section>

                                {/* Security */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">06.</span>
                                        Security
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed ml-4 md:ml-8">
                                        The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">07.</span>
                                        Changes
                                    </h2>
                                    <div className="space-y-6 ml-4 md:ml-8">
                                        <p className="text-slate-300 leading-relaxed">
                                            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            This privacy policy is effective as of <span className="text-white font-semibold">2026-02-05</span>
                                        </p>
                                    </div>
                                </section>

                                {/* Your Consent */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">08.</span>
                                        Your Consent
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed ml-4 md:ml-8">
                                        By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                                    </p>
                                </section>

                                {/* Contact Us */}
                                <section className="pt-8 border-t border-white/10">
                                    <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
                                        <span className="text-indigo-500">09.</span>
                                        Contact Us
                                    </h2>
                                    <div className="space-y-6 ml-4 md:ml-8">
                                        <p className="text-slate-300 leading-relaxed">
                                            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at:
                                        </p>
                                        <a
                                            href="mailto:appslabs@digitarmedia.com"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 group"
                                        >
                                            appslabs@digitarmedia.com
                                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </section>
                            </div>

                            {/* Footer */}
                            <div className="mt-16 pt-8 border-t border-white/10 text-center">
                                <p className="text-slate-500 text-sm">
                                    © 2026 MintX by AppsLabs. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
