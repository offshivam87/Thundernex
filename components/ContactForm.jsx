"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({ className = "" }) {
    const [state, handleSubmit] = useForm("mvkagawd");

    if (state.succeeded) {
        return (
            <div className={`p-8 sm:p-12 mx-auto text-center flex flex-col items-center justify-center bg-white max-w-2xl w-full ${className}`}>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] tracking-tight">
                    Enquiry Sent Successfully!
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Thank you for contacting <strong className="text-[#0a192f]">THUNDERNEX</strong>. Our team will review your specifications and get back to you within 24 business hours.
                </p>
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
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        placeholder="abc@gmail.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
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
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={30}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                {/* Product Selection */}
                <div className="space-y-1.5">
                    <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Product Selection <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="product"
                            name="product"
                            required
                            defaultValue=""
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 pr-10 py-3 text-sm text-[#0a192f] font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer"
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
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    maxLength={3000}
                    placeholder="Please share details such as structure type, building height, location, or any specific project specifications..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 font-medium transition-all duration-200 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-y min-h-[110px]"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>

            {/* General form error notice if any */}
            <ValidationError errors={state.errors} className="text-xs text-red-500" />

            {/* Submit Action */}
            <div className="pt-2">
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-amber-500 py-3.5 px-6 font-bold text-[#051326] text-sm sm:text-base hover:bg-amber-400 active:scale-[0.99] hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                    {state.submitting ? "Submitting Enquiry..." : "Request a Quote"}
                </button>
            </div>

            {/* Privacy footnote */}

        </form>
    );
}
