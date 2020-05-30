const moment = require('moment-timezone');

function getTime() {
  const timeContainer = document.querySelector('.current_time');
  const timeZone = sessionStorage.getItem('timezone');
  const locate = localStorage.getItem('lang');
  setInterval(() => {
    const data = new Date();
    const time = moment(data).locale(`${locate}`).tz(`${timeZone}`).format('dddd DD MMMM h:mm');
    timeContainer.innerText = time;
  }, 1000);
}

export default getTime;
