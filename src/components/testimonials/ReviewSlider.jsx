import React, {useState} from 'react';
import stars from '../../img/products/stars.svg'
import avatar from '../../img/testimonials/girl.png';
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import Review from "./Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSlider = ({slides}) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    const reviews=slides.map((item)=>(
       <Review body={item.body} name={item.name} job={item.job}/>
    ))

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={'reviewSlider'}>
            <Slider {...settings}>
                {reviews}
            </Slider>
        </div>

    );
};

export default ReviewSlider;