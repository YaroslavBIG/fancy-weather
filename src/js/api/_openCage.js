import { openCageData } from './_keys';
import setLocation from '../createElem/_loc';
import getLocByIp from './_getLocByIp';
import insertCoords from '../createElem/_coords';

async function getLocByCoords() {
  console.log('Position by coords opencagedata');
  const apikey = openCageData;
  const latitude = sessionStorage.getItem('latitude');
  const longitude = sessionStorage.getItem('longitude');
  const lang = localStorage.getItem('lang');
  const langRes = lang === null ? 'en' : lang;
  const apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

  const requestUrl = `${apiUrl}?key=${apikey}&q=${latitude},${longitude}&language=${langRes}&timezone`;

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  const request = new XMLHttpRequest();
  request.open('GET', requestUrl, true);

  request.onload = function c() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200) {
      // Success!
      const data = JSON.parse(request.responseText);
      console.log(data);
      const {
        country, city, town, state, village, country_code,
      } = data.results[0].components;
      console.log(country, city, town, state, village);
      const { lat, lng } = data.results[0].annotations.DMS;
      const timezone = data.results[0].annotations.timezone.name;
      sessionStorage.setItem('country', country);
      sessionStorage.setItem('countryCode', country_code);
      sessionStorage.setItem('city', city);
      sessionStorage.setItem('town', town);
      sessionStorage.setItem('state', state);
      sessionStorage.setItem('village', village);
      sessionStorage.setItem('timezone', timezone);
      sessionStorage.setItem('lat', lat);
      sessionStorage.setItem('lng', lng);
      insertCoords(true);
      setLocation();
      return data.results[0];
    } if (request.status <= 500) {
      // We reached our target server, but it returned an error
      getLocByIp();
      const data = JSON.parse(request.responseText);
      const { message } = data.status;
      throw new Error(`unable to geocode! Response code: ${request.status} ${message}`);
    } else {
      getLocByIp();
      throw new Error('server error');
    }
  };

  request.onerror = function e(err) {
    getLocByIp();
    throw new Error(`unable to connect to server: ${err}`);
  };

  request.send(); // make the request
}

export default getLocByCoords;
