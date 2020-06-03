import insertCoords from '../../createElem/_coords';
import getWeather from '../../api/_openWeather';
import addMap from '../../createElem/map/_mapCreate';

function refreshData(lat, lng) {
  insertCoords(true);
  getWeather(true);
  addMap(lat, lng, true);
}

export default refreshData;
