import React from 'react';
import Title from "../UI/Title";

const CreativeCard = ({title}) => {
    return (
        <div className={'creative__card'}>
            <Title body={title} className={'creative__card-title'}/>
        </div>
    );
};

export default CreativeCard;