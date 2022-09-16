import React, {useCallback, useState} from 'react';
import A from "./A";


const App = () => {
    console.log('App渲染')
    const [count, setCount] = useState(1)
    const [num, setNum] = useState(1)
    //useCallback是一个钩子函数，用来创建React项目中的回调函数
    //useCallback创建的回调函数，不会总在组件重新渲染时重新创建
    /**
    *   useCallback()——相当于是对回调函数做了一个缓存
    *       参数：
    *           1. 回调函数
    *           2. 依赖数组
    *               - 当依赖数组中的变量发生变化时，回调函数才会重新创建
    *               - 如果不指定依赖数组，回调函数每次都会重新创建
    *               - 一定要将回调函数中使用到的所有变量都设置到依赖数组中
    *                   除了（setState）
    * */

    // const  clickHandler = () =>{
    //     setCount(prevState => prevState + 1)
    // }

    const  clickHandler = useCallback(()=>{
        // setCount(prevState => prevState + 1)
        setCount(prevState => prevState + num)
        setNum(prevState => num + 1)
    },[num])

    return (
        <div>
            <h2>App --{count}</h2>
            <button onClick={clickHandler}>增加</button>
            <hr/>
            <A onAdd={clickHandler}/>
            {/*把clickHandler同时也传给了A组件*/}
        </div>
    );
}

export default App;