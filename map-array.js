const mapArray = (data, func) => {
  return data.map((i) => Number(i)).map(func);
};