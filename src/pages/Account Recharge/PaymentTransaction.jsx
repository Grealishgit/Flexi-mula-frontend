import React from 'react'
import { useNavigate } from 'react-router-dom';

const PaymentTransaction = () => {

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
            <div className="w-full mx-auto mt-6 py-20 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">PAYMENT HISTORY</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left">
                        <thead className="bg-gray-100">
                            <tr className="border-b border-gray-300">
                                <th className="p-3 border-r border-gray-300">SL#</th>
                                <th className="p-3 border-r border-gray-300">Mobile Number</th>
                                <th className="p-3 border-r border-gray-300">TRX ID</th>
                                <th className="p-3">Amount Deposited</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 border-r border-gray-300">01</td>
                                <td className="p-3 border-r border-gray-300">113910480</td>
                                <td className="p-3 border-r border-gray-300">2800d83c1a46d8c73b01f13d09</td>
                                <td className="p-3">KES 300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default PaymentTransaction