import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProctedRoute = () => {
  const user = useSelector(state => state.auth.user)
  const isLoading = useSelector(state => state.auth.isLoading)

  if(isLoading) return <h1>Loading...</h1>
  
  if (!user) return <Navigate to="/" />
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProctedRoute
