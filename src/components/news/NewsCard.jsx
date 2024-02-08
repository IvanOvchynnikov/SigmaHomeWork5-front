import React from 'react';
import auth from '../../img/news/author.svg'
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";
import UIButton from "../UI/UIButton";
const NewsCard = ({date,author,title}) => {
    return (
        <div className={'news__cards-item'}>
            <div className={'news__cards-item-date'}>
                {date}
            </div>
            <div className={'news__cards-item-content'}>
                <div className={'news__cards-item-content-author'}>
                    <img src={auth} alt={'author'}/>
                    <span>{author}</span>
                </div>
                <Title body={title} className={'news__cards-item-content-title'}/>
                <Subtitle body={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'} className={'news__cards-item-content-subtitle'}/>
                <UIButton body={'Read More'} className={'ui__button'}/>
            </div>
        </div>
    );
};

export default NewsCard;