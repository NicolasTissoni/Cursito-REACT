import React from 'react';

import './buttonScroll.scss';

const ButtonScroll = () => {
    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="btn-scroll" onClick={top}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    );
};

export default ButtonScroll;
