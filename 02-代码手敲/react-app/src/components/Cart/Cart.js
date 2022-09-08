/**
 * @Author liming
 * @Date 2022/9/8 17:00
 **/

import React, {useContext} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
const Cart = () => {
    const ctx = useContext(CartContext)
    return (
        <div className={classes.Cart}>
            {/*引入购物车详情*/}
            <CartDetails/>
            <div className={classes.Icon}>
                <img src={iconImg} alt="默认图片"/>
                {ctx.totalAmount === 0 ? null : <span className={classes.totalAmount}>{ctx.totalAmount}</span>}

            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ""}`}>去结算</button>
        </div>
    );
}

export default Cart;