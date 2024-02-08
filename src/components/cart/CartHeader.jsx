import React from 'react';
import '../../styles/cartHeader.scss'
import bg from '../../img/cart/cartHeader.png'
import Title from "../UI/Title";
const CartHeader = () => {
    return (
        <div className={'cartHeader'}>
            <Title body={'Cart'} className={'cartHeader__title'}></Title>
        </div>
    );
};

export default CartHeader;