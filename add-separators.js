function addThousandsSeparators(num) {
  const reverseStr = (str) => [...str.toString()].reverse().join('');
  return reverseStr(num)
    .match(/\d{1,3}/g)
    .map((x) => reverseStr(x))
    .reverse()
    .join(',');
}

addThousandsSeparators('240669000'); // '240,669,000'