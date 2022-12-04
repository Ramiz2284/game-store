import React, { useState } from 'react';
import './cart-block.css';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/';
import { calcTotalPrice } from '../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';


export const CartBlock = () => {
    const [isCartMebuVisible, setIsCartMenuVisibel] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className='cart-block'>
            < ItemsInCart quantiti={items.length} />
            <BiCartAlt size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisibel(!isCartMebuVisible)} />
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} Tl. </span> : null}
            {isCartMebuVisible && <CartMenu items={items} noClick={() => null} />}
        </div>
    );
}