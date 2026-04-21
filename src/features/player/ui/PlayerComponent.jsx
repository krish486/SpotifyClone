import React from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { usePlayer } from "../hooks/usePlayer";
import { useSelector } from "react-redux";

const PlayerComponent = () => {
    const { isPlaying } = useSelector((store) => store.player);

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const {
        togglePlayAndPause,
        progress,
        currentTime,
        duration,
        progressClick,
        songInfo,
        playNextSong,
        playPrevSong,
    } = usePlayer();

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-gray-800 px-3 py-2 sm:px-4 sm:py-3">

            {/* MOBILE VIEW */}
            <div className="flex flex-col gap-2 sm:hidden">

                {/* Top row */}
                <div className="flex items-center justify-between gap-2">

                    {/* Song */}
                    <div className="flex items-center gap-2 min-w-0">
                        <img
                            src={songInfo?.thumbnail}
                            alt="song"
                            className="w-9 h-9 rounded object-cover"
                        />
                        <div className="truncate">
                            <p className="text-white text-xs truncate">
                                {songInfo?.title || "No song"}
                            </p>
                            <p className="text-gray-400 text-[10px] truncate">
                                {songInfo?.artist || ""}
                            </p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3 text-white">
                        <FaStepBackward onClick={playPrevSong} />

                        <button
                            onClick={togglePlayAndPause}
                            className="bg-white text-black p-2 rounded-full"
                        >
                            {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
                        </button>

                        <FaStepForward onClick={playNextSong} />
                    </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">
                        {formatTime(currentTime || 0)}
                    </span>

                    <div
                        className="flex-1 h-1 bg-gray-600 rounded-full"
                        onClick={progressClick}
                    >
                        <div
                            style={{ width: `${progress || 0}%` }}
                            className="h-1 bg-white rounded-full"
                        />
                    </div>

                    <span className="text-[10px] text-gray-400">
                        {formatTime(duration || 0)}
                    </span>
                </div>
            </div>

            {/* DESKTOP / TABLET VIEW */}
            <div className="hidden sm:flex items-center w-full relative">

                {/* Left */}
                <div className="flex items-center gap-3 w-[30%] min-w-0">
                    <img
                        src={songInfo?.thumbnail}
                        alt="song"
                        className="w-12 h-12 rounded object-cover"
                    />
                    <div className="truncate">
                        <h4 className="text-white text-sm truncate">
                            {songInfo?.title || "No song"}
                        </h4>
                        <p className="text-gray-400 text-xs truncate">
                            {songInfo?.artist || ""}
                        </p>
                    </div>
                </div>

                {/* CENTER (ACTUALLY CENTERED) */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-[40%] max-w-xl">

                    <div className="flex items-center gap-5 text-white">
                        <FaStepBackward onClick={playPrevSong} className="cursor-pointer" />

                        <button
                            onClick={togglePlayAndPause}
                            className="bg-white text-black p-2.5 rounded-full"
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>

                        <FaStepForward onClick={playNextSong} className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <span className="text-xs text-gray-400">
                            {formatTime(currentTime || 0)}
                        </span>

                        <div
                            className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer"
                            onClick={progressClick}
                        >
                            <div
                                style={{ width: `${progress || 0}%` }}
                                className="h-1 bg-white rounded-full"
                            />
                        </div>

                        <span className="text-xs text-gray-400">
                            {formatTime(duration || 0)}
                        </span>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default PlayerComponent;