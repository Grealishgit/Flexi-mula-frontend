import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br  from-blue-500 to-indigo-600">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-center text-3xl font-bold text-gray-700 mb-2">
                    <span className="text-red-500">F </span>
                    <span className="text-orange-400">L </span>
                    <span className="text-yellow-400">E </span>
                    <span className="text-green-500">X </span>
                    <span className="text-blue-500">I </span>
                    <span className="text-indigo-500">M </span>
                    <span className="text-pink-500">U </span>
                    <span className="text-purple-500">L </span>
                    <span className="text-purple-500">A </span>

                </h1>
                <p className="text-center text-gray-400 mb-6">Sign In to proceed</p>

                <form className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            User Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="user name"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center">
                            <label className="block text-gray-700 font-medium">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <Link to="/forgot-password" className="text-gray-400 text-sm">
                                Forget password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-gray-400 text-sm">Remember password?</label>
                    </div>

                    {/* Login Button */}
                    <button onClick={() => navigate('/dashboard')} className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-400 transition duration-300">
                        Login
                    </button>
                </form>

                {/* Signup Link */}
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 font-medium">
                        Sign Up
                    </Link>
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-4 ">
                    <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaXTwitter className="text-black text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
            </div>
        </div>
    );
};

export default Login;
