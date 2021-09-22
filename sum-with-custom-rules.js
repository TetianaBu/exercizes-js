const sum = (value1, value2) => {
  const number = typeof value1 === 'number' ? value1 : value2;
  const stringNumber = typeof value1 === 'number' ? value2 : value1;
  if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
    return Number(stringNumber) - number;
  }
  return Number(stringNumber) + number;
};
