import getWeather from '../api/_openWeather';
import getLocByCoords from '../api/_openCage';
import getLangNum from '../utils/data/_getLangNum';
import dictionary from './_dictionary';

function translateElements() {
  const langNum = getLangNum();
  const placeholder = dictionary.placeholder[langNum];
  const inputSearch = document.querySelector('.mapboxgl-ctrl-geocoder--input');
  getLocByCoords(true);
  getWeather();
  inputSearch.placeholder = placeholder;
}

export default translateElements;
