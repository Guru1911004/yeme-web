'use client'

import Image from 'next/image'
import Link from 'next/link'

function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ color: '#49BFFF' }}>
            {children}
        </span>
    )
}

function BenefitCard({ title, desc }) {
    return (
        <div
            className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
                background: '#13111F',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <div
                className="w-1.5 h-1.5 rounded-full mb-5"
                style={{ background: '#49BFFF' }}
            />
            <h3 className="text-[16px] font-bold mb-3">{title}</h3>
            <p className="text-[13.5px] leading-relaxed" style={{ color: '#8A8A9A' }}>{desc}</p>
        </div>
    )
}

function HowCard({ num, title, desc }) {
    return (
        <div
            className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
                background: '#13111F',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 shrink-0"
                style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}
            >
                {num}
            </div>
            <h3 className="text-[15px] font-bold mb-3">{title}</h3>
            <p className="text-[13.5px] leading-relaxed" style={{ color: '#8A8A9A' }}>{desc}</p>
        </div>
    )
}

export default function ForVendorsPage() {
    return (
        <>

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative pt-[140px] pb-24 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 60% 65% at 60% 0%, rgba(59,38,111,0.45) 0%, transparent 70%)',
                    }}
                />
                <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <Tag>For Vendors</Tag>
                        <h1
                            className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] mb-6"
                            style={{ letterSpacing: '-2px' }}
                        >
                            Ready to Supercharge Your{' '}
                            <span style={{ color: '#49BFFF' }}>Repeat Business?</span>
                        </h1>
                        <p
                            className="text-[17px] leading-relaxed mb-8 max-w-[520px]"
                            style={{ color: '#8A8A9A' }}
                        >
                            Discover a new era in customer engagement. Partner with YEME to
                            effortlessly integrate loyalty programs into your business. Break free
                            from the complexities of setting up your own loyalty system and embrace
                            a streamlined, all-in-one solution.
                        </p>
                        <Link
                            href="/onboard"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                            style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#4e318f'}
                            onMouseLeave={e => e.currentTarget.style.background = '#3B266F'}
                        >
                            Get Started — It's Free
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/images/home_main.png"
                            alt="YEME vendor app"
                            width={520}
                            height={460}
                            className="object-contain w-full max-w-[520px]"
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── WHY YEME FOR LOYALTY ─────────────────────────── */}
            <section className="py-24 px-6" style={{ background: '#13111F' }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-14">
                        <Tag>Why YEME</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Why YEME for Loyalty Programs?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BenefitCard
                            title="Increase Repeat Business"
                            desc="YEME's loyalty program is specifically designed to drive repeat business by rewarding customers with cumulative points for their purchases, creating a cycle of increased patronage and more rewards."
                        />
                        <BenefitCard
                            title="Unified Rewards System"
                            desc="Join YEME to access a universal rewards system, ensuring your customers earn and redeem seamlessly across various businesses in our growing network. No need to set up your own independent system."
                        />
                        <BenefitCard
                            title="Split Expenses at No Cost to You"
                            desc="Enable your customers to effortlessly split purchases with others, avoiding multiple transaction fees. Multiple splits for them, a single transaction for you."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── WHAT YEME OFFERS ─────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-14">
                        <Tag>What We Offer</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            What YEME Offers Vendors
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BenefitCard
                            title="Efficient Gift Card Marketplace"
                            desc="Create and showcase your brand in our exclusive gift card marketplace. Increase your brand exposure and attract a broader audience without the complexity of managing your own gift card platform."
                        />
                        <BenefitCard
                            title="Marketing Opportunities"
                            desc="Leverage our platform to market your brand and attract new customers seamlessly. Attract customers with easy ready-to-print loyalty flyers and send them via platforms of your choosing."
                        />
                        <BenefitCard
                            title="Effortless Onboarding"
                            desc="Effortlessly integrate a loyalty program with YEME's streamlined sign-up process. Partner with YEME for a seamless collaboration and instantly implement loyalty perks into your business."
                        />
                        <BenefitCard
                            title="Acquire New Customers"
                            desc="Attract new customers and boost engagement by offering extra points for referrals, effectively doubling rewards and encouraging word-of-mouth promotion."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── HOW IT WORKS ─────────────────────────────────── */}
            <section className="py-24 px-6" style={{ background: '#13111F' }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-14">
                        <Tag>How It Works</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Simple from day one
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <HowCard
                            num="1"
                            title="Customisable Solutions"
                            desc="When vendors purchase YEMs from YEME, they can distribute them to customers as they see fit. Customise YEME to fit your brand's unique needs with a flexible, tailored loyalty solution and minimal setup."
                        />
                        <HowCard
                            num="2"
                            title="Explore Effortless Integration"
                            desc="Discover how YEME transforms customer loyalty with our streamlined integration. Say goodbye to the complexities of setting up your own program and start rewarding your customers from day one."
                        />
                        <HowCard
                            num="3"
                            title="Grow Together"
                            desc="Increasing the YEMs offered enhances your chances of driving repeat business and fostering stronger customer loyalty. The more you reward, the more customers keep coming back."
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── APP SCREENSHOTS ──────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <Tag>The Experience</Tag>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                            style={{ letterSpacing: '-1px' }}
                        >
                            Your customers already have the app
                        </h2>
                        <p
                            className="text-[15px] leading-relaxed mb-5"
                            style={{ color: '#8A8A9A' }}
                        >
                            YEME gives your business a built-in loyalty program without the setup cost,
                            the card stock, or the complexity. When your customers pay with YEME,
                            their points are tracked automatically — no stamps, no separate apps,
                            no friction.
                        </p>
                        <p
                            className="text-[15px] leading-relaxed mb-8"
                            style={{ color: '#8A8A9A' }}
                        >
                            Every transaction through YEME is a chance to bring a customer back.
                            Set your own earn rate, run promotions, and watch your loyal customer
                            base grow.
                        </p>
                        <Link
                            href="/onboard"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200"
                            style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}
                        >
                            Apply Now
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/images/home_7.png"
                            alt="YEME rewards screen"
                            width={480}
                            height={420}
                            className="object-contain w-full max-w-[480px]"
                        />
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

            {/* ── EARLY ACCESS STRIP ───────────────────────────── */}
            <section className="py-24 px-6" style={{ background: '#13111F' }}>
                <div className="max-w-[1200px] mx-auto">
                    <div
                        className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(59,38,111,0.25) 0%, rgba(73,191,255,0.06) 100%)',
                            border: '1px solid rgba(59,38,111,0.4)',
                        }}
                    >
                        <div className="max-w-[560px]">
                            <Tag>Sign Up Now</Tag>
                            <h2
                                className="text-2xl md:text-3xl font-bold mb-4"
                                style={{ letterSpacing: '-0.5px' }}
                            >
                                Join YEME and redefine how your business approaches loyalty
                            </h2>
                            <p
                                className="text-[15px] leading-relaxed"
                                style={{ color: '#8A8A9A' }}
                            >
                                It is not just integration — it is a partnership for unparalleled
                                customer engagement. Vendors who onboard during our prototype phase
                                get early access benefits and are featured prominently in the app at launch.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0">
                            <Link
                                href="/onboard"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-200 text-center"
                                style={{ background: '#3B266F', border: '1px solid rgba(255,255,255,0.15)' }}
                            >
                                Apply as a Vendor
                            </Link>
                            <a
                                href="mailto:info@yeme.com.au"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[14px] font-medium transition-all duration-200 text-center"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.6)',
                                }}
                            >
                                info@yeme.com.au
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}