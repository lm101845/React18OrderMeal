import React from 'react';

const Student = ({stu:{name, age, gender, address}}) => {
    // 等价写法：{stu:{name, age, gender, address}} = props
    // 等价于 name = props.stu.name,...
    // props整体是一个对象，它里面可能有很多属性,{} = props,我们对props进行解构
    // 怎么解构？把name赋值给name,把age赋值给age。。。
    return (
            <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
    );
};

export default Student;
