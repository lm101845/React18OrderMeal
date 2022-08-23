import React, {Component} from 'react';
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
/**
 * 食物列表组件
 */
class Meals extends Component {
    render() {
        return (
            //现在将滚动条设置给了Meals
            <div className={classes.Meals}>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
                <Meal/>
            </div>
        );
    }
}

export default Meals;