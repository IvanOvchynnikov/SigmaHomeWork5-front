import React from 'react';
import CreativeCard from "./CreativeCard";
import '../../styles/creative.scss'

const Creative = () => {
    return (
        <div className={'creative'}>
            <CreativeCard title={'Organic Juice'}/>
            <CreativeCard title={'Organic Food'}/>
            <CreativeCard title={'Nuts Cookies'}/>
        </div>
    );
};

export default Creative;