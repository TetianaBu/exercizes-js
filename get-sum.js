const getSum = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false;
  }
  if (isNaN(Number(str1)) || isNaN(Number(str2))) {
    return false;
  }
  let sum = Number(str1 || 0) + Number(str2 || 0);
  let x = sum.toString();
  return x;
};