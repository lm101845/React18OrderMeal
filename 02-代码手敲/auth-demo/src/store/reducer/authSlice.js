/**
 * @Author liming
 * @Date 2022/9/26 16:48
 **/
import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    //写法1：对象
    // initialState:{
    //     //数据初始化的时候，要先看本地存储里面有没有
    //     isLogin:false,
    //     token:'',
    //     user: null
    // },

    //写法2：函数
    initialState: () => {
        const token = localStorage.getItem("token");
        //服务器发送给我们的token默认有效期为一个月
        //如果没有token，就返回空，有token，就返回localStorage里面的值
        if (!token) {
            return {
                isLogin: false,
                token: '',
                user: null,
                expirationTime:0    //登录状态失效时间
            }
        }
        return {
            isLogin: true,
            token,
            user: JSON.parse(localStorage.getItem("user")),
            expirationTime: +localStorage.getItem("expirationTime")
        }
    },
    reducers: {
        login(state, action) {
            //这里的数据直接存到内存里了，一刷新就没有了
            state.isLogin = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            //获取当前时间戳
            const currentTime = Date.now()
            //设置登录有效时间
            const timeout = 1000 * 60 * 60 * 24 * 7;   //登录有效期是1周
            // const timeout = 10000;   //登录有效期是10s

            state.expirationTime = currentTime + timeout; // 设置失效日期
            console.log(state.expirationTime,'失效日期')
            localStorage.setItem("expirationTime", state.expirationTime + "");
            //我们可以把数据存储到本地的LocalStorage中，就可以持久化存储了
            //注意：本地存储只能存字符串
            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        loginout(state) {
            state.isLogin = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            localStorage.removeItem('expirationTime');
        }
    }
})

export const {login,loginout} = authSlice.actions;