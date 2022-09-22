import React from 'react';
import {useGetStudentsQuery} from "./store/studentApi";
const App = () => {
    //调用API查询数据
    const obj = useGetStudentsQuery();
    console.log(obj,'obj')
    const {data,isSuccess,isLoading} = useGetStudentsQuery();
    //这个数据是一个异步的加载，这个数据可能还没有回来
    console.log(data,isSuccess, 'data','isSuccess')
    //调用API中的钩子查询数据
    //这个钩子函数它会返回一个对象作为返回值，请求过程中相关数据都在该对象中存储
    return (
        <div>
            {isLoading && <p>数据加载中... </p>}
            {isSuccess && data.data.map(item => <p key={item.id}>
                {item.attributes.name}---
                {item.attributes.age}---
                {item.attributes.gender}---
                {item.attributes.address}
            </p>)}
        </div>
    );
};

export default App;
