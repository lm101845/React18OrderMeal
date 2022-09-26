/**
 * @Author liming
 * @Date 2022/9/26 17:27
 **/

import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const NeedAuth = (props) => {
    const auth = useSelector(state => state.auth)
    const location = useLocation()
    console.log(location,'location');
    return auth.isLogin
        ? props.children
        : <Navigate to={"/auth-form"} replace state={{preLocation: location}}/>
}

export default NeedAuth;