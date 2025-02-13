import React from 'react'
import { useNavigate } from 'react-router-dom';

const Ebooks = () => {
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

        </div>
    )
}

export default Ebooks