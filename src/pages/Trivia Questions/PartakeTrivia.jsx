import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PartakeTrivia = () => {
    const navigate = useNavigate();
    const [quizStarted, setQuizStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown

    // Start Countdown Timer when Quiz Starts
    useEffect(() => {
        if (quizStarted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [quizStarted, timeLeft]);

    // Quiz Questions Data
    const questions = [
        {
            question: "Which animal has no brain and heart?",
            options: ["Crocodile", "Jellyfish", "Seahorse", "Shark"],
        },
        {
            question: "Which animal has 3 hearts and 9 brains?",
            options: ["Whale", "Cat", "Octopus", "Turtle"],
        },
        {
            question: "Which animal smells with its tongue?",
            options: ["Snake", "Shark", "Crocodile", "Frog"],
        },
        {
            question: "What do you call a female elephant?",
            options: ["Doe", "Mare", "She-Elephant", "Cow"],
        },
        {
            question: "What is the term given to a group of tigers?",
            options: ["An Ambush", "A Pride", "A Flock", "A Troop"],
        },
        {
            question: "What is the primary source of energy for the earth?",
            options: ["Wind", "Stars", "Sun", "Rain"],
        },
    ];

    return (
        <div className="p-6 ml-3 mt-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-gray-600 text-xl">
                <span
                    onClick={() => navigate("/dashboard")}
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

            {/* Trivia Section */}
            <div className="p-4 bg-white shadow-md rounded-md mb-6 w-full mx-auto">
                <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-2">
                    PARTAKE TRIVIA
                </h2>

                {/* Description */}
                <p className="text-gray-700 font-medium mt-4 text-left">
                    You only have a few seconds to tackle the questions. If time elapses, you will be credited 0 points.
                </p>

                {/* Timer */}
                {quizStarted && (
                    <p className="text-center font-semibold text-gray-900 mt-2">
                        <span className="text-sm text-gray-600">Time left:</span>{" "}
                        <span className="font-bold text-red-600">{timeLeft}s</span>
                    </p>
                )}

                {/* Start Quiz Button */}
                {!quizStarted ? (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setQuizStarted(true)}
                            className="bg-teal-500 text-white font-bold px-6 py-2 rounded-md hover:bg-teal-600 transition"
                        >
                            START QUIZ
                        </button>
                    </div>
                ) : (
                    // Quiz Questions
                    <div className="mt-6">
                        {questions.map((q, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-gray-900">
                                    {index + 1}. {q.question}
                                </h3>
                                <ul className="ml-6 mt-2">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <input type="radio" name={`q${index}`} id={`q${index}-o${i}`} />
                                            <label htmlFor={`q${index}-o${i}`} className="text-gray-700">
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Submit Button */}
                        <div className="flex justify-left mt-6">
                            <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-md hover:bg-yellow-600 transition">
                                Submit Quiz
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartakeTrivia;
