import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-[#071426] min-h-screen md:h-svh">

            {/* Desktop Banner with smooth initial zoom animation */}
            <div className="hidden md:block absolute inset-0 overflow-hidden">
                <Image
                    src="/Images/banner.png"
                    alt="THUNDERNEX Lightning Protection Products"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center animate-hero-bg"
                />
            </div>

            {/* Mobile Banner with smooth initial zoom animation */}
            <div className="absolute inset-0 md:hidden overflow-hidden">
                <Image
                    src="/Images/MobileBanner.png"
                    alt="THUNDERNEX Lightning Protection Products"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[60%_center] animate-hero-bg"
                />
            </div>

            {/* Gradient overlays */}
            {/* Desktop: left-heavy gradient */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-950/20 via-gray-950/10 to-transparent" />

            {/* Mobile: subtle left gradient + bottom fade for text readability */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-r from-[#071426]/85 via-[#071426]/30 to-transparent" />
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#071426]/20 via-transparent to-[#071426]/60" />

            {/* Ambient animated warm amber glow */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 -left-16 w-[28rem] h-[28rem] rounded-full bg-amber-500/15 blur-3xl pointer-events-none animate-hero-glow"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="w-full pt-28 pb-16 md:pt-24 md:pb-16 lg:pt-0 lg:pb-0">
                    <div className="max-w-2xl">

                        {/* Badge — mobile only with pulsing indicator */}
                        <div className="mb-6 md:mb-0 md:hidden animate-hero-badge">
                            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-gray-200 border border-white/15 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                                </span>
                                Lightning Protection Solutions
                            </span>
                        </div>

                        {/* Heading with initial entrance animation and animated gradient shimmer */}
                        <h1 className="animate-hero-title text-[2.1rem] leading-[1.08] font-black tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                            Engineered for{" "}
                            <br className="sm:block" />
                            Nature&apos;s Power.
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_35px_rgba(245,158,11,0.35)] font-extrabold inline-block">
                                Designed to Protect
                                <br />
                                What Matters.
                            </span>
                        </h1>

                        {/* Subtitle with fade-in-up animation */}
                        <p className="animate-hero-desc mt-5 max-w-xs text-xs leading-relaxed text-slate-300 sm:max-w-lg sm:text-sm md:text-base md:mt-6">
                            A Specialized Brand of RB Earthing Private Limited — delivering high-performance, tested and certified lightning arresters and monitoring solutions.
                        </p>

                        {/* CTA Buttons with staggered entrance and interactive Tailwind hover/active animations */}
                        <div className="animate-hero-cta mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center md:mt-8 md:gap-4">
                            {/* Primary Button: Shimmer sweep + scale + glow */}
                            <Link
                                href="/products"
                                className="group relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-full border-2 border-amber-500 bg-amber-500 px-6 py-2.5 text-sm font-bold text-[#051326] shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] active:scale-95 md:px-7 md:py-3"
                            >
                                {/* Light sweep reflection */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                <span className="relative">Explore Products</span>
                                <svg
                                    className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

                            {/* Secondary Button: Glassmorphism + scale + rotating icon on hover */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-white/30 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-amber-400/70 hover:text-amber-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] active:scale-95 md:px-7 md:py-3"
                            >
                                <svg
                                    className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:-rotate-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                                <span>Request a Quote</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071426] to-transparent" />
        </section>
    );
}
