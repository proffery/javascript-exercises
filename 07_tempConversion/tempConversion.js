const convertToCelsius = function(fahrenheit) {
  let tempCelsius = (fahrenheit - 32) * 5 / 9
  return Math.round(tempCelsius * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let tempFahrenheit = celsius * 9 / 5 + 32
  return Math.round(tempFahrenheit * 10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
