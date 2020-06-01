import { ipInfo } from './_keys';
import setLocation from '../createElem/_loc';
import insertCoords from '../createElem/_coords';
import getWeather from './_openWeather';
import getTime from '../createElem/_setClock';

async function getLocByIp() {
  console.log('position by IP');
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
  sessionStorage.setItem('country', country); // TODO: Country FULL Name
  sessionStorage.setItem('timezone', timezone);
  insertCoords();
  setLocation();
  getWeather();
  getTime();
}

export default getLocByIp;
