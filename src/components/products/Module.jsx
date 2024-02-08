import React, {useEffect, useState} from 'react';
import '../../styles/module.scss';
import stars from '../../img/products/stars.svg';
import ProductPrice from "./ProductPrice";
import Subtitle from "../UI/Subtitle";
import UIButton from "../UI/UIButton";
import Button from "./Button";
import products from "./Products";
import cartItem from "../cart/CartItem";
const Module = ({cartItems,setCartItems,product,setModuleCondition,...props}) => {

    const [description,setDescription]=useState(true);
    const [productQuantity,setProductQuantity]=useState(1);
    const closeTab=(e)=>{
        if(e.target.className==='module' || e.target.className==='module__close'){
            setModuleCondition(false);
        }
    }

    const addToCart=()=>{
        let c=1;
        const cur=cartItems.map((item)=>{
           if(item.product._id==product._id){
               item.quantity=Number(item.quantity)+Number(productQuantity);
               c=0;
           }
           return item;
        })
        if(c===1){
            const order={
                product:product,
                quantity:productQuantity,
            }
            setCartItems([...cartItems,order]);
        }
        else setCartItems(cur);
        setModuleCondition(false);
    }

    const [itemInCart,setItemInCart]=useState(false);

    useEffect(()=>{
        cartItems.forEach((e,index)=>{
            if(e.product._id===product._id){
                setProductQuantity(e.quantity);
                setItemInCart(true);
            }
        })
    },[cartItems])




    return (
        <div className={'module'} {...props} onClick={closeTab}>
            <div className={'module__wrapper'}>
                <div className={'container'}>
                    <div className={'module__functional'}>
                        <div className={'module__image'}>
                            <div className={'module__image-type'}>
                                {product?.type}
                            </div>
                            <img src={'http://localhost:5001/'+product?.imageUrl} alt={'Product'}/>
                        </div>
                        <div className={'module__menu'}>
                            <div className={'module__menu-name'}>
                                {product?.name}
                            </div>
                            <img src={stars} alt={'Rate'}/>
                            <ProductPrice product={product} className={'module__menu-price'}/>
                            <Subtitle
                                body={'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.'}
                                className={'module__menu-subtitle'}
                            />
                            <div className={'module__menu-quantity'}>
                                <span>Quantity:</span>
                                <div className={'module__menu-quantity-input'}>
                                    <input
                                        value={productQuantity}
                                        onChange={(e)=>{
                                                setProductQuantity(Number(e.target.value));
                                            }
                                        }/>
                                </div>
                                <UIButton
                                    body={'Add To Cart'}
                                    className=
                                        {
                                            !itemInCart
                                            ?
                                                'button_blue'
                                                :
                                                'button_cart'
                                        }
                                    onClick={() => addToCart()}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'module-description'}>
                            <Button
                                body={'Product Description'}
                                className={
                                    !description
                                        ?
                                        'button_clicked'
                                        :
                                        'button'
                                }
                                onClick={
                                    ()=>{
                                        setDescription(true);
                                    }
                                }
                            />
                            <Button
                                body={'Additional Info'}
                                className={
                                    description
                                        ?
                                        'button_clicked'
                                        :
                                        'button'
                                }
                                onClick={
                                    ()=>{
                                        setDescription(false);
                                    }
                                }
                            />
                    </div>
                    <div className={'module-description-text'}>
                        {
                            description
                                ?
                                <Subtitle body={'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.'}/>
                                :
                                <Subtitle body={'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'}/>
                        }
                    </div>
                    <button className={'module__close'}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Module;