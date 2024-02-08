import React, {useEffect, useState} from 'react';
import '../../styles/products.scss';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import Product from "../UI/Product";
import axios from 'axios'
import product from "../UI/Product";
import UIButton from "../UI/UIButton";
import Module from "./Module";
import {compile} from "sass";


const Products = ({cartItems,setCartItems}) => {

    const [products, setProducts] = useState([]);
    const [loadMore,setLoadMore] = useState(false)
    const [moduleCondition, setModuleCondition] = useState(false);
    const [moduleProduct, setModuleProduct] = useState();
    const fetchData=async()=>{
            const response = await axios.get('http://localhost:5001/products')
            setProducts(response.data)
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const showAllProducts=(e)=>{
        e.preventDefault();
        setLoadMore(!loadMore);
        console.log('ec');
    }
    const showModule=(product)=>{
        setModuleCondition(true);
        setModuleProduct(product);
        console.log(1);
    }

    return (
        <div className={'products'}>
            {
                moduleCondition
                    ?
                    <Module product={moduleProduct} cartItems={cartItems} setCartItems={setCartItems} setModuleCondition={setModuleCondition}/>
                    :
                    <>
                    </>
            }
            <div className={'container'}>
                {
                    !loadMore?
                        <>
                            <SupTitle body={'Categories '}/>
                            <Title body={'Our Products'} className={'products__title'}/>
                        </>
                        :
                        <>
                        </>
                }
               <div className={'products__content'}>
                   {
                       loadMore
                           ?
                           <>
                               {
                                  (products.filter(product=>product?.discount===true)).map(product =>{
                                       return <Product
                                           product={product}
                                           key={product._id}
                                           onClick={()=>{
                                               return showModule(product);
                                           }
                                       }/>
                                      }
                                   )
                               }
                               {
                                   (products.filter(product=>product?.discount!==true)).map(product =>{
                                       return <Product
                                           product={product}
                                           key={product._id}
                                           onClick={()=>{
                                               return showModule(product);
                                           }
                                           }/>
                                       }
                                   )
                               }
                           </>
                           :
                           ((products.filter(product=>product?.discount===true)).filter((product,idx)=>idx<8)).map(product =>{
                               return <Product
                                   product={product}
                                   key={product._id}
                                   onClick={()=>{
                                       return showModule(product);
                                   }
                                   }/>
                               }
                           )
                   }
               </div>
                <UIButton
                    onClick={showAllProducts}
                    className={['products__button', loadMore? 'button_blue' : 'button_black'].join(' ')}
                    body={loadMore ? "Hide All" : "Load More"}
                >
                </UIButton>
            </div>
        </div>
    );
};

export default Products;