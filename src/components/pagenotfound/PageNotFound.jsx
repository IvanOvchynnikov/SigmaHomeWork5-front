import React from 'react';
import '../styles/pageNotFound.scss'
import notfound from '../img/pagenotfound/notfound.svg'
import Title from "./UI/Title";
import Subtitle from "./UI/Subtitle";
import UIButton from "./UI/UIButton";
import {NavLink} from "react-router-dom";
const PageNotFound = () => {
    return (
        <div className={'page-notfound'}>
            <div className={'container'}>
                <img src={notfound} alt={'404'}/>
                <Title body={'Page not found'} className={'page-notfound__title'}/>
                <Subtitle body={'The page you are looking for doesnt exist or has been moved'} className={'page-notfound__subtitle'}/>
                <NavLink to={'/'}>
                    <UIButton body={'Go to Homepage'} className={'button_blue'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;