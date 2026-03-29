import Image from 'next/image'
import Link from 'next/link'

// ── Section tag ───────────────────────────────────────────
function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ color: '#49BFFF' }}>
            {children}
        </span>
    )
}

// ── Feature row (alternating image + text) ────────────────
function FeatureRow({ tag, title, points, image, imageAlt, reverse = false }) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
            <div className="flex-1">
                <Tag>{tag}</Tag>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
                    {title}
                </h2>
                <ul className="flex flex-col gap-3">
                    {points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#49BFFF' }} />
                            <span className="text-[15px] leading-relaxed" style={{ color: '#8A8A9A' }}>{p}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 flex justify-center">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={480}
                    height={420}
                    className="object-contain w-full max-w-[480px]"
                />
            </div>
        </div>
    )
}

// ── YEM reward card ───────────────────────────────────────
function YemCard({ title, desc }) {
    return (
        <div className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: '#13111F', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 className="text-[15px] font-bold mb-2">{title}</h4>
            <p className="text-[13.5px] leading-relaxed" style={{ color: '#8A8A9A' }}>{desc}</p>
        </div>
    )
}

// ── Main ──────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center pt-[68px] overflow-hidden px-6">

                {/* background glows */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(59,38,111,0.35) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(73,191,255,0.08) 0%, transparent 60%)' }} />

                <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 py-20">

                    {/* left */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-7"
                            style={{
                                backgroundColor: 'rgba(73,191,255,0.12)',
                                border: '1px solid rgba(73,191,255,0.25)',
                                color: '#49BFFF',
                            }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#49BFFF' }} />
                            Now in Australia
                        </div>

                        <h1 className="text-[clamp(40px,5vw,62px)] font-bold leading-[1.1] mb-6"
                            style={{ letterSpacing: '-2px' }}>
                            Lost in the Maze of<br />
                            <span style={{ color: '#49BFFF' }}>Tracking Expenses?</span>
                        </h1>

                        <p className="text-[17px] leading-relaxed mb-8 max-w-[480px]" style={{ color: '#8A8A9A' }}>
                            Seamlessly navigate expenses, rewards, and group payments with YEME.
                            Unlock limitless rewards — your gateway to smarter spending.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/onboard" className="btn-primary text-[15px] px-7 py-3.5">
                                Join as a Vendor
                            </Link>
                            <Link href="/about" className="btn-secondary text-[15px] px-7 py-3.5">
                                Learn More
                            </Link>
                        </div>

                        {/* stats */}
                        <div className="flex gap-10 mt-12">
                            {[
                                { num: '1K+', label: 'Waitlist users' },
                                { num: '50+', label: 'Vendor partners' },
                                { num: '$0', label: 'Monthly fees' },
                            ].map(({ num, label }) => (
                                <div key={label}>
                                    <p className="text-2xl font-bold" style={{ fontFamily: 'YemeBold, sans-serif' }}>
                                        {num.split(/([K+$])/).map((part, i) => 
                                            /[K+$]/.test(part) ? <span key={i} style={{ color: '#49BFFF' }}>{part}</span> : part
                                        )}
                                    </p>
                                    <p className="text-[12px] mt-1" style={{ color: '#8A8A9A' }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* right — hero image */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/home_main.png"
                            alt="YEME app overview"
                            width={560}
                            height={480}
                            priority
                            className="object-contain w-full max-w-[560px]"
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── FEATURES ─────────────────────────────────────── */}
            <section id="features" className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-24">

                    <FeatureRow
                        tag="Unified Wallet"
                        title="Wallet Overflowing? Centralise all your cards for convenient, unified payments."
                        points={[
                            'Centralise various cards for unified and convenient payments.',
                            'Seamlessly manage business, savings, and credit cards in one app.',
                            "Enjoy clutter-free transactions with YEME's unified wallet.",
                        ]}
                        image="/images/home_2.png"
                        imageAlt="YEME unified wallet screen"
                    />

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                    <FeatureRow
                        tag="Loyalty Programs"
                        title="Lost in Loyalty Programs? Effortlessly manage and track multiple loyalty programs in one place."
                        points={[
                            'Easily centralise and manage multiple loyalty programs.',
                            'Effortlessly track rewards and streamline redemptions.',
                            "Never miss out on benefits with YEME's organised loyalty hub.",
                        ]}
                        image="/images/home_3.png"
                        imageAlt="YEME loyalty programs screen"
                        reverse
                    />

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                    <FeatureRow
                        tag="Gift Cards"
                        title="Gift Cards Lost in the Shuffle? Keep all your gift cards in one organised hub."
                        points={[
                            'No more shuffling — let YEME scan your cards as you pay at the terminal.',
                            'Keep all your gift cards in one organised hub, never miss a redemption.',
                            'Organise and access all your gift cards in one place.',
                        ]}
                        image="/images/home_4.png"
                        imageAlt="YEME gift card screen"
                    />

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                    <FeatureRow
                        tag="Split Payments"
                        title="Split Payment a Headache? Simplify group expenses with hassle-free split payment features."
                        points={[
                            'Split payments at the terminal, or later. Split as you need.',
                            'And, split your reward points as well.',
                            'Manage shared bills and avoid the hassle of chasing payments.',
                        ]}
                        image="/images/home_5.png"
                        imageAlt="YEME split payment screen"
                        reverse
                    />

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                    <FeatureRow
                        tag="Group Expenses"
                        title="Tracking Group Expenses a Challenge? Streamline with a user-friendly interface."
                        points={[
                            'Monitor and manage group expenses with ease.',
                            'Pre-select different payment methods for specific groups.',
                            'View expenses for each group separately. No more skimming through unrelated transactions.',
                        ]}
                        image="/images/home_7.png"
                        imageAlt="YEME group expenses screen"
                    />

                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── HOW IT WORKS ─────────────────────────────────── */}
            <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: '#13111F' }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <Tag>How It Works</Tag>
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ letterSpacing: '-1px' }}>
                            Up and running in minutes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { num: '1', title: 'Create your account', desc: 'Sign up with your email in under 60 seconds. No credit check, no forms.' },
                            { num: '2', title: 'Link your card', desc: 'Connect your existing debit or credit card securely via Stripe. Takes 30 seconds.' },
                            { num: '3', title: 'Get your YEME card', desc: 'A virtual YEME card is created instantly. Add it to Apple Pay or Google Pay.' },
                            { num: '4', title: 'Tap and earn', desc: 'Pay at any terminal. YEMs land in your account automatically with every purchase.' },
                        ].map(({ num, title, desc }) => (
                            <div key={num} className="rounded-2xl p-8 text-center relative"
                                style={{ backgroundColor: '#1A1828', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-5"
                                    style={{ backgroundColor: '#3B266F' }}>
                                    {num}
                                </div>
                                <h3 className="text-[15px] font-bold mb-3">{title}</h3>
                                <p className="text-[13px] leading-relaxed" style={{ color: '#8A8A9A' }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── LOYALTY PROGRAMS ─────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <Tag>One-Click Sign Up</Tag>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
                            Join Loyalty Programs: Complicated? Not anymore.
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {[
                                'Simplify the process with one-click sign-ups for loyalty programs.',
                                'Easily become a member of various programs with YEME.',
                                'Effortlessly manage and track all your loyalty memberships in one place.',
                            ].map((p, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#49BFFF' }} />
                                    <span className="text-[15px] leading-relaxed" style={{ color: '#8A8A9A' }}>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/images/home-3.png"
                            alt="YEME loyalty program discovery"
                            width={480}
                            height={420}
                            className="object-contain w-full max-w-[480px]"
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── YEMs SECTION ─────────────────────────────────── */}
            <section id="yems" className="py-24 px-6" style={{ backgroundColor: '#13111F' }}>
                <div className="max-w-[1200px] mx-auto">

                    <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
                        <div className="flex-1">
                            <Tag>Revolutionise Rewards</Tag>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-1px' }}>
                                YEMs: Unlock a World of Rewards
                            </h2>
                            <p className="text-[16px] leading-relaxed mb-6" style={{ color: '#8A8A9A' }}>
                                Explore the YEME Gift Card Store for instant gratification.
                                Accumulate in-app points (YEMs) with every transaction,
                                opening a world of possibilities.
                            </p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    'Experience an additional layer of rewards with YEME\'s in-app points.',
                                    'Show loyalty, frequent places you like, and accumulate YEMs with every transaction.',
                                    'Use these YEMs for a world of rewarding possibilities in our Gift Card Store.',
                                ].map((p, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#49BFFF' }} />
                                        <span className="text-[15px] leading-relaxed" style={{ color: '#8A8A9A' }}>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/images/home_main.png"
                                alt="YEME rewards overview"
                                width={500}
                                height={440}
                                className="object-contain w-full max-w-[500px]"
                            />
                        </div>
                    </div>

                    {/* YEM cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        <YemCard
                            title="YEMs Exclusive"
                            desc="Separate from loyalty benefits, YEMs provide an additional layer of perks. Earn more, spend the same."
                        />
                        <YemCard
                            title="Diverse Choices"
                            desc="Choose from a vast array of gift cards for your favourite brands. From tech to fashion, the Gift Card Store caters to all tastes."
                        />
                        <YemCard
                            title="Every Purchase Counts"
                            desc="Make every purchase rewarding by earning YEMs with every transaction."
                        />
                        <YemCard
                            title="Seamless Redemption"
                            desc="Effortlessly redeem YEMs for real-world rewards whenever you are ready."
                        />
                        <YemCard
                            title="Instant Gratification"
                            desc="Enjoy instant access to your chosen gift cards as soon as you redeem."
                        />
                        <YemCard
                            title="Tailored Rewards"
                            desc="Select gift cards that align with your preferences and lifestyle."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── SURVEY STRIP ─────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(59,38,111,0.2) 0%, rgba(73,191,255,0.08) 100%)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
                                Share Your Insights with YEME
                            </h2>
                            <p className="text-[15px] leading-relaxed max-w-[540px]" style={{ color: '#8A8A9A' }}>
                                We invite you to be a part of shaping YEME's journey. Whether you're a potential user
                                or a vendor interested in collaboration, your opinions matter. Take a moment to share
                                your insights and help us mould this app.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <a
                                href="https://hbej2cz8ju8.typeform.com/to/HeS8ND07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                                style={{
                                    backgroundColor: 'rgba(73,191,255,0.12)',
                                    border: '1px solid rgba(73,191,255,0.25)',
                                    color: '#49BFFF',
                                }}
                            >
                                Survey for Users
                            </a>
                            <a
                                href="https://hbej2cz8ju8.typeform.com/to/n0aRjNH1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200"
                                style={{ backgroundColor: '#3B266F' }}
                            >
                                Survey for Vendors
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BOTTOM ───────────────────────────────────── */}
            <section className="py-24 px-6 text-center" style={{ backgroundColor: '#13111F' }}>
                <div className="max-w-[700px] mx-auto">
                    <Tag>Unlock YEME's Potential Today</Tag>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
                        Elevate your journey with YEME
                    </h2>
                    <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#8A8A9A' }}>
                        Where seamless transactions meet boundless rewards. Join us in revolutionising
                        the way you navigate payments, rewards, and group expenses.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/onboard" className="btn-primary text-[15px] px-8 py-4">
                            Join as a Vendor
                        </Link>
                        <Link href="/contact" className="btn-secondary text-[15px] px-8 py-4">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}