const snakeMatrix = [
    [1, 2, 3, 4, 5, 6, 7],
    [22, 23, 24, 25, 26, 27, 8],
    [21, 36, 37, 38, 39, 28, 9],
    [20, 35, 42, 41, 40, 29, 10],
    [19, 34, 33, 32, 31, 30, 11],
    [18, 17, 16, 15, 14, 13, 12]
];

const snakeArray = (snakeStart) => {
    return snakeMatrix.map(array => array.map( num => snakeStart + num -1))
}


