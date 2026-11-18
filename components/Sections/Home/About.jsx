"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Engineered Solutions Icon (Hexagon / Atom node cluster)
function EngineeredIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="8" r="2" />
            <circle cx="5" cy="8" r="2" />
            <circle cx="19" cy="16" r="2" />
            <circle cx="5" cy="16" r="2" />
            <path d="M12 9V5 M12 15v4 M9.5 10.5 6.5 9 M14.5 10.5l3-1.5 M9.5 13.5l-3 1.5 M14.5 13.5l3 1.5" />
        </svg>
    );
}

// 2. Tested & Compliant Icon (Shield with verified checkmark)
function TestedIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

// 3. Reliable Performance Icon (Circle badge with checkmark)
function ReliableIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

const features = [
    {
        id: "engineered",
        line1: "Engineered",
        line2: "Solutions",
        Icon: EngineeredIcon,
        iconAnim: "group-hover/feat:rotate-180",
    },
    {
        id: "tested",
        line1: "Tested",
        line2: "& Compliant",
        Icon: TestedIcon,
        iconAnim: "group-hover/feat:scale-110",
    },
    {
        id: "reliable",
        line1: "Reliable",
        line2: "Performance",
        Icon: ReliableIcon,
        iconAnim: "group-hover/feat:-rotate-12 group-hover/feat:scale-110",
    },
];

export default function About({
    imageSrc = "/Images/ese.png",
    productBadgeSrc = "/Images/esearrester.jpeg",
}) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white py-14 sm:py-18 lg:py-24 overflow-hidden border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">

                    {/* Left Column: Visual Showcase Image with in-view entrance animation */}
                    <div
                        className={`lg:col-span-6 relative transition-all duration-1000 ease-out will-change-transform ${isVisible
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 -translate-x-8 sm:-translate-x-12 scale-95"
                            }`}
                    >
                        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-slate-100 group">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full bg-slate-100">
                                <Image
                                    src={imageSrc}
                                    alt="THUNDERNEX Facility - A Brand of RB Earthing Private Limited"
                                    fill
                                    priority
                                    unoptimized
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Floating ESE Lightning Arrester Product Badge with pop-in animation */}
                            {productBadgeSrc && (
                                <div
                                    className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg border border-slate-100/90 flex items-center gap-2.5 max-w-[200px] sm:max-w-[220px] transition-all duration-700 ease-out delay-500 hover:scale-105 hover:shadow-xl ${isVisible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-6 scale-90"
                                        }`}
                                >
                                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                                    </span>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                                            ESE Arrester
                                        </span>
                                        <span className="text-[9px] sm:text-[10px] text-amber-600 font-semibold leading-tight mt-0.5">
                                            Early Streamer Tech
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: About Content with staggered in-view entrance animations */}
                    <div className="lg:col-span-6 flex flex-col text-left">
                        {/* Tagline / Category indicator with pulsing dash */}
                        <div
                            className={`flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase transition-all duration-700 ease-out delay-150 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            <span className="w-5 h-[2px] bg-amber-500 inline-block rounded-full animate-pulse" />
                            <span>ABOUT THUNDERNEX</span>
                        </div>

                        {/* Main Headline with gradient accent */}
                        <h2
                            className={`mt-3.5 text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-black tracking-tight text-[#0a192f] leading-[1.2] transition-all duration-700 ease-out delay-300 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            Powering a Safer Tomorrow Through{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent font-black inline-block">
                                Engineering Excellence.
                            </span>
                        </h2>

                        {/* Subtitle Description */}
                        <p
                            className={`mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal transition-all duration-700 ease-out delay-450 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            Backed by the vision of RB Earthing Private Limited, THUNDERNEX™ emphasizes product reliability, quality-conscious manufacturing, and application-specific technical requirements. We believe that effective lightning protection depends on suitable product selection, proper installation, and an appropriately designed earthing system.
                        </p>

                        {/* 3 Key Feature Pillars with staggered cascade and hover interactions */}
                        <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 pt-2">
                            {features.map((feature, index) => {
                                const IconComponent = feature.Icon;
                                const delays = ["delay-[550ms]", "delay-[650ms]", "delay-[750ms]"];
                                return (
                                    <div
                                        key={feature.id}
                                        className={`group/feat flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2 rounded-xl transition-all duration-700 ease-out ${delays[index] || "delay-500"} hover:bg-amber-50/60 cursor-default will-change-transform ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-6"
                                            }`}
                                    >
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-500 transition-all duration-300 group-hover/feat:bg-amber-500 group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:shadow-md group-hover/feat:shadow-amber-500/25">
                                            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 ${feature.iconAnim}`} />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-xs sm:text-sm font-bold text-[#0f172a] transition-colors duration-200 group-hover/feat:text-amber-700">
                                                {feature.line1}
                                            </span>
                                            <span className="text-xs sm:text-sm font-bold text-[#0f172a] transition-colors duration-200 group-hover/feat:text-amber-700">
                                                {feature.line2}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button with slide-up entrance and hover sheen */}
                        <div
                            className={`mt-8 sm:mt-10 transition-all duration-700 ease-out delay-[850ms] will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            <Link
                                href="/products/ese-lightning-arrester"
                                className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#051326] px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-md border border-[#051326] transition-all duration-300 hover:bg-[#0c2340] hover:scale-105 hover:shadow-xl hover:shadow-[#051326]/20 active:scale-95 w-fit"
                            >
                                {/* Light sweep shimmer on hover */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />

                                <span className="relative">View More</span>
                                <svg
                                    className="relative w-4 h-4 text-amber-400 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
