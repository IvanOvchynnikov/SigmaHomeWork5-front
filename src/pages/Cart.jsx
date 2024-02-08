import React from 'react';
import CartHeader from "../components/cart/CartHeader";
import CartMain from "../components/cart/CartMain";
const Cart = ({cartItems,setCartItems,...props}) => {
    return (
        <>
            <CartHeader/>
            <CartMain setCartItems={setCartItems} cartItems={cartItems}/>
        </>
    );
};

export default Cart;