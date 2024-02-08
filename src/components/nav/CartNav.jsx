import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import cart from '../../img/common/cart.svg'

const CartNav = ({cartItems}) => {
    const [cartItemsQuantity,setCartItemsQuantity]=useState(0);
    useEffect(()=> {
        let count=0;
        cartItems.forEach((e)=>{
            count+=Number(e.quantity);
        })
        setCartItemsQuantity(count);
    })
    return (
        <NavLink to={'/cart'} className="nav__actions-cart">
            <img src={cart} alt={'cart'}/>
            Cart ({cartItemsQuantity})
        </NavLink>
    );
};

export default CartNav;