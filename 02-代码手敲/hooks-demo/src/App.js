/**
 * @Author liming
 * @Date 2022/9/27 16:03
 **/

import React, {
    // startTransition,
    useState, useTransition
} from 'react';

import StudentList from "./components/StudentList";

const App = () => {

    const [count,setCount] = useState(1)
    const [filterWord,setFilterWord] = useState("")
    const [filterWord2,setFilterWord2] = useState("")

    const [isPending,startTransition] = useTransition();
    console.log(222)

    const changeHandler = (e)=>{
        // console.log(e.target.value)
        setFilterWord(e.target.value)
        // startTransition 的回调函数中设置setState会其他的setState生效后才执行
        startTransition(()=>{
            setFilterWord2(e.target.value)
        })
    }
    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => ++prevState)}>点我</button>

            <hr/>
            <input type="text" value={filterWord} onChange={changeHandler}/>
            {!isPending && <StudentList filterWord={filterWord2}/>}
        </div>
    );
}

export default App;