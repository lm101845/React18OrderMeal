import React, {useReducer, useState} from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context"
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";
//模拟一组食物的数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];

//定义CartReducer(要在组件外部定义)
const cartReducer = (state, action) => {
    //浅复制购物车
    const newCart = {...state}
    switch (action.type){
        case "ADD":
            if (newCart.items.indexOf(action.meal) === -1) {
                newCart.items.push(action.meal);
                action.meal.amount = 1;
            } else {
                action.meal.amount++;
            }
            newCart.totalAmount++;
            newCart.totalPrice += action.meal.price;
            return newCart;
        case "REMOVE":
            action.meal.amount--;
            if (action.meal.amount === 0) {
                newCart.items.splice(newCart.items.indexOf(action.meal), 1);
            }
            newCart.totalAmount--;
            newCart.totalPrice -= action.meal.price;
            return newCart;
        case "CLEAR":
            newCart.items.forEach(item=>delete item.amount)
            newCart.items = [];
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart;
        default:
            return state;
    }
}

const App = () => {
    //创建一个state，用来存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    //创建一个state,用来存储购物车的数据
    /**
     * 1.商品[]
     * 2.商品总数(totalAmount)
     * 3.商品总价(totalPrice)
     */

    //写法1：
    // const [cartData, setCartData] = useState({
    //     items: [],
    //     totalAmount: 0,
    //     totalPrice: 0
    // })

    //写法2：代码优化：使用Reducer来替换state
    const [cartData, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    //创建一个过滤meals的一个函数
    const filterHandler = (keyword) => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData)
    }
    //向购物车中添加商品——点击加按钮的时候就调用一次
    // const addItem = meal => {
    //     //meal表示要添加进购物车的商品
    //     //对购物车进行复制
    //     //如果数组或对象中的元素是引用类型的元素，那么就是浅拷贝,改newCart，也会影响到cartData
    //     //https://blog.csdn.net/weixin_43925630/article/details/111299038
    //     console.log(cartData, 'cartData')
    //     const newCart = {...cartData}
    //     console.log(newCart.items, 'newCart.items')
    //     console.log(meal, 'meal')
    //
    //     //将meal添加到购物车中——有一个问题：如果商品已经存在，就不用加了
    //     //所以我们在添加之前要做一个判断——判断购物车中是否存在该商品
    //     if (newCart.items.indexOf(meal) === -1) {
    //         console.log('第一次添加')
    //         newCart.items.push(meal);
    //         meal.amount = 1;
    //     } else {
    //         console.log('第二次添加')
    //         //修改商品的数量
    //         meal.amount++;
    //     }
    //     //增加总数
    //     newCart.totalAmount++;
    //     //增加总金额
    //     newCart.totalPrice += meal.price;
    //
    //     //重新设置购物车
    //     setCartData(newCart)
    // }

    //减少商品的数量
    // const removeItem = meal => {
    //     //复制购物车
    //     const newCart = {...cartData}
    //     //减少商品数量
    //     meal.amount--;
    //     //检查商品数量是否归0
    //     if (meal.amount === 0) {
    //         //从购物车中移除商品
    //         newCart.items.splice(newCart.items.indexOf(meal), 1);
    //     }
    //     //修改商品的总数和总金额
    //     newCart.totalAmount--;
    //     newCart.totalPrice -= meal.price;
    //     // setCartData(newCart)
    // }

    //清空购物车
    // const clearCart = ()=>{
    //     const newCart = {...cartData}
    //     //将购物车中商品的数量都清零
    //     newCart.items.forEach(item=>delete item.amount)
    //     newCart.items = [];
    //     newCart.totalAmount = 0;
    //     newCart.totalPrice = 0;
    //     // setCartData(newCart)
    // }

    return (
        // <CartContext.Provider value={{...cartData, addItem, removeItem,clearCart}}>
        <CartContext.Provider value={{...cartData, cartDispatch}}>
            <div>
                <FilterMeals onFilter={filterHandler}/>
                <Meals
                    mealsData={mealsData}
                />
                <Cart/>
            </div>
        </CartContext.Provider>
    )
}

export default App;
