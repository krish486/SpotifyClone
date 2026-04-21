import React from 'react'
import { Outlet } from 'react-router'
import { useSelector, useStore } from 'react-redux'
import { Navigate } from 'react-router'

const MainLayout = () => {

    let { isAuthenticated } = useSelector((state) => state.auth)
    

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }


    return (
        <Outlet />
    )
}

export default MainLayout
