import React from 'react';
import style from './PokerGame.module.css';
import Button from "./button";

const PokerGame = ({ playerHand, dealerHand, gameStatus }) => {
  // Получение пути к изображению карты
  const getCardImage = (card) => {
    return `${process.env.PUBLIC_URL}/cards/${card.value}_of_${card.suit}.png`;
  };

  // const handleBet = (betAmount) => {
  //   // Проверяем, что игрок может сделать такую ставку
  //   if (player.chips >= betAmount) {
  //     player.chips -= betAmount;
  //     pot += betAmount;
  //     // Обновляем текущую ставку
  //     currentBet = betAmount;
  //   }
  // };

  return (
    <div className="poker-game">
      <h2>{gameStatus}</h2>
      <Button />
      <div className="hands">
        <div className="player-hand">
          <h3>Игрок</h3>
          {playerHand.map((card, index) => (
            <img key={index} className={style.card} src={getCardImage(card)} alt={`${card.value} of ${card.suit}`} />
          ))}
        </div>

        <div className="dealer-hand">
          <h3>Дилер</h3>
          {dealerHand.map((card, index) => (
            <img key={index} className={style.card} src={getCardImage(card)} alt={`${card.value} of ${card.suit}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokerGame;

