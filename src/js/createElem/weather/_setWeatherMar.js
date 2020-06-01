import moment from 'moment-timezone';
import dictionary from '../../transl/_dictionary';
import getLangNum from '../../utils/_getLangNum';

function setWeatherMarque(data) {
  const hourlyData = data.hourly;
  const hourlyArr = hourlyData.splice(0, 20);
  const langNum = getLangNum();
  const ms = dictionary.ms[langNum];
  const tempTxt = dictionary.temp[langNum];
  const windTxt = dictionary.wind[langNum];

  let result = '';

  hourlyArr.forEach((el) => {
    const timeStamp = el.dt;
    const date = new Date(timeStamp * 1000);
    const time = moment(date).format('hh:mm a');

    const temp = Math.round(el.temp);
    const wind = Math.round(el.wind_speed);
    const tempSymb = '\u00B0';

    result += ` ${time} ${tempTxt} ${temp}${tempSymb} ${windTxt} ${wind} ${ms} ***`;
  });

  const marquee = document.querySelector('.marquee');
  marquee.innerHTML = '';
  marquee.innerText = result;
}

export default setWeatherMarque;
