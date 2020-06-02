import dictionary from '../transl/_dictionary';
import getLangNum from '../utils/data/_getLangNum';

function insertCoords(param = false) {
  const latitudeTxt = document.querySelector('.latitude');
  const longitudeTxt = document.querySelector('.longitude');
  let latitude;
  let longitude;
  if (!param) {
    latitude = parseFloat(sessionStorage.getItem('latitude'));
    longitude = parseFloat(sessionStorage.getItem('longitude'));
  } else {
    latitude = sessionStorage.getItem('lat');
    longitude = sessionStorage.getItem('lng');
  }
  const langNum = getLangNum();
  const lati = dictionary.lat[langNum];
  const long = dictionary.lng[langNum];
  latitudeTxt.innerText = `${lati}: ${latitude}`;
  longitudeTxt.innerText = `${long}: ${longitude}`;
}

export default insertCoords;
