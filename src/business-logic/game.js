/* eslint-disable no-plusplus */
class Game {
  constructor(cardsFactory) {
    this.cardsFactory = cardsFactory;
    this.tries = 0;
    this.initialCardsLength = 0;
    this.hasEnded = false;
    this.cards = [];
  }

  initialize(numberOfCards) {
    this.cards = this.cardsFactory.create(numberOfCards);
  }

  start() {
    this.startedAt = Date.now();
  }

  checkCards([card1, card2]) {
    this.tries++;
    if (!card1.isPairOf(card2)) {
      return;
    }

    card1.discard();
    card2.discard();

    if (this.cards.every(c => c.isDiscarded)) {
      this.end();
    }
  }

  end() {
    this.hasEnded = true;
  }
}

export default Game;
