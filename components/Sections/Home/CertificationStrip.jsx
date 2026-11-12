import React from "react";
import Image from "next/image";

// The 5 official certification images from /public/Images
const certifications = [
  {
    id: "cpri",
    title: "CPRI",
    subtitle: "Tested",
    src: "/Images/CPRI.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "iso",
    title: "ISO 9001:2015",
    subtitle: "Certified",
    src: "/Images/ISO.png",
    width: 2500,
    height: 2500,
  },
  {
    id: "nabl",
    title: "NABL",
    subtitle: "Accredited",
    src: "/Images/NABL.png",
    width: 250,
    height: 348,
  },
  {
    id: "ce",
    title: "CE",
    subtitle: "Compliant",
    src: "/Images/ce.png",
    width: 1280,
    height: 896,
  },
  {
    id: "rohs",
    title: "RoHS",
    subtitle: "Compliant",
    src: "/Images/Rohs.png",
    width: 637,
    height: 431,
  },
];

export default function CertificationStrip() {
  return (
    <section
      aria-label="Industry Certifications & Compliance"
      className="relative w-full overflow-hidden bg-white py-5 sm:py-6 md:py-8 border-y border-slate-200 shadow-sm"
    >
      {/* Embedded CSS for smooth right-to-left marquee scroll */}
      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .cert-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: scrollRightToLeft 22s linear infinite;
        }

        @media (hover: hover) {
          .cert-marquee-track:hover {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Left and Right gradient edge masks for smooth fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="cert-marquee-track">
          {/* Primary set: 5 certification logos */}
          <div className="flex items-center shrink-0">
            {certifications.map((item) => (
              <div key={`primary-${item.id}`} className="flex items-center shrink-0">
                <div className="flex items-center gap-3.5 sm:gap-4 md:gap-6 px-6 sm:px-10 md:px-14 select-none group transition-transform duration-200 hover:scale-[1.03]">
                  {/* Certification Image */}
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={`${item.title} ${item.subtitle}`}
                      width={item.width}
                      height={item.height}
                      unoptimized
                      priority
                      className="h-12 sm:h-16 md:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[160px] object-contain mix-blend-multiply flex-shrink-0"
                    />
                  </div>

                  {/* Text Description */}
                  <div className="flex flex-col text-left">
                    <span className="text-[15px] sm:text-[18px] md:text-[21px] font-extrabold tracking-tight text-[#0f172a] leading-tight whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-[#475569] leading-tight whitespace-nowrap mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="h-10 sm:h-12 md:h-16 w-[1.5px] bg-slate-300/80 mx-2 sm:mx-3 md:mx-4 shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set: exact 5 logos for seamless infinite loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {certifications.map((item) => (
              <div key={`clone-${item.id}`} className="flex items-center shrink-0">
                <div className="flex items-center gap-3.5 sm:gap-4 md:gap-6 px-6 sm:px-10 md:px-14 select-none group transition-transform duration-200 hover:scale-[1.03]">
                  {/* Certification Image */}
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={`${item.title} ${item.subtitle}`}
                      width={item.width}
                      height={item.height}
                      unoptimized
                      priority
                      className="h-12 sm:h-16 md:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[160px] object-contain mix-blend-multiply flex-shrink-0"
                    />
                  </div>

                  {/* Text Description */}
                  <div className="flex flex-col text-left">
                    <span className="text-[15px] sm:text-[18px] md:text-[21px] font-extrabold tracking-tight text-[#0f172a] leading-tight whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-[#475569] leading-tight whitespace-nowrap mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="h-10 sm:h-12 md:h-16 w-[1.5px] bg-slate-300/80 mx-2 sm:mx-3 md:mx-4 shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
