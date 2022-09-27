/**
 * @Author liming
 * @Date 2022/9/27 20:39
 **/

import React, {useDebugValue, useEffect} from 'react';

const UseMyHook = () => {
    useDebugValue("哈哈");
    useEffect(()=>{
        console.log('自定义钩字')
    })
}

export default UseMyHook;