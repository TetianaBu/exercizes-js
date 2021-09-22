function reverseNumber(num) {
  let reversed_number = 0;
  while (num !== 0) {
    reversed_number *= 10;
    reversed_number += num % 10;
    num -= num % 10;
    num /= 10;
  }
  return reversed_number;
}