import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                {/* LOGO */}
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
                <p className="text-center text-gray-500 mb-4">
                    It takes a few seconds to open an account
                </p>

                {/* Referral Info */}
                <div className="bg-green-100 text-green-600 p-2 rounded-md text-center mb-4">
                    You were brought by: <span className="font-semibold">No One</span>
                </div>

                <form className="space-y-4">
                    {/* Full Names */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Full Names <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Registered Names"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Username"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Start with 07..."
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Country Selection */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Please Select Country</option>
                            <option>Kenya</option>
                            <option>Uganda</option>
                            <option>Tanzania</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Create a Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Create a Password"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-gray-700 text-sm">I accept terms</label>
                    </div>

                    {/* Register Button */}
                    <button onClick={() => navigate('/payment')} className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-400 transition duration-300">
                        Register
                    </button>
                </form>

                {/* Sign In Link */}
                <p className="text-center text-gray-600 mt-4">
                    Already Have An Account?{" "}
                    <Link to="/" className="text-blue-500 font-medium">
                        Sign In
                    </Link>
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                    <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaXTwitter className="text-black text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
            </div>
        </div>
    );
};

export default Register;
