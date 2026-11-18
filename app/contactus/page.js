import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: 'Contact Us | Thundernex - Lightning Protection Enquiries',
    description: 'Get in touch with Thundernex, a specialized brand of RB Earthing Private Limited, for ESE Lightning Arrester enquiries, technical documentation, and business opportunities.',
    keywords: 'Contact Thundernex, RB Earthing Private Limited, Lightning Protection Enquiries, ESE Lightning Arrester Support, info@thundernex.com',
    openGraph: {
        title: 'Contact Us | Thundernex - Lightning Protection Enquiries',
        description: 'Connect with our team for product enquiries, technical documentation, and business opportunities regarding ESE Lightning Arresters and protection systems.',
        url: 'https://www.thundernex.com/contactus',
        siteName: 'Thundernex',
        locale: 'en_US',
        type: 'website',
    },
}

/* ─────────────────────────── Contact Details ─────────────────────────── */

const CONTACT_INFO = [
    {
        label: "Phone",
        value: "+91 9140073153",
        subValue: "Mon – Sat, 9 AM – 6 PM IST",
        href: "tel:+919140073153",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        label: "Email",
        value: "info@thundernex.com",
        subValue: "We reply within 24 business hours",
        href: "mailto:info@thundernex.com",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    // {
    //     label: "Office Address",
    //     value: "RB Earthing Private Limited",
    //     subValue: "[Full Address], India",
    //     href: "https://maps.google.com",
    //     icon: (
    //         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //         </svg>
    //     ),
    // },
    // {
    //     label: "Support",
    //     value: "support@thundernex.com",
    //     subValue: "Technical & After-Sales Support",
    //     href: "mailto:support@thundernex.com",
    //     icon: (
    //         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    //         </svg>
    //     ),
    // },
];

const ENQUIRY_TYPES = [
    "Product Enquiry",
    "Request a Quote",
    "Technical Support",
    "Installation Guidance",
    "Bulk / OEM Purchase",
    "Partnership / Distribution",
    "Other",
];

/* ─────────────────────────── Form Component ─────────────────────────── */



/* ─────────────────────────── Page ─────────────────────────── */

export default function ContactUsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">


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
                    <div aria-hidden="true" className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
                    <div aria-hidden="true" className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-500/5 blur-2xl" />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-5 uppercase tracking-widest font-medium">
                            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                            <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                            </svg>
                            <span className="text-amber-400">Contact Us</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">

                            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">Get In Touch</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl">
                            Let&apos;s Protect Your<br className="hidden sm:block" />
                            <span className="text-amber-400"> Infrastructure Together</span>
                        </h1>
                        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                            Our lightning protection specialists are ready to assist with product enquiries,
                            technical guidance, site assessments, and custom solutions.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                    MAIN CONTENT — info cards + form
                ══════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12 items-start">

                        {/* ── LEFT: Contact Info ── */}
                        <div className="lg:col-span-2 flex flex-col gap-6">

                            {/* Info heading */}
                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 uppercase mb-2">
                                    <span className="w-5 h-[2px] bg-amber-500 rounded-full" />
                                    Contact Details
                                </div>
                                <h2 className="text-xl sm:text-2xl font-black text-[#0a192f]">
                                    Reach Us Directly
                                </h2>
                                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                    Whether you need a quote, technical consultation, or general information —
                                    we&apos;re here to help.
                                </p>
                            </div>

                            {/* Contact cards */}
                            <div className="flex flex-col gap-3">
                                {CONTACT_INFO.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-amber-200 hover:bg-amber-50/40 transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-0.5">{item.label}</p>
                                            <p className="text-sm font-semibold text-[#0a192f] group-hover:text-amber-700 transition-colors truncate">{item.value}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{item.subValue}</p>
                                        </div>
                                        <svg className="w-4 h-4 text-slate-300 group-hover:text-amber-400 flex-shrink-0 mt-1 transition-all duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                                        </svg>
                                    </a>
                                ))}
                            </div>

                            {/* Business hours */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                                <h3 className="text-sm font-bold text-[#0a192f] mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Business Hours
                                </h3>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { day: "Monday – Friday", time: "9:00 AM – 6:00 PM IST" },
                                        { day: "Saturday", time: "9:00 AM – 2:00 PM IST" },
                                        { day: "Sunday", time: "Closed" },
                                    ].map((row) => (
                                        <div key={row.day} className="flex items-center justify-between gap-4">
                                            <span className="text-slate-600 font-medium">{row.day}</span>
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.time === "Closed" ? "bg-slate-100 text-slate-400" : "bg-amber-100 text-amber-700"}`}>
                                                {row.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social links */}
                            {/* <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                                <h3 className="text-sm font-bold text-[#0a192f] mb-3">Follow Us</h3>
                                <div className="flex gap-3">
                                    {[
                                        {
                                            label: "LinkedIn",
                                            href: "#",
                                            icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />,
                                        },
                                        {
                                            label: "YouTube",
                                            href: "#",
                                            icon: <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />,
                                        },
                                        {
                                            label: "Instagram",
                                            href: "#",
                                            icon: (
                                                <>
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </>
                                            ),
                                        },
                                    ].map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            aria-label={s.label}
                                            className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                {s.icon}
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div> */}
                        </div>

                        {/* ── RIGHT: Contact Form ── */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                {/* Form header */}
                                <div className="bg-[#051326] px-7 py-6">
                                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
                                        <span className="w-5 h-[2px] bg-amber-400 rounded-full" />
                                        Send Us a Message
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        Fill in the form below and our team will respond within 24 business hours.
                                    </p>
                                </div>

                                {/* ContactForm component */}
                                <ContactForm />
                            </div>

                            {/* Quick response promise */}
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { icon: "⚡", title: "Quick Response", desc: "Reply within 24 hrs" },
                                    { icon: "🔒", title: "Confidential", desc: "Your data is safe" },
                                    { icon: "🛠️", title: "Expert Advice", desc: "Free consultation" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                                        <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-[#0a192f]">{item.title}</p>
                                            <p className="text-xs text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ══════════════════════════════════════
                    MAP PLACEHOLDER
                ══════════════════════════════════════ */}


                {/* ══════════════════════════════════════
                    BOTTOM CTA
                ══════════════════════════════════════ */}
                <section className="relative w-full bg-[#051326] py-16 overflow-hidden text-center">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
                    </div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Protect What Matters Most
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                            Explore our full range of CPRI-tested lightning protection products engineered for
                            industrial, commercial and critical infrastructure applications.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-gray-900 hover:bg-amber-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
                            >
                                View All Products
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/aboutus"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/12 hover:border-white/50 transition-all hover:-translate-y-0.5"
                            >
                                About THUNDERNEX
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
