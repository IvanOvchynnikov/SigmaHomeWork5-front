import React from 'react';

const OrderItem = ({order}) => {



    return (
        <div className={'admin__orders-item'}>
            <div className={'admin__orders-item-name'}>{order.fullName}</div>
            <div className={'admin__orders-item-email'}>{order.email}</div>
            <div className={'admin__orders-item-phone'}>{order.phone}</div>
            <div className={'admin__orders-item-address'}>{order.address}</div>
            <ul className={'admin__orders-item-products'}>
                {
                    order.order.map((item)=>{
                        return <div>{item.product.name} : {item.quantity}</div>
                    })
                }
            </ul>
        </div>
    );
};

export default OrderItem;