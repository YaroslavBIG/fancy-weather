import mapboxgl from 'mapbox-gl';
import { mapBox } from '../../api/_keys';
import insertCoords from '../_coords';
import getWeather from '../../api/_openWeather';
import getLocByCoords from '../../api/_openCage';
import dictionary from '../../transl/_dictionary';
import getLangNum from '../../utils/_getLangNum';

function addMap(lat, lng) {
  const langStor = localStorage.getItem('lang');
  mapboxgl.accessToken = mapBox;
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      attributionControl: false,
      logoPosition: 'top-left',
    }),
  );

  map.addControl(new mapboxgl.NavigationControl());
  const langNum = getLangNum();
  const placeholder = dictionary.placeholder[langNum];

  // eslint-disable-next-line no-undef
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl,
    language: langStor,
    placeholder,
  });
  map.on('load', () => {
    // Listen for the `geocoder.input` event that is triggered when a user
    // makes a selection
    geocoder.on('result', (ev) => {
      const res = ev.result;
      const long = res.geometry.coordinates[0];
      const lati = res.geometry.coordinates[1];
      sessionStorage.setItem('latitude', lati);
      sessionStorage.setItem('longitude', long);
      insertCoords('map');
      getWeather();
      getLocByCoords();
    });
  });

  const marker = new mapboxgl.Marker();
  marker.setLngLat([lng, lat]);
  marker.addTo(map);
  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
}

export default addMap;
