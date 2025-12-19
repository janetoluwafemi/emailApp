'use client'
import React from 'react'
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = React.useState(
        {
            email: '',
            password: ''
        })
    const [loading, setLoading] = React.useState(false)
    const loginUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/loginUser", formData)
            alert(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Login In Into Your Account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={loginUser}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;