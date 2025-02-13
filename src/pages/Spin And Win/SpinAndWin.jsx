import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpinAndWin = () => {
    const navigate = useNavigate();
    const wheelRef = useRef(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState(null);
    const [rotationCount, setRotationCount] = useState(0);

    // Segment labels
    const segments = [
        'Start', '$0.1', '$5.0', '$0.3', '$0.1', '$0.1', '$10', '$0.05',
        '$5', '$0.2', 'x10', 'x4', 'x66', '$5.0', '0'
    ];

    const spinWheel = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setResult(null);
        setRotationCount(0);

        const spin = (rotations, duration) => {
            if (rotations > 4) {
                setIsSpinning(false);
                let possibleWinnings = segments.filter(segment => segment !== 'Start');
                const winningSegment = possibleWinnings[Math.floor(Math.random() * possibleWinnings.length)];
                setResult(`You won: ${winningSegment}!`);
                return;
            }

            const newRotation = (rotations + 3) * 360 + Math.floor(Math.random() * 360);
            wheelRef.current.style.transition = `transform ${duration}s ease-out`;
            wheelRef.current.style.transform = `rotate(${newRotation}deg)`;

            setTimeout(() => spin(rotations + 1, duration / 1.5), duration * 1000);
        };

        spin(0, 1);
    };

    return (
        <div className="p-6 ml-3 mt-16 mb-8">
            {/* Navigation */}
            <nav className="text-gray-600 text-xl">
                <span onClick={() => navigate('/dashboard')} className="text-blue-500 font-semibold cursor-pointer hover:underline">
                    home
                </span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-gray-800">FlexiMula</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
                <span className="font-semibold">FlexiMula</span> Agencies
            </h1>

            {/* Casino Spin Section */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-6 w-full mx-auto">
                <h2 className="text-xl font-bold text-gray-800">CASINO SPIN</h2>
                <hr className="w-full border-t border-gray-300 mb-4" />

                {/* Bet Input */}
                <div className="mt-8">
                    <label className="block text-gray-700 font-bold">BET AMOUNT</label>
                    <input type="number" placeholder="Enter amount (KES)" className="w-full mt-2 p-2 border font-bold border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>

                {/* Submit Button */}
                <button className="mt-4 bg-indigo-500 font-bold text-white  px-4 py-2 rounded-md hover:bg-indigo-400">Enter Amount</button>

                {/* Instructions */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">Instructions</h3>
                    <p className="text-gray-700 mt-1 font-bold">The minimum spin is KES 52!!</p>
                    <hr className='w-full mb-2 mt-2 border-t border-gray-300' />
                    <p className="text-gray-600 font-bold">NB! After entering your bet, please don't reload this page!!</p>
                </div>

                <div className='mt-10'>
                    <h2 className='text-lg text-indigo-500 font-bold'>TRY SPINNING</h2>
                    <hr className='w-full mb-3  border-t border-gray-300' />

                    <p className='font-semibold text-md'>Buy 1 Spin!</p>
                </div>
                {/* Spinning Wheel */}
                <div className="flex flex-col items-center justify-center mt-8">
                    <div className="relative w-80 h-80">
                        <div ref={wheelRef} className="absolute inset-0 flex items-center justify-center transition-transform">
                            {/* Wheel with yellow border */}
                            <div className="w-full h-full bg-white rounded-full border-4 border-yellow-500 relative overflow-hidden">
                                {segments.map((label, index) => (
                                    <div key={index} className="absolute inset-0" style={{
                                        transform: `rotate(${index * (360 / segments.length)}deg)`,
                                        clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
                                        backgroundColor: `hsl(${index * (360 / segments.length)}, 70%, 70%)`,
                                    }}>
                                        <p className="absolute text-center text-xs font-bold text-white" style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%) rotate(0deg)',
                                            transformOrigin: 'center',
                                        }}>
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center Label (DA) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg font-bold text-2xl">
                                DA
                            </div>
                        </div>

                        {/* Spin Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button onClick={spinWheel} disabled={isSpinning} className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg font-bold text-lg">
                                DA
                            </button>
                        </div>
                    </div>

                    {/* Result Display */}
                    {result && (
                        <div className="mt-4 text-xl font-bold text-gray-800">
                            {result}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpinAndWin;
