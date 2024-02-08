import React from 'react';
import SupTitle from "../UI/SupTitle";
import '../../styles/header.scss';
import Title from "../UI/Title";
import UIButton from "../UI/UIButton";
const Header = () => {
    return (
        <header className="header">
            <div className={'container'}>
                <SupTitle body={'100% Natural Food'}/>
                <Title body={'Choose the best healthier way of life'} className={'header__title'}/>
                <UIButton body={'Explore Now'} className={'header__button'}/>
            </div>
        </header>


    );
};

export default Header;