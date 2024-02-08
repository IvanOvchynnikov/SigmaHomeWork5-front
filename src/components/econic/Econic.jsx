import React from 'react';
import land from '../../img/econic/background.png'
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import EconicItem from "./EconicItem";
import '../../styles/econic.scss'
const Econic = () => {
    return (
        <div className={'econic'}>
            <div className={'econic__img'}>
                <img src={land} alt={'Eco Landscape'}/>
            </div>
            <div className={'econic__content'}>
                <SupTitle body={'Eco Friendly'}/>
                <Title body={'Econic is a Friendly Organic Store'} className={'econic__content-title'}/>
                <div className={'econic__content-list'}>
                    <EconicItem title={'Start with Our Company First'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                    <EconicItem title={'Learn How to Grow Yourself'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                    <EconicItem title={'Farming Strategies of Today'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                </div>
            </div>
        </div>
    );
};

export default Econic;