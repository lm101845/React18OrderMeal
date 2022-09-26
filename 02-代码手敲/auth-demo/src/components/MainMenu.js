/**
 * @Author liming
 * @Date 2022/9/26 12:52
 **/

import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginout} from "../store/reducer/authSlice";

const MainMenu = () => {
    const auth = useSelector(state => state.auth)
    console.log(auth,'auth')

    const dispatch = useDispatch()
    return (
        <header>
            <ul>
                <li><Link to={"/"}>首页</Link></li>
                {
                    !auth.isLogin &&  <li><Link to={"/auth-form"}>登录/注册</Link></li>
                }

                {
                    auth.isLogin &&
                    <>
                        <li><Link to={"/profile"}>{auth.user.username}</Link></li>
                        <li><Link
                            to={"/"}
                            onClick={()=>dispatch(loginout())}
                        >登出</Link></li>
                    </>
                }
            </ul>
        </header>
    );
}

export default MainMenu;