/**
 * @Author liming
 * @Date 2022/9/8 10:28
 **/

import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount:0,
    totalPrice: 0,
    addItem: () => {},
    removeItem: () => {}
})

export default CartContext