import React from 'react';
import { determineWinner } from './PokerRules'; // Импортируем функции из PokerRules

const PokerGame = ({ playerHand, dealerHand, gameStatus }) => {
  const winner = determineWinner(playerHand, dealerHand);

  return (
    <div className="poker-game">
      <div className="player-hand">
        <h2>Player Hand</h2>
        {playerHand.map((card, index) => (
          <div key={index} className={`card ${card.suit}`}>
            {card.value}
          </div>
        ))}
      </div>
      <div className="dealer-hand">
        <h2>Dealer Hand</h2>
        {dealerHand.map((card, index) => (
          <div key={index} className={`card ${card.suit}`}>
            {card.value}
          </div>
        ))}
      </div>
      <div className="game-status">{gameStatus}</div>
      <div className="winner">
        {winner.winner !== 'Draw' ? `${winner.winner} wins with ${winner.hand}` : "It's a draw!"}
      </div>
    </div>
  );
};

export default PokerGame;
