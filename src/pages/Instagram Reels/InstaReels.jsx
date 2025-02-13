import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstaReels = () => {
    const navigate = useNavigate();
    return (
        <div className="p-6 ml-3 mt-16">
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
            <div className="p-6 bg-white shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-4">INSTAGRAM REELS</h2>

                {/* Description */}
                <p className="text-gray-700 font-bold mb-4">
                    Watch this video for at least 3 seconds and claim your cash after watching.
                </p>

                {/* Video Embed (Replace with actual embed code) */}
                <div className="w-full max-w-sm h-48 bg-black rounded-md overflow-hidden">
                    <iframe
                        src="https://www.instagram.com/werey.blogger/embed"
                        className="w-full h-full border-2 border-black"
                        allowFullScreen
                    ></iframe>
                </div>


                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-2 w-fit">
                    <button className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-md">
                        CLAIM CASH
                    </button>
                    <button className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-md">
                        WATCH VIDEO
                    </button>
                </div>
            </div>

        </div>
    )
}

export default InstaReels