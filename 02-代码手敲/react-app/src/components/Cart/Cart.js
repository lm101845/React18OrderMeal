/**
 * @Author liming
 * @Date 2022/9/8 17:00
 **/

import React, {useContext,useState} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
const Cart = () => {
    const ctx = useContext(CartContext)
    //添加一个state来设置详情是否显示
    const [showDetails,setShowDetails] = useState(false)

    //添加一个state来设置结账页的显示与隐藏
    const [showCheckout,setShowCheckout] = useState(false)

    //添加一个显示详情页的函数
    const toggleDetailsHandler = ()=>{
        if(ctx.totalAmount === 0) return
        setShowDetails(prevState => !prevState)
    }
    //添加一个显示结账页的函数
    const showCheckoutHandler = ()=>{
        if(ctx.totalAmount === 0){
            setShowDetails(false)
            return
        }
        setShowCheckout(true)
    }

    //点击叉号关闭结账页
    const hideCheckoutHandler = ()=>{
        setShowCheckout(false)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {/*引入结账页面*/}
            { showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
            {/*引入购物车详情*/}
            {showDetails && <CartDetails/>}
            <div className={classes.Icon}>
                <img src={iconImg} alt="默认图片"/>
                {ctx.totalAmount === 0 ? null : <span className={classes.totalAmount}>{ctx.totalAmount}</span>}

            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button
                onClick={showCheckoutHandler}
                className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ""}`}>
                去结算
            </button>
        </div>
    );
}

export default Cart;