'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'For Vendors', href: '/for-vendors' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setMenuOpen(false) }, [pathname])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4">

            {/* LIQUID PILL */}
            <nav
                className="w-full max-w-[1100px] h-[58px] flex items-center justify-between px-3 transition-all duration-300"
                style={{
                    borderRadius: '100px',
                    background: scrolled ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
            >

                {/* Logo — white circle behind the purple logo so it reads cleanly */}
                <Link
                    href="/"
                    className="flex items-center shrink-0 p-1"
                    style={{
                        borderRadius: '100px',
                    }}
                >
                    <div
                        className="h-10 px-3 rounded-full shrink-0 overflow-hidden flex items-center justify-center"
                        style={{ background: 'white' }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="YEME"
                            width={72}
                            height={28}
                            priority
                            className="object-contain"
                            style={{ width: 'auto', height: '20px' }}
                        />
                    </div>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-0.5">
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="block px-4 py-2 text-[13.5px] font-medium transition-all duration-200"
                                    style={{
                                        borderRadius: '100px',
                                        color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.52)',
                                        background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                        border: isActive ? '1px solid rgba(255,255,255,0.11)' : '1px solid transparent',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#fff'
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.52)'
                                            e.currentTarget.style.background = 'transparent'
                                        }
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/* CTA */}
                <Link
                    href="/onboard"
                    className="hidden md:flex items-center justify-center px-5 h-9 text-[13.5px] font-bold shrink-0 transition-all duration-200"
                    style={{
                        borderRadius: '100px',
                        background: 'white',
                        color: '#3B266F',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F0EEF8'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                >
                    Join as a Vendor
                </Link>

                {/* Mobile burger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-4 h-0.5 bg-white transition-all duration-300"
                        style={{ transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
                    <span className="block w-4 h-0.5 bg-white transition-all duration-300"
                        style={{ opacity: menuOpen ? 0 : 1 }} />
                    <span className="block w-4 h-0.5 bg-white transition-all duration-300"
                        style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
                </button>
            </nav>

            {/* Mobile dropdown */}
            <div
                className="md:hidden absolute top-[80px] left-6 right-6 overflow-hidden transition-all duration-300"
                style={{
                    borderRadius: '20px',
                    background: 'rgba(19,17,31,0.97)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    maxHeight: menuOpen ? '360px' : '0px',
                    opacity: menuOpen ? 1 : 0,
                    boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                }}
            >
                <ul className="flex flex-col p-3 gap-1">
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                                    style={{
                                        color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                                        background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className="mt-1 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                        <Link
                            href="/onboard"
                            className="block text-center px-4 py-3 rounded-xl text-sm font-bold text-white"
                            style={{ background: '#3B266F' }}
                        >
                            Join as a Vendor
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}