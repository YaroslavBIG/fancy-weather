import addMap from './map/_mapCreate';
import dictionary from '../transl/_dictionary';
import getLangNum from '../utils/_getLangNum';

function insertCoords(full = false) {
  const latitudeTxt = document.querySelector('.latitude');
  const longitudeTxt = document.querySelector('.longitude');
  let latitude;
  let longitude;
  if (full === 'map') {
    latitude = parseFloat(sessionStorage.getItem('latitude'));
    longitude = parseFloat(sessionStorage.getItem('longitude'));
  }
  if (!full) {
    latitude = parseFloat(sessionStorage.getItem('latitude'));
    longitude = parseFloat(sessionStorage.getItem('longitude'));
    addMap(latitude, longitude);
  } else {
    latitude = sessionStorage.getItem('lat');
    longitude = sessionStorage.getItem('lng');
  }
  const langNum = getLangNum();
  const lat = dictionary.lat[langNum];
  const lng = dictionary.lng[langNum];
  latitudeTxt.innerText = `${lat}: ${latitude}`;
  longitudeTxt.innerText = `${lng}: ${longitude}`;
}

export default insertCoords;
