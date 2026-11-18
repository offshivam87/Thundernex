import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: 'Thundernex - ESE Lightning Arrester & Protection Solutions',
  description: 'Explore CPRI tested ESE Lightning Arresters, Digital Lightning Strike Counters, and advanced earthing protection systems by RB Earthing Private Limited.',
  keywords: 'ESE Lightning Arrester, Lightning Protection System, Thundernex, Lightning Arresters, Digital Lightning Strike Counter, Lightning Arrester for Buildings,',
  openGraph: {
    title: 'Thundernex - ESE Lightning Arrester & Protection Solutions',
    description: 'Explore CPRI tested ESE Lightning Arresters and Digital Lightning Strike Counters by RB Earthing Private Limited.',
    url: 'https://www.thundernex.com',
    siteName: 'Thundernex',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}