import React from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import fruits from '../../img/about/fruits_about.png'
import '../../styles/about.scss'
import AboutItem from "./AboutItem";
import vegan from '../../img/about/vegan.svg'
import mailbox from '../../img/about/mailbox.svg'
import UIButton from "../UI/UIButton";
import Subtitle from "../UI/Subtitle";

const About = () => {
    return (
        <div className={'about'}>
            <div className={'container'}>
                <img src={fruits} alt={'Fruits'}/>
                <div className={'about__content'}>
                    <SupTitle body={'About Us'} className={'about__suptitle'}/>
                    <Title body={'We Believe in Working Accredited Farmers'} className={'about__title'}/>
                    <Subtitle
                        body={'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.'}
                        className={'about__subtitle'}
                    />
                    <AboutItem
                        title={'Organic Foods Only'}
                        subtitle={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'}
                        image={vegan}
                    />
                    <AboutItem
                        title={'Quality Standards'}
                        subtitle={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'}
                        image={mailbox}
                    />
                    <UIButton body={'Shop Now'} className={'button_blue about__item_button'}/>
                </div>
            </div>
        </div>
    );
};

export default About;