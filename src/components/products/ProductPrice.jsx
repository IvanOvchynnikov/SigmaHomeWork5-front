import React from 'react';
import '../../styles/product__price.scss';

const ProductPrice = ({product,className,...props}) => {
    return (
        <div className={['product__price',className].join(' ')} {...props}>
            {
                product?.discount
                    ?
                    <>
                        <div className={'product__price_nonAct'}>
                            ${Number(product?.price).toFixed(2)}
                        </div>
                        <div className={'product__price_act'}>
                            ${Number(product?.discountPrice).toFixed(2)}
                        </div>
                    </>
                    :
                    <>
                        <div className={'product__price_act'}>
                            ${Number(product?.price).toFixed(2)}
                        </div>
                    </>
            }
        </div>
    );
};

export default ProductPrice;