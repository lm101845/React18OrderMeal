/**
 * @Author liming
 * @Date 2022/9/16 17:49
 **/

import React, {useState} from 'react';
import B from "./B";

const A = () => {
    console.log('A渲染')
    const [count, setCount] = useState(1)

    const  clickHandler = () =>{
        setCount(prevState => prevState + 1)
    }

    const test = count % 4 === 0;
    return (
        <div>
            <h2>组件A --{count}</h2>
            <button onClick={clickHandler}>增加</button>
            <hr/>
            <B test={test}/>
        </div>
    );
}

// export default A;
//带缓存的A组件
export default React.memo(A);