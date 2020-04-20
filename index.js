let string = "This is a example.";
string = string.replace("example", "knife");
string = string.toUpperCase();
console.log(string);

const graduation = new Date(`June 26, 2020`);
const today = new Date(Date.now());

function getRemainingDays() {
  let total = graduation - today;
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor((total / (1000 * 60 * 60 * 24)) % 7);
  let weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
  return `${weeks}, ${days}`;
}

console.log(getRemainingDays());
