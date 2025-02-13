import React from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawHistory = () => {
    const navigate = useNavigate();

    const transactions = [
        { time: "2024-11-25 10:30:58", initial: 640, final: 600, status: "PAID", charges: 40 },
        { time: "2024-11-26 09:56:16", initial: 300, final: 260, status: "PAID", charges: 40 },
        { time: "2024-11-28 18:48:23", initial: 380, final: 340, status: "PAID", charges: 40 },
        { time: "2024-12-01 16:39:03", initial: 680, final: 640, status: "PAID", charges: 40 },
        { time: "2024-12-07 09:56:15", initial: 310, final: 270, status: "PAID", charges: 40 },
        { time: "2024-12-26 14:03:29", initial: 300, final: 260, status: "PAID", charges: 40 },
    ];

    return (
        <div className="p-4 sm:p-6 mt-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-gray-600 text-lg sm:text-xl">
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
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>

            {/* Table Container */}
            <div className="p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">WITHDRAWAL HISTORY</h2>
                <hr className="border-t border-gray-300 mb-4" />

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px] border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#e8faf5] text-gray-700 text-left">
                                <th className="p-2 sm:p-3 border-r border-gray-200">Time</th>
                                <th className="p-2 sm:p-3 border-r border-gray-200">Initial</th>
                                <th className="p-2 sm:p-3 border-r border-gray-200">Final</th>
                                <th className="p-2 sm:p-3 border-r border-gray-200">Status</th>
                                <th className="p-2 sm:p-3">Charges</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {transactions.map((tx, index) => (
                                <tr key={index} className="bg-[#e8faf5] border-b border-gray-200 font-semibold text-gray-900">
                                    <td className="p-2 sm:p-3 border-r border-gray-200">{tx.time}</td>
                                    <td className="p-2 sm:p-3 border-r border-gray-200">KES {tx.initial}</td>
                                    <td className="p-2 sm:p-3 border-r border-gray-200">KES {tx.final}</td>
                                    <td className="p-2 sm:p-3 border-r border-gray-200">
                                        <span className="bg-sky-500 text-white px-3 py-1 rounded-md inline-block">
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="p-2 sm:p-3">KES {tx.charges}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WithdrawHistory;
