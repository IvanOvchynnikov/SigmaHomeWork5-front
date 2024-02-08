import React, {useEffect, useState} from 'react';
import '../../styles/cartMain.scss'
import CartItem from "./CartItem";
import Title from "../UI/Title";
import UIButton from "../UI/UIButton";
import CartForm from "./CartForm";

const CartMain = ({cartItems, setCartItems}) => {

    const [totalPrice,setTotalPrice]=useState(0);
    const [discount,setDiscount]=useState(0);

    const totalPriceSum=(total,b)=>{
       if(b.product.discount){
           return total+b.product.discountPrice*b.quantity
       }
       return total+b.product.price*b.quantity
    }
    const discountSum=(total,b)=>{
        if(b.product.discount===true) return total+(b.product.price-b.product.discountPrice)*b.quantity;
        return total;
    }

    useEffect(()=>{
        if(cartItems.length) {
            setTotalPrice(cartItems.reduce(totalPriceSum,0));
            setDiscount(cartItems.reduce(discountSum,0));
        }
    },[cartItems]);

    const [showForm,setShowForm]=useState(false);

    return (
        <div className={'cartMain'}>
            {
                cartItems.length
                    ?
                    <div className={'container'}>
                        <div className={'cartMain__items'}>
                            {
                                cartItems.map((item) => {
                                    return <CartItem product={item} cartItems={cartItems} setCartItems={setCartItems}/>
                                })
                            }
                        </div>
                        <div className={'cartMain__bill'}>
                            <Title body={`Total Cost ${totalPrice}$`} className={'cartMain__bill-total'}/>
                            <Title body={`Discount ${discount}$`} className={'cartMain__bill-discount'}/>
                        </div>
                        {
                            showForm
                            ?
                            <CartForm cartItems={cartItems} setCartItems={setCartItems}/>
                            :
                            <div className={'cartMain__button'}>
                                <UIButton body={'To order'} className={'button_blue'} onClick={(e)=>setShowForm(true)}/>
                            </div>
                        }
                    </div>
                    :
                    <></>
            }

        </div>
    );
};

export default CartMain;