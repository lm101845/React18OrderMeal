import React, {useEffect, useState} from 'react';
import './StudentForm.css';
import {useAddStudentMutation, useGetStudentsByIdQuery, useUpdateStudentMutation} from "../store/studentApi";


const StudentForm = (props) => {
    //希望用户在修改时，表单中的数据是数据库中最新的数据
    const [inputData, setInputData] = useState({
        name:  '',
        age:  '',
        gender:  '男',
        address:  ''
    });

    const [addStudent,{isSuccess:isAddSuccess}] = useAddStudentMutation();
    const [updateStudent,{isSuccess:isUpdateSuccess}] = useUpdateStudentMutation();

    //studentForm一加载，应该去自动的加载最新的学生数据
    // console.log(props.stuId,'id');
    // console.log(isSuccess,stuData);
    const {data:stuData,isSuccess} = useGetStudentsByIdQuery(props.stuId,{
        skip: !props.stuId,
        refetchOnMountOrArgChange: 2,
    })


    //调用钩子来加载数据
    useEffect(() => {
        if(isSuccess){
            setInputData(stuData.attributes)
        }
    }, [isSuccess]);


    const nameChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, name: e.target.value}));
    };

    const ageChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, age: +e.target.value}));
    };

    const genderChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, gender: e.target.value}));
    };

    const addressChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, address: e.target.value}));
    };

    const submitHandler = () => {
        addStudent(inputData);
        //重置数据
        setInputData({
            name:  '',
            age:  '',
            gender:  '男',
            address:  ''
        })
    };

    const updateHandler = () => {
        updateStudent({
            id:props.stuId,
            attributes: inputData
        })
        props.onCancel();
    };


    return (
        <>
            <tr className="student-form">
                <td><input
                    onChange={nameChangeHandler}
                    value={inputData.name}
                    type="text"/></td>
                <td>
                    <select
                        onChange={genderChangeHandler}
                        value={inputData.gender}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input
                    onChange={ageChangeHandler}
                    value={inputData.age}
                    type="text"/></td>
                <td><input
                    onChange={addressChangeHandler}
                    value={inputData.address}
                    type="text"/></td>
                <td>

                    {props.stuId && <>
                        <button onClick={()=>props.onCancel()}>取消</button>
                        <button onClick={updateHandler}>确认</button>
                    </>}
                    {!props.stuId &&
                        <button
                            onClick={submitHandler}
                        >添加
                        </button>
                    }

                </td>
            </tr>
            {/*{loading && <tr>*/}
            {/*    <td colSpan={5}>添加中...</td>*/}
            {/*</tr>}*/}
            {/*{error && <tr>*/}
            {/*    <td colSpan={5}>添加失败</td>*/}
            {/*</tr>}*/}
        </>

    );
};

export default StudentForm;
