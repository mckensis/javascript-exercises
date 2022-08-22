const ftoc = function(num) {

  const celcius = (num - 32) * (5/9);
  return Math.round(celcius * 10) / 10;

};

const ctof = function(num) {

  const fahrenheit = (num * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
