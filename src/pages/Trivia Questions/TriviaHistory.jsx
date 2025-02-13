import React from 'react'
import { useNavigate } from 'react-router-dom';

const TriviaHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
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
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    TRIVIA HISTORY
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <hr className="relative border-t w-full border-black" />
                    <table className="w-full border-collapse border border-gray-100">
                        <thead>
                            <tr className="bg-white border-t-2 border-black">
                                <th className="border border-gray-200 px-4 py-2 text-left">SL#</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Trivia Score</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Amount Credited</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">01</td>
                                <td className="border border-gray-200 px-4 py-2 text-red-500 font-semibold">2/5</td>
                                <td className="border border-gray-200 px-4 py-2 text-blue-600 font-semibold">KES 40</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">02</td>
                                <td className="border border-gray-200 px-4 py-2 text-red-500 font-semibold">4/5</td>
                                <td className="border border-gray-200 px-4 py-2 text-blue-600 font-semibold">KES 80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default TriviaHistory