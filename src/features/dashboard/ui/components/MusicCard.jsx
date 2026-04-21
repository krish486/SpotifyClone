import React from "react";
import { useDispatch } from "react-redux";
import { playNewSong } from "../../../player/state/playerSlice";

const MusicCard = ({ song }) => {


    let dispatch = useDispatch()
    return (
        <div className="w-full h-full bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition">

            {/* Thumbnail */}
            <div className="relative">
                <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg"
                />

                {/* Play Button */}
                <button
                    onClick={() => dispatch(playNewSong(song))}
                    className="absolute bottom-3 right-3 bg-green-500 hover:bg-green-600 
      p-2 sm:p-3 rounded-full shadow-lg transition"
                >
                    ▶
                </button>
            </div>

            {/* Song Info */}
            <div className="mt-3 sm:mt-4">
                <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                    {song.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 truncate">
                    {song.artist}
                </p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 truncate">
                    {song.album} • {song.year}
                </p>
            </div>
        </div>
    );
};

export default MusicCard;