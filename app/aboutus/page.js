import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CertificationStrip from "@/components/Sections/Home/CertificationStrip";

/* ─────────────────────────── Animated Icons ─────────────────────────── */

function AnimatedVisionIcon() {
    return (
        <div className="relative w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span className="absolute inset-0 rounded-2xl bg-amber-500/20 animate-ping opacity-20" />
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-amber-500" aria-hidden="true">
                <path d="M6 24C10.5 14 17 9 24 9C31 9 37.5 14 42 24C37.5 34 31 39 24 39C17 39 10.5 34 6 24Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" className="animate-[spin_12s_linear_infinite]" strokeDasharray="4 2" />
                <circle cx="24" cy="24" r="3.5" fill="currentColor" className="animate-pulse" />
                <circle cx="26" cy="22" r="1" fill="#ffffff" />
            </svg>
        </div>
    );
}

function AnimatedMissionIcon() {
    return (
        <div className="relative w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span className="absolute inset-0 rounded-2xl bg-amber-500/20 animate-ping opacity-20 [animation-delay:1s]" />
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-amber-500" aria-hidden="true">
                <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" className="animate-[spin_16s_linear_infinite] origin-center" />
                <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="24" cy="24" r="5" fill="currentColor" />
                <path d="M24 7V13 M24 35V41 M7 24H13 M35 24H41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function AnimatedShieldIcon() {
    return (
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <svg className="w-7 h-7 animate-[bounce_3s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
            </svg>
        </div>
    );
}

function AnimatedGearIcon() {
    return (
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <svg className="w-7 h-7 animate-[spin_10s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        </div>
    );
}

function AnimatedAwardIcon() {
    return (
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <svg className="w-7 h-7 animate-[pulse_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.735.508l-4.257-2.5-4.257 2.5a.5.5 0 0 1-.735-.508l1.515-8.526" />
            </svg>
        </div>
    );
}

function AnimatedBoltIcon() {
    return (
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <svg className="w-7 h-7 animate-[bounce_2.5s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        </div>
    );
}

/* ─────────────────────────── Metadata ─────────────────────────── */

export const metadata = {
    title: "About Us | THUNDERNEX — Lightning Protection Solutions",
    description:
        "Learn about THUNDERNEX, a specialized lightning protection brand from RB Earthing Private Limited delivering high-performance, tested and reliable ESE lightning arrester and strike counter solutions.",
};

/* ─────────────────────────── Page ─────────────────────────── */

export default function AboutUsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">

                {/* ══════════════════════════════════════════════
                    1. PAGE HEADER — dark navy + breadcrumb
                ══════════════════════════════════════════════ */}
                <section className="relative w-full bg-[#051326] pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">

                    {/* Subtle diagonal grid overlay */}

                    {/* Amber glow blobs */}

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Breadcrumb */}
                        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-5 uppercase tracking-widest font-medium">
                            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                            <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                            <span className="text-amber-400">About Us</span>
                        </nav>

                        {/* Heading */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[3px] bg-amber-500 rounded-full" />
                            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">Our Story</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl">
                            Powering a Safer Tomorrow<br className="hidden sm:block" />
                            <span className="text-amber-400"> Through Engineering Excellence</span>
                        </h1>
                        <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            THUNDERNEX is a premium lightning protection brand by RB Earthing Private Limited — offering advanced,
                            tested and reliable lightning arresters and monitoring solutions for industrial, commercial and
                            critical infrastructure applications.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    2. STATS BANNER — amber accent strip
                ══════════════════════════════════════════════ */}


                {/* ══════════════════════════════════════════════
                    3. BRAND STORY + VISION / MISSION
                ══════════════════════════════════════════════ */}
                <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            {/* Left — brand copy */}
                            <div className="lg:col-span-7 flex flex-col">
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-amber-500 uppercase">
                                    <span className="w-6 h-[2px] bg-amber-500 rounded-full" />
                                    <span>About THUNDERNEX</span>
                                </div>

                                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0a192f] leading-snug">
                                    A Trusted Brand by<br />
                                    <span className="text-amber-500">RB Earthing Private Limited</span>
                                </h2>

                                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                                    THUNDERNEX is a specialised lightning protection brand built on decades of electrical engineering
                                    expertise. Founded under RB Earthing Private Limited, we are committed to designing, manufacturing
                                    and delivering world-class solutions that safeguard human life and critical infrastructure from
                                    the destructive power of lightning.
                                </p>
                                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Our products — from Early Streamer Emission (ESE) lightning arresters to precision digital strike
                                    counters — are engineered for durability, compliance and wide-area protection. Every unit undergoes
                                    rigorous testing at accredited laboratories, meeting national and international standards including
                                    CPRI, ISO, NABL, CE and RoHS.
                                </p>

                                {/* Logo badge */}
                                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-5 max-w-xl group hover:shadow-md transition-shadow">
                                    <div className="relative w-40 h-16 flex-shrink-0 bg-white rounded-xl border border-slate-100 shadow-sm p-2">
                                        <Image
                                            src="/Images/logo-trimmed.png"
                                            alt="Official THUNDERNEX Trademark"
                                            fill
                                            unoptimized
                                            priority
                                            className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                                            sizes="160px"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <span className="text-xs uppercase tracking-widest font-extrabold text-amber-500">
                                            Official Trademark
                                        </span>
                                        <p className="text-sm font-bold text-[#0a192f] mt-0.5">Engineered Lightning Safety Systems</p>
                                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                                            Tested to CPRI, ISO, NABL, CE &amp; RoHS compliance standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right — Vision & Mission cards */}
                            <div className="lg:col-span-5 flex flex-col gap-5">

                                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-y-1">
                                    <AnimatedVisionIcon />
                                    <div>
                                        <h3 className="text-lg font-black text-[#0a192f] tracking-tight">Our Vision</h3>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            To be the most trusted and innovative provider of lightning protection solutions
                                            across industrial, commercial, and critical infrastructure sectors globally.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-y-1">
                                    <AnimatedMissionIcon />
                                    <div>
                                        <h3 className="text-lg font-black text-[#0a192f] tracking-tight">Our Mission</h3>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            To deliver reliable, fully compliant and innovative lightning protection and monitoring
                                            products that enhance electrical safety and protect what matters most.
                                        </p>
                                    </div>
                                </div>

                                {/* Compliance badges */}
                                <div className="mt-1 flex flex-wrap gap-2">
                                    {["CPRI Tested", "ISO Certified", "NABL Accredited", "CE Marked", "RoHS Compliant"].map((badge) => (
                                        <span
                                            key={badge}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    4. CORE VALUES — 4-card grid
                ══════════════════════════════════════════════ */}
                <section className="relative w-full bg-[#f8f9fb] py-16 sm:py-20 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">
                                <span className="w-6 h-[2px] bg-amber-500 rounded-full" />
                                <span>Why THUNDERNEX</span>
                                <span className="w-6 h-[2px] bg-amber-500 rounded-full" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                                Built on Trust, Safety &amp; Engineering
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
                                Four core pillars that define every product we build and every promise we keep.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    Icon: AnimatedShieldIcon,
                                    title: "Safety First",
                                    desc: "Protecting human life, high-value assets and critical infrastructure from catastrophic lightning strikes.",
                                },
                                {
                                    Icon: AnimatedGearIcon,
                                    title: "Engineering Excellence",
                                    desc: "Advanced Early Streamer Emission technology designed for broad-area, multi-strike resilience.",
                                },
                                {
                                    Icon: AnimatedAwardIcon,
                                    title: "Lab-Certified Quality",
                                    desc: "Rigorously tested at CPRI and compliant with ISO, NABL, CE and RoHS international standards.",
                                },
                                {
                                    Icon: AnimatedBoltIcon,
                                    title: "End-to-End Support",
                                    desc: "From site assessment and design calculation to installation, monitoring and after-sales service.",
                                },
                            ].map(({ Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-5"
                                >
                                    <Icon />
                                    <div>
                                        <h3 className="text-base font-bold text-[#0a192f]">{title}</h3>
                                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    5. INDUSTRIES SERVED — icon grid
                ══════════════════════════════════════════════ */}


                {/* ══════════════════════════════════════════════
                    6. CERTIFICATION MARQUEE
                ══════════════════════════════════════════════ */}
                <CertificationStrip />

                {/* ══════════════════════════════════════════════
                    7. CTA — dark navy
                ══════════════════════════════════════════════ */}
                <section className="relative w-full bg-[#051326] py-16 sm:py-20 text-center text-white overflow-hidden">
                    {/* Decorative amber glow */}
                    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
                    </div>
                    {/* Grid pattern */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "repeating-linear-gradient(0deg,#f59e0b 0,#f59e0b 1px,transparent 0,transparent 48px),repeating-linear-gradient(90deg,#f59e0b 0,#f59e0b 1px,transparent 0,transparent 48px)",
                        }}
                    />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-4">
                            <span className="w-5 h-[2px] bg-amber-400 rounded-full" />
                            <span>Get In Touch</span>
                            <span className="w-5 h-[2px] bg-amber-400 rounded-full" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                            Ready to Protect Your Infrastructure?
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                            Connect with our lightning protection specialists for a custom engineering consultation,
                            site assessment or product quotation tailored to your requirements.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/contactus"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
                            >
                                Request a Quote
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/12 hover:border-white/50 hover:-translate-y-0.5"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
