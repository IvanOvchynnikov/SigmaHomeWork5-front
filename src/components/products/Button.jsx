import React from 'react';
import '../../styles/button.scss'
const Button = ({body,...props}) => {
    return (
        <button {...props}>
            {body}
        </button>
    );
};

export default Button;