function tripler(num) {
  return num * 3;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

// TODO: Using only the functions above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.
const tripleFive = tripler(5);
console.log(tripleFive);
const multiplyTwelve = multiply(tripleFive, 12);
console.log(multiplyTwelve);
const divideTwo = divide(multiplyTwelve, 2);
console.log(divideTwo);
const remainderOne = remainder(divideTwo, 3);
console.log(remainderOne);
