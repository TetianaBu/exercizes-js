function getValues(obj) {
  let keyArr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keyArr.push(obj[key]);
    }
  }
  return keyArr;
}