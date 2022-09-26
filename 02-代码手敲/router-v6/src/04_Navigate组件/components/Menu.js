/**
 * @Author liming
 * @Date 2022/9/26 10:35
 **/

import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">主页</Link>
                </li>

                <li>
                    <Link to="about">关于</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;