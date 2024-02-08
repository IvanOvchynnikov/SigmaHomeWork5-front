import React from 'react';

const FooterContactItem = ({title,subtitle}) => {
    return (
        <div className={'footer__contact-item'}>
            <p className={'footer__contact-item-title'}>{title}</p>
            <p className={'footer__contact-item-subtitle'}>{subtitle}</p>
        </div>
    );
};

export default FooterContactItem;