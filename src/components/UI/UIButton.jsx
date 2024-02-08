import React from 'react';
import '../../styles/ui__button.scss';
import arrow from '../../img/common/arrow_blue.svg'
const UIButton = ({body,className,...props}) => {
    return (
       <button {...props} className={['ui__button',className].join(' ')}>
           <div>{body}</div>
           <img src={arrow} alt={'Arrow'}/>
       </button>
    );
};

export default UIButton;