import React from 'react';
import '../../styles/nav.scss'
import logoImg from '../../img/common/logo.svg'
import downArrow from '../../img/common/down-arrow.svg'
import { BrowserRouter,Routes, Route, NavLink } from "react-router-dom";
import Search from "./Search";
import CartNav from "./CartNav";

const Nav = ({cartItems}) => {
    return (
            <div className={'container'}>
                <nav className={'nav'}>
                    <NavLink to={'/'} className={'nav__logo'} id={'start'}>
                            <img src={logoImg} alt={'Logo'}/>
                            <div>Organick</div>
                    </NavLink>
                    <ul className={"nav__links"}>
                        <li className="nav__links-item">
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__links-item">
                            <NavLink to={'/about'}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav__links-item">
                            <NavLink to={'/pages'}>
                               Pages
                                <img src={downArrow} alt={'DownArrow'}/>
                            </NavLink>
                        </li>
                        <li className="nav__links-item">
                            <NavLink to={'/shop'}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav__links-item">
                            <NavLink to={'/projects'}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav__links-item">
                            <NavLink to={'/news'}>
                                News
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav__actions">
                        <Search/>
                        <CartNav cartItems={cartItems}/>
                    </div>
                </nav>
            </div>
    );
};

export default Nav;