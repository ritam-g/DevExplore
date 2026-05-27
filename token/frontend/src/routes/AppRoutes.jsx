import React from 'react'
import { createBrowserRouter } from 'react-router'
import Public from './protected/Public'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProctedRoute from './protected/ProctedRoute'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Public />, //! if user is ther then it will redirect to /home
        children: [
            {
                path: "",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },

                    {
                        path: "register",
                        element: <Register />
                    },
                ]
            }
        ]
    },
    {
        path: "/home",
        element: <ProctedRoute />, //! if !user then return to login page ok  
        children: [{
            path: "",
            element: <MainLayout />,
            children: [{
                path: "",
                element: <Home />
            }]
        }]
    }
])

export default AppRoutes