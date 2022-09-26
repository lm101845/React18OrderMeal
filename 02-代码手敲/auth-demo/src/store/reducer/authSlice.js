/**
 * @Author liming
 * @Date 2022/9/26 16:48
 **/
import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
        token:'',
        user: null
    },
    reducers:{
        login(state,action){
            state.isLogin = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        loginout(state){
            state.isLogin = false;
            state.token = null;
            state.user =null;
        }
    }
})

export const {login,loginout} = authSlice.actions;