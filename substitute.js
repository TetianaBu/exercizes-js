const substitute = (arr) => {
  return arr.map((el) => (el < 50 ? '*' : el));
};

substitute([80, 10, 12, 5, 90, 100]); // [80, '*', '*', '*', 90, 100]



