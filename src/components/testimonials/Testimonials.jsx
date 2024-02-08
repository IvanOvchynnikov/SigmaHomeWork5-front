import React from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import '../../styles/testimonials.scss';
import ReviewSlider from "./ReviewSlider";
import Circle from "./Circle";
const Testimonials = () => {
    const slides=[
        {
            body:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
            name: 'Sara Taylor',
            job:'Consumer'
        },
        {
            body:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
            name: 'Lina Kostenko',
            job:'Business-Lady'
        },
        {
            body:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
            name: 'Vasya Men',
            job:'Mafia boss'
        }
    ]
    return (
        <div className={'testimonials'}>
            <div className={'container'}>
                <SupTitle body={'Testimonial'} className={'testimonials__suptitle'}/>
                <Title body={'What Our Customer Saying?'} className={'testimonials__title'}/>
                <ReviewSlider slides={slides}/>
                <div className={'testimonials__circles'}>
                    <Circle number={'100%'} title={'Organic'}/>
                    <Circle number={'285'} title={'Active Product'}/>
                    <Circle number={'350+'} title={'Organic Orchads'}/>
                    <Circle number={'25+'} title={'Years of Farming'}/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;