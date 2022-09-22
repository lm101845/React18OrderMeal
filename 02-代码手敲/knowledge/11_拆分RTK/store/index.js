/**
 * @Author liming
 * @Date 2022/9/20 22:02
 **/

//使用RTK来构建store
import {configureStore} from "@reduxjs/toolkit";
import {stuReducer} from "./stuSlice";
import {schoolReducer} from "./schoolSlice";



//通过切片创建store，用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
    reducer: {
        // student: stuSlice.reducer
        student: stuReducer,
        school:schoolReducer
    }
})

export default store;