function filter(arr, func) {
  filteredArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index])) {
      filteredArr.push(arr[index]);
    }
  }
  return filteredArr;
}