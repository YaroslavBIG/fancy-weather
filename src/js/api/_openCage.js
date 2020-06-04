import { openCageData } from './_keys';
import setLocation from '../createElem/_loc';
import insertCoords from '../createElem/_coords';
import setClock from '../createElem/_setClock';
import timeOfDay from '../utils/data/_timeOfDay';
import getSeason from '../utils/data/_getSeason';
import refreshData from '../utils/data/_refreshData';
import changeBg from '../createElem/_changeBg';

async function getLocByCoords(transl = false, forward = null) {
  const apikey = openCageData;
  const latitude = sessionStorage.getItem('latitude');
  const longitude = sessionStorage.getItem('longitude');
  const qurey = forward;
  const lang = localStorage.getItem('lang');
  const langRes = lang === null ? 'en' : lang;
  const apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

  let requestUrl = `${apiUrl}?key=${apikey}&q=${latitude},${longitude}&language=${langRes}&timezone`;
  if (forward) requestUrl = `${apiUrl}?key=${apikey}&q=${qurey}&language=${langRes}&timezone`;

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  const request = new XMLHttpRequest();
  request.open('GET', requestUrl, true);

  request.onload = function c() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      if (!data.results.length) return;
      const lati = data.results[0].geometry.lat;
      const long = data.results[0].geometry.lng;
      sessionStorage.setItem('latitudeF', lati);
      sessionStorage.setItem('longitudeF', long);
      if (forward) {
        refreshData(lati, long);
      }
      if (lati === 0 || long === 0) return;
      const {
        country, city, town, state, village, country_code, county, formatted,
      } = data.results[0].components;
      const sunRise = data.results[0].annotations.sun.rise.apparent;
      const sunSet = data.results[0].annotations.sun.set.apparent;
      const timestamp = data.timestamp.created_unix;
      const { lat, lng } = data.results[0].annotations.DMS;
      const timezone = data.results[0].annotations.timezone.name;
      sessionStorage.setItem('country', country);
      sessionStorage.setItem('countryCode', country_code);
      sessionStorage.setItem('city', city);
      sessionStorage.setItem('town', town);
      sessionStorage.setItem('state', state);
      sessionStorage.setItem('village', village); // TODO: Translate?
      sessionStorage.setItem('formatted', formatted);
      sessionStorage.setItem('county', county);
      sessionStorage.setItem('timezone', timezone);
      sessionStorage.setItem('lat', lat);
      sessionStorage.setItem('lng', lng);
      if (!transl) {
        insertCoords(true);
      }
      timeOfDay(sunRise, sunSet, timestamp);
      getSeason(timestamp);
      setClock();
      setLocation();
      changeBg();
      return data.results[0];
    } if (request.status < 400) {
      // We reached our target server, but it returned an error
      const data = JSON.parse(request.responseText);
      const { message } = data.status;
      throw new Error(`unable to geocode! Response code: ${request.status} ${message}`);
    } else {
      throw new Error('server error');
    }
  };

  request.onerror = function e(err) {
    throw new Error(`unable to connect to server: ${err}`);
  };

  request.send(); // make the request
}

export default getLocByCoords;
