function kelvin_convert(Kelvin) {
  let Celsius = ((Kelvin * 100 - 273.15 * 100) / 100).toFixed(2);
  let Fahrenheit = (((Celsius * 1.8 + 32) * 100) / 100).toFixed(2);

  return [Celsius, Fahrenheit];
}

export default kelvin_convert;
