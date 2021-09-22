function map(arr, func) {
  let newArr = [];
  let k = 0;
  let len = arr.length;
  while (k < len) {
    let element = arr[k];
    const newEl = func(element, k, arr);
    k += 1;
    newArr.push(newEl);
  }
  return newArr;
}