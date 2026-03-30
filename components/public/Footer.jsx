import Link from 'next/link'
import Image from 'next/image'

const productLinks = [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'YEM Rewards', href: '/#yems' },
    { label: 'Download App', href: '#' },
]

const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'For Vendors', href: '/for-vendors' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
]

const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Legal Disclaimer', href: '#' },
]

export default function Footer() {
    return (
        <footer
            className="border-t"
            style={{
                backgroundColor: '#13111F',
                borderColor: 'rgba(255,255,255,0.08)',
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-5">
                            {/* White background pill so the purple logo reads on dark footer */}
                            <div
                                className="flex items-center px-4 py-2.5"
                                style={{
                                    borderRadius: '12px',
                                    background: 'white',
                                    display: 'inline-flex',
                                }}
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="YEME"
                                    width={88}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8A9A', maxWidth: '240px' }}>
                            Unifying payments, loyalty, and group expenses for Australia. Earn more from every dollar you spend.
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: '#555566' }}>
                            In collaboration with{' '}
                            <span style={{ color: '#8A8A9A' }}>Swinburne University of Technology</span>
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: '#C0BFCC' }}>
                            Product
                        </p>
                        <ul className="flex flex-col gap-3">
                            {productLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-[13.5px] transition-colors duration-200 hover:text-white"
                                        style={{ color: '#8A8A9A' }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: '#C0BFCC' }}>
                            Company
                        </p>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-[13.5px] transition-colors duration-200 hover:text-white"
                                        style={{ color: '#8A8A9A' }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: '#C0BFCC' }}>
                            Legal
                        </p>
                        <ul className="flex flex-col gap-3">
                            {legalLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-[13.5px] transition-colors duration-200 hover:text-white"
                                        style={{ color: '#8A8A9A' }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t mb-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

                {/* Legal disclaimer */}
                <p className="text-[11px] leading-relaxed mb-6" style={{ color: '#444455' }}>
                    All product names, logos, and brands used within our application, prototype, website, and all other channels
                    are property of their respective owners. These trademarks, logos, and brand names are used solely for
                    identification and informational purposes to demonstrate the functionality of our prototype application.
                    Use of these trademarks does not imply endorsement, sponsorship, or affiliation. Our application is in a
                    prototype stage. If you are the owner of any logo or brand used and have concerns, please contact us at{' '}
                    <a href="mailto:info@yeme.com.au" style={{ color: '#49BFFF' }}>info@yeme.com.au</a>.
                </p>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-[12.5px]" style={{ color: '#8A8A9A' }}>
                        © 2025 YEME. All rights reserved. Melbourne, Australia.
                    </p>
                    <a
                        href="mailto:info@yeme.com.au"
                        className="text-[12.5px] transition-colors duration-200 hover:text-white"
                        style={{ color: '#49BFFF' }}
                    >
                        info@yeme.com.au
                    </a>
                </div>

            </div>
        </footer>
    )
}