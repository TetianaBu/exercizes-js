function forEach(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    func(element, arr);
  }
}