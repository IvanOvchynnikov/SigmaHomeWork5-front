import React from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";

const EconicItem = ({title,description}) => {
    return (
        <div className={'econic__content-item'}>
            <Title body={title} className={'econic__content-item-title'}/>
            <Subtitle body={description} className={'econic__content-item-subtitle'}/>
        </div>
    );
};

export default EconicItem;