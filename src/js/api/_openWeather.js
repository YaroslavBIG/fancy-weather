import { openWeatherMap } from './_keys';
import setWeather from '../createElem/_setWeather';

async function getWeather() {
  console.log('Get Weather openWeather');
  try {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?';
    const latitude = sessionStorage.getItem('latitude');
    const longitude = sessionStorage.getItem('longitude');
    const lang = localStorage.getItem('lang');
    const units = localStorage.getItem('unit') || 'metric';
    const res = await fetch(`${url}lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${openWeatherMap}`);
    const data = await res.json();
    if (data.cod >= 400) {
      return new Error(`something went wrong: ${data.message}`);
    } await setWeather(data);
  } catch (err) {
    throw new Error(`${err}`);
  }
}


export default getWeather;
