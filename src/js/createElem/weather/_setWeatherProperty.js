import capitalize from '../../utils/_capitalize';
import getLangNum from '../../utils/data/_getLangNum';
import dictionary from '../../transl/_dictionary';
import getPressure from '../../utils/data/_getPressure';
import changeBg from '../_changeBg';

function setWeatherProperty(data) {
  const { humidity } = data.current;
  const pressure = getPressure(data.current.pressure);
  const feelsLike = Math.round(data.current.feels_like);
  const windSpeed = data.current.wind_speed;
  const description = capitalize(data.current.weather[0].description);
  const todayParametersBlock = document.querySelector('.today_parameters');

  const todayPrpertyBlock = document.createElement('div');
  todayPrpertyBlock.classList.add('today_weather__property');
  todayPrpertyBlock.innerHTML = `
  <div class="today_weather__property">
    <div class="today--description">${description}</div>
    <div class="today--feel">
      <span class="feel--text"></span>
      <span class="feel--value"></span>
    </div>
    <div class="today--wind">
      <span class="wind--text"></span>
      <span class="wind--value"></span>
    </div>
    <div class="today--humidity">
      <span class="humidity--text"></span>
      <span class="humidity--value"></span>
    </div>
    <div class="today--pressure">
      <span class="pressure--text"></span>
      <span class="pressure--value"></span>
  </div>
  `;

  const langNum = getLangNum();
  const todayText = ['feel', 'wind', 'humidity', 'pressure'];
  const todayValue = [feelsLike, windSpeed, humidity, pressure];
  const ms = dictionary.ms[langNum];
  let speech = `${description} `;

  const insertValues = () => {
    todayText.forEach((el, idx) => {
      const textBlock = todayPrpertyBlock.querySelector(`.${el}--text`);
      const valueBlock = todayPrpertyBlock.querySelector(`.${el}--value`);
      const text = dictionary[el][langNum];
      const value = todayValue[idx];
      textBlock.innerText = text;
      valueBlock.innerText = value;
      speech += ` ${text} ${value} `;
    });
  };
  insertValues();
  sessionStorage.setItem('speech', speech);
  todayPrpertyBlock.querySelector('.wind--value').innerText += ` ${ms}`;
  todayParametersBlock.append(todayPrpertyBlock);
}

export default setWeatherProperty;
