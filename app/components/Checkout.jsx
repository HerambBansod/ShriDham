"use client"
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { ChevronRight, Shield, Truck, RotateCcw, X } from 'lucide-react'

const productData = {
    product1: { title: "Marble Wall Frame", price: 120, src: "/img1.webp" },
    product2: { title: "Abstract Canvas Art", price: 150, src: "/img2.webp" },
    product3: { title: "Luxury Texture Panel", price: 200, src: "/img3.webp" },
    product4: { title: "Modern Wall Decor", price: 180, src: "/img4.webp" },
    product5: { title: "Golden Pattern Art", price: 250, src: "/13.webp" },
    product6: { title: "Minimal Frame Design", price: 160, src: "/12.webp" },
    product7: { title: "Premium Wall Piece", price: 300, src: "/20.png" },
    product8: { title: "Designer Decor Panel", price: 220, src: "/21.png" },
}

export default function Checkout() {
    const params = useSearchParams()
    const productKey = params.get('product')
    const product = productData[productKey] || { title: productKey, price: 0, src: null }

    const [qty, setQty] = useState(1)
    const [step, setStep] = useState(1)
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', state: '', pincode: '',
        card: '', expiry: '', cvv: '', cardName: '',
    })

    const subtotal = product.price * qty
    const shipping = subtotal > 200 ? 0 : 15
    const total = subtotal + shipping

    const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        setOrderPlaced(true)
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
                    @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                    .success-card { animation: scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both; }
                `}</style>
                <div className="success-card bg-white p-12 text-center max-w-md w-full mx-4 border border-[#E8E4DF]">
                    <div className="w-16 h-16 rounded-full bg-[#f0f7ec] flex items-center justify-center mx-auto mb-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A7A5A" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light text-[black] mb-3">
                        Order Confirmed
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-sm text-gray-500 mb-2">
                        Thank you, {form.firstName}! Your order has been placed.
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-gray-400 mb-8">
                        A confirmation will be sent to <span className="text-[#c4956a]">{form.email}</span>
                    </p>
                    <div className="border border-[#E8E4DF] p-4 mb-8 text-left">
                        <div className="flex justify-between text-sm mb-2">
                            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-gray-500">{product.title} × {qty}</span>
                            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[black] font-medium">${total}</span>
                        </div>
                        <div className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Est. delivery: 5–7 business days
                        </div>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-[black] text-white py-3 text-xs tracking-widest uppercase hover:bg-[#2d2d2d] transition"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
                @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .fade-up { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }
                .fade-up-2 { animation: fadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
                .fade-up-3 { animation: fadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
                input:focus { outline: none; border-color: #c4956a !important; }
                input::placeholder { color: #9ca3af; font-size: 13px; }

                /* ── Responsive grid overrides ── */

                /* 2-col form fields → 1-col on small screens */
                .form-grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 16px;
                }
                .form-grid-3 {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 32px;
                }

                /* Main layout: form + sidebar */
                .checkout-layout {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 40px 16px;
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 40px;
                    align-items: start;
                }

                /* Sidebar goes below form on mobile, above on desktop */
                .order-summary {
                    order: 2;
                }
                .checkout-form {
                    order: 1;
                }

                @media (max-width: 860px) {
                    .checkout-layout {
                        grid-template-columns: 1fr;
                        padding: 24px 16px;
                        gap: 24px;
                    }
                    /* Show summary above form on mobile */
                    .order-summary { order: 1; }
                    .checkout-form  { order: 2; }
                    /* Unstick the summary panel on mobile */
                    .summary-inner { position: static !important; }
                }

                @media (max-width: 560px) {
                    .form-grid-2 { grid-template-columns: 1fr; }
                    .form-grid-3 { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 375px) {
                    .form-grid-3 { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* Top Bar */}
            <div className="bg-[black] text-center py-2">
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs tracking-widest text-white/50 uppercase">
                    Free Shipping on orders over $200 · Secure Checkout
                </p>
            </div>

            {/* Nav */}
            <div className="bg-white border-b border-[#E8E4DF] px-6 py-4 flex items-center justify-between">
                <h1
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-xl font-light text-[black] tracking-wide"
                >
                    Shreedham<span className="text-[#c4956a] mx-1">·</span><em>Enterprises</em>
                </h1>
                <div className="flex items-center gap-2 text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span
                        onClick={() => window.history.back()}
                        className="flex items-center gap-1 cursor-pointer hover:text-[black] transition"
                    >
                        <X size={12} /> Back to Shop
                    </span>
                </div>
            </div>

            <div className="checkout-layout">

                {/* Left — Form */}
                <div className="checkout-form fade-up">
                    {/* Stepper */}
                    <div className="flex items-center gap-3 mb-8">
                        {['Shipping Info', 'Payment'].map((s, i) => (
                            <div key={s} className="flex items-center gap-3">
                                <button
                                    onClick={() => i === 0 && setStep(1)}
                                    className="flex items-center gap-2"
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition ${step > i ? 'bg-[black] text-white' : step === i + 1 ? 'bg-[#c4956a] text-white' : 'bg-[#E8E4DF] text-gray-400'}`}
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >{i + 1}</div>
                                    <span
                                        className={`text-xs tracking-wide uppercase ${step === i + 1 ? 'text-[black]' : 'text-gray-400'}`}
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >{s}</span>
                                </button>
                                {i === 0 && <ChevronRight size={14} className="text-gray-300" />}
                            </div>
                        ))}
                    </div>

                    {step === 1 && (
                        <div className="fade-up">
                            <h2
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                className="text-3xl font-light text-[black] mb-6"
                            >
                                Shipping <em className="text-[#c4956a]">Details</em>
                            </h2>

                            <div className="form-grid-2">
                                {[
                                    { label: 'First Name', name: 'firstName', placeholder: 'First Name' },
                                    { label: 'Last Name', name: 'lastName', placeholder: 'Last Name' },
                                ].map(f => (
                                    <div key={f.name}>
                                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.label}</label>
                                        <input
                                            name={f.name}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            placeholder={f.placeholder}
                                            className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="form-grid-2">
                                {[
                                    { label: 'Email Address', name: 'email', placeholder: 'example@gmail.com', type: 'email' },
                                    { label: 'Phone Number', name: 'phone', placeholder: '+91 xxxxx 80980', type: 'tel' },
                                ].map(f => (
                                    <div key={f.name}>
                                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.label}</label>
                                        <input
                                            name={f.name}
                                            type={f.type || 'text'}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            placeholder={f.placeholder}
                                            className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Street Address</label>
                                <input
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Address, building, company, etc."
                                    className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                />
                            </div>

                            <div className="form-grid-3">
                                {[
                                    { label: 'City', name: 'city', placeholder: 'City' },
                                    { label: 'State', name: 'state', placeholder: 'State' },
                                    { label: 'Pincode', name: 'pincode', placeholder: 'Pincode' },
                                ].map(f => (
                                    <div key={f.name}>
                                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.label}</label>
                                        <input
                                            name={f.name}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            placeholder={f.placeholder}
                                            className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-[black] text-white py-4 text-xs tracking-widest uppercase hover:bg-[#2d2d2d] transition flex items-center justify-center gap-2"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Continue to Payment <ChevronRight size={14} />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <form onSubmit={handlePlaceOrder} className="fade-up">
                            <h2
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                className="text-3xl font-light text-[black] mb-6"
                            >
                                Payment <em className="text-[#c4956a]">Details</em>
                            </h2>

                            {/* Shipping Summary */}
                            <div className="bg-white border border-[#E8E4DF] p-4 mb-6 flex items-start justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Delivering to</p>
                                    <p className="text-sm text-[black]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                        {form.firstName} {form.lastName} · {form.address}, {form.city}
                                    </p>
                                </div>
                                <button type="button" onClick={() => setStep(1)}
                                    className="text-xs text-[#c4956a] underline underline-offset-2"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Edit</button>
                            </div>

                            <div className="mb-4">
                                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Name on Card</label>
                                <input
                                    name="cardName"
                                    value={form.cardName}
                                    onChange={handleChange}
                                    placeholder="Rahul Sharma"
                                    className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Card Number</label>
                                <input
                                    name="card"
                                    value={form.card}
                                    onChange={handleChange}
                                    placeholder="4242 4242 4242 4242"
                                    maxLength={19}
                                    className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                />
                            </div>

                            <div className="form-grid-2">
                                {[
                                    { label: 'Expiry Date', name: 'expiry', placeholder: 'MM / YY' },
                                    { label: 'CVV', name: 'cvv', placeholder: '•••', type: 'password' },
                                ].map(f => (
                                    <div key={f.name}>
                                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-1.5"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.label}</label>
                                        <input
                                            name={f.name}
                                            type={f.type || 'text'}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            placeholder={f.placeholder}
                                            className="w-full border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[black] transition"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#c4956a] text-white py-4 text-xs tracking-widest uppercase hover:opacity-90 transition flex items-center justify-center gap-2 mt-8"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <Shield size={14} /> Place Order · ${total}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                🔒 Secured with 256-bit SSL encryption
                            </p>
                        </form>
                    )}
                </div>

                {/* Right — Order Summary */}
                <div className="order-summary fade-up-2">
                    <div className="summary-inner bg-white border border-[#E8E4DF] p-6 sticky top-6">
                        <h3
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-xl font-light text-[black] mb-5 pb-4 border-b border-[#E8E4DF]"
                        >
                            Order <em className="text-[#c4956a]">Summary</em>
                        </h3>

                        {/* Product */}
                        <div className="flex gap-4 mb-5 pb-5 border-b border-[#E8E4DF]">
                            <div
                                className="w-20 h-20 rounded flex-shrink-0 bg-[#E8E4DF]"
                                style={product.src ? {
                                    backgroundImage: `url(${product.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                } : {}}
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[black] mb-1 truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    {product.title}
                                </p>
                                <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    Premium Wall Decor
                                </p>
                                <div className="flex items-center border border-[#E8E4DF] w-fit">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))}
                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-[#FAF8F5] transition text-lg">−</button>
                                    <span className="w-8 text-center text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)}
                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-[#FAF8F5] transition text-lg">+</button>
                                </div>
                            </div>
                            <div className="text-sm font-medium text-[black] flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                ${product.price * qty}
                            </div>
                        </div>

                        {/* Promo Code */}
                        <div className="flex gap-2 mb-5 pb-5 border-b border-[#E8E4DF]">
                            <input
                                placeholder="Promo code"
                                className="flex-1 border border-[#E8E4DF] px-3 py-2 text-xs text-[black] min-w-0"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            />
                            <button
                                className="px-4 py-2 bg-[black] text-white text-xs tracking-wider uppercase hover:bg-[#2d2d2d] transition flex-shrink-0"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >Apply</button>
                        </div>

                        {/* Totals */}
                        <div className="space-y-3 mb-5 pb-5 border-b border-[#E8E4DF]">
                            {[
                                { label: 'Subtotal', value: `$${subtotal}` },
                                { label: 'Shipping', value: shipping === 0 ? 'Free' : `$${shipping}` },
                            ].map(row => (
                                <div key={row.label} className="flex justify-between text-sm">
                                    <span className="text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
                                    <span className={`${row.value === 'Free' ? 'text-green-600' : 'text-[black]'}`}
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-sm text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Total</span>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light text-[black]">
                                ${total}
                            </span>
                        </div>

                        {/* Trust badges */}
                        <div className="space-y-3">
                            {[
                                { icon: <Truck size={14} />, text: 'Free shipping over $200' },
                                { icon: <RotateCcw size={14} />, text: '7-day easy returns' },
                                { icon: <Shield size={14} />, text: 'Secure SSL checkout' },
                            ].map(b => (
                                <div key={b.text} className="flex items-center gap-2 text-xs text-gray-400"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    <span className="text-[#c4956a]">{b.icon}</span>
                                    {b.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer credit */}
            <div className="border-t border-[#E8E4DF] py-4 text-center">
                <p className="text-xs text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Designed & Developed by{' '}
                    <span className="text-gray-400">
                        Hej<span className="text-[#c4956a]">Tech</span> Digital Solution
                    </span>
                </p>
            </div>
        </div>
    )
}