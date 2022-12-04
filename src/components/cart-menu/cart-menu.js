import React from 'react';
import { calcTotalPrice } from '../utils';
import "./cart-menu.css";
import { Button } from '../button';
import { CartItem } from '../cart-item';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0 ? items.map((game) => <CartItem key={game.title} title={game.title} price={game.price} id={game.id} />) : "Пусто"}
      </div>

      {
        items.length > 0 ?

          <div className="cart-menu__arrange">
            <div className="cart-menu__total-price">
              <span>И того:</span>
              <span>{calcTotalPrice(items)} Tl.</span>
            </div>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
          : null

      }
    </div>
  );
};