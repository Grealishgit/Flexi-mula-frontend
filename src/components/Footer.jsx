import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Footer = ({ isCollapsed }) => {
    const scrollToTop = () => {
        const mainContent = document.querySelector("main");
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer
            className={`fixed bottom-0 left-0 bg-white border-t border-gray-300 text-gray-600 p-3 shadow-md flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-6 transition-all duration-300
                ${isCollapsed ? "md:ml-16 md:w-[calc(100%-4rem)]" : "md:ml-64 md:w-[calc(100%-16rem)]"}
            `}
        >
            {/* Footer Text */}
            <p className="text-sm md:text-md text-center md:text-left">
                Copyright © 2025{" "}
                <span className="font-bold text-black">Flexi</span>
                <span className="font-bold text-gray-600">Mula</span>. Designed with{" "}
                <span className="text-red-500 px-1">
                    <MdComputer className="inline-block" />
                </span>{" "}
                by{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                    HunterInc Developers
                </a>. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition fixed right-4 bottom-16 md:relative md:bottom-0"
            >
                <FaArrowUp size={18} />
            </button>
        </footer>
    );
};

export default Footer;
