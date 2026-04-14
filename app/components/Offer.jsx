"use client"
import React from 'react'

export default function Offer() {
    return (
        <main className='w-full bg-[#1a1a1a]'>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                .offer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    align-items: center;
                    text-align: center;
                }
                .offer-item {
                    padding: 20px 16px;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .offer-item:last-child { border-right: none; }

                @media (max-width: 600px) {
                    .offer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .offer-item:nth-child(2) { border-right: none; }
                    .offer-item:nth-child(3) {
                        border-right: 1px solid rgba(255,255,255,0.1);
                        border-top: 1px solid rgba(255,255,255,0.1);
                    }
                    .offer-item:nth-child(4) {
                        border-right: none;
                        border-top: 1px solid rgba(255,255,255,0.1);
                    }
                }
            `}</style>
            <section style={{ maxWidth: '1330px', margin: '0 auto', padding: '0 16px' }}>
                <div className='offer-grid'>
                    {[
                        { value: "500+", label: "PATTERNS AVAILABLE" },
                        { value: "10K+", label: "HAPPY CUSTOMERS" },
                        { value: "24/7", label: "CUSTOMER SUPPORT" },
                        { value: "Free", label: "ALL INDIA SHIPPING" },
                    ].map(({ value, label }) => (
                        <div key={label} className='offer-item'>
                            <h1
                                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 5vw, 30px)', color: '#c4956a', margin: 0 }}
                            >
                                {value}
                            </h1>
                            <p
                                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.1em', color: '#d1d5db', marginTop: '8px', marginBottom: 0 }}
                            >
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}