'use client'
import React from 'react'
import axios from "axios";

const AddProductPage = () => {
    const addProduct = async (e: React.FormEvent) {

    }
    return (
        <div>
            <form onSubmit={addProduct}></form>
        </div>
    )
}

export default AddProductPage