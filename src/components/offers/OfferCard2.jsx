import React from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";

const OfferCard2 = () => {
    return (
        <div>
            <div className={'offers__card offers__card-2'}>
                <SupTitle body={'OfferOrganick!!'} className={''}/>
                <Title body={'Get 10% off on Vegetables'} className={'offers__card__title'}/>
            </div>
        </div>
    );
};

export default OfferCard2;