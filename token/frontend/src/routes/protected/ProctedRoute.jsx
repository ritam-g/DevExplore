import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProctedRoute = () => {
 const user = useSelector(state => state.auth.user)

 if(!user) return <Navigate to="/" />
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProctedRoute
