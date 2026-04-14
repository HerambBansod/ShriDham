import Color from '../../components/Color'

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', padding: '24px 0' }}>
      <div style={{ maxWidth: '1330px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 3rem, 4rem)', color: '#1A1A1A', marginBottom: '16px' }}>
          All Products
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#6B7280', marginBottom: '32px', maxWidth: '680px', lineHeight: 1.75 }}>
          Discover every color and style available in our product range. Click a tile to view the full product page.
        </p>
        <Color />
      </div>
    </main>
  )
}
