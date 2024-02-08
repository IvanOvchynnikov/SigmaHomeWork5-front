import React, {useState} from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import UIButton from "../UI/UIButton";
import '../../styles/news.scss'
import NewsCard from "./NewsCard";

const News = () => {

    const [email,setEmail]=useState('');
    const [emailError,setEmailError]=useState(false);
    const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const subscribe=(e)=>{
        e.preventDefault();
        if(!emailReg.test(email)){
            setEmailError(true);
        }
        else setEmailError(false);
    }
    return (
        <div className={'news'}>
            <div className={'container'}>
                <SupTitle body={'News'}/>
                <div className={'news__content'}>
                    <Title body={'Discover weekly content about organic food, & more'} className={'news__content-title'}/>
                    <UIButton body={'More News'} className={'button_white'}/>
                </div>
                <div className={'news__cards'}>
                    <NewsCard title={'The Benefits of Vitamin D & How to Get It'} date={'25\nNov'} author={'By Rachi Card'}/>
                    <NewsCard title={'Our Favourite Summertime Tommeto'} date={'25\nNov'} author={'By Rachi Card'}/>
                </div>
                <form className={'news__subscribe'}>
                    <Title body={'Subscribe to our Newsletter'} className={'news__subscribe-title'}/>
                    <div className={'news__subscribe-email'}>
                        <input value={email} type={'email'} placeholder={'example@yourmail.com'}
                               className={emailError?'news__subscribe-input error':'news__subscribe-input'}
                               onChange={(e)=>setEmail(e.target.value)}/>
                        <UIButton
                            body={'Subscribe'}
                            className={'button_blue'}
                            onClick={subscribe}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default News;