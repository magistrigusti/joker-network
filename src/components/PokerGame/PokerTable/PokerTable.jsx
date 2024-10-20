import React, { useState } from 'react';
import './PokerTable.css';
import PokerGame from '../PokerGame';

const PokerTable = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameStatus, setGameStatus] = useState('Начните игру!');
  
  const createDeck = () => {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let newDeck = [];
    
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ value, suit });
      }
    }
    setDeck(shuffleDeck(newDeck));
    setGameStatus('Колода создана. Раздайте карты!');
  };

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const dealCards = () => {
    if (deck.length < 4) {
      setGameStatus('Колода пуста! Создайте новую колоду.');
      return;
    }
    
    const newPlayerHand = [deck.pop(), deck.pop()];
    const newDealerHand = [deck.pop(), deck.pop()];
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setGameStatus('Карты разданы! Игра началась!');
  };

  const handleAction = (selectedAction) => {
    switch (selectedAction) {
      case 'fold':
        setGameStatus('Игрок сбросил карты.');
        break;
      case 'call':
        setGameStatus('Игрок сделал колл.');
        break;
      case 'raise':
        setGameStatus('Игрок сделал рейз.');
        break;
      default:
        break;
    }
  };

  return (
    <div className="table-wrapper">
      <div className="table">
        <div className="center-pot">
          <PokerGame playerHand={playerHand} dealerHand={dealerHand} gameStatus={gameStatus} />
          <div className="pot">Pot: $500</div>
        </div>

        <div className="players">
          <div className="player player1">Player 1</div>
        </div>

        <div className="deck-actions">
          <button className="btn" onClick={createDeck}>Создать колоду</button>
          <button className="btn" onClick={dealCards}>Раздать карты</button>
        </div>

        <div className="actions">
          <button className="action-btn fold" onClick={() => handleAction('fold')}>Fold</button>
          <button className="action-btn call" onClick={() => handleAction('call')}>Call</button>
          <button className="action-btn raise" onClick={() => handleAction('raise')}>Raise</button>
        </div>
      </div>
    </div>
  );
};

export default PokerTable;
