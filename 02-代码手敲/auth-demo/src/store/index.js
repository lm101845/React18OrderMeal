/**
 * @Author liming
 * @Date 2022/9/26 13:51
 **/
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {authApi} from "./api/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from "./reducer/authSlice";

const store = configureStore({

    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice.reducer
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)

});

//处理缓存的问题
setupListeners(store.dispatch)

export default store;