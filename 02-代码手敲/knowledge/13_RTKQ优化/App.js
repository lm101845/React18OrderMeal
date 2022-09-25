import React from 'react';
import {useGetStudentsQuery} from "./store/studentApi";
import StudentList from "./components/StudentList";

const App = () => {

    //调用API查询数据
    const result = useGetStudentsQuery(null, {
        //useQuery可以接收一个对象作为第2个参数，通过该对象可以对请求进行配置
        //用来指定useQuery返回的结果
        // selectFromResult: result => {
        //     if (result.data) {
        //         result.data = result.data.filter(item => item.attributes.age < 18)
        //     }
        //     return result;
        // },
        pollingInterval: 0,
        //设置轮询间隔，单位毫秒，如果为0则表示不轮询
        skip: false,
        //设置是否跳过当前请求，默认false,不跳
        refetchOnMountOrArgChange: false,
        //设置是否每次都重新加载数据,false表示正常使用缓存，true表示每次都重载数据，数字表示数据缓存时间，单位为秒
        refetchOnFocus: true,
        //是否在重新获取焦点时重载数据
        refetchOnReconnect:true,
        //是否支持网断了重连
    });
    // console.log(result,'result')
    /**
     currentData: undefined // 当前参数的最新数据
     data: undefined // 最新的数据
     isError: false // 布尔值，是否有错误
     error: Error() // 对象，有错时才存在
     isFetching: true // 布尔值，数据是否在加载
     isLoading: true // 布尔值，数据是否第一次加载
     isSuccess: false // 布尔值，请求是否成功
     isUninitialized: false // 布尔值，请求是否还没有开始发送
     refetch: ƒ () // 一个函数，用来重新加载数据
     status: "pending" // 字符串，请求的状态
     * */
    const {data: stus, isSuccess, isLoading, refetch, currentData} = result
    // console.log(result.data === result.currentData, '是否相等')
    // console.log(result.data, result.currentData);
    //这个数据是一个异步的加载，这个数据可能还没有回来
    // console.log(data,isSuccess, 'data','isSuccess')
    //调用API中的钩子查询数据
    //这个钩子函数它会返回一个对象作为返回值，请求过程中相关数据都在该对象中存储
    return (
        <div>
            <button onClick={() => refetch()}>刷新</button>
            {isLoading && <p>数据加载中... </p>}
            {isSuccess && <StudentList stus={stus}/>}
        </div>
    );
};

export default App;
