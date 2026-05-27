import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import AxiosInstance from '../config/AxiosInstence'
import { useDispatch } from 'react-redux'
import { addUser } from '../state/authReducer'

const UseAuth = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  async function onLogin(data) {
    
    try {
      const res = await AxiosInstance.post('/auth/login', data)
      console.log(res.data)
      dispatch(addUser(res.data.user))
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }
  async function onRegister(data) {
    try {
      const res = await AxiosInstance.post('/auth/register', data)
      console.log(res.data)
      dispatch(addUser(res.data.user))
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  return {
    handleSubmit,
    errors,
    onLogin,
    onRegister,
    navigate,
    register
  }
}

export default UseAuth
