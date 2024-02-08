import React from 'react';
import '../../styles/ui__suptitle.scss';
const SupTitle = ({body,className}) => {
    return (
        <div className={['ui__suptitle',className].join(' ')}>
            {body}
        </div>
    );
};

export default SupTitle;