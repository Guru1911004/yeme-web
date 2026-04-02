'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/ThemeContext'

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'For Vendors', href: '/for-vendors' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
]

// ── Sun icon ──────────────────────────────────────────────
function SunIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    )
}

// ── Moon icon ─────────────────────────────────────────────
function MoonIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    )
}

export default function Navbar() {
    const pathname = usePathname()
    const { isDark, toggle } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
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
                    background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
                    border: '1px solid var(--nav-border)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    boxShadow: 'var(--nav-shadow)',
                }}
            >

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center shrink-0 p-1"
                    style={{ borderRadius: '100px' }}
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
                                        color: isActive ? 'var(--nav-link-active)' : 'var(--nav-link)',
                                        background: isActive ? 'var(--nav-link-active-bg)' : 'transparent',
                                        border: isActive ? '1px solid var(--nav-border)' : '1px solid transparent',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = 'var(--nav-link-active)'
                                            e.currentTarget.style.background = 'var(--nav-link-hover-bg)'
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = 'var(--nav-link)'
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

                {/* Right side: theme toggle + CTA */}
                <div className="flex items-center gap-2">

                    {/* Theme toggle */}
                    {mounted && (
                        <button
                            onClick={toggle}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                            style={{
                                color: isDark ? '#FFD166' : '#3B266F',
                                background: isDark ? 'rgba(255,209,102,0.12)' : 'rgba(59,38,111,0.08)',
                                border: isDark ? '1px solid rgba(255,209,102,0.25)' : '1px solid rgba(59,38,111,0.15)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = isDark ? 'rgba(255,209,102,0.22)' : 'rgba(59,38,111,0.14)'
                                e.currentTarget.style.transform = 'scale(1.08)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = isDark ? 'rgba(255,209,102,0.12)' : 'rgba(59,38,111,0.08)'
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >
                            <span className="transition-all duration-300" style={{ display: 'flex' }}>
                                {isDark ? <SunIcon /> : <MoonIcon />}
                            </span>
                        </button>
                    )}

                    {/* CTA — desktop only */}
                    <Link
                        href="/onboard"
                        className="hidden md:flex items-center justify-center px-5 h-9 text-[13.5px] font-bold shrink-0 transition-all duration-200"
                        style={{
                            borderRadius: '100px',
                            background: 'var(--purple)',
                            color: '#FFFFFF',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-light)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--purple)'}
                    >
                        Join as a Vendor
                    </Link>

                    {/* Mobile burger */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-full"
                        style={{ background: 'var(--nav-link-active-bg)' }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="block w-4 h-0.5 transition-all duration-300"
                            style={{ backgroundColor: 'var(--purple)', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
                        <span className="block w-4 h-0.5 transition-all duration-300"
                            style={{ backgroundColor: 'var(--purple)', opacity: menuOpen ? 0 : 1 }} />
                        <span className="block w-4 h-0.5 transition-all duration-300"
                            style={{ backgroundColor: 'var(--purple)', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div
                className="md:hidden absolute top-[80px] left-6 right-6 overflow-hidden transition-all duration-300"
                style={{
                    borderRadius: '20px',
                    background: 'var(--nav-dropdown-bg)',
                    border: '1px solid var(--nav-dropdown-border)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    maxHeight: menuOpen ? '360px' : '0px',
                    opacity: menuOpen ? 1 : 0,
                    boxShadow: 'var(--nav-dropdown-shadow)',
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
                                        color: isActive ? 'var(--nav-link-active)' : 'var(--nav-mobile-link)',
                                        background: isActive ? 'var(--nav-link-active-bg)' : 'transparent',
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className="mt-1 pt-2" style={{ borderTop: '1px solid var(--divider)' }}>
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