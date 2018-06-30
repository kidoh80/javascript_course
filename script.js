//  Blackjack Game!

let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

let values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

let deck = [];
for (suitIdx = 0; suitIdx < suits.length; suitIdx++) {
  for (valueIdx = 0; valueIdx < values.length; valueIdx++) {
    deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
  }
}

for (i = 0; i < deck.length; i++) {
  console.log('Card ' + (i+1) + ' is ' + deck[i]);
}

let playerCards = [deck[0], deck[2]];

console.log("Welcome to Blackjack! You are dealt ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);

