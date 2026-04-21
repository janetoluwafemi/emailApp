import React from "react";

const ResetPassword = () => {
    const resetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Change Password</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={resetPassword}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;