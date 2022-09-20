import React from 'react';
import './store/index';
import {useDispatch, useSelector} from "react-redux";
import {setAge, setName} from './store'

const App = () => {
    // useSelector(); 用来加载state中的数据
    const student = useSelector(state => state.student)
    //通过useDispatch()来获取派发器对象
    const dispatch = useDispatch();
    console.log(dispatch,'dispatch')

    //获取action的构建器

    const setNameHandler = ()=>{
        dispatch(setName('沙和尚'))
        //setName会自动给你返回一个action对象
    }

    const setAgeHandler = ()=>{
        dispatch(setAge(33))
    }
    return (
        <div>
            {/*<p>{JSON.stringify(student)}</p>*/}
            {/*<hr/>*/}
            <p>
                {student.name}---
                {student.age}---
                {student.gender}---
                {student.address}
            </p>
            <button onClick={setNameHandler}>修改name</button>
            <button onClick={setAgeHandler}>修改年龄</button>
        </div>
    );
};

export default App;
