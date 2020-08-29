const toCelsius = (temp: number): number =>
  parseFloat(((temp - 32) / 1.8).toFixed(1));

export default toCelsius;
