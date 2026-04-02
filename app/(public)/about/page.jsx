import Image from 'next/image'
import Link from 'next/link'

function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--purple)' }}>
            {children}
        </span>
    )
}

function ValueCard({ title, desc }) {
    return (
        <div
            className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--divider)',
            }}
        >
            <h3 className="text-[17px] font-bold mb-3" style={{ color: 'var(--fg)' }}>{title}</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--fg-2)' }}>{desc}</p>
        </div>
    )
}

function WhyCard({ title, desc }) {
    return (
        <div
            className="rounded-2xl p-7 flex gap-5 items-start transition-all duration-300 hover:-translate-y-1"
            style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--divider)',
            }}
        >
            <div
                className="w-2 h-2 rounded-full shrink-0 mt-2"
                style={{ background: 'var(--purple)' }}
            />
            <div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: 'var(--fg)' }}>{title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--fg-2)' }}>{desc}</p>
            </div>
        </div>
    )
}

export default function AboutPage() {
    return (
        <>

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative pt-[140px] pb-24 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 55% 60% at 50% 0%, rgba(59,38,111,0.18) 0%, transparent 70%)',
                    }}
                />
                <div className="max-w-[800px] mx-auto text-center relative z-10">
                    <Tag>Our Story</Tag>
                    <h1
                        className="text-[clamp(36px,5vw,58px)] font-bold leading-[1.1] mb-6"
                        style={{ letterSpacing: '-2px' }}
                    >
                        Welcome to YEME — Where
                        <span style={{ color: 'var(--purple)' }}> Innovation </span>
                        Meets Simplicity
                    </h1>
                    <p
                        className="text-[17px] leading-relaxed max-w-[580px] mx-auto"
                        style={{ color: 'var(--fg-2)' }}
                    >
                        We are passionate about revolutionising the way you manage your expenses,
                        making every transaction a rewarding experience.
                    </p>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid var(--divider)' }} />

            {/* ── MISSION ──────────────────────────────────────── */}
            <section className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">

                    {/* text */}
                    <div className="flex-1">
                        <Tag>Our Mission</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Empowering Smart Spending
                        </h2>
                        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--fg-2)' }}>
                            At YEME, we are on a mission to streamline expenses, simplify split payments,
                            manage loyalty programs, and enhance the overall user experience. We believe
                            in making financial management seamless, rewarding, and accessible to all.
                        </p>
                        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                            YEME is more than just a fintech solution — we are a community of innovators,
                            problem solvers, and finance enthusiasts dedicated to simplifying your
                            financial life. Our team brings together expertise in technology, finance,
                            and design to create solutions that meet your needs.
                        </p>
                    </div>

                    {/* mission statement block */}
                    <div className="flex-1">
                        <div
                            className="rounded-2xl p-10 relative overflow-hidden"
                            style={{
                                background: 'rgba(59,38,111,0.12)',
                                border: '1px solid rgba(59,38,111,0.35)',
                            }}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(ellipse 80% 80% at 0% 100%, rgba(59,38,111,0.08), transparent)',
                                }}
                            />
                            <p
                                className="text-[20px] leading-relaxed font-medium relative z-10"
                                style={{ color: 'var(--fg)', letterSpacing: '-0.3px' }}
                            >
                                "At YEME, we are on a mission to make every dollar you spend{' '}
                                <span style={{ color: 'var(--purple)', fontFamily: 'YemeBold, sans-serif' }}>
                                    work harder for you.
                                </span>{' '}
                                Loyalty should be effortless, payments should be seamless, and splitting
                                the bill should never cause an argument."
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid var(--divider)' }} />

            {/* ── WHY CHOOSE YEME ──────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-14">
                        <Tag>Why Choose YEME</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Everything you need, nothing you don't
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <WhyCard
                            title="Holistic Financial Management"
                            desc="Beyond just expense tracking, we provide tools that help you understand your financial health and make smarter decisions every day."
                        />
                        <WhyCard
                            title="Collaborative Spending"
                            desc="Whether it's a group dinner or a shared trip, our smart payment solutions make collaboration easy and efficient for everyone involved."
                        />
                        <WhyCard
                            title="Maximised Rewards"
                            desc="Our advanced loyalty program management allows you to track and redeem rewards seamlessly, making every transaction genuinely valuable."
                        />
                        <WhyCard
                            title="Insight-Driven Decisions"
                            desc="We provide actionable insights to help you make informed financial choices based on your real spending habits and patterns."
                        />
                        <WhyCard
                            title="Customisable Experience"
                            desc="Our platform is designed to adapt to your unique financial goals, ensuring a personalised journey that fits your lifestyle."
                        />
                        <WhyCard
                            title="User-Friendly Interface"
                            desc="Navigate with ease through a sleek, user-centric design that makes managing finances straightforward and genuinely enjoyable."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid var(--divider)' }} />

            {/* ── CORE VALUES ──────────────────────────────────── */}
            <section className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-14">
                        <Tag>Core Values</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ letterSpacing: '-1px' }}
                        >
                            What drives everything we do
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ValueCard
                            title="Simplicity"
                            desc="We provide an intuitive, user-friendly platform designed to simplify your financial management, making it easy for anyone to track and control their expenses."
                        />
                        <ValueCard
                            title="Innovation"
                            desc="Our platform continuously evolves with cutting-edge features to ensure you are always equipped with the latest tools to stay financially empowered."
                        />
                        <ValueCard
                            title="Community"
                            desc="We foster a supportive community that promotes financial literacy, helping you connect with others and share valuable insights to grow together."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid var(--divider)' }} />

            {/* ── APP PREVIEW ──────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/images/home_main.png"
                            alt="YEME app screens"
                            width={520}
                            height={460}
                            className="object-contain w-full max-w-[520px]"
                        />
                    </div>
                    <div className="flex-1">
                        <Tag>The Platform</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Experience the Future of Financial Management
                        </h2>
                        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--fg-2)' }}>
                            With YEME, you are not just a user — you are part of a community embracing
                            a new era of financial management. Our platform is designed to empower you,
                            offering features that address common challenges and enhance your financial journey.
                        </p>
                        <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--fg-2)' }}>
                            From unified payments to smart loyalty tracking and effortless group splits,
                            YEME brings it all together in one sleek, intelligent app.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/onboard"
                                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                                style={{ background: '#3B266F' }}
                            >
                                Join as a Vendor
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--divider)',
                                    color: 'var(--fg-2)',
                                }}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ───────────────────────────────────── */}
            <section className="py-24 px-6 text-center" style={{ background: 'var(--bg-2)' }}>
                <div className="max-w-[640px] mx-auto">
                    <Tag>Join the Journey</Tag>
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                        style={{ letterSpacing: '-1px' }}
                    >
                        Be part of the YEME experience
                    </h2>
                    <p className="text-[15px] leading-relaxed mb-10" style={{ color: 'var(--fg-2)' }}>
                        Whether you are a user excited about YEME's potential or a vendor seeking
                        collaboration, we invite you to be part of this journey. Your support,
                        insights, and feedback are essential as we continue to innovate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://hbej2cz8ju8.typeform.com/to/HeS8ND07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
                            style={{
                                background: 'var(--purple-dim)',
                                border: '1px solid rgba(59,38,111,0.25)',
                                color: 'var(--purple)',
                            }}
                        >
                            Survey for Users
                        </a>
                        <a
                            href="https://hbej2cz8ju8.typeform.com/to/n0aRjNH1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                            style={{ background: '#3B266F' }}
                        >
                            Survey for Vendors
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}