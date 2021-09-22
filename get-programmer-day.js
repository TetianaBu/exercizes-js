function getProgrammersDay(year) {
  let date = new Date(year, 0, 256);
  return showFormattedDate(date);
}