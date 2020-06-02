function timeOfDay(sunrise, sunset, timeStamp) {
  const timeOfDayNow = timeStamp >= sunset ? 'night' : 'day';
  sessionStorage.setItem('timeOfDayNow', timeOfDayNow);
}

export default timeOfDay;
