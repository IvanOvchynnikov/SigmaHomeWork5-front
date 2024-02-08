import React from 'react';
import '../styles/orderFinished.scss'
import Title from "../components/UI/Title";
const OrderFinished = () => {
    return (
        <div className={'orderFinished'}>
            <div className={'container'}>
                <Title body={'Thank you for your order'} className={'orderFinished__title'}/>
            </div>
            <div className={'orderFinished__back'}>
            </div>
        </div>
    );
};

export default OrderFinished;