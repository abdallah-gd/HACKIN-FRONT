'use client';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left Section - Login Form */}
            <div className="w-1/2 bg-white flex items-center justify-center p-12">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <h1 className="text-3xl font-bold text-black">LOGIN</h1>
                        <img src="/transparent-logo 1.png" alt="Logo" className="w-12 h-12" />
                    </div>

                    {/* Login Form */}
                    <div className="space-y-4">
                        {/* Username Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full text-black bg-emerald-50 rounded-lg py-3 pl-12 pr-4 outline-none border-2 border-transparent focus:border-emerald-500 transition"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full text-black bg-emerald-50 rounded-lg py-3 pl-12 pr-4 outline-none border-2 border-transparent focus:border-emerald-500 transition"
                            />
                        </div>

                        {/* Login Button */}
                        <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-lg transition">
                            Login Now
                        </button>
                    </div>

                    {/* Social Login */}
                    <div className="mt-8">
                        <p className="text-gray-600 text-sm mb-4">Login with Others</p>

                        {/* Google Login */}
                        <button className="w-full flex items-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg py-3 px-4 mb-3 transition">
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                            <span className="text-sm font-medium text-gray-700">Login with Google</span>
                        </button>

                        {/* Facebook Login */}
                        <button className="w-full flex items-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg py-3 px-4 transition">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-700">Login with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-gradient-to-br from-teal-300 to-emerald-700 flex items-center justify-center p-16">
                <div className="w-full max-w-2xl backdrop-blur-md bg-white/20 rounded-[2.5rem] p-16 border border-white/30">
                    <img
                        src="/PalestineStatehood_A-1.webp"
                        alt="Palestine Flag"
                        className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}