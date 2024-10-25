import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDeck, dealCards } from '../../../redux/poker-reducer'; // Импортируйте действия
import './PokerTable.css';

const PokerTable = () => {
  const dispatch = useDispatch();
  const { playerHand, dealerHand, pot, gameStatus } = useSelector((state) => state.pokerPage || {});

  useEffect(() => {
    dispatch(createDeck()); // Создание колоды при загрузке
    dispatch(dealCards());   // Раздача карт
  }, [dispatch]);

  if (!playerHand.length && !dealerHand.length) {
    return <div>Loading...</div>; // Покажите загрузку, если нет карт
  }

  return (
    <div className="table-wrapper">
      <div className="table">
        <h1>Покерный стол</h1>

        <h3>Статус игры: {gameStatus}</h3>
        <div className="pot">
          <h2>Пот: {pot}</h2>
        </div>
        
        <div className="community-cards">
          <img alt="Community card" />
        </div>

        <div className="players">
          <div className="player player1">
            <h2>Игрок: {playerHand.map(card => `${card.value} of ${card.suit}`).join(', ')}</h2>
          </div>
          <div className="player player2">
            <h2>Дилер: {dealerHand.map(card => `${card.value} of ${card.suit}`).join(', ')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerTable;

