import ValuesGenerator from './values-generator';
import CardsFactory from './cards-factory';
import Game from './game';

const valuesGenerator = new ValuesGenerator();
const cardsFactory = new CardsFactory(valuesGenerator);

class GameFactory {
  static create() {
    return new Game(cardsFactory);
  }
}

export { GameFactory }; /* eslint-disable-line */
