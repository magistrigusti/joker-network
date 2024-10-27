import { createSlice } from "@reduxjs/toolkit";
import {
  shuffleDeck,
  determineWinner,
} from "../components/PokerGame/PokerRules"; // Импортируем shuffleDeck и determineWinner

const initialState = {
  deck: [],
  playerHand: [],
  dealerHand: [],
  communityCards: [],
  gameStatus: "Начните игру!",
  pot: 500,
  players: [
    { name: "Игрок 1", hand: [], points: 0, balance: 1000 }, // Баланс каждого игрока
    { name: "Игрок 2", hand: [], points: 0, balance: 1000 }, // Добавьте игроков по мере необходимости
    { name: "Игрок 3", hand: [], points: 0, balance: 1000 },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    createDeck(state) {
      const suits = ["hearts", "diamonds", "clubs", "spades"];
      const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "jack",
        "queen",
        "king",
        "ace",
      ];
      const newDeck = [];

      for (let suit of suits) {
        for (let value of values) {
          newDeck.push({ value, suit });
        }
      }
      state.deck = shuffleDeck(newDeck);
      state.gameStatus = "Колода создана. Раздайте карты!";
    },
    dealCards(state) {
      const numPlayers = state.players.length;
      if (state.deck.length < numPlayers * 2 + 2) {
        // Две карты на игрока и две для дилера
        state.gameStatus = "Колода пуста! Создайте новую колоду.";
        return;
      }

      for (let player of state.players) {
        player.hand = [state.deck.pop(), state.deck.pop()]; // Раздача карт каждому игроку
      }

      state.dealerHand = [state.deck.pop(), state.deck.pop()]; // Дилер получает карты
      const winner = determineWinner(
        state.players.map((player) => player.hand),
        state.dealerHand
      );
      state.gameStatus = `Карты разданы! ${winner.winner} выиграл с комбинацией ${winner.hand}`;
    },

    dealCommunityCards(state) {
      if (state.deck.length < 3) {
        state.gameStatus = "Недостаточно карт в колоде!";
        return;
      }

      state.communityCards = [
        state.deck.pop(),
        state.deck.pop(),
        state.deck.pop(),
      ]; // Три карты для флопа
      state.gameStatus = "Общие карты разданы!";
    },

    handleAction(state, action) {
      const currentPlayer = state.players[action.payload.playerIndex]; // Получаем текущего игрока
      switch (action.payload.action) {
        case "fold":
          state.gameStatus = `${currentPlayer.name} сбросил карты.`;
          // Можно добавить логику для завершения раунда
          break;
        case "call":
          const callAmount = state.pot - currentPlayer.points; // Примерная логика для динамической ставки
          if (currentPlayer.balance >= callAmount) {
            currentPlayer.balance -= callAmount;
            state.pot += callAmount;
            state.gameStatus = `${currentPlayer.name} сделал колл на ${callAmount}.`;
          } else {
            state.gameStatus = `${currentPlayer.name} недостаточно фишек для колла!`;
          }
          break;

        case "raise":
          if (currentPlayer.balance >= action.payload.amount) {
            currentPlayer.balance -= action.payload.amount; // Уменьшение баланса игрока
            state.pot += action.payload.amount; // Увеличение пота
            state.gameStatus = `${currentPlayer.name} сделал рейз на ${action.payload.amount}.`;
          } else {
            state.gameStatus = `${currentPlayer.name} недостаточно фишек для рейза!`;
          }
          break;
        default:
          break;
      }
    },

    endRound(state) {
      const winner = determineWinner(state.playerHand, state.dealerHand);
      if (winner.winner === "Player") {
        state.players[0].points += 1; // Увеличиваем очки первого игрока
        state.gameStatus = "Игрок выиграл раунд!";
      } else if (winner.winner === "Dealer") {
        state.players[2].points += 1; // Увеличиваем очки дилера
        state.gameStatus = "Дилер выиграл раунд!";
      } else {
        state.gameStatus = "Ничья!";
      }
      // Сбрасываем руки и общие карты для следующего раунда
      state.playerHand = [];
      state.dealerHand = [];
      state.communityCards = [];
    },
  },
});

export const {
  createDeck,
  dealCards,
  handleAction,
  dealCommunityCards,
  endRound,
} = gameSlice.actions;
export default gameSlice.reducer;
