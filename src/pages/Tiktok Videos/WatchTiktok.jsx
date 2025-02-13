import React from 'react';
import { useNavigate } from 'react-router-dom';

const WatchTiktok = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 ml-3 mt-16">
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

            {/* TikTok Videos */}
            <div className="flex justify-center gap-8 p-6 items-stretch">
                {/* Video 1 */}
                <div className="bg-[#ff5d3a] p-6 h-[400px] w-[530px] rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold text-black text-center">TIKTOK VIDEO 1</h2>
                    <div className="mt-2 flex justify-center w-full h-[400px] overflow-y-scroll">
                        <iframe
                            width="450"
                            height="600"
                            src="https://www.tiktok.com/embed/your-video-1"
                            title="TikTok Video 1"
                            frameBorder="0"
                            allowFullScreen
                            className=''
                        ></iframe>
                    </div>
                    <button className="bg-[#21ce9e] text-white font-semibold px-4 py-2 mt-3 rounded-lg hover:bg-teal-500 self-center">
                        Claim Earnings for Video 1
                    </button>
                </div>

                {/* Video 2 */}
                <div className="bg-[#1998ff] p-6 h-[400px] w-[530px] rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold text-black text-center">TIKTOK VIDEO 2</h2>
                    <div className="mt-2 flex justify-center w-full h-[400px] overflow-y-scroll">
                        <iframe
                            width="450"
                            height="600"
                            src="https://www.tiktok.com/embed/your-video-2"
                            title="TikTok Video 2"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <button className="bg-[#21ce9e] text-white font-semibold px-4 py-2 mt-3 rounded-lg hover:bg-green-500 self-center">
                        Claim Earnings for Video 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchTiktok;
