"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const productsData = [

    {
        id: "digital-lightning-strike-counter",
        title: "Digital Lightning Strike Counter",
        description:
            "Reliable strike counting with a high-visibility digital display.",
        image: "/Images/DIGITAL LIGHTNING STRIKE COUNTER.png",
        imageAlt: "THUNDERNEX Digital Lightning Strike Counter",
        features: [
            "Accurate Strike Detection",
            "6-Digit Digital Display",
            "Rugged & Weatherproof Enclosure",
        ],
        detailsLink: "/products/digital-strike-counter",
        enquiryLink: "/contactus",
    },
    {
        id: "safe-guard-ese-lightning-arrester",
        title: "Safe-Guard ESE Lightning Arrester",
        description:
            "Advanced ESE lightning arrester wide-area structural protection.",
        image: "/Images/safeguard-ese.png",
        imageAlt: "THUNDERNEX Safe-Guard ESE Lightning Arrester",
        features: [
            "Early Streamer Emission (ESE) Technology",
            "CPRI Tested & CE Compliant",
            "Larger Protection Radius",
            "Robust & Corrosion-Resistant Design",
        ],
        detailsLink: "/products/safeguard-ese-arrester",
        enquiryLink: "/contactus",
    },
    {
        id: "datetime-lightning-strike-counter",
        title: "Date & Time Lightning Strike Counter",
        description:
            "Advanced monitoring with real-time date, time and strike count.",
        image: "/Images/DATE & TIME LIGHTNING STRIKE COUNTER.png",
        imageAlt: "THUNDERNEX Date and Time Lightning Strike Counter",
        features: [
            "Date & Time Logging",
            "Non-Volatile Data Storage",
            "Accurate & Tamper-Resistant",
        ],
        detailsLink: "/products/datetime-strike-counter",
        enquiryLink: "/contactus",
    },
];

export default function Products() {
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
                threshold: 0.12,
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
            className="relative w-full bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with in-view cascade */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    {/* Tagline */}
                    <div
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase mb-3 transition-all duration-700 ease-out delay-150 will-change-transform ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                            }`}
                    >
                        <span className="w-5 h-[2px] bg-amber-500 inline-block rounded-full animate-pulse" />
                        <span>OUR PRODUCTS</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0a192f] leading-tight transition-all duration-700 ease-out delay-300 will-change-transform ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                            }`}
                    >
                        Explore Our{" "}

                        Lightning Protection

                        Products
                    </h2>

                    {/* Subtitle */}
                    <p
                        className={`mt-3 text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-700 ease-out delay-450 will-change-transform ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                            }`}
                    >
                        Reliable products engineered to support modern lightning protection
                        and monitoring systems.
                    </p>
                </div>

                {/* Products Grid with staggered in-view entrance */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {productsData.map((product, index) => {
                        const delays = ["delay-[550ms]", "delay-[700ms]", "delay-[850ms]"];
                        return (
                            <div
                                key={product.id}
                                className={`bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-800 ease-out flex flex-col justify-between group hover:-translate-y-1.5 will-change-transform ${delays[index] || "delay-500"
                                    } ${isVisible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-12 scale-[0.97]"
                                    }`}
                            >
                                <div>
                                    {/* Product Image Area with smooth zoom effect */}
                                    <div className="relative h-48 sm:h-56 w-full flex items-center justify-center p-4 bg-slate-50/80 rounded-2xl mb-6 overflow-hidden border border-slate-100">
                                        <Image
                                            src={product.image}
                                            alt={product.imageAlt}
                                            fill
                                            unoptimized
                                            className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Product Title */}
                                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0a192f] tracking-tight leading-snug transition-colors duration-200 group-hover:text-amber-600">
                                        {product.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                                        {product.description}
                                    </p>

                                    {/* Feature Checklist */}
                                    <ul className="mt-5 space-y-2.5 pt-1">
                                        {product.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-amber-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons with hover transitions */}
                                <div className="mt-7 sm:mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                                    {/* View Details Button */}
                                    <Link
                                        href={product.detailsLink}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:border-amber-400 hover:text-amber-600 hover:scale-105 active:scale-95 group/btn shadow-sm"
                                    >
                                        <span>View Details</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>

                                    {/* Request Enquiry Button with hover sheen */}
                                    <Link
                                        href={product.enquiryLink}
                                        className="group/enq relative flex-1 inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold text-[#051326] transition-all duration-300 hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md hover:shadow-amber-500/25"
                                    >
                                        {/* Light sweep shimmer on hover */}
                                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/enq:translate-x-full" />
                                        <span className="relative">Request Enquiry</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom View All CTA with in-view entrance */}
                <div
                    className={`mt-12 sm:mt-14 flex items-center justify-center transition-all duration-700 ease-out delay-[950ms] will-change-transform ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                        }`}
                >
                    <Link
                        href="/products"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#051326] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md border border-[#051326] transition-all duration-300 hover:bg-[#0c2340] hover:scale-105 hover:shadow-xl hover:shadow-[#051326]/20 active:scale-95"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                        <span className="relative">Explore All Products</span>
                        <svg
                            className="relative w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1.5"
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
        </section>
    );
}
