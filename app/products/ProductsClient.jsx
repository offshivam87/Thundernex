"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { PRODUCTS, resolveProductSlug } from "@/lib/products";

/* ─────────────────────────── Small Icons ─────────────────────────── */

function IconCheck() {
    return (
        <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

/* ─────────────────────────── Products Client Component ─────────────────────────── */

export default function ProductsClient({ initialSlug }) {
    const params = useParams();
    const searchParams = useSearchParams();

    // Determine target product from initialSlug, dynamic route params, or searchParams
    const rawParamSlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    const querySlug = searchParams?.get("product") || searchParams?.get("id") || searchParams?.get("slug");
    const activeRouteSlug = initialSlug || rawParamSlug || querySlug;
    const routeResolvedId = resolveProductSlug(activeRouteSlug);

    const [userSelectedId, setUserSelectedId] = useState(null);

    // Active product derives directly from user interaction or route params
    const activeId = userSelectedId || routeResolvedId || PRODUCTS[0].id;
    const product = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];

    // Listen to browser navigation events (back/forward button or hash changes)
    useEffect(() => {
        const handleNavChange = () => {
            if (typeof window !== "undefined") {
                if (window.location.hash) {
                    const hash = window.location.hash.replace("#", "");
                    const resolvedHash = resolveProductSlug(hash);
                    if (resolvedHash) {
                        setUserSelectedId(resolvedHash);
                        return;
                    }
                }
                const pathParts = window.location.pathname.split("/").filter(Boolean);
                if (pathParts[0] === "products" && pathParts[1]) {
                    const resolvedPath = resolveProductSlug(pathParts[1]);
                    if (resolvedPath) {
                        setUserSelectedId(resolvedPath);
                    }
                }
            }
        };

        window.addEventListener("popstate", handleNavChange);
        window.addEventListener("hashchange", handleNavChange);
        return () => {
            window.removeEventListener("popstate", handleNavChange);
            window.removeEventListener("hashchange", handleNavChange);
        };
    }, []);

    const handleSelectProduct = (id) => {
        setUserSelectedId(id);
        if (typeof window !== "undefined") {
            window.history.replaceState(null, "", `/products/${id}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white w-full max-w-full overflow-x-hidden">
            <main className="flex-grow w-full max-w-full overflow-x-hidden">

                {/* ══════════════════════════════════════
                    PAGE HEADER
                ══════════════════════════════════════ */}
                <section className="relative w-full bg-[#051326] pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{ backgroundImage: "repeating-linear-gradient(45deg,#f59e0b 0,#f59e0b 1px,transparent 0,transparent 50%)", backgroundSize: "32px 32px" }}
                    />
                    <div aria-hidden="true" className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-5 uppercase tracking-widest font-medium">
                            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                            <svg className="w-3 h-3 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                            </svg>
                            <Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link>
                            <svg className="w-3 h-3 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                            </svg>
                            <span className="text-amber-400 truncate max-w-[200px] sm:max-w-none">{product.shortName}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[3px] bg-amber-500 rounded-full" />
                            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">Our Products</span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl">
                            Lightning Protection<br className="hidden sm:block" />
                            <span className="text-amber-400"> Products &amp; Solutions</span>
                        </h1>
                        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                            Engineered to protect people, assets and infrastructure from the destructive power of lightning.
                            Independently tested and internationally certified.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                    SIDEBAR + DETAIL LAYOUT
                ══════════════════════════════════════ */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full max-w-full">

                        {/* ── LEFT SIDEBAR ── */}
                        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24">
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
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
                                                    onClick={() => handleSelectProduct(p.id)}
                                                    className={`w-full text-left flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-200 group cursor-pointer
                                                        ${isActive
                                                            ? "bg-amber-50 border-l-4 border-amber-500"
                                                            : "border-l-4 border-transparent hover:bg-slate-50 hover:border-slate-200"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors ${isActive ? "bg-amber-500" : "bg-slate-300 group-hover:bg-amber-300"}`} />
                                                        <div className="min-w-0 flex-1">
                                                            <p className={`text-xs sm:text-sm font-semibold truncate leading-snug ${isActive ? "text-amber-700" : "text-slate-700"}`}>
                                                                {p.name}
                                                            </p>
                                                            <p className="text-[11px] text-slate-400 truncate mt-0.5">{p.tagline}</p>
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
                                <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50">
                                    <p className="text-xs text-slate-500 mb-2.5 leading-snug">
                                        Need a custom solution or bulk pricing?
                                    </p>
                                    <Link
                                        href="/contactus"
                                        className="block text-center rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-gray-900 hover:bg-amber-400 transition-colors"
                                    >
                                        Request a Quote →
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* ── RIGHT DETAIL PANEL ── */}
                        <div key={product.id} className="flex-1 min-w-0 w-full max-w-full flex flex-col gap-6">

                            {/* 1. Hero card — image + headline */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center min-h-[260px] sm:min-h-[300px] p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-200">
                                        <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${product.badgeColor}`}>
                                            {product.badge}
                                        </span>
                                        <div className="relative w-full h-56 sm:h-72">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                unoptimized
                                                className="object-contain drop-shadow-xl"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 sm:p-7 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 uppercase mb-2">
                                            <span className="w-5 h-[2px] bg-amber-500 rounded-full" />
                                            <span>THUNDERNEX</span>
                                        </div>
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0a192f] tracking-tight leading-snug">
                                            {product.name}
                                        </h2>
                                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-amber-600 leading-normal">
                                            {product.tagline}
                                        </p>

                                        {/* Certification badges */}
                                        <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                                            {product.certifications.map((c) => (
                                                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                    {c}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons */}
                                        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                            <Link
                                                href="/contactus"
                                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-amber-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200"
                                            >
                                                <span>Request Enquiry</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                            <Link
                                                href="/contactus"
                                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:-translate-y-0.5 text-center"
                                            >
                                                Download Datasheet
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Product Overview */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-7 w-full overflow-hidden">
                                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] mb-3 sm:mb-4 flex items-center gap-2.5">
                                    <span className="w-1 h-5 sm:h-6 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>Product Overview</span>
                                </h3>
                                <div className="space-y-3 pl-1 sm:pl-3">
                                    {product.description.map((para, i) => (
                                        <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Key Features */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-7 w-full overflow-hidden">
                                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] mb-4 sm:mb-5 flex items-center gap-2.5">
                                    <span className="w-1 h-5 sm:h-6 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>Key Features</span>
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3 pl-1 sm:pl-3">
                                    {product.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                            <IconCheck />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Typical Applications */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-7 w-full overflow-hidden">
                                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] mb-3 sm:mb-4 flex items-center gap-2.5">
                                    <span className="w-1 h-5 sm:h-6 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>Typical Applications</span>
                                </h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3 pl-1 sm:pl-3">
                                    {product.applications.map((app) => (
                                        <span
                                            key={app}
                                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Bottom CTA */}
                            <div className="rounded-2xl bg-[#051326] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 w-full">
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base">
                                        Interested in the {product.shortName}?
                                    </p>
                                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                                        Contact our team for pricing, datasheets and installation guidance.
                                    </p>
                                </div>
                                <Link
                                    href="/contactus"
                                    className="w-full sm:w-auto text-center flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-gray-900 hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/25"
                                >
                                    <span>Get in Touch</span>
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
