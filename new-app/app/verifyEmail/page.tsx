'use client'
import React, {useState} from 'react'
import Router, {useRouter} from 'next/navigation'
import axios from "axios";

const VerifyEmail = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const email = new URLSearchParams().get('email')
    const [formData, setFormData] = React.useState({
        email: email,
        otp: ""
    })
    const verifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/verifyEmail", formData)
            if (response.status === 201 || response.status === 200) {
                alert('Email Verified Successfully')
                router.push('/login')
            } else {
                response.data.message && alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Verify Email</h2>
                </div>
                <form className="space-y-6" onSubmit={verifyEmail}>
                    <div className="flex justify-between gap-2 max-w-xs mx-auto">
                        {[1, 2, 3, 4].map((index) => (
                            <input
                                key={index}
                                type="text"
                                value={formData.otp}
                                onChange={(e) => setFormData({...formData, otp: e.target.value})}
                                maxLength={1}
                                className="w-12 h-14 text-center text-2xl font-extrabold text-blue-600 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-amber-900 text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Verify Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VerifyEmail;