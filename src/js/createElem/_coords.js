import addMap from './map/_mapCreate';

function insertCoords(full = false) {
  const latitudeTxt = document.querySelector('.latitude');
  const longitudeTxt = document.querySelector('.longitude');
  let latitude;
  let longitude;
  if (!full) {
    latitude = parseFloat(sessionStorage.getItem('latitude'));
    longitude = parseFloat(sessionStorage.getItem('longitude'));
    addMap(latitude, longitude);
  } else {
    latitude = sessionStorage.getItem('lat');
    longitude = sessionStorage.getItem('lng');
  }
  latitudeTxt.innerText = `latitude: ${latitude}`;
  longitudeTxt.innerText = `longitude: ${longitude}`;
}

export default insertCoords;
