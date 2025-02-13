import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForexTrading = () => {
    const navigate = useNavigate();
    const [showMaterials, setShowMaterials] = useState(false);

    const forexData = [
        { pair: "EUR/CHF", ask: 0.94461, bid: 0.94450, spread: 1.1 },
        { pair: "EUR/NZD", ask: 1.83942, bid: 1.83907, spread: 3.5 },
        { pair: "AUD/JPY", ask: 96.387, bid: 96.354, spread: 3.3 },
        { pair: "USD/JPY", ask: 153.523, bid: 153.512, spread: 1.1 },
        { pair: "GBP/CHF", ask: 1.13325, bid: 1.13292, spread: 3.3 },
        { pair: "EUR/USD", ask: 1.03752, bid: 1.03750, spread: 3.3 }
    ];

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

            {/* Forex Trading Section (Hidden when "Start Course" is clicked) */}
            {!showMaterials && (
                <div className="bg-white max-w-[70rem] w-full p-4 mt-4 shadow-md rounded-lg mx-auto">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">FOREX</h2>

                    {/* Marquee Forex Cards */}
                    <div className="overflow-hidden w-full">
                        <div className="flex animate-marquee w-max">
                            {[...forexData, ...forexData].map((forex, index) => (
                                <div key={index} className="border min-h-[100px] p-2 shadow-sm bg-gray-100 min-w-[200px]">
                                    <h3 className="font-semibold flex items-center">
                                        <span className="mr-2">📈</span> {forex.pair}
                                    </h3>
                                    <p className="text-red-700">Ask: {forex.ask}</p>
                                    <p className="text-gray-700">Bid: {forex.bid}</p>
                                    <p className="text-green-500 text-sm">Spread: {forex.spread}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Start Learning Section */}
                    <div className="p-4 mt-6">
                        <h2 className="text-lg font-bold text-gray-800">START LEARNING</h2>
                        <hr className="mb-6 border-t border-gray-500" />
                        <button
                            onClick={() => setShowMaterials(true)}
                            className="bg-indigo-500 text-white font-semibold px-4 py-2 mt-3 rounded-lg hover:bg-blue-700"
                        >
                            Start Course
                        </button>
                    </div>
                </div>
            )}

            {/* Study Materials Section (Shown when "Start Course" is clicked) */}
            {showMaterials && (
                <div className="bg-white max-w-[70rem] w-full p-4 mt-4 shadow-md rounded-lg mx-auto">
                    <h2 className="text-sm font-bold text-gray-800">FOREX MATERIALS</h2>
                    <hr className='w-full border-t border-gray-300' />

                    <div className="mt-4 p-4 bg-white rounded-lg">
                        <h3 className="text-xl font-bold text-indigo-500">Study Books</h3>
                        <hr className='w-full border-t border-gray-300' />

                        <p className="text-gray-700 mt-2">Forex</p>

                        <table className="w-full mt-4 border-collapse border border-gray-100">
                            <thead>
                                <tr className="bg-white text-left">
                                    <th className="border border-gray-200 px-4 py-2">#</th>
                                    <th className="border border-gray-200 px-4 py-2">Title</th>
                                    <th className="border border-gray-200 px-4 py-2">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">1</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <p>Foreign Exchange Market</p>
                                        <p className="text-sm text-gray-500">The Bauer College of Business is Houston</p>
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <button className="bg-[#21ce9e] text-white px-3 py-1 rounded hover:bg-green-400">Download</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">2</td>
                                    <td className="border border-gray-200 px-4 py-2">Introduction to the Foreign Exchange Market</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <button className="bg-[#21ce9e] text-white px-3 py-1 rounded hover:bg-green-400">Download</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">3</td>
                                    <td className="border border-gray-200 px-4 py-2">13 Characteristics of a Successful Trader Forex Web Page</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <button className="bg-[#21ce9e] text-white px-3 py-1 rounded hover:bg-green-400">Download</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        onClick={() => setShowMaterials(false)}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                        Back to Forex
                    </button>
                </div>
            )}
        </div>
    );
};

export default ForexTrading;
