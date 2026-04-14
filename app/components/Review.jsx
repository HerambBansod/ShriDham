"use client"
import { useState, useEffect, useRef } from 'react'

const testimonials = [
    { name: "Priya Sharma", location: "Mumbai, Maharashtra", initials: "PS", rating: 5, title: "Completely transformed my living room", text: "I ordered the Maroon Fabric Wallpaper and the quality exceeded every expectation. The texture is so rich and the color is exactly as shown. Application was smooth — my room looks like a five-star hotel now.", product: "Maroon Fabric Wallpaper", color: "#8B1A1A" },
    { name: "Arjun Mehta", location: "Pune, Maharashtra", initials: "AM", rating: 5, title: "Best purchase for my home office", text: "The Dark Grey wallpaper added such a professional and moody feel to my workspace. Packaging was perfect, arrived within 3 days. Already recommended to two colleagues.", product: "Dark Grey Fabric Wallpaper", color: "#3A3A3A" },
    { name: "Sneha Kulkarni", location: "Nashik, Maharashtra", initials: "SK", rating: 5, title: "UV Marble is absolutely stunning", text: "I was skeptical at first but the UV Marble Roll looks incredibly realistic. Used it on my kitchen countertop and dining table edges. Everyone who visits asks where I got the marble from!", product: "UV Marble Roll 4×10", color: "#C4956A" },
    { name: "Rohan Desai", location: "Satara, Maharashtra", initials: "RD", rating: 5, title: "Delivery was fast, quality top-notch", text: "Ordered the Golden Non-Woven Wallpaper for my daughter's bedroom. The shimmer is subtle and elegant — not overdone at all. Very easy to paste and it stuck perfectly on the first try.", product: "Golden Non-Woven Wallpaper", color: "#C4956A" },
    { name: "Kavita Patil", location: "Kolhapur, Maharashtra", initials: "KP", rating: 5, title: "Great value for the quality", text: "At this price point I was expecting something average, but this is genuinely premium. The Pink White wallpaper in my bedroom is dreamy. Will be ordering for two more rooms soon.", product: "Pink White Fabric Wallpaper", color: "#F2B8CC" },
    { name: "Vikram Joshi", location: "Nagpur, Maharashtra", initials: "VJ", rating: 5, title: "Superb customer support too", text: "Had a question about quantity for my wall dimensions — the WhatsApp support team was incredibly helpful and patient. Product arrived perfectly. 10/10.", product: "Chocolate Brown Wallpaper", color: "#5C3C2E" },
]

function Stars() {
    return (
        <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C4956A">
                    <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.7 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
                </svg>
            ))}
        </div>
    )
}

export default function Review() {
    const [active, setActive] = useState(0)
    const [animating, setAnimating] = useState(false)
    const intervalRef = useRef(null)

    const goTo = (index) => {
        if (animating || index === active) return
        setAnimating(true)
        setTimeout(() => { setActive(index); setAnimating(false) }, 280)
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setAnimating(true)
            setTimeout(() => {
                setActive(prev => (prev + 1) % testimonials.length)
                setAnimating(false)
            }, 280)
        }, 5000)
        return () => clearInterval(intervalRef.current)
    }, [])

    const t = testimonials[active]

    return (
        <section style={{ padding: 'clamp(40px, 8vw, 96px) clamp(16px, 4vw, 48px)', background: '#FAF8F5' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeSlideOut {
                    from { opacity: 1; } to { opacity: 0; }
                }
                .t-enter { animation: fadeSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
                .t-exit  { animation: fadeSlideOut 0.28s ease forwards; }

                .dot-btn {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    border: none;
                    background: #E8E4DF;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                .dot-btn.active { width: 24px; border-radius: 3px; background: #C4956A; }

                .mini-card {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 12px;
                    border: 1px solid #E8E4DF;
                    background: white;
                    cursor: pointer;
                    transition: border-color 0.2s, transform 0.2s;
                    min-width: 0;
                }
                .mini-card:hover { border-color: #C4956A; }
                .mini-card.active-card { border-left: 3px solid #C4956A; }

                .nav-arrow {
                    width: 36px; height: 36px;
                    border: 1px solid #E8E4DF;
                    background: transparent;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    color: #8A8480;
                    flex-shrink: 0;
                }
                .nav-arrow:hover { border-color: #C4956A; color: #C4956A; }

                .review-header-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                    align-items: end;
                    margin-bottom: 48px;
                }

                .featured-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border: 1px solid #E8E4DF;
                    background: white;
                    overflow: hidden;
                    margin-bottom: 20px;
                }

                .accent-panel {
                    padding: clamp(24px, 4vw, 48px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 300px;
                    position: relative;
                    overflow: hidden;
                }

                .review-panel {
                    padding: clamp(24px, 4vw, 48px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .mini-cards-row {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 20px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                .mini-cards-row::-webkit-scrollbar { display: none; }

                /* Tablet */
                @media (max-width: 768px) {
                    .review-header-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
                    .featured-grid { grid-template-columns: 1fr; }
                    .accent-panel { min-height: auto; padding: 24px; }
                    .review-panel { padding: 24px; }
                }

                /* Mobile */
                @media (max-width: 480px) {
                    .mini-card { padding: 8px 10px; }
                }
            `}</style>

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Header */}
                <div className='review-header-grid'>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                            <div style={{ width: '24px', height: '1px', background: '#C4956A' }} />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 500 }}>Customer Stories</span>
                        </div>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 300, lineHeight: 1.05, color: '#1A1A1A', margin: 0 }}>
                            Loved by<br />
                            <em style={{ fontStyle: 'italic', color: '#C4956A' }}>10,000+ Homes</em>
                        </h2>
                    </div>
                    <div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', lineHeight: 1.85, color: '#8A8480', margin: '0 0 16px', maxWidth: '380px' }}>
                            Real customers, real transformations. See why homeowners across Maharashtra trust Shreedham Enterprises.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '3px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill="#C4956A">
                                        <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.7 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
                                    </svg>
                                ))}
                            </div>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#1A1A1A' }}>4.9</span>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#8A8480' }}>from 2,400+ reviews</span>
                        </div>
                    </div>
                </div>

                {/* Featured Card */}
                <div className='featured-grid'>
                    {/* Left accent */}
                    <div className='accent-panel' style={{ background: t.color, transition: 'background 0.4s ease' }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '120px', fontWeight: 300, color: 'rgba(255,255,255,0.1)', lineHeight: 1, position: 'absolute', top: '-10px', left: '16px', userSelect: 'none' }}>"</div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Stars />
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.4, marginTop: '14px' }}>
                                "{t.title}"
                            </p>
                        </div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>Purchased</div>
                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{t.product}</div>
                        </div>
                    </div>

                    {/* Right review */}
                    <div className='review-panel'>
                        <p
                            key={active}
                            className={animating ? 't-exit' : 't-enter'}
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.85, color: '#5A5550', margin: 0 }}
                        >
                            {t.text}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #E8E4DF', flexWrap: 'wrap' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'white', flexShrink: 0, fontFamily: "'DM Sans', sans-serif" }}>
                                {t.initials}
                            </div>
                            <div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: '#1A1A1A' }}>{t.name}</div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#8A8480', marginTop: '2px' }}>{t.location}</div>
                            </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                                <button className='nav-arrow' onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}>
                                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2L4 7l5 5" /></svg>
                                </button>
                                <button className='nav-arrow' onClick={() => goTo((active + 1) % testimonials.length)}>
                                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 2l5 5-5 5" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini cards */}
                <div className='mini-cards-row'>
                    {testimonials.map((item, i) => (
                        <div key={i} onClick={() => goTo(i)} className={`mini-card${i === active ? ' active-card' : ''}`} style={{ flexShrink: 0, minWidth: '130px', maxWidth: '160px' }}>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 500, color: 'white', flexShrink: 0, fontFamily: "'DM Sans', sans-serif" }}>
                                {item.initials}
                            </div>
                            <div style={{ overflow: 'hidden', minWidth: 0 }}>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, color: '#1A1A1A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: '#8A8480', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.product}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} className={`dot-btn${i === active ? ' active' : ''}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}