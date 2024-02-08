import React from 'react';
import '../../styles/ui__product.scss';
import stars from '../../img/products/stars.svg';
import ProductPrice from "../products/ProductPrice";
import Title from "./Title";
const Product = ({product,...props}) => {
    return (
        <div className={'product'} {...props}>
            <div className={'product__type'}>{product.type}</div>
            <img src={'http://localhost:5001/'+product.imageUrl} className={'product__img'}></img>
            <div  className={'product__name'}>{product.name}</div>
            <div className={'product__rate'}>
                <ProductPrice product={product} className={'product__rate-price'}/>
                <img src={stars} className={'product__stars'}></img>
            </div>
        </div>
    );
};

export default Product;