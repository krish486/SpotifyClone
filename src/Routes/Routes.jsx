import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import Login from '../features/auth/ui/Pages/Login'
import MainLayout from '../Layouts/MainLayout'
import Dashboard from '../features/dashboard/ui/Pages/Dashboard'
import AllCardComponents from '../features/dashboard/ui/components/AllCardComponents'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { AuthApi } from '../features/auth/api/AuthAPi'




const Routes = () => {

    let dispatch = useDispatch()

    let toker = localStorage.getItem('accessToken')

    useEffect(() => {
        try {
            (async () => {
                let res = await axios.get('https://dummyjson.com/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${toker}`
                    }
                });
                dispatch(AuthApi(res.data))
            })()
        }
        catch (error) {
            console.error("Error occurred while fetching access token:", error);
        }
    })

    let router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                }
            ]
        },
        {
            path: '/dashboard',
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                    children: [
                        {
                            path: "",
                            element: <AllCardComponents />
                        }
                    ]
                }
            ]
        }
    ])


    return (
        <RouterProvider router={router} />
    )
}

export default Routes
