import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LevelThree = () => {
    const navigate = useNavigate();

    const allUsers = [
        { sn: 1, username: "Carlos", status: "INACTIVE", date: "2024-11-23 14:47:33", mobile: "758319638" },
        { sn: 2, username: "meshack", status: "INACTIVE", date: "2024-11-23 14:48:10", mobile: "115994134" },
    ];
    // State to manage displayed users
    const [visibleUsers, setVisibleUsers] = useState(allUsers.slice(0, 10));
    // Show first 10 users initially
    const [loadCount, setLoadCount] = useState(10);
    // Users currently loaded

    // Load more function
    const loadMoreUsers = () => {
        const newLoadCount = loadCount + 5;
        // Load 5 more users each time
        setVisibleUsers(allUsers.slice(0, newLoadCount));
        setLoadCount(newLoadCount);
    };

    return (
        <div className="p-4 md:p-6 mt-16 mb-6">
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
            <div className="p-6 bg-white shadow-md rounded-lg w-full">

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">LEVEL 3 ACCOUNTS</h2>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search referrals by username or mobile"
                    className="w-full font-semibold p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-1 focus:ring-[#5c67f7] focus:border-[#5c67f7]" />

                {/* <hr className="w-full border-t border-gray-300 mb-2" /> */}

                {/* Earnings & Active Users */}
                <div className="bg-[#e6f6fd] text-[#5bc2ee] p-4 rounded-md mb-4">
                    <p className="font-bold">Total Level 3 Earnings: KES 0</p>
                    <p className="font-bold">Total Level 3 Active Users: 0</p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100 text-gray-800 text-sm md:text-base">
                                <th className="p-3 border border-gray-300">SN</th>
                                <th className="p-3 border border-gray-300">Username</th>
                                <th className="p-3 border border-gray-300">Status</th>
                                <th className="p-3 border border-gray-300">Date Joined</th>
                                <th className="p-3 border border-gray-300">Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleUsers.map((user, index) => (
                                <tr key={index} className="text-gray-800 text-sm md:text-base">
                                    <td className="p-3 border border-gray-300">{user.sn}</td>
                                    <td className="p-3 border border-gray-300">- {user.username}</td>
                                    <td className="p-3 border border-gray-300">
                                        <span className={`px-3 py-1 rounded-md text-white text-sm font-semibold ${user.status === "ACTIVE" ? "bg-green-500" : "bg-red-500"}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-3 border border-gray-300">{user.date}</td>
                                    <td className="p-3 border border-gray-300">{user.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Load More Button */}
                {loadCount < allUsers.length && (
                    <button
                        onClick={loadMoreUsers}
                        className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                        Load More
                    </button>
                )}
            </div>
        </div>
    )
}

export default LevelThree