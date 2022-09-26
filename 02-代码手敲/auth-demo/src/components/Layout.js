/**
 * @Author liming
 * @Date 2022/9/26 12:57
 **/

import React from 'react';
import MainMenu from "./MainMenu";


const Layout = (props) => {
    return (
        <div>
            <MainMenu/>
            <hr/>
            {props.children}
        </div>
    );
}

export default Layout;