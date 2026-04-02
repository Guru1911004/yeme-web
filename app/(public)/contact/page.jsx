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

function InfoCard({ icon, label, value, href }) {
    const content = (
        <div
            className="flex items-center gap-4 rounded-xl p-5 transition-all duration-200"
            style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--divider)',
            }}
        >
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-lg"
                style={{
                    background: 'var(--purple-dim)',
                    border: '1px solid rgba(59,38,111,0.25)',
                }}
            >
                {icon}
            </div>
            <div>
                <p className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--fg-muted)' }}>
                    {label}
                </p>
                <p className="text-[15px] font-medium" style={{ color: 'var(--fg)' }}>{value}</p>
            </div>
        </div>
    )

    return href
        ? <a href={href}>{content}</a>
        : content
}

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', type: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await new Promise(r => setTimeout(r, 800))
        setLoading(false)
        setSubmitted(true)
    }

    const inputStyle = {
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        color: 'var(--fg)',
    }

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative pt-[140px] pb-16 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 50% 55% at 50% 0%, rgba(59,38,111,0.18) 0%, transparent 70%)',
                    }}
                />
                <div className="max-w-[640px] mx-auto text-center relative z-10">
                    <Tag>Get in Touch</Tag>
                    <h1
                        className="text-[clamp(34px,5vw,54px)] font-bold leading-[1.1] mb-5"
                        style={{ letterSpacing: '-2px' }}
                    >
                        We would love to hear from you
                    </h1>
                    <p className="text-[16px] leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                        Whether you are a user with a question or a vendor curious about
                        partnering, we are quick to respond.
                    </p>
                </div>
            </section>

            {/* ── MAIN GRID ────────────────────────────────────── */}
            <section className="py-12 px-6 pb-28">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">

                    {/* Left — info cards */}
                    <div className="flex flex-col gap-4">
                        <InfoCard
                            icon="✉"
                            label="Email"
                            value="info@yeme.com.au"
                            href="mailto:info@yeme.com.au"
                        />
                        <InfoCard
                            icon="📍"
                            label="Location"
                            value="Melbourne, Australia"
                        />
                        <InfoCard
                            icon="⏱"
                            label="Response Time"
                            value="Within 24 hours"
                        />

                        {/* vendor nudge */}
                        <div
                            className="rounded-xl p-6 mt-2"
                            style={{
                                background: 'var(--purple-dim)',
                                border: '1px solid rgba(59,38,111,0.25)',
                            }}
                        >
                            <p
                                className="text-[11px] font-bold tracking-widest uppercase mb-3"
                                style={{ color: 'var(--purple)' }}
                            >
                                Are you a vendor?
                            </p>
                            <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: 'var(--fg-2)' }}>
                                Skip the contact form and go straight to the vendor application.
                                Our team will reach out within 24 hours.
                            </p>
                            <Link
                                href="/onboard"
                                className="flex items-center justify-center w-full py-3 rounded-xl text-[14px] font-bold text-white transition-all duration-200"
                                style={{ background: '#3B266F' }}
                            >
                                Apply as a Vendor
                            </Link>
                        </div>
                    </div>

                    {/* Right — form or success */}
                    {submitted ? (
                        <div
                            className="rounded-2xl p-12 flex flex-col items-center justify-center text-center"
                            style={{
                                background: 'var(--bg-2)',
                                border: '1px solid var(--divider)',
                                minHeight: '420px',
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                                style={{ background: '#3B266F' }}
                            >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M5 14L11 20L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Message sent</h2>
                            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--fg-2)', maxWidth: '320px' }}>
                                Thanks for reaching out. We will get back to you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl p-8 flex flex-col gap-5"
                            style={{
                                background: 'var(--bg-2)',
                                border: '1px solid var(--divider)',
                            }}
                        >

                            {/* name row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--fg-2)' }}>
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Jane"
                                        className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = '#3B266F'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--fg-2)' }}>
                                        Last Name
                                    </label>
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Smith"
                                        className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = '#3B266F'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>
                            </div>

                            {/* email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--fg-2)' }}>
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="jane@example.com"
                                    className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = '#3B266F'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            {/* enquiry type */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--fg-2)' }}>
                                    Enquiry Type
                                </label>
                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    required
                                    className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                                    style={{
                                        ...inputStyle,
                                        color: form.type ? 'var(--fg)' : 'var(--fg-muted)',
                                    }}
                                    onFocus={e => e.target.style.borderColor = '#3B266F'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                                >
                                    <option value="" disabled>Select a type</option>
                                    <option value="general">General question</option>
                                    <option value="user">User support</option>
                                    <option value="vendor">Vendor enquiry</option>
                                    <option value="press">Press / Media</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--fg-2)' }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell us what is on your mind..."
                                    className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 resize-none"
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = '#3B266F'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            {/* submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                                style={{
                                    background: loading ? 'rgba(59,38,111,0.5)' : '#3B266F',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>
                    )}
                </div>
            </section>
        </>
    )
}