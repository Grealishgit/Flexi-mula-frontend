import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeductionHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-gray-600 text-xl">
                <span
                    onClick={() => navigate('/dashboard')}
                    className="text-blue-500 font-semibold cursor-pointer hover:underline"
                >
                    Home
                </span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-gray-800">FlexiMula</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>

            {/* Deduction History Section */}
            <div className="bg-white shadow-md rounded-lg mt-6 p-6">
                <h2 className="text-xl font-bold text-gray-900">Deduction History</h2>

                {/* User Information */}
                <div className="bg-gray-50 p-4 rounded-md mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">User Information</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <p className='font-semibold'><strong>Name:</strong> DISABLED</p>
                        <p className='font-semibold'><strong>Mobile:</strong> 113910480</p>
                        <p className='font-semibold'><strong>Email:</strong> carolflexi024@gmail.com</p>
                        <p className='font-semibold'><strong>Registered On:</strong> 2024-11-23 14:45:43</p>
                    </div>
                </div>

                {/* Deduction Table */}
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left">
                        <thead className="bg-gray-50">
                            <tr className="border-b border-gray-300">
                                <th className="p-3 border-r border-gray-300">SL#</th>
                                <th className="p-3 border-r border-gray-300">Deduction Amount</th>
                                <th className="p-3 border-r border-gray-300">Mode</th>
                                <th className="p-3">Date</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr className="border-b">
                                <td className="p-3 border-r border-gray-300">01</td>
                                <td className="p-3 border-r border-gray-300">KES 500</td>
                                <td className="p-3 border-r border-gray-300">M-Pesa</td>
                                <td className="p-3">2025-02-11</td>
                            </tr>
                        </tbody> */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default DeductionHistory;
