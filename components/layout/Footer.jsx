import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {


  return (
    <footer className="w-full bg-[#051326] text-slate-300 border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">

          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo */}
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/Images/Thundernexlogo.png"
                width={200}
                height={50}
                alt="THUNDERNEX Logo"
                unoptimized
                className="h-auto w-auto max-h-12 object-contain"
              />
            </Link>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Advanced lightning protection and monitoring solutions for industrial,
              commercial and critical infrastructure.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="THUNDERNEX on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="THUNDERNEX on Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="THUNDERNEX on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/applications"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mb-4">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/products/ese-lightning-arrester"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  ESE Lightning Arrester
                </Link>
              </li>
              <li>
                <Link
                  href="/products/digital-lightning-strike-counter"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Digital Lightning Strike Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/products/datetime-lightning-strike-counter"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Date &amp; Time Lightning Strike Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 sm:col-span-2 lg:col-span-3">
            <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-amber-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a
                  href="tel:+919876543210"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-amber-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:sales@thundernex.com"
                  className="hover:text-amber-400 transition-colors duration-200 break-all"
                >
                  sales@thundernex.com
                </a>
              </li>

              {/* Address */}

            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; 2026 THUNDERNEX. A Brand of RB Earthing Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-400 transition-colors duration-200"
            >

            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-amber-400 transition-colors duration-200"
            >

            </Link>
          </div>
        </div>

      </div >
    </footer >
  );
}

