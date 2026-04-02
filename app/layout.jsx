import './globals.css'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/lib/ThemeContext'

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
    icons: {
        icon: '/images/favicon.png',
        apple: '/images/favicon.png',
    },
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
            {/* Prevent flash of wrong theme — runs before React hydrates */}
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function(){
                            try {
                                var saved = localStorage.getItem('theme')
                                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                                if (saved === 'dark' || (!saved && prefersDark)) {
                                    document.documentElement.classList.add('dark')
                                }
                            } catch(e) {}
                        })()
                    `
                }} />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}