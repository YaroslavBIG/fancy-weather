import { openWeatherMap } from './_keys';
import setWeather from '../createElem/weather/_setWeather';
import setThreeDayWeather from '../createElem/weather/_setThreeDayWeather';
import setWeatherMarque from '../createElem/weather/_setWeatherMar';
import changeBg from '../createElem/_changeBg';

async function getWeather(forward = false) {
  try {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?';
    const lat = !forward ? 'latitude' : 'latitudeF';
    const latitude = sessionStorage.getItem(lat);
    const lng = !forward ? 'longitude' : 'longitudeF';
    const longitude = sessionStorage.getItem(lng);
    const lang = localStorage.getItem('lang') || 'en';
    const units = localStorage.getItem('unit') || 'metric';
    const res = await fetch(`${url}lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&
    exclude=current,hourly,daily&appid=${openWeatherMap}`);
    const data = await res.json();
    if (data.cod >= 400) {
      return new Error(`something went wrong: ${data.message}`);
    }
    await setThreeDayWeather(data);
    await setWeather(data);
    await setWeatherMarque(data);
    changeBg();
  } catch (err) {
    throw new Error(`${err}`);
  }
}


export default getWeather;
