function negativeCount(arr) {
  let negative = [];
  console.log(arr);
  for (let a in arr) {
    if (arr[a]<0) {
      negative.push(arr[a]);
      a++
    }
  }
  return negative.length;
}