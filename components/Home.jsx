"use client";

import React, { useRef, useState, useEffect } from 'react'
import HeroSection from './Sections/Home/HeroSection'
import CertificationStrip from './Sections/Home/CertificationStrip'
import About from './Sections/Home/About'
import Products from './Sections/Home/Products'
import ContactForm from './ContactForm'

export const Home = () => {
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
                threshold: 0.1,
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
        <div className="w-full overflow-hidden">
            <HeroSection />
            <CertificationStrip />
            <About />
            <Products />

            {/* Home Contact Section with in-view viewport animations */}
            <section
                ref={sectionRef}
                className="relative w-full bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 overflow-hidden"
            >
                {/* Subtle warm ambient glow behind the card */}
                <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-amber-500/[0.04] blur-3xl pointer-events-none"
                />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        {/* Tagline */}
                        <div
                            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase mb-2.5 transition-all duration-700 ease-out delay-100 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            <span className="w-5 h-[2px] bg-amber-500 inline-block rounded-full animate-pulse" />
                            <span>GET IN TOUCH</span>
                        </div>

                        {/* Heading */}
                        <h2
                            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0a192f] transition-all duration-700 ease-out delay-200 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            Request a{" "}

                            Free Consultation

                        </h2>

                        {/* Subtitle */}
                        <p
                            className={`mt-2.5 text-sm sm:text-base text-slate-600 transition-all duration-700 ease-out delay-300 will-change-transform ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            Connect with our lightning safety specialists for custom calculations, technical datasheets, or a project quotation.
                        </p>
                    </div>

                    {/* Framed Card Container with smooth viewport slide-and-scale */}
                    <div
                        className={`rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl hover:shadow-2xl transition-all duration-800 ease-out delay-[400ms] overflow-hidden will-change-transform ${isVisible
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-10 scale-[0.98]"
                            }`}
                    >
                        {/* Branded Card Header */}
                        <div className="bg-[#051326] px-6 sm:px-8 py-5 sm:py-6 text-left">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
                                <span className="w-5 h-[2px] bg-amber-400 rounded-full" />
                                <span>Send Us a Message</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Fill in your requirements below and our engineering team will respond within 24 business hours.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
