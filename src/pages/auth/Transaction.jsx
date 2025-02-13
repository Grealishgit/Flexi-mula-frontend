import React from "react";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="bg-white p-8 rounded-md shadow-lg w-96 text-center">
                <h2 className="text-xl font-bold text-gray-800">
                    <span className="text-red-500">F </span>
                    <span className="text-orange-400">L </span>
                    <span className="text-yellow-400">E </span>
                    <span className="text-green-500">X </span>
                    <span className="text-blue-500">I </span>
                    <span className="text-indigo-500">M </span>
                    <span className="text-pink-500">U </span>
                    <span className="text-purple-500">L </span>
                    <span className="text-teal-500">A </span>
                </h2>
                <p className="text-gray-400 text-sm mt-1">Complete Payment</p>

                <div className="mt-4 flex justify-center">
                    <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
                        <span className="text-white text-lg">↗</span>
                    </div>
                </div>


                <p className="text-gray-700 mt-4 px-4">
                    You will be redirected to your dashboard if you completed this payment
                </p>

                <div className="mt-4 text-left">
                    <label className="block text-gray-400 text-sm font-normal">
                        TRANSACTION ID (system generated)
                    </label>
                    <input
                        type="text"
                        placeholder="TRANSACTION ID"
                        className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="text-left">
                    <button onClick={() => navigate("/")} className="mt-6 bg-yellow-400 text-white py-2 px-3 rounded-md hover:bg-yellow-500 text-sm">
                        COMPLETE ACTIVATION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
