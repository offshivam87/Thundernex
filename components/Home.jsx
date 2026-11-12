import React from 'react'
import HeroSection from './Sections/Home/HeroSection'
import CertificationStrip from './Sections/Home/CertificationStrip'
import About from './Sections/Home/About'
import Products from './Sections/Home/Products'
import ContactForm from './ContactForm'

export const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            <HeroSection />
            <CertificationStrip />
            <About />
            <Products />

            {/* Home Contact Section */}
            <section className="relative w-full bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-t border-slate-200/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase mb-2.5">
                            <span className="w-5 h-[2px] bg-amber-500 inline-block rounded-full animate-pulse" />
                            <span>GET IN TOUCH</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0a192f]">
                            Request a Free Consultation
                        </h2>
                        <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                            Connect with our lightning safety specialists for custom calculations, technical datasheets, or a project quotation.
                        </p>
                    </div>

                    {/* Framed Card Container */}
                    <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl overflow-hidden">
                        {/* Branded Card Header */}
                        <div className="bg-[#051326] px-6 sm:px-8 py-5 sm:py-6 text-left">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
                                <span className="w-5 h-[2px] bg-amber-400 rounded-full" />
                                Send Us a Message
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

