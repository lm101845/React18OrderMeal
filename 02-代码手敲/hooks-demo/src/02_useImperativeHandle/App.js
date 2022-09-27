/**
 * @Author liming
 * @Date 2022/9/27 16:03
 **/

import React, {useEffect, useRef, useState} from 'react';
import Some from "./components/Some";

const App = () => {
    const [count,setCount] = useState(1)

    const someRef = useRef();
    useEffect(()=>{
        // console.log(someRef,'someRef')
        // someRef.current.innerText = 'Some' + count
        //通过DOM对象直接修改Some组件里面的h2元素 

        someRef.current.changeInputValue(count)
    })
    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => ++prevState)}>点我</button>
            {/*
            无法直接去获取React组件的DOM对象
                因为一个React组件中可能含有多个DOM对象
                React也不知道要给谁
            */}
            <Some ref={someRef}/>
        </div>
    );
}

export default App;