'use client'
import React, {useRef, useState} from 'react'
import {useRouter} from 'next/navigation'
import axios from "axios";

const VerifyEmail = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get("email")
    const [formData, setFormData] = React.useState({
        email: email,
        otp: ["", "", "", ""]
    })

    const inputs = useRef<(HTMLInputElement | null)[]>([]);
    const joinedOtp = Number(formData.otp.join(""))
    const changedToInt = {
        email: email,
        otp: joinedOtp
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value.replace(/\D/g, '');
        setFormData(prev => {
            const newOtp = [...prev.otp]
            newOtp[index] = val
            return { ...prev, otp: newOtp }
        })
        if (!/^\d*$/.test(val)) {
            e.target.value = "";
            return;
        }
        if (val && index < formData.otp.length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };
    const verifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/verifyEmail", changedToInt)
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
                    {formData.otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputs.current[index] = el)}
                            type="text"
                            value={digit}
                            inputMode="numeric"
                            maxLength={1}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-14 text-2xl font-bold text-black text-center border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 outline-none transition-all"
                            placeholder="0"
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
    );
}
export default VerifyEmail;