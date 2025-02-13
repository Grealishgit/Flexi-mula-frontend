import React, { useState } from "react";
import { MdVerified } from "react-icons/md";

const Dashboard = () => {
    const earningsData = [
        { title: "BALANCE", amount: 0, bg: "#FFF7AE" },
        { title: "TOTAL WITHDRAWN", amount: 2370, bg: "#C1E1C1" },
        { title: "WELCOME BONUS", amount: 150, bg: "#FFD580" },
        { title: "TRIVIA EARNINGS", amount: 120, bg: "#B3E5FC" },
        { title: "YOUTUBE EARNINGS", amount: 140, bg: "#FFD580" },
        { title: "NETFLIX ADS EARNINGS", amount: 210, bg: "#B3B3E6" },
        { title: "TIKTOK EARNINGS", amount: 70, bg: "#FFB6C1" },
        { title: "SPIN BALANCE", amount: 0, bg: "#B3B3E6" },
        { title: "INSTAGRAM REELS", amount: 80, bg: "#B3B3E6" },
    ];

    return (
        <div className="p-4 sm:p-6 ml-1 sm:ml-2 mt-12 sm:mt-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-gray-600 text-lg sm:text-xl">
                <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
                    home
                </span>
                <span className="mx-1 sm:mx-2">→</span>
                <span className="font-semibold text-gray-800">FlexiMula</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>

            {/* Welcome Section */}
            <div className="bg-gradient-to-b from-[#9093ff] to-[#7681ff] text-white shadow-indigo-600  p-4 sm:p-6 max-w-[400px] rounded-2xl shadow-xl mt-4">
                <h1 className="text-lg sm:text-2xl font-semibold text-black flex items-center">
                    Welcome Back <span className="font-bold ml-1">Flexi</span>
                    <span className="ml-2 text-blue-600"><MdVerified /></span>
                </h1>

                {/* Notification Box */}
                <div className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 text-white font-semibold rounded-lg shadow-md inline-block">
                    Hello!!! 🌿🎉 .. Let's Watch Instagram Reels Today 📱
                </div>

                {/* Expenses & Profits Bar */}
                <div className="flex flex-col gap-3 mt-4">
                    <div className="w-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg p-2 text-center text-white font-semibold">
                        EXPENSES: KES 300
                    </div>
                    <div className="w-full bg-gradient-to-r from-green-500 to-green-300 rounded-lg p-2 text-center text-white font-semibold">
                        PROFITS: KES 3,380
                    </div>
                </div>
            </div>

            {/* Earnings Grid (Responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                {earningsData.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-xl shadow-2xl text-left border border-gray-200 animate-glow"
                        style={{ backgroundColor: item.bg }}
                    >
                        <h2 className="text-md sm:text-lg font-semibold">{item.title}</h2>
                        <p className="text-xl sm:text-2xl font-bold">KES {item.amount}</p>
                        <p className="text-sm text-gray-600">FLEXIMULA</p>
                    </div>
                ))}
            </div>



            {/* Referral Section */}
            <div className="bg-gradient-to-r from-[#a6b5d0] to-gray-400 p-4 sm:p-6 rounded-2xl shadow-2xl animate-glow mt-4 border-purple-300">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">Your Unique Invite URL</h2>
                <p className="text-white font-bold mt-1">
                    Invite others to join <span className="text-yellow-500 font-semibold">FLEXIMULA</span> and earn rewards!
                </p>

                <div className="flex flex-col sm:flex-row items-center mt-4  p-2 rounded-lg shadow-md">
                    <input
                        type="text"
                        value="https://www.smartpaybiz.com/register.php?ref=Flexi"
                        readOnly
                        className="w-full px-2 bg-white py-1 rounded-lg border focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
                    />
                    <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold cursor-pointer mt-2 sm:mt-0 sm:ml-2">
                        Copy
                    </button>
                </div>

                <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg mt-4 shadow-md cursor-pointer w-full sm:w-auto">
                    JOIN WHATSAPP GROUP HERE
                </button>

                {/* Social Share Buttons */}
                <p className="mt-4 text-gray-700 font-semibold">Share on:</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-stretch sm:justify-start">
                    <button className="bg-[#81c3f8] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        Facebook
                    </button>
                    <button className="bg-[#0ea5e8] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        Twitter
                    </button>
                    <button className="bg-gradient-to-r from-[#77c3ee] to-[#3ba0f9] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        LinkedIn
                    </button>
                    <button className="bg-[#fb4242] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        Instagram
                    </button>
                    <button className="bg-gradient-to-r from-[#46d546] to-[#40d340] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        WhatsApp
                    </button>
                    <button className="bg-[#9e5cf7] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                        Email
                    </button>
                </div>



            </div>

            {/* Timetable Section (Scrollable in Small Screens) */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 mt-6 mb-14 overflow-x-auto">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4">Timetable Of Activities
                    <hr className="w-full  border-t border-gray-300" /></h2>


                <table className="w-full border-collapse border border-gray-300 bg-orange-50 rounded-lg min-w-[500px]">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border border-gray-300 border-r-2">Day</th>
                            <th className="p-3 border border-gray-300">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { day: "Monday", activity: "Trivia questions" },
                            { day: "Tuesday", activity: "Youtube videos" },
                            { day: "Wednesday", activity: "Tiktok videos" },
                            { day: "Thursday", activity: "Instagram reels" },
                            { day: "Friday", activity: "Instagram Reels" },
                            { day: "Saturday", activity: "Ads" },
                            { day: "Sunday", activity: "Ads" }
                        ].map((item, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="p-3 border-r-2 border-gray-400">{item.day}</td>
                                <td className="p-3">{item.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Extras Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-3">extras <hr className="w-full  border-t border-gray-300 mb-4" /></h3>
                <table className="w-full border-collapse mb-3 border border-gray-300 bg-orange-50 rounded-lg mt-2 min-w-[500px]">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border border-gray-300 border-r-2 ">Feature</th>
                            <th className="p-3 border border-gray-300">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { feature: "Top Ranks", frequency: "Sunday" },
                            { feature: "Referrals", frequency: "Daily" },
                            { feature: "Forex Classes", frequency: "Daily" },
                            { feature: "Welcome Bonus", frequency: "Unlock at 10 clients\nLevel one get 100 KSH after Sunday" }
                        ].map((item, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="p-3 border-r-2 border-gray-400">{item.feature}</td>
                                <td className="p-3 whitespace-pre-line">{item.frequency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default Dashboard;
