const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let summ = 0;
  array.forEach(element => {
    summ += element;    
  });
  return summ;
};

const multiply = function(array) {
  let mult = 1;
  array.forEach(element => {
    mult *= element;    
  });
  return mult;
};

const power = function(num1,  num2) {
	let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
	let factorial = 1;
  for (i = num; i > 0; i--) {
    factorial *= i; 
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
