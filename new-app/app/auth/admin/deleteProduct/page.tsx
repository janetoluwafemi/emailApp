'use client'
import React from 'react'
import axios from "axios";

const DeleteProductPage = () => {
    const deleteProduct = async (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={deleteProduct}></form>
        </div>
    )
}

export default DeleteProductPage
