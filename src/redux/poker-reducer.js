import { createSlice } from '@reduxjs/toolkit';
import { shuffleDeck, determineWinner } from '../components/PokerGame/PokerRules'; // Импортируем shuffleDeck и determineWinner

const initialState = {
  deck: [],
  playerHand: [],
  dealerHand: [],
  gameStatus: 'Начните игру!',
  pot: 500,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createDeck(state) {
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
      const newDeck = [];

      for (let suit of suits) {
        for (let value of values) {
          newDeck.push({ value, suit });
        }
      }
      state.deck = shuffleDeck(newDeck);
      state.gameStatus = 'Колода создана. Раздайте карты!';
    },
    dealCards(state) {
      if (state.deck.length < 4) {
        state.gameStatus = 'Колода пуста! Создайте новую колоду.';
        return;
      }

      state.playerHand = [state.deck.pop(), state.deck.pop()];
      state.dealerHand = [state.deck.pop(), state.deck.pop()];
      const winner = determineWinner(state.playerHand, state.dealerHand);
      state.gameStatus = `Карты разданы! ${winner.winner} выиграл с комбинацией ${winner.hand}`;
    },
    handleAction(state, action) {
      switch (action.payload) {
        case 'fold':
          state.gameStatus = 'Игрок сбросил карты.';
          break;
        case 'call':
          state.pot += 50; // Добавьте фиксированную ставку или изменяйте её динамически
          state.gameStatus = 'Игрок сделал колл.';
          break;
        case 'raise':
          state.pot += 100; // Пример увеличения ставки при рейзе
          state.gameStatus = 'Игрок сделал рейз.';
          break;
        default:
          break;
      }
    },
  },
});

export const { createDeck, dealCards, handleAction } = gameSlice.actions;
export default gameSlice.reducer;

