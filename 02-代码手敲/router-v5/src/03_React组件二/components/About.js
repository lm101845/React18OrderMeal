import React from 'react';

//写法1
const About = (props) => {
    console.log(props,'about中props')

    const clickHandler = () => {
        //push需要一个location作为参数
        props.history.push({
            pathname: "/student/2",
            state:{name:'哈哈哈'}
        });
    }
//写法2：
// const About = ({match}) = > {
//     console.log(match)
    return (
        <div>
            <button onClick={clickHandler}>点我一下</button>
            <h2>关于我们，其实是师徒4人</h2>
            <ul>
                <li>孙悟空</li>
                <li>猪八戒</li>
                <li>沙和尚</li>
                <li>唐僧</li>
            </ul>
        </div>
    );
};

export default About;
