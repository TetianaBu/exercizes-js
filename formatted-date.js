function showFormattedDate(dateObj) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return `${dateObj.getDate()} ${
    monthNames[dateObj.getMonth()]
  }, ${dateObj.getFullYear()} (${getWeekDay(dateObj)})`;
}
