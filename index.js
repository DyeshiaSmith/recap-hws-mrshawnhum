let string = "This is a example.";
string = string.replace("example", "knife");
string = string.toUpperCase();
console.log(string);

const graduation = new Date("June 26, 2020");
const today = new Date(Date.now());

function getRemainingDays() {
  let total = graduation - today;

  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / (1000 * 60)) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor((total / (1000 * 60 * 60 * 24)) % 7);
  let weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));

  let countdownTimer = `${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  if (total > 0) {
    return `We have ${countdownTimer} left until we become full stack developers!`;
  }
  return "Congratulations! We have completed Claim Academy's Javascript boot camp and are now Full Stack Developers! Good luck to everyone on your journey!";
}

console.log(getRemainingDays());
