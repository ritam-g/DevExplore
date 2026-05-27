import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
            state.isLoading=false
        },
        setLodading:(state,action)=>{
            state.isLoading=action.payload
        },
        removeUser:(state)=>{
            state.user=null
            state.isLoading=false
        }
    }
})

export const {addUser,setLodading ,removeUser}=authSlice.actions
export default authSlice.reducer

