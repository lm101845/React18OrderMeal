/**
 * @Author liming
 * @Date 2022/9/8 9:47
 **/

/**
 * Context相当于一个公共的存储空间
 * 我们可以将多个组件中都需要访问的数据，统一存储到一个Context中
 * 这样无需通过props逐层传递，即可使组件访问到这些数据
 * 通过React.createContext()创建context
 */

import React from 'react'
const TestContext = React.createContext({
    //我们真正的数据是在组件里面定义的，不是在这里定义的
    name:'孙悟空',
    age:18
})

export default TestContext