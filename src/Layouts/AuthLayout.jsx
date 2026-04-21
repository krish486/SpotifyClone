import React from 'react'
import { useSelector, useStore } from 'react-redux'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'

const AuthLayout = () => {
    let { isAuthenticated } = useSelector((store) => store.auth)
    console.log(isAuthenticated)


    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }


    return (
        <Outlet />
    )
}

export default AuthLayout
