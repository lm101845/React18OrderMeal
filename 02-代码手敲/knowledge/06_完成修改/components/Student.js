import React, {useCallback, useContext, useState} from 'react';
import StuContext from "../store/StuContext";
import StudentForm from "./StudentForm";

// const Student = ({stu:{name, age, gender, address}}) => {
const Student = (props) => {
    // 等价写法：{stu:{name, age, gender, address}} = props
    // 等价于 name = props.stu.name,...
    // props整体是一个对象，它里面可能有很多属性,{} = props,我们对props进行解构
    //props {stu:{id:xxx,attributes:{name:xxx,age:xxx}}}

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEdit, setIsEdit] = useState(false)

    const ctx = useContext(StuContext);

    const delStu = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            //删除学生
            //http://localhost:1337/api/students/4
            const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`, {
                method: 'delete'
            })

            //判断是否成功
            if(!res.ok){
                throw new Error('删除失败！')
            }
            // const data = await res.json();  //被删除的学生，我们这里不需要这个
            //修改成功后，我们需要触发列表刷新
            ctx.fetchData();
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }, [])

    //删除学生
    const deleteHandler = () => {
        delStu()
    }

    //取消编辑
    const cancelEdit = () => {
        setIsEdit(false)
    }

    // 怎么解构？把name赋值给name,把age赋值给age。。。
    return (
        <>
            {!isEdit &&
                <tr>
                    <td>{props.stu.attributes.name}</td>
                    <td>{props.stu.attributes.gender}</td>
                    <td>{props.stu.attributes.age}</td>
                    <td>{props.stu.attributes.address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button style={{marginLeft: '5px'}} onClick={() => setIsEdit(true)}>修改</button>
                    </td>
                </tr>}
            {isEdit && <StudentForm stu={props.stu} onCancel={cancelEdit}/>}
            {loading && <tr>
                <td colSpan={5}>数据正在删除...</td>
            </tr>}
            {error && <tr>
                <td colSpan={5}>删除失败...</td>
            </tr>}
        </>
    );
};

export default Student;
