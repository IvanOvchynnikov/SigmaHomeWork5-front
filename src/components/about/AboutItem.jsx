import React from 'react';
import '../../styles/about.scss'
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";
const AboutItem = ({title,subtitle,image}) => {
    return (
        <div className={'about__item'}>
            <div className={'about__item-img'}>
                <img src={image} alt={'Logo-Item'}/>
            </div>
            <div className={'about__item-content'}>
                <Title body={title} className={'about__item-title'}/>
                <Subtitle body={subtitle}/>
            </div>
        </div>
    );
};

export default AboutItem;