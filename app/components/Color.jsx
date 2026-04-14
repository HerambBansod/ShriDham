"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Color() {
    const router = useRouter()
    const [hovered, setHovered] = useState(null)

    const colors = [
        { name: "White", slug: "white", hex: "#F5F5F5", text: "#1A1A1A" },
        { name: "Blue", slug: "blue", hex: "#3B6EA8", text: "#ffffff" },
        { name: "Dark Grey", slug: "dark-grey", hex: "#3A3A3A", text: "#ffffff" },
        { name: "Grey", slug: "grey", hex: "#9E9E9E", text: "#ffffff" },
        { name: "Silver Grey", slug: "silver-grey", hex: "#C0C0C0", text: "#1A1A1A" },
        { name: "Orange & Red", slug: "orange-red", hex: "#C4612A", text: "#ffffff" },
        { name: "Brown", slug: "brown", hex: "#5C3C2E", text: "#ffffff" },
        { name: "Maroon", slug: "maroon", hex: "#8B1A1A", text: "#ffffff" },
        { name: "White Pink", slug: "white-pink", hex: "#F9E4EC", text: "#1A1A1A" },
        { name: "Pink White", slug: "pink-white", hex: "#F2B8CC", text: "#1A1A1A" },
        { name: "Silver & Grey", slug: "silver-grey-2", hex: "#B0B8C1", text: "#1A1A1A" },
        { name: "White Violet", slug: "white-violet", hex: "#E8D5F5", text: "#1A1A1A" },
        { name: "OffWhite Blue", slug: "offwhite-blue", hex: "#D6E4F0", text: "#1A1A1A" },
        { name: "White Black", slug: "white-black", hex: "#E8E8E8", text: "#1A1A1A" },
        { name: "Black White", slug: "black-white", hex: "#2C2C2C", text: "#ffffff" },
        { name: "Golden", slug: "golden", hex: "#C4956A", text: "#ffffff" },
        { name: "Light Pink & White", slug: "light-pink-white", hex: "#FADADD", text: "#1A1A1A" },
    ]

    const handleClick = (color) => {
        router.push(`/products/${color.slug}`)
    }

    return (
        <main>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                /* ── Entrance ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px) scale(0.93); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
                .fade-in {
                    opacity: 0;
                    animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
                }

                /* ── Card lift ── */
                .color-card {
                    cursor: pointer;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
                }
                .color-card:hover {
                    transform: translateY(-10px) scale(1.07);
                    z-index: 20;
                }

                /* ── Glow shadow ── */
                .color-square {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    border-radius: 2px;
                    position: relative;
                    overflow: hidden;
                    transition: box-shadow 0.45s ease;
                }
                .color-card:hover .color-square {
                    box-shadow: 0 20px 50px -6px var(--glow-color);
                }

                /* ── Shine sweep ── */
                @keyframes shine {
                    0%   { left: -80%; }
                    100% { left: 130%; }
                }
                .shine {
                    position: absolute;
                    top: 0; left: -80%;
                    width: 50%; height: 100%;
                    background: linear-gradient(
                        105deg,
                        transparent 20%,
                        rgba(255,255,255,0.38) 50%,
                        transparent 80%
                    );
                    transform: skewX(-15deg);
                    pointer-events: none;
                    opacity: 0;
                }
                .color-card:hover .shine {
                    opacity: 1;
                    animation: shine 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
                }

                /* ── Ripple ring ── */
                @keyframes ripple {
                    0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.55; }
                    100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0;   }
                }
                .ripple {
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 100%; height: 100%;
                    border-radius: 50%;
                    border: 1.5px solid rgba(255,255,255,0.6);
                    pointer-events: none;
                    opacity: 0;
                }
                .color-card:hover .ripple {
                    animation: ripple 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }

                /* ── Corner fold ── */
                .corner-fold {
                    position: absolute;
                    bottom: 0; right: 0;
                    width: 0; height: 0;
                    border-style: solid;
                    border-width: 0 0 0 0;
                    border-color: transparent transparent rgba(255,255,255,0.85) transparent;
                    transition: border-width 0.3s cubic-bezier(0.22,1,0.36,1);
                    filter: drop-shadow(-2px -2px 3px rgba(0,0,0,0.12));
                }
                .color-card:hover .corner-fold {
                    border-width: 0 0 36px 36px;
                }

                /* ── Flip-in label ── */
                @keyframes flipIn {
                    0%   { opacity: 0; transform: perspective(300px) rotateX(-70deg) translateY(6px); }
                    100% { opacity: 1; transform: perspective(300px) rotateX(0deg)   translateY(0);   }
                }
                .flip-label {
                    opacity: 0;
                    transform-origin: top center;
                }
                .color-card:hover .flip-label {
                    animation: flipIn 0.35s 0.06s cubic-bezier(0.22,1,0.36,1) forwards;
                }

                /* ── Name track out ── */
                .color-name {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px;
                    color: #9E9E9E;
                    text-align: center;
                    line-height: 1.3;
                    margin: 0;
                    transition: letter-spacing 0.35s ease, color 0.25s ease;
                }
                .color-card:hover .color-name {
                    letter-spacing: 0.11em;
                    color: #1A1A1A;
                }

                /* ── Active press ── */
                .color-card:active {
                    transform: translateY(-4px) scale(1.03);
                    transition-duration: 0.1s;
                }

                /* ── Grid layout ── */
                .color-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 20px;
                }

                /* Tablet */
                @media (max-width: 900px) {
                    .color-grid { grid-template-columns: repeat(5, 1fr); gap: 14px; }
                }

                /* Mobile large */
                @media (max-width: 640px) {
                    .color-grid { grid-template-columns: repeat(4, 1fr); gap: 12px; }
                }

                /* Mobile small / iPhone */
                @media (max-width: 430px) {
                    .color-grid { grid-template-columns: repeat(4, 1fr); gap: 8px; }
                }

                /* iPhone mini */
                @media (max-width: 375px) {
                    .color-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
                    .color-name { font-size: 9px !important; }
                }
            `}</style>

            <section style={{ minHeight: '100svh', width: '100%', maxWidth: '1330px', margin: '0 auto', padding: 'clamp(32px, 5vw, 48px) clamp(16px, 3vw, 24px)' }}>

                <div style={{ marginBottom: '40px' }}>
                    <h1
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 300, color: '#1A1A1A', margin: 0 }}
                    >
                        Shop by <em style={{ color: '#c4956a' }}>Color</em>
                    </h1>
                    <p
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#3a3a3a', marginTop: '10px', maxWidth: '440px', lineHeight: 1.7 }}
                    >
                        Choose your preferred shade and explore wallpapers curated around that palette.
                    </p>
                </div>

                <div className='color-grid'>
                    {colors.map((color, index) => (
                        <div
                            key={color.name}
                            onClick={() => handleClick(color)}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className='color-card fade-in'
                            style={{
                                animationDelay: `${index * 45}ms`,
                                '--glow-color': color.hex + 'bb',
                            }}
                        >
                            {/* Color Square */}
                            <div
                                className='color-square'
                                style={{ backgroundColor: color.hex }}
                            >
                                {/* Light-tile inner border */}
                                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.07)', borderRadius: '2px', pointerEvents: 'none' }} />

                                {/* Shine */}
                                <div className='shine' />

                                {/* Ripple ring */}
                                <div className='ripple' />

                                {/* Corner fold */}
                                <div className='corner-fold' />

                                {/* Flip-in "Explore" pill */}
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span
                                        className='flip-label'
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: '10px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.15em',
                                            fontWeight: 600,
                                            padding: '6px 12px',
                                            borderRadius: '2px',
                                            color: color.text,
                                            background: color.text === '#1A1A1A'
                                                ? 'rgba(0,0,0,0.12)'
                                                : 'rgba(255,255,255,0.6)',
                                            backdropFilter: 'blur(6px)',
                                        }}
                                    >
                                        Explore
                                    </span>
                                </div>
                            </div>

                            {/* Color name */}
                            <p className='color-name'>{color.name}</p>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    )
}