import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import PlayerComponent from '../../../player/ui/PlayerComponent'

const Dashboard = () => {
    return (
        <div className='bg-black h-screen w-screen'>
            <Navbar />
            <Home />
            <PlayerComponent />
        </div>
    )
}

export default Dashboard
