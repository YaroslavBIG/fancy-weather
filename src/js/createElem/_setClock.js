import moment from 'moment-timezone';

let timeInterval;

function startTime() {
  const timeContainer = document.querySelector('.current_time');
  const timeZone = sessionStorage.getItem('timezone');
  const locate = localStorage.getItem('lang');
  const time = moment().locale(`${locate}`).tz(`${timeZone}`).format('dddd DD MMMM hh:mm');
  timeContainer.innerText = time;
}

function getTime() {
  clearInterval(timeInterval);
  timeInterval = setInterval(startTime, 1000);
}
// 'dddd DD MMMM HH:MM:SS'

export default getTime;
