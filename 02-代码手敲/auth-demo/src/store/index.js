/**
 * @Author liming
 * @Date 2022/9/26 13:51
 **/
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {authApi} from "./api/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from "./reducer/authSlice";
import studentApi from "./api/studentApi";

const store = configureStore({

    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [studentApi.reducerPath]:studentApi.reducer,
        auth:authSlice.reducer
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,studentApi.middleware)

});

//处理缓存的问题
setupListeners(store.dispatch)

export default store;