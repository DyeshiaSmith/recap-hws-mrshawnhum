// This is only created 1 time in the GLOBAL SCOPE.
const graduation = new Date("June 26, 2020");

function getRemainingDays() {
  // Every time the fxn. is INVOKED, a new 'today' is created.
  const today = new Date(Date.now());
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

setInterval(() => {
  console.log(getRemainingDays());
}, 1000);
