import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authReducer";
const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store