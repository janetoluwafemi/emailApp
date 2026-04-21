'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    imageUrl: string;
}

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    if (!product) {
        return (
            <div className="p-10 text-center text-slate-500">
                Loading product...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-6 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                        src={product.imageUrl}
                        className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">
                        {product.productName}
                    </h1>
                    <p className="text-slate-500 mb-4">
                        {product.category}
                    </p>
                    <p className="text-slate-700 mb-6">
                        {product.description}
                    </p>
                    <p className="text-2xl font-bold text-amber-900 mb-6">
                        ₦{product.price}
                    </p>
                    <div className="border p-6 rounded-xl shadow-md">
                        <h2 className="font-semibold mb-3">Place Order</h2>
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="w-full border p-2 rounded mb-4"
                        />
                        <button className="w-full bg-amber-900 text-white py-3 rounded-lg hover:bg-slate-800 transition">
                            Order Now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}