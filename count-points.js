function countPoints(arr) {

  const points = arr.map( score => {
    const [x, y] = score.split(':').map(scoreStr => Number.parseInt(scoreStr));  
    if (x > y) {
      return 3;
    } 
    if (x === y) {
      return 1;
    }

    return 0
  }).reduce((cur, agg) => agg + cur)

  return points;
}

const points = countPoints(['2:2', '1:4', '3:5'])
console.log(points)
