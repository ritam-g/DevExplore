import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'


const Public = () => {
  const user = useSelector(state => state.auth.user)
  const isLoading = useSelector(state => state.auth.isLoading)
  if (isLoading) <h1>Loading...</h1>

  if (user) return <Navigate to="/home" />
  return (
    <>
      <Outlet />
    </>
  )
}

export default Public
