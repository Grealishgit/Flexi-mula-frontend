import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deposit = () => {

    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
            <nav className="text-gray-600 text-xl">
                <span onClick={() => navigate('/dashboard')} className="text-blue-500 font-semibold cursor-pointer hover:underline">home</span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-gray-800">FlexiMula</span>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>
            <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

                <div className=" w-full  mb-2 border-b border-gray-300">
                    <h2 className="text-lg font-semibold mb-2">RECHARGE ACCOUNT</h2>

                </div>

                {/* Deposit Amount Input */}
                <div className="mb-4 mt-3">
                    <label className="block text-gray-700 font-medium mb-1">Enter Deposit Amount (KES):</label>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                </div>

                {/* MPESA Number Input */}
                <div className="mb-6">
                    <label className="block text-black font-medium mb-1">MPESA Registered Number:</label>
                    <input
                        type="text"
                        value="0113910480"
                        disabled
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                    />
                </div>

                {/* Proceed Button */}
                <button className="w-full py-3 bg-[#21ce9e] cursor-pointer text-white text-lg font-semibold rounded-lg hover:bg-[#25cc9d] transition">
                    PROCEED TO DEPOSIT
                </button>

                {/* Deposit Balance */}
                <div className="mt-6 p-4 py-2 bg-[#5c67f7] text-white text-left rounded-lg">
                    <p className="text-sm font-semibold">DEPOSIT BALANCE</p>
                    <p className="text-lg font-bold">KES 0</p>
                </div>



            </div>
        </div>
    )
}

export default Deposit