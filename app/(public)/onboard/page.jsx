'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── Tiny reusables ─────────────────────────────────────────
function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ color: '#49BFFF' }}>
            {children}
        </span>
    )
}

function Label({ children }) {
    return (
        <label className="block text-[11px] font-bold tracking-wider uppercase mb-2"
            style={{ color: '#C0BFCC' }}>
            {children}
        </label>
    )
}

function Input({ name, value, onChange, placeholder, type = 'text', required = true }) {
    return (
        <input
            name={name} type={type} value={value} onChange={onChange}
            required={required} placeholder={placeholder}
            className="w-full rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all duration-200"
            style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.08)' }}
            onFocus={e => e.target.style.borderColor = '#3B266F'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
        />
    )
}

function Select({ name, value, onChange, children, required = true }) {
    return (
        <select
            name={name} value={value} onChange={onChange} required={required}
            className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
            style={{
                background: '#1A1828',
                border: '1px solid rgba(255,255,255,0.08)',
                color: value ? '#fff' : '#8A8A9A',
            }}
            onFocus={e => e.target.style.borderColor = '#3B266F'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
        >
            {children}
        </select>
    )
}

// ── Custom Program Modal ───────────────────────────────────
function CustomModal({ onClose }) {
    const [conditions, setConditions] = useState([
        { yems: '1', per: 'Dollar', freq: 'EVERYTIME' },
        { yems: '2', per: 'Item', freq: 'NEXT FIVE TIMES' },
        { yems: '3', per: 'Transaction', freq: '6TH TIME CUSTOMERS' },
    ])

    const freqOptions = [
        'EVERYTIME', 'NEXT FIVE TIMES', 'NEXT TEN TIMES',
        '6TH TIME CUSTOMERS', '11TH TIME CUSTOMERS',
    ]
    const perOptions = ['Dollar', 'Item', 'Transaction']

    const updateRow = (i, field, val) => {
        const updated = [...conditions]
        updated[i] = { ...updated[i], [field]: val }
        setConditions(updated)
    }

    const addRow = () => setConditions([...conditions, { yems: '1', per: 'Dollar', freq: 'EVERYTIME' }])
    const removeRow = i => setConditions(conditions.filter((_, idx) => idx !== i))

    return (
        // overlay — faux viewport so fixed doesn't collapse
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
        >
            <div
                className="w-full max-w-[820px] max-h-[90vh] overflow-y-auto rounded-2xl"
                style={{
                    background: '#13111F',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* modal header */}
                <div
                    className="flex items-center justify-between px-6 py-4"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <div>
                        <p className="text-[16px] font-bold">Custom Loyalty Program</p>
                        <p className="text-[12px] mt-0.5" style={{ color: '#49BFFF' }}>
                            Preview — available in your vendor dashboard after onboarding
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                        style={{ background: 'rgba(255,255,255,0.07)', color: '#fff' }}
                    >
                        ✕
                    </button>
                </div>

                {/* modal body — two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* LEFT — builder */}
                    <div
                        className="p-6"
                        style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
                    >
                        <p className="text-[13px] font-bold tracking-wider uppercase mb-4"
                            style={{ color: '#8A8A9A' }}>
                            Offer Conditions
                        </p>

                        {/* table header */}
                        <div className="grid grid-cols-[60px_1fr_1fr_32px] gap-2 mb-2 px-1">
                            {['YEMs', 'Per', 'Frequency', ''].map(h => (
                                <p key={h} className="text-[10px] font-bold tracking-wider uppercase"
                                    style={{ color: '#555566' }}>{h}</p>
                            ))}
                        </div>

                        {/* rows */}
                        <div className="flex flex-col gap-2 mb-4">
                            {conditions.map((row, i) => (
                                <div key={i} className="grid grid-cols-[60px_1fr_1fr_32px] gap-2 items-center">
                                    <input
                                        type="number" min="1" value={row.yems}
                                        onChange={e => updateRow(i, 'yems', e.target.value)}
                                        className="rounded-lg px-2 py-2 text-[13px] text-white outline-none text-center"
                                        style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.1)' }}
                                    />
                                    <select
                                        value={row.per} onChange={e => updateRow(i, 'per', e.target.value)}
                                        className="rounded-lg px-2 py-2 text-[12px] text-white outline-none"
                                        style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        {perOptions.map(o => <option key={o}>{o}</option>)}
                                    </select>
                                    <select
                                        value={row.freq} onChange={e => updateRow(i, 'freq', e.target.value)}
                                        className="rounded-lg px-2 py-2 text-[11px] text-white outline-none"
                                        style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        {freqOptions.map(o => <option key={o}>{o}</option>)}
                                    </select>
                                    <button
                                        onClick={() => removeRow(i)}
                                        className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] transition-all duration-200"
                                        style={{ background: 'rgba(255,80,80,0.15)', color: '#ff6b6b' }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={addRow}
                            className="px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200"
                            style={{
                                background: 'rgba(59,38,111,0.3)',
                                border: '1px solid rgba(59,38,111,0.5)',
                                color: '#C0BFCC',
                            }}
                        >
                            + Add Condition
                        </button>

                        {/* referral */}
                        <div
                            className="mt-6 pt-5"
                            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            <p className="text-[13px] font-bold mb-1">First Time Customer</p>
                            <p className="text-[12px] mb-3" style={{ color: '#8A8A9A' }}>
                                Referral points offered to each new customer
                            </p>
                            <Label>Referral Points</Label>
                            <input
                                type="number" defaultValue="340"
                                className="w-full rounded-xl px-4 py-3 text-[14px] text-white outline-none"
                                style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.08)' }}
                            />
                            <p className="text-[11px] mt-2" style={{ color: '#555566' }}>
                                * YEME will double these points for your business for free
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — flyer preview */}
                    <div
                        className="p-6 flex flex-col"
                        style={{ background: '#3B266F', borderRadius: '0 0 16px 0' }}
                    >
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-1"
                            style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Flyer Preview
                        </p>
                        <p className="text-[18px] font-bold text-center text-white mt-4">YOUR BUSINESS</p>
                        <p className="text-[13px] font-bold text-center mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            PAY & EARN YOUR YEMS TODAY
                        </p>

                        <div className="flex flex-col gap-2 mb-6">
                            {conditions.map((row, i) => (
                                <div key={i} className="rounded-xl px-4 py-3 text-[13px] font-medium"
                                    style={{ background: 'white', color: '#3B266F' }}>
                                    {row.yems} YEM per {row.per} for {row.freq}
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-[13px] mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Refer a friend, and you both earn
                        </p>
                        <p className="text-center text-[20px] font-bold mb-6" style={{ color: '#FFD700' }}>
                            680 YEMs
                        </p>

                        {/* QR placeholder */}
                        <div
                            className="rounded-xl p-4 flex flex-col items-center mb-4"
                            style={{ background: 'rgba(255,255,255,0.1)' }}
                        >
                            <p className="text-[12px] font-bold mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                New To YEME? Scan Here!
                            </p>
                            <div
                                className="w-20 h-20 rounded-lg flex items-center justify-center"
                                style={{ background: 'white' }}
                            >
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <rect x="4" y="4" width="20" height="20" rx="2" fill="#3B266F" />
                                    <rect x="8" y="8" width="12" height="12" rx="1" fill="white" />
                                    <rect x="32" y="4" width="20" height="20" rx="2" fill="#3B266F" />
                                    <rect x="36" y="8" width="12" height="12" rx="1" fill="white" />
                                    <rect x="4" y="32" width="20" height="20" rx="2" fill="#3B266F" />
                                    <rect x="8" y="36" width="12" height="12" rx="1" fill="white" />
                                    <rect x="32" y="32" width="6" height="6" fill="#3B266F" />
                                    <rect x="42" y="32" width="6" height="6" fill="#3B266F" />
                                    <rect x="32" y="42" width="6" height="6" fill="#3B266F" />
                                    <rect x="42" y="42" width="6" height="6" fill="#3B266F" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mt-auto">
                            <p className="text-[15px] font-bold text-white">YEME</p>
                            <p className="text-[12px] font-bold text-right text-white leading-tight">
                                YOUR EXPENSES,<br />MADE EASY
                            </p>
                        </div>
                    </div>
                </div>

                {/* modal footer */}
                <div
                    className="flex items-center justify-between px-6 py-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <p className="text-[12px]" style={{ color: '#555566' }}>
                        Full dashboard available after onboarding is complete
                    </p>
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all duration-200"
                        style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── Loyalty options ────────────────────────────────────────
const loyaltyOptions = [
    {
        id: 'standard',
        title: 'Standard',
        rate: '1 YEM / $1',
        desc: '1 YEM per dollar spent at your venue',
    },
    {
        id: 'double',
        title: 'Double Rewards',
        rate: '2 YEMs / $1',
        desc: '2 YEMs per dollar — great for building loyalty fast',
    },
    {
        id: 'milestone',
        title: 'Milestone Rewards',
        rate: 'Bonus YEMs',
        desc: 'Bonus points after every 10th visit or set spend amount',
    },
    {
        id: 'custom',
        title: 'Custom Program',
        rate: 'Your choice',
        desc: 'Set your own conditions, earn rates, and referral bonuses',
        hasPreview: true,
    },
    {
        id: 'later',
        title: 'Set Up Later',
        rate: 'Skip for now',
        desc: 'Configure your loyalty program after onboarding in the vendor dashboard',
        muted: true,
    },
]

const initialForm = {
    businessName: '', abn: '', category: '', suburb: '',
    state: '', website: '', contactName: '', role: '',
    email: '', phone: '', loyaltyType: 'standard', notes: '',
}

// ── Main page ──────────────────────────────────────────────
export default function OnboardPage() {
    const [form, setForm] = useState(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [showCustomModal, setShowCustomModal] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleLoyaltySelect = id => {
        if (id === 'custom') {
            setShowCustomModal(true)
            return
        }
        setForm({ ...form, loyaltyType: id })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        // wire to Flask /api/vendors/apply later
        await new Promise(r => setTimeout(r, 900))
        setLoading(false)
        setSubmitted(true)
    }

    const steps = ['Business Info', 'Contact Details', 'Loyalty Setup']

    const step1Valid = form.businessName && form.abn && form.category && form.suburb && form.state
    const step2Valid = form.contactName && form.email && form.phone

    return (
        <>
            {/* custom program modal */}
            {showCustomModal && <CustomModal onClose={() => setShowCustomModal(false)} />}

            {/* ── HERO ───────────────────────────────────────────── */}
            <section className="relative pt-[130px] pb-10 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 50% 55% at 50% 0%, rgba(59,38,111,0.4) 0%, transparent 70%)' }}
                />
                <div className="max-w-[680px] mx-auto text-center relative z-10">
                    <Tag>Vendor Onboarding</Tag>
                    <h1 className="text-[clamp(32px,5vw,50px)] font-bold leading-[1.1] mb-4"
                        style={{ letterSpacing: '-1.5px' }}>
                        Bring YEME to your business
                    </h1>
                    <p className="text-[16px] leading-relaxed" style={{ color: '#8A8A9A' }}>
                        Fill in the details below. Our team reviews every application
                        personally and gets back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── FORM ───────────────────────────────────────────── */}
            <section className="px-6 pb-28">
                <div className="max-w-[720px] mx-auto">

                    {submitted ? (
                        <div className="rounded-2xl p-14 flex flex-col items-center text-center"
                            style={{ background: '#13111F', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                                style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M6 16L13 23L26 9" stroke="white" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Application received</h2>
                            <p className="text-[15px] leading-relaxed mb-8"
                                style={{ color: '#8A8A9A', maxWidth: '380px' }}>
                                Our team will review your application and reach out within
                                24 hours to schedule a quick onboarding call.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link href="/"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[14px] font-medium text-white"
                                    style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}>
                                    Back to Home
                                </Link>
                                <Link href="/for-vendors"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[14px] font-medium"
                                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl p-8 md:p-10"
                            style={{ background: '#13111F', border: '1px solid rgba(255,255,255,0.08)' }}>

                            {/* step indicator */}
                            <div className="flex items-center gap-0 mb-8">
                                {steps.map((s, i) => {
                                    const n = i + 1
                                    const done = step > n
                                    const active = step === n
                                    return (
                                        <div key={s} className="flex items-center flex-1 last:flex-none">
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300"
                                                    style={{
                                                        background: done ? '#49BFFF' : active ? '#3B266F' : 'rgba(255,255,255,0.07)',
                                                        border: active ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                                                        color: done || active ? '#fff' : '#8A8A9A',
                                                    }}>
                                                    {done ? (
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                        </svg>
                                                    ) : n}
                                                </div>
                                                <span className="text-[12px] font-medium hidden sm:block"
                                                    style={{ color: active ? '#fff' : '#8A8A9A' }}>
                                                    {s}
                                                </span>
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className="h-px flex-1 mx-3 transition-all duration-300"
                                                    style={{ background: step > n ? '#49BFFF' : 'rgba(255,255,255,0.08)' }} />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* ── STEP 1 ── */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Business Information</h2>
                                        <p className="text-[13.5px] mb-6" style={{ color: '#8A8A9A' }}>
                                            Tell us about your business so we can set up the right loyalty program.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div><Label>Business Name</Label>
                                                <Input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Acme Cafe" /></div>
                                            <div><Label>ABN</Label>
                                                <Input name="abn" value={form.abn} onChange={handleChange} placeholder="12 345 678 901" /></div>
                                        </div>
                                        <div className="mb-4">
                                            <Label>Business Category</Label>
                                            <Select name="category" value={form.category} onChange={handleChange}>
                                                <option value="" disabled>Select a category</option>
                                                {['Cafe / Coffee', 'Restaurant / Food', 'Retail', 'Health & Beauty', 'Gym & Fitness', 'Entertainment', 'Services', 'Other']
                                                    .map(o => <option key={o}>{o}</option>)}
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div><Label>Suburb</Label>
                                                <Input name="suburb" value={form.suburb} onChange={handleChange} placeholder="Fitzroy" /></div>
                                            <div><Label>State</Label>
                                                <Select name="state" value={form.state} onChange={handleChange}>
                                                    <option value="" disabled>Select</option>
                                                    {['VIC', 'NSW', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'].map(s => <option key={s}>{s}</option>)}
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <Label>Business Website (optional)</Label>
                                            <Input name="website" value={form.website} onChange={handleChange}
                                                placeholder="https://acmecafe.com.au" type="url" required={false} />
                                        </div>
                                        <button type="button" onClick={() => setStep(2)} disabled={!step1Valid}
                                            className="w-full py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                                            style={{
                                                background: step1Valid ? '#3B266F' : 'rgba(59,38,111,0.3)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                cursor: step1Valid ? 'pointer' : 'not-allowed',
                                            }}>
                                            Continue
                                        </button>
                                    </div>
                                )}

                                {/* ── STEP 2 ── */}
                                {step === 2 && (
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Contact Details</h2>
                                        <p className="text-[13.5px] mb-6" style={{ color: '#8A8A9A' }}>
                                            Who should we reach out to for the onboarding call?
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div><Label>Full Name</Label>
                                                <Input name="contactName" value={form.contactName} onChange={handleChange} placeholder="Jane Smith" /></div>
                                            <div><Label>Role</Label>
                                                <Input name="role" value={form.role} onChange={handleChange} placeholder="Owner / Manager" /></div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                            <div><Label>Email</Label>
                                                <Input name="email" value={form.email} onChange={handleChange}
                                                    placeholder="jane@acmecafe.com.au" type="email" /></div>
                                            <div><Label>Phone</Label>
                                                <Input name="phone" value={form.phone} onChange={handleChange}
                                                    placeholder="04XX XXX XXX" type="tel" /></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button type="button" onClick={() => setStep(1)}
                                                className="flex-1 py-4 rounded-xl text-[15px] font-medium transition-all duration-200"
                                                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
                                                Back
                                            </button>
                                            <button type="button" onClick={() => setStep(3)} disabled={!step2Valid}
                                                className="flex-[2] py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                                                style={{
                                                    background: step2Valid ? '#3B266F' : 'rgba(59,38,111,0.3)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    cursor: step2Valid ? 'pointer' : 'not-allowed',
                                                }}>
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* ── STEP 3 ── */}
                                {step === 3 && (
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Loyalty Program Setup</h2>
                                        <p className="text-[13.5px] mb-6" style={{ color: '#8A8A9A' }}>
                                            How would you like to reward your customers?
                                            You can change this any time in the vendor dashboard.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {loyaltyOptions.map(opt => {
                                                const isSelected = form.loyaltyType === opt.id
                                                return (
                                                    <button
                                                        key={opt.id}
                                                        type="button"
                                                        onClick={() => handleLoyaltySelect(opt.id)}
                                                        className="rounded-xl p-5 text-left transition-all duration-200 relative"
                                                        style={{
                                                            background: isSelected
                                                                ? opt.muted ? 'rgba(255,255,255,0.04)' : 'rgba(59,38,111,0.25)'
                                                                : 'rgba(255,255,255,0.03)',
                                                            border: isSelected
                                                                ? opt.muted ? '2px solid rgba(255,255,255,0.2)' : '2px solid #3B266F'
                                                                : '1px solid rgba(255,255,255,0.08)',
                                                        }}
                                                    >
                                                        {/* preview badge on custom */}
                                                        {opt.hasPreview && (
                                                            <span
                                                                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                                                                style={{ background: 'rgba(73,191,255,0.15)', color: '#49BFFF' }}
                                                            >
                                                                Preview
                                                            </span>
                                                        )}
                                                        {/* coming soon badge on later */}
                                                        {opt.muted && (
                                                            <span
                                                                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                                                                style={{ background: 'rgba(255,255,255,0.07)', color: '#8A8A9A' }}
                                                            >
                                                                Dashboard
                                                            </span>
                                                        )}
                                                        <p className="text-[13px] font-bold mb-0.5 pr-12"
                                                            style={{ color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                                                            {opt.title}
                                                        </p>
                                                        <p className="text-[12px] font-bold mb-2"
                                                            style={{ color: opt.muted ? '#8A8A9A' : '#49BFFF' }}>
                                                            {opt.rate}
                                                        </p>
                                                        <p className="text-[12px] leading-relaxed" style={{ color: '#8A8A9A' }}>
                                                            {opt.desc}
                                                        </p>
                                                    </button>
                                                )
                                            })}
                                        </div>

                                        <div className="mb-6">
                                            <Label>Anything else? (optional)</Label>
                                            <textarea
                                                name="notes" value={form.notes} onChange={handleChange}
                                                rows={4} placeholder="Tell us anything specific about your business..."
                                                className="w-full rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all duration-200 resize-none"
                                                style={{ background: '#1A1828', border: '1px solid rgba(255,255,255,0.08)' }}
                                                onFocus={e => e.target.style.borderColor = '#3B266F'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                            />
                                        </div>

                                        <div className="flex gap-3">
                                            <button type="button" onClick={() => setStep(2)}
                                                className="flex-1 py-4 rounded-xl text-[15px] font-medium transition-all duration-200"
                                                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
                                                Back
                                            </button>
                                            <button type="submit" disabled={loading}
                                                className="flex-[2] py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                                                style={{
                                                    background: loading ? 'rgba(59,38,111,0.4)' : '#3B266F',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    cursor: loading ? 'not-allowed' : 'pointer',
                                                }}>
                                                {loading ? 'Submitting...' : 'Submit Application'}
                                            </button>
                                        </div>

                                        <p className="text-center text-[12px] mt-4" style={{ color: '#555566' }}>
                                            By submitting you agree to our{' '}
                                            <Link href="#" style={{ color: '#8A8A9A' }}>Terms of Service</Link>{' '}and{' '}
                                            <Link href="#" style={{ color: '#8A8A9A' }}>Privacy Policy</Link>
                                        </p>
                                    </div>
                                )}

                            </form>
                        </div>
                    )}

                    {/* stat strip */}
                    {!submitted && (
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {[
                                { label: 'Response time', value: 'Within 24 hours' },
                                { label: 'Setup cost', value: 'Free to join' },
                                { label: 'Go live', value: 'Same day' },
                            ].map(({ label, value }) => (
                                <div key={label} className="rounded-xl p-4 text-center"
                                    style={{ background: '#13111F', border: '1px solid rgba(255,255,255,0.06)' }}>
                                    <p className="text-[11px] font-bold tracking-wider uppercase mb-1"
                                        style={{ color: '#8A8A9A' }}>{label}</p>
                                    <p className="text-[14px] font-bold" style={{ color: '#49BFFF' }}>{value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}