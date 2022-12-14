import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loginout} from "../store/reducer/authSlice";

const useAutoLogout = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // 创建一个useEffect，用来处理登录状态
    useEffect(() => {
        const timeout = auth.expirationTime - Date.now();
        // 判断timeout的值
        if (timeout < 6000) {
            dispatch(loginout());
            return;
        }
        const timer = setTimeout(() => {
            dispatch(loginout());
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [auth]);
};

export default useAutoLogout;