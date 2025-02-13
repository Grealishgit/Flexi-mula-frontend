import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClaimBonus = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
            {/* Breadcrumb */}
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

            <div className="p-6 bg-white shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-4">WELCOME BONUS</h2>

                {/* Required Level 1 Downlines */}
                <div className="mb-4 py-2">
                    <p className="font-semibold text-gray-700">Required Level 1 Downlines</p>
                    <div className="relative w-full bg-[#0ea5e8] py-2 rounded-sm flex items-center">
                        <div className="absolute left-[3%] top-0 h-full w-[3px] bg-white">
                        </div>
                        <span className="text-white font-bold pl-3">10</span>
                    </div>
                </div>

                {/* The Referrals You Have */}
                <div className="mb-4">
                    <p className="font-semibold text-gray-700">The Referrals You Have</p>
                    <div className="relative w-full bg-yellow-400 py-4 rounded-sm">
                        <div className="absolute left-[3%] top-0 h-full w-[3px] bg-gray-200">
                        </div>
                    </div>
                </div>

                {/* Gift Amount Input */}
                <div className="mb-4">
                    <p className="font-semibold  text-gray-700">Gift Amount</p>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-2 border font-bold border-gray-300 rounded-sm pl-10 focus:outline-none focus:ring-1 focus:ring-[#5c67f7] focus:border-[#5c67f7]"

                        />
                        <div className="absolute left-[3%] top-1/2 transform -translate-y-1/2 h-3/4 w-[3px] bg-gray-400">
                        </div>
                    </div>
                </div>

                {/* Redeem Button */}
                <button className="w-full bg-[#5c67f7] text-white font-semibold py-2 rounded-md hover:bg-indigo-400 transition">
                    Redeem Gift
                </button>
            </div>
        </div>
    );
};

export default ClaimBonus;
