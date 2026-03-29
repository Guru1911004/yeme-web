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

    // close mobile menu on route change
    useEffect(() => { setMenuOpen(false) }, [pathname])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0C0B14]/95 backdrop-blur-xl border-b border-white/[0.08]'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="YEME"
                            width={100}
                            height={35}
                            priority
                            className="object-contain"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1">
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${isActive
                                        ? 'text-white'
                                        : 'text-[#8A8A9A] hover:text-white hover:bg-white/[0.06]'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/onboard"
                        className="px-5 py-2 rounded-lg text-[13.5px] font-medium text-white transition-all duration-200"
                        style={{ backgroundColor: '#3B266F' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4e318f'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3B266F'}
                    >
                        Join as a Vendor
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                style={{ backgroundColor: '#13111F', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
                <ul className="flex flex-col px-6 py-4 gap-1">
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-white bg-white/[0.06]'
                                        : 'text-[#8A8A9A] hover:text-white hover:bg-white/[0.04]'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className="mt-3">
                        <Link
                            href="/onboard"
                            className="block text-center px-4 py-3 rounded-lg text-sm font-medium text-white"
                            style={{ backgroundColor: '#3B266F' }}
                        >
                            Join as a Vendor
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}