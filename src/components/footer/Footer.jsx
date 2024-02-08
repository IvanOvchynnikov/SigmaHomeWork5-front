import React from 'react';
import Title from "../UI/Title";
import FooterContactItem from "./FooterContactItem";
import '../../styles/footer.scss'
import {Link,NavLink} from "react-router-dom";
import logoImg from "../../img/common/logo.svg";
import Subtitle from "../UI/Subtitle";
import insta from '../../img/footer/insta.svg'
import facebook from '../../img/footer/facebook.svg'
import twitter from '../../img/footer/twiter.svg'
import pinterest from '../../img/footer/pinterest.svg'
import downArrow from "../../img/common/down-arrow.svg";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <div className={'footer__contact'}>
                    <Title body={'Contact us'} className={'footer__contact-title'}/>
                    <FooterContactItem title={'Email'} subtitle={'needhelp@Organia.com'}/>
                    <FooterContactItem title={'Phone'} subtitle={'666 888 888'}/>
                    <FooterContactItem title={'Address'} subtitle={'88 road,borklyn street,USA'}/>
                </div>
                <div className={'footer__main'}>
                    <NavLink to={'/'} className={'footer__main-logo'}>
                        <img src={logoImg} alt={'Logo'}/>
                        <div>Organick</div>
                    </NavLink>
                    <Subtitle
                        body={'Simply dummy text of the printing and typesetting industry Lorem Ipsum simply dummy text of the printing '}
                        className={'footer__main-subtitle'}
                    />
                    <div className={'footer__main-socials'}>
                        <a className={'footer__main-socials-item'} href={'https://instagram.com'} target={"_blank"}>
                            <img src={insta} alt={'instagram'}/>
                        </a>
                        <a className={'footer__main-socials-item'} href={'https://facebook.com'} target={"_blank"}>
                            <img src={facebook} alt={'facebook'}/>
                        </a>
                        <a className={'footer__main-socials-item'} href={'https://twitter.com'} target={"_blank"}>
                            <img src={twitter} alt={'twitter'}/>
                        </a>
                        <a className={'footer__main-socials-item'} href={'https://pinterest.com'} target={"_blank"}>
                            <img src={pinterest} alt={'pinterest'}/>
                        </a>
                    </div>
                </div>
                <div className={'footer__pages'}>
                    <Title body={'Utility Pages'} className={'footer__pages-title'}/>
                    <ul className={"footer__pages__links"}>
                        <li className="footer__pages__links-item">
                            <NavLink to={'/styleguide'}>
                               Style Guide
                            </NavLink>
                        </li>
                        <li className="footer__pages__links-item">
                            <NavLink to={'/notfound'}>
                                404 Not Found
                            </NavLink>
                        </li>
                        <li className="footer__pages__links-item">
                            <NavLink to={'/password'}>
                                Password Protected
                            </NavLink>
                        </li>
                        <li className="footer__pages__links-item">
                            <NavLink to={'/licenses'}>
                                Licences
                            </NavLink>
                        </li>
                        <li className="footer__pages__links-item">
                            <NavLink to={'/changelog'}>
                                Changelog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'footer__bottom'}>
                Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
            </div>
        </footer>
    );
};

export default Footer;