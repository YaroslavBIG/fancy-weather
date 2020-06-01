import getIco from '../../utils/_getIco';
import getIcoBlock from '../../utils/_insetrIco';
import setWeatherProperty from './_setWeatherProperty';

function setWeather(data) {
  console.log(data);
  const { temp } = data.current;
  const { description, icon } = data.current.weather[0];
  sessionStorage.setItem('weather', description);

  const tempField = document.querySelector('.today_temp');
  tempField.innerText = Math.round(temp);

  const todayParametersBlock = document.querySelector('.today_parameters');
  todayParametersBlock.innerHTML = '';

  const todayIco = getIco(icon);
  const todayIcoEl = getIcoBlock(todayIco);
  todayIcoEl.classList.add('today_ico');
  todayParametersBlock.append(todayIcoEl);

  setWeatherProperty(data);
}

/* <div class="today_weather__property">
<div class="today--description"></div>
<div class="today--feels_like">
  <span class="feels_like--text"></span>
  <span class="feels_like--value"></span>
</div>
<div class="today--wind_speed">
  <span class="wind_speed--text"></span>
  <span class="wind_speed--value"></span>
</div>
<div class="today--humidity">
  <span class="humidity--text"></span>
  <span class="humidity--value"></span>
</div>
<div class="today--pressure">
  <span class="pressure--text"></span>
  <span class="pressure--value"></span>
</div> */

// function setWeather(data) {
//   console.log(data);
//   const {
//     humidity, pressure, temp,
//   } = data.current;
//   const feelsLike = Math.round(data.current.feels_like);
//   const windSpeed = data.current.wind_speed;
//   const { description, icon } = data.current.weather[0];
//   sessionStorage.setItem('weather', description);
//   const todayArr = ['description', 'feelsLike', 'windSpeed', 'humidity', 'pressure'];
//   const todayValue = [description, feelsLike, windSpeed, humidity, pressure];

//   const tempField = document.querySelector('.today_temp');
//   tempField.innerText = Math.round(temp);

//   const icoUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`; // TODO: refactor
//   const todayIco = document.createElement('img');
//   todayIco.src = icoUrl;

//   const todayIcoBlock = document.querySelector('.today_weather__ico');
//   const insertIco = () => {
//     todayIcoBlock.innerHTML = '';
//     todayIcoBlock.append(todayIco);
//   };
//   todayIco.onload = insertIco();

//   function createTodayBlock() {
//     const fragment = document.createDocumentFragment();
//     const wearherTodayBlock = document.querySelector('.today_weather__property');
//     todayArr.forEach((el, idx) => {
//       const currentEl = document.createElement('div');
//       currentEl.classList.add(`today--${el}`);
//       currentEl.innerText = todayValue[idx];
//       fragment.append(currentEl);
//     });
//     wearherTodayBlock.innerHTML = '';
//     wearherTodayBlock.append(fragment);
//   }
//   createTodayBlock();
// }
/* <div class="today_weather__property">
<div class="today--description"></div>
<div class="today--feels_like">
  <span class="feels_like--text"></span>
  <span class="feels_like--value"></span>
</div>
<div class="today--wind_speed">
  <span class="wind_speed--text"></span>
  <span class="wind_speed--value"></span>
</div>
<div class="today--humidity">
  <span class="humidity--text"></span>
  <span class="humidity--value"></span>
</div>
<div class="today--pressure">
  <span class="pressure--text"></span>
  <span class="pressure--value"></span>
</div> */

/* <div class="wearher_today__block">
    <div class="today_temp"></div>
    <div class="today_parameters">
      <div class="today_weather__ico"></div>
      <div class="today_weather__property">
        <div class="today--description"></div>
        <div class="today--feels_like"></div>
        <div class="today--wind_speed"></div>
        <div class="today--humidity"></div>
        <div class="today--pressure"></div>
      </div>
  </div> */

export default setWeather;
