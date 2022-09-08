import React, {Component} from 'react';
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

/**
 * 食物列表组件
 */
const Meals = props => {
    // console.log(props,'props-Meals组件')
    return (
        //现在将滚动条设置给了Meals
        <div className={classes.Meals}>
            {props.mealsData.map(item =>
                /*这样一个一个传很麻烦，我们不用这种方式，把item当成参数整体传过去
                title={item.title}
                price={item.price}*/
                <Meal
                    key={item.id}
                    meal={item}
                />
            )}
        </div>
    );

}

export default Meals;