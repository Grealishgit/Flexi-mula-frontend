import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div className="p-4 sm:p-6 ml-1 sm:ml-2 mt-12 sm:mt-16">
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

            {/* Profile Details */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-3xl mx-auto w-full">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">PROFILE</h2>
                <hr className="w-full border-t border-gray-300 mb-4" />

                {/* Two-column Layout */}
                <div className="grid grid-cols-2 gap-y-4 text-gray-800">
                    {/* Left Side - Labels */}
                    <div className="space-y-2 sm:space-y-4 font-bold">
                        <p>Username:</p>
                        <p>Email:</p>
                        <p>Country:</p>
                        <p>Phone:</p>
                        <p>A/C Balance:</p>
                        <p>Upline:</p>
                        <p>Joined:</p>
                        <p>Status:</p>
                    </div>

                    {/* Right Side - Values */}
                    <div className="space-y-2 sm:space-y-4 font-medium text-left">
                        <p>Flexi</p>
                        <p>carolflexi024@gmail.com</p>
                        <p>KE</p>
                        <p>113910480</p>
                        <p>0.00</p>
                        <p>Jamal</p>
                        <p>2024-11-23 14:45:43</p>
                        <p>
                            <span className="bg-[#21ce9e] text-white px-2 py-1 rounded">Active</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
