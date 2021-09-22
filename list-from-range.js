const makeListFromRange = (arr) => {
  let startIndex = arr[0];
  let endIndex = arr.length === 2 ? arr[1] : startIndex;
  return Array.from({ length: endIndex - startIndex + 1 }).map(
    (_, index) => index + startIndex
  );
};