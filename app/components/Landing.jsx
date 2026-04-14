"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
    const [image] = useState({
        img1: { name: "img1", src: "/img1.webp" },
        img2: { name: "img2", src: "/img2.webp" },
        img3: { name: "img3", src: "/img3.webp" },
        img4: { name: "img4", src: "/img4.webp" }
    })

    return (
        <main>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

                .landing-section {
                    min-height: 100svh;
                    width: 100%;
                    max-width: 1330px;
                    margin: 0 auto;
                    padding: 40px 24px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 32px;
                }

                .landing-text {
                    flex: 1 1 0;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .landing-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    color: #1A1A1A;
                    font-size: clamp(36px, 7vw, 64px);
                    line-height: 1.1;
                    margin: 0;
                }

                .landing-body {
                    font-family: 'DM Sans', sans-serif;
                    font-size: clamp(14px, 3vw, 18px);
                    color: #3a3a3a;
                    line-height: 1.7;
                    margin: 0;
                }

                .btn-primary {
                    background: #1A1A1A;
                    color: white;
                    border: none;
                    padding: 14px 24px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.3s;
                    white-space: nowrap;
                }
                .btn-primary:hover { background: #333; }

                .btn-secondary {
                    background: white;
                    color: #1A1A1A;
                    border: 2px solid #1A1A1A;
                    padding: 12px 20px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s;
                    white-space: nowrap;
                }
                .btn-secondary:hover { background: #1A1A1A; color: white; }

                .stat-value {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    color: #1A1A1A;
                    font-size: clamp(28px, 5vw, 48px);
                    line-height: 1;
                }

                .stat-label {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: #c4956a;
                    font-weight: 400;
                    margin-top: 4px;
                }

                .stats-row {
                    display: flex;
                    gap: clamp(16px, 4vw, 40px);
                    flex-wrap: wrap;
                    padding-top: 16px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                }

                .image-grid {
                    flex: 0 0 48%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    gap: 6px;
                    height: 520px;
                }

                .image-cell {
                    background-size: cover;
                    background-position: center;
                    border-radius: 2px;
                }

                /* Tablet */
                @media (max-width: 900px) {
                    .landing-section {
                        flex-direction: column;
                        padding: 32px 20px;
                    }
                    .landing-text {
                        flex: none;
                        width: 100%;
                    }
                    .image-grid {
                        flex: none;
                        width: 100%;
                        height: 320px;
                    }
                }

                /* Mobile */
                @media (max-width: 600px) {
                    .landing-section {
                        padding: 28px 16px;
                        gap: 24px;
                        min-height: auto;
                    }
                    .image-grid {
                        height: 240px;
                    }
                    .stats-row {
                        gap: 16px;
                    }
                    .btn-row {
                        flex-wrap: wrap;
                    }
                }

                /* iPhone mini / very small */
                @media (max-width: 375px) {
                    .landing-title {
                        font-size: 32px;
                    }
                    .image-grid {
                        height: 200px;
                    }
                }
            `}</style>

            <section className='landing-section'>
                {/* Text Side */}
                <div className='landing-text'>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', letterSpacing: '0.08em', color: '#c4956a', textTransform: 'uppercase' }}>
                        Premium Wall Decor · Since 2020
                    </span>

                    <h1 className='landing-title'>
                        Transform Your Walls Into <span style={{ color: '#c4956a' }}>Art</span>
                    </h1>

                    <p className='landing-body'>
                        Discover our collection of premium wall decor, crafted with care and designed to elevate your space. Since 2020, we've been transforming walls into art.
                    </p>

                    <div className='btn-row' style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <button className='btn-primary'>
                            Shop Now <ArrowRight size={16} />
                        </button>
                        <button className='btn-secondary'>
                            Explore Collection
                        </button>
                    </div>

                    <div className='stats-row'>
                        {[
                            { value: "10k+", label: "Happy Customers" },
                            { value: "200+", label: "Premium Products" },
                            { value: "5+", label: "Years Experience" },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className='stat-value'>{value}</div>
                                <div className='stat-label'>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Grid */}
                <div className='image-grid'>
                    {[image.img1.src, image.img2.src, image.img3.src, image.img4.src].map((src, i) => (
                        <div
                            key={i}
                            className='image-cell'
                            style={{ backgroundImage: `url(${src})` }}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}