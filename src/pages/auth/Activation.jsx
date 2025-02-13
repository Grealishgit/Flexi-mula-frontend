import React from "react";
import { useNavigate } from "react-router-dom";

const Activation = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                {/* SMARTPAY Logo */}
                <h1 className="text-center text-3xl font-bold text-gray-700 mb-2">
                    <span className="text-red-500">F </span>
                    <span className="text-orange-400">L </span>
                    <span className="text-yellow-400">E </span>
                    <span className="text-green-500">X </span>
                    <span className="text-blue-500">I </span>
                    <span className="text-indigo-500">M </span>
                    <span className="text-pink-500">U </span>
                    <span className="text-purple-500">L </span>
                    <span className="text-teal-500">A </span>
                </h1>
                <p className="text-gray-500 mb-4">Make Payment to proceed</p>

                {/* Activation Heading */}
                <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                    <span className="text-blue-500 text-lg">💠</span>
                    SMARTPAY ACCOUNT ACTIVATION
                    <span className="text-blue-500 text-lg">💠</span>
                </h2>

                {/* M-PESA Instructions */}
                <p className="text-gray-700 text-left mt-4 font-medium">Go to M-PESA</p>
                <ul className="text-gray-700 text-left space-y-2 mt-2">
                    <li>✅ Lipa na Mpesa</li>
                    <li>✅ Pay Bill</li>
                    <li>
                        ✅ <b>Business Number:</b> 522533
                    </li>
                    <li>
                        ✅ <b>Account number:</b> <span className="font-semibold">6321108</span>
                    </li>
                    <li className="font-bold">✅ Pay: 300</li>
                </ul>

                {/* Confirmation Notice */}
                <p className="text-black font-medium mt-4 flex items-center justify-center">
                    📌 Confirm, paid to
                    KCB BANK JAYSTAR TECHNOLOGIES
                </p>

                {/* Slogan */}
                <p className="text-lg font-semibold text-gray-800 mt-4 flex items-center justify-center">
                    <span className="text-red-500 text-2xl">⏱️</span> WORK SMART WITH
                    SMARTPAY☂️
                </p>

                {/* Input for Mobile Number */}
                <p className="text-red-600 font-semibold mt-6 text-left">Proceed From Here</p>
                <div className="mt-2 text-left">
                    <label className="block text-gray-700 font-normal">Enter Mobile Number</label>
                    <input
                        type="text"
                        placeholder="Enter Mobile"
                        className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 mt-1"
                    />
                </div>
                <div className="text-left">
                    {/* Go to Dashboard Button */}
                    <button onClick={() => navigate('/')} className="bg-sky-500 text-left text-white py-2 px-4 rounded-md font-medium hover:bg-sky-400 transition duration-300 mt-4">
                        GO TO DASHBOARD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Activation;
