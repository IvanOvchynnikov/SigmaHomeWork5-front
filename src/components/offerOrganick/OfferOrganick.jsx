import React, {useEffect, useState} from 'react';
import '../../styles/offerOrganick.scss'
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import Product from "../UI/Product";
import axios from "axios";
const OfferOrganick = () => {

    const [products,setProducts]=useState([]);
    const fetchData=async()=>{
        const response = await axios.get('http://localhost:5001/products')
        setProducts(response.data)
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className={'offerOrganick'}>
            <div className={'container'}>
                <SupTitle body={'Offer'}/>
                <Title body={'We Offer Organic For You'} className={'offerOrganick__title'}/>
                <div className={'offerOrganick__products'}>
                    {
                        (products.filter((e,i)=>{
                            return e.type==='Vegetable';
                        })).filter((e,i)=>{
                            return i<4;
                        }).map((e)=>{
                            return <Product product={e} style={{cursor: 'default'}}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OfferOrganick;