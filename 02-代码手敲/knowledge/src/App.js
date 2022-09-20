import React from 'react';
import './store/index';
import {useDispatch, useSelector} from "react-redux";
import {setAge, setName} from './store/stuSlice'
import {setAddress as setSchoolAddress,setName as setSchoolName} from "./store/schoolSlice";
//因为setName重名了，所以我们改个名字

const App = () => {
    //方法1：
    // useSelector(); 用来加载state中的数据
    // const student = useSelector(state => state.student)
    // //引入学校state
    // const school = useSelector(state => state.school)

    //方法2：同时加载2个
    const {student,school} = useSelector(state => state)

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
            <h1>显示学生信息</h1>
            <p>
                {student.name}---
                {student.age}---
                {student.gender}---
                {student.address}
            </p>
            <button onClick={setNameHandler}>修改学生姓名</button>
            <button onClick={setAgeHandler}>修改学生年龄</button>

            <hr/>

            <h1>显示学校信息</h1>
            {school.name}---
            {school.address}
            <button onClick={()=>dispatch(setSchoolName('高老庄中小'))}>修改学校姓名</button>
            <button onClick={()=>dispatch(setSchoolAddress('高老庄府前街28号'))}>修改学校地址</button>
        </div>
    );
};

export default App;
