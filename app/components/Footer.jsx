"use client"
import Link from 'next/link'

export default function Footer() {
    return (<footer className="bg-[#111111] text-white/60">

        ```
        {/* Top Strip */}
        <div className="border-b border-white/10 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-wide text-white/40">
                {['Free Shipping All India', '55% Off Today', '7-Day Returns', '24/7 Support'].map((t, i) => (
                    <span key={t} className="flex items-center gap-2">
                        {i > 0 && <span className="text-[#C4956A] text-[7px]">✦</span>}
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-2">
                <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C4956A] hover:text-[#C4956A] transition">F</a>
                <a href="https://www.instagram.com/me_tusharpandit" target="_blank" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C4956A] hover:text-[#C4956A] transition">I</a>
                <a href="https://wa.me/919665782767" target="_blank" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C4956A] hover:text-[#C4956A] transition">W</a>
            </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 py-10">

            {/* Brand */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <img src="/ShriDham Logo.png" className="w-9" />
                    <h2 className="text-white text-lg font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Shridham <span className="text-[#C4956A]">·</span> Enterprises
                    </h2>
                </div>

                <p className="text-sm text-white/40 max-w-[260px] mb-4">
                    Stylish and durable wall decor sheets that transform any space.
                </p>
            </div>

            {/* Collections */}
            <div>
                <h3 className="text-xs uppercase tracking-widest text-white mb-4">Collections</h3>
                <div className="flex flex-col gap-2 text-sm">
                    <Link href="/Wall" className="hover:text-[#C4956A]">Wall Decor</Link>
                    <Link href="/Uv" className="hover:text-[#C4956A]">UV Marble Roll</Link>
                    <Link href="/new" className="hover:text-[#C4956A]">New Arrivals</Link>
                    <Link href="/Items" className="hover:text-[#C4956A]">All Products</Link>
                </div>
            </div>

            {/* Information */}
            <div>
                <h3 className="text-xs uppercase tracking-widest text-white mb-4">Information</h3>
                <div className="flex flex-col gap-2 text-sm">
                    <Link href="/aboutus" className="hover:text-[#C4956A]">About Us</Link>
                    <Link href="/privacy-policy" className="hover:text-[#C4956A]">Privacy Policy</Link>
                    <Link href="/return-policy" className="hover:text-[#C4956A]">Return Policy</Link>
                    <Link href="/shipping-policy" className="hover:text-[#C4956A]">Shipping Policy</Link>
                    <Link href="/terms" className="hover:text-[#C4956A]">Terms & Conditions</Link>
                </div>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-xs uppercase tracking-widest text-white mb-4">Contact</h3>
                <p className="text-sm text-white/50">+91 9665782767</p>
                <p className="text-sm text-white/50">tusharpandit2284@gmail.com</p>
                <p className="text-sm text-white/50 mt-2">
                    Satara, Maharashtra — 415002
                </p>
            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 px-4 sm:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">

            <span>© 2026 Shreedham Enterprises</span>

            <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
                <Link href="/return-policy" className="hover:text-white">Returns</Link>
                <Link href="/shipping-policy" className="hover:text-white">Shipping</Link>
                <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>

        </div>

    </footer>
)
}
