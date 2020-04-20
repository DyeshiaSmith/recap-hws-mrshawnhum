let string = "This is a example.";
string = string.replace("example", "knife");
string = string.toUpperCase();
console.log(string);

const graduation = new Date(`June 26, 2020`);
const today = new Date(Date.now());
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

function getRemainingDays() {
  let total = graduation - today;
  return total;
}
