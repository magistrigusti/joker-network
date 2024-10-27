import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDeck, dealCards, dealCommunityCards, handleAction } from '../../../redux/poker-reducer';
import { determineWinner } from '../PokerRules';
import ButtonGame from '../ButtonGame';
import style from './PokerTable.module.css';

const PokerTable = () => {
  const dispatch = useDispatch();
  const {
    playerHand,
    dealerHand,
    pot,
    gameStatus,
    communityCards,
    playerPoints,
    dealerPoints,
    players,
    currentPlayerIndex // Убедись, что это часть состояния
  } = useSelector((state) => state.pokerPage || {});

  const winner = determineWinner(playerHand, dealerHand);

  useEffect(() => {
    dispatch(createDeck()); // Создание колоды при загрузке
    dispatch(dealCards()); // Раздача карт
    dispatch(dealCommunityCards()); // Раздача общих карт
  }, [dispatch]);

  if (!playerHand.length && !dealerHand.length) {
    return <div>Loading...</div>; // Покажите загрузку, если нет карт
  }

  const handleDealCards = () => {
    dispatch(dealCards()); // Логика для раздачи карт
  };

  const handleEndRound = () => {
    dispatch(handleAction({ action: 'endRound' })); // Завершение раунда
  };

  const handleFold = () => {
    dispatch(handleAction({ action: 'fold', playerIndex: currentPlayerIndex }));
  };

  const handleCall = () => {
    dispatch(handleAction({ action: 'call', playerIndex: currentPlayerIndex }));
  };

  const handleRaise = () => {
    dispatch(handleAction({ action: 'raise', amount: 100, playerIndex: currentPlayerIndex }));
  };

  return (
    <>
      <div className={style.title}>Покерный стол</div>
      <div className={style.table_wrapper}>
        <div>
          <p className={style.status}>{gameStatus}</p>
          <div className={style.table}>
            <ButtonGame text="deal cards" onClick={handleDealCards} />
            <ButtonGame text="end round" onClick={handleEndRound} /> {/* Кнопка для завершения раунда */}
            <div className={style.pot}>
              <h2>Пот: {pot}</h2>
            </div>

            <div className="player player2">
              <h2>Дилер:</h2>
              {dealerHand.map((card, index) => (
                <img
                  key={index}
                  src={`/cards/${card.value}_of_${card.suit}.png`}
                  alt={`${card.value} of ${card.suit}`}
                  className={style.card_image}
                  onError={(e) => { e.target.onerror = null; e.target.src = "/cards/default_card.png"; }}
                />
              ))}
            </div>

            <div className="community-cards">
              <h2>Общие карты:</h2>
              {communityCards.map((card, index) => (
                <img
                  key={index}
                  src={`/cards/${card.value}_of_${card.suit}.png`}
                  alt={`${card.value} of ${card.suit}`}
                  className={style.card_image}
                  onError={(e) => { e.target.onerror = null; e.target.src = "/cards/default_card.png"; }}
                />
              ))}
            </div>

            <div className={style.players}>
              {players.map((player, index) => (
                <div key={index} className={`player player${index}`}>
                  <h2>{player.name}:</h2>
                  {player.hand.map((card, cardIndex) => (
                    <img
                      key={cardIndex}
                      src={`/cards/${card.value}_of_${card.suit}.png`}
                      alt={`${card.value} of ${card.suit}`}
                      className={style.card_image}
                      onError={(e) => { e.target.onerror = null; e.target.src = "/cards/default_card.png"; }}
                    />
                  ))}
                  <h3>Баланс: {player.balance}</h3>
                </div>
              ))}
            </div>

            <div className={style.player_button}>
              <ButtonGame className="fold" color="error" text="fold" onClick={handleFold} />
              <ButtonGame className="call" color="success" text="call" onClick={handleCall} />
              <ButtonGame className="raise" color="warning" text="raise" onClick={handleRaise} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokerTable;
