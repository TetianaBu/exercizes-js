function letterCount(str, letter) {
  return str.split('').reduce((acc, char) => char === letter ? acc + 1: acc, 0)
}