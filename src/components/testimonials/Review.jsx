import React from 'react';
import avatar from "../../img/testimonials/girl.png";
import stars from "../../img/products/stars.svg";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const Review = ({body,name,job}) => {
    return (
            <div className={'reviewSlider-item'}>
                <img src={avatar} alt={'clientPhoto'}/>
                <img src={stars} alt={'rate'}/>
                <Subtitle body={body} className={'reviewSlider-item-subtitle'}/>
                <Title body={name} className={'reviewSlider-item-title'}/>
                <Subtitle body={job} className={'reviewSlider-item-job'}/>
            </div>
    );
};

export default Review;