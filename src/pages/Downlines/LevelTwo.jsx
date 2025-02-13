import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LevelTwo = () => {
    const navigate = useNavigate();


    // Initial user data
    const allUsers = [
        { sn: 1, username: "Carlos", status: "ACTIVE", date: "2024-11-23 14:47:33", mobile: "758319638" },
        { sn: 2, username: "meshack", status: "ACTIVE", date: "2024-11-23 14:48:10", mobile: "115994134" },
        { sn: 3, username: "Ouko", status: "ACTIVE", date: "2024-11-23 14:54:38", mobile: "769692290" },
        { sn: 4, username: "clinzone", status: "INACTIVE", date: "2024-11-23 15:32:35", mobile: "106772775" },
        { sn: 5, username: "joshnjoshkim", status: "INACTIVE", date: "2024-11-23 16:58:07", mobile: "791747583" },
        { sn: 6, username: "Prudenciakizz", status: "INACTIVE", date: "2024-11-23 20:05:01", mobile: "683041444" },
        { sn: 7, username: "Haruna", status: "ACTIVE", date: "2024-11-24 20:09:40", mobile: "797182643" },
        { sn: 8, username: "Onyango", status: "INACTIVE", date: "2024-11-24 07:50:04", mobile: "740664586" },
        { sn: 9, username: "intrend", status: "INACTIVE", date: "2024-11-24 11:26:39", mobile: "734057413" },
        { sn: 10, username: "joyann254", status: "INACTIVE", date: "2024-11-25 17:56:21", mobile: "748934051" },
        { sn: 11, username: "Brian", status: "ACTIVE", date: "2024-11-26 08:30:15", mobile: "710203555" },
        { sn: 12, username: "Amani", status: "ACTIVE", date: "2024-11-27 12:45:22", mobile: "720114477" },
        { sn: 13, username: "Zawadi", status: "INACTIVE", date: "2024-11-28 15:20:11", mobile: "798233899" },
        { sn: 14, username: "Kelvin", status: "INACTIVE", date: "2024-11-29 09:50:45", mobile: "745678321" },
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">LEVEL 2 ACCOUNTS</h2>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search referrals by username or mobile"
                    className="w-full font-semibold p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-1 focus:ring-[#5c67f7] focus:border-[#5c67f7]" />

                {/* <hr className="w-full border-t border-gray-300 mb-2" /> */}

                {/* Earnings & Active Users */}
                <div className="bg-[#e6f6fd] text-[#5bc2ee] p-4 rounded-md mb-4">
                    <p className="font-bold">Total Level 2 Earnings: KES 400.00</p>
                    <p className="font-bold">Total Level 2 Active Users: 5</p>
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

export default LevelTwo