import React from 'react';
import Title from "../UI/Title";

const Circle = ({number,title}) => {
    return (
        <div class={'testimonials__circle'}>
            <Title body={number} className={'testimonials__circle-number'}/>
            <Title body={title} className={'testimonials__circle-title'}/>
        </div>
    );
};

export default Circle;