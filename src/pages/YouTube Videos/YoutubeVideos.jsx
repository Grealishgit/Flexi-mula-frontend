import React from 'react';
import { useNavigate } from 'react-router-dom';

const YoutubeVideos = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 md:p-6 mt-16">
            <nav className="text-gray-600 text-lg md:text-xl">
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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>

            {/* Video Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
                {/* Video 1 */}
                <div className="bg-[#ffa100] p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold text-black text-center">YOUTUBE VIDEO 1</h2>
                    <div className="mt-2 w-full max-w-[500px]">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/dD2EISBDjWM"
                            title="YouTube Video 1"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <button className="bg-[#21ce9e] text-white font-semibold px-4 py-2 mt-3 rounded-lg hover:bg-teal-500">
                        Claim Earnings for Video 1
                    </button>
                </div>

                {/* Video 2 */}
                <div className="bg-[#9048ae] p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold text-black text-center">YOUTUBE VIDEO 2</h2>
                    <div className="mt-2 w-full max-w-[500px]">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/dD2EISBDjWM"
                            title="YouTube Video 2"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <button className="bg-[#21ce9e] text-white font-semibold px-4 py-2 mt-3 rounded-lg hover:bg-green-500">
                        Claim Earnings for Video 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideos;
