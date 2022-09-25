import React from 'react';
import {Redirect, Route, useRouteMatch} from "react-router-dom";
import Hello from "./Hello";


const About = (props) => {
    console.log(props,'about中props')
    const {path} = useRouteMatch();
    console.log(path,'path')
    const clickHandler = () => {

    }
    return (
        <div>
            {/*<Redirect push to={"/from"}></Redirect>*/}
            <button onClick={clickHandler}>点我一下</button>
            <h2>关于我们，其实是师徒4人</h2>
            <ul>
                <li>孙悟空</li>
                <li>猪八戒</li>
                <li>沙和尚</li>
                <li>唐僧</li>
            </ul>
            <Route path={`${path}/hello`}>
                <Hello/>
            </Route>
        </div>
    );
};

export default About;
