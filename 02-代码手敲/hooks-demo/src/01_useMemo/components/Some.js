/**
 * @Author liming
 * @Date 2022/9/27 16:04
 **/

import React from 'react';

const Some = (props) => {
    const begin = Date.now();
    while (true){
        if(Date.now() - begin > 3000){
            break;
        }
    }
    return (
        <div>
            <h2>Some</h2>
            <h3>{props.a + props.b}</h3>
        </div>
    );
}

export default Some;