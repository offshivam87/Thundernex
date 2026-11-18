/* ─────────────────────────── Product Data & Slug Resolver ─────────────────────────── */

export const PRODUCTS = [
    {
        id: "ese-lightning-arrester",
        name: "ESE Lightning Arrester",
        shortName: "ESE Arrester",
        tagline: "Wide-Area Early Streamer Emission Protection",


        image: "/Images/ese.png",
        description: [
            "The THUNDERNEX™ TNX-DLSC-01 Digital Lightning Strike Counter, by RB Earthing Private Limited, is an electronic monitoring device engineered to detect, count, and record lightning strikes and high-voltage surge events passing through a building's lightning protection system. Installed directly onto a down-conductor or earthing pipe, it uses a non-intrusive inductive sensor to capture lightning currents ranging from 1 kA (8/20 µs) to 100 kA (10/350 µs) and logs up to 99,999,999 events on its digital display. Powered by an internal Li-ion battery with no external power supply required, this IP67-rated unit operates reliably in extreme temperatures from -40°C to +85°C, making it ideal for industrial plants, commercial complexes, telecom towers, data centers, and solar power installations.",
        ],
        features: [
            "Early Streamer Emission (ESE)",
            "Protect structures from direct lightning strikes",
            "Highest point of the structure",
            "Initiates an early upward streamer under suitable electrical conditions",
            "Safely conducts lightning current to the earth",
            "Commercial buildings, industries, hospitals, telecom towers, airports, warehouses, data centers",
            "Periodic inspection and earthing resistance testing",
        ],
        specs: [
            { param: "Technology", value: "Early Streamer Emission (ESE)" },
            { param: "Reference Standard", value: "NF C 17-102:201" },
            { param: "Triggering Advance Time (ΔT)", value: "Level I, II, III, IV" },
            { param: "Maximum Protection Radius", value: "Up to 107 m (at 5m to 60m height)" },
            { param: "Impulse Current Withstand (Iimp)", value: "100 kA (10/350 µs)" },
            { param: "Material Composition", value: "316L Stainless Steel & Copper Alloys" },
            { param: "Terminal Weight", value: "Approx. 2.8 kg" },
            { param: "Operating Temperature", value: "-40 °C to +85 °C" },
            { param: "Relative Humidity", value: "0% to 100% Condensing" },
            { param: "Environmental Enclosure", value: "IP 67 Weatherproof" },
            { param: "Mast Connection", value: "Fits standard 30 mm – 60 mm diameter masts" },
            { param: "Certifications", value: "CPRI Tested, ISO Certified, CE Marked, RoHS" },
        ],
        certifications: ["CPRI Tested", "ISO Certified", "NABL Accredited", "CE Marked", "RoHS Compliant"],
        applications: ["Industrial Plants", "Telecom Towers", "Data Centres", "Airports", "Hospitals", "Commercial Buildings"],
    },
    {
        id: "safeguard-ese-arrester",
        name: "SAFE-GUARD ESE Lightning Arrester",
        shortName: "SAFE-GUARD ESE",
        tagline: "Empowering Lightning Safety Device with Multi-Radius Coverage",


        image: "/Images/safeguard-ese.png",
        description: [
            "The THUNDERNEX SAFE-GUARD ESE (Early Streamer Emission) Lightning Arrester is a high-performance, aerodynamically designed lightning safety terminal formulated to deliver wide-area, multi-tier protection against direct lightning strikes.",
            "Featuring an integrated ionisation chamber inside a sleek, heavy-duty stainless steel cylinder, the SAFE-GUARD series offers multi-tier protection radii options including 50m, 79m, and 107m coverage zones. This allows engineers to custom-match lightning protection radii to specific site dimensions, building heights, and surrounding topological risk factors.",
            "Engineered to meet NFC 17-102:2011, UNE 21.186, and international safety codes, the SAFE-GUARD arrester is fully autonomous, requires zero maintenance, and operates with zero radioactive materials or external power sources. It is built to endure harsh tropical thunderstorms, salt-spray coastal environments, and corrosive industrial atmospheres.",
        ],
        features: [
            "Advanced ESE Ionisation Trigger Mechanism for rapid upward streamer emission",
            "Multi-Tier Coverage Radii Options — 50 m, 79 m, and 107 m protection zones",
            "Sleek Aerodynamic Cylindrical Housing in high-grade 316L stainless steel",
            "Zero Maintenance & 100% Autonomous — self-powered by atmospheric electrostatic field",
            "High discharge capacity: 100 kA impulse withstand (10/350 µs waveform)",
            "Robust base coupling with secure grounding conductor connection clamp",
            "Tested & certified to ISO, CE, and RoHS international safety standards",
        ],
        specs: [
            { param: "Product Series", value: "SAFE-GUARD ESE Active Terminal" },
            { param: "Compliance Standards", value: "NFC 17-102:2011 / UNE 21.186 / IEC 62561" },
            { param: "Triggering Advance Time (ΔT)", value: "25 µs / 45 µs / 60 µs" },
            { param: "Area of Coverage Options", value: "50 m / 79 m / 107 m Radius" },
            { param: "Lightning Surge Capacity (Iimp)", value: "100 kA (10/350 µs)" },
            { param: "Body Construction", value: "316L Stainless Steel & Chrome Plated Alloys" },
            { param: "Power Supply", value: "Self-triggering via electric field (No battery)" },
            { param: "Operating Temperature", value: "-40 °C to +85 °C" },
            { param: "Wind Speed Resistance", value: "Exceeds 200 km/h" },
            { param: "Ingress Protection", value: "IP 67 Fully Weatherproof" },
            { param: "Mounting Compatibility", value: "Standard 32 mm – 50 mm elevation mast" },
            { param: "Certifications", value: "ISO 9001, CE Marked, RoHS Compliant" },
        ],
        certifications: ["ISO Certified", "CE Marked", "RoHS Compliant", "NFC 17-102 Tested"],
        applications: ["Commercial High-Rises", "Industrial Warehouses", "Solar & Wind Farms", "Telecom Towers", "Petrochemical Plants", "Institutional Campuses"],
    },
    {
        id: "digital-strike-counter",
        name: "Digital Lightning Strike Counter",
        shortName: "Digital Counter",
        tagline: "High-Visibility 6-Digit Strike Logging",


        image: "/Images/DIGITAL LIGHTNING STRIKE COUNTER.png",
        description: [
            "The THUNDERNEX™ Digital Lightning Strike Counter is an electronic monitoring device designed to record lightning current events detected by the connected lightning protection system. Featuring a digital display, it enables convenient monitoring of recorded event counts and supports periodic inspection and maintenance of lightning protection installations. Designed for integration into suitable lightning protection systems, the counter should be installed in accordance with the manufacturer's instructions and applicable technical requirements",
        ],
        features: [
            "Digital event count",
            "Lightning-current event",
            "No external power supply required",
            "Counting Range between 0-99999999 times",
            "1 kA (8/20 µs) – 100 kA (10/350 µs) range Of Intensity",
        ],
        specs: [
            { param: "Display Type", value: "6-Digit High-Visibility Digital Display" },
            { param: "Counting Range", value: "000000 to 999999 events" },
            { param: "Memory Retention", value: "Non-volatile EEPROM (Unlimited duration)" },
            { param: "Current Sensitivity Threshold", value: "≥ 1 kA (8/20 µs impulse waveform)" },
            { param: "Maximum Discharge Current", value: "100 kA (10/350 µs impulse)" },
            { param: "Power Supply", value: "Self-powered via impulse energy harvesting" },
            { param: "Enclosure Material", value: "Impact-Resistant Polycarbonate / ABS" },
            { param: "Ingress Protection Rating", value: "IP 65 Weatherproof" },
            { param: "Operating Temperature", value: "-30 °C to +70 °C" },
            { param: "Conductor Fitment", value: "Flat tape (up to 30x5mm) or round bar (8-12mm)" },
            { param: "Certifications", value: "CPRI Tested, CE Marked, RoHS Compliant" },
        ],
        certifications: ["CPRI Tested", "CE Marked", "RoHS Compliant"],
        applications: ["Industrial Plants", "Telecom Towers", "Substations", "Commercial Buildings", "Renewable Energy Sites"],
    },
    {
        id: "datetime-strike-counter",
        name: "Date & Time Lightning Strike Counter",
        shortName: "Date & Time Counter",
        tagline: "Real-Time Timestamped Strike Logging",


        image: "/Images/DATE & TIME LIGHTNING STRIKE COUNTER.png",
        description: [
            "The THUNDERNEX™ Date & Time Lightning Strike Counter is a digital monitoring device designed to record detected lightning current events and display the event count along with date and time information, subject to the model's recording capabilities. It supports event monitoring, maintenance planning, and inspection of compatible lightning protection systems. The recorded information helps maintenance personnel review lightning activity and assess whether further inspection of the protection system is required. The counter should be installed in accordance with the manufacturer's instructions and the applicable technical requirements of the lightning protection system.",
        ],
        features: [
            "Digital event count with date/time display",
            "Lightning-current event",
            "Verify actual event logging with exact date & time",
            "No external power supply required",
            "Counting Range between 0-99999999 times",
            "1 kA (8/20 µs) – 100 kA (10/350 µs) range Of Intensity",
        ],
        specs: [
            { param: "Display Screen", value: "Dual-Line Backlit Digital LCD Display" },
            { param: "Logged Information", value: "Strike sequence, Date (DD/MM/YY), Time (HH:MM:SS)" },
            { param: "Clock Accuracy", value: "High-accuracy RTC (± 1 minute / month)" },
            { param: "Backup Battery Life", value: "Integrated Lithium Cell (5+ Years life)" },
            { param: "Memory Event Storage", value: "Up to 9,999 timestamped events" },
            { param: "Current Detection Range", value: "1 kA to 100 kA (8/20 µs & 10/350 µs)" },
            { param: "Power System", value: "Self-powered impulse sensing + RTC battery backup" },
            { param: "Enclosure Protection", value: "IP 65 Sealed Weatherproof" },
            { param: "Operating Temperature", value: "-30 °C to +70 °C" },
            { param: "Installation", value: "Direct down-conductor clamp mounting" },
            { param: "Certifications", value: "CPRI Tested, CE Marked, RoHS Compliant" },
        ],
        certifications: ["CPRI Tested", "CE Marked", "RoHS Compliant"],
        applications: ["Power Substations", "Oil & Gas Refineries", "Data Centres", "Defence Bases", "Airports", "Critical Infrastructure"],
    },
];

export function resolveProductSlug(rawSlug) {
    if (!rawSlug || typeof rawSlug !== "string") return null;

    const normalized = rawSlug.trim().toLowerCase();

    // 1. Direct match with product id
    const exact = PRODUCTS.find((p) => p.id === normalized);
    if (exact) return exact.id;

    // 2. Specific alias map for route variations & legacy links
    const ALIAS_MAP = {
        "ese-lightning-arrester": "ese-lightning-arrester",
        "ese-arrester": "ese-lightning-arrester",
        "ese": "ese-lightning-arrester",
        "lightning-arrester": "ese-lightning-arrester",

        "safeguard-ese-arrester": "safeguard-ese-arrester",
        "safe-guard-ese-arrester": "safeguard-ese-arrester",
        "safe-guard-ese-lightning-arrester": "safeguard-ese-arrester",
        "safeguard-ese-lightning-arrester": "safeguard-ese-arrester",
        "safeguard-ese": "safeguard-ese-arrester",
        "safe-guard": "safeguard-ese-arrester",
        "safeguard": "safeguard-ese-arrester",
        "ese-guard": "safeguard-ese-arrester",

        "digital-strike-counter": "digital-strike-counter",
        "digital-lightning-strike-counter": "digital-strike-counter",
        "digital-counter": "digital-strike-counter",
        "digital": "digital-strike-counter",
        "dlsc": "digital-strike-counter",

        "datetime-strike-counter": "datetime-strike-counter",
        "datetime-lightning-strike-counter": "datetime-strike-counter",
        "date-time-lightning-strike-counter": "datetime-strike-counter",
        "date-time-strike-counter": "datetime-strike-counter",
        "datetime-counter": "datetime-strike-counter",
        "date-time": "datetime-strike-counter",
        "datetime": "datetime-strike-counter",

        "accessories": "ese-lightning-arrester",
    };

    if (ALIAS_MAP[normalized]) {
        return ALIAS_MAP[normalized];
    }

    // 3. Keyword-based matching
    const clean = normalized.replace(/[^a-z0-9]/g, "");
    if (clean.includes("safeguard") || clean.includes("eseguard")) {
        return "safeguard-ese-arrester";
    }
    if (clean.includes("datetime") || (clean.includes("date") && clean.includes("time"))) {
        return "datetime-strike-counter";
    }
    if (clean.includes("digital")) {
        return "digital-strike-counter";
    }
    if (clean.includes("ese") || clean.includes("arrester")) {
        return "ese-lightning-arrester";
    }

    return null;
}

