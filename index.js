let string = "This is a example.";
string = string.replace("example", "knife");
string = string.toUpperCase();
console.log(string);

const graduation = new Date(`June 26, 2020`);
const today = new Date(Date.now());

function getRemainingDays() {
  let total = graduation - today;
  let getSeconds = Math.floor(total / 1000);
}

console.log(getRemainingDays());
