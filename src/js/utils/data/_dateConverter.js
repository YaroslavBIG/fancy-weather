import moment from 'moment-timezone';

const timeZone = sessionStorage.getItem('timezone');
const locate = localStorage.getItem('lang');

function dateConv(timestamp = '', format = 'HH') {
  const data = new Date(timestamp);
  const time = moment(data).locale(`${locate}`).tz(`${timeZone}`).format(format);
  console.log('time Converted', time);
  return time;
}

export default dateConv;
