// PokerRules.js

// Утилита: преобразование значений карт для удобства обработки
const cardValueMap = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9': 9, '10': 10, 'jack': 11, 'queen': 12, 'king': 13, 'ace': 14,
};

// Функция для сортировки карт по их значениям
const sortHandByValue = (hand) => {
  return hand.slice().sort((a, b) => cardValueMap[a.value] - cardValueMap[b.value]);
};

// Определение комбинаций

// Проверка на две пары
const isTwoPair = (hand) => {
  const values = hand.map(card => card.value);
  const uniqueValues = [...new Set(values)];
  return uniqueValues.length === 3; // Две пары + одна карта
};

// Проверка на четыре одной масти
const isFourOfAKind = (hand) => {
  const values = hand.map(card => card.value);
  return values.some((value, _, arr) => arr.filter(v => v === value).length === 4);
};

// Проверка на пару
const isPair = (hand) => {
  const values = hand.map(card => card.value);
  return values.some((value, _, arr) => arr.filter(v => v === value).length === 2);
};

// Проверка на тройку
const isThreeOfAKind = (hand) => {
  const values = hand.map(card => card.value);
  return values.some((value, _, arr) => arr.filter(v => v === value).length === 3);
};

// Проверка на фул-хаус
const isFullHouse = (hand) => {
  const values = hand.map(card => card.value);
  const uniqueValues = [...new Set(values)];
  return uniqueValues.length === 2 && (values.filter(v => v === uniqueValues[0]).length === 3 || values.filter(v => v === uniqueValues[1]).length === 3);
};

// Проверка на флеш (все одной масти)
const isFlush = (hand) => {
  const suits = hand.map(card => card.suit);
  return suits.every(suit => suit === suits[0]);
};

// Проверка на стрит
const isStraight = (hand) => {
  const sortedHand = sortHandByValue(hand);
  for (let i = 0; i < sortedHand.length - 1; i++) {
    if (cardValueMap[sortedHand[i + 1].value] - cardValueMap[sortedHand[i].value] !== 1) {
      return false;
    }
  }
  return true;
};

// Проверка на стрит-флеш
const isStraightFlush = (hand) => {
  return isStraight(hand) && isFlush(hand);
};

// Определение комбинации игрока
export const evaluateHand = (hand) => {
  if (isStraightFlush(hand)) return { rank: 8, name: 'Straight Flush' };
  if (isFourOfAKind(hand)) return { rank: 7, name: 'Four of a Kind' };
  if (isFullHouse(hand)) return { rank: 6, name: 'Full House' };
  if (isFlush(hand)) return { rank: 5, name: 'Flush' };
  if (isStraight(hand)) return { rank: 4, name: 'Straight' };
  if (isThreeOfAKind(hand)) return { rank: 3, name: 'Three of a Kind' };
  if (isTwoPair(hand)) return { rank: 2, name: 'Two Pair' };
  if (isPair(hand)) return { rank: 1, name: 'One Pair' };
  return { rank: 0, name: 'High Card' };
};

export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

// Функция для определения победителя
export const determineWinner = (playerHand, dealerHand) => {
  const playerResult = evaluateHand(playerHand);
  const dealerResult = evaluateHand(dealerHand);

  if (playerResult.rank > dealerResult.rank) {
    return { winner: 'Player', hand: playerResult.name };
  } else if (dealerResult.rank > playerResult.rank) {
    return { winner: 'Dealer', hand: dealerResult.name };
  } else {
    // Сравнение карт в случае равенства
    const playerValues = playerHand.map(card => cardValueMap[card.value]).sort((a, b) => b - a);
    const dealerValues = dealerHand.map(card => cardValueMap[card.value]).sort((a, b) => b - a);
    
    for (let i = 0; i < playerValues.length; i++) {
      if (playerValues[i] > dealerValues[i]) {
        return { winner: 'Player', hand: playerResult.name };
      } else if (dealerValues[i] > playerValues[i]) {
        return { winner: 'Dealer', hand: dealerResult.name };
      }
    }
    return { winner: 'Draw', hand: playerResult.name }; // В случае полного равенства
  }
};

