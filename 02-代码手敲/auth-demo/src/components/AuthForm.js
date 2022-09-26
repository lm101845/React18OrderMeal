/**
 * @Author liming
 * @Date 2022/9/26 13:00
 **/

import React, {useRef, useState} from 'react';
import {useRegisterMutation, useLoginMutation} from "../store/api/authApi";
import {useDispatch} from "react-redux";
import {login} from "../store/reducer/authSlice";
import {useLocation, useNavigate} from "react-router-dom"

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    //引入注册API
    const [regFn,{error:regError}] = useRegisterMutation();
    const [loginFn,{error:loginError}] = useLoginMutation();

    const usernameInp = useRef();
    const pwdInp = useRef();
    const emailInp = useRef();
    //这里省事，用的非受控表单

    //获取dispatch
    const dispatch = useDispatch();

    //获取Navigate
    const navigate = useNavigate();

    //获取location
    const location = useLocation()
    console.log(location,'auth-location');

    const from = location.state?.preLocation?.pathname || "/";
    console.log(from,'fromxxx')
    const submitHandler = (e) => {
        e.preventDefault();
        //获取用户输入的内容
        const username = usernameInp.current.value;
        const password = pwdInp.current.value;
        // console.log(username);
        // console.log(password);
        //处理登录功能
        if(isLoginForm){
            console.log('登录--->',username,password)
            loginFn({
                identifier: username,
                password
            }).then(res=>{
                console.log(res,'登录')
                if(!res.error){
                    console.log('登录成功')
                    //登录成功后，向系统中添加一个标识，标记用户的登录状态
                    //登录状态(布尔值,token(jwt--服务器自动生成的),用户信息)
                    //重定向，跳转页面到之前的目录
                    dispatch(login({
                        token:res.data.jwt,
                        user:res.data.user
                    }))
                    navigate(from,{replace:true})
                }
            })
        }else{
            const email = emailInp.current.value;
            console.log('注册--->',username,password,email)
            regFn({
                username,
                password,
                email
            }).then(res=>{
                console.log(res,'res')
                if(!res.error){
                    //注册成功,让用户输入一下用户名，密码，然后再让他登录
                    setIsLoginForm(true)
                }
            })
        }
    }
    return (
        <div>
            <p style={{color:'red'}}>
                {regError && JSON.stringify(regError.data.error.message)}
            </p>
            <p style={{color:'red'}}>
                {loginError && JSON.stringify(loginError.data.error.message)}
            </p>
            <h2>{isLoginForm ? "登录" : "注册"}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder={"用户名"}/>
                </div>

                {
                    !isLoginForm &&
                    <div>
                        <input ref={emailInp} type="email" placeholder={"电子邮件"}/>
                    </div>
                }
                <div>
                    <input ref={pwdInp} type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button>{isLoginForm ? "登录" : "注册"}</button>
                    <a href="#" onClick={e=>{
                        e.preventDefault()
                        setIsLoginForm(prevState => !prevState)
                    }}>
                        {isLoginForm ? "没有账号？点击注册" : "已有账号？点击登录"}
                    </a>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;