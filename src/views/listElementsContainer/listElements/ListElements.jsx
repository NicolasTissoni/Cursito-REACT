import React from 'react';

import Elements from '../elements/Elements';

import './listElements.scss';

const ListElements = ({ elements })=> {
    return (
        <div className='listElements'>
            {elements.map((element) => {
                return <Elements key={element.id} element={element} />
            })}
        </div>
    );
};

export default ListElements;