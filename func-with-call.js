const applyAll = (func, ...args) => {
  return func(...args);
};

const sum = (...args) => {
  return args.reduce((agr, item) => agr + item, 0);
};

const mul = (...args) => {
  return args.reduce((agr, item) => agr * item, 1);
};

applyAll(mul, 2, 2, 2); // 16
applyAll(sum, 4, 4, 4); // 12