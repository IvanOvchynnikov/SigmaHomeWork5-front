import React, {useState} from 'react';
import '../../styles/cartForm.scss'
import UIButton from "../UI/UIButton";
import axios from 'axios';
import {Link, NavLink, useNavigate} from "react-router-dom";

const CartForm = ({cartItems,setCartItems,...props}) => {

    const navigator=useNavigate();
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [message,setMessage]=useState('');
    const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    const[nameError,setNameError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const[phoneError,setPhoneError]=useState(false);
    const[addressError,setAddressError]=useState(false);

    const submitOrder=async(e)=>{
        e.preventDefault();
        if(fullName.length && emailReg.test(email) && phoneReg.test(phone) && address.length>=5){
            const response=await axios.post('http://localhost:5001/orders',{
                fullName:fullName,
                email:email,
                phone:phone,
                address:address,
                message:message,
                order: cartItems
            });
            setCartItems([]);
            navigator('/orderFinished');
        }
        if(!fullName.length){
            setNameError(true);
        }
        if(!emailReg.test(email)){
            setEmailError(true);
        }
        if(!phoneReg.test(phone)){
            setEmailError(true);
        }
        if(address.length<5){
            setAddressError(true);
        }


    }

    return (
        <form className={'cartMain__form'}>
            <div className={'cartMain__form-name'}>
                <input value={fullName} type={'text'} placeholder={'Enter your name'}
                       className={nameError?'cartMain__form-input1 error':'cartMain__form-input1'}
                       onChange={(e)=>setFullName(e.target.value)}/>
            </div>
            <div className={'cartMain__form-email'}>
                <input value={email} type={'email'} placeholder={'example@yourmail.com'}
                       className={emailError?'cartMain__form-input1 error':'cartMain__form-input1'}
                       onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className={'cartMain__form-address'}>
                <input value={address} type={'text'} placeholder={'Your company  address'}
                       className={addressError?'cartMain__form-input1 error':'cartMain__form-input1'}
                       onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className={'cartMain__form-phone'}>
                <input value={phone} type={'tel'} placeholder={'Enter your phone'}
                       className={phoneError?'cartMain__form-input1 error':'cartMain__form-input1'}
                       onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className={'cartMain__form-extra'}>
                <input value={message} type={'text'} placeholder={'some extra information'} className={'cartMain__form-input2'}
                       onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            <div className={'cartMain__form-button'}>
                <UIButton body={'Confirm'} className={'button_blue'} onClick={submitOrder}/>
            </div>
        </form>
    );
};

export default CartForm;