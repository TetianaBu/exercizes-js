function getAmountDaysToNewYear() {
  let today = new Date();
  let newYear = new Date(today.getFullYear() + 1, 0, 1);
  return Math.ceil((newYear - today) / 1000 / 60 / 60 / 24);
}
