"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─────────────────────────── Product Data ─────────────────────────── */

const PRODUCTS = [
    {
        id: "ese-lightning-arrester",
        name: "ESE Lightning Arrester",
        shortName: "ESE Arrester",
        image: "/Images/esearrester.jpeg",
        badgeColor: "bg-amber-500 text-gray-900",
        description: [
            "The THUNDERNEX ESE (Early Streamer Emission) Lightning Arrester is an advanced active lightning protection device engineered to intercept and safely discharge lightning energy before it strikes the protected area. Using patented ESE technology, the arrester emits an upward leader earlier than conventional rods, extending its protection radius significantly.",
            "Manufactured from high-grade stainless steel and aluminium alloys, the THUNDERNEX ESE Arrester delivers exceptional corrosion resistance in coastal, industrial, and high-humidity environments. Its precision-engineered ionisation chamber ensures consistent early streamer generation across all atmospheric conditions.",
            "Fully compliant with NFC 17-102, UNE 21.186, and IS/IEC 62561 standards and independently tested at CPRI, it is the preferred choice for protecting industrial plants, telecom towers, data centres, hospitals, airports, and commercial high-rises.",
        ],
        features: [
            "Early Streamer Emission Technology — triggers upward leader up to 60 µs ahead of conventional rods",
            "Extended Protection Radius — covers up to 107 m at RP level 1 (per NFC 17-102)",
            "Maintenance-Free Passive Operation — no external power source required",
            "Corrosion-Resistant Marine-Grade Stainless Steel Body",
            "Surge withstand: 100 kA (10/350 µs waveform)",
            "Suitable for structures up to 60 m height",
            "Compatible with all soil resistivities with appropriate earthing system",
        ],
        specs: [
            { param: "Protection Standard", value: "NFC 17-102 / UNE 21.186 / IS/IEC 62561" },
            { param: "Advance Time (ΔT)", value: "60 µs" },
            { param: "Protection Level", value: "RP I – IV" },
            { param: "Protection Radius", value: "Up to 107 m (at 45 m height, RP I)" },
            { param: "Peak Impulse Current", value: "100 kA (10/350 µs)" },
            { param: "Material", value: "316L Stainless Steel / Aluminium Alloy" },
            { param: "Weight", value: "Approx. 2.8 kg" },
            { param: "Operating Temperature", value: "-40 °C to +85 °C" },
            { param: "Relative Humidity", value: "Up to 95% (non-condensing)" },
            { param: "IP Rating", value: "IP 67" },
            { param: "Certifications", value: "CPRI Tested, ISO, NABL, CE, RoHS" },
            { param: "Mast Diameter Compatibility", value: "30 – 60 mm" },
        ],
        certifications: ["CPRI Tested", "ISO Certified", "NABL Accredited", "CE Marked", "RoHS Compliant"],
        applications: ["Industrial Plants", "Telecom Towers", "Data Centres", "Airports", "Hospitals", "Commercial Buildings"],
    },
    {
        id: "digital-strike-counter",
        name: "Digital Lightning Strike Counter",
        shortName: "Digital Counter",
        image: "/Images/DIGITAL LIGHTNING STRIKE COUNTER.jpeg",
        badgeColor: "bg-blue-600 text-white",
        description: [
            "The THUNDERNEX Digital Lightning Strike Counter is a precision electronic instrument designed to record and display the cumulative number of lightning strikes intercepted by the lightning protection system. Each strike event is accurately detected and permanently logged in a tamper-resistant non-volatile memory.",
            "The large 6-digit LED display provides instant, clear readout even under bright outdoor lighting conditions. The ruggedised weatherproof enclosure is built to withstand the harshest industrial environments — from tropical monsoon conditions to extreme temperature swings.",
            "Essential for maintenance engineers and facility managers, the counter provides verifiable data to assess lightning activity levels, validate protection system performance, and schedule preventive maintenance at appropriate intervals.",
        ],
        features: [
            "6-Digit High-Brightness LED Display for clear outdoor visibility",
            "Non-Volatile Memory — count retained during power interruptions",
            "Tamper-Proof & Vandal-Resistant Enclosure (IP65)",
            "Accurate Impulse Detection: responds to 8/20 µs and 10/350 µs waveforms",
            "No External Power Required — self-powered by lightning impulse energy",
            "Reset-Protected Counter — requires authorised access to reset",
            "Wide operating temperature range for all climatic zones",
        ],
        specs: [
            { param: "Display Type", value: "6-Digit LED (high-brightness)" },
            { param: "Count Range", value: "000000 – 999999" },
            { param: "Memory Type", value: "Non-volatile (EEPROM)" },
            { param: "Trigger Waveform", value: "8/20 µs and 10/350 µs" },
            { param: "Minimum Trigger Current", value: "1 kA" },
            { param: "Maximum Current (single event)", value: "100 kA" },
            { param: "Power Supply", value: "Self-powered (impulse energy harvesting)" },
            { param: "Enclosure Material", value: "High-impact ABS / Polycarbonate" },
            { param: "IP Rating", value: "IP 65" },
            { param: "Operating Temperature", value: "-30 °C to +70 °C" },
            { param: "Mounting", value: "Wall / pole mount (hardware included)" },
            { param: "Certifications", value: "CPRI Tested, CE, RoHS" },
        ],
        certifications: ["CPRI Tested", "CE Marked", "RoHS Compliant"],
        applications: ["Industrial Plants", "Telecom Towers", "Substations", "Commercial Buildings", "Renewable Energy Sites"],
    },
    {
        id: "datetime-strike-counter",
        name: "Date & Time Strike Counter",
        shortName: "Date & Time Counter",
        image: "/Images/DATE & TIME LIGHTNING STRIKE COUNTER.jpeg",
        badgeColor: "bg-emerald-600 text-white",
        description: [
            "The THUNDERNEX Date & Time Lightning Strike Counter is an advanced monitoring instrument that not only counts lightning strikes but also records the precise date and time of each strike event. This timestamped data provides invaluable insights for lightning risk analysis, insurance documentation, and infrastructure maintenance planning.",
            "Equipped with a high-accuracy real-time clock (RTC) module with battery backup, the unit maintains correct time even during prolonged power outages. All logged events are stored in non-volatile memory, ensuring data integrity in the most challenging operating conditions.",
            "Ideal for critical infrastructure facilities where event traceability is mandatory — such as power substations, oil & gas installations, data centres, and defence installations — this counter bridges the gap between basic strike counting and professional lightning event recording systems.",
        ],
        features: [
            "Displays Current Date, Time, and Cumulative Strike Count",
            "Real-Time Clock (RTC) with Battery Backup — maintains accurate time during power failure",
            "Non-Volatile Event Memory — stores timestamp of each strike event",
            "Large LCD/LED Display with backlight for indoor and outdoor readability",
            "Tamper-resistant IP65 weatherproof enclosure",
            "Compatible with all THUNDERNEX ESE lightning arresters",
            "Suitable for standalone or networked monitoring configurations",
        ],
        specs: [
            { param: "Display Type", value: "LCD with backlight / LED (model dependent)" },
            { param: "Information Displayed", value: "Strike count, date (DD/MM/YY), time (HH:MM:SS)" },
            { param: "Real-Time Clock Accuracy", value: "± 1 minute / month" },
            { param: "RTC Battery Backup", value: "CR2032 lithium (up to 5 years)" },
            { param: "Memory Capacity", value: "Up to 9,999 event logs (timestamp + count)" },
            { param: "Trigger Waveform", value: "8/20 µs and 10/350 µs" },
            { param: "Minimum Trigger Current", value: "1 kA" },
            { param: "Maximum Current (single event)", value: "100 kA" },
            { param: "Power Supply", value: "Self-powered + RTC battery backup" },
            { param: "Enclosure Material", value: "High-impact ABS / Polycarbonate" },
            { param: "IP Rating", value: "IP 65" },
            { param: "Operating Temperature", value: "-30 °C to +70 °C" },
            { param: "Certifications", value: "CPRI Tested, CE, RoHS" },
        ],
        certifications: ["CPRI Tested", "CE Marked", "RoHS Compliant"],
        applications: ["Power Substations", "Oil & Gas Installations", "Data Centres", "Defence", "Airports", "Critical Infrastructure"],
    },
];

/* ─────────────────────────── Small Icons ─────────────────────────── */

function IconCheck() {
    return (
        <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function ProductsPage() {
    const [activeId, setActiveId] = useState(PRODUCTS[0].id);
    const product = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">

                {/* ══════════════════════════════════════
                    PAGE HEADER
                ══════════════════════════════════════ */}
                <section className="relative w-full bg-[#051326] pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: "repeating-linear-gradient(45deg,#f59e0b 0,#f59e0b 1px,transparent 0,transparent 50%)", backgroundSize: "32px 32px" }}
                    />
                    <div aria-hidden="true" className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-5 uppercase tracking-widest font-medium">
                            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                            <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                            </svg>
                            <span className="text-amber-400">Products</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">

                            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">Our Products</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl">
                            Lightning Protection<br className="hidden sm:block" />
                            <span className="text-amber-400"> Products &amp; Solutions</span>
                        </h1>
                        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                            Engineered to protect people, assets and infrastructure from the destructive power of lightning.
                            Independently tested and internationally certified.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                    SIDEBAR + DETAIL LAYOUT
                ══════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                        {/* ── LEFT SIDEBAR ── */}
                        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24">
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                {/* Sidebar header */}
                                <div className="bg-[#051326] px-5 py-4">
                                    <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">Select Product</p>
                                </div>

                                {/* Product list */}
                                <ul className="divide-y divide-slate-100">
                                    {PRODUCTS.map((p) => {
                                        const isActive = p.id === activeId;
                                        return (
                                            <li key={p.id}>
                                                <button
                                                    onClick={() => setActiveId(p.id)}
                                                    className={`w-full text-left flex items-center justify-between gap-3 px-5 py-4 transition-all duration-200 group
                                                        ${isActive
                                                            ? "bg-amber-50 border-l-4 border-amber-500"
                                                            : "border-l-4 border-transparent hover:bg-slate-50 hover:border-slate-200"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors ${isActive ? "bg-amber-500" : "bg-slate-300 group-hover:bg-amber-300"}`} />
                                                        <div className="min-w-0">
                                                            <p className={`text-sm font-semibold truncate leading-snug ${isActive ? "text-amber-700" : "text-slate-700"}`}>
                                                                {p.name}
                                                            </p>
                                                            <p className="text-xs text-slate-400 truncate mt-0.5">{p.tagline}</p>
                                                        </div>
                                                    </div>
                                                    <svg
                                                        className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${isActive ? "text-amber-500 translate-x-0.5" : "text-slate-300"}`}
                                                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                                                    </svg>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Sidebar CTA */}
                                <div className="p-5 border-t border-slate-100 bg-slate-50">
                                    <p className="text-xs text-slate-500 mb-3 leading-snug">
                                        Need a custom solution or bulk pricing?
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="block text-center rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-gray-900 hover:bg-amber-400 transition-colors"
                                    >
                                        Request a Quote →
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* ── RIGHT DETAIL PANEL ── */}
                        <div key={product.id} className="flex-1 min-w-0 flex flex-col gap-6">

                            {/* 1. Hero card — image + headline */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center min-h-[260px] p-8 border-b md:border-b-0 md:border-r border-slate-200">
                                        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>
                                            {product.badge}
                                        </span>
                                        <div className="relative w-full h-56 sm:h-64">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                unoptimized
                                                className="object-contain drop-shadow-xl"
                                                sizes="(max-width: 768px) 90vw, 40vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-7 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 uppercase mb-3">
                                            <span className="w-5 h-[2px] bg-amber-500 rounded-full" />
                                            THUNDERNEX
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight leading-snug">
                                            {product.name}
                                        </h2>
                                        <p className="mt-2 text-sm font-semibold text-amber-600">{product.tagline}</p>

                                        {/* Certification badges */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {product.certifications.map((c) => (
                                                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                    {c}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons */}
                                        <div className="mt-7 flex flex-wrap gap-3">
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-amber-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200"
                                            >
                                                Request Enquiry
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
                                            >
                                                Download Datasheet
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Product Overview */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
                                <h3 className="text-lg font-bold text-[#0a192f] mb-4 flex items-center gap-3">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                    Product Overview
                                </h3>
                                <div className="space-y-3 pl-4">
                                    {product.description.map((para, i) => (
                                        <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Key Features */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
                                <h3 className="text-lg font-bold text-[#0a192f] mb-5 flex items-center gap-3">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pl-4">
                                    {product.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                            <IconCheck />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Specifications Table */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                <div className="px-7 py-5 border-b border-slate-100 flex items-center gap-3">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                    <h3 className="text-lg font-bold text-[#0a192f]">Technical Specifications</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm min-w-[480px]">
                                        <thead>
                                            <tr className="bg-slate-50 border-b border-slate-100">
                                                <th className="text-left px-7 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-5/12">
                                                    Parameter
                                                </th>
                                                <th className="text-left px-7 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                    Value / Specification
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {product.specs.map((row, i) => (
                                                <tr
                                                    key={i}
                                                    className={`transition-colors hover:bg-amber-50/40 ${i % 2 === 1 ? "bg-slate-50/50" : "bg-white"}`}
                                                >
                                                    <td className="px-7 py-3.5 font-semibold text-slate-700 align-top">{row.param}</td>
                                                    <td className="px-7 py-3.5 text-slate-600 align-top">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 5. Typical Applications */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
                                <h3 className="text-lg font-bold text-[#0a192f] mb-5 flex items-center gap-3">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                    Typical Applications
                                </h3>
                                <div className="flex flex-wrap gap-3 pl-4">
                                    {product.applications.map((app) => (
                                        <span
                                            key={app}
                                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 6. Bottom CTA */}
                            <div className="rounded-2xl bg-[#051326] p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                                <div>
                                    <p className="text-white font-bold text-base">
                                        Interested in the {product.shortName}?
                                    </p>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Contact our team for pricing, datasheets and installation guidance.
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-gray-900 hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/25"
                                >
                                    Get in Touch
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                        {/* END right panel */}

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

