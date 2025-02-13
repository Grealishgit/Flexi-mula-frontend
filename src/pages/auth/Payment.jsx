import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();

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
                <p className="text-gray-500 text-sm mt-1">Make Payment to proceed</p>

                <div className="mt-4">
                    <div className="flex items-center justify-between border border-green-200 bg-green-100 p-3 rounded-md">

                        <button className="text-black border-2 border-black text-[13px]">✖</button>
                    </div>
                </div>

                <div className="mt-4 text-left">
                    <label className="block text-gray-700 text-sm font-normal">MPESA REGISTERED NUMBER</label>
                    <input
                        type="text"
                        placeholder="Mpesa Number (Start with 01/07...)"
                        className="w-full mt-1 p-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="mt-6 w-full bg-teal-300 text-white py-2 rounded-lg hover:bg-teal-400">
                    Pay Ksh. 300
                </button>

                <p className="text-gray-500 text-sm text-left my-3">OR</p>

                <button className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500">
                    Use Manual Payment
                </button>

                <button onClick={() => navigate('/')} className="mt-4 w-full bg-indigo-400 text-white py-2 rounded-lg hover:bg-indigo-300">
                    Go To Dashboard
                </button>
            </div>
        </div>
    );
};

export default Payment;
