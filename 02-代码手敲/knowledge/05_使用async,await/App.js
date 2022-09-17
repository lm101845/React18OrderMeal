import React, {useEffect, useState} from 'react';
import StudentList from "./components/StudentList";
import './App.css';


const App = () => {

    const [stuData, setStuData] = useState([]);

    //添加一个state来记录数据是否正在加载,false表示没有加载数据
    const [loading,setLoading] = useState(false)

    //创建一个state,来记录错误信息
    const [error,setError] = useState(null)
    /*
    *   将写死的数据替换为从接口 http://localhost:1337/api/students
    *       中加载的数据
    *
    *   组件初始化时需要向服务器发送请求来加载数据(只加载一次，初始化完成后，暂时就不需要加载数据了)
    * */
    // useEffect(async () => {
    //注意：useEffect里面不能传异步函数，我们可以先在里面传一个普通函数
    useEffect( () => {
        const fetchData = async ()=>{
            try{
                //设置loading为true
                setLoading(true)
                //如果上一次有错，把上一次错误重置掉,否则它会一直保留
                setError(null)
                // 在effect中加载数据
                // fetch() 用来向服务器发送请求加载数据，是Ajax的升级版
                // 它需要两个参数：1.请求地址 2.请求信息
                const res = await fetch('http://localhost:1337/api/students');
                console.log(res,'res')
                //判断请求是否加载成功
                if(res.ok){
                    const data =  await res.json();
                    setStuData(data.data);
                    console.log(data,'data')
                    setLoading(false)
                }else {
                    throw new Error('数据加载失败！')
                }
            }catch (err){
                setError(err)
            }finally {
                setLoading(false)
            }
        };
        fetchData();
    }, []);
    //中括号里面什么也不传，它就初始化时就只调用一次

    return (
        <div className="app">
            <button>加载(刷新)数据</button>
            {/*只有数据加载完了或没有加载，才显示内容*/}
            {(!loading && !error) && <StudentList stus={stuData}/>}
            {loading && <p>数据正在加载中......</p>}
            {error && <p>数据加载异常!</p>}
        </div>
    );
};

export default App;
