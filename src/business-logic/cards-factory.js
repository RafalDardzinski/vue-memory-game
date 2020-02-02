import Card from './card';

class CardsFactory {
  constructor(valuesGenerator) {
    this.valuesGenerator = valuesGenerator;
  }

  create(numberOfCards) {
    const isEven = numberOfCards % 2 === 0;
    if (Number.isNaN(numberOfCards) || numberOfCards < 1 || !isEven) {
      throw new Error(`${numberOfCards} is not a valid cards number`);
    }

    const randomValues = this.valuesGenerator.createUniqueValues(numberOfCards / 2);
    const randomValuesWithPairs = randomValues
      .concat(randomValues)
      .sort(() => 0.5 - Math.random()); // random sorting
    return randomValuesWithPairs.map(value => new Card(value));
  }
}

export default CardsFactory;
