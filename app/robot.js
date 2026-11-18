export default function robots() {
    const baseUrl = 'https://www.thundernex.com' // Apni domain URL yahan daalein

    return {
        rules: {
            userAgent: '*', // Sabhi search engine bots (Google, Bing, etc.) ke liye
            allow: '/',     // Puri website crawl karne ki permission hai
            disallow: [
                '/private/',  // Agar koi private ya admin page ho toh use block kar sakte hain
                '/api/',      // Next.js API routes ko search engine se hide rakhne ke liye
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`, // Aapke sitemap ka link taaki Google ko easily mil jaye
    }
}