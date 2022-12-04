import React from 'react';
import './items-in-cart.css';


export const ItemsInCart = ({ quantiti = 0 }) => {

    return quantiti > 0 ? (
        <div className='items-in-cart'>
            {quantiti}
        </div>
    ) : null
}