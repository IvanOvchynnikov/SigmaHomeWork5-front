import React, {useEffect, useState} from 'react';
import axios from "axios";
import Title from "../UI/Title";
import '../../styles/admin.scss'
import OrderItem from "./OrderItem";
import product from "../UI/Product";

const Admin = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const fetchOrders= async ()=>{
            const response = await axios.get('http://localhost:5001/orders')
            setOrders(response.data)
        }
        fetchOrders();
    },[]);

    const deleteOrder=async (order)=>{
        setOrders(orders.filter((item)=>item._id!==order._id));
        const response=await axios.delete(`http://localhost:5001/orders/${order._id}`,{
            params: { id: order._id },
        });
    }


    return (
        <div className={'admin'}>
            <div className={'container'}>
                {
                    orders
                        ?
                        <>
                            <Title className={'admin__title'} body={'Orders:'}/>
                            <ul className={'admin__orders'}>
                                {
                                    orders.map((item,index)=>{
                                        return(<div className={'admin__order'}>
                                            <div className={'admin__order-panel'}>
                                                <p>Order №{index+1} </p>
                                                <button className={'admin__order-close'} onClick={(e)=>{
                                                    deleteOrder(orders[index]);
                                                }
                                                }>X</button>
                                            </div>

                                            <OrderItem order={item}/>
                                        </div>)
                                    })
                                }
                            </ul>
                        </>
                        :
                        <Title className={'admin__title'} body={'The list of orders is empty'}/>

                }
            </div>
        </div>
    );
};

export default Admin;