import React from 'react'
import { allsongs } from '../../api/songsApi'
import MusicCard from './MusicCard'

const AllCardComponents = () => {
    let arr = allsongs()
    return (
        <div>
            <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5 
  ">
                {arr.map((elem, index) => (
                    <MusicCard key={index} song={elem} />
                ))}
            </div>
        </div>
    )
}

export default AllCardComponents
