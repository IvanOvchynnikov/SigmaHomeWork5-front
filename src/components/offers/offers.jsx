import React from 'react';
import '../../styles/ofers.scss';
import OfferCard1 from "./OfferCard1";
import OfferCard2 from "./OfferCard2";
const Offers = () => {
    return (
        <div className={'offers'}>
            <div className={'container'}>
                <OfferCard1/>
                <OfferCard2/>
            </div>
        </div>
    );
};

export default Offers;