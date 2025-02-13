import React from 'react'
import { useNavigate } from 'react-router-dom'

const WithdrawInsta = () => {

    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-gray-600 text-xl">
                <span
                    onClick={() => navigate('/dashboard')}
                    className="text-blue-500 font-semibold cursor-pointer hover:underline"
                >
                    home
                </span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-gray-800">FlexiMula</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>
            <div className="bg-white shadow-md py-10 rounded-lg p-6  mx-auto mt-10">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900">CASHOUT</h2>



                {/* Amount Label */}
                <label className="block text-gray-700 font-semibold mt-4">Amount</label>

                {/* Amount Input Field */}
                <div className="relative w-full border border-gray-300 rounded-lg flex items-center">
                    {/* Left Side - KES */}
                    <span className="px-3 text-black text-xl font-bold border-r border-gray-300">KES</span>

                    {/* Input Field */}
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        className="w-full text-lg font-semibold p-3 outline-none focus:ring-0"
                    />

                    {/* Right Side - .00 */}
                    <span className="px-3 text-black border-l text-lg font-semibold border-gray-300">.00</span>

                    {/* Fixed Blue Line on Focus */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-0 transition-transform duration-300 peer-focus:scale-100"></div>
                </div>


                {/* Cashout Button */}
                <button
                    className="w-full bg-indigo-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-indigo-400 transition duration-300"
                >
                    Cashout Fund
                </button>
            </div>
        </div>

    )
}

export default WithdrawInsta