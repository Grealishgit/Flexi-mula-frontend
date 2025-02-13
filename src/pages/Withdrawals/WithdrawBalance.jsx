import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WithdrawBalance = () => {

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

            <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto mt-10">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900">WITHDRAW BALANCE</h2>

                {/* Information Alert */}
                <div className="bg-[#ddf011] text-gray-900 p-3 py-1 rounded-[15px] flex items-start mt-4">
                    <span className="font-semibold mr-2">⚠</span>
                    <p className='text-2xl font-bold text-[#8a690c]'>
                        Kindly confirm whether this number (<strong>0113910480</strong>) is correct.
                        If not, kindly contact customer care for quick assistance.
                    </p>
                </div>

                {/* Select Account Dropdown */}
                <div className="mt-4 font-semibold text-xl">
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"

                    >
                        <option>Select Account</option>
                        <option>MPESA</option>
                        <option>AIRTEL MONEY/TIGO</option>
                        <option>MTN</option>
                        <option>VODAFONE</option>
                        <option>LUMICASH</option>
                        <option>BINANCE</option>
                        <option>BANK ACCOUNT</option>
                        <option>ORANGE MONEY</option>

                    </select>
                </div>

                {/* Amount Input */}
                <div className="mt-4 font-bold">
                    <input
                        type="number"
                        placeholder="Enter amount (KES)"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  focus:ring-gray-500"

                    />
                </div>

                {/* Proceed Button */}
                <button
                    className="px-10 bg-indigo-500  text-white font-semibold py-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"


                >
                    PROCEED
                </button>
            </div>

        </div>
    )
}

export default WithdrawBalance