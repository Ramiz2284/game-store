import React from 'react';
import './cart-item.css';
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";

export const CartItem = ({ title, price, id }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };

    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className='cart-item__price'>
                <span>{price} Tl.</span>
            </div>

            <AiOutlineCloseCircle
                size={25}
                className="cart-item__delete-icon"
                onClick={handleDeleteClick}
            />

        </div>
    );
}