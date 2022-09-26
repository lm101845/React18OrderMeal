/**
 * @Author liming
 * @Date 2022/9/26 10:26
 **/

import React from 'react';
// import Hello from "./Hello";
import {Routes,Route,Outlet,Navigate} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <Navigate to="/student/1" replace/>
            {/*注意：前面的斜杠不要忘了写！！！*/}
            {/*Navigate用来跳转到指定位置，相当于Redirect*/}
            {/*
                Navigate 组件用来跳转到指定的位置
                    默认使用push跳转,所以返回上一页就跳 过去了
            */}
            <h2>关于我们，其实是4个人</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
                <li>赵云</li>
            </ul>
            {/*通过子路由来对Hello进行映射  /about/hello*/}
            {/*写法1：不太好*/}
            {/*<Routes>*/}
            {/*    <Route path="hello" element={<Hello/>}>*/}
            {/*        /!*前面已经有about了，所以这个子路由只需要写一个hello就可以了*!/*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*
                Outlet 用来表示嵌套路由中的组件
                    当嵌套路由中的路径匹配成功了，Outlet则表示嵌套路由中的组件
                    当嵌套路由中的路径没有匹配成功，Outlet就什么都不是
                    你挂载了Hello，就显示Hello。你挂载了Abc,就显示Abc
            */}
            <Outlet/>
        </div>
    );
}

export default About;