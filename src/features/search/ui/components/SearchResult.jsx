import React, { use } from 'react'
import { playNewSong } from '../../../player/state/playerSlice'
import { useDispatch } from 'react-redux'

const SearchResult = ({ songs }) => {
    let dispatch = useDispatch();
    return (
        <div className='
    absolute 
    top-full left-0 
    w-full
    max-h-60
    overflow-y-auto 
    mt-2 
    bg-gray-900 
    rounded-lg 
    shadow-lg 
    p-2 
    z-50
'>
            {songs.length > 0 ? (
                songs.map((elem, index) => (
                    <div
                        onClick={() => { dispatch(playNewSong(elem)) }}
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-800 cursor-pointer transition"
                    >
                        <img
                            src={elem.thumbnail}
                            alt={elem.title}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                        />

                        <div className="flex flex-col">
                            <span className="text-white text-sm font-medium">
                                {elem.title}
                            </span>
                            <span className="text-white text-xs sm:text-sm font-medium">
                                {elem.artist}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-sm text-center py-4">
                    No results found
                </p>
            )}
        </div>
    )
}

export default SearchResult