"use client"
import { useParams } from 'next/navigation'
import Product from '../../components/Products'

export default function Page() {
    const params = useParams()
    const selectedColor = params.color

    const products = [
        { name: "White", color: "white" },
        { name: "Blue", color: "blue" },
        { name: "Dark Grey", color: "dark-grey" },
        { name: "Grey", color: "grey" },
        { name: "Silver Grey", color: "silver-grey" },
        { name: "Orange & Red", color: "orange-red" },
        { name: "Brown", color: "brown" },
        { name: "Maroon", color: "maroon" },
        { name: "White Pink", color: "white-pink" },
        { name: "Pink White", color: "pink-white" },
        { name: "Silver & Grey", color: "silver-grey-2" },
        { name: "White Violet", color: "white-violet" },
        { name: "OffWhite Blue", color: "offwhite-blue" },
        { name: "White Black", color: "white-black" },
        { name: "Black White", color: "black-white" },
        { name: "Golden", color: "golden" },
        { name: "Light Pink & White", color: "light-pink-white" },
    ]

    const filteredProducts = products.filter(
        (p) => p.color === selectedColor
    )

    return (
        <div style={{ color: "white", padding: "20px" }}>
            <h1>{selectedColor} Products</h1>

            {filteredProducts.length > 0 ? (
                filteredProducts.map((p, i) => (
                    <Product key={i} data={p} />
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}