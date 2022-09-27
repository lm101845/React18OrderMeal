/**
 * @Author liming
 * @Date 2022/9/27 16:03
 **/

import React, {useEffect, useInsertionEffect, useLayoutEffect, useRef, useState} from 'react';
import Some from "./components/Some";
import useMyHook from "./hooks/useMyHook";

const App = () => {
    const [count,setCount] = useState(1)
    const [show,setShow] = useState(false)
    const h3Ref = useRef();
    const divRef = useRef()
    useMyHook()
    return (
        <div>
            <h1>App</h1>
            <h3 ref={h3Ref}>{count}</h3>
            <button onClick={()=>setCount(prevState => ++prevState)}>点我</button>
            <hr/>
            <button onClick={()=>setShow(prevState => !prevState)}>显示/隐藏</button>
            {
                show && <div ref={divRef} style={{width:100,height:100,backgroundColor:'red'}}/>
            }
        </div>
    );
}

export default App;