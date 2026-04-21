import React from 'react'
import { Group, Panel } from 'react-resizable-panels'
import { Outlet } from 'react-router'
const Home = () => {
    return (
        <div className='h-[83vh] bg-black w-screen text-white'>
            <Group className='gap-2'>
                <Panel maxSize={"20%"}
                    minSize={"10%"}
                    className="bg-[#121212] p-5">
                    Left Side
                </Panel>
                <Panel className='bg-[#121212] p-5'>
                    <Outlet />
                </Panel>
                <Panel maxSize={"20%"}
                    minSize={"10%"}
                    className="bg-[#121212] p-5">
                    right Side
                </Panel>
            </Group>
        </div>
    )
}

export default Home
