import React, { useEffect } from 'react'
import AxiosInstance from './config/AxiosInstence.jsx';
import { RouterProvider } from 'react-router';
import AppRoutes from './routes/AppRoutes.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, setLodading } from './state/authReducer.jsx';
const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)
  useEffect(() => {
    (async () => {
      try {
        dispatch(setLodading(true))
        const res = await AxiosInstance.get('/auth/me')
        dispatch(addUser(res.data.user))
      } catch (error) {
        console.log("====================================",error);
        dispatch(removeUser())
      }

    })()
  }, [])
  return (
    <>

      <RouterProvider router={AppRoutes} />
    </>
  )
}

export default App
