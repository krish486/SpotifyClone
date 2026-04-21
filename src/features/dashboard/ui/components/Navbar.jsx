import React from "react";
import { FaHome } from "react-icons/fa";
import Searchbar from "../../../search/ui/components/Searchbar";

const Navbar = () => {
    return (
        <div className="w-full bg-black text-white px-3 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            {/* Top Row (Mobile) / Left (Desktop) */}
            <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">

                {/* Logo */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                    alt="logo"
                    className="w-8 h-8"
                />

                {/* Logout (moves here on mobile) */}
                <button className="bg-white text-black px-3 py-1 rounded-full text-xs sm:hidden font-semibold">
                    Logout
                </button>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-3 w-full sm:w-1/2">

                <div className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer hover:bg-[#2a2a2a]">
                    <FaHome size={16} />
                </div>

                <div className="flex-1">
                    <Searchbar />
                </div>
            </div>

            {/* Desktop Logout */}
            <div className="hidden sm:block">
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:scale-105 transition">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;