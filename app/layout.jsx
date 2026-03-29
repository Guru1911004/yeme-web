import './globals.css'
import localFont from 'next/font/local'

const yemeMedium = localFont({
    src: './fonts/YemeMedium.otf',
    variable: '--font-yeme-medium',
    weight: '500',
    display: 'swap',
})

const yemeBold = localFont({
    src: './fonts/YemeBold.otf',
    variable: '--font-yeme-bold',
    weight: '700',
    display: 'swap',
})

export const metadata = {
    title: 'YEME — Spend Smarter. Earn More.',
    description: 'YEME unifies your cards, loyalty programs, and group expenses into one app. Every transaction earns you YEMs redeemable for real rewards.',
    keywords: 'YEME, loyalty rewards, virtual card, split payments, fintech, Australia',
    openGraph: {
        title: 'YEME — Spend Smarter. Earn More.',
        description: 'Unify your cards, loyalty programs, and group expenses. Earn YEMs on every transaction.',
        url: 'https://yeme.com.au',
        siteName: 'YEME',
        locale: 'en_AU',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${yemeMedium.variable} ${yemeBold.variable}`}
        >
            <body className="bg-[#0C0B14] text-white antialiased">
                {children}
            </body>
        </html>
    )
}