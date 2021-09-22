function howFarIs(day) {
  const daysOfWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  let noSenDay = day.toLowerCase();
  let dayIndex = daysOfWeek.indexOf(noSenDay) + 1;
  let dayDifference = dayIndex - new Date().getDay();
  if (dayDifference < 0) {
    dayDifference += 7;
  }
  const dayFormated =
    day[0].toUpperCase() + day.substr(1, day.length - 1).toLowerCase();
  if (dayDifference === 0) {
    return `Hello, today is ${dayFormated} =)`;
  }
  return `It's ${dayDifference} day(s) left till ${dayFormated}`;
}