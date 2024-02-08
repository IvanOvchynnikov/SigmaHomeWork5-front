import React, {useEffect, useState} from 'react';
import '../../styles/cartItem.scss'
import Title from "../UI/Title";
import ProductPrice from "../products/ProductPrice";

const CartItem = ({cartItems,setCartItems,product}) => {

    const [productQuantity, setProductQuantity]=useState(Number(product.quantity));

    useEffect(() => {
        setProductQuantity(Number(product.quantity));
    }, [product]);

    useEffect(()=>{
        product.quantity=productQuantity;
        const cur=cartItems.map((e)=>{
            if(e.product._id===product._id){
                e.quantity=productQuantity;
            }
            return e;
        })
        setCartItems(cur);
    },[productQuantity])

    const removeItem=()=>{
        setCartItems(cartItems.filter((e)=>e.product._id!==product.product._id));
    }
    return (
        <div className={'cartItem'}>
            <div className={'cartItem__content'}>
                <div className={'cartItem__content-img'}>
                    <img src={'http://localhost:5001/'+product.product.imageUrl} alt={product.product.name}/>
                </div>
                <Title body={product.product.name} className={'cartItem__content-title'}/>
                <ProductPrice product={product.product} className={'cartItem__content-price'}/>
            </div>
            <div className={'cartItem__quantity'}>
                <Title body={'Quantity:'} className={'cartItem__quantity-title'}/>
                <div className={'module__menu-quantity-input cartItem__quantity-input'}>
                    <input
                        value={productQuantity}
                        onChange={(e)=>{
                                setProductQuantity(Number(e.target.value));
                            }
                        }
                        />
                </div>
                <button className={'cartItem__quantity-del'} onClick={removeItem}>
                    X
                </button>
            </div>
        </div>
    );
};

export default CartItem;