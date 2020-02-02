import ValuesGenerator from './values-generator';
import CardsFactory from './cards-factory';
import Game from './game';
import ResultsStorage from './results-storage';

const valuesGenerator = new ValuesGenerator();
const cardsFactory = new CardsFactory(valuesGenerator);

class GameFactory {
  static create() {
    return new Game(cardsFactory);
  }
}

export { GameFactory, ResultsStorage }; /* eslint-disable-line */
