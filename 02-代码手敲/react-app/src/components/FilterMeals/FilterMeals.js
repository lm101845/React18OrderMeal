/**
 * @Author liming
 * @Date 2022/9/8 16:21
 **/

import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import classes from "./Filtermeals.module.css"

const FilterMeals = (props) => {
    const [keyword,setKeyword] = useState('')
    //通过Effect来改造练习
    //降低数据过滤的次数，提高用户体验
    //用户输入完了你再过滤，用户输入的过程中，不要过滤
    useEffect(() => {
        const timer = setTimeout(() =>{
            console.log('Effect触发了');
            props.onFilter(keyword)
        },1000)

        //在Effect的回调函数中，可以指定一个函数作为返回值
        console.log("Effect执行了");
        //这个函数可以称其为清理函数，它会在下次Effect执行前调用
        //我们可以在这个函数中，做一些工作来清除上次Effect执行所带来的影响
        return ()=>{
            console.log('Effect的返回函数执行了')
            clearTimeout(timer)
        }
    }, [keyword]);
    
    const inputChangeHandler = e => {
        console.log(e.target.value)
        setKeyword(e.target.value.trim())
        //根据这个keyword对这个数组(mealsData)进行过滤
        //props.onFilter(keyword);
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    value={keyword}
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"}/>
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}/>
            </div>
        </div>
    );
}

export default FilterMeals;