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
                  href="/contact"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Products
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
                  href="/products/safeguard-ese-arrester"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  SAFE-GUARD ESE Arrester
                </Link>
              </li>
              <li>
                <Link
                  href="/products/digital-strike-counter"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Digital Lightning Strike Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/products/datetime-strike-counter"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Date &amp; Time Lightning Strike Counter
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
                  href="tel:+919140073153"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  +91-9140073153
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
                  info@thundernex.com
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

