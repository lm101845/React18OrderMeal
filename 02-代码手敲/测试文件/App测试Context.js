import React, {useState} from 'react';
import Meals from "./components/Meals/Meals";
// import Checkout from "./components/Checkout";
// import B from "./components/B";
// import TestContext from './store/testContext'
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

const App = () => {
    //创建一个state，用来存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    //创建一个state,用来存储购物车的数据
    /**
     * 1.商品[]
     * 2.商品总数(totalAmount)
     * 3.商品总价(totalPrice)
     */
    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    //向购物车中添加商品——点击加按钮的时候就调用一次
    const addMealHandler = (meal) => {
        //meal表示要添加进购物车的商品
        //对购物车进行复制
        const newCart = {...cartData}

        //将meal添加到购物车中——有一个问题：如果商品已经存在，就不用加了
        //所以我们在添加之前要做一个判断——判断购物车中是否存在该商品
        if (newCart.items.indexOf(meal) === -1) {
            newCart.items.push(meal);
            meal.amount = 1;
        } else {
            //修改商品的数量
            meal.amount++;
        }
        //增加总数
        newCart.totalAmount++;
        //增加总金额
        newCart.totalPrice += meal.price;

        //重新设置购物车
        setCartData(newCart)
    }

    //减少商品的数量
    const subMealHandler = (meal) => {
        //复制购物车
        const newCart = {...cartData}
        //减少商品数量
        meal.amount--;
        //检查商品数量是否归0
        if (meal.amount === 0) {
            //从购物车中移除商品
            newCart.items.splice(newCart.items.indexOf(meal), 1);
        }
        //修改商品的总数和总金额
        newCart.totalAmount--;
        newCart.totalPrice -= meal.price;
        setCartData(newCart)
    }
    return (
        <div>
            {/*<Checkout/>*/}
            {/*A不是TestContext的子组件，它访问的就是孙悟空了*/}
            {/*<TestContext.Provider value={{name: '猪八戒', age: 28}}>*/}
            {/*    <Checkout></Checkout>*/}
            {/*    <TestContext.Provider value={{name: '沙和尚', age: 38}}>*/}
            {/*        <B></B>*/}
            {/*    </TestContext.Provider>*/}
                <Meals
                    mealsData={mealsData}
                    onAdd={addMealHandler}
                    onSub={subMealHandler}
                />
            {/*</TestContext.Provider>*/}
        </div>
    )
}

export default App;
