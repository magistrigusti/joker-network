import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDeck, dealCards } from '../../../redux/poker-reducer';
import { determineWinner } from '../PokerRules';
import ButtonGame from '../ButtonGame';
import './PokerTable.css';

const PokerTable = () => {
  const dispatch = useDispatch();
  const { playerHand, dealerHand, pot, gameStatus } = useSelector((state) => state.pokerPage || {});
  const winner = determineWinner(playerHand, dealerHand);

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
        <h1 className="title">Покерный стол</h1>

        <h3>Статус игры: </h3>
        <p>{gameStatus}</p>
        <ButtonGame text="deal cards" />
        <div className="pot">
          <h2>Пот: {pot}</h2>
        </div>

        <div className="community-cards">
          <img alt="Community card" />
        </div>

        <div className="players">
          <div className="player player1">
            <h2>Игрок:</h2>
            {playerHand.map((card, index) => (
              <img
                key={index}
                src={`/cards/${card.value}_of_${card.suit}.png`}
                alt={`${card.value} of ${card.suit}`}
                className="card-image"
              />
            ))}
          </div>
          <div className="player player2">
            <h2>Дилер:</h2>
            {dealerHand.map((card, index) => (
              <img
                key={index}
                src={`/cards/${card.value}_of_${card.suit}.png`}
                alt={`${card.value} of ${card.suit}`}
                className="card-image"
              />
            ))}
          </div>
        </div>


        <div>
          <ButtonGame text="fold" />
          <ButtonGame text="call" />
          <ButtonGame text="raise" />
        </div>
      </div>
    </div>
  );
};

export default PokerTable;

