/* eslint-disable */
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

class ValuesGenerator {
  createUniqueValues(numberOfValues) {
    const uniqueValues = [];
    
    const values = [];
    const colors = [];
    while (uniqueValues.length < numberOfValues) {
      const value = this.generateId();
      const colorHex = this.generateHex();
      const color = this.generateColor(colorHex);
      if (!values.includes(value && !colors.includes(color)) ) {
        values.push(value);
        colors.push(color);

        const colorInverted = this.generateColor(this.invertHex(colorHex));
        uniqueValues.push({ value, color, colorInverted });
      }
    }

    return uniqueValues;
  }

  generateId() {
    return uuidv4();
  }

  generateHex() {
    return "000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16));
  }

  invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }

  generateColor(hex) {
    return `#${hex}`;
  }
}
/* eslint-enable */

export default ValuesGenerator;
