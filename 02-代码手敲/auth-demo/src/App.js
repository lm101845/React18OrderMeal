import React from 'react';

import {Route, Routes, Navigate} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import {useSelector} from "react-redux";
import NeedAuth from "./components/NeedAuth";

function App() {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}></Route>
                    {/*写法1：*/}
                    {/*<Route path={"/profile"} element={*/}
                    {/*    auth.isLogin ? <ProfilePage/> : <Navigate to={"/auth-form"} replace/>} >*/}
                    {/*</Route>*/}

                    {/*写法2：*/}
                    <Route path={"/profile"} element={
                        <NeedAuth>
                            <ProfilePage/>
                        </NeedAuth>}>

                    </Route>
                    <Route path={"/auth-form"} element={<AuthPage/>}></Route>
                </Routes>
            </Layout>
        </div>
    )
}

export default App;
