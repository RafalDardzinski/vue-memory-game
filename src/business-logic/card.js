class Card {
  constructor(value, color, colorInverted) {
    this.value = value;
    this.color = color;
    this.colorInverted = colorInverted;
    this.isDiscarded = false;
  }

  isPairOf(card) {
    return this.value === card.value;
  }

  discard() {
    this.isDiscarded = true;
  }
}

export default Card;
