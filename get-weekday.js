function getWeekDay(date) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  if (typeof date === 'number') {
    return daysOfWeek[new Date(date).getDay() - 1];
  }
  return daysOfWeek[date.getDay() - 1];
}