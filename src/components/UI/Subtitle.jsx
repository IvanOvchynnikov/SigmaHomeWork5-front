import React from 'react';
import '../../styles/ui__subtitle.scss';
const Subtitle = ({body,className}) => {
    return (
        <div className={['ui__subtitle',className].join(' ')}>
            {body}
        </div>
    );
};

export default Subtitle;