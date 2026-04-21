import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSearchHook } from '../../hooks/SearchHook'
import SearchResult from './SearchResult'

const Searchbar = () => {

    let { searchValue, search, searched } = useSearchHook();

    return (
        <div className="
            flex items-center gap-2 
            bg-[#1f1f1f] 
            px-3 py-2 
            rounded-full 
            w-full 
            sm:w-full 
            md:w-[70%] 
        relative
            ">
            <FaSearch className="text-gray-400" />
            <input
                onChange={search}
                type="text"
                placeholder="What do you want to play?"
                className="bg-transparent outline-none text-xs sm:text-sm w-full placeholder-gray-400"
            />
            {
                searchValue ? <SearchResult songs={searched} /> : null
            }
        </div>
    )
}

export default Searchbar
