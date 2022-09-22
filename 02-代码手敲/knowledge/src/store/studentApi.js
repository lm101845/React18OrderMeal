/**
 * @Author liming
 * @Date 2022/9/22 14:56
 **/
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

//创建API对象
//createApi()用来创建RTKQ中的API对象
//RTKQ的所有功能都需要通过该对象来进行
//createApi()需要一个对象作为参数
const studentApi = createApi({
     reducerPath:'studentApi',   //Api的标识，不能和其他的API或reducer重复
     baseQuery: fetchBaseQuery({
         //用来指定查询的基础信息，发送请求使用的工具
         baseUrl:"http://localhost:1337/api"
     }),
    tagTypes:['student'],
    //用来指定API中的标签类型
    endpoints(build) {
        //endpoints用来指定API中的各种功能，是一个方法
        //build是请求的构建器，通过build来设置请求的相关信息
        return {
            getStudents:build.query({
                query(){
                    //用来指定请求的子路径
                    return "students"
                },
                transformResponse(baseQueryReturnValue, meta, arg) {
                    //用来转换响应数据格式
                    // console.log(baseQueryReturnValue,'====>');
                    return baseQueryReturnValue.data;
                },
                providesTags:[{type:'student',id:'LIST'}]
            }),
            getStudentsById:build.query({
                query(id){
                    return `students/${id}`
                },
                transformResponse(baseQueryReturnValue, meta, arg) {
                    //用来转换响应数据格式
                    // console.log(baseQueryReturnValue,'====>');
                    return baseQueryReturnValue.data;
                },
                keepUnusedDataFor: 60,
                //设置数据缓存的时间：单位秒 默认60秒
                // providesTags:['students']
                providesTags: ( result,error,id)=>[{
                    type:'student',
                    id,
                }]
            }),
            delStudent:build.mutation({
                query(id){
                    return {
                        //如果发送的不是get请求，则需要返回一个对象来设置请求的信息
                        url:`students/${id}`,
                        method:'delete',
                    }
                }
            }),
            addStudent:build.mutation({
                query(stu) {
                    return {
                        url:`students`,
                        method:'post',
                        body:{data:stu}
                        //它会自动给我们转换成JSON的
                    }
                },
                invalidatesTags:[{type:'student',id:'LIST'}]
                //当我们调用addStudent时，会使得带有students标签失效
            }),
            updateStudent:build.mutation({
                query(stu) {
                    return {
                        url:`students/${stu.id}`,
                        method:'put',
                        body:{data:stu.attributes}
                        //它会自动给我们转换成JSON的
                    }
                },
                // invalidatesTags:['students']
                invalidatesTags:((result, error, stu)=>[{type:'student',id:stu.id},{type:'student',id:'LIST'}])
            })
        }
    }
});

console.log(studentApi,'studentApi')
//Api对象创建后，对象中会根据各种方法去自动生成对应的钩子函数
//通过这些钩子函数，可以来向服务器发送请求
//钩子函数的命名规则 getStudents --> useGetStudentsQuery(名字不是瞎写的，是有命名规则的)

export const {
    useGetStudentsQuery,
    useGetStudentsByIdQuery,
    useDelStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation
} = studentApi;

export default studentApi;
