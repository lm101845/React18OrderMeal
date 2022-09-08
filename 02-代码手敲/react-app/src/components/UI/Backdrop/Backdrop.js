/**
 * @Author liming
 * @Date 2022/9/8 18:17
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'

const backdropRoot = document.getElementById('backdrop-root')
const Backdrop = (props) => {
    return (
        ReactDOM.createPortal(
            <div
                className={`${classes.Backdrop} ${props.className}`}>{props.children}
            </div>, backdropRoot)
        //Portal ，将子节点渲染到存在于父组件以外的 DOM 节点。
    );
}

export default Backdrop;