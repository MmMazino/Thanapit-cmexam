import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
    email: "bb@cc.dd",
    password: 5678,
    isLogin:false
}

export const authSlice = createSlice({
    name: 'authStore',
    initialState: initialState,
    reducers:{
        login:(state)=>{
            console.log("Is login funtion");
            state.isLogin = true
        },
        logout:(state)=>{
            console.log("Is logout funtion");
            state.isLogin = false
        }
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;