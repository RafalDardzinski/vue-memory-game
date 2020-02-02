const _value = new WeakMap();

class Card {
  constructor(value) {
    _value.set(this, value);
    this.isDiscarded = false;
  }

  get value() {
    return _value.get(this);
  }


  isPairOf(card) {
    return this.value === card.value;
  }

  discard() {
    this.isDiscarded = true;
  }
}

export default Card;
