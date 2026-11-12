"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({ className = "" }) {
    const [state, handleSubmit] = useForm("mvkagawd");

    if (state.succeeded) {
        return (
            <div className={`p-8 sm:p-12 mx-auto text-center flex flex-col items-center justify-center bg-white max-w-2xl w-full ${className}`}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 shadow-sm">
                    <span className="absolute inset-0 rounded-2xl bg-amber-500/20 animate-ping opacity-25" />
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <span className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-1">
                    Received
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] tracking-tight">
                    Enquiry Sent Successfully!
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Thank you for contacting <strong className="text-[#0a192f]">THUNDERNEX</strong>. Our lightning safety engineering team will review your specifications and get back to you within 24 business hours.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Fast Response • Technical Consultation • CPRI Tested Solutions
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`w-full max-w-2xl mx-auto p-6 sm:p-8 space-y-5 bg-white text-left ${className}`}
        >
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            maxLength={100}
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={254}
                            placeholder="abc@gmail.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>
            </div>

            {/* Row 2: Contact Number & Product Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Contact Number */}
                <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Contact Number <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            maxLength={30}
                            placeholder="+91 XXXXXXXXXX"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        />
                    </div>
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                {/* Product Selection */}
                <div className="space-y-1.5">
                    <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Product Selection <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <select
                            id="product"
                            name="product"
                            required
                            defaultValue=""
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-10 py-3 text-sm text-[#0a192f] font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-slate-400">
                                Select a product / solution
                            </option>
                            <option value="ESE Lightning Arrester">
                                ESE Lightning Arrester (Early Streamer Emission)
                            </option>
                            <option value="Digital Lightning Strike Counter">
                                Digital Lightning Strike Counter
                            </option>
                            <option value="Date & Time Lightning Strike Counter">
                                Date &amp; Time Lightning Strike Counter
                            </option>
                            <option value="Complete Lightning Protection System">
                                Complete Lightning Protection System
                            </option>
                            <option value="Earthing & Grounding Solutions">
                                Earthing &amp; Grounding Solutions
                            </option>
                            <option value="Custom Project / Other">
                                Custom Project / Other Requirement
                            </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <ValidationError prefix="Product" field="product" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>
            </div>

            {/* Description / Message */}
            <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Description / Requirement <span className="text-amber-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">Max 3000 chars</span>
                </div>
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        maxLength={3000}
                        placeholder="Please share details such as structure type, building height, location, or any specific project specifications..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-y min-h-[110px]"
                    />
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>

            {/* General form error notice if any */}
            <ValidationError errors={state.errors} className="text-xs text-red-500" />

            {/* Submit Action */}
            <div className="pt-2">
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 px-6 font-bold text-[#051326] text-sm sm:text-base hover:bg-amber-400 active:scale-[0.99] hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer group"
                >
                    {state.submitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-[#051326]" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            <span>Submitting Enquiry...</span>
                        </>
                    ) : (
                        <>
                            <span>Request a Quote</span>
                            <svg className="w-4 h-4 text-[#051326] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </>
                    )}
                </button>
            </div>

            {/* Privacy footnote */}
            <div className="pt-1 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>We respect your privacy. No spam — your details are strictly confidential.</span>
            </div>
        </form>
    );
}
