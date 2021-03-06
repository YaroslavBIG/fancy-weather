import { ipInfo } from './_keys';
import setLocation from '../createElem/_loc';
import insertCoords from '../createElem/_coords';
import getWeather from './_openWeather';
import getTime from '../createElem/_setClock';
import addMap from '../createElem/map/_mapCreate';
import getLocByCoords from './_openCage';

async function getLocByIp() {
  const url = 'https://ipinfo.io/?token=';
  const res = await fetch(`${url}${ipInfo}`);
  const data = await res.json();
  const { loc } = data;
  const { city } = data;
  const { region } = data;
  const { timezone } = data;
  const { country } = data;
  const coordsArr = loc.split(',');
  const latitude = coordsArr[0];
  const longitude = coordsArr[1];
  sessionStorage.setItem('latitude', latitude);
  sessionStorage.setItem('longitude', longitude);
  sessionStorage.setItem('city', city);
  sessionStorage.setItem('village', region);
  sessionStorage.setItem('country', country);
  sessionStorage.setItem('timezone', timezone);
  insertCoords();
  addMap(latitude, longitude);
  setLocation();
  getLocByCoords();
  getWeather();
  getTime();
}

export default getLocByIp;
