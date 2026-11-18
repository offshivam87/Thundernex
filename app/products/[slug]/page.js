import { Suspense } from "react";
import ProductsClient from "../ProductsClient";
import { PRODUCTS, resolveProductSlug } from "@/lib/products";

export function generateStaticParams() {
    return [
        { slug: "ese-lightning-arrester" },
        { slug: "safeguard-ese-arrester" },
        { slug: "digital-strike-counter" },
        { slug: "datetime-strike-counter" },
        { slug: "safe-guard-ese-lightning-arrester" },
        { slug: "digital-lightning-strike-counter" },
        { slug: "datetime-lightning-strike-counter" },
        { slug: "accessories" },
    ];
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const rawSlug = resolvedParams?.slug;
    const resolvedId = resolveProductSlug(rawSlug);
    const product = PRODUCTS.find((p) => p.id === resolvedId);

    if (!product) {
        return {
            title: "Products & Solutions | THUNDERNEX Lightning Protection",
            description: "Explore THUNDERNEX advanced lightning protection solutions.",
        };
    }

    return {
        title: `${product.name} | THUNDERNEX Lightning Protection`,
        description: product.tagline || (product.description && product.description[0]) || "",
    };
}

export default function ProductDetailPage({ params }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <ProductSlugContent paramsPromise={params} />
        </Suspense>
    );
}

async function ProductSlugContent({ paramsPromise }) {
    const resolvedParams = await paramsPromise;
    const rawSlug = resolvedParams?.slug;
    return <ProductsClient initialSlug={rawSlug} />;
}
