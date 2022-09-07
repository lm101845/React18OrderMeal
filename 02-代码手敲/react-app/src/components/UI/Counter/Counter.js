/**
 * @Author liming
 * @Date 2022/9/7 21:17
 **/

import React from 'react';
import classes from './Counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"

/**
 * 引入fontAwesome
 * npm i --save @fortawesome/fontawesome-svg-core
 * npm i --save @fortawesome/fontawesome-svg-core
 * npm i --save @fortawesome/free-regular-svg-icons
 * npm i --save @fortawesome/react-fontawesome@latest
 *
 * -引入组件
 * import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 *
 * -引入图标
 * import {faPlus} from "@fortawesome/free-solid-svg-icons"
 *
 * -使用组件
 * <FontAwesomeIcon icon={faPlus}/>
 */
//计数器的组件
const Counter = (props) => {
    //添加购物车的函数
    const addButtonHandler = () => {
        props.onAdd(props.meal);
    }

    //删除食物的函数
    const subButtonHandler = () => {
        props.onSub(props.meal);
    }
    return (<div className={classes.Counter}>
        {//减少按钮和数字不一定有
            (props.meal.amount && props.meal.amount !== 0) ?
                (<>
                    <button
                        onClick={subButtonHandler}
                        className={classes.Sub}
                    >
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <span className={classes.count}>{props.meal.amount}</span>
                </>) : null}
        {/*增加按钮一定有*/}
        <button
            className={classes.Add}
            onClick={addButtonHandler}
        >
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    </div>);
}

export default Counter;