import React from 'react';
import './game-buy.css';
import { Button } from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';



export const GameBuy = ({ game }) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemIncart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemIncart) {
            dispatch(deleteItemFromCart(game.id));

        } else {
            dispatch(setItemInCart(game));
        }

    }

    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} Tl.</span>
            <Button
                type={isItemIncart ? 'secondary' : 'primary'}
                onClick={handleClick} >
                {isItemIncart ? "Убрать из корзины" : "В корзину"}
            </Button>
        </div>
    );
}