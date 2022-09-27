/**
 * @Author liming
 * @Date 2022/9/27 20:53
 **/

import React from 'react';

const STU_DATA = [];

for(let i=1; i<101; i++){
    STU_DATA.push('学生'+i);
}

const StudentList = (props) => {
    // 过滤数组
    const stus = STU_DATA.filter(item => item.indexOf(props.filterWord) !== -1);

    const begin = Date.now();

    //让组件渲染至少3秒
    while (1){
        if(Date.now() - begin > 3000){
            break;
        }
    }

    return (
        <ul>
            {
                stus.map(item => <li key={item}>{item}</li>)
                //对过滤后的数组进行遍历
            }
        </ul>
    );
};

export default React.memo(StudentList);
