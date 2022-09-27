import React, {useEffect} from 'react';

import {Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from "./components/NeedAuth";
import {useDispatch, useSelector} from "react-redux";
import {loginout} from "./store/reducer/authSlice";
import useAutoLogout from "./hooks/useAutoLogout";
import StudentList from "./components/Student/StudentList";
import StudentPage from "./pages/StudentPage";

function App() {
    useAutoLogout()
    return (
            <Layout>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}></Route>
                    {/*写法1：*/}
                    {/*<Route path={"/profile"} element={*/}
                    {/*    auth.isLogin ? <ProfilePage/> : <Navigate to={"/auth-form"} replace/>} >*/}
                    {/*</Route>*/}

                    {/*写法2：*/}
                    <Route path={"/profile"} element={<NeedAuth><ProfilePage/></NeedAuth>}></Route>
                    <Route path={"/auth-form"} element={<AuthPage/>}></Route>
                    <Route path={"student"} element={<NeedAuth><StudentPage/></NeedAuth>}/>
                </Routes>
            </Layout>
    )
}

export default App;
