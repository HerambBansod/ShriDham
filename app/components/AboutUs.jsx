"use client"
import { useEffect, useRef, useState } from 'react'
import Review from "./Review.jsx"
import Footer from './Footer.jsx'

const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '3+', label: 'Years in Business' },
    { number: '500+', label: 'Wallpaper Designs' },
    { number: '24/7', label: 'Customer Support' },
]

const values = [
    {
        number: '01',
        title: 'Quality First',
        desc: 'Every roll we ship is personally inspected. We use only premium fabric, non-woven, and UV-grade materials that stand the test of time.',
    },
    {
        number: '02',
        title: 'Honest Pricing',
        desc: 'No hidden charges, no gimmicks. We believe beautiful walls should be accessible — which is why we offer up to 55% off retail pricing.',
    },
    {
        number: '03',
        title: 'Customer First',
        desc: 'Our WhatsApp support is available 24/7. Whether it\'s a question about wall dimensions or a delivery update — we\'re always there.',
    },
    {
        number: '04',
        title: 'Local Roots',
        desc: 'Proudly based in Satara, Maharashtra. We understand Indian homes, Indian walls, and Indian taste — that\'s our edge.',
    },
]

function useInView(threshold = 0.15) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])
    return [ref, inView]
}

function AnimatedSection({ children, delay = 0 }) {
    const [ref, inView] = useInView()
    return (
        <div ref={ref} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}>
            {children}
        </div>
    )
}

export default function AboutPage() {
    const [count, setCount] = useState({ customers: 0, years: 0, designs: 0 })

    useEffect(() => {
        const duration = 1800
        const steps = 60
        const interval = duration / steps
        let step = 0
        const timer = setInterval(() => {
            step++
            const progress = step / steps
            const ease = 1 - Math.pow(1 - progress, 3)
            setCount({
                customers: Math.round(10000 * ease),
                years: Math.round(3 * ease * 10) / 10,
                designs: Math.round(500 * ease),
            })
            if (step >= steps) clearInterval(timer)
        }, interval)
        return () => clearInterval(timer)
    }, [])

    return (
        <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .hero-title { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both; }
                .hero-sub   { animation: fadeUp 0.9s 0.15s cubic-bezier(0.22,1,0.36,1) both; }
                .hero-line  { animation: fadeUp 0.9s 0.05s cubic-bezier(0.22,1,0.36,1) both; }

                @keyframes lineGrow {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }
                .accent-line {
                    animation: lineGrow 1.2s 0.3s cubic-bezier(0.22,1,0.36,1) both;
                    transform-origin: left;
                }

                .value-card {
                    border: 1px solid #E8E4DF;
                    padding: 2rem;
                    background: white;
                    transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
                }
                .value-card:hover {
                    border-color: #C4956A;
                    transform: translateY(-4px);
                }

                .stat-block {
                    padding: 2.5rem 2rem;
                    text-align: center;
                    border-right: 1px solid rgba(255,255,255,0.08);
                    transition: background 0.3s ease;
                }
                .stat-block:last-child { border-right: none; }
                .stat-block:hover { background: rgba(196,149,106,0.06); }

                .owner-img-placeholder {
                    width: 100%;
                    aspect-ratio: 4/5;
                    background: #E8E4DF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ background: '#111111', padding: '7rem 3rem 5rem', position: 'relative', overflow: 'hidden' }}>
                {/* Background texture */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.03,
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 0, transparent 50%)',
                    backgroundSize: '20px 20px',
                }} />

                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="hero-line" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <div style={{ width: '28px', height: '1px', background: '#C4956A' }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 500 }}>
                            Our Story
                        </span>
                    </div>

                    <h1 className="hero-title" style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(44px, 6vw, 72px)',
                        fontWeight: 300, lineHeight: 1.05, color: 'white', margin: '0 0 1.5rem',
                    }}>
                        Walls That Tell<br />
                        <em style={{ color: '#C4956A', fontStyle: 'italic' }}>Our Story</em>
                    </h1>

                    <p className="hero-sub" style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '15px', color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.85, maxWidth: '520px', margin: 0,
                    }}>
                        From a small setup in Satara to over 10,000 happy homes across India — Shreedham Enterprises was built on one simple belief: every wall deserves to be beautiful.
                    </p>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div style={{ background: '#1A1A1A', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {[
                    { val: `${count.customers.toLocaleString()}+`, label: 'Happy Customers' },
                    { val: `${count.years}+`, label: 'Years in Business' },
                    { val: `${count.designs}+`, label: 'Wallpaper Designs' },
                    { val: '24/7', label: 'Customer Support' },
                ].map((s, i) => (
                    <div key={s.label} className="stat-block">
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 300, color: '#C4956A', lineHeight: 1, marginBottom: '6px' }}>
                            {s.val}
                        </div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── FOUNDER SECTION ── */}
            <section style={{ padding: '7rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

                    {/* Left — Photo placeholder */}
                    <AnimatedSection delay={0}>
                        <div style={{ position: 'relative' }}>
                            <div className="owner-img-placeholder">
                                {/* Initials avatar */}
                                <div style={{
                                    width: '100px', height: '100px', borderRadius: '50%',
                                    background: '#C4956A', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: '36px', fontWeight: 400, color: 'white', letterSpacing: '0.04em',
                                }}>TP</div>
                                <div style={{
                                    position: 'absolute', bottom: '20px', left: '20px', right: '20px',
                                    background: 'rgba(255,255,255,0.92)', padding: '12px 16px',
                                    borderLeft: '3px solid #C4956A',
                                }}>
                                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 400, color: '#1A1A1A' }}>Tushar Pandit</div>
                                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8480', marginTop: '2px' }}>Founder & Owner</div>
                                </div>
                            </div>

                            {/* Decorative offset border */}
                            <div style={{
                                position: 'absolute', top: '16px', left: '16px',
                                right: '-16px', bottom: '-16px',
                                border: '1px solid #E8E4DF', zIndex: -1,
                            }} />
                        </div>
                    </AnimatedSection>

                    {/* Right — Story */}
                    <AnimatedSection delay={100}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
                            <div style={{ width: '28px', height: '1px', background: '#C4956A' }} />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 500 }}>Meet the Founder</span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '42px', fontWeight: 300, lineHeight: 1.1,
                            color: '#1A1A1A', margin: '0 0 1.8rem',
                        }}>
                            Built with Passion,<br />
                            <em style={{ color: '#C4956A', fontStyle: 'italic' }}>Grown with Trust</em>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.85, color: '#5A5550', margin: 0 }}>
                                My name is <strong style={{ color: '#1A1A1A', fontWeight: 500 }}>Tushar Pandit</strong>, and I started Shreedham Enterprises with a simple idea — that beautiful, high-quality wall decor shouldn't cost a fortune.
                            </p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.85, color: '#5A5550', margin: 0 }}>
                                Three years ago, I started this business from Satara, Maharashtra with a small inventory and a big dream. Today, we've served over <strong style={{ color: '#1A1A1A', fontWeight: 500 }}>10,000 homes</strong> across India and I still personally oversee every order that goes out.
                            </p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.85, color: '#5A5550', margin: 0 }}>
                                What keeps me going? The photos customers send me of their transformed rooms. That moment when a wall goes from plain to extraordinary — that's why we do this.
                            </p>
                        </div>

                        {/* Signature line */}
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E8E4DF', display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontStyle: 'italic', fontWeight: 400, color: '#1A1A1A', lineHeight: 1 }}>Tushar Pandit</div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8480', marginTop: '4px' }}>Founder, Shreedham Enterprises · Satara, MH</div>
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div style={{ maxWidth: '1100px', margin: '0 auto 0', padding: '0 3rem' }}>
                <div style={{ height: '1px', background: '#E8E4DF' }} />
            </div>

            {/* ── VALUES ── */}
            <section style={{ padding: '6rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
                <AnimatedSection>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                        <div style={{ width: '28px', height: '1px', background: '#C4956A' }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 500 }}>What We Stand For</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '42px', fontWeight: 300, lineHeight: 1.1,
                        color: '#1A1A1A', margin: '0 0 3rem',
                    }}>
                        Our <em style={{ color: '#C4956A', fontStyle: 'italic' }}>Values</em>
                    </h2>
                </AnimatedSection>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
                    {values.map((v, i) => (
                        <AnimatedSection key={v.title} delay={i * 80}>
                            <div className="value-card">
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 300, color: '#E8E4DF', lineHeight: 1, marginBottom: '1rem' }}>
                                    {v.number}
                                </div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, color: '#1A1A1A', marginBottom: '8px', letterSpacing: '0.02em' }}>
                                    {v.title}
                                </div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#8A8480', lineHeight: 1.75 }}>
                                    {v.desc}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ── JOURNEY TIMELINE ── */}
            <section style={{ background: 'white', padding: '6rem 3rem', borderTop: '1px solid #E8E4DF', borderBottom: '1px solid #E8E4DF' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <AnimatedSection>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                <div style={{ width: '28px', height: '1px', background: '#C4956A' }} />
                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 500 }}>Our Journey</span>
                                <div style={{ width: '28px', height: '1px', background: '#C4956A' }} />
                            </div>
                            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 300, color: '#1A1A1A', margin: 0 }}>
                                Three Years of <em style={{ color: '#C4956A' }}>Growth</em>
                            </h2>
                        </div>
                    </AnimatedSection>

                    {/* Timeline */}
                    <div style={{ position: 'relative' }}>
                        {/* Horizontal line */}
                        <div style={{ position: 'absolute', top: '20px', left: '0', right: '0', height: '1px', background: '#E8E4DF', zIndex: 0 }} />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', position: 'relative', zIndex: 1 }}>
                            {[
                                { year: '2022', title: 'The Beginning', desc: 'Started from a small room in Satara with 10 wallpaper designs and a dream to change how Indians decorate their homes.' },
                                { year: '2023', title: 'First 1,000 Customers', desc: 'Word spread fast. Our WhatsApp-first approach and genuine quality helped us cross 1,000 satisfied customers.' },
                                { year: '2024', title: '5,000+ Homes Served', desc: 'Expanded the catalog to 300+ designs. Introduced UV Marble Roll and premium non-woven collections to great response.' },
                                { year: '2025', title: '10,000+ Happy Homes', desc: 'Now proudly serving over 10,000 customers pan-India with 500+ designs, free shipping, and 24/7 support.' },
                            ].map((item, i) => (
                                <AnimatedSection key={item.year} delay={i * 100}>
                                    <div style={{ paddingTop: '0' }}>
                                        {/* Dot */}
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '50%',
                                            border: '1px solid #E8E4DF', background: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: '1.5rem',
                                            transition: 'border-color 0.3s',
                                        }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#C4956A' }} />
                                        </div>
                                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 300, color: '#C4956A', lineHeight: 1, marginBottom: '6px' }}>
                                            {item.year}
                                        </div>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, color: '#1A1A1A', marginBottom: '8px' }}>
                                            {item.title}
                                        </div>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#8A8480', lineHeight: 1.75 }}>
                                            {item.desc}
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ padding: '6rem 3rem', textAlign: 'center', background: '#FAF8F5' }}>
                <AnimatedSection>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 300, color: '#1A1A1A', margin: '0 0 1rem', lineHeight: 1.1 }}>
                            Ready to Transform<br />
                            <em style={{ color: '#C4956A' }}>Your Walls?</em>
                        </h2>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#8A8480', lineHeight: 1.8, margin: '0 0 2.5rem' }}>
                            Browse 500+ designs and find the perfect wallpaper for every room. Free shipping, easy returns, and a team that genuinely cares.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <a href="/products" style={{
                                background: '#1A1A1A', color: 'white', padding: '14px 36px',
                                fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
                                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                                textDecoration: 'none', transition: 'background 0.2s',
                                display: 'inline-block',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = '#2d2d2d'}
                                onMouseLeave={e => e.currentTarget.style.background = '#1A1A1A'}
                            >Shop Now →</a>
                            <a href="https://wa.me/919665782767" style={{
                                background: 'transparent', color: '#1A1A1A',
                                padding: '14px 36px', border: '1px solid #1A1A1A',
                                fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
                                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                                textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#1A1A1A'; e.currentTarget.style.color = 'white'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1A1A1A'; }}
                            >Chat on WhatsApp</a>
                        </div>
                    </div>
                </AnimatedSection>
                <Review/>
            </section>
            <Footer/>                
        </main>
    )
}