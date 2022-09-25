/**
 * @Author liming
 * @Date 2022/9/22 15:24
 **/

import {configureStore} from "@reduxjs/toolkit";
import studentApi  from "./studentApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
         [studentApi.reducerPath]:studentApi.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware),
});

setupListeners(store.dispatch)
//设置监听器，设置以后，将会支持refetchOnFocus和refetchOnReconnect
export default store;