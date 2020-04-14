//log numbers from 1 to 100
//if number is divisible by 3, log FIZZ
//if number is divisible by 5, log BUZZ
//if number is divisible by 3 and 5, log FIZZ BUZZ
//1, 2, fizz, 4, buzz,
//if (num % 3 === 0)

let currentNum = 1;

while (currentNum <= 100) {
  currentNum++;
  if (currentNum % 3 === 0 && currentNum % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (currentNum % 3 === 0) {
    console.log("FIZZ");
  } else if (currentNum % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(currentNum);
  }
}

for (let currentNum = 1; currentNum <= 100; currentNum++) {
  if (currentNum % 3 === 0 && currentNum % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (currentNum % 3 === 0) {
    console.log("FIZZ");
  } else if (currentNum % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(currentNum);
  }
}
