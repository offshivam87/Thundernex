import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata = {
    title: 'Products | Thundernex - ESE Lightning Arresters & Strike Counters',
    description: 'Explore CPRI tested ESE Lightning Arresters, Digital Lightning Strike Counters (TNX-DLSC-01), and engineered earthing protection systems by RB Earthing Private Limited.',
    keywords: 'ESE Lightning Arrester, Digital Lightning Strike Counter, TNX-DLSC-01, Lightning Protection Products, RB Earthing Private Limited, Thundernex Products',
    openGraph: {
        title: 'Products | Thundernex - ESE Lightning Arresters & Strike Counters',
        description: 'Discover CPRI tested ESE Lightning Arresters and Digital Lightning Strike Counters engineered for reliable industrial and commercial infrastructure protection.',
        url: 'https://www.thundernex.com/products',
        siteName: 'Thundernex',
        locale: 'en_US',
        type: 'website',
    },
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <ProductsClient />
        </Suspense>
    );
}
