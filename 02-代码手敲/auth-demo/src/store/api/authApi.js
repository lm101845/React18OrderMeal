/**
 * @Author liming
 * @Date 2022/9/26 13:45
 **/
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:1337/api/'
    }),
    endpoints(build) {
        return {
            //注册
            register: build.mutation({
                query(user){
                    return {
                        url: 'auth/local/register',
                        method:'post',
                        body:user,   //username,password,email
                    }
                }
            }),
            //登录
            login:build.mutation({
                query(user) {
                    return {
                        url: 'auth/local',
                        method:'post',
                        body:user,   //identifier,password
                    }
                }
            })
        }
    }
})

export const {
    useRegisterMutation,
    useLoginMutation
} = authApi