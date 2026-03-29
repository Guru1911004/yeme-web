/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.0.130'],
    images: {
        // add any external domains here later if needed
        // e.g. for vendor logos pulled from an external CDN
        remotePatterns: [],
    },

    // allows importing .otf and .ttf font files directly
    // (Next.js handles this natively via app/fonts + next/font — no extra config needed)

    // strict mode catches common React bugs early — keep this on
    reactStrictMode: true,
}

module.exports = nextConfig