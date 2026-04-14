"use client"
import { useState } from 'react'
import { XIcon } from "lucide-react"
import Footer from './Footer'
import Review from './Review'

export default function Items() {
    const [products] = useState([
        { name: "product1", src: "/02_UVMarble.webp", title: "Marble Wall Frame", price: "$120" },
        { name: "product2", src: "/01_UVMarble.webp", title: "Abstract Canvas Art", price: "$150" },
        { name: "product3", src: "/03_UVMarble.webp", title: "Luxury Texture Panel", price: "$200" },
        { name: "product4", src: "/04_UVMarble.webp", title: "Modern Wall Decor", price: "$180" },
        { name: "product5", src: "/05_UVMarble.webp", title: "Golden Pattern Art", price: "$250" },
        { name: "product6", src: "/17_UVMarble_WallDecor.webp", title: "Minimal Frame Design", price: "$160" },
        { name: "product7", src: "/13_UVMarble_WallDecor.webp", title: "Premium Wall Piece", price: "$300" },
        { name: "product8", src: "/07_UVMarble_WallDecor.webp", title: "Designer Decor Panel", price: "$220" },


        { name: "product1", src: "/05_UVMarble_WallDecor.webp", title: "Marble Wall Frame", price: "$120" },
        { name: "product2", src: "/06_UVMarble_WallDecor.webp", title: "Abstract Canvas Art", price: "$150" },
        { name: "product3", src: "/09_WallDecor.webp", title: "Luxury Texture Panel", price: "$200" },

    ])

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = (product) => { setSelectedProduct(product); setIsOpen(true) }
    const handleClose = () => { setSelectedProduct(null); setIsOpen(false) }

    return (
        <main>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

                .products-section {
                    min-height: 100svh;
                    width: 100%;
                    max-width: 1330px;
                    margin: 0 auto;
                    padding: 48px 24px;
                }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                .product-card {
                    height: 380px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 6px;
                    cursor: pointer;
                }

                .product-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .product-card:hover .product-overlay { opacity: 1; }

                .product-img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.6s ease;
                }
                .product-card:hover .product-img { transform: scale(1.05); }

                .product-info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 16px;
                    transform: translateY(100%);
                    transition: transform 0.45s ease;
                    backdrop-filter: blur(8px);
                    background: rgba(255,255,255,0.1);
                    border-top: 1px solid rgba(255,255,255,0.2);
                }
                .product-card:hover .product-info { transform: translateY(0); }

                .buy-btn {
                    width: 100%;
                    background: white;
                    color: #1A1A1A;
                    border: none;
                    padding: 10px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    cursor: pointer;
                    margin-top: 10px;
                    transition: all 0.25s;
                }
                .buy-btn:hover { background: #1A1A1A; color: white; }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.72);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    padding: 16px;
                }

                .modal-box {
                    background: white;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 800px;
                    max-height: 90svh;
                    overflow-y: auto;
                    padding: 24px;
                    position: relative;
                }

                .modal-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .modal-img {
                    width: 100%;
                    height: 320px;
                    object-fit: cover;
                    border-radius: 4px;
                }

                .checkout-btn {
                    width: 100%;
                    background: #1A1A1A;
                    color: white;
                    border: none;
                    padding: 14px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    cursor: pointer;
                    transition: background 0.2s;
                    border-radius: 2px;
                }
                .checkout-btn:hover { background: #333; }

                /* Tablet */
                @media (max-width: 900px) {
                    .product-grid { grid-template-columns: repeat(3, 1fr); }
                    .product-card { height: 320px; }
                }

                /* Mobile */
                @media (max-width: 640px) {
                    .products-section { padding: 32px 16px; }
                    .product-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
                    .product-card { height: 260px; }
                    /* Always show info on mobile (no hover) */
                    .product-overlay { opacity: 1; }
                    .product-info {
                        transform: translateY(0);
                        padding: 10px 12px;
                    }
                    .modal-grid { grid-template-columns: 1fr; }
                    .modal-img { height: 220px; }
                }

                /* iPhone mini */
                @media (max-width: 375px) {
                    .product-card { height: 200px; }
                    .product-grid { gap: 8px; }
                }
            `}</style>

            <section className='products-section'>

                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 6vw, 48px)', color: '#c4956a', margin: 0 }}>
                        All Products We Offer
                    </h1>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#3a3a3a', marginTop: '12px', maxWidth: '440px', lineHeight: 1.7 }}>
                        Explore our curated collection crafted to enhance your space with timeless design and modern sophistication.
                    </p>
                </div>


                <div className='product-grid'>
                    {products.map((item, index) => (
                        <div key={index} className='product-card' onClick={() => handleOpen(item)}>
                            <div className='product-img' style={{ backgroundImage: `url(${item.src})` }} />
                            <div className='product-overlay' />
                            <div className='product-info'>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'white', margin: '0 0 4px' }}>{item.title}</p>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: 'white', margin: 0 }}>{item.price}</p>
                                <button className='buy-btn' onClick={(e) => { e.stopPropagation(); handleOpen(item); }}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isOpen && selectedProduct && (
                    <div className="modal-overlay" onClick={handleClose}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={handleClose}
                                style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A' }}
                            >
                                <XIcon size={20} />
                            </button>

                            <div className="modal-grid">
                                <img src={selectedProduct.src} className="modal-img" alt={selectedProduct.title} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 4vw, 26px)', color: '#1A1A1A', margin: 0 }}>
                                        {selectedProduct.title}
                                    </h2>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', color: '#c4956a', margin: 0 }}>{selectedProduct.price}</p>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
                                        Premium handcrafted decor piece designed to elevate your space.
                                    </p>
                                    <div>
                                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#6b7280', display: 'block', marginBottom: '6px' }}>Quantity</label>
                                        <input
                                            type="number"
                                            min="1"
                                            defaultValue="1"
                                            style={{ border: '1px solid #E8E4DF', padding: '10px 14px', width: '80px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', borderRadius: '4px', outline: 'none' }}
                                        />
                                    </div>
                                    <button
                                        className='checkout-btn'
                                        onClick={() => window.location.href = `/checkout?product=${selectedProduct.name}`}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Review />
            <Footer />
        </main>
    )
}