import React, {useEffect, useState} from 'react';
import StudentList from "./components/StudentList";
import './App.css';


const App = () => {

    const [stuData, setStuData] = useState([]);

    /*
    *   将写死的数据替换为从接口 http://localhost:1337/api/students
    *       中加载的数据
    *
    *   组件初始化时需要向服务器发送请求来加载数据(只加载一次，初始化完成后，暂时就不需要加载数据了)
    * */
    useEffect(() => {
        // 在effect中加载数据
        // fetch() 用来向服务器发送请求加载数据，是Ajax的升级版
        // 它需要两个参数：1.请求地址 2.请求信息
        fetch('http://localhost:1337/api/students')
            .then((res) => {
                // response表示响应信息
                console.log(res,'原始res')
                return res.json();// 该方法可以将响应的json直接转换为js对象
                //res.json()是一个Promise对象，所以不能直接打印！！！
            })
            .then(data => {
                console.log(data,'第2次data');
                // 将加载到的数据设置到state中
                setStuData(data.data);
            })
            .catch(() => {
            });

    }, []);
    //中括号里面什么也不传，它就初始化时就只调用一次

    return (
        <div className="app">
            <StudentList stus={stuData}/>
        </div>
    );
};

export default App;
