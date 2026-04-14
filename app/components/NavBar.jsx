"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { label: "Wall Decor", href: "/Wall" },
        { label: "UV Marble Roll", href: "/Uv" },
        { label: "New Arrivals", href: "/new" },
        { label: "All Products", href: "/Items" },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

                .nav-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 12px;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    font-weight: 500;
                    color: #8A8480;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    white-space: nowrap;
                }
                .nav-link:hover { color: #1A1A1A; }

                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    background: white;
                    border-bottom: 1px solid #E8E4DF;
                    padding: 0;
                    overflow: hidden;
                    transition: max-height 0.35s ease, opacity 0.25s ease;
                    max-height: 0;
                    opacity: 0;
                }
                .mobile-menu.open {
                    max-height: 300px;
                    opacity: 1;
                    padding: 8px 0;
                }
                .mobile-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    font-weight: 500;
                    color: #8A8480;
                    text-decoration: none;
                    padding: 14px 24px;
                    border-bottom: 1px solid #F0EDE8;
                    display: block;
                    transition: background 0.2s, color 0.2s;
                }
                .mobile-link:last-child { border-bottom: none; }
                .mobile-link:hover { background: #FAF8F5; color: #1A1A1A; }

                .hamburger-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #1A1A1A;
                    display: none;
                    padding: 4px;
                    align-items: center;
                    justify-content: center;
                }

                @media (max-width: 768px) {
                    .desktop-links { display: none !important; }
                    .hamburger-btn { display: flex; }
                    .mobile-menu { display: flex; }
                }
            `}</style>

            <nav style={{
                width: '100%',
                background: 'white',
                borderBottom: '1px solid #E8E4DF',
                position: 'sticky',
                top: 0,
                zIndex: 50,
            }}>
                {/* Main bar */}
                <div style={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px',
                    maxWidth: '1330px',
                    margin: '0 auto',
                }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: 'inline-flex' }}>
                        <img src="/ShriDham Logo.png" alt="Shridham Enterprises logo" style={{ width: '44px', height: 'auto', objectFit: 'contain' }} />
                    </Link>

                    {/* Desktop Links */}
                    <ul className="desktop-links" style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu${open ? ' open' : ''}`}>
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}