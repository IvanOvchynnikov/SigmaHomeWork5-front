import React from 'react';
import '../../styles/ui__title.scss';
const Title = ({body,className}) => {
    return (
        <div className={['ui__title',className].join(' ')}>
            {body}
        </div>
    );
};

export default Title;