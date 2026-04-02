'use client'

import { useState } from 'react'
import Link from 'next/link'

function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--purple)' }}>
            {children}
        </span>
    )
}

const faqs = [
    {
        category: 'General',
        items: [
            {
                q: 'What is YEME?',
                a: 'YEME is a revolutionary payment platform designed to simplify expenses, streamline rewards, and redefine how users manage their finances. YEME works as an automatic smart e-wallet and rewards hub in one.',
            },
            {
                q: 'How does YEME work?',
                a: 'YEME integrates various payment methods, simplifies group expenses, manages gift cards, and rewards users with in-app points (YEMs) for transactions and their loyalty to vendors.',
            },
        ],
    },
    {
        category: 'User Accounts',
        items: [
            {
                q: 'How do I sign up for YEME?',
                a: 'YEME is currently in its early development stages. We are seeking feedback through our survey forms to implement your ideas and ensure we create the best product and experience for you.',
            },
            {
                q: 'Will YEME be available for all devices?',
                a: 'YEME is designed to be accessible on smartphones, including both Android and iPhone.',
            },
        ],
    },
    {
        category: 'Security & Privacy',
        items: [
            {
                q: 'How secure is my information with YEME?',
                a: 'YEME prioritises user security. We employ robust encryption measures and follow industry best practices to safeguard your information at all times.',
            },
            {
                q: 'Is my payment information stored securely?',
                a: 'Absolutely. YEME employs advanced security measures to ensure the safe storage of your payment information. Your card details are handled by Stripe — one of the world\'s most trusted payment processors — and never stored directly on our servers.',
            },
        ],
    },
    {
        category: 'Rewards & Points',
        items: [
            {
                q: 'How does YEME centralise various loyalty points and programs?',
                a: 'YEME brings the tracking of all your loyalty programs into one place by simply linking them to YEME. When you pay using YEME, it will automatically scan those linked loyalty points for you, ready for you to view and track in the app.',
            },
            {
                q: 'What happens to my loyalty points in YEME?',
                a: 'One of the biggest features of YEME is its tracker. You can click on each tab and be directed to that loyalty program\'s portal. How those points are used is determined by the owners of the loyalty program, not YEME.',
            },
        ],
    },
    {
        category: 'YEMs',
        items: [
            {
                q: 'What are YEMs and how do I earn them?',
                a: 'YEMs are in-app loyalty points earned with each transaction through YEME and from various vendors. The more you frequent a participating vendor, the more YEMs you earn. Each vendor may offer different point rates. You can also earn YEMs by referring a friend to a participating vendor within the app.',
            },
            {
                q: 'What can I use YEMs for?',
                a: 'YEMs can be used to purchase various gift cards and vouchers in the in-app Gift Card Store. Mark these for pre-authorised use for automatic scanning when making a payment, or save them to use later.',
            },
        ],
    },
    {
        category: 'Group Expenses',
        items: [
            {
                q: 'How does YEME simplify group expenses?',
                a: 'YEME offers a user-friendly interface to streamline group expenses by making it easy to split costs and manage shared bills. You can split costs with other YEME users at the time of payment — meaning you only ever pay your own share. Works for groceries, rent, utilities, dining out, and more.',
            },
            {
                q: 'How are these splits done?',
                a: 'When you split a purchase with someone, YEME sends an authorisation request to that user. Once authorised, you get an instant notification and can pay. Only each person\'s share gets deducted, and the total amount is paid in one transaction. You can even split your reward points.',
            },
        ],
    },
    {
        category: 'Viewing Expenses',
        items: [
            {
                q: 'How do I keep track of my expenses?',
                a: 'With YEME you can view all transactions in one place. If you split costs with a particular group, you can view those under that group specifically. Easily find transactions, splits, and expenses sorted by categories.',
            },
        ],
    },
    {
        category: 'Contact',
        items: [
            {
                q: 'How can I get in touch with YEME support?',
                a: 'You can reach our support team by visiting the Contact page on our website or emailing us directly at info@yeme.com.au.',
            },
        ],
    },
]

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div
            className="rounded-xl overflow-hidden transition-all duration-200"
            style={{
                background: open ? 'var(--purple-dim)' : 'var(--bg-2)',
                border: open ? '1px solid rgba(59,38,111,0.4)' : '1px solid var(--divider)',
            }}
        >
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200"
                onClick={() => setOpen(!open)}
            >
                <span
                    className="text-[15px] font-medium pr-8 leading-snug"
                    style={{ color: 'var(--fg)' }}
                >
                    {q}
                </span>
                <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: open ? '#3B266F' : 'var(--border-color)',
                        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1V9M1 5H9" stroke={open ? 'white' : 'var(--fg)'} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open ? '400px' : '0px' }}
            >
                <p
                    className="px-6 pb-6 text-[14px] leading-relaxed"
                    style={{ color: 'var(--fg-2)' }}
                >
                    {a}
                </p>
            </div>
        </div>
    )
}

export default function FaqsPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const categories = ['All', ...faqs.map(f => f.category)]

    const filtered = activeCategory === 'All'
        ? faqs
        : faqs.filter(f => f.category === activeCategory)

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative pt-[140px] pb-16 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(59,38,111,0.18) 0%, transparent 70%)',
                    }}
                />
                <div className="max-w-[700px] mx-auto text-center relative z-10">
                    <Tag>FAQs</Tag>
                    <h1
                        className="text-[clamp(34px,5vw,54px)] font-bold leading-[1.1] mb-5"
                        style={{ letterSpacing: '-2px' }}
                    >
                        Questions we get asked a lot
                    </h1>
                    <p className="text-[16px] leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                        Can't find what you are looking for? Reach out via the{' '}
                        <Link href="/contact" style={{ color: 'var(--purple)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Contact page</Link>
                        {' '}and we will get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── CATEGORY FILTER ──────────────────────────────── */}
            <section className="px-6 pb-4">
                <div className="max-w-[860px] mx-auto">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                                style={{
                                    background: activeCategory === cat ? '#3B266F' : 'var(--bg-2)',
                                    border: activeCategory === cat
                                        ? '1px solid rgba(59,38,111,0.4)'
                                        : '1px solid var(--divider)',
                                    color: activeCategory === cat ? '#fff' : 'var(--fg-2)',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ LIST ─────────────────────────────────────── */}
            <section className="py-12 px-6 pb-28">
                <div className="max-w-[860px] mx-auto flex flex-col gap-10">
                    {filtered.map(({ category, items }) => (
                        <div key={category}>
                            <p
                                className="text-[11px] font-bold tracking-widest uppercase mb-4"
                                style={{ color: 'var(--purple)' }}
                            >
                                {category}
                            </p>
                            <div className="flex flex-col gap-3">
                                {items.map(({ q, a }) => (
                                    <FaqItem key={q} q={q} a={a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BOTTOM CTA ───────────────────────────────────── */}
            <section
                className="py-20 px-6 text-center"
                style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--divider)' }}
            >
                <div className="max-w-[560px] mx-auto">
                    <Tag>Still have questions?</Tag>
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ letterSpacing: '-0.5px' }}
                    >
                        We are happy to help
                    </h2>
                    <p className="text-[14px] leading-relaxed mb-8" style={{ color: 'var(--fg-2)' }}>
                        Drop us a message and our team will get back to you within 24 hours.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                        style={{ background: '#3B266F', border: '1px solid rgba(59,38,111,0.4)' }}
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}