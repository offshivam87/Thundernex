export default async function sitemap() {
    const baseUrl = 'https://www.thundernex.com' // Apni domain URL yahan daalein

    // Static Pages jo aapke navigation me hain
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/aboutus`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contactus`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Agar aapke paas dynamic products hain (jaise ESE Lightning Arrester, Strike Counter)
    // Aap inhe database ya array se fetch kar sakte hain:
    const products = [
        {
            slug: 'ese-lightning-arrester',
            lastModified: new Date(),
        },
        {
            slug: 'safeguard-ese-arrester',
            lastModified: new Date(),
        }, {
            slug: 'digital-strike-counter',
            lastModified: new Date(),
        }, {
            slug: 'datetime-strike-counter',
            lastModified: new Date(),
        },
    ]

    const productPages = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: product.lastModified,
        changeFrequency: 'weekly',
        priority: 0.85,
    }))

    return [...staticPages, ...productPages]
}