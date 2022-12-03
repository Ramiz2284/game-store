import React from 'react';
import './game-item.css';
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-bay';
import { GameGanre } from '../game-genre';

export const GameItem = ({ game }) => {
    return (
        <div className='game-item'>
            <GameCover image={game.image} />
            <div className="game-item__details">
                <span className='game-item__title' >{game.title}</span>
                <div className="game-items__genre">
                    {
                        game.genres.map((genre) => <GameGanre genre={genre} key={genre} />)
                    }
                </div>
                <div className="game-item__buy">
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
}