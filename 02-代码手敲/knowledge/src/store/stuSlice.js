import {createSlice} from "@reduxjs/toolkit";

/**
 * @Author liming
 * @Date 2022/9/20 23:19
 **/

// createSlice 创建reducer的切片
// 它需要一个配置对象作为参数，通过对象的不同的属性来指定它的配置
const stuSlice = createSlice({
    name: 'stu',   // 用来自动生成action中的type
    initialState: {   // state的初始值
        name: '孙悟空',
        age: 18,
        gender: '男',
        address: '花果山'
    },
    reducers: {  // 指定state的各种操作，直接在对象中添加方法
        setName(state, action) {
            //可以通过不同的方法，来指定对state的不同操作
            // 两个参数：state 这个state的是一个代理对象，可以直接修改
            console.log(action, 'action')
            // state.name = '猪八戒'  //它是一个代理对象我们直接改，不用浅拷贝了
            state.name = action.payload
        },
        setAge(state, action) {
            // state.age = 28;
            state.age = action.payload;
        }
    }
})

//切片对象会自动帮助我们生成action——我们以前要store.dispatch({type: 'ADD'})这样，自己写
// actions中存储的是slice自动生成action创建器（函数），调用函数后会自动创建action对象
// action对象的结构 {type:name/函数名, payload:函数的参数}

// console.log(stuSlice)
// console.log(stuSlice.actions)

export const {setName, setAge} = stuSlice.actions;
export const {reducer:stuReducer} = stuSlice;