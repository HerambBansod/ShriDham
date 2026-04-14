"use client"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer style={{ background: '#111111', color: 'rgba(255,255,255,0.6)' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                .f-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: rgba(255,255,255,0.5);
                    text-decoration: none;
                    transition: color 0.2s;
                    display: inline-block;
                }
                .f-link:hover { color: #C4956A; }

                .f-label {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: white;
                    font-weight: 500;
                    margin-bottom: 16px;
                    display: block;
                }

                .contact-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    margin-bottom: 10px;
                }
                .contact-icon {
                    width: 28px; height: 28px;
                    border: 1px solid rgba(255,255,255,0.1);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .contact-text {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: rgba(255,255,255,0.55);
                    line-height: 1.6;
                }
                .contact-text a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
                .contact-text a:hover { color: #C4956A; }

                .pay-pill {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px 9px;
                    border: 1px solid rgba(255,255,255,0.1);
                    font-family: 'DM Sans', sans-serif;
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    color: rgba(255,255,255,0.5);
                    gap: 4px;
                    transition: border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .pay-pill:hover { border-color: #C4956A; color: rgba(255,255,255,0.85); }
                .pay-pill.cod { border-color: rgba(196,149,106,0.5); color: #C4956A; }

                .social-btn {
                    width: 32px; height: 32px;
                    border: 1px solid rgba(255,255,255,0.12);
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.45);
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px; font-weight: 500;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s;
                    cursor: pointer;
                }
                .social-btn:hover { border-color: #C4956A; color: #C4956A; }

                .bottom-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px;
                    color: rgba(255,255,255,0.3);
                    text-decoration: none;
                    transition: color 0.2s;
                    white-space: nowrap;
                }
                .bottom-link:hover { color: rgba(255,255,255,0.6); }

                .divider { border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 0; }

                /* Top strip */
                .top-strip {
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    padding: 12px clamp(16px, 4vw, 48px);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .top-badges {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .top-badge {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.35);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    white-space: nowrap;
                }

                /* Main footer grid */
                .footer-main {
                    padding: clamp(32px, 6vw, 64px) clamp(16px, 4vw, 48px);
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1.4fr;
                    gap: clamp(20px, 4vw, 48px);
                }

                /* Payment row */
                .payment-row {
                    padding: clamp(14px, 3vw, 28px) clamp(16px, 4vw, 48px);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .pay-pills-wrap {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                /* Bottom bar */
                .bottom-bar {
                    padding: clamp(12px, 2vw, 20px) clamp(16px, 4vw, 48px);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                /* Tablet */
                @media (max-width: 900px) {
                    .footer-main { grid-template-columns: 1fr 1fr; }
                }

                /* Mobile */
                @media (max-width: 600px) {
                    .footer-main { grid-template-columns: 1fr; gap: 28px; }
                    .top-badges { gap: 10px; }
                    .top-badge { font-size: 9px; }
                    .bottom-bar { flex-direction: column; align-items: flex-start; gap: 10px; }
                    .bottom-links-row { flex-wrap: wrap; gap: 10px !important; }
                }

                /* iPhone mini */
                @media (max-width: 375px) {
                    .top-badge { font-size: 8px; }
                }
            `}</style>

            {/* Top Strip */}
            <div className="top-strip">
                <div className="top-badges">
                    {['Free Shipping All India', '55% Off Today', '7-Day Returns', '24/7 Support'].map((t, i) => (
                        <span key={t} className="top-badge">
                            {i > 0 && <span style={{ color: '#C4956A', fontSize: '7px' }}>✦</span>}
                            {t}
                        </span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {/* Facebook */}
                    <a href="#" className="social-btn" aria-label="Facebook">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/me_tusharpandit" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </a>
                    {/* WhatsApp */}
                    <a href="https://wa.me/919665782767" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.054 23.25a.75.75 0 0 0 .922.922l5.389-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.211-1.433l-.374-.22-3.862 1.059 1.059-3.862-.22-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">

                {/* Brand */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <img src="/ShriDham Logo.png" alt="Logo" style={{ width: '36px', height: 'auto', objectFit: 'contain' }} />
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 300, color: 'white', lineHeight: 1 }}>
                            Shridham<span style={{ color: '#C4956A', margin: '0 6px' }}>·</span>
                            <em>Enterprises</em>
                        </div>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', maxWidth: '260px', marginBottom: '24px' }}>
                        Stylish and durable wall decor sheets that transform any space. Premium quality, easy application, lasting elegance.
                    </p>
                    {/* Newsletter */}
                    <div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Get exclusive deals</div>
                        <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '280px' }}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                style={{ flex: 1, background: 'transparent', border: 'none', padding: '10px 12px', color: 'white', fontSize: '12px', fontFamily: "'DM Sans', sans-serif", outline: 'none', minWidth: 0 }}
                            />
                            <button style={{ background: '#C4956A', color: 'white', border: 'none', padding: '10px 14px', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Collections */}
                <div>
                    <span className="f-label">Collections</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            { label: 'Wall Decor', href: '/Wall' },
                            { label: 'UV Marble Roll', href: '/Uv' },
                            { label: 'New Arrivals', href: '/new' },
                            { label: 'All Products', href: '/Items' },
                        ].map(({ label, href }) => (
                            <Link key={label} href={href} className="f-link">{label}</Link>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div>
                    <span className="f-label">Information</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {['About Us', 'Privacy Policy', 'Return Policy', 'Shipping Policy', 'Terms & Conditions'].map(l => (
                            <a key={l} href="#" className="f-link">{l}</a>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <span className="f-label">Contact Us</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="rgba(196,149,106,0.8)" strokeWidth="1.5">
                                    <path d="M2 2h4l1.5 3.5-2 1.2a10 10 0 0 0 3.8 3.8l1.2-2L14 10v4a1 1 0 0 1-1 1C6 15 1 10 1 3a1 1 0 0 1 1-1z" />
                                </svg>
                            </div>
                            <div className="contact-text"><a href="tel:+919665782767">+91 - 9665782767</a></div>
                        </div>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(196,149,106,0.8)" strokeWidth="1.5">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </div>
                            <div className="contact-text">WhatsApp: <a href="https://wa.me/919665782767">+91 - 9665782767</a></div>
                        </div>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="rgba(196,149,106,0.8)" strokeWidth="1.5">
                                    <rect x="1" y="3" width="14" height="10" rx="1" /><path d="M1 3l7 6 7-6" />
                                </svg>
                            </div>
                            <div className="contact-text"><a href="mailto:tusharpandit2284@gmail.com">tusharpandit2284@gmail.com</a></div>
                        </div>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(196,149,106,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="rgba(196,149,106,0.8)" stroke="none" />
                                </svg>
                            </div>
                            <div className="contact-text">
                                <a href="https://www.instagram.com/me_tusharpandit" target="_blank" rel="noopener noreferrer">@me_tusharpandit</a>
                            </div>
                        </div>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="rgba(196,149,106,0.8)" strokeWidth="1.5">
                                    <path d="M8 1a5 5 0 0 1 5 5c0 4-5 9-5 9S3 10 3 6a5 5 0 0 1 5-5z" /><circle cx="8" cy="6" r="1.5" />
                                </svg>
                            </div>
                            <div className="contact-text">
                                13A Malhar Peth Road, Near Police<br />Headquarters, Satara,<br />Maharashtra — 415002
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4A7A5A', flexShrink: 0 }} />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                                Customer Support: 24/7
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* Payment */}
            <div className="payment-row">
                <div className="pay-pills-wrap">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginRight: '2px' }}>We Accept</span>
                    {[
                        { label: 'COD', isCod: true }, { label: 'UPI' }, { label: 'Visa' },
                        { label: 'MC' }, { label: 'RuPay' }, { label: 'GPay' },
                        { label: 'PhonePe' }, { label: 'Paytm' }, { label: 'NB' }, { label: 'EMI' },
                    ].map(({ label, isCod }) => (
                        <div key={label} className={`pay-pill${isCod ? ' cod' : ''}`}>
                            {isCod && (
                                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="2" width="10" height="8" rx="1" /><path d="M4 6h4M6 4v4" />
                                </svg>
                            )}
                            {label}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
                        <rect x="2" y="6" width="10" height="7" rx="1" /><path d="M4 6V4a3 3 0 0 1 6 0v2" />
                    </svg>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.25)' }}>SSL Secured</span>
                </div>
            </div>

            <hr className="divider" />

            {/* Bottom bar */}
            <div className="bottom-bar">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
                    © 2026 Shreedham Enterprises. All rights reserved.
                </span>
                <div className="bottom-links-row" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    {['Privacy', 'Returns', 'Shipping', 'Terms'].map(l => (
                        <a key={l} href="#" className="bottom-link">{l}</a>
                    ))}
                </div>
                <a
                    href="#"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.08)', padding: '5px 12px', textDecoration: 'none', transition: 'border-color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#C4956A'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>Built by</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                        Hej<span style={{ color: '#C4956A' }}>Tech</span> Digital Solution
                    </span>
                </a>
            </div>
        </footer>
    )
}