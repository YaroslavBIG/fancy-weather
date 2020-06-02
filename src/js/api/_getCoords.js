import getLocByIp from './_getLocByIp';
import insertCoords from '../createElem/_coords';
import getLocByCoords from './_openCage';
import getWeather from './_openWeather';
import addMap from '../createElem/map/_mapCreate';

function geoLoc() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    const { latitude } = crd;
    const { longitude } = crd;
    sessionStorage.setItem('latitude', latitude);
    sessionStorage.setItem('longitude', longitude);
    insertCoords();
    addMap(latitude, longitude);
    getWeather();
    getLocByCoords();
  }

  function error() {
    sessionStorage.setItem('latitude', 'not received');
    sessionStorage.setItem('longitude', 'not received');
    getLocByIp();
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

export default geoLoc;
