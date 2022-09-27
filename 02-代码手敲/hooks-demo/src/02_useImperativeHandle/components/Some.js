/**
 * @Author liming
 * @Date 2022/9/27 16:04
 **/

import React, {useImperativeHandle, useRef} from 'react';
/**
*   React.forwardRef()
*       可以用来指定组件向外部暴露的ref
*
* */
const Some = React.forwardRef((props, ref) => {
    const inputRef = useRef()
    const clickHandler = ()=>{
        //点击按钮，获取文本值
        console.log(inputRef.current.value);
    }

    //useImperativeHandle可以用来指定ref返回的值
    useImperativeHandle(ref,()=>{
        //回调函数的返回值，会成为ref的值
        // return {name:'孙悟空'}
        return {
            changeInputValue(val){
                inputRef.current.value = val
            }
        }
    })
    return (
        <div>
            <h2>Some</h2>
            {/*<h2 ref={ref}>Some</h2>*/}
            <input ref={inputRef} type="text"/>
            <button onClick={clickHandler}>Some Button</button>
        </div>
    );
})

export default Some;