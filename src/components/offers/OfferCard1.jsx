import React from 'react';
import SupTitle from "../UI/SupTitle";
import Title from "../UI/Title";

const OfferCard1 = () => {
    return (
        <div className={'offers__card offers__card-1'}>
            <SupTitle body={'Natural!!'} className={'offers__card__suptitle'}/>
            <Title body={'Get Garden Fresh Fruits'} className={'offers__card__title-1'}/>
        </div>
    );
};

export default OfferCard1;