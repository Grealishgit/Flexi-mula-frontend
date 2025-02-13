import React from 'react';
import { useNavigate } from 'react-router-dom';
import net1 from '../../assets/netflix1.jpg';
import net2 from '../../assets/nteflix2.jpg';
import net3 from '../../assets/netflix3.png';
import net4 from '../../assets/netflix4.png';
import net5 from '../../assets/netflix5.png';
import net6 from '../../assets/netflix6.jpg';



const ViewAd = () => {
    const navigate = useNavigate();

    const ads = [
        { id: 1, image: net1, title: "Ad 1", description: "FlexiMula Netflix Ad 1" },
        { id: 2, image: net2, title: "Ad 2", description: "FlexiMula Netflix Ad 2" },
        { id: 3, image: net3, title: "Ad 3", description: "FlexiMula Netflix Ad 3" },
        { id: 4, image: net4, title: "Ad 4", description: "FlexiMula Netflix Ad 4" },
        { id: 5, image: net5, title: "Ad 5", description: "FlexiMula Netflix Ad 5" },
        { id: 6, image: net6, title: "Ad 6", description: "FlexiMula Netflix Ad 6" }
    ];

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

            {/* Ad Image Cards */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-full mx-auto">
                <h2 className="text-lg font-bold text-gray-800">Ad Click - FlexiMula Agencies</h2>
                <p className="text-gray-600 font-semibold mb-4">Discover more with FlexiMula. Your gateway to exclusive online opportunities.</p>

                {/* Card Grid */}
                <div className="grid sm:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-6">
                    {ads.map(ad => (
                        <div key={ad.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src={ad.image} alt={ad.title} className="rounded-lg w-full h-40 object-cover" />
                            <h3 className="text-md text-green-500 font-semibold mt-2">{ad.title}</h3>
                            <p className="text-sm font-semibold text-red-600">{ad.description}</p>
                            <div className='text-center justify-center mt-2'>
                                <button className='text-white text-md bg-indigo-400 px-4 py-2 rounded-md hover:bg-indigo-500 items-center cursor-pointer'>
                                    Click Ad
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewAd;
