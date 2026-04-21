'use client'
import React, {useEffect, useState} from 'react'
import {useSearchParams, useRouter} from 'next/navigation'
import axios from "axios";

interface Products {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    imageUrl: string;
}
const GetProductsPage = () => {
    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token")
    const getProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/v1/auth/getAllProducts",
                {
                    params: {
                        token: token
                    }
                }
            );
            alert(response.data.data.message)
            const products: Products[] = response.data.data.products
            setProducts(products)
            setLoading(false)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    useEffect(() => {
        getProducts()
    }, []);
    return(
        <div className="min-h-screen bg-white text-slate-900 px-6 py-16">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    Our Hair Products
                </h1>
                <p className="text-slate-600 text-lg">
                    Explore our collection of premium products for healthy, beautiful hair.
                </p>
            </div>
            {loading && (
                <p className="text-center text-slate-500">Loading products...</p>
            )}
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            router.push(`/user/getProducts/${product.id}`);
                        }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
                    >
                        <div className="h-48 mb-4 overflow-hidden rounded-xl">
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="font-bold text-lg mb-1">
                            {product.productName}
                        </h2>
                        <p className="text-slate-500 text-sm mb-3">
                            {product.category}
                        </p>

                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {product.description}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="font-bold text-amber-900">
                                ₦{product.price}
                            </span>
                            <button onClick={() => {
                                router.push(`/user/getProducts/${product.id}`);
                            }}
                                    className="bg-amber-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GetProductsPage;
