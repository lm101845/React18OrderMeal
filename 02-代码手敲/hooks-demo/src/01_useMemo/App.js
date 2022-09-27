/**
 * @Author liming
 * @Date 2022/9/27 16:03
 **/

import React, {useMemo, useState} from 'react';
import Some from "./components/Some";

function sum(a,b){
    const begin = Date.now();
    while (true){
        if(Date.now() - begin > 3000){
            break;
        }
    }
    console.log('函数执行了');
    return a + b;
}

const App = () => {
    const [count,setCount] = useState(1)
    let a = 123;
    let b = 456;
    //a,b是局部变量，组件每次渲染都会重新创建a,b，所以不能写在这里
    if(count % 10 === 0){
        a += count;
    }
    //sum函数每次组件渲染时，都会执行
    // const result = sum(123,456)
    //useMemo用来存储函数的执行结果
    // const result = useMemo(()=>{
    //     return sum(a,b)
    // },[a,b])

    const someEle = useMemo(()=>{
        return  <Some a={a} b={b}/>
    },[a,b])
    return (
        <div>
            <h1>App</h1>
            {/*<h2>result:{result}</h2>*/}
            {/*<Some a={10} b={20}/>*/}
            {someEle}
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => ++prevState)}>点我</button>
        </div>
    );
}

export default App;